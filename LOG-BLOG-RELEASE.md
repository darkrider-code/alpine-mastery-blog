# Blog conversion release — 2026-10-17
## Step 0 — refs and scope
Current main rechecked:3022fd2555741281408b0f8e7c8170cfdfaa54cb. Codex head rechecked:9106b728bbe113396b2a5fc017b81094adeb6749,4 ahead/0 behind. release/blog-conversion created at current main.
Read all four source diffs:73760b2 pricing;8457d69 shared links;2bd0a4c individual hero;9106b72 docs. Pricing and link diffs accepted for integration with the requested fixes. Documentation diff contains unrelated app/family/Lovable instructions: exclude those documents from final release tree and replace with this blog-only log. No app repo modifications.
Source snapshot is the reviewed Codex blog head; existing node_modules reused, no install or dependency changes. Baseline below is measured before release fixes; main lint was previously41 errors/8 warnings and conversion files0/0. New branch integration happens only after this baseline.
Browser skill read. Its associated js/browser runtime is not exposed, so actual390×844 screenshots and social debugger previews cannot be claimed. Continue with source/tests/local HTTP when available; retain manual preview checks.

Build diagnostic exit1; exact output excerpt:
```text
▲ Next.js 16.2.9 (Turbopack)

  Creating an optimized production build ...
✓ Compiled successfully in 32.6s
  Running TypeScript ...
  Finished TypeScript in 12.3s ...
  Collecting page data using 7 workers ...
  Generating static pages using 7 workers (0/141) ...
⚠ Warning: Next.js inferred your workspace root, but it may not be correct.
 We detected multiple lockfiles and selected the directory of C:\Users\danie\package-lock.json as the root directory.
 To silence this warning, set `turbopack.root` in your Next.js config, or consider removing one of the lockfiles if it's not needed.
   See https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory for more information.
 Detected additional lockfiles: 
   * C:\Users\danie\AppData\Local\Temp\am-blog-20261016\package-lock.json

⚠ The "middleware" file convention is deprecated. Please use "proxy" instead. Learn more: https://nextjs.org/docs/messages/middleware-to-proxy
(node:26340) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///C:/Users/danie/AppData/Local/Temp/am-blog-20261016/tailwind.config.ts?id=1792268063157 is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to C:\Users\danie\AppData\Local\Temp\am-blog-20261016\package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
Error occurred prerendering page "/nl/ambassador". Read more: https://nextjs.org/docs/messages/prerender-error
Error: EPERM: operation not permitted, mkdir 'C:\Users\danie\AppData\Local\Temp\am-blog-20261016\.next\server\app\nl\ambassador.segments\$d$locale'
    at ignore-listed frames {
  errno: -4048,
  code: 'EPERM',
  syscall: 'mkdir',
  path: 'C:\\Users\\danie\\AppData\\Local\\Temp\\am-blog-20261016\\.next\\server\\app\\nl\\ambassador.segments\\$d$locale'
}
Export encountered an error on /[locale]/ambassador/page: /nl/ambassador, exiting the build.
⨯ Next.js build worker exited with code: 1 and signal: null

```

Baseline before fixes: {"typecheck": {"exit": 0}, "lint": {"exit": 1, "errors": 41, "warnings": 8}, "tests": {"exit": 0}}

Item1 BEFORE: consumerPricing.ts; ai-skidanalys/page.tsx; test pageSource fixture and price tests. Remove unused hardcoded pricing badges in all8 locales, use formatter for every family monthly amount, leave club pricing unchanged. Rate/date/source uncertainty explicit.

Item1 AFTER: typecheck PASS; changed files lint0 errors/0 warnings;4 helper tests PASS including all8 real family-price dictionaries. Removed8 unused stale price badges, English family price normalized. Club price definitions unchanged. No install/dependency changes.

Item2 BEFORE: preserve utm_term in the one shared campaign allowlist; add regression test including truncation and private-parameter exclusion.

Item2 AFTER: typecheck PASS, touched-file lint0/0,5 tests PASS. utm_term shares the same bounded whitelist as source/medium/campaign/content; private params excluded.

Item3 BEFORE: one thin AppLink adapter delegates to existing useAppLink. Replace Header desktop/mobile, Footer, analysis demo and all clickable app anchors on club/ambassador pages. Leave asset src and JSON-LD identity URLs untracked. Preserve text, destinations, classes and club pricing.

Item3 search: all13 remaining clickable Alpine app anchors now use shared hook through AppLink. CTABanner/InlineCTA already use it. Literal endpoint configuration, video sources and JSON-LD application identities intentionally remain. Legacy posts/5-vanligaste-skidteknik-felen.mdx has a pre-existing raw CTA, but lib/posts.ts loads content/posts only; unchanged, not introduced or served. Active MDX CTAs use shared components.

Item3 AFTER: typecheck PASS; all6 touched components/pages lint0/0;5 helper tests PASS. Destinations/markup retained through thin AppLink adapter, new localized header aria-label reuses existing site.title. React review: no conditional hooks, handlers or new fetches; plain-anchor semantics retained.

Item4 BEFORE: campaignSession.ts; useCampaignSearch; useAppLink; BlogLink; existing internal navigation links and LanguageSwitcher; behavioral tests. URL parsed before optional storage access. Carry5 allowed UTM keys in internal hrefs to survive full navigation/reload even if storage throws. No global click interception, new dependency, or app changes.

Item4 AFTER: typecheck PASS, changed-file lint37 existing errors/3 warnings with no per-file increases,10 tests PASS. Behavioral tests cover available storage, throwing storage getter/methods, internal full-document navigation, language changes and fresh reload with storage both available/blocked. All existing internal navigation components and language router now carry allowed campaign query fields; no URL text enters copy. Baseline test count confirmed3/3.

Item5 BEFORE: ai-skidanalys hero mobile spacing/type only plus localized message regression test. Desktop breakpoints unchanged. Primary free CTA remains first, before secondary CTA/video. No parent headline variant existed in blog; existing localized body covers self/child and parent UTM passes to app. Browser390x844 unavailable: cannot claim measured fold visibility; manual preview check required.

Item5 AFTER: typecheck PASS, changed-file lint0/0,11 tests PASS. All8 intros retain individual benefit without AI-led headline. Reduced mobile spacing/type, primary CTA remains first; no measured390x844 or phone screenshot claimed. Desktop breakpoints unchanged.

Item6 BEFORE: three landing metadata objects replace layout openGraph and lose its locale. Move existing locale mapping to shared landingMetadata helper and reuse in layout/three pages. Align analysis title/description/OG/Twitter with existing individual hero copy in all8 languages; no new SEO claims/content. Canonical/hreflang already correct. Existing OG image verified PNG1200x630; social platform rendering still manual.

Item6 AFTER: typecheck PASS, all7 touched files lint0/0,15 tests PASS. Actual metadata generators tested for all24 route/locale combinations: title/description, canonical,8 hreflang+x-default, OG locale/url/title/description/image and Twitter. PNG dimensions confirmed1200x630. Canonical/hreflang values unchanged. Social debugger/UI render unverified.
