# Conversion review — 2026-10-17

Mål: fler privatpersoner startar gratisanalysen och blir därefter betalande medlemmar. Mobil först; ambitiösa vuxna och föräldrar. Klubbar har separat outreach. Ingen uppmätt konverteringseffekt påstås. Detta är kodgranskning och verifierade frontendändringar på arbetsgrenar; mobil/desktop i riktig webbläsare återstår.

Prioriterade topp 10. Effekt är förväntad, inte uppmätt. S = under en timme för en isolerad ändring, M = flera timmar, L = större beroende/backendarbete. Översättning och full manuell QA kan öka tiden.

| # | Fel och belägg | Effekt | Arbete | Konkret förslag och status |
|---|---|---|---|---|
| 1 | Bloggens FR/NL-familjetext visade 199 euro; `app/[locale]/ai-skidanalys/page.tsx` | Hög | S/M | Gemensam ungefärlig prisvisning med debitering i SEK. Implementerat; manuell valutagranskning återstår. |
| 2 | Startsidan ledde med tränarnas arbetsbörda; `Index.tsx`, bloggens huvudrubrik | Hög | M | Individuell feedback från mobilfilm och tydligt nästa steg. Implementerat på båda grenarna. |
| 3 | Mobil gratisanalys blandades med provmånad och årsplanens gratis-CTA; `Membership.tsx`, `Index.tsx` | Hög | S | Separera gratisanalys, konto och planval. Implementerat; kontrollera alla kampanjytor i browser. |
| 4 | Bloggens delade CTA saknade kampanj, artikel och språk; `InlineCTA`, `CTABanner` | Hög för mätning | M | Gemensam länkbyggare behåller UTM och separat bloggkontext/lang. Implementerat, ingen MDX ändrad. |
| 5 | Checkout på 0 kr kan räknas som köp; `stripe-webhook`, `analytics.ts` | Hög för beslut | L | Separera provstart, första positiva betalning och förnyelse med deduplicering. BLOCKED: server, Lovable prompt 1. |
| 6 | Flera uppgraderingsvägar före kontoaktivering; `AIReportCard`, `ClaimAccountCard`, `conversionCopy` | Hög | M | Befintlig kontoaktivering först, medlemskap separat. Implementerat för gratisresultatet; betalväggens innehåll behöver browser-QA. |
| 7 | Direkt `/free-analysis` missade landing och innehålls-UTM tappades; `analytics.ts`, `funnelContext.ts` | Hög för mätning | M | Första entré per dokument, beständig first-touch content och aktiv locale. Implementerat; verkliga `funnel_events` ej verifierade. |
| 8 | Ingen frontendkälla för betalda åkarplatser; `FamilyDashboard`, `NewRun`, `familyRiders` | Hög | L | Gratis första profil, delad namnregel och spärr före befintligt formulär. Implementerat i UI; kapacitet/serverkontroll blockerar release för två betalda åkare. |
| 9 | Appen stöder es men saknar nl i språkprovidern; `LanguageContext`, `translations.ts` | Medel/hög | L | Full nederländsk app är ett separat förslag. Nya strängar finns på alla åtta, men nl kan ännu inte väljas i appen. |
| 10 | SPA:s sociala metadata och tung bloggvideo behöver mätas; `SEO.tsx`, `index.html`, bloggmetadata, `public/videos/landing-video.mp4` | Medel | M | Granska initial HTML/OG för varje URL, mät LCP/CLS på mobil och videons preload/transfer. Förslag; ingen uppmätt hastighet eller verifierad OG-preview. |

## Quick wins under en timme

En isolerad rättning av planens CTA, mobilens gratismening, `runId`-prop och demo-fallback är genomförd. Nästa små steg är manuella länktester av alla CTA och prisjämförelse med nuvarande Stripe-konfiguration i läsläge. Ändra inte betalningslogik för att rätta pristext.

## Större ändringar och BLOCKED

- Serverns betalda åkarkapacitet och auktoritativa spärr för andra åkaren. UI-default är 1 även för kunder som kan ha betalat för två; driftsätt inte familjefunktionen innan källa/verifiering finns.
- Gratis första profil använder befintlig parent-owned INSERT-policy; verklig RLS-tillåtelse och samtidiga flikar måste verifieras. Befintliga create/remove-funktioner justerar Stripe-kvantitet; de är orörda. Namnbyte/återställning efter en soft-delete och säker platsidentitet behöver serverstöd. UI gör inga nya obligatoriska fält.
- Full NL-stöd och befintliga FR/DE-luckor i familjetabben. Nya meddelanden har sv/en/no/da/fi/de/fr/nl samt bevarad es, vilket inte betyder att hela appen är översatt.
- Första betalning, provperiod och förnyelse är serverarbete. För-fix-data ska inte användas som ny representativ baslinje.
- Gratis övning A/B kräver produktbeslut och ev. skyddad rapportlogik. Nuvarande låsta övningar har inte gjorts gratis.
- Ingen browser, ingen autentiserad DB-åtkomst till appens projekt och ingen Stripe-transaktion användes. Femsekunderstest, klickantal till verkligt analysstart, social proof, FAQ/säkerhetslöften, videolagring, sample/ambassadör, iOS/Android, länkar och betalning behöver manuell kontroll. Inga nya påståenden om lagringstid, obegränsade analyser eller kundresultat har lagts till.

## Föreslagna A/B-tester

1. `/free-analysis?utm_content=adult` jämfört med `parent`, med samma formulär. Hypotes: relevant intro ökar startade analyser. Mät analysstart/landning och rapportvisning, segmenterat efter kampanj, språk och mobil.
2. Befintlig demo före respektive efter primär CTA. Mät tid till analysstart och slutförda analyser; bygg ingen ny demo.
3. Enbart kontoaktivering före medlemskap jämfört med dagens verifierade kontroll. Mät claim/signup, första positiva betalning och avhopp; nollkronorscheckout är inte betalande konvertering.
4. Ett tydligt teknikfokus plus en fri övning jämfört med nuvarande fria resultat. Endast förslag: kräver beslut om vilken befintlig rapportdel som får visas.
5. Kort medlemskapsförklaring (historik/utveckling enligt verkliga rättigheter) jämfört med längre förmånslista. Mät första betalning och kvarhållning efter provperiod.

Randomisera stabilt per besökare, en ändring i taget, bestäm primärt mått/minsta relevant effekt före start. Följ fel, slutförda analyser och betalåterbetalningar som skyddsmått. Dra inga slutsatser från liten eller före-fix-trafik.
