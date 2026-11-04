import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  outputFileTracingIncludes: { "/admin": ["./content-factory/runtime/cli.mjs", "./content-factory/config.json", "./content-factory/prompts/*.md", "./content/posts/**/*.mdx"] },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
