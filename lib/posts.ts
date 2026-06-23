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
    author: (data.author as string) ?? "Alpine Mastery",
    readingTime: (data.readingTime as string) ?? "5 min",
    featured: Boolean(data.featured),
    content,
    sport: (data.sport as string) ?? "Alpine Skiing",
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((item) => fs.statSync(path.join(postsDirectory, item)).isDirectory())
    .sort();
}

export function getPostBySlug(slug: string, locale: string = DEFAULT_LOCALE): Post | null {
  const targetPath = path.join(postsDirectory, slug, `${locale}.mdx`);
  const fallbackPath = path.join(postsDirectory, slug, "sv.mdx");
  const filePath = fs.existsSync(targetPath)
    ? targetPath
    : fs.existsSync(fallbackPath)
      ? fallbackPath
      : null;

  if (!filePath) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  return parsePost(slug, locale, fileContents);
}

export function getAllPosts(locale: string = DEFAULT_LOCALE): Post[] {
  return getAllSlugs()
    .map((slug) => getPostBySlug(slug, locale))
    .filter((post): post is Post => post !== null)
    .sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getRelatedPosts(post: Post, locale: string, limit: number): Post[] {
  return getAllPosts(locale)
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, limit);
}

export function getPostLocales(slug: string): string[] {
  const slugPath = path.join(postsDirectory, slug);

  if (fs.existsSync(slugPath) && fs.statSync(slugPath).isDirectory()) {
    return fs
      .readdirSync(slugPath)
      .filter((name) => name.endsWith(".mdx"))
      .map((name) => name.replace(/\.mdx$/, ""));
  }

  return [];
}