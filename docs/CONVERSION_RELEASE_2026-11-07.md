# Blog conversion and search release — 7 November 2026

Generic account buttons now open signup and save access to the member/family area without opting the visitor into a subscription. Explicit Alpine checkout destinations passed through the shared app-link adapter retain the chosen plan/coupon and include checkout=true. Campaign parameters and article/placement/locale attribution are preserved.

The homepage uses the existing localized private-skier/parent introduction in all eight languages rather than AI-led English/Nordic variants. Shared CTA copy explains the practical outcome, accepts last-season footage and states that the first analysis needs no card. Unverified seconds/two-minute promises were removed from these surfaces. The Swedish dryland article description now describes physical training, correcting its snippet and article-card text.

Existing canonicals, hreflang, sitemap, URLs, translations, prices and source article bodies are preserved.

## Validation

- 34 tests pass, including language coverage, canonical/hreflang metadata, sitemap, CTA adapters and new signup/checkout regression coverage.
- Next.js production build and TypeScript check pass.
- Changed TS/TSX files pass targeted ESLint.
- Full ESLint baseline and result: 4 existing errors, 6 existing warnings; no additional diagnostics. Existing errors are in the CommonJS description script, LanguageProvider and related unchanged code.
- No dependency/lockfile changes. No paid campaigns or tracking IDs configured.

The companion app change in darkrider-code/alpinemastery must be published through Lovable to complete the corrected cross-site journey. Backend trial/first-payment cohort reporting and GA4 account configuration are recorded in that repository's conversion release note.
