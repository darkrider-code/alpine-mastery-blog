import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import { SUPPORTED_LOCALES } from "@/lib/translations";

const productUrls = {
  freeAnalysis: "https://alpine.masteryhub.se/free-analysis",
  createAccount: "https://alpine.masteryhub.se/auth?redirect=/membership/checkout?cycle=monthly",
};

interface LocaleCopy {
  badge: string;
  title: string;
  highlight: string;
  subtext: string;
  howHeading: string;
  howBody1: string;
  howBody2: string;
  demoHeading: string;
  demoSubtext: string;
  demoLabel: string;
  demoPlaceholder: string;
  sampleMeta: string;
  scoreLabel: string;
  scoreValue: number;
  headline: string;
  problemsLabel: string;
  problems: string[];
  testimonialsHeading: string;
  testimonials: { quote: string; author: string }[];
  cards: { title: string; text: string }[];
  barmark: {
    badge: string;
    heading: string;
    body: string;
    checklist: string[];
    exercisesLabel: string;
    exercises: string[];
    tag: string;
  };
  aiCoach: {
    badge: string;
    heading: string;
    body: string;
    checklist: string[];
    chatTitle: string;
    chatQ: string;
    chatA: string;
    chatQuestion: string;
    chatAnswer: string;
  };
  coachFlow: {
    badge: string;
    heading: string;
    steps: { title: string; text: string }[];
  };
  familyFlow: {
    badge: string;
    heading: string;
    steps: string[];
    cta: string;
  };
  comparison: {
    heading: string;
    subtext: string;
    planLabel: string;
    freeLabel: string;
    paidLabel: string;
    rows: [string, string, string][];
  };
  pricing: {
    heading: string;
    body: string;
    badge: string;
    cta: string;
  };
  mainCta: string;
  secondaryCta: string;
  metaDescription: string;
  schemaName: string;
}

