import test from "node:test";
import assert from "node:assert/strict";
import { contentModules, locales } from "./contentModules.mjs";
test("landing sitemap alternatives are reciprocal and point to real canonical entries", async () => {
  const { sitemap } = await contentModules();
  const entries = sitemap();
  for (const route of ["", "/ai-skidanalys", "/klubbpaket", "/ambassador", "/partner"]) {
    for (const locale of locales) {
      const entry = entries.find(item => item.url === `https://blog.masteryhub.se/${locale}${route}`);
      assert.ok(entry);
      for (const language of locales) {
        const url = `https://blog.masteryhub.se/${language}${route}`;
        assert.equal(entry.alternates.languages[language], url);
        assert.ok(entries.some(item => item.url === url));
      }
      assert.equal(entry.alternates.languages["x-default"], `https://blog.masteryhub.se/sv${route}`);
    }
  }
});
