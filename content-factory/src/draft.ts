import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { readArticle } from "./articles.js";
import { readConfig } from "./config.js";
import { QUEUE_PATH, FACTORY_ROOT } from "./paths.js";
import { renderOutputs, renderSlides } from "./render.js";
import { buildLink } from "./links.js";
import { structuredCall, type TokenUsage, type ToolSchema } from "./model.js";
import { validateDraft, type ValidationIssue } from "./validation.js";
import type { AppConfig, Claim, ClaimCheck, DraftPayload, Locale, QueueItem } from "./types.js";

const draftSchema: ToolSchema = {
  type: "object",
  additionalProperties: false,
  required: ["carousel", "reel", "xPost", "xThread", "facebookGroupPost", "redditPost", "adVariants", "claims"],
  properties: {
    carousel: {
      type: "object", additionalProperties: false, required: ["slides", "caption", "hashtags"],
      properties: {
        slides: { type: "array", minItems: 7, maxItems: 7, items: { type: "string" } },
        caption: { type: "string" },
        hashtags: { type: "array", minItems: 8, maxItems: 10, items: { type: "string" } },
      },
    },
    reel: {
      type: "object", additionalProperties: false, required: ["hook", "beats", "onScreenText", "spokenCta"],
      properties: {
        hook: { type: "string" },
        beats: { type: "array", minItems: 3, maxItems: 3, items: { type: "string" } },
        onScreenText: { type: "array", minItems: 3, items: { type: "string" } },
        spokenCta: { type: "string" },
      },
    },
    xPost: { type: "string" },
    xThread: { type: "array", minItems: 2, items: { type: "string" } },
    facebookGroupPost: {
      type: "object", additionalProperties: false, required: ["body", "question"],
      properties: { body: { type: "string" }, question: { type: "string" } },
    },
    redditPost: {
      anyOf: [
        {
          type: "object", additionalProperties: false, required: ["title", "body"],
          properties: { title: { type: "string" }, body: { type: "string" } },
        },
        { type: "null" },
      ],
    },
    adVariants: {
      type: "array", minItems: 10, maxItems: 10, items: {
        type: "object", additionalProperties: false, required: ["headline", "primaryText", "audience"],
        properties: {
          headline: { type: "string" },
          primaryText: { type: "string" },
          audience: { type: "string", enum: ["adult", "parent"] },
        },
      },
    },
    claims: {
      type: "array", items: {
        type: "object", additionalProperties: false, required: ["field", "sentence", "passage"],
        properties: { field: { type: "string" }, sentence: { type: "string" }, passage: { type: "string" } },
      },
    },
  },
};

const verificationSchema: ToolSchema = {
  type: "object", additionalProperties: false, required: ["claims", "missingClaims"],
  properties: {
    claims: {
      type: "array",
      items: {
        type: "object", additionalProperties: false,
        required: ["field", "sentence", "supported", "reason", "checkedPassage"],
        properties: {
          field: { type: "string" },
          sentence: { type: "string" },
          supported: { type: "boolean" },
          reason: { type: "string" },
          checkedPassage: { type: "string" },
        },
      },
    },
    missingClaims: { type: "array", items: { type: "string" } },
  },
};

interface VerificationResult {
  claims: Array<{
    field: string;
    sentence: string;
    supported: boolean;
    reason: string;
    checkedPassage: string;
  }>;
  missingClaims: string[];
}

interface DraftArguments {
  slug?: string;
  locales?: string;
  dryRun: boolean;
  maxPosts?: string;
}

function parseDraftArguments(args: string[]): DraftArguments {
  const parsed: DraftArguments = { dryRun: false };
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === "--dry-run") parsed.dryRun = true;
    else if (arg === "--slug") parsed.slug = args[++index];
    else if (arg === "--locales") parsed.locales = args[++index];
    else if (arg === "--max-posts") parsed.maxPosts = args[++index];
    else throw new Error(`Unknown draft option: ${arg}`);
  }
  if (!parsed.slug) throw new Error("Usage: npm run draft -- --slug <slug> --locales en,sv [--dry-run] [--max-posts N]");
  return parsed;
}

function roughTokens(value: string): number {
  return Math.ceil(value.length / 4);
}

function asDraftPayload(value: DraftPayload): DraftPayload {
  if (!value || !Array.isArray(value.carousel?.slides) || !Array.isArray(value.reel?.beats) ||
      !Array.isArray(value.xThread) || !Array.isArray(value.adVariants) || !Array.isArray(value.claims) ||
      !value.facebookGroupPost || typeof value.xPost !== "string") {
    throw new Error("The model returned a malformed draft payload.");
  }
  return value;
}

