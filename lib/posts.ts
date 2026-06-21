import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post } from "@/types/post";
import { DEFAULT_LOCALE } from "@/lib/translations";
export { DEFAULT_LOCALE } from "@/lib/translations";

const postsDirectory = path.join(process.cwd(), "content", "posts");

function parsePost(slug: string, locale: string, fileContents: string): Post {
  const { data, content } = matter(fileContents);

  return {
    slug,
    locale,
    title: data.title as string,
    description: data.description as string,
    publishedAt: data.publishedAt as string,
    category: data.category as string,
    author: data.author as string,
    readingTime: data.readingTime as string,
    featured: Boolean(data.featured),
    content,
  };
}

function getLocaleDirectory(locale: string): string {
  return path.join(postsDirectory, locale);
}

function fileExists(filePath: string): boolean {
  return fs.existsSync(filePath);
}

function getSlugDirectoriesFromLocale(locale: string): string[] {
  const localeRoot = getLocaleDirectory(locale);
  if (fileExists(localeRoot) && fs.statSync(localeRoot).isDirectory()) {
    return fs.readdirSync(localeRoot)
      .filter((name) => fs.statSync(path.join(localeRoot, name)).isDirectory())
      .sort();
  }

  return fs.readdirSync(postsDirectory)
    .filter((name) => {
      const fullPath = path.join(postsDirectory, name);
      return fs.statSync(fullPath).isDirectory();
    })
    .sort();
}

export function getAllSlugs(): string[] {
  if (!fileExists(postsDirectory)) {
    return [];
  }

  const localeRoot = getLocaleDirectory(DEFAULT_LOCALE);
  if (fileExists(localeRoot) && fs.statSync(localeRoot).isDirectory()) {
    return fs.readdirSync(localeRoot)
      .filter((name) => fs.statSync(path.join(localeRoot, name)).isDirectory())
      .sort();
  }

  return fs.readdirSync(postsDirectory)
    .filter((name) => {
      const fullPath = path.join(postsDirectory, name);
      return fs.statSync(fullPath).isDirectory();
    })
    .sort();
}

function getPostFilePath(slug: string, locale: string): string | null {
  const localeDir = path.join(postsDirectory, locale);
  const localeFirstPath = path.join(localeDir, slug, `${locale}.mdx`);
  const localeFirstFallbackPath = path.join(localeDir, slug, "sv.mdx");

  if (fileExists(localeFirstPath)) {
    return localeFirstPath;
  }

  if (fileExists(localeFirstFallbackPath)) {
    return localeFirstFallbackPath;
  }

  const legacyPath = path.join(postsDirectory, slug, `${locale}.mdx`);
  const legacyFallbackPath = path.join(postsDirectory, slug, "sv.mdx");

  if (fileExists(legacyPath)) {
    return legacyPath;
  }

  if (fileExists(legacyFallbackPath)) {
    return legacyFallbackPath;
  }

  return null;
}

function getPostsByLocale(locale: string): Post[] {
  const slugs = getSlugDirectoriesFromLocale(locale);
  const posts: Post[] = [];

  for (const slug of slugs) {
    const filePath = getPostFilePath(slug, locale);

    if (filePath) {
      const fileContents = fs.readFileSync(filePath, "utf8");
      posts.push(parsePost(slug, locale, fileContents));
    }
  }

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getAllPosts(locale: string = DEFAULT_LOCALE): Post[] {
  return getPostsByLocale(locale);
}

export function getPostBySlug(slug: string, locale: string = DEFAULT_LOCALE): Post | null {
  const filePath = getPostFilePath(slug, locale);

  if (!filePath) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  return parsePost(slug, locale, fileContents);
}

export function getRelatedPosts(post: Post, locale: string, limit: number): Post[] {
  return getAllPosts(locale)
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, limit);
}

export function getPostLocales(slug: string): string[] {
  const legacySlugPath = path.join(postsDirectory, slug);
  if (fileExists(legacySlugPath) && fs.statSync(legacySlugPath).isDirectory()) {
    return fs.readdirSync(legacySlugPath)
      .filter((name) => name.endsWith(".mdx"))
      .map((name) => name.replace(/\.mdx$/, ""));
  }

  const localeDirs = fs.readdirSync(postsDirectory)
    .filter((name) => {
      const fullPath = path.join(postsDirectory, name);
      return fs.statSync(fullPath).isDirectory();
    })
    .filter((locale) => fileExists(path.join(postsDirectory, locale, slug)));

  return localeDirs;
}
