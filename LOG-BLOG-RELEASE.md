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

Item7 BEFORE: source safety tests for actual sitemap function/routes, active MDX CTA policy and remaining direct app anchors. No new posts/dependencies/lockfile changes. Legacy unserved MDX exception reported; existing content untouched.

Item7 AFTER: typecheck PASS, new safety test lint0/0,18 tests PASS. Actual sitemap returns unique clean URLs covering all8 locales,3 landings and existing post slugs; every article has Swedish fallback. Active MDX passes shared-CTA policy; AST scan finds no raw direct app anchors in components/pages. Existing legacy unserved raw CTA reported, no MDX edits.

Item4 follow-up BEFORE: LanguageProvider.tsx currently has an unguarded localStorage write; blocked storage could crash client despite campaign fallback. Guard that optional write and exercise its actual effect callback with throwing/available storage. No locale ownership/model change.

Item4 storage guard AFTER: typecheck PASS, provider lint1 existing error/1 warning unchanged,19 tests PASS. Actual language effect callback exercised with available/throwing localStorage; document.lang remains nl and no exception escapes. Full club localeContent compared byte-for-byte with current main: unchanged, including every club price/copy field.

Build diagnostic exit1; exact output excerpt:
```text
▲ Next.js 16.2.9 (Turbopack)

  Creating an optimized production build ...
✓ Compiled successfully in 21.4s
  Running TypeScript ...
  Finished TypeScript in 11.0s ...
  Collecting page data using 7 workers ...
  Generating static pages using 7 workers (0/141) ...
⚠ Warning: Next.js inferred your workspace root, but it may not be correct.
 We detected multiple lockfiles and selected the directory of C:\Users\danie\package-lock.json as the root directory.
 To silence this warning, set `turbopack.root` in your Next.js config, or consider removing one of the lockfiles if it's not needed.
   See https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory for more information.
 Detected additional lockfiles: 
   * C:\Users\danie\AppData\Local\Temp\am-blog-20261016\package-lock.json

⚠ The "middleware" file convention is deprecated. Please use "proxy" instead. Learn more: https://nextjs.org/docs/messages/middleware-to-proxy
(node:9036) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///C:/Users/danie/AppData/Local/Temp/am-blog-20261016/tailwind.config.ts?id=1792268894581 is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to C:\Users\danie\AppData\Local\Temp\am-blog-20261016\package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
Error occurred prerendering page "/da/snoforhallanden". Read more: https://nextjs.org/docs/messages/prerender-error
Error occurred prerendering page "/nl/hjarnan-som-avgor". Read more: https://nextjs.org/docs/messages/prerender-error
Error: EPERM: operation not permitted, mkdir 'C:\Users\danie\AppData\Local\Temp\am-blog-20261016\.next\server\app\nl\hjarnan-som-avgor.segments\$d$locale'
    at ignore-listed frames {
  errno: -4048,
  code: 'EPERM',
  syscall: 'mkdir',
  path: 'C:\\Users\\danie\\AppData\\Local\\Temp\\am-blog-20261016\\.next\\server\\app\\nl\\hjarnan-som-avgor.segments\\$d$locale'
}
Export encountered an error on /[locale]/[slug]/page: /nl/hjarnan-som-avgor, exiting the build.
Error: EPERM: operation not permitted, mkdir 'C:\Users\danie\AppData\Local\Temp\am-blog-20261016\.next\server\app\da\snoforhallanden.segments\$d$locale'
    at ignore-listed frames {
  errno: -4048,
  code: 'EPERM',
  syscall: 'mkdir',
  path: 'C:\\Users\\danie\\AppData\\Local\\Temp\\am-blog-20261016\\.next\\server\\app\\da\\snoforhallanden.segments\\$d$locale'
}
Export encountered an error on /[locale]/[slug]/page: /da/snoforhallanden, exiting the build.
Error occurred prerendering page "/sv/knaskador-i-alpinism". Read more: https://nextjs.org/docs/messages/prerender-error
Error: EPERM: operation not permitted, mkdir 'C:\Users\danie\AppData\Local\Temp\am-blog-20261016\.next\server\app\sv\knaskador-i-alpinism.segments\$d$locale'
    at ignore-listed frames {
  errno: -4048,
  code: 'EPERM',
  syscall: 'mkdir',
  path: 'C:\\Users\\danie\\AppData\\Local\\Temp\\am-blog-20261016\\.next\\server\\app\\sv\\knaskador-i-alpinism.segments\\$d$locale'
}
Export encountered an error on /[locale]/[slug]/page: /sv/knaskador-i-alpinism, exiting the build.
⨯ Next.js build worker exited with code: 1 and signal: null

```

