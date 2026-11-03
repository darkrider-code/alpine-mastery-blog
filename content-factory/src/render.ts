import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import type { Article, DraftPayload, Locale } from "./types.js";
import { FACTORY_ROOT } from "./paths.js";
import { buildLink } from "./links.js";
import { formatFacebookPost } from "./validation.js";

export interface RenderedOutput {
  files: Record<string, string>;
  queue: Array<{
    channel: "instagram" | "x" | "facebook" | "reddit" | "paid_social";
    locale: Locale;
    slug: string;
    text: string;
    fields: Record<string, string>;
    link: string;
    media_file: string;
    output_file: string;
    variant?: string;
  }>;
}

function csvCell(value: string): string {
  return `"${value.replace(/"/gu, '""')}"`;
}

function threadedPosts(posts: string[], disclosure: string, link: string): string[] {
  return posts.map((post, index) => {
    const suffix = index === posts.length - 1 ? `\n\n${disclosure}\n${link}` : "";
    return `${index + 1}/${posts.length} ${post.trim()}${suffix}`;
  });
}

export async function renderOutputs(
  article: Article,
  draft: DraftPayload,
  disclosure: string,
  date: string,
): Promise<RenderedOutput> {
  const directory = `out/${date}/${article.slug}/${article.locale}`;
  const articleLink = buildLink({ kind: "article", slug: article.slug, locale: article.locale, channel: "instagram" });
  const xLink = buildLink({ kind: "article", slug: article.slug, locale: article.locale, channel: "x" });
  const facebookLink = buildLink({ kind: "article", slug: article.slug, locale: article.locale, channel: "facebook" });
  const redditLink = buildLink({ kind: "article", slug: article.slug, locale: article.locale, channel: "reddit" });
  const carousel = [
    `# Instagram carousel: ${article.title}`,
    "",
    ...draft.carousel.slides.map((slide, index) => `## Slide ${index + 1}\n${slide}`),
    "",
    "## Caption",
    draft.carousel.caption,
    "",
    `Read more: ${articleLink}`,
  ].join("\n");
  const firstComment = draft.carousel.hashtags.join(" ");
  const reel = [
    `# Instagram reel script: ${article.title}`,
    "",
    `Duration: 20–30 seconds`,
    `Hook (first second): ${draft.reel.hook}`,
    "",
    "Three beats:",
    ...draft.reel.beats.map((beat, index) => `${index + 1}. ${beat}`),
    "",
    "On-screen text:",
    ...draft.reel.onScreenText.map((text) => `- ${text}`),
    "",
    `Spoken CTA: ${draft.reel.spokenCta}`,
  ].join("\n");
  const xPost = `${draft.xPost.trim()}\n\n${disclosure}\n${xLink}`;
  const xThreadPosts = threadedPosts(draft.xThread, disclosure, xLink);
  const xThread = xThreadPosts.join("\n\n");
  const facebook = formatFacebookPost(
    `${draft.facebookGroupPost.body.trim()}\n\n${facebookLink}`,
    disclosure,
    draft.facebookGroupPost.question,
  );
  const files: Record<string, string> = {
    "instagram_carousel.md": carousel,
    "first_comment.md": firstComment,
    "instagram_reel_script.md": reel,
    "x_post.md": xPost,
    "x_thread.md": xThread,
    "facebook_group_post.md": facebook,
  };
  const queue: RenderedOutput["queue"] = [
    {
      channel: "instagram", locale: article.locale, slug: article.slug, text: carousel,
      fields: {
        ...Object.fromEntries(draft.carousel.slides.map((text, index) => [`slide_${index + 1}`, text])),
        caption: `${draft.carousel.caption}\n\nRead more: ${articleLink}`,
        first_comment: firstComment,
      },
      link: articleLink, media_file: `${directory}/slides`, output_file: `${directory}/instagram_carousel.md`,
    },
    { channel: "instagram", locale: article.locale, slug: article.slug, text: reel, fields: { script: reel }, link: articleLink, media_file: "", output_file: `${directory}/instagram_reel_script.md` },
    { channel: "x", locale: article.locale, slug: article.slug, text: xPost, fields: { post: xPost }, link: xLink, media_file: "", output_file: `${directory}/x_post.md` },
    { channel: "x", locale: article.locale, slug: article.slug, text: xThread, fields: Object.fromEntries(xThreadPosts.map((text, index) => [`post_${index + 1}`, text])), link: xLink, media_file: "", output_file: `${directory}/x_thread.md` },
    { channel: "facebook", locale: article.locale, slug: article.slug, text: files["facebook_group_post.md"], fields: { post: files["facebook_group_post.md"] }, link: facebookLink, media_file: "", output_file: `${directory}/facebook_group_post.md` },
  ];

  if (article.locale === "en" && draft.redditPost) {
    const redditText = `# ${draft.redditPost.title}\n\n${draft.redditPost.body}\n\n${disclosure}\n\n${redditLink}`;
    files["reddit_post.md"] = redditText;
    queue.push({ channel: "reddit", locale: article.locale, slug: article.slug, text: redditText, fields: { title: draft.redditPost.title, body: `${draft.redditPost.body}\n\n${disclosure}\n\n${redditLink}` }, link: redditLink, media_file: "", output_file: `${directory}/reddit_post.md` });
  }

  const adRows = ["headline,primary_text,audience,utm_content"];
  draft.adVariants.forEach((variant, index) => {
    const id = `v${String(index + 1).padStart(2, "0")}`;
    adRows.push([variant.headline, variant.primaryText, variant.audience, id].map(csvCell).join(","));
    const adLink = buildLink({ kind: "ad", slug: article.slug, channel: "paid_social", variant: id });
    queue.push({
      channel: "paid_social",
      locale: article.locale,
      slug: article.slug,
      text: `${variant.headline}\n${variant.primaryText}`,
      fields: { headline: variant.headline, primary_text: variant.primaryText, audience: variant.audience, utm_content: id },
      link: adLink,
      media_file: "",
      output_file: `${directory}/ad_variants.csv`,
      variant: id,
    });
  });
  files["ad_variants.csv"] = adRows.join("\n");
  await mkdir(resolve(FACTORY_ROOT, directory), { recursive: true });
  await Promise.all(Object.entries(files).map(([name, value]) => writeFile(resolve(FACTORY_ROOT, directory, name), `${value.trimEnd()}\n`, "utf8")));
  return { files, queue };
}

