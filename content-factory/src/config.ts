import { readFile } from "node:fs/promises";
import { SUPPORTED_LOCALES, type AppConfig, type Locale } from "./types.js";
import { CONFIG_PATH } from "./paths.js";

function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

export async function readConfig(): Promise<AppConfig> {
  const parsed: unknown = JSON.parse(await readFile(CONFIG_PATH, "utf8"));
  if (!parsed || typeof parsed !== "object") throw new Error("config.json must contain an object.");
  const value = parsed as Record<string, unknown>;
  if (!Array.isArray(value.locales) ||
      typeof value.disclosures !== "object" || value.disclosures === null ||
      !Array.isArray(value.bannedPhrases) || !Array.isArray(value.hypePhrases)) {
    throw new Error("config.json is missing locales, channels, disclosures, or phrase lists.");
  }
  const locales = value.locales.filter(isLocale);
  const disclosures = value.disclosures as Record<string, unknown>;
  const bannedPhrases = value.bannedPhrases.filter(isString);
  const hypePhrases = value.hypePhrases.filter(isString);
  if (locales.length !== value.locales.length ||
      typeof value.model !== "string" || typeof value.temperature !== "number" ||
      typeof value.maxPosts !== "number" ||
      bannedPhrases.length !== value.bannedPhrases.length || hypePhrases.length !== value.hypePhrases.length) {
    throw new Error("config.json contains invalid model, locale, channel, URL, or phrase-list values.");
  }
  const localizedDisclosures = locales.map((locale) => {
    const disclosure = disclosures[locale];
    if (typeof disclosure !== "string" || !disclosure.trim()) throw new Error(`Missing disclosure for locale ${locale}.`);
    return [locale, disclosure] as const;
  });
  const config: AppConfig = {
    model: value.model,
    temperature: value.temperature,
    maxPosts: value.maxPosts,
    locales,
    disclosures: Object.fromEntries(localizedDisclosures) as Record<Locale, string>,
    bannedPhrases,
    hypePhrases,
  };
  if (!config.model || !Number.isFinite(config.temperature) || config.temperature < 0 || config.temperature > 1) {
    throw new Error("config.json must define a model and a temperature from 0 to 1.");
  }
  if (!Number.isInteger(config.maxPosts) || config.maxPosts < 1) throw new Error("config.json maxPosts must be positive.");
  return config;
}
