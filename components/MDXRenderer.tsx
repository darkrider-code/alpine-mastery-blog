"use client";

import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "./mdx-components";

interface MDXRendererProps {
  children: React.ReactNode;
}

export default function MDXRenderer({ children }: MDXRendererProps) {
  return (
    <MDXProvider components={mdxComponents}>
      {children}
    </MDXProvider>
  );
}