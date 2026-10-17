import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { pageSource } from "./pageSource.mjs";
const locales={sv:"sv_SE",en:"en_US",no:"nb_NO",da:"da_DK",fi:"fi_FI",de:"de_DE",fr:"fr_FR",nl:"nl_NL"};
for(const route of ["ai-skidanalys","klubbpaket","ambassador"]) test(`${route}: actual metadata generator covers all8 canonical/hreflang/OG variants`,async()=>{
 const page=await pageSource(route);
 for(const [locale,ogLocale] of Object.entries(locales)){
  const metadata=await page.metadata({params:Promise.resolve({locale})});const canonical=`https://blog.masteryhub.se/${locale}/${route}`;
  assert.ok(metadata.title.trim());assert.ok(metadata.description.trim());assert.equal(metadata.alternates.canonical,canonical);
  for(const other of Object.keys(locales)) assert.equal(metadata.alternates.languages[other],`https://blog.masteryhub.se/${other}/${route}`);
  assert.equal(metadata.alternates.languages["x-default"],`https://blog.masteryhub.se/sv/${route}`);
  assert.equal(metadata.openGraph.url,canonical);assert.equal(metadata.openGraph.locale,ogLocale);assert.equal(metadata.openGraph.title,metadata.title);assert.equal(metadata.openGraph.description,metadata.description);
  assert.equal(metadata.openGraph.images[0].url,"https://blog.masteryhub.se/og-image.png");assert.equal(metadata.openGraph.images[0].width,1200);assert.equal(metadata.openGraph.images[0].height,630);
  assert.equal(metadata.twitter.card,"summary_large_image");assert.equal(metadata.twitter.title,metadata.title);assert.equal(metadata.twitter.description,metadata.description);
 }
});
test("shared OG image dimensions match emitted metadata",async()=>{
 const image=await readFile("public/og-image.png");assert.equal(image.readUInt32BE(16),1200);assert.equal(image.readUInt32BE(20),630);
});
