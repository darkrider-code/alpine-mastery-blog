const ogLocales: Record<string, string> = {
  sv: "sv_SE",
  en: "en_US",
  no: "nb_NO",
  da: "da_DK",
  fi: "fi_FI",
  de: "de_DE",
  fr: "fr_FR",
  nl: "nl_NL",
};
export function getOpenGraphLocale(locale: string) { return ogLocales[locale] ?? ogLocales.sv; }
