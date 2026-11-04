import type { AppConfig } from "./types.js";

export interface TokenUsage {
  input: number;
  output: number;
}

export interface ModelResult<T> {
  value: T;
  usage: TokenUsage;
}

export interface ToolSchema {
  type: "object";
  [key: string]: unknown;
}

interface GeminiFunctionCall {
  name?: unknown;
  args?: unknown;
}

interface GeminiResponse {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        functionCall?: GeminiFunctionCall;
      }>;
    };
  }>;
  usageMetadata?: {
    promptTokenCount?: number;
    candidatesTokenCount?: number;
  };
}

export function toGeminiSchema(schema: Record<string, unknown>): Record<string, unknown> {
  const alternatives = Array.isArray(schema.anyOf) ? schema.anyOf as Array<Record<string, unknown>> : undefined;
  const nonNullAlternative = alternatives?.find((item) => item.type !== "null");
  const source = nonNullAlternative ?? schema;
  const typeMap: Record<string, string> = {
    object: "OBJECT",
    array: "ARRAY",
    string: "STRING",
    integer: "INTEGER",
    number: "NUMBER",
    boolean: "BOOLEAN",
  };
  const output: Record<string, unknown> = {};
  if (typeof source.type === "string" && typeMap[source.type]) output.type = typeMap[source.type];
  if (source.description !== undefined) output.description = source.description;
  if (source.enum !== undefined) output.enum = source.enum;
  if (source.required !== undefined) output.required = source.required;
  if (source.properties && typeof source.properties === "object") {
    output.properties = Object.fromEntries(
      Object.entries(source.properties).map(([key, property]) => [
        key,
        toGeminiSchema(property as Record<string, unknown>),
      ]),
    );
  }
  if (source.items && typeof source.items === "object") {
    output.items = toGeminiSchema(source.items as Record<string, unknown>);
  }
  for (const key of ["minimum", "maximum", "minItems", "maxItems"]) {
    if (source[key] !== undefined) output[key] = source[key];
  }
  if (source.nullable === true || alternatives?.some((item) => item.type === "null")) {
    output.nullable = true;
  }
  return output;
}

export async function structuredCall<T>(
  config: AppConfig,
  toolName: string,
  toolDescription: string,
  schema: ToolSchema,
  system: string,
  prompt: string,
  maxTokens = 8000,
): Promise<ModelResult<T>> {
  const apiKey = process.env.Content_Factory_Gemini_API_Key;
  if (!apiKey) {
    throw new Error("Content_Factory_Gemini_API_Key is required for Gemini-backed commands.");
  }
  const endpoint = new URL(
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(config.model)}:generateContent`,
  );
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      tools: [{
        functionDeclarations: [{
          name: toolName,
          description: toolDescription,
          parameters: toGeminiSchema(schema),
        }],
      }],
      toolConfig: {
        functionCallingConfig: {
          mode: "ANY",
          allowedFunctionNames: [toolName],
        },
      },
      generationConfig: {
        temperature: config.temperature,
        maxOutputTokens: maxTokens,
      },
    }),
  });
  if (!response.ok) {
    throw new Error(`Gemini request failed with HTTP ${response.status}. Check the model, API key, and Gemini API access.`);
  }
  const data = await response.json() as GeminiResponse;
  const functionCall = data.candidates?.[0]?.content?.parts
    ?.map((part) => part.functionCall)
    .find((call) => call?.name === toolName);
  if (!functionCall || typeof functionCall.args !== "object" || functionCall.args === null) {
    throw new Error(`Gemini did not return the expected ${toolName} function call.`);
  }
  return {
    value: functionCall.args as T,
    usage: {
      input: data.usageMetadata?.promptTokenCount ?? 0,
      output: data.usageMetadata?.candidatesTokenCount ?? 0,
    },
  };
}
