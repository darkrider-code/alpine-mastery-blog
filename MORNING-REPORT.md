1. Frontendändringar finns nu i separata commits på codex/conversion-overnight i båda repos; inget är mergat eller driftsatt.
2. Gratisanalys, planval, prisvisning och privatpersonsbudskap är förbättrade; befintlig demo/onboarding är återanvända.
3. Blogglänkar för vidare UTM, artikel/placering och språk; direkt /free-analysis får landing-event och content-attribution.
4. Family first rider: gratis första historiska profil, delad namnregel och UI-spärr före befintlig upload är implementerade.
5. RELEASEBLOCKER: betald åkarkapacitet saknas i frontend; default1 blockerar även en andra betald åkare tills serverkälla kopplats in.
6. Rider selector och athlete_profile_id fanns redan; de är återanvända, inte ombyggda. Verklig lagring och timeouts är inte körtestade.
7. Typkontroll och nya körbara helper-tester passerar; ändrade filers lintfel ökar inte. Hela projekten har fortsatt röd baslinje.
8. Ingen browser-/mobil-, autentiserad databas- eller betalningsverifiering gjordes. Full NL-app är fortfarande ett förslag.
9. Kör de tre fristående Lovable-prompterna i ordning: betalplatser/spårning, familj/server, resterande verifiering och releasechecklista.
10. Läs BLOCKED och gör manuella tester före beslut om merge/deploy; använd inte för-fix-data som konverteringsbaslinje.

# MORNING-REPORT — 2026-10-17

## Vad som är gjort

W1–3: gemensam ungefärlig prisformatering per repo med tydlig SEK, planberoende CTA, neutral gratisanalys-text, runId-prop, befintlig demo med felstatus, CTA-attribution och direkta landningar, individfokuserad hero och parent/adult-intro, samt befintlig kontoaktivering före konkurrerande uppgraderingar. Exakt scope och återstående frågor finns i CONVERSION-REVIEW.md. Detta är implementerad frontend på arbetsgren, inte en verifierad produktionsrelease eller uppmätt ökning.

## Family first rider

Första historiska åkarprofilen kan skapas utan medlemskap via befintlig parent INSERT i athlete_profiles. Familjelänken är synlig för inloggade. Namnregeln ligger i en gemensam helper/hook och används i den egna dashboardens namnvisning; förälderns sparade profilnamn, e-post och betalare skrivs inte över. Profilredigeringen visar fortfarande förälderns egna uppgifter. Navbar saknar eget kontonamn, och delade analyser visar idag inget offentligt åkarnamn; ingen ny personuppgift har lagts till där.

UI spärrar andra åkarens familjegen väg och hela NewRun-formuläret innan VideoInput monteras. Väljaren ligger utanför spärren så att första åkaren går att välja. Fetchfel och vänteläge har egna meddelanden; self tillåts bara utan aktiva barnprofiler. Ingen ändring i upload/handleSubmit/analysis invocation. Nya texter finns på åtta språk samt befintlig spanska.

**BLOCKED:** getAllowedUploadRiders har ingen verifierad serverkapacitet och returnerar 1. Detta måste kopplas och servervalideras före release för två betalda åkare. Befintlig manage-athlete kan ändra Stripe quantity vid ytterligare create/remove och är helt orörd. Gratisprofilvägen är inte körd mot faktisk RLS; samtidiga flikar, historisk soft-delete/ny första profil och beständig platsidentitet behöver serverlösning. Helpern använder äldsta historiska profilen och faller tillbaka till föräldern om den tas bort, utan att automatiskt ge dess plats till en annan profil. Namnbytesväg och invalidering behöver manuell verifiering; ingen ny renamefunktion är byggd.

**Beroende på tidigare Lovable-fixar:** selector och athlete_profile_id finns redan i aktuell kod. /family skickar ?athlete, NewRun validerar ägarskap och befintligt formulär skickar athlete_profile_id till runs och analyze-run. Att deployad version verkligen lagrar rätt id i runs/ai_reports samt att edge-timeout är löst är inte verifierat. Detta är inte en ny reimplementation.

