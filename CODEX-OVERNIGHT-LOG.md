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
