# Partner page verification

## Scope and planned files

Base main commit `6cb103e84d497ab516d8b5e182b420f1afc2c7b5`.

Work branch `feature/partner-page`. The change adds a static landing page for instructors, ski schools, camp organisers and private coaches. Clubs are directed to the existing club page.

Files identified before implementation

- `app/[locale]/partner/page.tsx`
- `lib/partnerCopy.ts`
- `components/PartnerLinkGenerator.tsx`
- `lib/appLinks.ts`
- `components/useAppLink.ts`
- `components/InlineCTA.tsx`
- `components/Footer.tsx`
- `app/sitemap.ts`
- Partner link and page tests
- This verification log

The existing sitemap sanity test also needed its static route count and allowlist updated for the eight partner URLs.

## Baseline and final checks

| Check | Base main | Partner branch |
| --- | --- | --- |
| `npm run lint` | Exit 1, 4 errors and 6 warnings | Exit 1, identical diagnostics |
| `npm run build` | Exit 0 | Exit 0, eight additional static partner routes |
| `npm test` | Existing suite extended for this change | 32 passed, 0 failed |
| Package manifests and lockfiles | Reference versions | Byte-for-byte unchanged |

Lint logs were compared using `diff -u` with no differences. Builds used the same isolated Linux environment, Node 22, and dependencies installed through the unchanged root lockfile. Existing middleware deprecation and module-type warnings appeared in both builds.

The new tests cover slug normalization and validation, every channel/audience URL combination, invalid channel/audience values, fixed contact attribution despite incoming campaign parameters, all eight rendered locales, metadata, sitemap registration, footer navigation, and centralized app URL construction.

## Browser verification

Playwright and Chromium were installed as temporary test tooling outside the repository. The built site was tested with a 390 by 844 viewport.

- All eight locale pages rendered without browser errors or horizontal overflow.
- All four channels produced the exact adult and guardian URLs in every locale.
- Both copy buttons copied their corresponding URL.
- Clipboard denial displayed localized recovery instructions.
- Invalid names cleared both outputs and disabled the buttons.
- Partner input and channel changes emitted no network requests and changed no cookies, local storage or session storage.
- The existing global language and campaign mechanisms remain separate from the generator.
- The contact CTA kept `utm_source=blog&utm_medium=referral&utm_campaign=partner` after hydration with incoming Instagram attribution.
- The Swedish mobile rendering was visually inspected.
- Vercel preview returned HTTP 200 for the Swedish partner route.

## Implementation notes

The generator uses React component state only. It creates links and does not generate QR images. Channel values are `lesson_handout`, `email`, `social` and `qr_print`.

A valid slug has 1–64 ASCII letters/digits, with single hyphens separating groups. Accents are normalized, with explicit handling for ß, æ, œ and ø. Empty or overlong normalized values cannot be copied.

Contact CTAs use InlineCTA and the shared link builder. Existing callers keep their attribution behavior. No app URLs were added to MDX or the partner page/component.

SEO follows the club page with localized title/description, canonical, eight hreflang alternatives plus Swedish x-default, OG and Twitter metadata, and sitemap entries.

The app's reporting and first-analysis entitlement are outside this repository. Their behavior was not changed or independently verified by this PR.
