import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createRequire } from "node:module";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ts from "typescript";
import { loadTs } from "./loadTs.mjs";

const require = createRequire(import.meta.url);
const links = await loadTs(resolve("lib/appLinks.ts"));
const { partnerCopy } = await loadTs(resolve("lib/partnerCopy.ts"));
const metadata = await loadTs(resolve("lib/landingMetadata.ts"));
const locales = ["sv","en","no","da","fi","de","fr","nl"];
async function compile(path, dependencies) {
  const source = await readFile(resolve(path), "utf8");
  const code = ts.transpileModule(source, {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText;
  const output = {};
  new Function("require","exports",code)((id)=>dependencies[id] ?? require(id),output);
  return output;
}
const shared = {
  "@/lib/appLinks": links, "@/lib/partnerCopy": {partnerCopy},
  "@/lib/landingMetadata": metadata, "@/lib/translations": {SUPPORTED_LOCALES:locales},
  "next/navigation": {notFound:()=>{throw new Error("404");}},
  "next/link": ({children,href,...props})=>React.createElement("a",{href,...props},children),
};
const generator = await compile("components/PartnerLinkGenerator.tsx",shared);
const page = await compile("app/[locale]/partner/page.tsx",{
  ...shared,
  "@/components/PartnerLinkGenerator": generator,
  "@/components/InlineCTA": ({url,text})=>React.createElement("a",{href:url},text),
});

test("partner page and generator render native copy in all eight locales",async()=>{
  assert.deepEqual(Object.keys(partnerCopy),locales);
  assert.deepEqual(page.generateStaticParams(),locales.map(locale=>({locale})));
  for(const locale of locales){
    const copy=partnerCopy[locale];
    const html=renderToStaticMarkup(await page.default({params:Promise.resolve({locale})}));
    for(const text of [copy.title,copy.free,copy.cta,copy.generator.title,copy.generator.name,copy.generator.parent]) {
      const escaped=renderToStaticMarkup(React.createElement("span",null,text)).slice(6,-7);
      assert.ok(html.includes(escaped),locale+" "+text);
    }
    assert.ok(html.includes('/'+locale+'/klubbpaket'));
    assert.equal((html.match(/<h1/g)||[]).length,1);
    assert.equal((html.match(/<textarea/g)||[]).length,2);
    assert.equal((html.match(/disabled=""/g)||[]).length,2);
    assert.equal(copy.steps.length,3);
    assert.equal(copy.limits.length,3);
    assert.equal(copy.generator.channels.length,4);
    assert.ok(!JSON.stringify(copy).includes("TODO"));
    assert.ok(!JSON.stringify(copy).includes("!"));
  }
  await assert.rejects(page.default({params:Promise.resolve({locale:"xx"})}),/404/);
});

test("partner metadata matches the club SEO contract for each locale",async()=>{
  for(const locale of locales){
    const result=await page.generateMetadata({params:Promise.resolve({locale})});
    const url="https://blog.masteryhub.se/"+locale+"/partner";
    assert.equal(result.title,partnerCopy[locale].title);
    assert.equal(result.description,partnerCopy[locale].description);
    assert.equal(result.alternates.canonical,url);
    assert.equal(result.alternates.languages["x-default"],"https://blog.masteryhub.se/sv/partner");
    for(const language of locales)assert.equal(result.alternates.languages[language],"https://blog.masteryhub.se/"+language+"/partner");
    assert.equal(result.openGraph.url,url);
    assert.equal(result.openGraph.locale,metadata.getOpenGraphLocale(locale));
    assert.equal(result.openGraph.images[0].width,1200);
    assert.equal(result.twitter.card,"summary_large_image");
  }
});

test("new partner UI centralizes app URLs and adds only footer navigation",async()=>{
  for(const filename of ["app/[locale]/partner/page.tsx","components/PartnerLinkGenerator.tsx","lib/partnerCopy.ts"]){
    const source=await readFile(resolve(filename),"utf8");
    assert.ok(!/https:\/\/alpine\.masteryhub\.se/.test(source),filename);
  }
  const source=await readFile(resolve("components/PartnerLinkGenerator.tsx"),"utf8");
  assert.ok(!/localStorage|sessionStorage|document\.cookie|fetch\(|XMLHttpRequest|sendBeacon/.test(source));
  const footer=await readFile(resolve("components/Footer.tsx"),"utf8");
  assert.ok(footer.includes('/partner'));
  assert.ok(footer.includes("partnerCopy[locale]?.footer"));
  const sitemap=await readFile(resolve("app/sitemap.ts"),"utf8");
  assert.ok(sitemap.includes('"/partner"'));
});
