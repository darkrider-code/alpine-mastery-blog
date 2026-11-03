# Alpine Mastery Content Factory

This package creates reviewable social drafts and reply suggestions from the repository's local MDX articles. It never publishes, schedules, scrapes, or calls Reddit, Facebook, X, or Instagram. Model-backed commands send the selected article or pasted thread, together with the versioned prompt, to Anthropic.

## Setup

Run commands from this directory:

```powershell
npm install
$env:ANTHROPIC_API_KEY = "..."
npm run typecheck
npm test
```

The model is configured in `config.json`. Keep the API key in the environment; never put it in config or draft files. PNG rendering uses the optional Playwright package and a locally installed Chromium browser. When Playwright or Chromium is unavailable, the draft command reports the reason and keeps the Markdown/CSV drafts.

## Create and review drafts

```powershell
npm run draft -- --slug biomekaniken-bakom-svangen --locales en,sv --dry-run
npm run draft -- --slug biomekaniken-bakom-svangen --locales en,sv
npm run review
npm run approve -- <queue-id>
npm run export
```

Dry-run estimates tokens with a character-count heuristic and prints all planned output files without making an API call. A live run makes one generation call and a separate claim-verification call for each article/locale. Actual input and output token totals are saved to the queue and printed at completion. Token usage varies with article size, prompt length, and response length; no fixed dollar cost is assumed.

Draft files are written under `out/<date>/<slug>/<locale>/` and ignored by Git. The local `queue.json`, review page, and export are also ignored to avoid committing draft content. Queue states are `draft`, `needs_review`, `approved`, and `published`. The static review page shows fields, claim evidence, status, and a copy button per field. Approving an item only updates the local queue; it does not publish anything. Export includes only approved items and leaves the scheduling date blank for a human.

## Pasted-thread reply assistant

```powershell
npm run reply -- --file thread.txt --locale en --channel reddit
```

The assistant reads only the supplied file and a local MDX article index. It does not retrieve the discussion from its platform. It returns a relevance score, recommendation, short draft, optional locally matched article link, and model token counts. Injury/medical, price, and named-person technique concerns are handled conservatively; the response may recommend skipping.

## Limits

- Claim extraction and a second model verification pass reduce, but cannot eliminate, missed or misjudged claims. Unverified, unsupported, or constraint-violating content is marked `needs_review`, never `ready`.
- MDX is read as frontmatter plus source text; embedded components and context outside the article are not rendered or interpreted.
- Link matching uses a local keyword-overlap index. A weak match can produce no article link.
- The reply safety checks are conservative heuristics backed by prompt instructions; a human must review every suggestion.
- The package does not publish or schedule. Approval/export only produce local files.
- The blog currently contains 15 post directories with eight locales each (120 MDX files); the draft command addresses a requested slug and locale list and does not assume a fixed post count.

## Existing blog baseline

Before adding this folder, the blog's `npm run lint` reported 4 existing errors and 6 warnings. `npm run build` stopped in the existing `prebuild` content test because the installed root dependencies were missing `franc`. This package does not change the root package manifest, lockfile, app code, or these baseline results.
