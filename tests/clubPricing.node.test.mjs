import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { loadTs } from "./loadTs.mjs";

const pricing = await loadTs(resolve("lib/consumerPricing.ts"));
const locales = ["sv", "en", "no", "da", "fi", "de", "fr", "nl"];

test("club base prices and derived per-skier prices are shared", () => {
  assert.deepEqual(pricing.CLUB_PRICES_SEK, {
    small: { monthly: 1190, yearly: 7140, capacity: 10 },
    pro: { monthly: 3990, yearly: 23940, capacity: 50 },
    unlimited: { monthly: 9990, yearly: 59940, capacity: null },
  });
  assert.match(pricing.formatClubPerSkier("small", "monthly", "sv"), /^119 SEK/);
  assert.match(pricing.formatClubPerSkier("pro", "monthly", "sv"), /^80 SEK/);
  assert.match(pricing.formatClubPerSkier("small", "yearly", "sv"), /^714 SEK/);
  assert.match(pricing.formatClubPerSkier("pro", "yearly", "sv"), /^479 SEK/);
});

test("all locales use the required currency mapping and both billing periods", () => {
  const expected = { sv: "SEK", en: "USD", no: "NOK", da: "DKK", fi: "EUR", de: "EUR", fr: "EUR", nl: "EUR" };
  for (const locale of locales) {
    assert.equal(pricing.clubPricing(locale).currency, expected[locale]);
    for (const period of ["monthly", "yearly"]) {
      const small = pricing.formatClubPrice("small", period, locale);
      const pro = pricing.formatClubPrice("pro", period, locale);
      const unlimited = pricing.formatClubPrice("unlimited", period, locale);
      assert.match(small, /SEK/);
      assert.match(pro, /SEK/);
      assert.match(unlimited, /SEK/);
      if (locale === "sv") {
        assert.ok(!small.includes("("));
        assert.ok(!pro.includes("("));
        assert.ok(!unlimited.includes("("));
      } else {
        assert.match(small, /\(/);
        assert.match(pro, /\(/);
        assert.match(unlimited, /\(/);
      }
    }
  }
  assert.match(pricing.formatClubPrice("small", "monthly", "no"), /NOK/);
  assert.match(pricing.formatClubPrice("small", "monthly", "da"), /DKK/);
  assert.match(pricing.formatClubPrice("small", "monthly", "en"), /\$/);
});

test("unlimited keeps volume pricing text separate from its translated base price", async () => {
  const source = await readFile(resolve("components/ClubPricing.tsx"), "utf8");
  assert.match(source, /plan\.id === "unlimited" \? contactVolume/);
  assert.match(source, /formatClubPrice\(plan\.id, period, locale\)/);
  assert.match(source, /formatClubPerSkier\(plan\.id, period, locale\)/);
});

test("club amounts are not duplicated in the page or component", async () => {
  const files = [
    resolve("app/[locale]/klubbpaket/page.tsx"),
    resolve("components/ClubPricing.tsx"),
  ];
  for (const file of files) {
    const source = await readFile(file, "utf8");
    assert.equal(/(?:1190|3990|9990)\b/.test(source), false, `${file} contains a duplicated club base amount`);
    assert.equal(/(?:119|80)\s*SEK/.test(source), false, `${file} contains a duplicated per-skier amount`);
    assert.equal(/199\s*SEK/.test(source), false, `${file} contains a duplicated private amount`);
  }
});
