export const CAMPAIGN_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
export function campaignSearch(search: string): string {
  const incoming = new URLSearchParams(search);
  const kept = new URLSearchParams();
  for (const key of CAMPAIGN_KEYS) { const value = incoming.get(key); if (value) kept.set(key, value.slice(0, 200)); }
  return kept.toString();
}
export function buildAppLink(base: string, context: { search: string; locale: string; slug: string; placement: string }): string {
  const url = new URL(base);
  if (url.protocol !== "https:") return base;
  const incoming = new URLSearchParams(context.search);
  for (const key of CAMPAIGN_KEYS) { const value = incoming.get(key); if (value) url.searchParams.set(key, value.slice(0, 200)); }
  if (!url.searchParams.has("utm_source")) url.searchParams.set("utm_source", "masteryhub_blog");
  if (!url.searchParams.has("utm_medium")) url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("blog_slug", context.slug.slice(0, 200));
  url.searchParams.set("blog_placement", context.placement.slice(0, 80));
  url.searchParams.set("blog_locale", context.locale);
  url.searchParams.set("lang", context.locale);
  return url.toString();
}
