"use client";

import { MDX } from "@next/mdx";
import { mdxComponents } from "@/components/mdx-components";
import type { Post } from "@/types/post";

interface TranslatedPostBodyProps {
  post: Post;
  mdxString: string;
}

export default function TranslatedPostBody({ post, mdxString }: TranslatedPostBodyProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <MDX source={mdxString} components={mdxComponents} />
    </div>
  );
}