import type { Channel, Locale } from "./types.js";

const ARTICLE_BASE = "https://blog.masteryhub.se";
const AD_BASE = "https://alpine.masteryhub.se/free-analysis";

type LinkInput =
  | {
      kind: "article";
      slug: string;
      locale: Locale;
      channel: Channel;
      variant?: string;
    }
  | {
      kind: "ad";
      slug: string;
      channel: Channel;
      variant: string;
      audience?: "adult" | "parent";
    };

export function buildLink(input: LinkInput): string {
  if (input.kind === "article") {
    if (input.variant === "adult" || input.variant === "parent") {
      throw new Error("Audience labels are reserved for intro ad variants.");
    }
    const url = new URL(`/${encodeURIComponent(input.locale)}/${encodeURIComponent(input.slug)}`, ARTICLE_BASE);
    url.searchParams.set("utm_source", input.channel);
    url.searchParams.set("utm_medium", "social");
    url.searchParams.set("utm_campaign", input.slug);
    url.searchParams.set("utm_content", input.variant ?? "organic");
    return url.toString();
  }
  if (!/^v(?:0[1-9]|10)$/.test(input.variant) && input.variant !== "intro") {
    throw new Error(`Invalid ad variant: ${input.variant}`);
  }
  if (input.variant === "intro" && !input.audience) {
    throw new Error("Intro ad links require an audience.");
  }
  const url = new URL(AD_BASE);
  url.searchParams.set("utm_source", input.channel);
  url.searchParams.set("utm_medium", "paid_social");
  url.searchParams.set("utm_campaign", input.slug);
  url.searchParams.set("utm_content", input.variant === "intro" ? input.audience ?? "" : input.variant);
  return url.toString();
}
