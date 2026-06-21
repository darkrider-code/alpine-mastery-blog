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
        // Compile MDX to a program
        const result = await compile(content, {
          outputFormat: 'program',
          development: false,
        });
        
        // Convert result to string
        const compiledCode = String(result);
        
        // Create a component by executing the compiled program
        // This should export a default component
        const Component = (() => {
          // @ts-ignore - We're executing compiled MDX code
          const module = { exports: {} };
          const require = () => {}; // Mock require
          new Function('module', 'exports', 'require', compiledCode)(module, module.exports, require);
          return module.exports.default;
        })();
        
        setMdxComponent(() => Component);
        setError(null);
      } catch (err) {
        console.error('MDX compilation error:', err);
        setError('Failed to load article content: ' + (err as Error).message);
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