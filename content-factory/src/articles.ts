import { readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import matter from "gray-matter";
import { CONTENT_ROOT } from "./paths.js";
import { SUPPORTED_LOCALES, type Article, type Locale } from "./types.js";

function isLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export async function readArticle(slug: string, locale: string): Promise<Article> {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error(`Invalid article slug: ${slug}`);
  if (!isLocale(locale)) throw new Error(`Unsupported locale: ${locale}`);
  const path = resolve(CONTENT_ROOT, slug, `${locale}.mdx`);
  const source = await readFile(path, "utf8");
  const parsed = matter(source);
  const title = parsed.data.title;
  if (typeof title !== "string" || !title.trim()) throw new Error(`Article ${slug}/${locale} has no title.`);
  return {
    slug,
    locale,
    title,
    description: typeof parsed.data.description === "string" ? parsed.data.description : "",
    body: parsed.content.trim(),
  };
}

export async function readArticleIndex(): Promise<Article[]> {
  const entries = await readdir(CONTENT_ROOT, { withFileTypes: true });
  const articles: Article[] = [];
  for (const entry of entries.filter((item) => item.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))) {
    const localeFiles = await readdir(resolve(CONTENT_ROOT, entry.name));
    for (const file of localeFiles.sort()) {
      if (!file.endsWith(".mdx")) continue;
      const locale = file.slice(0, -4);
      if (isLocale(locale)) articles.push(await readArticle(entry.name, locale));
    }
  }
  return articles;
}

export function articleSummary(article: Article): string {
  return `${article.slug} (${article.locale}): ${article.title}. ${article.description}`;
}

export function matchArticles(query: string, articles: Article[], locale: Locale, limit = 5): Article[] {
  const terms = new Set(query.toLocaleLowerCase(locale).match(/[\p{L}\p{N}]{3,}/gu) ?? []);
  return articles
    .filter((article) => article.locale === locale)
    .map((article) => {
      const haystack = `${article.slug} ${article.title} ${article.description} ${article.body}`
        .toLocaleLowerCase(locale);
      return { article, score: [...terms].reduce((sum, term) => sum + (haystack.includes(term) ? 1 : 0), 0) };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.article.slug.localeCompare(b.article.slug))
    .slice(0, limit)
    .map((entry) => entry.article);
}
