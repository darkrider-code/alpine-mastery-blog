import translations from "./translations.json";

// To add another language later, add a new locale entry to the JSON file and extend the languages list below.
export const DEFAULT_LOCALE = "sv";

export const LANGUAGE_OPTIONS = [
  { code: "sv", label: "Svenska", nativeName: "Svenska" },
  { code: "en", label: "English", nativeName: "English" },
  { code: "no", label: "Norsk", nativeName: "Norsk" },
  { code: "da", label: "Dansk", nativeName: "Dansk" },
  { code: "fi", label: "Suomi", nativeName: "Suomi" },
  { code: "de", label: "Deutsch", nativeName: "Deutsch" },
  { code: "fr", label: "Français", nativeName: "Français" },
  { code: "es", label: "Español", nativeName: "Español" },
] as const;

export type SupportedLocale = (typeof LANGUAGE_OPTIONS)[number]["code"];

export const dictionary = translations as Record<string, Record<string, unknown>>;

export function getTranslationForLocale(locale: string, key: string) {
  const localeDictionary = dictionary[locale] ?? dictionary[DEFAULT_LOCALE];
  return key.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, localeDictionary) as string | undefined;
}

export function getLocaleLabel(code: string) {
  return LANGUAGE_OPTIONS.find((option) => option.code === code)?.label ?? code;
}
