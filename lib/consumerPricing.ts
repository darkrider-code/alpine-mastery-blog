export const BASE_MONTHLY_SEK = 199;

// Retained estimates from existing app currency.ts (May 2026), inspected 2026-10-17.
// Not live market rates. Daniel must review the rate date, values and rounding.
// English defaults to USD; an English visitor may instead need GBP.
export const SEK_RATES = { SEK: 1, NOK: 1.02, DKK: 0.69, EUR: 0.087, USD: 0.094, GBP: 0.074 } as const;
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
    "NOK",
    "nb-NO",
    "måned",
    "Du betaler i SEK. Andre valutaer er omtrentlige."
  ],
  "da": [
    "DKK",
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
