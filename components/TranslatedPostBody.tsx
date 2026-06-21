"use client";

import { MDX } from "@/mdx-components";
import type { Post } from "@/types/post";

interface TranslatedPostBodyProps {
  post: Post;
}

export default function TranslatedPostBody({ post }: TranslatedPostBodyProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <MDX source={post.content} />
    </div>
  );
}