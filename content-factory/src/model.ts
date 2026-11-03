import Anthropic from "@anthropic-ai/sdk";
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

const client = () => {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY is required for model-backed commands.");
  return new Anthropic({ apiKey });
};

export async function structuredCall<T>(
  config: AppConfig,
  toolName: string,
  toolDescription: string,
  schema: ToolSchema,
  system: string,
  prompt: string,
  maxTokens = 8000,
): Promise<ModelResult<T>> {
  const response = await client().messages.create({
    model: config.model,
    max_tokens: maxTokens,
    temperature: config.temperature,
    system,
    messages: [{ role: "user", content: prompt }],
    tools: [{ name: toolName, description: toolDescription, input_schema: schema }],
    tool_choice: { type: "tool", name: toolName },
  });
  const result = response.content.find((item) => item.type === "tool_use");
  if (!result || result.type !== "tool_use") throw new Error(`Model did not return ${toolName}.`);
  return {
    value: result.input as T,
    usage: { input: response.usage.input_tokens, output: response.usage.output_tokens },
  };
}
