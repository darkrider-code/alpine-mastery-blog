import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir, access } from "node:fs/promises";
import ts from "typescript";
async function files(directory){const output=[];for(const entry of await readdir(directory,{withFileTypes:true})){const path=`${directory}/${entry.name}`;if(entry.isDirectory())output.push(...await files(path));else output.push(path);}return output;}
test("actual sitemap emits unique valid URLs for all locales and real routes/posts",async()=>{
 const localeSource=await readFile("lib/translations.ts","utf8");const locales=[...localeSource.matchAll(/code: "([a-z]+)"/g)].map(match=>match[1]);
 assert.deepEqual(new Set(locales),new Set(["sv","en","no","da","fi","de","fr","nl"]));
 const slugs=(await readdir("content/posts",{withFileTypes:true})).filter(entry=>entry.isDirectory()).map(entry=>entry.name).sort();
 const source=await readFile("app/sitemap.ts","utf8");const ast=ts.createSourceFile("sitemap.ts",source,ts.ScriptTarget.Latest,true);
 const fn=ast.statements.find(node=>ts.isFunctionDeclaration(node)&&node.name?.text==="sitemap");assert.ok(fn);
 const code=ts.transpileModule(fn.getText(ast),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
 const exports={};new Function("exports","SUPPORTED_LOCALES","getAllSlugs",code)(exports,locales,()=>slugs);const entries=exports.default();
 assert.equal(entries.length,1+locales.length*(4+slugs.length));assert.equal(new Set(entries.map(entry=>entry.url)).size,entries.length);
 for(const locale of locales){for(const route of ["ai-skidanalys","klubbpaket","ambassador"]){assert.ok(entries.some(entry=>entry.url===`https://blog.masteryhub.se/${locale}/${route}`));await access(`app/[locale]/${route}/page.tsx`);}}
 for(const entry of entries){const url=new URL(entry.url);assert.equal(url.origin,"https://blog.masteryhub.se");assert.equal(url.search,"");const [,locale,slug]=url.pathname.split("/");if(!locale)continue;assert.ok(locales.includes(locale));if(slug&&!['ai-skidanalys','klubbpaket','ambassador'].includes(slug)){assert.ok(slugs.includes(slug));await access(`content/posts/${slug}/sv.mdx`);}}
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
