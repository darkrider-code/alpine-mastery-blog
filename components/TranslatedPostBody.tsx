"use client";

import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "@/components/mdx-components";
import { compile } from "@mdx-js/mdx";
import { useEffect, useState } from "react";
import type { Post } from "@/types/post";

interface TranslatedPostBodyProps {
  post: Post;
  content: string;
}

export default function TranslatedPostBody({ post, content }: TranslatedPostBodyProps) {
  const [MdxComponent, setMdxComponent] = useState<React.ComponentType<any> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function compileMdx() {
      try {
        // Compile MDX to a function body
        const result = await compile(content, {
          outputFormat: 'function-body',
          development: false,
        });
        
        // Convert result to string - use type assertion to handle VFile
        const compiledCode = (result as { toString: () => string }).toString();
        
        // Create component from compiled code
        const Component = new Function('props', compiledCode) as (props: any) => React.ReactNode;
        setMdxComponent(() => Component);
        setError(null);
      } catch (err) {
        console.error('MDX compilation error:', err);
        setError('Failed to load article content');
      }
    }
    
    compileMdx();
  }, [content]);

  if (error) {
    return <div className="prose prose-invert max-w-none text-red-500">{error}</div>;
  }

  if (!MdxComponent) {
    return <div className="prose prose-invert max-w-none">Loading...</div>;
  }

  return (
    <div className="prose prose-invert max-w-none">
      <MDXProvider components={mdxComponents}>
        <MdxComponent />
      </MDXProvider>
    </div>
  );
}