## Final verification and release boundaries
Current main rechecked again:3022fd2555741281408b0f8e7c8170cfdfaa54cb, unchanged. Reviewed source head9106b728bbe113396b2a5fc017b81094adeb6749 was4 ahead/0 behind; all4 commits integrated through release-only merge b1efdc7b00bff5da4a30c4e8e7fbc46be3891119. Mixed app/Lovable documents removed from final tree; this repo needs no Lovable work.
Full final typecheck PASS; full lint41 errors/8 warnings exactly baseline, no per-file increases;19/19 tests PASS versus3/3 baseline. Literal `node --test tests/*.node.test.mjs` also ran successfully from blog repo root. Existing dependency installation reused; no package.json/lockfile changes or global lint cleanup.
Final Next build compiled and passed TypeScript, then reproduced baseline EPERM mkdir on Windows `$d$locale` segment output. Exact before/after excerpts above. Not a locally successful production build. GitHub/Vercel independently reported the source-head preview READY, evidence below.
Local Next dev HTTP integration:24/24 landing route/locale combinations returned200, correct canonical,9 language alternates, description and OG URL/image/locale with facebookexternalhit user agent. Separate visible-text checks excluded scripts/styles and verified all8 formatted consumer prices, including no199-euro text on FR/NL. Actual sitemap.xml parsed with137 unique URLs and all24 landings. Dev server stopped after checks.
Protected content audit:118 files unchanged (all MDX,public assets,package and lock,next config,middleware,sitemap). Complete club localeContent block compared directly with main and unchanged, including all club prices/copy. No app repo, Stripe, Supabase, family, edge, dependency or production deployment changes.
Only deliberate UI layout edits are analysis hero mobile spacing/type; desktop breakpoints retained. Active article/navigation destinations preserved while adding allowed campaign params. No global click interception. No new routes/posts, testimonials or numerical claims.

## Computed price output
| Locale | Local currency | Visible monthly price |
|---|---|---|
| sv | SEK | 199 kr |
| en | USD | ≈ $19 (199 SEK) |
| no | NOK | ≈ 203 kr (199 SEK) |
| da | DKK | ≈ 137 kr. (199 SEK) |
| fi | EUR | ≈ 17 € (199 SEK) |
| de | EUR | ≈ 17 € (199 SEK) |
| fr | EUR | ≈ 17 € (199 SEK) |
| nl | EUR | ≈ € 17 (199 SEK) |

All foreign-currency prices are approximate and retain exact199 SEK. Swedish199 kr is already the exact SEK base. Retained rates are May2026 estimates with unknown exact source day, inspected2026-10-17, not live rates. Source comment explicitly states the rates/date/rounding must be reviewed by Daniel before release.

## Source preview evidence
State:READY; target:preview (target=null, not production); commit:56a6d575f2ee0fbd71e5c24348e6efe7f60f8475; branch:release/blog-conversion; project:alpine-mastery-blog.
URL:https://alpine-mastery-blog-n0ubq6p8h-darkrider-codes-projects.vercel.app
Created by existing Git integration on branch push; no deployment API, production merge or deploy command used. Final documentation commit may create a newer equivalent-code preview; PR/status links identify latest SHA.

## Manual / unverified
- No browser runtime available: cannot claim actual390x844 fold visibility, touch behavior, screenshots or Instagram/Facebook debugger rendering. HTTP and fixture tests are not browser E2E.
- On a phone, check /sv/ai-skidanalys and FR/NL prices. Check primary CTA above fold and no overflow. Also spot-check all8 locales.
- With ?utm_source=instagram&utm_medium=social&utm_campaign=test&utm_content=parent&utm_term=x, click header(desktop/mobile), inline and banner CTAs; verify all5 UTM fields, blog_slug, blog_placement, blog_locale and lang in app URL.
- Navigate article→landing, change language, reload and repeat with storage blocked. Source/behavior tests passed, real browser flow remains manual. Before hydration shared links have server fallback attribution; JavaScript is required for campaign-aware client hrefs.
- App-side receipt/persistence, signup and paid conversion are outside this repo and were not verified.
- Legacy unserved posts/5-vanligaste-skidteknik-felen.mdx contains an existing raw CTA. Active lib/posts.ts loads content/posts only and active MDX passed the CTA check. No MDX changes introduced.

## Release commit record
- `b1efdc7b00bff5da4a30c4e8e7fbc46be3891119` Integrate four individually reviewed Codex blog commits
- `5635d8f214a082142127b284cbafefeea8404fef` docs: scope release to blog conversion and record measured baseline
- `780f98ee7309ba6a8bff34a50b265e21ef61b208` fix: use shared approximate pricing for all consumer locales
- `8617298104eba324f6b69b731b167a236b2e05a6` fix: preserve utm_term through shared blog app links
- `7fecc09478e037b0c030a945c751fe101abc6114` fix: route all blog app navigation through the shared link builder
- `ba6ee5d9506674a660ff2bc56f12ee5807e7a0eb` fix: preserve blog campaign across navigation and reload without storage
- `f13b288043ccb4f9d4d7374da1e3e051387c18f5` fix: keep individual benefit and primary analysis CTA early on mobile
- `e07164afae9f836d4cd65336043f9ce3a499a073` fix: preserve localized social metadata on all landing pages
- `0a90e96d92bbc3401417802861b0749e9844f494` test: verify sitemap routes and shared app CTA coverage
- `56a6d575f2ee0fbd71e5c24348e6efe7f60f8475` fix: keep URL language usable when localStorage is blocked
The final docs commit containing this record is listed in the PR/history (a file cannot contain its own commit SHA).

