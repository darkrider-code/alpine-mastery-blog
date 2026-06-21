"use client";

import type { Post } from "@/types/post";

interface TranslatedPostHeaderProps {
  post: Post;
}

export default function TranslatedPostHeader({ post }: TranslatedPostHeaderProps) {
  return (
    <div>
      <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {post.title}
      </h1>
      <p className="mt-4 text-lg leading-8 text-text-secondary">
        {post.description}
      </p>
    </div>
  );
}