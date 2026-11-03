import type { AppConfig, DraftPayload, Locale } from "./types.js";

export interface ValidationIssue {
  field: string;
  message: string;
}

export function countWords(value: string): number {
  return value.trim().split(/\s+/u).filter(Boolean).length;
}

export function countXCharacters(value: string): number {
  return value.replace(/https?:\/\/\S+/gu, "x".repeat(23)).length;
}

export function validateText(value: string, config: AppConfig, field: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  if (value.includes("!")) issues.push({ field, message: "Exclamation marks are not allowed." });
  if (/^(?:AI\b|artificial intelligence\b)/iu.test(value.trim())) {
    issues.push({ field, message: "Do not lead with AI." });
  }
  if (/\b(?:guarantee(?:d|s)?|will improve(?: your \S+)?|will (?:make|help|ensure) you (?:ski|perform|improve))\b/iu.test(value)) {
    issues.push({ field, message: "Performance guarantees are not allowed." });
  }
  if (/https?:\/\/\S+|\[[^\]]+\]\((?:https?:\/\/|\/)[^)]+\)/iu.test(value)) {
    issues.push({ field, message: "Links must be added with the shared link builder." });
  }
  for (const phrase of [...config.bannedPhrases, ...config.hypePhrases]) {
    if (value.toLocaleLowerCase().includes(phrase.toLocaleLowerCase())) {
      issues.push({ field, message: `Contains banned phrase: ${phrase}` });
    }
  }
  return issues;
}

