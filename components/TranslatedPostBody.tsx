"use client";

import { MDX } from "@next/mdx";
import { mdxComponents } from "@/components/mdx-components";
import type { Post } from "@/types/post";

interface TranslatedPostBodyProps {
  post: Post;
  mdxSource: string;
}

export default function TranslatedPostBody({ post, mdxSource }: TranslatedPostBodyProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <MDX source={mdxSource} components={mdxComponents} />
    </div>
  );
}