"use client";

import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "@/components/mdx-components";
import type { Post } from "@/types/post";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

interface TranslatedPostBodyProps {
  post: Post;
  content: string;
}

export default async function TranslatedPostBody({ post, content }: TranslatedPostBodyProps) {
  // Compile MDX content at runtime
  const compiled = await compile(content, {
    outputFormat: 'function-body',
    development: false,
  });
  
  // Create component from compiled code
  const MdxComponent = new Function('props', compiled) as (props: any) => React.ReactNode;
  
  return (
    <div className="prose prose-invert max-w-none">
      <MDXProvider components={mdxComponents}>
        <MdxComponent />
      </MDXProvider>
    </div>
  );
}