const localeContent: Record<string, LocaleCopy> = {
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
    demoLabel: "Demo",
    demoPlaceholder: "Demovideo – lägg till den riktiga produktdemon här när den finns tillgänglig.",
    sampleMeta: "Slalom · Expert · 95/100",
    scoreLabel: "Totalpoäng",
    scoreValue: 95,
    headline:
      "En elitnivåslalom som visar exceptionell teknisk precision, mycket stora kantvinklar och en världsklass-lugn överkropp på en brant race-linje.",
    problemsLabel: "Identifierade problem",
    problems: [
      "Lätt höftlutning vid avslutningen av svängen i den brantaste sektionen.",
      "Tillfällig dragning i underskidan under höghastighetsovergången.",
    ],
    testimonialsHeading: "Vad våra användare säger",
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
      exercisesLabel: "Exempelövningar",
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
      chatQ: "F",
      chatA: "S",
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
    comparison: {
      heading: "Jämför: Gratis analys vs Fullt medlemskap – vad får du?",
      subtext: "Se vad du låser upp med ett medlemskap",
      planLabel: "Plan",
      freeLabel: "Gratis analys",
      paidLabel: "Fullt medlemskap",
      rows: [
        ["Videoanalyser", "1 AI-skidanalys (begränsad historik)", "Obegränsade AI-skidanalyser + full progressionsspårning"],
        ["Feedbackdjup", "Full teknisk genomgång", "Full teknisk genomgång"],
        ["Analyshistorik", "Begränsad till 1 analys", "Full progressionsspårning"],
        ["Barmarksträning", "Personliga program", "Personliga barmarks- och skidträningsprogram baserade på din teknik"],
        ["Tränare AI-chatt", "För tränare", "För tränare"],
        ["Personliga fokusområden", "AI-prioriterade", "AI-prioriterade"],
        ["Progressionskurvor", "Kräver fler analyser", "Visuell spårning"],
        ["Tränarverktyg", "Komplett svit", "Komplett svit"],
        ["Support", "Community", "Prioriterad"],
      ],
    },
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
    demoLabel: "Demo",
    demoPlaceholder: "Demo video – add the real product demo asset here when available.",
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
    testimonialsHeading: "What our users say",
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
      exercisesLabel: "Sample exercises",
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
      chatQ: "Q",
      chatA: "A",
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
    comparison: {
      heading: "Compare: Free analysis vs Full membership – what do you get?",
      subtext: "See what you unlock with a membership",
      planLabel: "Plan",
      freeLabel: "Free analysis",
      paidLabel: "Full membership",
      rows: [
        ["Video analyses", "1 AI ski analysis (limited history)", "Unlimited AI ski analyses + full progression tracking"],
        ["Feedback depth", "Full technical review", "Full technical review"],
        ["Analysis history", "Limited to 1 analysis", "Full progression tracking"],
        ["Dryland training", "Personal programs", "Personal dryland and ski training programs based on your technique"],
        ["Coach AI chat", "For coaches", "For coaches"],
        ["Personal focus areas", "AI-prioritized", "AI-prioritized"],
        ["Progression curves", "Requires more analyses", "Visual tracking"],
        ["Coach tools", "Complete suite", "Complete suite"],
        ["Support", "Community", "Priority"],
      ],
    },
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
    demoLabel: "Demo",
    demoPlaceholder: "Demovideo – legg til den ekte produktdemon her når den er tilgjengelig.",
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
    testimonialsHeading: "Hva brukerne våre sier",
    testimonials: [
      {
        quote:
          "AI-skiteknikanalysen var mye mer presis enn jeg forventet – den fanget detaljer jeg aldri hadde lagt merke til selv!",
        author: "Norsk juniorløper",
      },
      {
        quote:
          "Dette hjelper virkelig trenere og foreldre som sliter med å vite hvilken tilbakemelding som er viktigst.",
        author: "Klubbtrener i Nord-Norge",
      },
      {
        quote:
          "Athena trente nylig med en verdensklasse teknikktrener og olympisk mester. Tilbakemeldingen hun fikk samsvarte med analysen fra Alpine Mastery – lav håndposisjon og å sitte for langt bak. Vi er meget imponert. Det gir oss tydelige ting å jobbe med neste gang vi kjører fritt på Ski Dubai.",
        author: "Alex, forelder til Athena Makonnen, Alpine Mastery profilskiløper",
      },
    ],
    cards: [
      {
        title: "Last opp kjøringen din",
        text: "Del en kort video fra kjøringen din. Vår AI-skiteknikanalyse går gjennom hvert bilde – kantvinkel, timing, linjeføring og mer.",
      },
      {
        title: "Direkte AI-skiteknikanalyse",
        text: "Få en personlig skiteknikanalyse i sekunder med forbedringstips, øvelser og vurdering av teknikken din.",
      },
      {
        title: "Be om trenergranskning",
        text: "Vil du ha dypere tilbakemelding? Be om manuell trenergranskning med ett klikk når du trenger det.",
      },
    ],
    barmark: {
      badge: "AI-drevet barmarkstrening tilpasset din skiteknikk",
      heading: "🔥 Gå forberedt til neste sesong – Barmarkstrening med AI",
      body:
        "Hold teknikken skarp også om sommeren! Vårt AI-drevne barmarksprogram skreddersyr øvelser basert på skiteknikken din – fra hoftestabilitet til reaktiv styrke, for at du skal være klar når snøen kommer. Ubegrenset tilgang for medlemmer.",
      checklist: [
        "3–6 øvelser rettet mot dine største begrensninger",
        "Tilpasses når teknikken forbedres",
        "Bygges på hele din videoanalysehistorikk",
      ],
      exercisesLabel: "Eksempeløvelser",
      exercises: [
        "Single-Leg Wall Sit – Isometrisk styrke for belastning av ytre ski",
        "Lateral Bounds – Etterligner kraftoverføring mellom svingene",
        "Pallof Press Hold – Reduserer uønsket rotasjon i overkroppen",
      ],
      tag: "Personalisert basert på analysehistorikken din",
    },
    aiCoach: {
      badge: "Eksklusivt verktøy for trenere",
      heading: "AI-trenerassistent",
      body:
        "Trenere får en AI-assistent som kjenner hver utøveres videohistorikk, teknikkmønstre og progresjon. Still spørsmål, få innsikter, planlegg trening – alt på ett sted.",
      checklist: [
        "Still spørsmål om alle utøvers teknikk",
        "Få innsikter om progresjon og svakheter",
        "Tilgjengelig eksklusivt i trenerens dashboard",
        "Drevet av full analysehistorikk",
      ],
      chatTitle: "Eksempelspørsmål",
      chatQ: "S",
      chatA: "S",
      chatQuestion: "Hva er Emmas største tekniske begrensninger akkurat nå?",
      chatAnswer:
        "Emma viser en tendens til hoftesenkning i innsving, for sen trykkstart og litt for sen kantengasjement i overgangsfasen.",
    },
    coachFlow: {
      badge: "Gratis verktøy for å håndtere dine utøvere – ingen abonnement kreves.",
      heading: "Slik fungerer det for trenere",
      steps: [
        {
          title: "Opprett gratis trenerkonto",
          text: "Registrer deg som trener – helt gratis for alltid.",
        },
        {
          title: "Utøvere velger deg",
          text: "Dine utøvere legger til deg som trener fra sitt dashboard.",
        },
        {
          title: "Gransk & last opp",
          text: "Se analysene deres, last opp videoer for dem og gi tilbakemelding.",
        },
      ],
    },
    familyFlow: {
      badge: "Én konto — flere utøvere",
      heading: "Slik fungerer det for familier",
      steps: [
        "Én innlogging for forelderen",
        "Legg til flere utøvere under én konto",
        "199 kr/måned per utøver",
        "Trenere ser bare utøvere som valgte dem",
      ],
      cta: "Opprett konto og legg til din første utøver",
    },
    comparison: {
      heading: "Sammenlign: Gratis analyse vs full medlemskap – hva får du?",
      subtext: "Se hva du låser opp med et medlemskap",
      planLabel: "Plan",
      freeLabel: "Gratis analyse",
      paidLabel: "Fullt medlemskap",
      rows: [
        ["Videoanalyser", "1 AI-skiteknikanalyse (begrenset historikk)", "Ubegrensede AI-skiteknikanalyser + full progresjonssporing"],
        ["Tilbakemeldingsdybde", "Full teknisk gjennomgang", "Full teknisk gjennomgang"],
        ["Analysehistorikk", "Begrenset til 1 analyse", "Full progresjonssporing"],
        ["Barmarkstrening", "Personlige programmer", "Personlige barmarks- og skitreningsprogrammer basert på teknikken din"],
        ["Trener AI-chat", "For trenere", "For trenere"],
        ["Personlige fokusområder", "AI-prioritert", "AI-prioritert"],
        ["Progresjonskurver", "Krever flere analyser", "Visuell sporing"],
        ["Trenerverktøy", "Komplett pakke", "Komplett pakke"],
        ["Støtte", "Fellesskap", "Prioritert"],
      ],
    },
    pricing: {
      heading: "✨ Alpine Mastery-medlemskap – Veien til bedre skiteknikk",
      body:
        "Få ubegrensede AI-skiteknikanalyser og personlig tilbakemelding direkte. Be om manuell trenergranskning når du vil, og spor teknikkutviklingen over tid. Rask tilbakemelding med mulighet for dypere coaching når du trenger det.",
      badge: "🎉 1 måned gratis — Ingen bindingstid, avslutt når du vil. Ordinær pris: 199 kr / måned · ~$18/måned · ~€16/måned",
      cta: "Start gratis",
    },
    mainCta: "Gratis analyse",
    secondaryCta: "Start gratis",
    metaDescription:
      "AI-skiteknikanalyse for skiløpere, trenere og klubber. Last opp en video og få personlig tilbakemelding om teknikk, timing, kantvinkel og linjeføring.",
    schemaName: "Alpine Mastery AI-skiteknikanalyse",
  },
  da: {
    badge: "Din alpine coach – i lommen",
    title: "Mester bjerget med AI – ",
    highlight: "Skidteknikanalyse der virker",
    subtext:
      "Alpine Mastery analyserer dine ture billede for billede og giver personlig feedback, der udvikler sig med dig over tid.",
    howHeading: "Sådan fungerer vores AI-skidteknikanalyse",
    howBody1:
      "Alpine Mastery bruger avanceret AI til at analysere din skidteknik billede for billede – kantvinkel, trykfordeling, timing og linjeføring. Perfekt til skiløbere, trænere og klubber.",
    howBody2:
      "Alpine Mastery bruger AI til at analysere din skidteknik fra en kort video. Upload et klip, få en personlig analyse inden for sekunder – med forbedringstips, øvelser og karakter. Test gratis.",
    demoHeading: "Se en rigtig analyse",
    demoSubtext: "En komplet AI-rapport fra en rigtig skiløber – ingen login kræves.",
    demoLabel: "Demo",
    demoPlaceholder: "Demovideo – tilføj den rigtige produktdemo her, når den er tilgængelig.",
    sampleMeta: "Slalom · Ekspert · 95/100",
    scoreLabel: "Samlet score",
    scoreValue: 95,
    headline:
      "En elite-slalom, der viser exceptionel teknisk præcision, massive kantvinkler og en verdensklasse rolig overkrop på en stejl race-linje.",
    problemsLabel: "Identificerede problemer",
    problems: [
      "Let vægtforskydning i slutningen af svinget på det stejleste stykke.",
      "Lejlighedsvis inderskibevægelse under højhastighedsovergangen.",
    ],
    testimonialsHeading: "Hvad vores brugere siger",
    testimonials: [
      {
        quote:
          "AI-skidteknikanalysen var langt mere præcis, end jeg havde forventet – den fangede detaljer, jeg aldrig selv ville have opdaget!",
        author: "Dansk juniorløber",
      },
      {
        quote:
          "Det hjælper virkelig trænere og forældre, der kæmper med at vide, hvilken feedback der betyder mest.",
        author: "Klubtræner i Nordjylland",
      },
      {
        quote:
          "Athena trænede for nylig med en verdensklasse tekniktræner og olympisk mester. Den feedback, hun fik, matchede analysen fra Alpine Mastery – lav håndposition og at sidde for langt tilbage. Vi er meget imponerede. Det giver os klare ting at arbejde med næste gang, vi kører frit i Ski Dubai.",
        author: "Alex, forælder til Athena Makonnen, Alpine Mastery profilløber",
      },
    ],
    cards: [
      {
        title: "Upload din tur",
        text: "Del en kort video af din tur. Vores AI-skidteknikanalyse gennemgår hvert billede – kantvinkel, timing, linjeføring og mere.",
      },
      {
        title: "Øjeblikkelig AI-skidteknikanalyse",
        text: "Få en personlig skianalyse inden for sekunder med forbedringstips, øvelser og en karakter for din teknik.",
      },
      {
        title: "Anmod om trænergennemgang",
        text: "Vil du have dybere feedback? Anmod om manuel trænergennemgang med ét klik, når du har brug for det.",
      },
    ],
    barmark: {
      badge: "AI-drevet tørtræning tilpasset din skidteknik",
      heading: "🔥 Gør dig klar til næste sæson – Tørtræning med AI",
      body:
        "Hold din teknik skarp også om sommeren! Vores AI-drevne tørtræningsprogram skræddersyer øvelser baseret på din skidteknik – fra hoftestabilitet til reaktiv styrke, så du er klar, når sneen kommer. Ubegrænset adgang for medlemmer.",
      checklist: [
        "3–6 øvelser rettet mod dine største begrænsninger",
        "Tilpasses, når din teknik forbedres",
        "Bygget på hele din videoanalysehistorik",
      ],
      exercisesLabel: "Eksempeløvelser",
      exercises: [
        "Single-Leg Wall Sit – Isometrisk styrke til belastning af yderskien",
        "Lateral Bounds – Efterligner kraftoverførsel mellem sving",
        "Pallof Press Hold – Reducerer uønsket rotation i overkroppen",
      ],
      tag: "Personliggjort baseret på din analysehistorik",
    },
    aiCoach: {
      badge: "Eksklusivt værktøj til trænere",
      heading: "AI-trænerassistent",
      body:
        "Trænere får en AI-assistent, der kender hver udøvers videohistorik, teknikmønstre og progression. Stil spørgsmål, få indsigter, planlæg træning – alt på ét sted.",
      checklist: [
        "Stil spørgsmål om alle udøveres teknik",
        "Få indsigter om progression og svagheder",
        "Kun tilgængelig i trænerens dashboard",
        "Drevet af fuld analysehistorik",
      ],
      chatTitle: "Eksempelspørgsmål",
      chatQ: "S",
      chatA: "S",
      chatQuestion: "Hvad er Emmas største tekniske begrænsninger lige nu?",
      chatAnswer:
        "Emma viser en tendens til hoftesammenbrud i indersvinget, forsinket trykinitiering og lidt for sent kantengagement i overgangsfasen.",
    },
    coachFlow: {
      badge: "Gratis værktøj til at håndtere dine udøvere — intet abonnement kræves.",
      heading: "Sådan fungerer det for trænere",
      steps: [
        {
          title: "Opret gratis trænerkonto",
          text: "Registrer dig som træner – helt gratis, for altid.",
        },
        {
          title: "Udøvere vælger dig",
          text: "Dine udøvere tilføjer dig som træner fra deres dashboard.",
        },
        {
          title: "Gennemgå & upload",
          text: "Se deres analyser, upload videoer for dem og giv feedback.",
        },
      ],
    },
    familyFlow: {
      badge: "Én konto — flere udøvere",
      heading: "Sådan fungerer det for familier",
      steps: [
        "Én login til forælderen",
        "Tilføj flere udøvere under én konto",
        "199 kr/måned per udøver",
        "Trænere ser kun udøvere, der har valgt dem",
      ],
      cta: "Opret konto og tilføj din første udøver",
    },
    comparison: {
      heading: "Sammenlign: Gratis analyse vs fuldt medlemskab – hvad får du?",
      subtext: "Se, hvad du låser op med et medlemskab",
      planLabel: "Plan",
      freeLabel: "Gratis analyse",
      paidLabel: "Fuldt medlemskab",
      rows: [
        ["Videoanalyser", "1 AI-skidteknikanalyse (begrænset historik)", "Ubegrænsede AI-skidteknikanalyser + fuld progressionssporing"],
        ["Feedbackdybde", "Fuld teknisk gennemgang", "Fuld teknisk gennemgang"],
        ["Analysehistorik", "Begrænset til 1 analyse", "Fuld progressionssporing"],
        ["Tørtræning", "Personlige programmer", "Personlige tørtrænings- og skitræningsprogrammer baseret på din teknik"],
        ["Træner AI-chat", "For trænere", "For trænere"],
        ["Personlige fokusområder", "AI-prioriteret", "AI-prioriteret"],
        ["Progressionskurver", "Kræver flere analyser", "Visuel sporing"],
        ["Trænerværktøjer", "Komplet pakke", "Komplet pakke"],
        ["Support", "Fællesskab", "Prioriteret"],
      ],
    },
    pricing: {
      heading: "✨ Alpine Mastery-medlemskab – Din vej til bedre skidteknik",
      body:
        "Få ubegrænsede AI-skidteknikanalyser og direkte personlig feedback. Anmod om manuel trænergennemgang, når du vil, og følg din tekniske progression over tid. Hurtig feedback med mulighed for dybere coaching, når du har brug for det.",
      badge: "🎉 1 måned gratis — Ingen binding, opsig når du vil. Normalpris: 199 kr / måned · ~$18/måned · ~€16/måned",
      cta: "Start gratis",
    },
    mainCta: "Gratis analyse",
    secondaryCta: "Start gratis",
    metaDescription:
      "AI-skidteknikanalyse for skiløbere, trænere og klubber. Upload en video og få personlig feedback om teknik, timing, kantvinkel og linjeføring.",
    schemaName: "Alpine Mastery KI-Skianalyse",
  },
  fi: {
    badge: "Alppivalmentajasi – taskussasi",
    title: "Hallitse rinne tekoälyn avulla – ",
    highlight: "Laskutekniikka-analyysi, joka toimii",
    subtext:
      "Alpine Mastery analysoi laskusi kuva kuv alta ja antaa henkilökohtaista palautetta, joka kehittyy kanssasi ajan myötä.",
    howHeading: "Näin tekoälypohjainen laskuanalyysimme toimii",
    howBody1:
      "Alpine Mastery käyttää kehittynyttä tekoälyä laskutekniikkasi analysointiin kuva kuv alta – kanttikulma, painonjakauma, ajoitus ja linjanvalinta. Täydellinen laskijoille, valmentajille ja seuroille.",
    howBody2:
      "Alpine Mastery käyttää tekoälyä laskutekniikkasi analysointiin lyhyestä videosta. Lataa pätkä, saat henkilökohtaisen analyysin sekunneissa – parannusvinkkejä, harjoitteita ja arvosanan. Kokeile ilmaiseksi.",
    demoHeading: "Katso oikea analyysi",
    demoSubtext: "Täydellinen tekoälyraportti oikealta laskijalta – kirjautumista ei tarvita.",
    demoLabel: "Demo",
    demoPlaceholder: "Demovideo – lisää oikea tuotedemo tähän, kun se on saatavilla.",
    sampleMeta: "Pujottelu · Asiantuntija · 95/100",
    scoreLabel: "Kokonaispisteet",
    scoreValue: 95,
    headline:
      "Elititason pujottelulasku, joka osoittaa poikkeuksellista teknistä tarkkuutta, valtavia kanttikulmia ja maailmanluokan rauhallista ylävartaloa jyrkällä kilpalinjalla.",
    problemsLabel: "Tunnistetut ongelmat",
    problems: [
      "Lievä lantion kallistus käännöksen lopussa jyrkimmällä osuudella.",
      "Satunnainen sisäsuksen veto nopeassa siirtymävaiheessa.",
    ],
    testimonialsHeading: "Mitä käyttäjämme sanovat",
    testimonials: [
      {
        quote:
          "Tekoälypohjainen laskuanalyysi oli paljon tarkempi kuin odotin – se huomasi yksityiskohtia, joita en olisi itse koskaan huomannut!",
        author: "Suomalainen juniorilaskija",
      },
      {
        quote:
          "Tämä auttaa todella valmentajia ja vanhempia, jotka kamppailevat sen kanssa, mikä palaute on tärkeintä.",
        author: "Seuravalmentaja Pohjois-Suomesta",
      },
      {
        quote:
          "Athena harjoitteli äskettäin maailmanluokan tekniikkavalmentajan ja olympiavoittajan kanssa. Saamansa palaute vastasi Alpine Masteryn analyysiä – matala käden asento ja liian takana istuminen. Olemme erittäin vaikuttuneita. Se antaa meille selkeitä asioita, joita voimme harjoitella seuraavan kerran, kun laskemme vapaasti Ski Dubaissa.",
        author: "Alex, Athena Makonnenin vanhempi, Alpine Mastery -profiililaskija",
      },
    ],
    cards: [
      {
        title: "Lataa laskusi",
        text: "Jaa lyhyt video laskustasi. Tekoälypohjainen laskuanalyysimme käy läpi jokaisen kuvan – kanttikulman, ajoituksen, linjanvalinnan ja paljon muuta.",
      },
      {
        title: "Välitön tekoälyanalyysi",
        text: "Saat henkilökohtaisen laskuanalyysin sekunneissa parannusvinkkeineen, harjoitteineen ja arvosanoineen tekniikastasi.",
      },
      {
        title: "Pyydä valmentajan arvio",
        text: "Haluatko syvällisempää palautetta? Pyydä manuaalinen valmentajan arvio yhdellä klikkauksella, kun tarvitset sitä.",
      },
    ],
    barmark: {
      badge: "Tekoälypohjainen kuivaharjoittelu räätälöitynä laskutekniikkaasi",
      heading: "🔥 Valmistaudu seuraavaan kauteen – Kuivaharjoittelu tekoälyn avulla",
      body:
        "Pidä tekniikkasi terävänä myös kesällä! Tekoälypohjainen kuivaharjoitteluohjelmamme räätälöi harjoitteet laskutekniikkasi perusteella – lantion vakaudesta reaktiiviseen voimaan, jotta olet valmis, kun lumi tulee. Rajoittamaton pääsy jäsenille.",
      checklist: [
        "3–6 harjoitetta, jotka kohdistuvat suurimpiin rajoitteisiisi",
        "Mukautuu tekniikkasi parantuessa",
        "Perustuu koko videoanalyysihistoriaasi",
      ],
      exercisesLabel: "Esimerkkiharjoitteet",
      exercises: [
        "Single-Leg Wall Sit – Isometrinen voima ulkosuksen kuormitukseen",
        "Lateral Bounds – Jäljittelee voimansiirtoa käännösten välillä",
        "Pallof Press Hold – Vähentää ei-toivottua ylävartalon kiertoa",
      ],
      tag: "Henkilökohtaistettu analyysihistoriasi perusteella",
    },
    aiCoach: {
      badge: "Valmentajien yksinoikeustyökalu",
      heading: "Tekoälyvalmentaja-assistentti",
      body:
        "Valmentajat saavat tekoälyassistentin, joka tuntee jokaisen urheilijan videohistorian, tekniikkamallit ja kehityksen. Kysy kysymyksiä, saa oivalluksia, suunnittele harjoittelua – kaikki yhdessä paikassa.",
      checklist: [
        "Kysy kysymyksiä kaikkien urheilijoiden tekniikasta",
        "Saa oivalluksia kehityksestä ja heikkouksista",
        "Saatavilla yksinomaan valmentajan hallintapaneelissa",
        "Perustuu täyteen analyysihistoriaan",
      ],
      chatTitle: "Esimerkkikysymys",
      chatQ: "K",
      chatA: "V",
      chatQuestion: "Mitkä ovat Emman suurimmat tekniset rajoitteet juuri nyt?",
      chatAnswer:
        "Emma osoittaa taipumusta lantion romahtamiseen sisäkäännöksessä, viivästynyttä paineen aloitusta ja hieman myöhäistä kantin aktivointia siirtymävaiheessa.",
    },
    coachFlow: {
      badge: "Ilmainen työkalu urheilijoiden hallintaan — ei tilausvaatimusta.",
      heading: "Näin se toimii valmentajille",
      steps: [
        {
          title: "Luo ilmainen valmentajatili",
          text: "Rekisteröidy valmentajaksi – täysin ilmaiseksi, ikuisesti.",
        },
        {
          title: "Urheilijat valitsevat sinut",
          text: "Urheilijasi lisäävät sinut valmentajaksi hallintapaneelistaan.",
        },
        {
          title: "Arvioi & lataa",
          text: "Näe heidän analyysinsä, lataa videoita heidän puolestaan ja anna palautetta.",
        },
      ],
    },
    familyFlow: {
      badge: "Yksi tili — useita laskijoita",
      heading: "Näin se toimii perheille",
      steps: [
        "Yksi kirjautuminen vanhemmalle",
        "Lisää useita laskijoita yhden tilin alle",
        "199 kr/kk per laskija",
        "Valmentajat näkevät vain urheilijat, jotka valitsivat heidät",
      ],
      cta: "Luo tili ja lisää ensimmäinen laskijasi",
    },
    comparison: {
      heading: "Vertaa: Ilmainen analyysi vs täysi jäsenyys – mitä saat?",
      subtext: "Katso, mitä avaat jäsenyydellä",
      planLabel: "Suunnitelma",
      freeLabel: "Ilmainen analyysi",
      paidLabel: "Täysi jäsenyys",
      rows: [
        ["Videoanalyysit", "1 tekoälyanalyysi (rajoitettu historia)", "Rajoittamattomat tekoälyanalyysit + täysi kehityksen seuranta"],
        ["Palautteen syvyys", "Täysi tekninen läpikäynti", "Täysi tekninen läpikäynti"],
        ["Analyysihistoria", "Rajoitettu yhteen analyysiin", "Täysi kehityksen seuranta"],
        ["Kuivaharjoittelu", "Henkilökohtaiset ohjelmat", "Henkilökohtaiset kuiva- ja laskuharjoitteluohjelmat tekniikkasi perusteella"],
        ["Valmentajan tekoälychat", "Valmentajille", "Valmentajille"],
        ["Henkilökohtaiset fokusalueet", "Tekoälyn priorisoimat", "Tekoälyn priorisoimat"],
        ["Kehityskäyrät", "Vaatii useampia analyysejä", "Visuaalinen seuranta"],
        ["Valmentajatyökalut", "Täysi paketti", "Täysi paketti"],
        ["Tuki", "Yhteisö", "Priorisoitu"],
      ],
    },
    pricing: {
      heading: "✨ Alpine Mastery -jäsenyys – Tie parempaan laskutekniikkaan",
      body:
        "Saat rajoittamattomat tekoälyanalyysit ja suoran henkilökohtaisen palautteen. Pyydä manuaalinen valmentajan arvio milloin haluat ja seuraa tekniikkasi kehitystä ajan myötä. Nopea palaute mahdollisuudella syvempään valmennukseen, kun tarvitset sitä.",
      badge: "🎉 1 kuukausi ilmaiseksi — Ei sitoutumista, peruuta milloin haluat. Normaalihinta: 199 kr / kk · ~$18/kk · ~€16/kk",
      cta: "Aloita ilmaiseksi",
    },
    mainCta: "Ilmainen analyysi",
    secondaryCta: "Aloita ilmaiseksi",
    metaDescription:
      "Tekoälypohjainen laskuanalyysi laskijoille, valmentajille ja seuroille. Lataa video ja saat henkilökohtaista palautetta tekniikasta, ajoituksesta, kanttikulmasta ja linjanvalinnasta.",
    schemaName: "Alpine Mastery tekoälypohjainen laskuanalyysi",
  },
  de: {
    badge: "Dein alpiner Coach – in deiner Tasche",
    title: "Meistere den Berg mit KI – ",
    highlight: "Skitechnik-Analyse, die funktioniert",
    subtext:
      "Alpine Mastery analysiert deine Schwünge Bild für Bild und gibt dir persönliches Feedback, das sich mit dir im Laufe der Zeit weiterentwickelt.",
    howHeading: "So funktioniert unsere KI-Skianalyse",
    howBody1:
      "Alpine Mastery nutzt fortschrittliche KI, um deine Skitechnik Bild für Bild zu analysieren – Kantenwinkel, Druckverteilung, Timing und Linienwahl. Perfekt für Skifahrer, Trainer und Vereine.",
    howBody2:
      "Alpine Mastery nutzt KI, um deine Skitechnik aus einem kurzen Video zu analysieren. Lade einen Clip hoch und erhalte in Sekunden eine persönliche Analyse – mit Verbesserungstipps, Übungen und Bewertung. Teste es kostenlos.",
    demoHeading: "Sieh dir eine echte Analyse an",
    demoSubtext: "Ein vollständiger KI-Bericht eines echten Skifahrers – keine Anmeldung erforderlich.",
    demoLabel: "Demo",
    demoPlaceholder: "Demovideo – füge hier die echte Produktdemo hinzu, sobald sie verfügbar ist.",
    sampleMeta: "Slalom · Experte · 95/100",
    scoreLabel: "Gesamtpunktzahl",
    scoreValue: 95,
    headline:
      "Ein Slalomlauf auf Elite-Niveau mit außergewöhnlicher technischer Präzision, sehr großen Kantenwinkeln und einem ruhigen Oberkörper auf Weltklasse-Niveau auf einer steilen Rennlinie.",
    problemsLabel: "Erkannte Probleme",
    problems: [
      "Leichte Beckenneigung am Ende des Schwungs im steilsten Abschnitt.",
      "Gelegentliches Ziehen des Innenskis beim Übergang mit hoher Geschwindigkeit.",
    ],
    testimonialsHeading: "Was unsere Nutzer sagen",
    testimonials: [
      {
        quote:
          "Die KI-Skianalyse war weitaus genauer, als ich erwartet hatte – sie hat Details erkannt, die ich selbst nie bemerkt hätte!",
        author: "Schwedischer Nachwuchsfahrer",
      },
      {
        quote:
          "Das hilft wirklich Trainern und Eltern, die nicht wissen, welches Feedback am wichtigsten ist.",
        author: "Vereinstrainer in Nordschweden",
      },
      {
        quote:
          "Athena trainierte kürzlich mit einem Weltklasse-Technikcoach und Olympiasieger. Das Feedback, das sie erhielt, entsprach der Analyse von Alpine Mastery – tiefe Handposition und zu weit hinten sitzen. Wir sind sehr beeindruckt. Es gibt uns klare Dinge, an denen wir beim nächsten freien Skifahren in Ski Dubai arbeiten können.",
        author: "Alex, Elternteil von Athena Makonnen, Alpine Mastery Profilfahrerin",
      },
    ],
    cards: [
      {
        title: "Lade deinen Lauf hoch",
        text: "Teile ein kurzes Video deines Laufs. Unsere KI-Skianalyse prüft jedes Bild – Kantenwinkel, Timing, Linienwahl und mehr.",
      },
      {
        title: "Sofortige KI-Skianalyse",
        text: "Erhalte in Sekunden eine persönliche Skianalyse mit Verbesserungstipps, Übungen und einer Bewertung deiner Technik.",
      },
      {
        title: "Coach-Überprüfung anfordern",
        text: "Möchtest du tiefergehendes Feedback? Fordere mit einem Klick eine manuelle Coach-Überprüfung an, wann immer du sie brauchst.",
      },
    ],
    barmark: {
      badge: "KI-gesteuertes Trockentraining, abgestimmt auf deine Skitechnik",
      heading: "🔥 Bereite dich auf die nächste Saison vor – Trockentraining mit KI",
      body:
        "Halte deine Technik auch im Sommer scharf! Unser KI-gesteuertes Trockentrainingsprogramm passt Übungen basierend auf deiner Skitechnik an – von Hüftstabilität bis reaktiver Kraft, damit du bereit bist, wenn der Schnee kommt. Unbegrenzter Zugang für Mitglieder.",
      checklist: [
        "3–6 Übungen, die auf deine größten Einschränkungen abzielen",
        "Passt sich an, wenn sich deine Technik verbessert",
        "Basiert auf deiner gesamten Videoanalyse-Historie",
      ],
      exercisesLabel: "Beispielübungen",
      exercises: [
        "Single-Leg Wall Sit – Isometrische Kraft für die Belastung des Außenskis",
        "Lateral Bounds – Ahmt die Kraftübertragung zwischen Schwüngen nach",
        "Pallof Press Hold – Reduziert unerwünschte Oberkörperrotation",
      ],
      tag: "Personalisierung basierend auf deiner Analyse-Historie",
    },
    aiCoach: {
      badge: "Exklusives Werkzeug für Trainer",
      heading: "KI-Trainerassistent",
      body:
        "Trainer erhalten einen KI-Assistenten, der die Videohistorie, Technikmuster und Fortschritte jedes Athleten kennt. Stelle Fragen, erhalte Einblicke, plane das Training – alles an einem Ort.",
      checklist: [
        "Stelle Fragen zur Technik aller Athleten",
        "Erhalte Einblicke in Fortschritte und Schwächen",
        "Ausschließlich im Trainer-Dashboard verfügbar",
        "Angetrieben von der vollständigen Analyse-Historie",
      ],
      chatTitle: "Beispielfrage",
      chatQ: "F",
      chatA: "A",
      chatQuestion: "Was sind Emmas größte technische Einschränkungen gerade jetzt?",
      chatAnswer:
        "Emma zeigt eine Tendenz zum Hüftkollaps in der Innenschwungphase, verzögerte Druckinitiierung und ein etwas zu spätes Kantenengagement in der Übergangsphase.",
    },
    coachFlow: {
      badge: "Kostenloses Werkzeug zur Verwaltung deiner Athleten — kein Abonnement erforderlich.",
      heading: "So funktioniert es für Trainer",
      steps: [
        {
          title: "Kostenloses Trainer-Konto erstellen",
          text: "Registriere dich als Trainer – völlig kostenlos, für immer.",
        },
        {
          title: "Athleten wählen dich",
          text: "Deine Athleten fügen dich über ihr Dashboard als Trainer hinzu.",
        },
        {
          title: "Überprüfen & hochladen",
          text: "Sieh dir ihre Analysen an, lade Videos für sie hoch und gib Feedback.",
        },
      ],
    },
    familyFlow: {
      badge: "Ein Konto — mehrere Skifahrer",
      heading: "So funktioniert es für Familien",
      steps: [
        "Ein Login für die Eltern",
        "Mehrere Skifahrer unter einem Konto hinzufügen",
        "199 kr/Monat pro Skifahrer",
        "Trainer sehen nur Athleten, die sie gewählt haben",
      ],
      cta: "Konto erstellen und deinen ersten Skifahrer hinzufügen",
    },
    comparison: {
      heading: "Vergleich: Kostenlose Analyse vs. Vollmitgliedschaft – was bekommst du?",
      subtext: "Sieh, was du mit einer Mitgliedschaft freischaltest",
      planLabel: "Plan",
      freeLabel: "Kostenlose Analyse",
      paidLabel: "Vollmitgliedschaft",
      rows: [
        ["Videoanalysen", "1 KI-Skianalyse (begrenzte Historie)", "Unbegrenzte KI-Skianalysen + vollständige Fortschrittsverfolgung"],
        ["Feedbacktiefe", "Vollständige technische Überprüfung", "Vollständige technische Überprüfung"],
        ["Analyse-Historie", "Begrenzt auf 1 Analyse", "Vollständige Fortschrittsverfolgung"],
        ["Trockentraining", "Persönliche Programme", "Persönliche Trocken- und Skitrainingsprogramme basierend auf deiner Technik"],
        ["Trainer-KI-Chat", "Für Trainer", "Für Trainer"],
        ["Persönliche Fokusbereiche", "KI-priorisiert", "KI-priorisiert"],
        ["Fortschrittskurven", "Erfordert mehr Analysen", "Visuelle Verfolgung"],
        ["Trainer-Werkzeuge", "Komplette Suite", "Komplette Suite"],
        ["Support", "Community", "Priorisiert"],
      ],
    },
    pricing: {
      heading: "✨ Alpine Mastery Mitgliedschaft – Dein Weg zu besserer Skitechnik",
      body:
        "Erhalte unbegrenzte KI-Skianalysen und direktes persönliches Feedback. Fordere jederzeit eine manuelle Coach-Überprüfung an und verfolge deine technische Entwicklung im Laufe der Zeit. Schnelles Feedback mit der Möglichkeit zu tieferem Coaching, wenn du es brauchst.",
      badge: "🎉 1 Monat kostenlos — Keine Bindung, jederzeit kündbar. Regulärer Preis: 199 kr / Monat · ~$18/Monat · ~€16/Monat",
      cta: "Kostenlos starten",
    },
    mainCta: "Kostenlose Analyse",
    secondaryCta: "Kostenlos starten",
    metaDescription:
      "KI-Skianalyse für Skifahrer, Trainer und Vereine. Lade ein Video hoch und erhalte persönliches Feedback zu Technik, Timing, Kantenwinkel und Linienwahl.",
    schemaName: "Alpine Mastery KI-Skianalyse",
  },
  fr: {
    badge: "Ton coach alpin – dans ta poche",
    title: "Maîtrise la montagne avec l’IA – ",
    highlight: "Analyse de technique de ski qui marche",
    subtext:
      "Alpine Mastery analyse tes descentes image par image et te donne un retour personnalisé qui s’améliore avec toi au fil du temps.",
    howHeading: "Comment fonctionne notre analyse IA du ski",
    howBody1:
      "Alpine Mastery utilise une IA avancée pour analyser ta technique de ski image par image – angle de carre, répartition de la pression, timing et choix de ligne. Parfait pour les skieurs, entraîneurs et clubs.",
    howBody2:
      "Alpine Mastery utilise l’IA pour analyser ta technique de ski à partir d’une courte vidéo. Télécharge une séquence, obtiens une analyse personnelle en quelques secondes – avec conseils d’amélioration, exercices et note. Essaie gratuitement.",
    demoHeading: "Voir une vraie analyse",
    demoSubtext: "Un rapport IA complet d’un vrai skieur – sans connexion requise.",
    demoLabel: "Démo",
    demoPlaceholder: "Vidéo de démo – ajoute la vraie démo produit ici lorsqu’elle sera disponible.",
    sampleMeta: "Slalom · Expert · 95/100",
    scoreLabel: "Score total",
    scoreValue: 95,
    headline:
      "Une descente de slalom de haut niveau démontrant une précision technique exceptionnelle, de très grands angles de carre et un haut du corps très calme sur une pente raide.",
    problemsLabel: "Problèmes identifiés",
    problems: [
      "Léger basculement du bassin à la fin du virage sur la partie la plus raide.",
      "Frottement occasionnel du ski intérieur lors de la transition à grande vitesse.",
    ],
    testimonialsHeading: "Ce que disent nos utilisateurs",
    testimonials: [
      {
        quote:
          "L’analyse IA du ski était beaucoup plus précise que je ne l’imaginais – elle a repéré des détails que je n’aurais jamais vu moi-même !",
        author: "Jeune skieuse suédoise",
      },
      {
        quote:
          "Ça aide vraiment les entraîneurs et les parents qui ont du mal à savoir quel retour est le plus important.",
        author: "Entraîneur de club dans le nord de la Suède",
      },
      {
        quote:
          "Athena a récemment entraîné avec un entraîneur de technique de classe mondiale et un champion olympique. Le retour qu’elle a reçu correspondait à l’analyse d’Alpine Mastery – position basse des mains et assise trop en arrière. Nous sommes très impressionnés. Cela nous donne des points clairs à travailler la prochaine fois que nous skierons librement à Ski Dubai.",
        author: "Alex, parent d’Athena Makonnen, skieuse profil Alpine Mastery",
      },
    ],
    cards: [
      {
        title: "Télécharge ta descente",
        text: "Partage une courte vidéo de ta descente. Notre analyse IA du ski examine chaque image – angle de carre, timing, choix de ligne et plus encore.",
      },
      {
        title: "Analyse IA instantanée",
        text: "Reçois une analyse personnelle de ta technique en quelques secondes avec conseils d’amélioration, exercices et note.",
      },
      {
        title: "Demander un examen par un coach",
        text: "Tu veux un retour plus approfondi ? Demande un examen manuel par un coach en un clic, quand tu en as besoin.",
      },
    ],
    barmark: {
      badge: "Entraînement dryland piloté par l’IA adapté à ta technique de ski",
      heading: "🔥 Prépare-toi pour la prochaine saison – Entraînement dryland avec IA",
      body:
        "Garde ta technique tranchante même en été ! Notre programme dryland piloté par l’IA personnalise les exercices selon ta technique de ski – de la stabilité des hanches à la force réactive, pour être prêt quand la neige revient. Accès illimité pour les membres.",
      checklist: [
        "3–6 exercices ciblant tes plus grandes limites",
        "S’ajuste quand ta technique s’améliore",
        "Basé sur tout ton historique d’analyses vidéo",
      ],
      exercisesLabel: "Exemples d’exercices",
      exercises: [
        "Single-Leg Wall Sit – Force isométrique pour la charge du ski extérieur",
        "Lateral Bounds – Imite le transfert de force entre les virages",
        "Pallof Press Hold – Réduit la rotation indésirable du haut du corps",
      ],
      tag: "Personnalisé selon ton historique d’analyse",
    },
    aiCoach: {
      badge: "Outil exclusif pour les entraîneurs",
      heading: "Assistant IA entraîneur",
      body:
        "Les entraîneurs obtiennent un assistant IA qui connaît l’historique vidéo, les schémas techniques et la progression de chaque athlète. Pose des questions, obtiens des informations, planifie l’entraînement – tout en un seul endroit.",
      checklist: [
        "Pose des questions sur la technique de tous les athlètes",
        "Obtiens des informations sur la progression et les faiblesses",
        "Disponible exclusivement dans le tableau de bord entraîneur",
        "Basé sur l’historique complet des analyses",
      ],
      chatTitle: "Exemple de question",
      chatQ: "Q",
      chatA: "R",
      chatQuestion: "Quelles sont les plus grandes limites techniques d’Emma en ce moment ?",
      chatAnswer:
        "Emma montre une tendance à l’affaissement de la hanche dans le virage intérieur, une mise en pression tardive et un engagement de bord légèrement tardif pendant la phase de transition.",
    },
    coachFlow: {
      badge: "Outil gratuit pour gérer tes athlètes — aucun abonnement requis.",
      heading: "Comment ça marche pour les entraîneurs",
      steps: [
        {
          title: "Créer un compte entraîneur gratuit",
          text: "Inscris-toi comme entraîneur — totalement gratuit, pour toujours.",
        },
        {
          title: "Les athlètes te choisissent",
          text: "Tes athlètes te rajoutent comme entraîneur depuis leur tableau de bord.",
        },
        {
          title: "Réviser & téléverser",
          text: "Vois leurs analyses, téléverse des vidéos pour eux et donne des retours.",
        },
      ],
    },
    familyFlow: {
      badge: "Un compte — plusieurs athlètes",
      heading: "Comment ça marche pour les familles",
      steps: [
        "Une connexion pour le parent",
        "Ajouter plusieurs athlètes sous un même compte",
        "199 € / mois par athlète",
        "Les entraîneurs ne voient que les athlètes qui les ont choisis",
      ],
      cta: "Créer un compte et ajouter ton premier athlète",
    },
    comparison: {
      heading: "Comparer : Analyse gratuite vs abonnement complet – qu’est-ce que tu obtiens ?",
      subtext: "Vois ce que tu déverrouilles avec un abonnement",
      planLabel: "Plan",
      freeLabel: "Analyse gratuite",
      paidLabel: "Abonnement complet",
      rows: [
        ["Analyses vidéo", "1 analyse IA du ski (historique limité)", "Analyses IA illimitées + suivi complet de la progression"],
        ["Profondeur du retour", "Examen technique complet", "Examen technique complet"],
        ["Historique d’analyse", "Limité à 1 analyse", "Suivi complet de la progression"],
        ["Entraînement dryland", "Programmes personnels", "Programmes personnels de dryland et de ski basés sur ta technique"],
        ["Chat IA entraîneur", "Pour les entraîneurs", "Pour les entraîneurs"],
        ["Domaines d’attention personnels", "Priorisés par l’IA", "Priorisés par l’IA"],
        ["Courbes de progression", "Nécessite plus d’analyses", "Suivi visuel"],
        ["Outils entraîneur", "Suite complète", "Suite complète"],
        ["Support", "Communauté", "Prioritaire"],
      ],
    },
    pricing: {
      heading: "✨ Abonnement Alpine Mastery – Ton chemin vers une meilleure technique de ski",
      body:
        "Obtiens des analyses IA de ski illimitées et un retour personnel direct. Demande un examen manuel par un coach quand tu veux, et suis ta progression technique dans le temps. Retour rapide avec possibilité de coaching approfondi quand tu en as besoin.",
      badge: "🎉 1 mois gratuit — Aucune contrainte, résiliation à tout moment. Prix habituel : 199 € / mois · ~$18/mois · ~€16/mois",
      cta: "Démarrer gratuitement",
    },
    mainCta: "Analyse gratuite",
    secondaryCta: "Démarrer gratuitement",
    metaDescription:
      "Analyse IA du ski pour skieurs, entraîneurs et clubs. Télécharge une vidéo et reçois un retour personnel sur la technique, le timing, l’angle de carre et le choix de ligne.",
    schemaName: "Alpine Mastery Analyse IA du ski",
  },
  nl: {
    badge: "Jouw alpiene coach – in je broekzak",
    title: "Beheers de berg met AI – ",
    highlight: "Skitechniekanalyse die werkt",
    subtext:
      "Alpine Mastery analyseert je runs beeld voor beeld en geeft je persoonlijke feedback die met jou mee groeit.",
    howHeading: "Hoe onze AI-skitechniekanalyse werkt",
    howBody1:
      "Alpine Mastery gebruikt geavanceerde AI om je skitechniek beeld voor beeld te analyseren – kantangle, drukverdeling, timing en lijnkeuze. Perfect voor skiërs, coaches en clubs.",
    howBody2:
      "Alpine Mastery gebruikt AI om je skitechniek uit een korte video te analyseren. Upload een filmpje, ontvang binnen seconden een persoonlijke analyse – met verbeteringssuggesties, oefeningen en score. Probeer gratis.",
    demoHeading: "Bekijk een echte analyse",
    demoSubtext: "Een compleet AI-rapport van een echte skiër – geen login vereist.",
    demoLabel: "Demo",
    demoPlaceholder: "Demovideo – voeg hier de echte productdemo toe zodra deze beschikbaar is.",
    sampleMeta: "Slalom · Expert · 95/100",
    scoreLabel: "Totaalscore",
    scoreValue: 95,
    headline:
      "Een topslalomrun met uitzonderlijke technische precisie, enorme kanthoeken en een wereldklasse rustige bovenrug op een steile race-lijn.",
    problemsLabel: "Geïdentificeerde problemen",
    problems: [
      "Lichte bekkenkanteling aan het einde van de bocht in het steilste gedeelte.",
      "Af en toe binnenski drag tijdens de hoogsnelheids-overgang.",
    ],
    testimonialsHeading: "Wat onze gebruikers zeggen",
    testimonials: [
      {
        quote:
          "De AI-skitechniekanalyse was veel nauwkeuriger dan ik verwachtte – hij ving details op die ik zelf nooit had opgemerkt!",
        author: "Zweedse junior skiër",
      },
      {
        quote:
          "Dit helpt echt coaches en ouders die moeite hebben met weten welke feedback het belangrijkst is.",
        author: "Clubcoach in Noord-Zweden",
      },
      {
        quote:
          "Athena trainde onlangs met een wereldklasse techniekcoach en een Olympisch kampioen. De feedback die ze kreeg, kwam overeen met de analyse van Alpine Mastery – lage handpositie en te ver naar achteren zitten. We zijn erg onder de indruk. Het geeft ons duidelijke dingen om aan te werken de volgende keer dat we vrij skiën in Ski Dubai.",
        author: "Alex, ouder van Athena Makonnen, Alpine Mastery profielskier",
      },
    ],
    cards: [
      {
        title: "Upload je run",
        text: "Deel een korte video van je run. Onze AI-skitechniekanalyse bekijkt elk beeld – kantangle, timing, lijnkeuze en meer.",
      },
      {
        title: "Directe AI-skitechniekanalyse",
        text: "Krijg binnen seconden een persoonlijke skianalyse met verbeteringssuggesties, oefeningen en een score voor je techniek.",
      },
      {
        title: "Vraag coachreview aan",
        text: "Wil je diepere feedback? Vraag met één klik een handmatige coachreview aan wanneer je die nodig hebt.",
      },
    ],
    barmark: {
      badge: "AI-gestuurde drylandtraining aangepast aan je skitechniek",
      heading: "🔥 Bereid je voor op volgend seizoen – AI-gestuurde drylandtraining",
      body:
        "Houd je techniek scherp ook in de zomer! Ons AI-gestuurde drylandprogramma past oefeningen aan op basis van je skitechniek – van heupstabiliteit tot reactieve kracht, zodat je klaar bent wanneer de sneeuw terugkomt. Onbeperkte toegang voor leden.",
      checklist: [
        "3–6 oefeningen gericht op je grootste beperkingen",
        "Past zich aan als je techniek verbetert",
        "Gebaseerd op je volledige videoanalysegeschiedenis",
      ],
      exercisesLabel: "Voorbeeldoefeningen",
      exercises: [
        "Single-Leg Wall Sit – Isometrische kracht voor belasting van de buitenste ski",
        "Lateral Bounds – Simuleert krachtoverdracht tussen bochten",
        "Pallof Press Hold – Vermindert ongewenste rotatie van de bovenrug",
      ],
      tag: "Gepersonaliseerd op basis van je analysegeschiedenis",
    },
    aiCoach: {
      badge: "Exclusieve tool voor coaches",
      heading: "AI-coachassistent",
      body:
        "Coaches krijgen een AI-assistent die de videohistorie, techniekpatronen en voortgang van elke atleet kent. Stel vragen, krijg inzichten, plan training – alles op één plek.",
      checklist: [
        "Stel vragen over de techniek van alle atleten",
        "Krijg inzichten in voortgang en zwaktes",
        "Beschikbaar uitsluitend in het coachdashboard",
        "Aangedreven door volledige analysegeschiedenis",
      ],
      chatTitle: "Voorbeeldvraag",
      chatQ: "V",
      chatA: "A",
      chatQuestion: "Wat zijn Emmas grootste technische beperkingen op dit moment?",
      chatAnswer:
        "Emma vertoont een neiging tot heupcollapse in de binnenbocht, vertraagde drukinitiatie en iets te laat kantengagement in de overgangsfase.",
    },
    coachFlow: {
      badge: "Gratis tool om je atleten te beheren — geen abonnement vereist.",
      heading: "Hoe het werkt voor coaches",
      steps: [
        {
          title: "Gratis coachaccount aanmaken",
          text: "Registreer je als coach – volledig gratis, voor altijd.",
        },
        {
          title: "Atleten kiezen jou",
          text: "Je atleten voegen je toe als coach vanuit hun dashboard.",
        },
        {
          title: "Review & upload",
          text: "Bekijk hun analyses, upload video’s voor hen en geef feedback.",
        },
      ],
    },
    familyFlow: {
      badge: "Eén account — meerdere atleten",
      heading: "Hoe het werkt voor gezinnen",
      steps: [
        "Eén login voor de ouder",
        "Voeg meerdere atleten toe onder één account",
        "199 € / maand per atleet",
        "Coaches zien alleen atleten die hen hebben gekozen",
      ],
      cta: "Account aanmaken en je eerste atleet toevoegen",
    },
    comparison: {
      heading: "Vergelijk: Gratis analyse vs volledig lidmaatschap – wat krijg je?",
      subtext: "Bekijk wat je ontgrendelt met een lidmaatschap",
      planLabel: "Plan",
      freeLabel: "Gratis analyse",
      paidLabel: "Volledig lidmaatschap",
      rows: [
        ["Videoanalyses", "1 AI-skianalyse (beperkte geschiedenis)", "Onbeperkte AI-skianalyses + volledige voortgangsregistratie"],
        ["Feedbackdiepte", "Volledige technische review", "Volledige technische review"],
        ["Analysegeschiedenis", "Beperkt tot 1 analyse", "Volledige voortgangsregistratie"],
        ["Drylandtraining", "Persoonlijke programma’s", "Persoonlijke dryland- en skitrainingsprogramma’s op basis van je techniek"],
        ["Coach AI-chat", "Voor coaches", "Voor coaches"],
        ["Persoonlijke focusgebieden", "AI-geprioriteerd", "AI-geprioriteerd"],
        ["Voortgangscurves", "Vereist meer analyses", "Visuele registratie"],
        ["Coachtools", "Complete suite", "Complete suite"],
        ["Support", "Community", "Prioriteit"],
      ],
    },
    pricing: {
      heading: "✨ Alpine Mastery Lidmaatschap – Je weg naar betere skitechniek",
      body:
        "Krijg onbeperkte AI-skianalyses en directe persoonlijke feedback. Vraag wanneer je wilt een handmatige coachreview aan en volg je techniekprogressie in de tijd. Snelle feedback met de mogelijkheid tot diepere coaching wanneer je die nodig hebt.",
      badge: "🎉 1 maand gratis — Geen verplichting, op elk moment opzegbaar. Normale prijs: 199 € / maand · ~$18/maand · ~€16/maand",
      cta: "Gratis starten",
    },
    mainCta: "Gratis analyse",
    secondaryCta: "Gratis starten",
    metaDescription:
      "AI-skitechniekanalyse voor skiërs, coaches en clubs. Upload een video en ontvang persoonlijke feedback over techniek, timing, kantangle en lijnkeuze.",
    schemaName: "Alpine Mastery AI-skitechniekanalyse",
  },
};

