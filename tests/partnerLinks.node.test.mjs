import test from "node:test";
import assert from "node:assert/strict";
import { resolve } from "node:path";
import { loadTs } from "./loadTs.mjs";
const { partnerSlug, isPartnerSlug, buildPartnerLink, buildPartnerContactLink, buildAppLink, PARTNER_CHANNELS } = await loadTs(resolve("lib/appLinks.ts"));

test("partner slugs normalize names and reject empty, unsafe and overlong values", () => {
  assert.equal(partnerSlug("  Åre École / Skischule Weiß  "), "are-ecole-skischule-weiss");
  assert.equal(partnerSlug("Øst Ægir Œuvre"), "ost-aegir-oeuvre");
  for (const value of ["", "-", "../ski", "Ski", "ski--school", "ski school", "a".repeat(65), "日本語"]) assert.equal(isPartnerSlug(value), false);
  for (const value of ["a", "ski-school", "a".repeat(64)]) assert.equal(isPartnerSlug(value), true);
  assert.equal(isPartnerSlug(partnerSlug("🎿")), false);
});

test("each channel and audience produces exactly the requested partner URL", () => {
  for (const channel of PARTNER_CHANNELS) for (const audience of ["adult","parent"]) {
    const url = new URL(buildPartnerLink("ski-school", channel, audience));
    assert.equal(url.origin + url.pathname, "https://alpine.masteryhub.se/free-analysis");
    assert.deepEqual(Object.fromEntries(url.searchParams), {utm_source:"partner",utm_medium:channel,utm_campaign:"ski-school",utm_content:audience});
  }
  assert.throws(()=>buildPartnerLink("../ski","email","adult"));
  assert.throws(()=>buildPartnerLink("ski","unknown","adult"));
  assert.throws(()=>buildPartnerLink("ski","email","unknown"));
});

test("partner contact campaign survives incoming campaign attribution", () => {
  const url = new URL(buildAppLink(buildPartnerContactLink(), {search:"?utm_source=instagram&utm_medium=social&utm_campaign=old",locale:"sv",slug:"partner",placement:"partner_contact",campaign:"partner"}));
  assert.equal(url.pathname, "/contact");
  assert.equal(url.searchParams.get("utm_source"), "blog");
  assert.equal(url.searchParams.get("utm_medium"), "referral");
  assert.equal(url.searchParams.get("utm_campaign"), "partner");
});
