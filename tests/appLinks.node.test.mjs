import test from "node:test";
import assert from "node:assert/strict";
import { resolve } from "node:path";
import { loadTs } from "./loadTs.mjs";
const { buildAppLink, campaignSearch } = await loadTs(resolve("lib/appLinks.ts"));
test("blog links preserve original campaign and account redirect", () => {
  for (const locale of ["sv", "en", "no", "da", "fi", "de", "fr", "nl"]) {
    const url = new URL(buildAppLink("https://alpine.masteryhub.se/auth?redirect=%2Fmembership%2Fcheckout%3Fcycle%3Dmonthly", { search: "?utm_source=instagram&utm_medium=organic_social&utm_campaign=ski&utm_content=parent&email=private", locale, slug: "feedback", placement: "inline" }));
    assert.equal(url.searchParams.get("utm_source"), "instagram");
    assert.equal(url.searchParams.get("utm_content"), "parent");
    assert.equal(url.searchParams.get("lang"), locale);
    assert.equal(url.searchParams.get("blog_slug"), "feedback");
    assert.equal(url.searchParams.get("redirect"), "/membership/checkout?cycle=monthly");
    assert.equal(url.searchParams.get("email"), null);
  }
});
test("fallback and remembered campaign retain only allowed parameters", () => {
  assert.equal(campaignSearch("?email=private&utm_content=adult"), "utm_content=adult");
  const url = new URL(buildAppLink("https://alpine.masteryhub.se/free-analysis", { search: "", locale: "nl", slug: "post", placement: "banner" }));
  assert.equal(url.searchParams.get("utm_source"), "masteryhub_blog");
});