function getLocaleCopy(locale: string): LocaleCopy {
  return localeContent[locale] ?? localeContent.sv;
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
      priceCurrency: locale === "en" ? "USD" : "EUR",
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
                <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-slate-950">
                  <video
                    className="h-full w-full object-contain"
                    src="/videos/landing-video.mp4"
                    poster="/videos/poster.jpg"
                    controls
                    preload="metadata"
                    aria-label={copy.demoLabel}
                  />
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
              {copy.demoLabel}
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
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{copy.testimonialsHeading}</h2>
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
              <h3 className="mb-4 text-lg font-bold text-white">{copy.barmark.exercisesLabel}</h3>
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
              <div className="mb-2 text-sm text-text-secondary">{copy.aiCoach.chatQ}</div>
              <p className="text-white">{copy.aiCoach.chatQuestion}</p>
            </div>
            <div className="mt-4 rounded-2xl border border-accent/30 bg-accent/10 p-4">
              <div className="mb-2 text-sm text-accent">{copy.aiCoach.chatA}</div>
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
            <div className="px-4 py-4">{copy.comparison.planLabel}</div>
            <div className="px-4 py-4">{copy.comparison.freeLabel}</div>
            <div className="px-4 py-4">{copy.comparison.paidLabel}</div>
          </div>

          {copy.comparison.rows.map(([label, freeValue, paidValue]) => (
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