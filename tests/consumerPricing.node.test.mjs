import test from "node:test";
import assert from "node:assert/strict";
import { resolve } from "node:path";
import { loadTs } from "./loadTs.mjs";
const p = await loadTs(resolve("lib/consumerPricing.ts"));
test("consumer rates preserve base SEK and safe approximate local presentation", () => {
  assert.equal(p.BASE_MONTHLY_SEK, 199);
  assert.equal(p.MONTHLY_AMOUNTS.EUR, 17);
  assert.equal(p.MONTHLY_AMOUNTS.USD, 19);
  for (const locale of ["sv", "en", "no", "da", "fi", "de", "fr", "nl"]) {
    const formatted = p.formatConsumerPrice(199, locale);
    assert.ok(p.consumerPricing(locale)[3]);
    if (locale !== "sv") { assert.ok(formatted.startsWith("≈ ")); assert.ok(formatted.includes("199 SEK")); }
    else assert.ok(!formatted.includes("≈"));
  }
  assert.ok(p.formatConsumerPrice(945, "fr").includes("945 SEK"));
});
