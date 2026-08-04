import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import { SUPPORTED_LOCALES } from "@/lib/translations";

const productUrls = {
  freeAnalysis: "https://alpine.masteryhub.se/free-analysis",
  createAccount: "https://alpine.masteryhub.se/auth?redirect=/membership/checkout?cycle=monthly",
};

const localeContent = {
  sv: {
    badge: "Din alpina coach – i fickan",
    title: "Bemästra Berget med AI – ",
    highlight: "Skidteknikanalys som fungerar",
    subtext:
      "Alpine Mastery analyserar dina åk bild för bild och ger personlig feedback som utvecklas med dig över tid.",
    howHeading: "Så fungerar vår AI-skidanalys",
    howBody1:
      "Alpine Mastery använder avancerad AI för att analysera din skidteknik bild för bild – kantvinkel, tryckfördelning, timing och linjeval. Perfekt för skidåkare, tränare och klubbar.",
    howBody2:
      "Alpine Mastery använder AI för att analysera din skidteknik från en kort video. Ladda upp ett klipp, få en personlig analys inom sekunder – med förbättringstips, övningar och betyg. Testa gratis.",
    demoHeading: "Se en riktig analys",
    demoSubtext: "En komplett AI-rapport från en riktig åkare – ingen inloggning krävs.",
    sampleMeta: "Slalom · Expert · 95/100",
    scoreLabel: "Totalpoäng",
    scoreValue: 95,
    headline:
      "En elitnivåslalom som visar exceptionell teknisk precision, mycket stora kantvinklar och en världsklass-quiet upper body på en brant race-linje.",
    problemsLabel: "Identifierade problem",
    problems: [
      "Lätt höftlutning vid avslutningen av svängen i den brantaste sektionen.",
      "Tillfällig dragning i underskidan under höghastighetsovergången.",
    ],
    testimonials: [
      {
        quote:
          "AI-skidanalysen var betydligt mer träffsäker än jag förväntade mig – den fångade detaljer jag aldrig hade märkt själv!",
        author: "Svensk junioråkare",
      },
      {
        quote:
          "Det här hjälper verkligen tränare och föräldrar som kämpar med att veta vilken feedback som är viktigast.",
        author: "Klubbtränare i norra Sverige",
      },
      {
        quote:
          "Athena tränade nyligen med en världsklass-tränare inom teknik och olympisk mästare. Återkopplingen hon fick matchade analysen från Alpine Mastery – låg handposition och att sitta för långt bak. Vi är mycket imponerade. Det ger oss tydliga saker att arbeta på nästa gång vi åker fritt på Ski Dubai.",
        author: "Alex, förälder till Athena Makonnen, Alpine Mastery profilåkare",
      },
    ],
    cards: [
      {
        title: "Ladda upp ditt åk",
        text: "Dela en kort video av ditt åk. Vår AI-skidanalys granskar bild för bild – kantvinkel, timing, linjeval och mer.",
      },
      {
        title: "Direkt AI-skidanalys",
        text: "Få en personlig skidanalys inom sekunder med förbättringstips, övningar och betyg på din teknik.",
      },
      {
        title: "Begär coachgranskning",
        text: "Vill du ha fördjupad feedback? Begär manuell granskning av en coach med ett klick – när du behöver det.",
      },
    ],
    barmark: {
      badge: "AI-driven barmarksträning anpassad efter din skidteknik",
      heading: "🔥 Förbered dig för nästa säsong – Barmarksträning med AI",
      body:
        "Håll din teknik skarp även på sommaren! Vårt AI-drivna barmarksprogram skräddarsyr övningar baserade på din skidteknik – från höftstabilitet till reaktiv styrka, allt för att du ska vara redo när snön kommer. Obegränsad tillgång för medlemmar.",
      checklist: [
        "3–6 övningar som riktar sig mot dina största begränsningar",
        "Anpassas när din teknik förbättras",
        "Baserat på hela din videoanalyshistorik",
      ],
      exercises: [
        "Single-Leg Wall Sit – Isometrisk styrka för belastning på utskidan",
        "Lateral Bounds – Efterliknar kraftöverföring mellan svängar",
        "Pallof Press Hold – Minskar oönskad rotation i överkroppen",
      ],
      tag: "Personanpassat baserat på din analyshistorik",
    },
    aiCoach: {
      badge: "Exklusivt verktyg för tränare",
      heading: "AI-tränare Assistent",
      body:
        "Tränare får en AI-driven assistent som känner till varje åkares videohistorik, teknikmönster och progression. Ställ frågor, få insikter, planera träning – allt på ett ställe.",
      checklist: [
        "Ställ frågor om alla åkares teknik",
        "Få insikter om progression och svagheter",
        "Tillgängligt exklusivt i tränarens dashboard",
        "Drivs av full analyshistorik",
      ],
      chatTitle: "Exempelfråga",
      chatQuestion: "Vilka är Emmas största tekniska begränsningar just nu?",
      chatAnswer:
        "Emma visar övervägande höftkollaps i den inre svängen, för sen tryckinitiering och lite för sent kantengagemang i transitionsfasen.",
    },
    coachFlow: {
      badge: "Gratis verktyg för att hantera dina åkare — inget abonnemang krävs.",
      heading: "Så fungerar det för tränare",
      steps: [
        {
          title: "Skapa gratis tränarkonto",
          text: "Registrera dig som tränare – helt gratis, för alltid.",
        },
        {
          title: "Åkare väljer dig",
          text: "Dina åkare lägger till dig som tränare från sin dashboard.",
        },
        {
          title: "Granska & ladda upp",
          text: "Se deras analyser, ladda upp videor åt dem och ge feedback.",
        },
      ],
    },
    familyFlow: {
      badge: "Ett konto — flera åkare",
      heading: "Så fungerar det för familjer",
      steps: [
        "En inloggning för föräldern",
        "Lägg till flera åkare under ett konto",
        "199 kr/mån per åkare",
        "Tränare ser bara åkare som valt dem",
      ],
      cta: "Skapa konto och lägg till din första åkare",
    },
    comparison: { heading: "Jämför: Gratis analys vs Fullt medlemskap – vad får du?", subtext: "Se vad du låser upp med ett medlemskap" },
    pricing: {
      heading: "✨ Alpine Mastery Medlemskap – Din väg till bättre skidteknik",
      body:
        "Få obegränsade AI-skidanalyser och personlig feedback direkt. Begär manuell coachgranskning när du vill, och spåra din teknikprogression över tid. Snabb återkoppling med möjlighet till fördjupad coaching när du behöver det.",
      badge: "🎉 1 månad gratis — Ingen bindningstid, avsluta när du vill. Ordinarie pris: 199 kr / månad · ~$18/mån · ~€16/mån",
      cta: "Starta Gratis",
    },
    mainCta: "Gratis Analys",
    secondaryCta: "Starta Gratis",
    metaDescription:
      "AI-skidanalys för skidåkare, tränare och klubbar. Ladda upp en video och få personlig feedback om teknik, timing, kantvinkel och linjeval.",
    schemaName: "Alpine Mastery AI-skidanalys",
  },
  en: {
    badge: "Your alpine coach – in your pocket",
    title: "Master the mountain with AI – ",
    highlight: "Ski technique analysis that works",
    subtext:
      "Alpine Mastery analyzes your runs frame by frame and gives you personalized feedback that improves with you over time.",
    howHeading: "How our AI ski analysis works",
    howBody1:
      "Alpine Mastery uses advanced AI to analyze your ski technique frame by frame – edge angle, pressure distribution, timing, and line choice. Perfect for skiers, coaches, and clubs.",
    howBody2:
      "Alpine Mastery uses AI to analyze your ski technique from a short video. Upload a clip, get a personal analysis in seconds – with improvement tips, drills, and a score. Try it for free.",
    demoHeading: "See a real analysis",
    demoSubtext: "A complete AI report from a real skier – no login required.",
    sampleMeta: "Slalom · Expert · 95/100",
    scoreLabel: "Total Score",
    scoreValue: 95,
    headline:
      "An elite slalom run showing exceptional technical precision, massive edge angles, and a world-class quiet upper body on a steep racing grade.",
    problemsLabel: "Identified issues",
    problems: [
      "Slight pelvic tilt at turn completion on the steepest section.",
      "Occasional inside-ski drag during the high-speed transition.",
    ],
    testimonials: [
      {
        quote:
          "The AI ski analysis was far more accurate than I expected – it caught details I would never have noticed myself!",
        author: "Swedish junior skier",
      },
      {
        quote:
          "This really helps coaches and parents who struggle to know which feedback matters most.",
        author: "Club coach in northern Sweden",
      },
      {
        quote:
          "Athena recently trained with a world-class technique coach and Olympic champion. The feedback she received matched the Alpine Mastery analysis – low hand position and sitting too far back. We are very impressed. It gives us clear things to work on next time we ski freely in Ski Dubai.",
        author: "Alex, parent of Athena Makonnen, Alpine Mastery pro skier",
      },
    ],
    cards: [
      {
        title: "Upload your run",
        text: "Share a short video of your run. Our AI ski analysis reviews each frame – edge angle, timing, line choice, and more.",
      },
      {
        title: "Instant AI ski analysis",
        text: "Get a personal ski analysis in seconds with improvement tips, drills, and a score for your technique.",
      },
      {
        title: "Request coach review",
        text: "Want deeper feedback? Request a manual coach review in one click when you need it.",
      },
    ],
    barmark: {
      badge: "AI-driven dryland training tailored to your ski technique",
      heading: "🔥 Get ready for next season – AI-powered dryland training",
      body:
        "Keep your technique sharp in the summer! Our AI-driven dryland program customizes exercises based on your skiing – from hip stability to reactive strength, so you’re ready when the snow returns. Unlimited access for members.",
      checklist: [
        "3–6 exercises targeting your biggest limitations",
        "Adjusts as your technique improves",
        "Built from your full video-analysis history",
      ],
      exercises: [
        "Single-Leg Wall Sit – Isometric strength for outside ski loading",
        "Lateral Bounds – Mimics force transfer between turns",
        "Pallof Press Hold – Reduces unwanted upper body rotation",
      ],
      tag: "Personalized based on your analysis history",
    },
    aiCoach: {
      badge: "Exclusive tool for coaches",
      heading: "AI Coach Assistant",
      body:
        "Coaches get an AI assistant that knows every athlete’s video history, technique patterns, and progression. Ask questions, get insights, plan training – all in one place.",
      checklist: [
        "Ask questions about every athlete’s technique",
        "Get insights on progression and weaknesses",
        "Available exclusively in the coach dashboard",
        "Powered by the full analysis history",
      ],
      chatTitle: "Example question",
      chatQuestion: "What are Emma’s biggest technical limiters right now?",
      chatAnswer:
        "Emma shows a tendency toward hip collapse in the inside turn, delayed pressure initiation, and slightly late edge engagement during the transition phase.",
    },
    coachFlow: {
      badge: "Free tool for managing your athletes — no subscription required.",
      heading: "How it works for coaches",
      steps: [
        {
          title: "Create your free coach account",
          text: "Register as a coach – completely free, forever.",
        },
        {
          title: "Athletes choose you",
          text: "Your athletes add you as a coach from their dashboard.",
        },
        {
          title: "Review & upload",
          text: "See their analyses, upload videos for them, and give feedback.",
        },
      ],
    },
    familyFlow: {
      badge: "One account — multiple skiers",
      heading: "How it works for families",
      steps: [
        "One login for the parent",
        "Add multiple skiers under one account",
        "$19/month per skier",
        "Coaches only see athletes who chose them",
      ],
      cta: "Create account and add your first skier",
    },
    comparison: { heading: "Compare: Free analysis vs Full membership – what do you get?", subtext: "See what you unlock with a membership" },
    pricing: {
      heading: "✨ Alpine Mastery Membership – Your path to better skiing",
      body:
        "Get unlimited AI ski analyses and direct personal feedback. Request manual coach review whenever you want, and track your technical progression over time. Fast feedback with deeper coaching options when you need them.",
      badge: "🎉 1 month free — No commitment, cancel anytime. Regular price: $19 / month · ~€16 / month",
      cta: "Start Free",
    },
    mainCta: "Free Analysis",
    secondaryCta: "Start Free",
    metaDescription:
      "AI ski analysis for skiers, coaches, and clubs. Upload a video and get personalized feedback on technique, timing, edge angles, and line choice.",
    schemaName: "Alpine Mastery AI Ski Analysis",
  },
  no: {
    badge: "Din alpine coach – i lomma",
    title: "Mester fjellet med AI – ",
    highlight: "Skiteknikanalyse som fungerer",
    subtext:
      "Alpine Mastery analyserer dine kjøringer bilde for bilde og gir personlig tilbakemelding som utvikler seg med deg over tid.",
    howHeading: "Slik fungerer AI-skiteknikanalysen vår",
    howBody1:
      "Alpine Mastery bruker avansert AI for å analysere skiteknikken din bilde for bilde – kantvinkel, trykkfordeling, timing og linjeføring. Perfekt for skiløpere, trenere og klubber.",
    howBody2:
      "Alpine Mastery bruker AI for å analysere skiteknikken din fra en kort video. Last opp et klipp, få en personlig analyse i sekunder – med forbedringstips, øvelser og vurdering. Prøv gratis.",
    demoHeading: "Se en ekte analyse",
    demoSubtext: "En komplett AI-rapport fra en ekte skiløper – ingen innlogging kreves.",
    sampleMeta: "Slalåm · Ekspert · 95/100",
    scoreLabel: "Totalpoeng",
    scoreValue: 95,
    headline:
      "En elite-slalåkkjøring som viser enestående teknisk presisjon, massive kantvinkler og en verdensklasse rolig overkropp på en bratt racing-linje.",
    problemsLabel: "Identifiserte problemer",
    problems: [
      "Litt bekkenvinkel ved svengslutt på den bratteste delen.",
      "Noen ganger slitas innerski under høyhastighetsovergangen.",
    ],
    testimonials: [
      { quote: "AI-skiteknikanalysen var mye mer presis enn jeg forventet – den fanget detaljer jeg aldri hadde lagt merke til selv!", author: "Norsk juniorløper" },
      { quote: "Dette hjelper virkelig trenere og foreldre som sliter med å vite hvilken tilbakemelding som er viktigst.", author: "Klubbtrener i Nord-Norge" },
      { quote: "Athena trente nylig med en verdensklasse teknikktrener og olympisk mester. Tilbakemeldingen hun fikk samsvarte med analysen fra Alpine Mastery – lav håndposisjon og å sitte for langt bak. Vi er meget imponert. Det gir oss tydelige ting å jobbe med neste gang vi kjører fritt på Ski Dubai.", author: "Alex, forelder til Athena Makonnen, Alpine Mastery profilskiløper" },
    ],
    cards: [
      { title: "Last opp kjøringen din", text: "Del en kort video fra kjøringen din. Vår AI-skiteknikanalyse går gjennom hvert bilde – kantvinkel, timing, linjeføring og mer." },
      { title: "Direkte AI-skiteknikanalyse", text: "Få en personlig skiteknikanalyse i sekunder med forbedringstips, øvelser og vurdering av teknikken din." },
      { title: "Be om trenergranskning", text: "Vil du ha dypere tilbakemelding? Be om manuell trenergranskning med ett klikk når du trenger det." },
    ],
    barmark: {
      badge: "AI-drevet barmarkstrening tilpasset din skiteknikk",
      heading: "🔥 Gå forberedet til neste sesong – Barmarkstrening med AI",
      body: "Hold teknikken skarp også om sommeren! Vårt AI-drevne barmarksprogram skreddersyr øvelser basert på skiteknikken din – fra hoftestabilitet til reaktiv styrke, for at du skal være klar når snøen kommer. Ubegrenset tilgang for medlemmer.",
      checklist: ["3–6 øvelser rettet mot dine største begrensninger", "Tilpasses når teknikken forbedres", "Bygges på hele din videoanalysehistorikk"],
      exercises: ["Single-Leg Wall Sit – Isometrisk styrke for belastning av ytre ski", "Lateral Bounds – Etterligner kraftoverføring mellom svängene", "Pallof Press Hold – Reduserer uønsket rotasjon i overkroppen"],
      tag: "Personalisert basert på analysehistorikken din",
    },
    aiCoach: {
      badge: "Eksklusivt verktøy for trenere",
      heading: "AI-trenerassistent",
      body: "Trenere får en AI-assistent som kjenner hver utøveres videohistorikk, teknikkmønstre og progresjon. Still spørsmål, få innsikter, planlegg trening – alt på ett sted.",
      checklist: ["Still spørsmål om alle utøvers teknikk", "Få innsikter om progresjon og svakheter", "Tilgjengelig eksklusivt i trenerens dashboard", "Drevet av full analysehistorikk"],
      chatTitle: "Eksempelspørsmål",
      chatQuestion: "Hva er Emmas største tekniske begrensninger akkurat nå?",
      chatAnswer: "Emma viser en tendens til hoftesenkning i innsving, for sen trykkstart og litt for sen kantengasjement i overgangsfasen.",
    },
    coachFlow: {
      badge: "Gratis verktøy for å håndtere dine utøvere – ingen abonnement kreves.",
      heading: "Slik fungerer det for trenere",
      steps: [
        { title: "Opprett gratis trenerkonto", text: "Registrer deg som trener – helt gratis for alltid." },
        { title: "Utøvere velger deg", text: "Dine utøvere legger til deg som trener fra sitt dashboard." },
        { title: "Gransk & last opp", text: "Se analysene deres, last opp videoer for dem og gi tilbakemelding." },
      ],
    },
    familyFlow: { badge: "Én konto — flere utøvere", heading: "Slik fungerer det for familier", steps: ["Én innlogging for forelderen", "Legg til flere utøvere under én konto", "199 kr/måned per utøver", "Trenere ser bare utøvere som valgte dem"], cta: "Opprett konto og legg til din første utøver" },
    comparison: { heading: "Sammenlign: Gratis analyse vs full medlemskap – hva får du?", subtext: "Se hva du låser opp med et medlemskap" },
    pricing: { heading: "✨ Alpine Mastery-medlemskap – Veien til bedre skiteknikk", body: "Få ubegrensede AI-skiteknikanalyser og personlig tilbakemelding direkte. Be om manuell trenergranskning når du vil, og spor teknikkutviklingen over tid. Rask tilbakemelding med mulighet for dypere coaching når du trenger det.", badge: "🎉 1 måned gratis — Ingen bindingstid, avslutt når du vil. Ordinær pris: 199 kr / måned · ~$18/måned · ~€16/måned", cta: "Start gratis" },
    mainCta: "Gratis analyse",
    secondaryCta: "Start gratis",
    metaDescription: "AI-skiteknikanalyse for skiløpere, trenere og klubber. Last opp en video og få personlig tilbakemelding om teknikk, timing, kantvinkel og linjeføring.",
    schemaName: "Alpine Mastery AI-skiteknikanalyse",
  },
  da: {
    badge: "Din alpine coach – i lommen",
    title: "Mester bjerget med AI – ",
    highlight: "Skidteknikanalyse der virker",
    subtext: "Alpine Mastery analyserer dine ture billede for billede og giver personlig feedback, der udvikler sig med dig over tid.",
    howHeading: "Sådan fungerer vores AI-skidteknikanalyse",
    howBody1: "Alpine Mastery bruger avanceret AI til at analysere din skidteknik billede for billede – kantvinkel, trykfordeling, timing og linjeføring. Perfekt til skiløbere, trænere og klubber.",
    howBody2: "Alpine Mastery bruger AI til at analysere din skidteknik fra en kort video. Upload et klip, få en personlig analyse inden for sekunder – med forbedringstips, øvelser og karakter. Test gratis.",
    demoHeading: "Se en rigtig analyse",
    demoSubtext: "En komplet AI-rapport fra en rigtig skiløber – ingen login kræves.",
    sampleMeta: "Slalom · Ekspert · 95/100",
    scoreLabel: "Samlet score",
    scoreValue: 95,
    headline: "En elite-slalom, der viser exceptionel teknisk præcision, massive kantvinkler og en verdensklasse rolig overkrop på en stejl race-linje.",
    problemsLabel: "Identificerede problemer",
    problems: ["Let vægtforskydning i slutningen af svingen på det stejleste stykke.", "Lejlighedsvis inderskibevægelse under højhastighedsovergangen."],
    testimonials: [{ quote: "AI-skidteknikanalysen var meget mere præcis, end jeg forventede – den fangede detaljer, jeg aldrig selv havde bemærket!", author: "Dansk junior skiløber" }, { quote: "Det her hjælper virkelig trænere og forældre, der kæmper med at vide, hvilken feedback der er vigtigst.", author: "Klubtræner i Nord-Sverige" }, { quote: "Athena trænerede for nylig med en verdensklasse teknikktræner og olympisk mester. Den feedback, hun fik, matchede analysen fra Alpine Mastery – lav håndposition og at sidde for langt bagud. Vi er meget imponeret. Det giver os klare ting at arbejde på næste gang, vi kører frit i Ski Dubai.", author: "Alex, forælder til Athena Makonnen, Alpine Mastery profilskiløber" }],
    cards: [{ title: "Upload din tur", text: "Del en kort video af din tur. Vores AI-skidteknikanalyse gennemgår hvert billede – kantvinkel, timing, linjeføring og mere." }, { title: "Direkte AI-skidteknikanalyse", text: "Få en personlig skidteknikanalyse i sekunder med forbedringstips, øvelser og karakter for din teknik." }, { title: "Anmod om trænergennemgang", text: "Vil du have dybere feedback? Anmod om manuel trænergennemgang med et klik, når du har brug for det." }],
    barmark: { badge: "AI-drevet barmarkstræning tilpasset din skidteknik", heading: "🔥 Gør dig klar til næste sæson – Barmarkstræning med AI", body: "Hold din teknik skarp også om sommeren! Vores AI-drevne barmarksprogram skræddersyr øvelser baseret på din skidteknik – fra hofte-stabilitet til reaktiv styrke, så du er klar, når sneen kommer. Ubegrænset adgang for medlemmer.", checklist: ["3–6 øvelser rettet mod dine største begrænsninger", "Tilpasses, når din teknik forbedres", "Baseret på hele din videoanalysehistorik"], exercises: ["Single-Leg Wall Sit – Isometrisk styrke til belastning af yderski", "Lateral Bounds – Efterligner kraftoverførsel mellem sving", "Pallof Press Hold – Reducerer uønsket rotation i overkroppen"], tag: "Personliggjort baseret på din analysehistorik" },
    aiCoach: { badge: "Eksklusivt værktøj for trænere", heading: "AI-trænerassistent", body: "Trænere får en AI-assistent, der kender hver atlets videohistorik, teknikmønstre og progression. Stil spørgsmål, få indsigter, planlæg træning – alt på ét sted.", checklist: ["Stil spørgsmål om alle atleters teknik", "Få indsigter om progression og svagheder", "Tilgængeligt eksklusivt i trænerens dashboard", "Drevet af fuld analysehistorik"], chatTitle: "Eksempelspørgsmål", chatQuestion: "Hvad er Emmas største tekniske begrænsninger lige nu?", chatAnswer: "Emma viser tendens til hofte kollaps i den indre sving, forsinket trykinitiering og lidt for sen kantengagement i overgangsfasen." },
    coachFlow: { badge: "Gratis værktøj til at håndtere dine atleter — intet abonnement kræves.", heading: "Sådan fungerer det for trænere", steps: [{ title: "Opret gratis trænerkonto", text: "Tilmeld dig som træner – helt gratis, for evigt." }, { title: "Atleter vælger dig", text: "Dine atleter tilføjer dig som træner fra deres dashboard." }, { title: "Gennemgå & upload", text: "Se deres analyser, upload videoer for dem og giv feedback." }] },
    familyFlow: { badge: "Én konto — flere atleter", heading: "Sådan fungerer det for familier", steps: ["Én login til forælderen", "Tilføj flere atleter under én konto", "199 kr/måned pr. atlet", "Trænere ser kun atleter, der har valgt dem"], cta: "Opret konto og tilføj din første atlet" },
    comparison: { heading: "Sammenlign: Gratis analyse vs fuldt medlemskab – hvad får du?", subtext: "Se, hvad du låser op med et medlemskab" },
    pricing: { heading: "✨ Alpine Mastery Medlemskab – Din vej til bedre skidteknik", body: "Få ubegrænsede AI-skidteknikanalyser og personlig feedback direkte. Anmod om manuel trænergennemgang, når du vil, og spor din teknikprogression over tid. Hurtig feedback med mulighed for dybere coaching, når du har brug for det.", badge: "🎉 1 måned gratis — Ingen bindingstid, opsig når du vil. Ordinær pris: 199 kr / måned · ~$18/måned · ~€16/måned", cta: "Start gratis" },
    mainCta: "Gratis analyse",
    secondaryCta: "Start gratis",
    metaDescription: "AI-skidteknikanalyse for skiløbere, trænere og klubber. Upload en video og få personlig feedback om teknik, timing, kantvinkel og linjeføring.",
    schemaName: "Alpine Mastery AI-skidteknikanalyse",
  },
  fi: {
    badge: "Sinun alppinen valmentajasi – taskussasi",
    title: "Hallitse vuoria tekoälyllä – ",
    highlight: "Hiihtotekniikan analyysi, joka toimii",
    subtext: "Alpine Mastery analysoi suorituksesi kuva kuvalta ja antaa henkilökohtaista palautetta, joka kehittyy kanssasi ajan myötä.",
    howHeading: "Näin AI-hiihtoanalyysimme toimii",
    howBody1: "Alpine Mastery käyttää kehittynyttä tekoälyä analysoimaan hiihtotekniikkaasi kuva kuvalta – reunan kulma, painejakauma, ajoitus ja linjavalinta. Ideaali hiihtäjille, valmentajille ja seuroille.",
    howBody2: "Alpine Mastery käyttää tekoälyä analysoimaan hiihtotekniikkaasi lyhyestä videosta. Lataa klippi, saat henkilökohtaisen analyysin sekunneissa – parannusehdotuksilla, harjoitteilla ja pisteytyksellä. Testaa ilmaiseksi.",
    demoHeading: "Katso oikea analyysi",
    demoSubtext: "Täydellinen AI-raportti oikealta hiihtäjältä – kirjautumista ei vaadita.",
    sampleMeta: "Slalom · Expert · 95/100",
    scoreLabel: "Kokonaispisteet",
    scoreValue: 95,
    headline: "Korkeatasoinen slalomi, joka näyttää poikkeuksellista teknistä tarkkuutta, suuria reunakulmia ja maailmanluokan hiljaisen ylävartalon jyrkässä kilpailulinjassa.",
    problemsLabel: "Havaitut ongelmat",
    problems: ["Pieni lantion kallistuminen käännöksen lopussa kaikkein jyrkimmässä osassa.", "Satunnainen sisähiihdon vetäytyminen suurella nopeudella siirtymävaiheessa."],
    testimonials: [{ quote: "AI-hiihtoanalyysi oli paljon tarkempi kuin odotin – se tavoitti yksityiskohdat, joita en olisi itse huomannut!", author: "Ruotsalainen juniorihiihtäjä" }, { quote: "Tämä auttaa todella paljon valmentajia ja vanhempia, jotka kamppailevat sen kanssa, mikä palaute on tärkeintä.", author: "Seuravalmentaja Pohjois-Ruotsista" }, { quote: "Athena treenasi hiljattain maailmanluokan tekniikkavalmentajan ja olympiavoittajan kanssa. Hänelle annettu palaute vastasi Alpine Masteryn analyysia – matala käsiasento ja istuminen liian taka-alalla. Olemme todella vaikuttuneita. Se antaa meille selkeitä asioita, joihin työskennellä seuraavan kerran, kun hiihtämme vapaasti Ski Dubain rinteessä.", author: "Alex, Athena Makonnenin vanhempi, Alpine Mastery -profiilihiihtäjä" }],
    cards: [{ title: "Lataa suorituksesi", text: "Jaa lyhyt video suorituksestasi. AI-hiihtoanalyysimme tarkistaa jokaisen kuvan – reunakulman, ajoituksen, linjavalinnan ja paljon muuta." }, { title: "Välitön AI-hiihtoanalyysi", text: "Saat henkilökohtaisen hiihtoanalyysin sekunneissa parannusehdotuksilla, harjoitteilla ja pisteytyksellä." }, { title: "Pyydä valmentajan arvio", text: "Haluatko syvällisempää palautetta? Pyydä manuaalista valmentajan arviointia yhdellä klikkauksella, kun tarvitset sitä." }],
    barmark: { badge: "AI-ohjattu maastohiihdon harjoittelu räätälöity hiihtotekniikallesi", heading: "🔥 Valmistaudu ensi kauteen – AI-pohjainen maastohiihdon harjoittelu", body: "Pidä teknikkasi terävänä myös kesällä! AI-pohjainen maastoharjoittelumme räätälöi harjoitteet hiihtotekniikkasi mukaan – lonkan vakaudesta reaktiiviseen voimaan, jotta olet valmis, kun lumi palaa. Rajaton käyttö jäsenille.", checklist: ["3–6 harjoitetta, jotka kohdentuvat suurimpiin rajoitteisiisi", "Säätyy, kun tekniikka paranee", "Perustuu koko videoanalyysihistoriaasi"], exercises: ["Single-Leg Wall Sit – Isometrinen voima ulkoisen suksen kuormitukseen", "Lateral Bounds – Matkii voiman siirtymistä käännösten välillä", "Pallof Press Hold – Vähentää ei-toivottua ylävartalon kiertoa"], tag: "Henkilökohtainen analyysihistoriasi pohjalta" },
    aiCoach: { badge: "Eksklusiivinen työkalu valmentajille", heading: "AI-valmentaja-assistentti", body: "Valmentajat saavat tekoälyavustajan, joka tuntee jokaisen urheilijan videohistorian, tekniikkamallit ja kehityksen. Kysy kysymyksiä, saa oivalluksia, suunnittele treeniä – kaikki samassa paikassa.", checklist: ["Kysy kysymyksiä kaikkien urheilijoiden tekniikasta", "Saa oivalluksia kehityksestä ja heikkouksista", "Saatavilla vain valmentajan kojelaudassa", "Toimii koko analyysihistorian avulla"], chatTitle: "Esimerkkikysymys", chatQuestion: "Mitkä ovat Emman suurimmat tekniset rajoitteet juuri nyt?", chatAnswer: "Emma näyttää taipumusta lonkan painumiseen sisäkäännöksen aikana, myöhäiseen paineen aloittamiseen ja hieman myöhässä olevaan reunakytkeytymiseen siirtymävaiheessa." },
    coachFlow: { badge: "Ilmainen työkalu urheilijoiden hallintaan — ei tarvetta tilaukselle.", heading: "Näin se toimii valmentajille", steps: [{ title: "Luo ilmainen valmentajatili", text: "Rekisteröidy valmentajaksi – täysin ilmainen, ikuisesti." }, { title: "Urheilijat valitsevat sinut", text: "Urheilijasi lisäävät sinut valmentajaksi hallintapaneelista." }, { title: "Arvioi & lataa", text: "Näe heidän analyysinsä, lataa videoita heille ja anna palautetta." }] },
    familyFlow: { badge: "Yksi tili — useita urheilijoita", heading: "Näin se toimii perheille", steps: ["Yksi kirjautuminen vanhemmalle", "Lisää useita urheilijoita yhden tilin alle", "199 €/kk per urheilija", "Valmentajat näkevät vain urheilijat, jotka ovat valinneet heidät"], cta: "Luo tili ja lisää ensimmäinen urheilijasi" },
    comparison: { heading: "Vertaa: Ilmainen analyysi vs täysi jäsenyys – mitä saat?", subtext: "Näe, mitä avaat jäsenyydellä" },
    pricing: { heading: "✨ Alpine Mastery-jäsenyys – Polku parempaan hiihtotekniikkaan", body: "Hanki rajattomat AI-hiihtoanalyysit ja henkilökohtaista palautetta heti. Pyydä manuaalista valmentajan arviointia milloin tahansa ja seuraa tekniikan kehitystä ajan mittaan. Nopea palaute ja syvällisempi valmennus, kun tarvitset sitä.", badge: "🎉 1 kuukausi ilmaiseksi — Ei sitoumuksia, peruutus milloin tahansa. Tavallinen hinta: 199 € / kk · ~$18/kk · ~€16/kk", cta: "Aloita ilmaiseksi" },
    mainCta: "Ilmainen analyysi",
    secondaryCta: "Aloita ilmaiseksi",
    metaDescription: "AI-hiihtoanalyysi hiihtäjille, valmentajille ja seuroille. Lataa video ja saa henkilökohtaista palautetta tekniikasta, ajoituksesta, reunakulmista ja linjavalinnasta.",
    schemaName: "Alpine Mastery AI-hiihtoanalyysi",
  },
  de: {
    badge: "Dein alpiner Coach – in deiner Tasche",
    title: "Beherrsche den Berg mit KI – ",
    highlight: "Skitechnik-Analyse, die funktioniert",
    subtext: "Alpine Mastery analysiert deine Fahrten Bild für Bild und gibt dir persönliche Rückmeldungen, die sich mit dir weiterentwickeln.",
    howHeading: "So funktioniert unsere KI-Skianalyse",
    howBody1: "Alpine Mastery verwendet fortschrittliche KI, um deine Skitechnik Bild für Bild zu analysieren – Kantenwinkel, Druckverteilung, Timing und Linienwahl. Perfekt für Skifahrer, Trainer und Vereine.",
    howBody2: "Alpine Mastery verwendet KI, um deine Skitechnik aus einem kurzen Video zu analysieren. Lade ein Clip hoch, erhalte innerhalb von Sekunden eine persönliche Analyse – mit Verbesserungstipps, Übungen und Bewertung. Kostenlos testen.",
    demoHeading: "Sehe dir eine echte Analyse an",
    demoSubtext: "Ein vollständiger KI-Bericht von einem echten Skifahrer – ohne Login.",
    sampleMeta: "Slalom · Experte · 95/100",
    scoreLabel: "Gesamtpunktzahl",
    scoreValue: 95,
    headline: "Eine erstklassige Slalom-Fahrt mit außergewöhnlicher technischer Präzision, starken Kantenwinkeln und einem weltklasse ruhigen Oberkörper auf einer steilen Rennlinie.",
    problemsLabel: "Identifizierte Probleme",
    problems: ["Leichte Beckenneigung am Ende der Kurve im steilsten Abschnitt.", "Gelegentliches Ziehen des Innenskis während des Hochgeschwindigkeits-Übergangs."],
    testimonials: [{ quote: "Die KI-Skianalyse war deutlich genauer als erwartet – sie hat Details erkannt, die ich selbst nie bemerkt hätte!", author: "Schwedischer Junior-Skifahrer" }, { quote: "Das hilft wirklich Trainern und Eltern, die kämpfen, zu wissen, welche Rückmeldung am wichtigsten ist.", author: "Vereinscoach in Nordschweden" }, { quote: "Athena trainierte kürzlich mit einem Weltklasse-Techniktrainer und Olympiasieger. Das Feedback, das sie bekam, stimmte mit der Analyse von Alpine Mastery überein – niedrige Handposition und zu weit nach hinten sitzen. Wir sind sehr beeindruckt. Es gibt uns klare Dinge, an denen wir beim nächsten freien Fahren in Ski Dubai arbeiten können.", author: "Alex, Elternteil von Athena Makonnen, Alpine Mastery Profilskifahrer" }],
    cards: [{ title: "Lade deinen Lauf hoch", text: "Teile ein kurzes Video deines Laufs. Unsere KI-Skianalyse prüft jedes Bild – Kantenwinkel, Timing, Linienwahl und mehr." }, { title: "Sofortige KI-Skianalyse", text: "Erhalte innerhalb von Sekunden eine persönliche Skianalyse mit Verbesserungstipps, Übungen und einer Bewertung deiner Technik." }, { title: "Coach-Review anfragen", text: "Möchtest du tiefergehende Rückmeldungen? Anfrage eine manuelle Coach-Überprüfung mit nur einem Klick, wenn du sie brauchst." }],
    barmark: { badge: "KI-gesteuertes Dryland-Training passend zu deiner Skitechnik", heading: "🔥 Mach dich bereit für die nächste Saison – KI-gestütztes Dryland-Training", body: "Halte deine Technik auch im Sommer scharf! Unser KI-gestütztes Dryland-Programm passt Übungen an deine Skitechnik an – von Hüftstabilität bis hin zu reaktiver Kraft, damit du bereit bist, wenn der Schnee kommt. Unbegrenzter Zugang für Mitglieder.", checklist: ["3–6 Übungen, die auf deine größten Einschränkungen abzielen", "Passt sich an, wenn sich deine Technik verbessert", "Basiert auf deiner gesamten Videoanalyse-Historie"], exercises: ["Single-Leg Wall Sit – Isometrische Kraft für die Belastung des Außenskis", "Lateral Bounds – Ahmt den Krafttransfer zwischen den Kurven nach", "Pallof Press Hold – Reduziert unerwünschte Rotation des Oberkörpers"], tag: "Personalisierung basierend auf deiner Analysehistorie" },
    aiCoach: { badge: "Exklusives Tool für Trainer", heading: "KI-Trainerassistent", body: "Trainer erhalten einen KI-Assistenten, der die Videohistorie, Technikmuster und den Fortschritt jedes Athleten kennt. Stelle Fragen, erhalte Einblicke, plane Training – alles an einem Ort.", checklist: ["Stelle Fragen zur Technik aller Athleten", "Erhalte Einblicke in Fortschritt und Schwächen", "Exklusiv im Trainer-Dashboard verfügbar", "Angetrieben von der vollständigen Analysehistorie"], chatTitle: "Beispielfrage", chatQuestion: "Was sind Emmas größte technische Limitierungen im Moment?", chatAnswer: "Emma zeigt eine Tendenz zum Hüftkollaps in der Innenkurve, verzögerte Druckinitiierung und leicht verspätetes Kantenengagement in der Übergangsphase." },
    coachFlow: { badge: "Kostenloses Tool zur Verwaltung deiner Athleten – kein Abonnement nötig.", heading: "So funktioniert es für Trainer", steps: [{ title: "Kostenloses Trainerkonto erstellen", text: "Registriere dich als Trainer – komplett kostenlos, für immer." }, { title: "Athleten wählen dich", text: "Deine Athleten fügen dich als Trainer über ihr Dashboard hinzu." }, { title: "Bewerten & hochladen", text: "Sieh dir ihre Analysen an, lade Videos für sie hoch und gib Feedback." }] },
    familyFlow: { badge: "Ein Konto — mehrere Athleten", heading: "So funktioniert es für Familien", steps: ["Ein Login für das Elternteil", "Mehrere Athleten unter einem Konto hinzufügen", "199 € / Monat pro Athlet", "Trainer sehen nur Athleten, die sie gewählt haben"], cta: "Konto erstellen und ersten Athleten hinzufügen" },
    comparison: { heading: "Vergleichen: Gratis-Analyse vs Vollmitgliedschaft – was bekommst du?", subtext: "Sieh, was du mit einer Mitgliedschaft freischaltest" },
    pricing: { heading: "✨ Alpine Mastery Mitgliedschaft – Dein Weg zu besserer Skitechnik", body: "Erhalte unbegrenzte KI-Skianalysen und persönliche Rückmeldungen direkt. Fordere bei Bedarf manuelle Coach-Reviews an und verfolge deine Technikentwicklung über die Zeit. Schnelle Rückmeldung mit der Möglichkeit zu tieferer Coaching-Unterstützung, wenn du sie benötigst.", badge: "🎉 1 Monat kostenlos — Keine Verpflichtung, jederzeit kündbar. Normaler Preis: 199 € / Monat · ~$18/Monat · ~€16/Monat", cta: "Kostenlos starten" },
    mainCta: "Kostenlose Analyse",
    secondaryCta: "Kostenlos starten",
    metaDescription: "KI-Skianalyse für Skifahrer, Trainer und Vereine. Lade ein Video hoch und erhalte persönliche Rückmeldungen zu Technik, Timing, Kantenwinkel und Linienwahl.",
    schemaName: "Alpine Mastery KI-Skianalyse",
  },
  fr: {
    badge: "Ton coach alpin – dans ta poche",
    title: "Maîtrise la montagne avec l’IA – ",
    highlight: "Analyse de technique de ski qui marche",
    subtext: "Alpine Mastery analyse tes descentes image par image et te donne un retour personnalisé qui s’améliore avec toi au fil du temps.",
    howHeading: "Comment fonctionne notre analyse IA du ski",
    howBody1: "Alpine Mastery utilise une IA avancée pour analyser ta technique de ski image par image – angle de carotte, répartition de la pression, timing et choix de ligne. Parfait pour les skieurs, entraîneurs et clubs.",
    howBody2: "Alpine Mastery utilise l’IA pour analyser ta technique de ski à partir d’une courte vidéo. Télécharge une séquence, obtiens une analyse personnelle en quelques secondes – avec conseils d’amélioration, exercices et note. Essaie gratuitement.",
    demoHeading: "Voir une vraie analyse",
    demoSubtext: "Un rapport IA complet d’un vrai skieur – sans connexion requise.",
    sampleMeta: "Slalom · Expert · 95/100",
    scoreLabel: "Score total",
    scoreValue: 95,
    headline: "Une descente de slalom de haut niveau démontrant une précision technique exceptionnelle, de très grands angles de carotte et un haut du corps très calme sur une pente raide.",
    problemsLabel: "Problèmes identifiés",
    problems: ["Léger basculement du bassin à la fin du virage sur la partie la plus raide.", "Frottement occasionnel du ski intérieur lors de la transition à grande vitesse."],
    testimonials: [{ quote: "L’analyse IA du ski était beaucoup plus précise que je ne l’imaginais – elle a repéré des détails que je n’aurais jamais vu moi-même !", author: "Jeune skieuse suédoise" }, { quote: "Ça aide vraiment les entraîneurs et les parents qui ont du mal à savoir quel retour est le plus important.", author: "Entraîneur de club dans le nord de la Suède" }, { quote: "Athena a récemment entraîné avec un entraîneur de technique de classe mondiale et un champion olympique. Le retour qu’elle a reçu correspondait à l’analyse d’Alpine Mastery – position basse des mains et assise trop en arrière. Nous sommes très impressionnés. Cela nous donne des points clairs à travailler la prochaine fois que nous skierons librement à Ski Dubai.", author: "Alex, parent d’Athena Makonnen, skieuse profil Alpine Mastery" }],
    cards: [{ title: "Télécharge ta descente", text: "Partage une courte vidéo de ta descente. Notre analyse IA du ski examine chaque image – angle de carotte, timing, choix de ligne et plus encore." }, { title: "Analyse IA instantanée", text: "Reçois une analyse personnelle de ta technique en quelques secondes avec conseils d’amélioration, exercices et note." }, { title: "Demander une revue de coach", text: "Tu veux un retour plus approfondi ? Demande une revue manuelle d’un coach en un clic, quand tu en as besoin." }],
    barmark: { badge: "Entraînement dryland piloté par l’IA adapté à ta technique de ski", heading: "🔥 Prépare-toi pour la prochaine saison – Entraînement dryland avec IA", body: "Garde ta technique tranchante même en été ! Notre programme dryland piloté par l’IA personnalise les exercices selon ta technique de ski – de la stabilité des hanches à la force réactive, pour être prêt quand la neige revient. Accès illimité pour les membres.", checklist: ["3–6 exercices ciblant tes plus grandes limites", "S’ajuste quand ta technique s’améliore", "Basé sur tout ton historique d’analyses vidéo"], exercises: ["Single-Leg Wall Sit – Force isométrique pour la charge du ski extérieur", "Lateral Bounds – Imite le transfert de force entre les virages", "Pallof Press Hold – Réduit la rotation non désirée du haut du corps"], tag: "Personnalisé selon ton historique d’analyse" },
    aiCoach: { badge: "Outil exclusif pour les entraîneurs", heading: "Assistant IA entraîneur", body: "Les entraîneurs obtiennent un assistant IA qui connaît l’historique vidéo, les schémas techniques et la progression de chaque athlète. Pose des questions, obtiens des insights, planifie l’entraînement – tout en un seul endroit.", checklist: ["Pose des questions sur la technique de tous les athlètes", "Obtiens des insights sur la progression et les faiblesses", "Disponible exclusivement dans le tableau de bord entraîneur", "Basé sur l’historique complet des analyses"], chatTitle: "Exemple de question", chatQuestion: "Quelles sont les plus grandes limites techniques d’Emma en ce moment ?", chatAnswer: "Emma montre une tendance au collapsus de hanche dans le virage intérieur, une initiation de pression tardive et un engagement de bord légèrement tardif pendant la phase de transition." },
    coachFlow: { badge: "Outil gratuit pour gérer tes athlètes — aucun abonnement requis.", heading: "Comment ça marche pour les entraîneurs", steps: [{ title: "Créer un compte entraîneur gratuit", text: "Inscris-toi comme entraîneur — totalement gratuit, pour toujours." }, { title: "Les athlètes te choisissent", text: "Tes athlètes te rajoutent comme entraîneur depuis leur tableau de bord." }, { title: "Réviser & téléverser", text: "Vois leurs analyses, téléverse des vidéos pour eux et donne des retours." }] },
    familyFlow: { badge: "Un compte — plusieurs athlètes", heading: "Comment ça marche pour les familles", steps: ["Une connexion pour le parent", "Ajouter plusieurs athlètes sous un même compte", "199 € / mois par athlète", "Les entraîneurs ne voient que les athlètes qui les ont choisis"], cta: "Créer un compte et ajouter ton premier athlète" },
    comparison: { heading: "Comparer : Analyse gratuite vs abonnement complet – qu’est-ce que tu obtiens ?", subtext: "Vois ce que tu déverrouilles avec un abonnement" },
    pricing: { heading: "✨ Abonnement Alpine Mastery – Ton chemin vers une meilleure technique de ski", body: "Obtiens des analyses IA de ski illimitées et un retour personnel direct. Demande une revue manuelle de coach quand tu veux, et suis ta progression technique dans le temps. Retour rapide avec possibilité de coaching approfondi quand tu en as besoin.", badge: "🎉 1 mois gratuit — Aucune contrainte, résiliation à tout moment. Prix habituel : 199 € / mois · ~$18/mois · ~€16/mois", cta: "Démarrer gratuitement" },
    mainCta: "Analyse gratuite",
    secondaryCta: "Démarrer gratuitement",
    metaDescription: "Analyse IA du ski pour skieurs, entraîneurs et clubs. Télécharge une vidéo et reçois un retour personnel sur la technique, le timing, l’angle de carotte et le choix de ligne.",
    schemaName: "Alpine Mastery Analyse IA du ski",
  },
  nl: {
    badge: "Jouw alpiene coach – in je broekzak",
    title: "Beheers de berg met AI – ",
    highlight: "Skitechniekanalyse die werkt",
    subtext: "Alpine Mastery analyseert je runs beeld voor beeld en geeft je persoonlijke feedback die met jou mee groeit.",
    howHeading: "Hoe onze AI-skitechniekanalyse werkt",
    howBody1: "Alpine Mastery gebruikt geavanceerde AI om je skitechniek beeld voor beeld te analyseren – kantangle, drukverdeling, timing en lijnkeuze. Perfect voor skiërs, coaches en clubs.",
    howBody2: "Alpine Mastery gebruikt AI om je skitechniek uit een korte video te analyseren. Upload een filmpje, ontvang binnen seconden een persoonlijke analyse – met verbeteringssuggesties, oefeningen en score. Probeer gratis.",
    demoHeading: "Bekijk een echte analyse",
    demoSubtext: "Een compleet AI-rapport van een echte skiër – geen login vereist.",
    sampleMeta: "Slalom · Expert · 95/100",
    scoreLabel: "Totaalscore",
    scoreValue: 95,
    headline: "Een topslalomrun met uitzonderlijke technische precisie, enorme kanthoeken en een wereldklasse rustige bovenrug op een steile race-lijn.",
    problemsLabel: "Gevormde problemen",
    problems: ["Lichte bekkenkanteling aan het einde van de bocht in het steilste gedeelte.", "Af en toe binnenski drag tijdens de hoogsnelheids-overgang."],
    testimonials: [{ quote: "De AI-skitechniekanalyse was veel nauwkeuriger dan ik verwachtte – hij ving details op die ik zelf nooit had opgemerkt!", author: "Zweedse junior skiër" }, { quote: "Dit helpt echt coaches en ouders die moeite hebben met weten welke feedback het belangrijkst is.", author: "Clubcoach in Noord-Zweden" }, { quote: "Athena trainde onlangs met een wereldklasse techniekcoach en een Olympisch kampioen. De feedback die ze kreeg, kwam overeen met de analyse van Alpine Mastery – lage handpositie en te ver naar achteren zitten. We zijn erg onder de indruk. Het geeft ons duidelijke dingen om aan te werken de volgende keer dat we vrij skiën in Ski Dubai.", author: "Alex, ouder van Athena Makonnen, Alpine Mastery profielskier" }],
    cards: [{ title: "Upload je run", text: "Deel een korte video van je run. Onze AI-skitechniekanalyse bekijkt elk beeld – kantangle, timing, lijnkeuze en meer." }, { title: "Directe AI-skitechniekanalyse", text: "Krijg binnen seconden een persoonlijke skianalyse met verbeteringssuggesties, oefeningen en een score voor je techniek." }, { title: "Vraag coachreview aan", text: "Wil je diepere feedback? Vraag met één klik een handmatige coachreview aan wanneer je die nodig hebt." }],
    barmark: { badge: "AI-gestuurde drylandtraining aangepast aan je skitechniek", heading: "🔥 Bereid je voor op volgend seizoen – AI-gestuurde drylandtraining", body: "Houd je techniek scherp ook in de zomer! Ons AI-gestuurde drylandprogramma past oefeningen aan op basis van je skitechniek – van heupstabiliteit tot reactieve kracht, zodat je klaar bent wanneer de sneeuw terugkomt. Onbeperkte toegang voor leden.", checklist: ["3–6 oefeningen gericht op je grootste beperkingen", "Past zich aan als je techniek verbetert", "Gebaseerd op je volledige videoanalysegeschiedenis"], exercises: ["Single-Leg Wall Sit – Isometrische kracht voor belasting van de buitenste ski", "Lateral Bounds – Simuleert krachtoverdracht tussen bochten", "Pallof Press Hold – Vermindert ongewenste rotatie van de bovenrug"], tag: "Gepersonaliseerd op basis van je analysegeschiedenis" },
    aiCoach: { badge: "Exclusieve tool voor coaches", heading: "AI-coachassistent", body: "Coaches krijgen een AI-assistent die de videohistorie, techniekpatronen en voortgang van elke atleet kent. Stel vragen, krijg inzichten, plan training – alles op één plek.", checklist: ["Stel vragen over de techniek van alle atleten", "Krijg inzichten in voortgang en zwaktes", "Beschikbaar uitsluitend in het coachdashboard", "Aangedreven door volledige analysegeschiedenis"], chatTitle: "Voorbeeldvraag", chatQuestion: "Wat zijn Emmas grootste technische beperkingen op dit moment?", chatAnswer: "Emma vertoont een neiging tot heupcollapse in de binnenbocht, vertraagde drukinitiatie en iets te laat kantengagement in de overgangsfase." },
    coachFlow: { badge: "Gratis tool om je atleten te beheren — geen abonnement vereist.", heading: "Hoe het werkt voor coaches", steps: [{ title: "Gratis coachaccount aanmaken", text: "Registreer je als coach – volledig gratis, voor altijd." }, { title: "Atleten kiezen jou", text: "Je atleten voegen je toe als coach vanuit hun dashboard." }, { title: "Review & upload", text: "Bekijk hun analyses, upload video’s voor hen en geef feedback." }] },
    familyFlow: { badge: "Eén account — meerdere atleten", heading: "Hoe het werkt voor gezinnen", steps: ["Eén login voor de ouder", "Voeg meerdere atleten toe onder één account", "199 € / maand per atleet", "Coaches zien alleen atleten die hen hebben gekozen"], cta: "Account aanmaken en je eerste atleet toevoegen" },
    comparison: { heading: "Vergelijk: Gratis analyse vs volledig lidmaatschap – wat krijg je?", subtext: "Bekijk wat je ontgrendelt met een lidmaatschap" },
    pricing: { heading: "✨ Alpine Mastery Lidmaatschap – Je weg naar betere skitechniek", body: "Krijg onbeperkte AI-skianalyses en directe persoonlijke feedback. Vraag wanneer je wilt een handmatige coachreview aan en volg je techniekprogressie in de tijd. Snelle feedback met de mogelijkheid tot diepere coaching wanneer je die nodig hebt.", badge: "🎉 1 maand gratis — Geen verplichting, op elk moment opzegbaar. Normale prijs: 199 € / maand · ~$18/maand · ~€16/maand", cta: "Gratis starten" },
    mainCta: "Gratis analyse",
    secondaryCta: "Gratis starten",
    metaDescription: "AI-skitechniekanalyse voor skiërs, coaches en clubs. Upload een video en ontvang persoonlijke feedback over techniek, timing, kantangle en lijnkeuze.",
    schemaName: "Alpine Mastery AI-skitechniekanalyse",
  },
} as const;

