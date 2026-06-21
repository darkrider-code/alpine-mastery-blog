"use client";

import { mdxComponents } from "@/components/mdx-components";
import type { Post } from "@/types/post";
import type { ComponentType } from "react";

interface TranslatedPostBodyProps {
  post: Post;
  MdxComponent: ComponentType<any>;
}

export default function TranslatedPostBody({ post, MdxComponent }: TranslatedPostBodyProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <MdxComponent components={mdxComponents} />
    </div>
  );
}