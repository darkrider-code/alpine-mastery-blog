# Conversion overnight rerun — 2026-10-17
Branch: codex/conversion-overnight. Never merge/deploy. Previous report remains historical only.
## Step 0: baseline and rule
Baseline lint: 41 errors, 8 warnings. Typecheck passes. App npm ci lockfile mismatch; npm build lacks bunx; normal Vitest/SWC unavailable. Blog build compiles then prerender EPERM. No dependency/lockfile changes allowed or made. Use per-file nonincreasing lint, passing TS and runnable pure helper tests. Full builds and visual browser verification remain unverified.
App alternative esbuild Vitest baseline: 6 suite startup failures (missing Supabase env), 1 passing test; no app analysis or production calls made. Pure helper Node tests transpile using existing TypeScript, without dependency/config changes to the app.
## Expected files before edits
App: src/config/consumerPricing.ts; currency.ts; LanguageContext.tsx; FreeAnalysis.tsx; Membership.tsx; LiveDemoSection.tsx; analytics.ts; attribution.ts; new localized conversionUiCopy.ts; Index.tsx; AIReportCard/ClaimAccountCard/LockedSectionTeaser; shared familyRiders helper/hook; FamilyDashboard.tsx; NewRun.tsx UI only; MemberDashboard.tsx; helper tests.
Blog: lib/consumerPricing.ts; lib/appLinks.ts; shared CTA components; app/[locale]/ai-skidanalys/page.tsx; locale strings; pure helper tests. No MDX edits.
Protected files: uploadManager, VideoInput/anonymous flow, lead-videos, analysis invocation, Supabase schema/RLS/migrations/edge functions, Stripe quantity/config, compression constant. Unchanged.
W1 pricing BEFORE: consolidate price presentation using existing May 2026 approximate rates. Billing remains SEK. Files: consumerPricing, currency/LanguageContext (app); consumerPricing and ai-skidanalys (blog).
W1.1 AFTER: typecheck PASS; changed files lint 0; runnable pricing test PASS. FR/NL family price comes from central formatter. Full build remains baseline EPERM.

W2.6 BEFORE: shared app-link builder preserves original UTM, adds blog context and active language. Files: lib/appLinks.ts; components/useAppLink.ts; InlineCTA.tsx; CTABanner.tsx; ai-skidanalys route shared links; tests. No MDX edits.
W2.6 AFTER: typecheck PASS; all changed files lint 0; 3 pure tests PASS across eight locales, original UTM, nested redirect and parameter allowlist. Tracking click URLs verified through helper tests, browser not available.

W3.9 BEFORE: individual-benefit heading and ordinary-phone introduction on existing ai-skidanalys landing, all eight locales. No new demo or MDX edits.
W3 AFTER: Typecheck PASS, changed-file lint 0, all 3 runnable helper tests PASS. Landing heading and introduction use individual benefits in all eight locales. No MDX edits. Browser verification unavailable.

FINAL documentation: MORNING-REPORT, three standalone LOVABLE-HANDOFF prompts and prioritized CONVERSION-REVIEW replace historical stopped-run reports. No merge/deploy. Full NL/performance/metadata/free-drill work remains proposal-only. See final verification in this log.

## Final verification
10 changed source/test files: lint0→0 errors,0→0 warnings. Typecheck PASS and3/3 new runnable helper tests PASS.
Commands: app `node node_modules/typescript/bin/tsc --noEmit -p tsconfig.app.json`; blog same command without -p. ESLint JSON compared per changed file with captured baseline, including warnings. Runnable tests: existing TypeScript transpiles pure helpers for Node test runner; no new dependency, manifest, lockfile or production test configuration changes.
Do not interpret these checks as a clean full build or existing full suite. App baseline755 errors/27 warnings, npm ci lock mismatch, npm build bunx missing, default SWC/Vitest native-cache startup failure; alternate esbuild baseline6 startup failures missing Supabase env and1 pass. Blog baseline41 errors/8 warnings and prerender EPERM after successful compile/typecheck remain.
Protected audit PASS:219 app files and107 blog files hash-identical to main baseline (all Supabase files, upload/VideoInput/compression, dependency manifests/locks and MDX where present). NewRun handleSubmit and every pre-existing FreeAnalysis/NewRun function invocation identical to baseline. CLIENT_COMPRESSION_ENABLED remains explicit false. No Stripe mutation, no data migration, no merge/deploy. All remote ref writes targeted only codex/conversion-overnight with expected_sha.
One oversized combined commit-read was rejected by local JSON parsing before any tree/ref change; publication retried with individual file reads. No partially published source change resulted.

## BLOCKED
- Verified paid-rider capacity is not returned by check-subscription/useAuth. Default capacity1 can block a genuinely paid second rider; wire and test a server-owned entitlement before release. Do not infer payment from athlete count, membership boolean, sponsor/admin/club access.
- Authoritative upload/analysis enforcement, stable rider-slot identity across self/soft-delete/legacy analyses and concurrency are server work. No protected code modified.
- First historical profile direct INSERT must be tested authenticated against real RLS. Historical deleted profiles cannot yet recreate a free first record through this conservative path. Existing additional create/remove still invokes quantity-changing manage-athlete; safe lifecycle needs Lovable diagnostics.
- Both pending selector/id fixes already exist in source. Deployment, stored runs/ai_reports athlete_profile_id and edge timeout behavior are unverified; do not duplicate code.
- Paid conversion event separation/deduplication and end-to-end persisted attribution to actual payment require server work and test Stripe verification.
- Browser unavailable: no real mobile/desktop, upload, actual funnel event delivery, share preview, Lighthouse or payment verification. No direct DB access to the app's configured project was available.
- New strings cover sv/en/no/da/fi/de/fr/nl plus existing es; full NL provider/app coverage and existing FR/DE family gaps remain. Full NL, form defaults, free-drill test, performance and metadata are proposal-only Wave5.
- Keep baseline cleanup/lock/dependencies outside this work. No unsupported performance or conversion claims.

## Illustrative tracking expectations — NOT observed production events
Direct Instagram: landing_view metadata has path=/free-analysis, entry_path=/free-analysis, active locale, utm_source/medium/campaign/content and first_touch_content. Later report_viewed has the existing run_id passed through AIReportCard; absence of production observation is explicit.
Blog assist: shared link keeps original campaign plus blog_slug/blog_placement/blog_locale and lang; app retains blog fields separately from acquisition source. Test direct and assisted routes in a real browser and inspect actual funnel_events before claiming delivery or paid attribution.

Documentation commit changes only MORNING-REPORT.md, LOVABLE-HANDOFF.md, CONVERSION-REVIEW.md and this log. It does not alter the last verified source snapshot. Decisions, constraints, exact commit list and manual follow-ups are persisted in these repository documents.

