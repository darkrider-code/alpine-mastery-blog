"use client";

import { useMDXComponents } from "@mdx-js/react";
import { mdxComponents } from "@/components/mdx-components";
import type { Post } from "@/types/post";
import { compile } from "@mdx-js/mdx";

interface TranslatedPostBodyProps {
  post: Post;
}

export default function TranslatedPostBody({ post }: TranslatedPostBodyProps) {
  const components = useMDXComponents(mdxComponents);
  
  // Note: In a real implementation, we would compile the MDX on the server
  // and pass the component as a prop. For now, we'll render the raw content.
  // This is a temporary fix - the proper solution requires server-side compilation.
  
  return (
    <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{"__html": post.content}} />
  );
}