function getLocaleCopy(locale: string) {
  return localeContent[locale as keyof typeof localeContent] ?? localeContent.sv;
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = getLocaleCopy(locale);
  const canonicalUrl = `https://blog.masteryhub.se/${locale}/ai-skidanalys`;
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((supportedLocale) => [
      supportedLocale,
      `https://blog.masteryhub.se/${supportedLocale}/ai-skidanalys`,
    ])
  ) as Record<string, string>;

  return {
    title: copy.highlight,
    description: copy.metaDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ...languages,
        "x-default": "https://blog.masteryhub.se/sv/ai-skidanalys",
      },
    },
    openGraph: {
      title: copy.highlight,
      description: copy.metaDescription,
      url: canonicalUrl,
      type: "website",
      siteName: "Alpine Mastery Blog",
      images: [
        {
          url: "https://blog.masteryhub.se/og-image.png",
          width: 1200,
          height: 630,
          alt: copy.highlight,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.highlight,
      description: copy.metaDescription,
      images: ["https://blog.masteryhub.se/og-image.png"],
    },
  };
}

export default async function AiskidanalysPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = getLocaleCopy(locale);

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: copy.schemaName,
    applicationCategory: "SportsApplication",
    operatingSystem: "Web",
    description: copy.metaDescription,
    url: `https://blog.masteryhub.se/${locale}/ai-skidanalys`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: locale === "fi" ? "EUR" : locale === "de" || locale === "fr" || locale === "nl" ? "EUR" : locale === "en" ? "USD" : "SEK",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "Frame-by-frame ski technique analysis",
      "Personalized drill recommendations",
      "Coach review workflows",
      "Training history and progression tracking",
    ],
  };

  return (
    <main className="bg-bg-primary text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-slate-950 via-slate-900 to-bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.20),transparent_40%),linear-gradient(135deg,_rgba(14,165,233,0.10),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
          <div className="mb-8 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {copy.badge}
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="max-w-xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                {copy.title}
                <span className="text-accent">{copy.highlight}</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-text-secondary sm:text-xl">
                {copy.subtext}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={productUrls.freeAnalysis}
                  className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-4 text-base font-bold text-bg-primary transition hover:bg-accent-hover"
                >
                  {copy.mainCta}
                </a>
                <a
                  href={productUrls.createAccount}
                  className="inline-flex items-center justify-center rounded-xl border border-accent px-6 py-4 text-base font-semibold text-accent transition hover:bg-accent/10"
                >
                  {copy.secondaryCta}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-border bg-bg-card/80 p-5 shadow-2xl shadow-sky-500/10">
                <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 p-4">
                  <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-accent/40 bg-slate-950/60 text-center text-sm text-text-secondary">
                    Demo video placeholder – add the real product demo asset here when available.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{copy.howHeading}</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-bg-card p-8">
            <p className="text-lg leading-8 text-text-secondary">{copy.howBody1}</p>
            <p className="mt-6 text-lg leading-8 text-text-secondary">{copy.howBody2}</p>
          </div>

          <div className="rounded-3xl border border-border bg-gradient-to-br from-accent/10 to-slate-900 p-8">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Demo
            </div>
            <div className="rounded-2xl border border-dashed border-accent/40 bg-slate-950/60 p-4 text-sm text-text-secondary">
              {copy.demoSubtext}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{copy.demoHeading}</h2>
            <p className="mt-3 text-text-secondary">{copy.demoSubtext}</p>
          </div>

          <div className="rounded-3xl border border-border bg-bg-card p-6 shadow-xl shadow-sky-500/5 sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div className="text-sm text-text-secondary">{copy.sampleMeta}</div>
              <div className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                {copy.scoreLabel}: {copy.scoreValue}
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="mb-6 h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-accent to-sky-300" />
                </div>
                <p className="text-lg leading-8 text-text-secondary">{copy.headline}</p>
              </div>

              <div className="rounded-2xl border border-border bg-slate-950/60 p-5">
                <h3 className="mb-4 text-lg font-bold text-white">{copy.problemsLabel}</h3>
                <ul className="space-y-3 text-text-secondary">
                  {copy.problems.map((problem) => (
                    <li key={problem} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Testimonials</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {copy.testimonials.map((item) => (
            <blockquote key={item.quote} className="rounded-3xl border border-border bg-bg-card p-6 text-left">
              <p className="text-lg leading-8 text-white">“{item.quote}”</p>
              <footer className="mt-5 text-sm font-medium text-accent">{item.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {copy.cards.map((card) => (
            <article key={card.title} className="rounded-3xl border border-border bg-bg-card p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-lg text-accent">
                ✦
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{card.title}</h3>
              <p className="text-text-secondary">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {copy.barmark.badge}
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{copy.barmark.heading}</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-border bg-bg-card p-8">
              <p className="text-lg leading-8 text-text-secondary">{copy.barmark.body}</p>
              <ul className="mt-6 space-y-3 text-text-secondary">
                {copy.barmark.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-slate-900 p-6">
              <h3 className="mb-4 text-lg font-bold text-white">Sample exercises</h3>
              <ul className="space-y-4 text-text-secondary">
                {copy.barmark.exercises.map((exercise) => (
                  <li key={exercise} className="rounded-2xl border border-border bg-bg-card p-4">
                    {exercise}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent">
                {copy.barmark.tag}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-border bg-bg-card p-8">
            <div className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {copy.aiCoach.badge}
            </div>
            <h2 className="text-3xl font-bold text-white">{copy.aiCoach.heading}</h2>
            <p className="mt-5 text-lg leading-8 text-text-secondary">{copy.aiCoach.body}</p>
            <ul className="mt-6 space-y-3 text-text-secondary">
              {copy.aiCoach.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-slate-900 p-6">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {copy.aiCoach.chatTitle}
            </div>
            <div className="rounded-2xl border border-border bg-bg-card p-4">
              <div className="mb-2 text-sm text-text-secondary">Q</div>
              <p className="text-white">{copy.aiCoach.chatQuestion}</p>
            </div>
            <div className="mt-4 rounded-2xl border border-accent/30 bg-accent/10 p-4">
              <div className="mb-2 text-sm text-accent">A</div>
              <p className="text-white">{copy.aiCoach.chatAnswer}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {copy.coachFlow.badge}
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{copy.coachFlow.heading}</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {copy.coachFlow.steps.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-border bg-bg-card p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-bg-primary">
                {index + 1}
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
              <p className="text-text-secondary">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {copy.familyFlow.badge}
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{copy.familyFlow.heading}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {copy.familyFlow.steps.map((step) => (
              <div key={step} className="rounded-3xl border border-border bg-bg-card p-5 text-center text-text-secondary">
                {step}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={productUrls.createAccount}
              className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-base font-bold text-bg-primary transition hover:bg-accent-hover"
            >
              {copy.familyFlow.cta}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{copy.comparison.heading}</h2>
          <p className="mt-3 text-text-secondary">{copy.comparison.subtext}</p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-bg-card">
          <div className="grid grid-cols-3 border-b border-border bg-slate-900/80 text-sm font-semibold uppercase tracking-[0.12em] text-text-secondary">
            <div className="px-4 py-4">Plan</div>
            <div className="px-4 py-4">Gratis analys</div>
            <div className="px-4 py-4">Fullt medlemskap</div>
          </div>

          {[
            ["Videoanalyser", "1 AI-skidanalys (begränsad historik)", "Obegränsade AI-skidanalyser + full progressionsspårning"],
            ["Feedbackdjup", "Full teknisk genomgång", "Full teknisk genomgång"],
            ["Analyshistorik", "Begränsad till 1 analys", "Full progressionsspårning"],
            ["Barmarksträning", "Personliga program", "Personliga barmarks- och skidträningsprogram baserade på din teknik"],
            ["Tränare AI-chatt", "För tränare", "För tränare"],
            ["Personliga fokusområden", "AI-prioriterade", "AI-prioriterade"],
            ["Progressionskurvor", "Kräver fler analyser", "Visuell spårning"],
            ["Tränarverktyg", "Komplett svit", "Komplett svit"],
            ["Support", "Community", "Prioriterad"],
          ].map(([label, freeValue, paidValue]) => (
            <div key={label} className="grid grid-cols-3 border-b border-border text-sm text-text-secondary last:border-b-0">
              <div className="px-4 py-4 font-medium text-white">{label}</div>
              <div className="px-4 py-4">{freeValue}</div>
              <div className="px-4 py-4">{paidValue}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <CTABanner
          title={copy.pricing.heading}
          description={copy.pricing.body}
          showBrand
          product="Alpine Mastery"
        />
      </section>
    </main>
  );
}
