import assert from "node:assert/strict";
import test from "node:test";
import { rm } from "node:fs/promises";
import { join } from "node:path";
import { buildLink } from "../src/links.js";
import { renderOutputs } from "../src/render.js";
import { FACTORY_ROOT } from "../src/paths.js";
import { formatFacebookPost, validateClaimShape, validateClaimsDocument, validateDraft, validateText, countXCharacters } from "../src/validation.js";
import { containsPrice, containsSensitiveTopic } from "../src/reply.js";
import { structuredCall, toGeminiSchema } from "../src/model.js";
import type { AppConfig, DraftPayload } from "../src/types.js";

const config: AppConfig = {
  model: "test-model",
  temperature: 0.2,
  maxPosts: 50,
  locales: ["sv", "en", "no", "da", "fi", "de", "fr", "nl"],
  disclosures: {
    en: "I'm one of the people who built Alpine Mastery.",
    sv: "Jag är en av personerna bakom Alpine Mastery.",
    no: "Jeg er en av personene bak Alpine Mastery.",
    da: "Jeg er en af personerne bag Alpine Mastery.",
    fi: "Olen yksi Alpine Masteryn kehittäjistä.",
    de: "Ich gehöre zu den Menschen, die Alpine Mastery entwickelt haben.",
    fr: "Je fais partie des personnes qui ont créé Alpine Mastery.",
    nl: "Ik ben een van de mensen achter Alpine Mastery.",
  },
  bannedPhrases: ["AI-powered", "guaranteed improvement"],
  hypePhrases: ["game changer"],
};

const validDraft: DraftPayload = {
  carousel: {
    slides: [
      "Watch the transition between turns.",
      "Follow the skis through the arc.",
      "Compare several turns in a row.",
      "Look for repeated patterns, not one frame.",
      "Snow and camera angle affect what you can see.",
      "Ask a coach about one clear observation.",
      "Choose one focus for your next run.",
    ],
    caption: "A video can help you form a useful question for a coach.",
    hashtags: ["#skiing", "#carving", "#skitechnik", "#alpine", "#ski", "#turns", "#coaching", "#snow"],
  },
  reel: {
    hook: "What do you notice first in a ski video?",
    beats: [
      "Follow the skis as the turn starts, rather than pausing on one frame.",
      "Compare a few turns in both directions under similar conditions.",
      "Choose one recurring observation and take that question to a coach.",
    ],
    onScreenText: ["Watch the transition", "Compare a few turns", "Choose one question"],
    spokenCta: "Save this checklist and find the full guide through the link in bio.",
  },
  xPost: "Compare several turns before deciding what you see.",
  xThread: ["Start by watching the whole turn at normal speed.", "Then compare similar turns and choose one useful question."],
  facebookGroupPost: {
    body: "A short video can help you notice how a turn begins. I find it useful to compare several turns, not just one frame.",
    question: "What do you look for first when reviewing a ski video?",
  },
  redditPost: {
    title: "A simple way to review a ski video",
    body: "Watch several turns at normal speed first. Compare similar turns and note one question to discuss with a coach.",
  },
  adVariants: Array.from({ length: 10 }, (_, index) => ({
    headline: `Ski video review ${index + 1}`,
    primaryText: "Choose one clear question to take to your next coaching session.",
    audience: index % 2 === 0 ? "adult" as const : "parent" as const,
  })),
  claims: [],
};

test("article links use the agreed localized social campaign parameters", () => {
  const link = new URL(buildLink({
    kind: "article",
    slug: "biomekaniken-bakom-svangen",
    locale: "sv",
    channel: "instagram",
    variant: "carousel",
  }));
  assert.equal(link.origin, "https://blog.masteryhub.se");
  assert.equal(link.pathname, "/sv/biomekaniken-bakom-svangen");
  assert.equal(link.searchParams.get("utm_source"), "instagram");
  assert.equal(link.searchParams.get("utm_medium"), "social");
  assert.equal(link.searchParams.get("utm_campaign"), "biomekaniken-bakom-svangen");
  assert.equal(link.searchParams.get("utm_content"), "carousel");
});

