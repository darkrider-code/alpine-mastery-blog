import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/posts";
import { SUPPORTED_LOCALES } from "@/lib/translations";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();
  const baseUrl = "https://blog.masteryhub.se";

  const localeRoots = SUPPORTED_LOCALES.map(locale => ({
    url: baseUrl + "/" + locale,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const articles = SUPPORTED_LOCALES.flatMap(locale =>
    slugs.map(slug => ({
      url: baseUrl + "/" + locale + "/" + slug,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: locale === 'sv' ? 0.9 : 0.7,
    }))
  );

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    ...localeRoots,
    ...articles,
  ];
}