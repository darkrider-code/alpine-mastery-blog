import test from "node:test";
import assert from "node:assert/strict";
import { resolve } from "node:path";
import { loadTs } from "./loadTs.mjs";
const {individualCopy}=await loadTs(resolve("lib/individualCopy.ts"));
test("all eight individual intros remain complete and avoid AI-led/hype headlines",()=>{
 assert.equal(individualCopy("sv").title,"Se vad du kan förbättra i nästa åk");
 for(const locale of ["sv","en","no","da","fi","de","fr","nl"]){
  const copy=individualCopy(locale);assert.ok(copy.title.trim());assert.ok(copy.body.trim());
  assert.doesNotMatch(copy.title,/^(?:AI|KI|IA|tekoäly)/i);
  assert.ok(!copy.title.includes("!")&&!copy.body.includes("!"));
 }
});