export function validateDraft(
  draft: DraftPayload,
  locale: Locale,
  disclosure: string,
  config: AppConfig,
  link: string,
  threadLinks: string[],
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  if (draft.carousel.slides.length !== 7) issues.push({ field: "carousel.slides", message: "Carousel must have 7 slides." });
  draft.carousel.slides.forEach((slide, index) => {
    if (countWords(slide) > 25) issues.push({ field: `carousel.slides[${index}]`, message: "Slide exceeds 25 words." });
    issues.push(...validateText(slide, config, `carousel.slides[${index}]`));
  });
  if (`${draft.carousel.caption}\n\nRead more: ${link}`.length > 1500) {
    issues.push({ field: "carousel.caption", message: "Caption with its article link exceeds 1,500 characters." });
  }
  if (draft.carousel.hashtags.length < 8 || draft.carousel.hashtags.length > 10) {
    issues.push({ field: "carousel.hashtags", message: "Use 8 to 10 hashtags." });
  }
  draft.carousel.hashtags.forEach((hashtag, index) => {
    if (!/^#\S+$/u.test(hashtag)) {
      issues.push({ field: `carousel.hashtags[${index}]`, message: "Each hashtag must be one # prefixed tag." });
    }
    issues.push(...validateText(hashtag, config, `carousel.hashtags[${index}]`));
  });
  issues.push(...validateText(draft.carousel.caption, config, "carousel.caption"));

  if (draft.reel.beats.length !== 3) issues.push({ field: "reel.beats", message: "Reel must have three beats." });
  const reelWords = countWords([draft.reel.hook, ...draft.reel.beats, draft.reel.spokenCta].join(" "));
  if (reelWords < 40 || reelWords > 75) issues.push({ field: "reel", message: "Spoken script should be approximately 20–30 seconds (40–75 words)." });
  if (!/link in bio/iu.test(draft.reel.spokenCta)) issues.push({ field: "reel.spokenCta", message: 'Spoken CTA must say "link in bio".' });
  for (const [field, value] of Object.entries({
    "reel.hook": draft.reel.hook,
    "reel.spokenCta": draft.reel.spokenCta,
    ...Object.fromEntries(draft.reel.beats.map((text, index) => [`reel.beats[${index}]`, text])),
    ...Object.fromEntries(draft.reel.onScreenText.map((text, index) => [`reel.onScreenText[${index}]`, text])),
  })) issues.push(...validateText(value, config, field));

  const xPost = `${draft.xPost.trim()}\n\n${disclosure}\n${link}`;
  if (!xPost.includes(disclosure)) issues.push({ field: "xPost", message: "X post must include the disclosure." });
  if (countXCharacters(xPost) > 280) issues.push({ field: "xPost", message: "X post exceeds 280 characters counting URLs as 23." });
  issues.push(...validateText(draft.xPost, config, "xPost"));

  draft.xThread.forEach((post, index) => {
    const isLast = index === draft.xThread.length - 1;
    const value = isLast
      ? `${index + 1}/${draft.xThread.length} ${post.trim()}\n\n${disclosure}\n${threadLinks[index]}`
      : `${index + 1}/${draft.xThread.length} ${post}`;
    if (countXCharacters(value) > 280) issues.push({ field: `xThread[${index}]`, message: "Thread post exceeds 280 characters counting URLs as 23." });
    issues.push(...validateText(post, config, `xThread[${index}]`));
  });
  if (draft.xThread.length < 2) issues.push({ field: "xThread", message: "X thread must contain at least two posts." });

  if (!draft.facebookGroupPost.question.trim().endsWith("?")) {
    issues.push({ field: "facebookGroupPost.question", message: "Facebook post must end with a question." });
  }
  issues.push(...validateText(draft.facebookGroupPost.body, config, "facebookGroupPost.body"));
  issues.push(...validateText(draft.facebookGroupPost.question, config, "facebookGroupPost.question"));

  if (locale === "en" && !draft.redditPost) issues.push({ field: "redditPost", message: "English drafts require a Reddit post." });
  if (locale !== "en" && draft.redditPost) issues.push({ field: "redditPost", message: "Reddit output is English-only." });
  if (draft.redditPost) {
    issues.push(...validateText(draft.redditPost.title, config, "redditPost.title"));
    issues.push(...validateText(draft.redditPost.body, config, "redditPost.body"));
  }

  if (draft.adVariants.length !== 10) issues.push({ field: "adVariants", message: "Exactly 10 ad variants are required." });
  draft.adVariants.forEach((variant, index) => {
    if (variant.headline.length > 40) issues.push({ field: `adVariants[${index}].headline`, message: "Headline exceeds 40 characters." });
    if (variant.primaryText.length > 125) issues.push({ field: `adVariants[${index}].primaryText`, message: "Primary text exceeds 125 characters." });
    if (variant.audience !== "adult" && variant.audience !== "parent") {
      issues.push({ field: `adVariants[${index}].audience`, message: "Audience must be adult or parent." });
    }
    if (/\b(?:\d{1,2}[- ]year[- ]old|age[d ]+\d{1,2}|my (?:son|daughter|child) \w+)\b/iu.test(`${variant.headline} ${variant.primaryText}`)) {
      issues.push({ field: `adVariants[${index}]`, message: "Do not identify or specify the age of a minor." });
    }
    issues.push(...validateText(variant.headline, config, `adVariants[${index}].headline`));
    issues.push(...validateText(variant.primaryText, config, `adVariants[${index}].primaryText`));
  });
  return issues;
}

export function validateClaimShape(value: unknown): boolean {
  if (!Array.isArray(value)) return false;
  return value.every((claim) =>
    claim !== null &&
    typeof claim === "object" &&
    typeof claim.field === "string" &&
    typeof claim.sentence === "string" &&
    typeof claim.passage === "string" &&
    (claim.source === "article" || claim.source === "config") &&
    typeof claim.supported === "boolean" &&
    typeof claim.reason === "string" &&
    typeof claim.checkedPassage === "string",
  );
}

export function validateClaimsDocument(value: unknown): boolean {
  if (!value || typeof value !== "object") return false;
  const document = value as Record<string, unknown>;
  return (document.status === "draft" || document.status === "needs_review") &&
    validateClaimShape(document.claims) &&
    Array.isArray(document.missingClaims) &&
    document.missingClaims.every((claim) => typeof claim === "string") &&
    Array.isArray(document.validationIssues) &&
    document.validationIssues.every((issue) =>
      issue !== null && typeof issue === "object" &&
      typeof issue.field === "string" && typeof issue.message === "string",
    );
}

export function formatFacebookPost(body: string, disclosure: string, question: string): string {
  return `${body.trim()}\n\n${disclosure}\n\n${question.trim()}`;
}
