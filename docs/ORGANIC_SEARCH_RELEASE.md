# Organic search and language release — 25 October 2026

## Problem and changes

The public blog had localized titles with Swedish body text on many non-Swedish routes. Several Dutch routes contained Spanish or Swedish. Checking for an MDX file was insufficient. Two new guides also needed all eight language variants.

- Improve the existing carving URL without changing its slug.
- Add filming and parent guides, linked from the Swedish blog index and app homepage.
- Provide actual article bodies in Swedish, English, Norwegian Bokmål, Danish, Finnish, German, French and Dutch.
- Validate body language with an offline build check using franc; no translation API is called by the website or build.
- Remove silent Swedish article fallback, generate paths and hreflang from existing files, and redirect a hypothetical missing translation to its Swedish original.
- Use article publication/update dates in the sitemap; omit the redirecting root URL.
- Extend existing Article structured data with image, language, modification date and mainEntityOfPage. Preserve BreadcrumbList and tracked app links.
- Correct unsupported injury-risk and exact-angle promises in the revised educational content. Video feedback is described as observations, not force measurement, diagnosis or medical clearance.

## Plan assessment

Focus on carving intent, useful filming guidance and parents is appropriate. The quoted search volume of 90 searches/month and competitor ranking were not accompanied by source data and are not treated as measured facts. No ranking or traffic increase is guaranteed.

FAQ rich results stopped appearing on 7 May 2026; HowTo rich results were deprecated in September 2023. Visible questions and answers remain useful, but implementing those schema types is not a route to those Google enhancements.

Sources:
- https://developers.google.com/search/updates
- https://developers.google.com/search/blog/2023/08/howto-faq-changes
- https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping
- https://pubmed.ncbi.nlm.nih.gov/21515807/
- https://www.alpinecanada.org/racer/pathway/path-to-the-podium

## Editorial process and limits

The affected English skiing guides were edited for unambiguous skiing vocabulary. Other affected versions were machine assisted and checked for actual language, complete content, MDX integrity, links and selected terminology. Existing good translations were retained. Language identification is a guard against wrong-language bodies, not a substitute for native editorial review or a factual audit of every historical citation.

## Measurement after release

Use Google Search Console to track impressions, clicks, queries, countries and landing pages for the revised URLs. Compare equivalent periods and account for ski-season growth. Existing blog-to-app campaign parameters distinguish source articles and CTA placements. Search Console indexing requests require the connected owner account; indexing timing is controlled by Google.

## Validation

Final command results and deployment evidence are recorded in the pull request. The app's original local SWC native binding failed under the current host permissions; verify its normal build and publication in Lovable. No dependency or permission workaround is introduced in app code.
