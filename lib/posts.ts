import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post } from "@/types/post";
import { DEFAULT_LOCALE } from "@/lib/translations";

const postsDirectory = path.join(process.cwd(), "content/posts");

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

// Get all unique slugs (directories in content/posts)
function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs.readdirSync(postsDirectory)
    .filter((name) => {
      const fullPath = path.join(postsDirectory, name);
      return fs.statSync(fullPath).isDirectory();
    });
}

// Get all posts for a specific locale
function getPostsByLocale(locale: string): Post[] {
  const slugs = getAllSlugs();
  const posts: Post[] = [];

  for (const slug of slugs) {
    const localePath = path.join(postsDirectory, slug, `${locale}.mdx`);
    const fallbackPath = path.join(postsDirectory, slug, 'sv.mdx');
    
    let filePath = localePath;
    if (!fs.existsSync(filePath)) {
      filePath = fallbackPath;
    }
    
    if (fs.existsSync(filePath)) {
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
  const localePath = path.join(postsDirectory, slug, `${locale}.mdx`);
  const fallbackPath = path.join(postsDirectory, slug, 'sv.mdx');
  
  let filePath = localePath;
  if (!fs.existsSync(filePath)) {
    filePath = fallbackPath;
  }
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  return parsePost(slug, locale, fileContents);
}

export function getRelatedPosts(post: Post, limit: number, locale: string = DEFAULT_LOCALE): Post[] {
  return getAllPosts(locale)
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, limit);
}

// Get all available locales for a specific post
export function getPostLocales(slug: string): string[] {
  const slugPath = path.join(postsDirectory, slug);
  if (!fs.existsSync(slugPath)) {
    return [];
  }
  
  return fs.readdirSync(slugPath)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/.mdx$/, ""));
}
