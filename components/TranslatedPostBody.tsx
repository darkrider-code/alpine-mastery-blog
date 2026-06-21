"use client";

import { useMDXComponents } from "@mdx-js/react";
import type { MDXComponents } from "mdx/types";
import type { Post } from "@/types/post";

interface TranslatedPostBodyProps {
  post: Post;
  mdxSource: any;
  components: MDXComponents;
}

export default function TranslatedPostBody({ post, mdxSource, components }: TranslatedPostBodyProps) {
  const allComponents = useMDXComponents(components);
  const Content = mdxSource.default;
  
  return (
    <div className="prose prose-invert max-w-none">
      <Content components={allComponents} />
    </div>
  );
}