import type { MetadataRoute } from "next";
import { getAllSlugs, getPostBySlug, getPostLocales } from "@/lib/posts";
import { SUPPORTED_LOCALES } from "@/lib/translations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://blog.masteryhub.se";
  const pages: MetadataRoute.Sitemap = SUPPORTED_LOCALES.flatMap((locale) =>
    ["", "/ai-skidanalys", "/klubbpaket", "/ambassador", "/partner"].map((route) => ({
      url: baseUrl + "/" + locale + route,
      alternates: {
        languages: {
          ...Object.fromEntries(SUPPORTED_LOCALES.map((language) => [language, baseUrl + "/" + language + route])),
          "x-default": baseUrl + "/sv" + route,
        },
      },
    }))
  );
  const articles: MetadataRoute.Sitemap = getAllSlugs().flatMap((slug) => {
    const locales = getPostLocales(slug);
    const languages = Object.fromEntries(locales.map((locale) => [locale, baseUrl + "/" + locale + "/" + slug]));
    return locales.flatMap((locale) => {
      const post = getPostBySlug(slug, locale);
      if (!post) return [];
      return [{ url: baseUrl + "/" + locale + "/" + slug,
        lastModified: post.updatedAt ?? post.publishedAt,
        alternates: { languages },
      }];
    });
  });
  // Only canonical pages; omit the root redirect and invented deployment dates.
  return [...pages, ...articles];
}