function removeModelLinks(draft: DraftPayload): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const strip = (value: string, field: string): string => {
    const cleaned = value
      .replace(/\[([^\]]+)\]\((?:https?:\/\/|\/)[^)]+\)/giu, "$1")
      .replace(/https?:\/\/\S+/giu, "")
      .replace(/(^|\s)\/(?:sv|en|no|da|fi|de|fr|nl)\/[^\s)]+/giu, "$1")
      .trim();
    if (cleaned !== value.trim()) {
      issues.push({ field, message: "Removed a model-generated link; output links are built locally." });
    }
    return cleaned;
  };
  draft.carousel.slides = draft.carousel.slides.map((text, index) => strip(text, `carousel.slides[${index}]`));
  draft.carousel.caption = strip(draft.carousel.caption, "carousel.caption");
  draft.reel.hook = strip(draft.reel.hook, "reel.hook");
  draft.reel.beats = draft.reel.beats.map((text, index) => strip(text, `reel.beats[${index}]`));
  draft.reel.onScreenText = draft.reel.onScreenText.map((text, index) => strip(text, `reel.onScreenText[${index}]`));
  draft.reel.spokenCta = strip(draft.reel.spokenCta, "reel.spokenCta");
  draft.xPost = strip(draft.xPost, "xPost");
  draft.xThread = draft.xThread.map((text, index) => strip(text, `xThread[${index}]`));
  draft.facebookGroupPost.body = strip(draft.facebookGroupPost.body, "facebookGroupPost.body");
  draft.facebookGroupPost.question = strip(draft.facebookGroupPost.question, "facebookGroupPost.question");
  if (draft.redditPost) {
    draft.redditPost.title = strip(draft.redditPost.title, "redditPost.title");
    draft.redditPost.body = strip(draft.redditPost.body, "redditPost.body");
  }
  draft.adVariants = draft.adVariants.map((variant, index) => ({
    ...variant,
    headline: strip(variant.headline, `adVariants[${index}].headline`),
    primaryText: strip(variant.primaryText, `adVariants[${index}].primaryText`),
  }));
  return issues;
}

function fieldText(draft: DraftPayload, field: string): string | undefined {
  const match = /^(carousel\.slides|reel\.beats|reel\.onScreenText|xThread|adVariants)\[(\d+)\]$/u.exec(field);
  if (match) {
    const index = Number(match[2]);
    if (match[1] === "carousel.slides") return draft.carousel.slides[index];
    if (match[1] === "reel.beats") return draft.reel.beats[index];
    if (match[1] === "reel.onScreenText") return draft.reel.onScreenText[index];
    if (match[1] === "xThread") return draft.xThread[index];
    return draft.adVariants[index] ? `${draft.adVariants[index].headline} ${draft.adVariants[index].primaryText}` : undefined;
  }
  if (field === "carousel.caption") return draft.carousel.caption;
  if (field === "reel.hook") return draft.reel.hook;
  if (field === "reel.spokenCta") return draft.reel.spokenCta;
  if (field === "xPost") return draft.xPost;
  if (field === "facebookGroupPost.body") return draft.facebookGroupPost.body;
  if (field === "facebookGroupPost.question") return draft.facebookGroupPost.question;
  if (field === "redditPost.title") return draft.redditPost?.title;
  if (field === "redditPost.body") return draft.redditPost?.body;
  return undefined;
}

function collectConfigClaims(draft: DraftPayload, disclosure: string): Claim[] {
  const claims = [...draft.claims];
  const occurrences: Array<[string, string | undefined]> = [
    ["facebookGroupPost.disclosure", disclosure],
    ["xPost.disclosure", disclosure],
    ["xThread.disclosure", disclosure],
    ["redditPost.disclosure", draft.redditPost ? disclosure : undefined],
  ];
  for (const [field, sentence] of occurrences) {
    if (sentence) claims.push({ field, sentence, passage: sentence });
  }
  return claims;
}

function verifyResults(
  generated: Claim[],
  result: VerificationResult,
  draft: DraftPayload,
  articleBody: string,
): { claims: ClaimCheck[]; missing: string[] } {
  const checks: ClaimCheck[] = [];
  for (const claim of generated) {
    const source = claim.field.endsWith(".disclosure") ? "config" : "article";
    const response = result.claims.find((entry) => entry.field === claim.field && entry.sentence === claim.sentence);
    const field = fieldText(draft, claim.field);
    const fieldContainsSentence = claim.field.endsWith(".disclosure") || Boolean(field?.includes(claim.sentence));
    const passageExists = source === "config" || (Boolean(claim.passage) && articleBody.includes(claim.passage));
    const supported = source === "config" || Boolean(response?.supported && passageExists && fieldContainsSentence);
    checks.push({
      ...claim,
      source,
      supported,
      reason: source === "config"
        ? "Disclosure is configured by the blog owner."
        : response?.reason ?? "No exact verification result was returned.",
      checkedPassage: source === "config" ? claim.passage : response?.checkedPassage ?? "",
    });
  }
  const missing = [
    ...result.missingClaims,
    ...result.claims.filter((entry) => !generated.some((claim) => claim.field === entry.field && claim.sentence === entry.sentence))
      .map((entry) => `Unmatched verifier claim in ${entry.field}: ${entry.sentence}`),
    ...generated.filter((claim) => !claim.field.endsWith(".disclosure") &&
      !result.claims.some((entry) => entry.field === claim.field && entry.sentence === claim.sentence))
      .map((claim) => `Claim not verified in ${claim.field}: ${claim.sentence}`),
  ];
  return { claims: checks, missing };
}

