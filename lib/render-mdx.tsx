import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { mdxComponents } from "@/components/mdx-components";

export async function RenderMdx({ source }: { source: string }) {
  const { default: Content } = await evaluate(source, {
    ...runtime,
    development: process.env.NODE_ENV === "development",
  });

  return <Content components={mdxComponents} />;
}
