"use client";

import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "@/components/mdx-components";
import type { Post } from "@/types/post";

interface TranslatedPostBodyProps {
  post: Post;
  children: React.ReactNode;
}

export default function TranslatedPostBody({ post, children }: TranslatedPostBodyProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <MDXProvider components={mdxComponents}>
        {children}
      </MDXProvider>
    </div>
  );
}