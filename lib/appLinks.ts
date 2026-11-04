export const CAMPAIGN_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
export function campaignSearch(search: string): string {
  const incoming = new URLSearchParams(search);
  const kept = new URLSearchParams();
  for (const key of CAMPAIGN_KEYS) { const value = incoming.get(key); if (value) kept.set(key, value.slice(0, 200)); }
  return kept.toString();
}
export function buildAppLink(base: string, context: { search: string; locale: string; slug: string; placement: string; campaign?: "partner" }): string {
  const url = new URL(base);
  if (url.protocol !== "https:") return base;
  const incoming = new URLSearchParams(context.search);
  for (const key of CAMPAIGN_KEYS) { const value = incoming.get(key); if (value) url.searchParams.set(key, value.slice(0, 200)); }
  if (context.campaign === "partner") {
    url.searchParams.set("utm_source", "blog");
    url.searchParams.set("utm_medium", "referral");
    url.searchParams.set("utm_campaign", "partner");
  }
  if (!url.searchParams.has("utm_source")) url.searchParams.set("utm_source", "masteryhub_blog");
  if (!url.searchParams.has("utm_medium")) url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("blog_slug", context.slug.slice(0, 200));
  url.searchParams.set("blog_placement", context.placement.slice(0, 80));
  url.searchParams.set("blog_locale", context.locale);
  url.searchParams.set("lang", context.locale);
  return url.toString();
}

export const PARTNER_CHANNELS = ["lesson_handout", "email", "social", "qr_print"] as const;
export type PartnerChannel = typeof PARTNER_CHANNELS[number];

export function partnerSlug(name: string): string {
  return name.trim().toLowerCase().replace(/ß/g, "ss").replace(/æ/g, "ae")
    .replace(/œ/g, "oe").replace(/ø/g, "o").normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function isPartnerSlug(value: string): boolean {
  return value.length <= 64 && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

export function buildPartnerLink(slug: string, channel: PartnerChannel, audience: "adult" | "parent"): string {
  if (!isPartnerSlug(slug)) throw new Error("Invalid partner slug.");
  if (!(PARTNER_CHANNELS as readonly string[]).includes(channel)) throw new Error("Invalid partner channel.");
  if (audience !== "adult" && audience !== "parent") throw new Error("Invalid partner audience.");
  const url = new URL("https://alpine.masteryhub.se/free-analysis");
  url.search = new URLSearchParams({
    utm_source: "partner", utm_medium: channel, utm_campaign: slug, utm_content: audience,
  }).toString();
  return url.toString();
}

export function buildPartnerContactLink(): string {
  return "https://alpine.masteryhub.se/contact?utm_source=blog&utm_medium=referral&utm_campaign=partner";
}
