import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir, access } from "node:fs/promises";
import ts from "typescript";
async function files(directory){const output=[];for(const entry of await readdir(directory,{withFileTypes:true})){const path=`${directory}/${entry.name}`;if(entry.isDirectory())output.push(...await files(path));else output.push(path);}return output;}
test("sitemap includes only real canonical translations with truthful dates", async () => {
 const { contentModules, locales } = await import("./contentModules.mjs");
 const { posts, sitemap } = await contentModules();
 const entries = sitemap();
 const expectedArticles = posts.getAllSlugs().reduce((sum, slug) => sum + posts.getPostLocales(slug).length, 0);
 assert.equal(entries.length, locales.length * 4 + expectedArticles);
 assert.equal(new Set(entries.map(entry => entry.url)).size, entries.length);
 assert.ok(!entries.some(entry => entry.url === "https://blog.masteryhub.se"));
 for (const entry of entries) {
   const url = new URL(entry.url);
   assert.equal(url.origin, "https://blog.masteryhub.se");
   const [, locale, slug] = url.pathname.split("/");
   assert.ok(locales.includes(locale));
   if (!slug || ["ai-skidanalys", "klubbpaket", "ambassador"].includes(slug)) continue;
   const post = posts.getPostBySlug(slug, locale);
   assert.ok(post, entry.url);
   assert.equal(entry.lastModified, post.updatedAt ?? post.publishedAt);
   assert.deepEqual(Object.keys(entry.alternates.languages).sort(), posts.getPostLocales(slug).sort());
 }
});

test("active MDX uses shared app CTA components rather than raw app anchors",async()=>{
 for(const path of (await files("content/posts")).filter(path=>path.endsWith(".mdx"))){const source=await readFile(path,"utf8");assert.doesNotMatch(source,/<a[^>]+href=["']https:\/\/alpine\.masteryhub\.se/i,path);assert.doesNotMatch(source,/\]\(https:\/\/alpine\.masteryhub\.se[^)]*\)/i,path);}
});
test("clickable app anchors in components and pages cannot bypass the shared adapter",async()=>{
 for(const path of [...await files("components"),...await files("app")].filter(path=>path.endsWith(".tsx"))){
  const source=await readFile(path,"utf8");const ast=ts.createSourceFile(path,source,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
  function visit(node){if(ts.isJsxOpeningElement(node)&&node.tagName.getText(ast)==="a") for(const attribute of node.attributes.properties){if(ts.isJsxAttribute(attribute)&&attribute.name.getText(ast)==="href"){const value=attribute.initializer?.getText(ast)||"";assert.doesNotMatch(value,/alpine\.masteryhub\.se|productUrls\./,path);}}ts.forEachChild(node,visit);}visit(ast);
 }
});