**Manuellt:** logga in på ett testkonto, skapa första åkaren och kontrollera förälderns orörda namn/e-post/Stripe-rad; bekräfta åkarnamn i egen dashboard och familj. Testa uppladdning från /family och /member/new-run samt lagrat athlete_profile_id. Försök för andra åkaren via familj, selector, direktlänk och self med kapacitet1; se lugnt meddelande och medlemskapslänk. Testa verkligt betald kapacitet2 först när källan är inkopplad. Testa namnbyte, borttagning, inga åkare, långa namn/specialtecken och fetchfel.

## Verifiering och begränsningar

- App: tsc --noEmit -p tsconfig.app.json passerar. Nya Node-helper-tester passerar. Varje berörd fil har oförändrat eller lägre lintfel än sin baslinje, ingen global lintupprensning.
- Blogg: tsc --noEmit och de tre nya Node-helper-testerna passerar; berörda filer har inga ökade lintfel.
- Appens baslinje är 755 lintfel/27 varningar; normal build stoppas av saknad bunx, vanlig Vitest/Vite av SWC-native-cache. Alternativ lokal esbuildtest har 6 startupfel utan Supabase-env och 1 pass. Appens npm ci har osynkad lockfile. Inga dependencies/lockfiles är ändrade.
- Bloggens baslinje är 41 lintfel/8 varningar; build kompilering/typkontroll passerade före Windows EPERM vid prerender. Det är inte bevis att samma fel finns på en annan byggserver.
- Browsermiljö saknas: inga uppmätta LCP/CLS, riktiga uploadkörningar, faktiska funnel_events eller betalningar. Nya rena helper-tester är ett komplement, ingen ersättning för fulla befintliga suites eller E2E.
- Full NL-provider och övriga våg5-punkter är proposal-only. Skyddade filer/sektioner verifieras mot baseline i slutloggen. Inga MDX-CTA, schema/RLS/edge-, Stripe- eller kompressionsändringar ingår.

## Commits


app

- `ece53af1a4d7ed7b34bc11d528bd4c45557388da` Central approximate consumer prices
- `51bf8b908bb0426369fd41cfb1fb4aea0c9286f4` fix: distinguish free analysis and selected membership plan
- `52b8a2b5d5a14ab6a6af2c6ddfd5f4dc30c10107` fix: correlate free report views with existing run id
- `0e5bfc241a072d0f5ce89ee910ed13100a307628` fix: show a localized fallback when the existing demo is unavailable
- `6a8ac7516bb739bc723b9087a6a2afcbe9a6f0dc` fix: preserve attribution and active locale for direct analysis entries
- `adf0e8fecf4820fc034d9b08edfe17c358a3dcd9` fix: clarify individual value and put account activation before upgrades
- `618923b7f8e7b0c82dfdcf65037fdc639a143d41` feat: show first rider name without overwriting parent identity
- `6ee56248af2bbe4ff5c4162ee8822abe13dbd25a` feat: add localized first rider and access status copy
- `78745f14a073909a225924c92070c7172417c5a3` feat: allow first rider profile without changing account billing
- `9efe61630179ece5c04eececf327c7e6d868640c` feat: gate second rider upload entry points before the existing flow
- `b5e5b3b976a06d4cb94cfedcac741c5f072cebc9` fix: remove unqualified free trial promises from membership banners
- `5508d3fdca8f6289547aa46e4461a35668d9ff93` fix: remove inaccurate billing promises from rider removal copy

blog

- `73760b2bb9582670b35046ca63aed514ec40ffd9` Correct FR/NL family currency presentation
- `8457d6979a58d0dca5f82fcf39424084cae79811` feat: preserve campaign and language across shared blog app links
- `2bd0a4c4e80898a2225ce0035668274d3503ba84` fix: lead blog analysis landing with individual technique feedback

Rapportcommit tillkommer efter denna lista; senaste SHA syns på arbetsgrenens historik.
