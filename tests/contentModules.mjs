import ts from "typescript";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
export const locales = ["sv", "en", "no", "da", "fi", "de", "fr", "nl"];
export async function contentModules() {
  const source = await readFile("lib/posts.ts", "utf8");
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true } }).outputText;
  const posts = {};
  new Function("exports", "require", code)(posts, (id) => id === "@/lib/translations" ? { DEFAULT_LOCALE: "sv", SUPPORTED_LOCALES: locales } : require(id));
  const sitemapSource = await readFile("app/sitemap.ts", "utf8");
  const sitemapCode = ts.transpileModule(sitemapSource, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const map = {};
  new Function("exports", "require", sitemapCode)(map, (id) => id === "@/lib/posts" ? posts : { SUPPORTED_LOCALES: locales });
  return { posts, sitemap: map.default };
}