test("ad links point to free analysis with paid-social tagging and valid content ids", () => {
  const link = new URL(buildLink({ kind: "ad", slug: "biomekaniken-bakom-svangen", channel: "paid_social", variant: "v03" }));
  assert.equal(link.origin + link.pathname, "https://alpine.masteryhub.se/free-analysis");
  assert.equal(link.searchParams.get("utm_medium"), "paid_social");
  assert.equal(link.searchParams.get("utm_content"), "v03");
  const intro = new URL(buildLink({ kind: "ad", slug: "intro", channel: "paid_social", variant: "intro", audience: "parent" }));
  assert.equal(intro.searchParams.get("utm_content"), "parent");
  assert.throws(() => buildLink({ kind: "ad", slug: "intro", channel: "paid_social", variant: "intro" }));
  assert.throws(() => buildLink({ kind: "ad", slug: "slug", channel: "paid_social", variant: "v11" }));
  assert.throws(() => buildLink({ kind: "article", slug: "slug", locale: "en", channel: "x", variant: "adult" }));
});

test("X URLs count as 23 characters and enforced drafts include the disclosure", () => {
  assert.equal(countXCharacters(`A ${"https://a.example/long?utm=x"}`), 25);
  const disclosure = config.disclosures.en;
  const link = buildLink({ kind: "article", slug: "slug", locale: "en", channel: "x" });
  const issues = validateDraft(validDraft, "en", disclosure, config, link, [link, link]);
  assert.deepEqual(issues, []);
  const tooLong = { ...validDraft, xPost: "x".repeat(280) };
  assert.ok(validateDraft(tooLong, "en", disclosure, config, link, [link, link]).some((issue) => issue.field === "xPost"));
});

test("carousel, caption, reel, ad and prohibited-language constraints are checked", () => {
  const link = buildLink({ kind: "article", slug: "slug", locale: "en", channel: "instagram" });
  const invalid: DraftPayload = {
    ...validDraft,
    carousel: {
      ...validDraft.carousel,
      slides: ["one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty twenty-one twenty-two twenty-three twenty-four twenty-five twenty-six", ...validDraft.carousel.slides.slice(1)],
      caption: "x".repeat(1500),
      hashtags: ["#one"],
    },
    adVariants: validDraft.adVariants.map((variant, index) => index === 0
      ? { ...variant, headline: "x".repeat(41), primaryText: "y".repeat(126), audience: "parent" }
      : variant),
  };
  const issues = validateDraft(invalid, "en", config.disclosures.en, config, link, [link, link]);
  assert.ok(issues.some((issue) => issue.message.includes("25 words")));
  assert.ok(issues.some((issue) => issue.message.includes("1,500 characters")));
  assert.ok(issues.some((issue) => issue.message.includes("8 to 10 hashtags")));
  assert.ok(issues.some((issue) => issue.message.includes("40 characters")));
  assert.ok(issues.some((issue) => issue.message.includes("125 characters")));
  const identifiableMinor = {
    ...validDraft,
    adVariants: validDraft.adVariants.map((variant, index) => index === 0
      ? { ...variant, primaryText: "My daughter Ava, age 12, enjoys ski video review." }
      : variant),
  };
  assert.ok(validateDraft(identifiableMinor, "en", config.disclosures.en, config, link, [link, link])
    .some((issue) => issue.message.includes("identify or specify the age")));
  assert.ok(validateText("AI-powered ski coaching!", config, "test").length >= 2);
  assert.ok(validateText("AI video analysis", config, "test").some((issue) => issue.message.includes("lead with AI")));
  assert.ok(validateText("This will improve your skiing", config, "test").some((issue) => issue.message.includes("guarantees")));
  assert.ok(validateText("A game changer", config, "test").some((issue) => issue.message.includes("banned phrase")));
  assert.ok(validateText("Read this https://example.com", config, "test").some((issue) => issue.message.includes("shared link builder")));
  assert.ok(validateText("Read [the article](/en/example)", config, "test").some((issue) => issue.message.includes("shared link builder")));
  assert.equal(containsPrice("A ski analysis costs €20."), true);
  assert.equal(containsSensitiveTopic("I have knee pain after a fall."), true);
  assert.equal(containsSensitiveTopic("How can I bend my knees during a turn?"), false);
});

test("Facebook post includes disclosure and ends with a question", () => {
  const text = formatFacebookPost("What did you notice?", config.disclosures.sv, "How would you review it?");
  assert.ok(text.includes(config.disclosures.sv));
  assert.ok(text.endsWith("?"));
});

