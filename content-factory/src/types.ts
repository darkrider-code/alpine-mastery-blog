export const SUPPORTED_LOCALES = ["sv", "en", "no", "da", "fi", "de", "fr", "nl"] as const;
export type Locale = typeof SUPPORTED_LOCALES[number];
export type Channel = "instagram" | "x" | "facebook" | "reddit" | "paid_social";
export type QueueStatus = "draft" | "needs_review" | "approved" | "published";

export interface Article {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  body: string;
}

export interface Claim {
  field: string;
  sentence: string;
  passage: string;
}

export interface CarouselDraft {
  slides: string[];
  caption: string;
  hashtags: string[];
}

export interface ReelDraft {
  hook: string;
  beats: string[];
  onScreenText: string[];
  spokenCta: string;
}

export interface AdVariant {
  headline: string;
  primaryText: string;
  audience: "adult" | "parent";
}

export interface DraftPayload {
  carousel: CarouselDraft;
  reel: ReelDraft;
  xPost: string;
  xThread: string[];
  facebookGroupPost: {
    body: string;
    question: string;
  };
  redditPost: {
    title: string;
    body: string;
  } | null;
  adVariants: AdVariant[];
  claims: Claim[];
}

export interface ClaimCheck extends Claim {
  source: "article" | "config";
  supported: boolean;
  reason: string;
  checkedPassage: string;
}

export interface QueueItem {
  id: string;
  channel: Channel;
  locale: Locale;
  status: QueueStatus;
  slug: string;
  text: string;
  fields: Record<string, string>;
  link: string;
  media_file: string;
  claims: ClaimCheck[];
  output_file: string;
  tokens: {
    input: number;
    output: number;
  };
}

export interface AppConfig {
  model: string;
  temperature: number;
  maxPosts: number;
  locales: Locale[];
  disclosures: Record<Locale, string>;
  bannedPhrases: string[];
  hypePhrases: string[];
}