function estimateFor(articleBody: string, config: AppConfig, locale: Locale, prompts: [string, string]): number {
  return roughTokens(articleBody) + roughTokens(prompts[0]) + roughTokens(prompts[1]) + 3600 +
    roughTokens(config.disclosures[locale]);
}

function stableId(item: RenderedOutputItem): string {
  const key = `${item.slug}:${item.locale}:${item.channel}:${item.variant ?? ""}:${item.text}`;
  return createHash("sha256").update(key).digest("hex").slice(0, 16);
}

type RenderedOutputItem = Awaited<ReturnType<typeof renderOutputs>>["queue"][number];

async function loadQueue(): Promise<QueueItem[]> {
  try {
    const parsed: unknown = JSON.parse(await readFile(QUEUE_PATH, "utf8"));
    if (!Array.isArray(parsed)) throw new Error("queue.json must contain an array.");
    return parsed as QueueItem[];
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") return [];
    throw error;
  }
}

function makeDraftPrompt(article: Awaited<ReturnType<typeof readArticle>>, locale: Locale, config: AppConfig): string {
  return [
    `Locale: ${locale}`,
    `Article slug: ${article.slug}`,
    `Article title: ${article.title}`,
    `Article description: ${article.description}`,
    `Required local disclosure: ${config.disclosures[locale]}`,
    `Allowed article URL: ${buildLink({ kind: "article", slug: article.slug, locale, channel: "instagram" })}`,
    `Banned phrases: ${config.bannedPhrases.join(" | ")}`,
    `Hype phrases: ${config.hypePhrases.join(" | ")}`,
    "Produce exactly 7 carousel slides, 8-10 hashtags, a 20-30 second reel with 3 beats and spoken CTA 'link in bio', one X post, a 2-5 post X thread, one discussion-first Facebook post with a final question, an English Reddit post only for locale en, and 10 ad variants split between adult and parent audiences.",
    "Do not include the disclosure in generated body fields; the caller appends the exact configured disclosure to X, Facebook, and Reddit output. Keep enough room for the disclosure and link in the 280-character X limit.",
    "Write claims as exact individual sentences with field names such as carousel.slides[0], carousel.caption, reel.hook, reel.beats[0], xPost, facebookGroupPost.body, or adVariants[0]. Include the precise article passage that supports each claim.",
    "",
    "ARTICLE BODY:",
    article.body,
  ].join("\n");
}