export async function renderSlides(
  article: Article,
  slides: string[],
  locale: Locale,
  outputDirectory: string,
): Promise<string[]> {
  try {
    const { chromium } = await import("playwright");
    const template = await readFile(resolve(FACTORY_ROOT, "templates", "slide.html"), "utf8");
    const browser = await chromium.launch({ headless: true });
    try {
      const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
      await mkdir(resolve(FACTORY_ROOT, outputDirectory, "slides"), { recursive: true });
      const outputs: string[] = [];
      for (const [index, text] of slides.entries()) {
        const html = template
          .replaceAll("{{locale}}", locale)
          .replaceAll("{{number}}", String(index + 1))
          .replaceAll("{{text}}", escapeHtml(text))
          .replaceAll("{{slug}}", escapeHtml(article.slug));
        await page.setContent(html);
        const path = `${outputDirectory}/slides/slide-${String(index + 1).padStart(2, "0")}.png`;
        await page.screenshot({ path: resolve(FACTORY_ROOT, path), fullPage: false });
        outputs.push(path);
      }
      return outputs;
    } finally {
      await browser.close();
    }
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    console.warn(`Carousel PNG rendering skipped: Playwright or its Chromium browser is unavailable (${detail}).`);
    return [];
  }
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/gu, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character] ?? character);
}
