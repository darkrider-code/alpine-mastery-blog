"use client";

import { useMemo, useState } from "react";
import BlogCard from "@/components/BlogCard";
import CTABanner from "@/components/CTABanner";
import type { Post } from "@/types/post";

const CATEGORIES = ["Slalom", "GS", "SL", "Teknik", "Träning", "Mental"] as const;

export default function BlogList({ posts }: { posts: Post[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("Alla");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "Alla") return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory("Alla")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            activeCategory === "Alla"
              ? "bg-accent text-bg-primary"
              : "border border-border bg-bg-card text-text-secondary hover:border-accent/50 hover:text-white"
          }`}
        >
          Alla
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
          Inga artiklar i denna kategori ännu.
        </p>
      )}

      <div className="mt-12">
        <CTABanner />
      </div>
    </>
  );
}