export async function runDraft(args: string[]): Promise<void> {
  const options = parseDraftArguments(args);
  const config = await readConfig();
  const [draftPrompt, verifyPrompt] = await Promise.all([
    readFile(resolve(FACTORY_ROOT, "prompts", "draft.md"), "utf8"),
    readFile(resolve(FACTORY_ROOT, "prompts", "verify.md"), "utf8"),
  ]);
  const locales = (options.locales ?? config.locales.join(",")).split(",").map((locale) => locale.trim()).filter(Boolean) as Locale[];
  if (locales.length === 0) throw new Error("--locales must include at least one locale.");
  if (locales.some((locale) => !config.locales.includes(locale))) {
    throw new Error(`Unsupported locale list. Supported: ${config.locales.join(", ")}`);
  }
  if (new Set(locales).size !== locales.length) throw new Error("Locale list must not contain duplicates.");
  const limit = options.maxPosts === undefined ? config.maxPosts : Number(options.maxPosts);
  if (!Number.isInteger(limit) || limit < 1) throw new Error("--max-posts must be a positive integer.");
  const articles = await Promise.all(locales.map((locale) => readArticle(options.slug!, locale)));
  const selected = articles.slice(0, limit);
  const date = new Date().toISOString().slice(0, 10);
  if (options.dryRun) {
    const total = selected.reduce((sum, article) => sum + estimateFor(article.body, config, article.locale, [draftPrompt, verifyPrompt]), 0);
    console.log(`Dry run for ${selected.length} article/locale item(s).`);
    console.log(`Estimated tokens: approximately ${total.toLocaleString()} combined input+output tokens (article characters / 4 heuristic; two model calls per item).`);
    for (const article of selected) {
      console.log(`Would write: content-factory/out/${date}/${article.slug}/${article.locale}/`);
      console.log("  instagram_carousel.md, first_comment.md, instagram_reel_script.md, x_post.md, x_thread.md, facebook_group_post.md, ad_variants.csv, claims.json, slides/slide-01.png ... slide-07.png (if Playwright + Chromium are available)");
      if (article.locale === "en") console.log("  reddit_post.md");
    }
    console.log("Would update: content-factory/queue.json");
    return;
  }

  const queue = await loadQueue();
  let totalUsage: TokenUsage = { input: 0, output: 0 };
  const written: string[] = [];
  for (const article of selected) {
    const prompt = makeDraftPrompt(article, article.locale, config);
    const generated = await structuredCall<DraftPayload>(
      config, "submit_drafts", "Return all requested social drafts and source-mapped factual claims.", draftSchema,
      draftPrompt, prompt, 12000,
    );
    totalUsage = { input: totalUsage.input + generated.usage.input, output: totalUsage.output + generated.usage.output };
    const draft = asDraftPayload(generated.value);
    const linkRemovalIssues = removeModelLinks(draft);
    const claims = collectConfigClaims(draft, config.disclosures[article.locale]);
    const claimPrompt = [
      `ARTICLE BODY:\n${article.body}`,
      `\nDRAFT FIELDS:\n${JSON.stringify(draft)}`,
      `\nCLAIMS TO VERIFY:\n${JSON.stringify(claims)}`,
      "\nVerify that every factual sentence in the draft is listed, and that each listed claim is directly supported by its exact article passage. Disclosures are configuration-supplied statements, not article claims.",
    ].join("\n");
    const verification = await structuredCall<VerificationResult>(
      config, "verify_claims", "Return claim-by-claim support and any missing factual sentences.", verificationSchema,
      verifyPrompt, claimPrompt, 6000,
    );
    totalUsage = { input: totalUsage.input + verification.usage.input, output: totalUsage.output + verification.usage.output };
    const verified = verifyResults(claims, verification.value, draft, article.body);
    const articleLink = buildLink({ kind: "article", slug: article.slug, locale: article.locale, channel: "instagram" });
    const threadLinks = draft.xThread.map(() => buildLink({ kind: "article", slug: article.slug, locale: article.locale, channel: "x" }));
    const validationIssues: ValidationIssue[] = [
      ...linkRemovalIssues,
      ...validateDraft(
      draft, article.locale, config.disclosures[article.locale], config, articleLink, threadLinks,
      ),
    ];
    const status = verified.missing.length > 0 || verified.claims.some((claim) => !claim.supported) || validationIssues.length > 0
      ? "needs_review"
      : "draft";
    const output = await renderOutputs(article, draft, config.disclosures[article.locale], date);
    const slides = await renderSlides(article, draft.carousel.slides, article.locale, `out/${date}/${article.slug}/${article.locale}`);
    for (const item of output.queue) {
      if (item.channel === "instagram" && item.output_file.endsWith("instagram_carousel.md")) {
        item.media_file = slides.length ? slides.join(";") : "";
      }
      const id = stableId(item);
      const previous = queue.find((entry) => entry.id === id);
      const queued: QueueItem = {
        ...item,
        id,
        status: previous?.status === "approved" || previous?.status === "published" ? previous.status : status,
        claims: verified.claims,
        tokens: { input: generated.usage.input + verification.usage.input, output: generated.usage.output + verification.usage.output },
      };
      const index = queue.findIndex((entry) => entry.id === id);
      if (index >= 0) queue[index] = queued;
      else queue.push(queued);
    }

    const directory = resolve(FACTORY_ROOT, "out", date, article.slug, article.locale);
    await writeFile(resolve(directory, "claims.json"), `${JSON.stringify({
      status,
      claims: verified.claims,
      missingClaims: verified.missing,
      validationIssues,
    }, null, 2)}\n`, "utf8");
    written.push(`content-factory/out/${date}/${article.slug}/${article.locale}`);
    console.log(`${article.slug}/${article.locale}: ${status}; ${verified.claims.filter((claim) => !claim.supported).length} unsupported claim(s), ${verified.missing.length} missing claim(s), ${validationIssues.length} validation issue(s).`);
    for (const issue of validationIssues) console.log(`  ${issue.field}: ${issue.message}`);
  }
  await mkdir(FACTORY_ROOT, { recursive: true });
  await writeFile(QUEUE_PATH, `${JSON.stringify(queue, null, 2)}\n`, "utf8");
  console.log(`Wrote ${written.length} locale output(s). Total API tokens: ${totalUsage.input} input, ${totalUsage.output} output.`);
}
