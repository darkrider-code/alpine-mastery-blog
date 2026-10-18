export const BASE_MONTHLY_SEK = 199;

// Approximate local units per 1 SEK: SEK=1, NOK=1.02, DKK=0.69, EUR=0.087, USD=0.094, GBP=0.074.
// Retained May 2026 estimates (2026-05); exact source day was not recorded.
// Inspected 2026-10-17, not live rates. Rates, date and rounding must be reviewed by Daniel before release.
// Display policy: Swedish uses SEK, English uses USD; all other supported languages use EUR.
export const SEK_RATES = { SEK: 1, NOK: 1.02, DKK: 0.69, EUR: 0.087, USD: 0.094, GBP: 0.074 } as const;
export const SEK_RATE_DATE = "2026-05";
export type ConsumerCurrency = keyof typeof SEK_RATES;
const locales: Record<string, readonly [ConsumerCurrency, string, string, string]> = {
  "sv": [
    "SEK",
    "sv-SE",
    "mån",
    "Beloppet debiteras i SEK. Andra valutor är ungefärliga."
  ],
  "en": [
    "USD",
    "en-US",
    "month",
    "Billing is in SEK. Other currencies are approximate."
  ],
  "no": [
    "EUR",
    "nb-NO",
    "måned",
    "Du betaler i SEK. Andre valutaer er omtrentlige."
  ],
  "da": [
    "EUR",
    "da-DK",
    "måned",
    "Du betaler i SEK. Andre valutaer er omtrentlige."
  ],
  "fi": [
    "EUR",
    "fi-FI",
    "kk",
    "Veloitus tehdään Ruotsin kruunuina (SEK). Muut valuutat ovat arvioita."
  ],
  "de": [
    "EUR",
    "de-DE",
    "Monat",
    "Die Abrechnung erfolgt in SEK. Andere Währungen sind Näherungswerte."
  ],
  "fr": [
    "EUR",
    "fr-FR",
    "mois",
    "La facturation est en SEK. Les autres devises sont indicatives."
  ],
  "nl": [
    "EUR",
    "nl-NL",
    "maand",
    "Je betaalt in SEK. Andere valuta zijn bij benadering."
  ],
  "es": [
    "EUR",
    "es-ES",
    "mes",
    "El cobro se realiza en SEK. Las demás monedas son aproximadas."
  ]
};
export const MONTHLY_AMOUNTS = Object.fromEntries(
  Object.entries(SEK_RATES).map(([currency, rate]) => [currency, Math.round(BASE_MONTHLY_SEK * rate)])
) as Record<ConsumerCurrency, number>;
export function consumerPricing(locale: string) { return locales[locale] ?? locales.en; }
export function formatConsumerPrice(amountSEK: number, locale: string, currency?: ConsumerCurrency): string {
  const [defaultCurrency, intlLocale] = consumerPricing(locale);
  const selected = currency ?? defaultCurrency;
  const amount = Math.round(amountSEK * SEK_RATES[selected]);
  const formatted = new Intl.NumberFormat(intlLocale, { style: "currency", currency: selected, maximumFractionDigits: 0 }).format(amount);
  return selected === "SEK" ? formatted : `≈ ${formatted} (${amountSEK.toLocaleString(intlLocale)} SEK)`;
}

export const CLUB_PRICES_SEK = {
  small: { monthly: 1190, yearly: 7140, capacity: 10 },
  pro: { monthly: 3990, yearly: 23940, capacity: 50 },
  unlimited: { monthly: 9990, yearly: 59940, capacity: null },
} as const;

export type ClubPlanId = keyof typeof CLUB_PRICES_SEK;
export type ClubBillingPeriod = "monthly" | "yearly";
export type ClubCurrency = "SEK" | "USD" | "NOK" | "DKK" | "EUR";