test("claims.json entries require exact support metadata", () => {
  assert.equal(validateClaimShape([{
    field: "carousel.slides[0]",
    sentence: "A video can help.",
    passage: "A video can help.",
    source: "article",
    supported: true,
    reason: "The passage directly supports this.",
    checkedPassage: "A video can help.",
  }]), true);
  assert.equal(validateClaimShape([{ sentence: "Missing fields." }]), false);
  assert.equal(validateClaimShape(null), false);
  assert.equal(validateClaimsDocument({
    status: "needs_review",
    claims: [{
      field: "xPost",
      sentence: "A video can help.",
      passage: "A video can help.",
      source: "article",
      supported: false,
      reason: "Source does not support this.",
      checkedPassage: "",
    }],
    missingClaims: [],
    validationIssues: [],
  }), true);
  assert.equal(validateClaimsDocument({ status: "ready", claims: [], missingClaims: [], validationIssues: [] }), false);
});

test("rendered social drafts include disclosures and keep the Facebook question last", async () => {
  const slug = "render-test-fixture";
  const date = "2099-12-30";
  const article = {
    slug,
    locale: "en" as const,
    title: "Test article",
    description: "Test description",
    body: "Test article body.",
  };
  const outputDirectory = join(FACTORY_ROOT, "out", date, slug);
  try {
    const output = await renderOutputs(article, validDraft, config.disclosures.en, date);
    const xPost = output.files["x_post.md"];
    const xThread = output.files["x_thread.md"];
    const facebook = output.files["facebook_group_post.md"];
    const reddit = output.files["reddit_post.md"];
    assert.ok(xPost.includes(config.disclosures.en));
    assert.ok(xThread.includes(config.disclosures.en));
    assert.ok(facebook.includes(config.disclosures.en));
    assert.ok(facebook.endsWith("?"));
    assert.ok(reddit.includes(config.disclosures.en));
    assert.ok(reddit.endsWith(output.queue.find((item) => item.channel === "reddit")!.link));
    assert.equal(output.files["ad_variants.csv"].trim().split(/\r?\n/u).length, 11);
    assert.equal(output.files["first_comment.md"].split(/\s+/u).length, 8);
  } finally {
    await rm(outputDirectory, { recursive: true, force: true });
  }
});

test("Gemini structured calls use the configured environment key and return token usage", async () => {
  const originalKey = process.env.Content_Factory_Gemini_API_Key;
  const originalFetch = globalThis.fetch;
  const secret = "local-test-secret";
  process.env.Content_Factory_Gemini_API_Key = secret;
  let requestUrl = "";
  let requestInit: RequestInit | undefined;
  globalThis.fetch = async (input, init) => {
    requestUrl = String(input);
    requestInit = init;
    return new Response(JSON.stringify({
      candidates: [{
        content: {
          parts: [{ functionCall: { name: "test_tool", args: { answer: "draft only" } } }],
        },
      }],
      usageMetadata: { promptTokenCount: 123, candidatesTokenCount: 45 },
    }), { status: 200, headers: { "content-type": "application/json" } });
  };
  try {
    const result = await structuredCall<{ answer: string }>(
      config,
      "test_tool",
      "Test structured output",
      {
        type: "object",
        properties: {
          answer: { type: "string" },
          optional: { anyOf: [{ type: "string" }, { type: "null" }] },
        },
        required: ["answer"],
      },
      "System",
      "Prompt",
      120,
    );
    assert.equal(new URL(requestUrl).pathname, "/v1beta/models/test-model:generateContent");
    const headers = new Headers(requestInit?.headers);
    assert.equal(headers.get("x-goog-api-key"), secret);
    assert.deepEqual(result, {
      value: { answer: "draft only" },
      usage: { input: 123, output: 45 },
    });
    const sentBody = JSON.parse(String(requestInit?.body)) as {
      toolConfig: { functionCallingConfig: { mode: string; allowedFunctionNames: string[] } };
      tools: Array<{ functionDeclarations: Array<{ parameters: Record<string, unknown> }> }>;
    };
    assert.equal(sentBody.toolConfig.functionCallingConfig.mode, "ANY");
    assert.deepEqual(sentBody.toolConfig.functionCallingConfig.allowedFunctionNames, ["test_tool"]);
    assert.deepEqual(toGeminiSchema({
      type: "object",
      properties: { optional: { anyOf: [{ type: "string" }, { type: "null" }] } },
    }), {
      type: "OBJECT",
      properties: { optional: { type: "STRING", nullable: true } },
    });
  } finally {
    globalThis.fetch = originalFetch;
    if (originalKey === undefined) delete process.env.Content_Factory_Gemini_API_Key;
    else process.env.Content_Factory_Gemini_API_Key = originalKey;
  }
});
