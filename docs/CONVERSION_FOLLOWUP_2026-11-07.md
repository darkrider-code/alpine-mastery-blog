# Blog SEO follow-up — 7 November 2026

Based on commit `ad3676b65f3cb9bde11e7aa3aadf643c20a9c64c`. Core conversion changes landed on main during preparation and are preserved: free account versus explicit checkout links, practical consumer introductions, existing international prices, last-season footage messaging and removal of unverified speed claims.

Additional changes:

- All five localized landing route families have reciprocal sitemap language alternatives, including x-default, matching their existing canonicals.
- The homepage emits its Open Graph locale.
- Dryland descriptions accurately describe physical training in all eight locales. Actual edits are dated 7 November 2026 without inventing dates for static landing pages.
- Dutch source attribution remains nl while app links explicitly select English, because the app currently has no Dutch UI. Tests cover campaign continuity and this fallback.

All Node tests, Next.js production build and its TypeScript check pass. Targeted lint of changed code passes. Four pre-existing repository-wide lint errors remain as described in CONVERSION_RELEASE_2026-11-07.md. No dependencies, prices, analytics property IDs, consent behavior or content-factory operations are changed.

After merge, verify the Vercel deployment, generated sitemap, canonical/hreflang and the Dutch-to-English handoff. Search-engine indexing and GA4 configuration are separate checks and are not claimed complete by this commit.