const CLUB_LOCALE_SETTINGS: Record<string, {
  currency: ClubCurrency;
  intlLocale: string;
  approximate: string;
  monthlyUnit: string;
  yearlyUnit: string;
  note: string;
}> = {
  sv: { currency: "SEK", intlLocale: "sv-SE", approximate: "", monthlyUnit: "mån", yearlyUnit: "år", note: `Priserna debiteras i SEK. Beloppen inom parentes är ungefärliga och baseras på växelkurser per ${SEK_RATE_DATE}.` },
  en: { currency: "USD", intlLocale: "en-US", approximate: "≈", monthlyUnit: "mo", yearlyUnit: "yr", note: `Prices are billed in SEK. Amounts in parentheses are approximate and based on exchange rates as of ${SEK_RATE_DATE}.` },
  no: { currency: "NOK", intlLocale: "nb-NO", approximate: "ca.", monthlyUnit: "mnd", yearlyUnit: "år", note: `Prisene faktureres i SEK. Beløpene i parentes er omtrentlige og basert på valutakurser per ${SEK_RATE_DATE}.` },
  da: { currency: "DKK", intlLocale: "da-DK", approximate: "ca.", monthlyUnit: "md.", yearlyUnit: "år", note: `Priserne faktureres i SEK. Beløbene i parentes er omtrentlige og baseret på valutakurser pr. ${SEK_RATE_DATE}.` },
  fi: { currency: "EUR", intlLocale: "fi-FI", approximate: "≈", monthlyUnit: "kk", yearlyUnit: "v", note: `Hinnat veloitetaan SEK-valuutassa. Suluissa olevat summat ovat suuntaa-antavia ja perustuvat ${SEK_RATE_DATE} valuuttakursseihin.` },
  de: { currency: "EUR", intlLocale: "de-DE", approximate: "ca.", monthlyUnit: "Monat", yearlyUnit: "Jahr", note: `Die Preise werden in SEK abgerechnet. Beträge in Klammern sind Näherungswerte auf Basis der Wechselkurse vom ${SEK_RATE_DATE}.` },
  fr: { currency: "EUR", intlLocale: "fr-FR", approximate: "≈", monthlyUnit: "mois", yearlyUnit: "an", note: `Les prix sont facturés en SEK. Les montants entre parenthèses sont indicatifs et basés sur les taux de change de ${SEK_RATE_DATE}.` },
  nl: { currency: "EUR", intlLocale: "nl-NL", approximate: "≈", monthlyUnit: "maand", yearlyUnit: "jaar", note: `De prijzen worden in SEK gefactureerd. Bedragen tussen haakjes zijn bij benadering en gebaseerd op wisselkoersen van ${SEK_RATE_DATE}.` },
};

function roundClubAmount(amount: number): number {
  return amount >= 100 ? Math.round(amount / 5) * 5 : Math.round(amount);
}

export function clubPricing(locale: string) {
  return CLUB_LOCALE_SETTINGS[locale] ?? CLUB_LOCALE_SETTINGS.en;
}

function formatClubCurrency(amount: number, locale: string): string {
  const settings = clubPricing(locale);
  const rounded = roundClubAmount(amount * SEK_RATES[settings.currency]);
  const formatted = new Intl.NumberFormat(settings.intlLocale, { maximumFractionDigits: 0 }).format(rounded);
  return settings.currency === "NOK" || settings.currency === "DKK"
    ? `${formatted} ${settings.currency}`
    : new Intl.NumberFormat(settings.intlLocale, { style: "currency", currency: settings.currency, maximumFractionDigits: 0 }).format(rounded);
}

export function formatClubPrice(plan: ClubPlanId, period: ClubBillingPeriod, locale: string): string {
  const settings = clubPricing(locale);
  const amountSEK = CLUB_PRICES_SEK[plan][period];
  const amount = new Intl.NumberFormat(settings.intlLocale, { maximumFractionDigits: 0 }).format(amountSEK);
  const unit = period === "monthly" ? settings.monthlyUnit : settings.yearlyUnit;
  const base = `${amount} SEK/${unit}`;
  return settings.currency === "SEK" ? base : `${base} (${settings.approximate} ${formatClubCurrency(amountSEK, locale)})`;
}

export function formatClubPerSkier(plan: Exclude<ClubPlanId, "unlimited">, period: ClubBillingPeriod, locale: string): string {
  const settings = clubPricing(locale);
  const price = CLUB_PRICES_SEK[plan][period] / CLUB_PRICES_SEK[plan].capacity;
  const amount = new Intl.NumberFormat(settings.intlLocale, { maximumFractionDigits: 0 }).format(price);
  const unit = period === "monthly" ? settings.monthlyUnit : settings.yearlyUnit;
  const skier = locale === "en" ? "skier" : locale === "no" ? "løper" : locale === "da" ? "atlet" : locale === "fi" ? "urheilija" : locale === "de" ? "Athlet" : locale === "fr" ? "athlète" : locale === "nl" ? "atleet" : "åkare";
  const base = `${amount} SEK / ${skier} / ${unit}`;
  return settings.currency === "SEK" ? base : `${base} (${settings.approximate} ${formatClubCurrency(price, locale)})`;
}
