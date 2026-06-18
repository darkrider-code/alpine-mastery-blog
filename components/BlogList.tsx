"use client";

import { useMemo, useState } from "react";
import BlogCard from "@/components/BlogCard";
import CTABanner from "@/components/CTABanner";
import { useLanguage } from "@/components/LanguageProvider";
import type { Post } from "@/types/post";
import { DEFAULT_LOCALE } from "@/lib/translations";

const CATEGORIES = ["Technique", "Strength & Conditioning", "Mindset", "AI & Analysis", "Athlete Stories"] as const;

export default function BlogList({ posts, locale }: { posts: Post[]; locale?: string }) {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory(t("site.allCategories"))}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            activeCategory === t("site.allCategories")
              ? "bg-accent text-bg-primary"
              : "border border-border bg-bg-card text-text-secondary hover:border-accent/50 hover:text-white"
          }`}
        >
          {t("site.allCategories")}
        </button>
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory === category
                ? "bg-accent text-bg-primary"
                : "border border-border bg-bg-card text-text-secondary hover:border-accent/50 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="py-12 text-center text-text-secondary">
          {t("site.noPosts")}
        </p>
      )}

      <div className="mt-12">
        <CTABanner />
      </div>
    </>
  );
}
