import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";

export const mdxComponents: MDXComponents = {
  h1: () => null,
  h2: (props) => (
    <h2
      className="mt-10 mb-4 border-l-4 border-accent pl-4 text-2xl font-bold text-white"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold text-white" {...props} />
  ),
  p: (props) => (
    <p className="mb-4 leading-relaxed text-text-secondary" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-6 rounded-r-lg border-l-4 border-accent bg-bg-card py-4 pr-4 pl-6 italic text-text-secondary"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-accent underline hover:text-accent-hover"
      {...props}
    />
  ),
  table: (props) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm" {...props} />
    </div>
  ),
  thead: (props) => <thead className="border-b border-border" {...props} />,
  th: (props) => (
    <th
      className="bg-bg-secondary px-4 py-3 font-semibold text-white"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border-t border-border px-4 py-3 text-text-secondary" {...props} />
  ),
  tr: (props: ComponentPropsWithoutRef<"tr">) => (
    <tr className="even:bg-bg-card/50 odd:bg-transparent" {...props} />
  ),
  ul: (props) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-text-secondary" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-text-secondary" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  strong: (props) => <strong className="font-semibold text-white" {...props} />,
};