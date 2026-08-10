import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import { SUPPORTED_LOCALES } from "@/lib/translations";

const productUrls = {
  startOrg:
    "https://alpine.masteryhub.se/club/checkout?plan=small&billing=monthly&utm_source=alpine_mastery&utm_medium=cta&utm_campaign=club_conversion&utm_content=start_organization",
  bookDemo:
    "https://alpine.masteryhub.se/contact?demo=true&utm_source=alpine_mastery&utm_medium=cta&utm_campaign=club_conversion&utm_content=book_demo",
  contact: "https://alpine.masteryhub.se/contact",
  bookDemoFooter:
    "https://alpine.masteryhub.se/contact?demo=true&utm_source=alpine_mastery&utm_medium=cta&utm_campaign=club_conversion&utm_content=book_demo_footer",
  demoVideo: "https://alpine.masteryhub.se/demo-video.mp4",
};

interface LocaleCopy {
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaStartOrg: string;
  ctaBookDemo: string;
  videoCaption: string;
  benefitsBadge: string;
  benefitsTitle: string;
  benefits: string[];
  ctaViewPricing: string;
  pricingBadge: string;
  pricingTitle: string;
  pricingDesc: string;
  billingMonthly: string;
  billingYearly: string;
  saveBadge: string;
  perAthlete: string;
  contactVolume: string;
  plans: {
    name: string;
    price: string;
    perAthlete: string;
    features: string[];
    badge?: string;
  }[];
  offerDescs: {
    small: string;
    pro: string;
    unlimited: string;
  };
  orgsBadge: string;
  orgsTitle: string;
  orgsDesc: string;
  orgsCards: { title: string; text: string }[];
  orgsTrailing: string;
  clubAdminBadge: string;
  clubAdminTitle: string;
  clubAdminChecklist: string[];
  orgControl: string;
  orgControlDesc: string;
  orgControlItems: string[];
  coachWorkflowBadge: string;
  coachWorkflowTitle: string;
  coachWorkflowDesc: string;
  coachCards: { title: string; text: string }[];
  athleteExpBadge: string;
  athleteExpTitle: string;
  athleteExpChecklist: string[];
  finalBadge: string;
  finalTitle: string;
  ctaContact: string;
  footerCtaTitle: string;
  footerCtaDesc: string;
  metaDescription: string;
  schemaName: string;
}

const localeContent: Record<string, LocaleCopy> = {
  sv: {
    heroBadge: "Alpine Mastery för klubbar",
    heroTitle: "Alpine Mastery för klubbar och organisationer",
    heroSubtitle:
      "En komplett digital coachningsplattform för moderna skidklubbar. Hantera åkare, tilldela coacher, skala AI-driven analys och håll laget samordnat från träning till tävling.",
    ctaStartOrg: "Starta din organisation",
    ctaBookDemo: "Boka demo",
    videoCaption:
      "Se hur Coachdashboarden hjälper klubbar och tränare att hantera åkare, granska analyser och följa framsteg.",
    benefitsBadge: "Fördelar för klubbar",
    benefitsTitle: "Mindre administration, mer riktig coaching.",
    benefits: [
      "Åkare får AI-feedback inom 2 minuter efter uppladdning.",
      "Coacher granskar teknikdata för alla åkare i en enda vy.",
      "Ingen manuell videogranskning — AI sköter analysen automatiskt.",
      "Bättre kommunikation mellan coacher och åkare.",
      "Mindre administration, mer på-snö coaching.",
      "En enda plattform för träning, granskning och framstegsspårning.",
    ],
    ctaViewPricing: "Se prissättning och planer",
    pricingBadge: "Prissättning",
    pricingTitle: "Planer byggda för klubbar i alla storlekar.",
    pricingDesc:
      "Välj en prenumeration som matchar ditt lag, lägg sedan till coacher och åkare i takt med att klubben växer.",
    billingMonthly: "Månadsvis",
    billingYearly: "Årsvis",
    saveBadge: "Spara 50%",
    perAthlete: "SEK / åkare / månad",
    contactVolume: "Kontakta oss för volympris",
    plans: [
      {
        name: "Small Club",
        price: "1 190 kr/mån",
        perAthlete: "119 SEK / åkare / månad",
        features: [
          "Upp till 10 åkare",
          "Obegränsat antal tränare",
          "Obegränsade analyser",
        ],
      },
      {
        name: "Club Pro",
        price: "3 990 kr/mån",
        perAthlete: "80 SEK / åkare / månad",
        badge: "Mest populär",
        features: [
          "Upp till 50 åkare",
          "Obegränsat antal tränare",
          "Obegränsade analyser",
          "Prioriterad support",
        ],
      },
      {
        name: "Club Unlimited",
        price: "9 990 kr/mån",
        perAthlete: "Kontakta oss för volympris",
        features: [
          "Obegränsat antal åkare",
          "Obegränsat antal tränare",
          "Obegränsade analyser",
          "Premium support",
        ],
      },
    ],
    offerDescs: {
      small: "Upp till 10 åkare, obegränsat antal tränare och obegränsade analyser.",
      pro: "Upp till 50 åkare, obegränsat antal tränare, obegränsade analyser och prioriterad support.",
      unlimited: "Obegränsat antal åkare, obegränsat antal tränare, obegränsade analyser och premium support.",
    },
    orgsBadge: "Vad organisationer är",
    orgsTitle: "En plattform för klubbar, akademier, skidskolor och nationella lag.",
    orgsDesc:
      "Organisationer kan vara offentliga eller privata, bjuda in åkare och coacher, acceptera klubbmedlemsförfrågningar och hålla varje träningsgrupp ansluten i ett system.",
    orgsCards: [
      {
        title: "Klubbar & skidakademier",
        text: "Organiserade träningsmiljöer med coachledd åkarutveckling.",
      },
      {
        title: "Skidgymnasier",
        text: "Strukturerade program som behöver tydliga coach- och åkarflöden.",
      },
      {
        title: "Nationella lag",
        text: "Prestationsfokuserade lag som behöver snabb feedback och uppföljning.",
      },
      {
        title: "Privata träningsgrupper",
        text: "Grupper kan förbli privata samtidigt som de använder samma klubbverktyg.",
      },
    ],
    orgsTrailing:
      "Åkare och coacher kan söka efter din organisation, begära medlemskap och gå med när de blivit godkända.",
    clubAdminBadge: "Klubbadmin",
    clubAdminTitle: "Hantera din klubb med klarhet och kontroll.",
    clubAdminChecklist: [
      "Skapa och hantera din organisation på ett ställe.",
      "Fördela åkarkonton efter prenumerationsnivå.",
      "Bjuda in och onboarda coacher snabbt.",
      "Tilldela coacher till åkare och träningsgrupper.",
      "Ställ in roller, behörigheter och klubbåtkomstnivåer.",
      "Övervaka klubbaktivitet, framsteg och användning på ett ögonkast.",
    ],
    orgControl: "Organisatorisk kontroll",
    orgControlDesc:
      "En modern klubbadminupplevelse för att hantera åkare, coacher och prenumerationsplatser samtidigt som administrationen hålls lätt.",
    orgControlItems: [
      "Godkänn åkar- och coachförfrågningar",
      "Spåra coachtilldelningar och roller",
      "Granska klubbaktivitet och analysvolym",
    ],
    coachWorkflowBadge: "Coach arbetsflöde",
    coachWorkflowTitle: "Ge coacher ett arbetsflöde som håller åkare i rörelse framåt.",
    coachWorkflowDesc:
      "Coacher får en dashboard för tilldelade åkare, verktyg för gruppträning och inbyggt AI-stöd som gör feedback snabbare och mer konsekvent.",
    coachCards: [
      {
        title: "Tilldelad åkardashboard",
        text: "Se varje åkare i en vy med deras senaste videor, rapporter och framsteg.",
      },
      {
        title: "Skapa och dela grupper",
        text: "Bygg träningsgrupper och låt flera coacher arbeta med samma åkare.",
      },
      {
        title: "AI-driven analys",
        text: "Få snabb, datastödd teknisk feedback för varje videouppladdning.",
      },
      {
        title: "Träningsplaner och torrträning",
        text: "Generera rekommenderade fokusområden, sessioner och torrträning från samma plattform.",
      },
    ],
    athleteExpBadge: "Åkarupplevelse",
    athleteExpTitle: "En sömlös upplevelse för skidåkare på språng.",
    athleteExpChecklist: [
      "Ladda upp träningsvideor direkt från mobil.",
      "Få omedelbar AI-analys med klar teknikfeedback.",
      "Spåra förbättring över tid med riktig träningshistorik.",
      "Få coachkommentarer och korrigeringar i samma app.",
    ],
    finalBadge: "Redo att leda din klubb in i framtiden?",
    finalTitle: "Ta din klubb in i framtiden för skidcoaching.",
    ctaContact: "Kontakta oss",
    footerCtaTitle: "Redo att ta nästa steg?",
    footerCtaDesc:
      "Vi hjälper dig att välja rätt paket för din klubb. Testa Alpine Mastery gratis och upptäck vad AI-driven coaching kan göra för ert lag.",
    metaDescription:
      "Alpine Mastery för klubbar och organisationer. Hantera åkare, tilldela coacher, skala AI-driven analys och håll laget samordnat från träning till tävling.",
    schemaName: "Alpine Mastery för klubbar och organisationer",
  },
  en: {
    heroBadge: "Alpine Mastery for Clubs",
    heroTitle: "Alpine Mastery for Clubs & Organizations",
    heroSubtitle:
      "A complete digital coaching platform for modern ski clubs. Manage athletes, assign coaches, scale AI-powered analysis, and keep your team aligned from training to competition.",
    ctaStartOrg: "Start your organization",
    ctaBookDemo: "Book a demo",
    videoCaption:
      "See how the Coach Dashboard helps clubs and coaches manage athletes, review analyses, and track progress.",
    benefitsBadge: "Benefits for Clubs",
    benefitsTitle: "Less administration, more real coaching.",
    benefits: [
      "Athletes get AI feedback within 2 minutes of uploading.",
      "Coaches review technique data for all athletes in one view.",
      "No manual video review — AI handles analysis automatically.",
      "Better communication across coaches and athletes.",
      "Less administration, more on-snow coaching.",
      "A single platform for training, review and progress tracking.",
    ],
    ctaViewPricing: "View pricing & plans",
    pricingBadge: "Pricing",
    pricingTitle: "Plans built for clubs at every size.",
    pricingDesc:
      "Choose a subscription that matches your team, then add coaches and athletes as your club grows.",
    billingMonthly: "Monthly",
    billingYearly: "Yearly",
    saveBadge: "Save 50%",
    perAthlete: "SEK / skier / month",
    contactVolume: "Contact for volume pricing",
    plans: [
      {
        name: "Small Club",
        price: "1 190 SEK/mo",
        perAthlete: "119 SEK / skier / month",
        features: ["Up to 10 skiers", "Unlimited coaches", "Unlimited analyses"],
      },
      {
        name: "Club Pro",
        price: "3 990 SEK/mo",
        perAthlete: "80 SEK / skier / month",
        badge: "Most popular",
        features: [
          "Up to 50 skiers",
          "Unlimited coaches",
          "Unlimited analyses",
          "Priority support",
        ],
      },
      {
        name: "Club Unlimited",
        price: "9 990 SEK/mo",
        perAthlete: "Contact for volume pricing",
        features: [
          "Unlimited skiers",
          "Unlimited coaches",
          "Unlimited analyses",
          "Premium support",
        ],
      },
    ],
    offerDescs: {
      small: "Up to 10 skiers, unlimited coaches, and unlimited analyses.",
      pro: "Up to 50 skiers, unlimited coaches, unlimited analyses, and priority support.",
      unlimited: "Unlimited skiers, unlimited coaches, unlimited analyses, and premium support.",
    },
    orgsBadge: "What organizations are",
    orgsTitle: "A platform for clubs, academies, ski schools and national teams.",
    orgsDesc:
      "Organizations can be public or private, invite athletes and coaches, accept club membership requests, and keep every training group connected in one system.",
    orgsCards: [
      {
        title: "Clubs & ski academies",
        text: "Organized training environments with coach-led athlete development.",
      },
      {
        title: "Ski gymnasiums",
        text: "Structured programs that need clear coach and athlete flows.",
      },
      {
        title: "National teams",
        text: "Performance-focused teams that need fast feedback and follow-up.",
      },
      {
        title: "Private training groups",
        text: "Groups can stay private while using the same club tools.",
      },
    ],
    orgsTrailing:
      "Athletes and coaches can search for your organization, request membership, and join once approved.",
    clubAdminBadge: "Club Admin",
    clubAdminTitle: "Manage your club with clarity and control.",
    clubAdminChecklist: [
      "Create and manage your organization in one place.",
      "Allocate athlete accounts by subscription tier.",
      "Invite and onboard coaches quickly.",
      "Assign coaches to athletes and training groups.",
      "Set roles, permissions and club access levels.",
      "Monitor club activity, progress and usage at a glance.",
    ],
    orgControl: "Organizational control",
    orgControlDesc:
      "A modern club admin experience for managing athletes, coaches and subscription seats while keeping administration light.",
    orgControlItems: [
      "Approve athlete and coach requests",
      "Track coach assignments and roles",
      "Review club activity and analysis volume",
    ],
    coachWorkflowBadge: "Coach Workflow",
    coachWorkflowTitle: "Give coaches a workflow that keeps athletes moving forward.",
    coachWorkflowDesc:
      "Coaches get a dashboard for assigned athletes, tools for group training, and built-in AI support that makes feedback faster and more consistent.",
    coachCards: [
      {
        title: "Assigned athlete dashboard",
        text: "See every athlete in one view with their latest videos, reports and progress.",
      },
      {
        title: "Create and share groups",
        text: "Build training groups and let multiple coaches work with the same athletes.",
      },
      {
        title: "AI-powered analysis",
        text: "Get fast, data-backed technical feedback for every video upload.",
      },
      {
        title: "Training plans & dryland",
        text: "Generate recommended focus areas, sessions and dryland programs from the same platform.",
      },
    ],
    athleteExpBadge: "Athlete Experience",
    athleteExpTitle: "A seamless experience for skiers on the go.",
    athleteExpChecklist: [
      "Upload training videos directly from mobile.",
      "Receive instant AI analysis with clear technique feedback.",
      "Track improvement over time with real training history.",
      "Get coach comments and corrections in the same app.",
    ],
    finalBadge: "Ready to lead your club into the future?",
    finalTitle: "Take your club into the future of ski coaching.",
    ctaContact: "Contact us",
    footerCtaTitle: "Ready to take the next step?",
    footerCtaDesc:
      "We'll help you choose the right plan for your club. Try Alpine Mastery for free and discover what AI-driven coaching can do for your team.",
    metaDescription:
      "Alpine Mastery for clubs and organizations. Manage athletes, assign coaches, scale AI-powered analysis, and keep your team aligned from training to competition.",
    schemaName: "Alpine Mastery for Clubs & Organizations",
  },
  no: {
    heroBadge: "Alpine Mastery for klubber",
    heroTitle: "Alpine Mastery for klubber og organisasjoner",
    heroSubtitle:
      "En komplett digital coachingsplattform for moderne skiklubber. Administrer løpere, tildel trenere, skaler AI-drevet analyse og hold laget samkjørt fra trening til konkurranse.",
    ctaStartOrg: "Start organisasjonen din",
    ctaBookDemo: "Bestill en demo",
    videoCaption:
      "Se hvordan Coach-dashboardet hjelper klubber og trenere med å administrere løpere, gjennomgå analyser og følge fremgang.",
    benefitsBadge: "Fordeler for klubber",
    benefitsTitle: "Mindre administrasjon, mer ekte coaching.",
    benefits: [
      "Løpere får AI-tilbakemelding innen 2 minutter etter opplasting.",
      "Trenere gjennomgår teknikkdata for alle løpere i én enkelt visning.",
      "Ingen manuell videogjennomgang — AI håndterer analysen automatisk.",
      "Bedre kommunikasjon mellom trenere og løpere.",
      "Mindre administrasjon, mer coaching på snø.",
      "Én enkelt plattform for trening, gjennomgang og fremgangssporing.",
    ],
    ctaViewPricing: "Se priser og planer",
    pricingBadge: "Priser",
    pricingTitle: "Planer bygget for klubber i alle størrelser.",
    pricingDesc:
      "Velg et abonnement som passer laget ditt, og legg deretter til trenere og løpere etter hvert som klubben vokser.",
    billingMonthly: "Månedlig",
    billingYearly: "Årlig",
    saveBadge: "Spar 50%",
    perAthlete: "SEK / løper / måned",
    contactVolume: "Kontakt oss for volumpris",
    plans: [
      {
        name: "Small Club",
        price: "1 190 kr/måned",
        perAthlete: "119 SEK / løper / måned",
        features: [
          "Opptil 10 løpere",
          "Ubegrenset antall trenere",
          "Ubegrensede analyser",
        ],
      },
      {
        name: "Club Pro",
        price: "3 990 kr/måned",
        perAthlete: "80 SEK / løper / måned",
        badge: "Mest populær",
        features: [
          "Opptil 50 løpere",
          "Ubegrenset antall trenere",
          "Ubegrensede analyser",
          "Prioritert støtte",
        ],
      },
      {
        name: "Club Unlimited",
        price: "9 990 kr/måned",
        perAthlete: "Kontakt oss for volumpris",
        features: [
          "Ubegrenset antall løpere",
          "Ubegrenset antall trenere",
          "Ubegrensede analyser",
          "Premium-støtte",
        ],
      },
    ],
    offerDescs: {
      small: "Opptil 10 løpere, ubegrenset antall trenere og ubegrensede analyser.",
      pro: "Opptil 50 løpere, ubegrenset antall trenere, ubegrensede analyser og prioritert støtte.",
      unlimited: "Ubegrenset antall løpere, ubegrenset antall trenere, ubegrensede analyser og premium-støtte.",
    },
    orgsBadge: "Hva organisasjoner er",
    orgsTitle: "En plattform for klubber, akademier, skiskoler og landslag.",
    orgsDesc:
      "Organisasjoner kan være offentlige eller private, invitere løpere og trenere, godta klubbmedlemsforespørsler og holde hver treningsgruppe tilkoblet i ett system.",
    orgsCards: [
      {
        title: "Klubber & skiakademier",
        text: "Organiserte treningsmiljøer med trenerledet løperutvikling.",
      },
      {
        title: "Skigymnas",
        text: "Strukturerte programmer som trenger tydelige trener- og løperflyter.",
      },
      {
        title: "Landslag",
        text: "Prestasjonsfokuserte lag som trenger rask tilbakemelding og oppfølging.",
      },
      {
        title: "Private treningsgrupper",
        text: "Grupper kan forbli private samtidig som de bruker de samme klubbverktøyene.",
      },
    ],
    orgsTrailing:
      "Løpere og trenere kan søke etter organisasjonen din, be om medlemskap og bli med når forespørselen er godkjent.",
    clubAdminBadge: "Klubbadmin",
    clubAdminTitle: "Administrer klubben din med tydelighet og kontroll.",
    clubAdminChecklist: [
      "Opprett og administrer organisasjonen din på ett sted.",
      "Fordel løperkontoer etter abonnementsnivå.",
      "Inviter og onboard trenere raskt.",
      "Tildel trenere til løpere og treningsgrupper.",
      "Sett roller, tillatelser og klubbens tilgangsnivåer.",
      "Overvåk klubbaktivitet, fremgang og bruk på et øyeblikk.",
    ],
    orgControl: "Organisatorisk kontroll",
    orgControlDesc:
      "En moderne klubbadmin-opplevelse for å administrere løpere, trenere og abonnementsplasser samtidig som administrasjonen holdes lett.",
    orgControlItems: [
      "Godkjenn løper- og trenerforespørsler",
      "Spor trenertildelinger og roller",
      "Gjennomgå klubbaktivitet og analysevolum",
    ],
    coachWorkflowBadge: "Coach-arbeidsflyt",
    coachWorkflowTitle: "Gi trenere en arbeidsflyt som holder løpere i bevegelse fremover.",
    coachWorkflowDesc:
      "Trenere får et dashboard for tildelte løpere, verktøy for gruppetrening og innebygd AI-støtte som gjør tilbakemelding raskere og mer konsekvent.",
    coachCards: [
      {
        title: "Dashboard for tildelte løpere",
        text: "Se hver løper i én visning med deres nyeste videoer, rapporter og fremgang.",
      },
      {
        title: "Opprett og del grupper",
        text: "Bygg treningsgrupper og la flere trenere jobbe med de samme løperne.",
      },
      {
        title: "AI-drevet analyse",
        text: "Få rask, datastøttet teknisk tilbakemelding for hver videoopplasting.",
      },
      {
        title: "Treningsplaner og barmarkstrening",
        text: "Generer anbefalte fokusområder, økter og barmarksprogrammer fra samme plattform.",
      },
    ],
    athleteExpBadge: "Løperopplevelsen",
    athleteExpTitle: "En sømløs opplevelse for skiløpere på farten.",
    athleteExpChecklist: [
      "Last opp treningsvideoer direkte fra mobilen.",
      "Få umiddelbar AI-analyse med tydelig teknisk tilbakemelding.",
      "Spor forbedring over tid med ekte treningshistorie.",
      "Få trenerkommentarer og korrigeringer i samme app.",
    ],
    finalBadge: "Klar til å lede klubben din inn i fremtiden?",
    finalTitle: "Ta klubben din inn i fremtiden for skicoaching.",
    ctaContact: "Kontakt oss",
    footerCtaTitle: "Klar for neste steg?",
    footerCtaDesc:
      "Vi hjelper deg med å velge riktig pakke for klubben din. Prøv Alpine Mastery gratis og oppdag hva AI-drevet coaching kan gjøre for laget ditt.",
    metaDescription:
      "Alpine Mastery for klubber og organisasjoner. Administrer løpere, tildel trenere, skaler AI-drevet analyse og hold laget samkjørt fra trening til konkurranse.",
    schemaName: "Alpine Mastery for klubber og organisasjoner",
  },
  da: {
    heroBadge: "Alpine Mastery for klubber",
    heroTitle: "Alpine Mastery for klubber og organisationer",
    heroSubtitle:
      "En komplet digital coachingplatform for moderne skiklubber. Administrer atleter, tildel trænere, skaler AI-drevet analyse og hold holdet på linje fra træning til konkurrence.",
    ctaStartOrg: "Start din organisation",
    ctaBookDemo: "Book en demo",
    videoCaption:
      "Se, hvordan Coach-dashboardet hjælper klubber og trænere med at administrere atleter, gennemgå analyser og følge fremgang.",
    benefitsBadge: "Fordele for klubber",
    benefitsTitle: "Mindre administration, mere ægte coaching.",
    benefits: [
      "Atleter får AI-feedback inden for 2 minutter efter upload.",
      "Trænere gennemgår teknikdata for alle atleter i én enkelt visning.",
      "Ingen manuel videogennemgang — AI klarer analysen automatisk.",
      "Bedre kommunikation mellem trænere og atleter.",
      "Mindre administration, mere coaching på sne.",
      "Én enkelt platform til træning, gennemgang og fremtidssporing.",
    ],
    ctaViewPricing: "Se priser og planer",
    pricingBadge: "Priser",
    pricingTitle: "Planer bygget til klubber i alle størrelser.",
    pricingDesc:
      "Vælg et abonnement, der passer til dit hold, og tilføj derefter trænere og atleter, efterhånden som klubben vokser.",
    billingMonthly: "Månedligt",
    billingYearly: "Årligt",
    saveBadge: "Spar 50%",
    perAthlete: "SEK / atlet / måned",
    contactVolume: "Kontakt os for volumenpris",
    plans: [
      {
        name: "Small Club",
        price: "1 190 kr/måned",
        perAthlete: "119 SEK / atlet / måned",
        features: [
          "Op til 10 atleter",
          "Ubegrænset antal trænere",
          "Ubegrænsede analyser",
        ],
      },
      {
        name: "Club Pro",
        price: "3 990 kr/måned",
        perAthlete: "80 SEK / atlet / måned",
        badge: "Mest populær",
        features: [
          "Op til 50 atleter",
          "Ubegrænset antal trænere",
          "Ubegrænsede analyser",
          "Prioriteret support",
        ],
      },
      {
        name: "Club Unlimited",
        price: "9 990 kr/måned",
        perAthlete: "Kontakt os for volumenpris",
        features: [
          "Ubegrænset antal atleter",
          "Ubegrænset antal trænere",
          "Ubegrænsede analyser",
          "Premium-support",
        ],
      },
    ],
    offerDescs: {
      small: "Op til 10 atleter, ubegrænset antal trænere og ubegrænsede analyser.",
      pro: "Op til 50 atleter, ubegrænset antal trænere, ubegrænsede analyser og prioriteret support.",
      unlimited: "Ubegrænset antal atleter, ubegrænset antal trænere, ubegrænsede analyser og premium-support.",
    },
    orgsBadge: "Hvad organisationer er",
    orgsTitle: "En platform for klubber, akademier, skiskoler og landshold.",
    orgsDesc:
      "Organisationer kan være offentlige eller private, invitere atleter og trænere, acceptere klubmedlemsanmodninger og holde hver træningsgruppe forbundet i ét system.",
    orgsCards: [
      {
        title: "Klubber & skiakademier",
        text: "Organiserede træningsmiljøer med trænerledet atletudvikling.",
      },
      {
        title: "Skigymnasier",
        text: "Strukturerede programmer, der har brug for tydelige træner- og atletflows.",
      },
      {
        title: "Landshold",
        text: "Prestationsfokuserede hold, der har brug for hurtig feedback og opfølgning.",
      },
      {
        title: "Private træningsgrupper",
        text: "Grupper kan forblive private, mens de bruger de samme klubværktøjer.",
      },
    ],
    orgsTrailing:
      "Atleter og trænere kan søge efter din organisation, anmode om medlemskab og blive med, når anmodningen er godkendt.",
    clubAdminBadge: "Klubadmin",
    clubAdminTitle: "Administrer din klub med tydelighed og kontrol.",
    clubAdminChecklist: [
      "Opret og administrer din organisation på ét sted.",
      "Fordel atletkonti efter abonnementsniveau.",
      "Inviter og onboard trænere hurtigt.",
      "Tildel trænere til atleter og træningsgrupper.",
      "Indstil roller, tilladelser og klubbens adgangsniveauer.",
      "Overvåg klubbens aktivitet, fremgang og brug på ét øjeblik.",
    ],
    orgControl: "Organisatorisk kontrol",
    orgControlDesc:
      "En moderne klubbadmin-oplevelse til at administrere atleter, trænere og abonnementspladser, mens administrationen holdes let.",
    orgControlItems: [
      "Godkend atlet- og træneranmodninger",
      "Spor trænertildelinger og roller",
      "Gennemgå klubbens aktivitet og analysevolumen",
    ],
    coachWorkflowBadge: "Træner-workflow",
    coachWorkflowTitle: "Giv trænere et workflow, der holder atleter i bevægelse fremad.",
    coachWorkflowDesc:
      "Trænere får et dashboard for tildelte atleter, værktøjer til gruppetræning og indbygget AI-støtte, der gør feedback hurtigere og mere konsistent.",
    coachCards: [
      {
        title: "Dashboard for tildelte atleter",
        text: "Se hver atlet i én visning med deres nyeste videoer, rapporter og fremgang.",
      },
      {
        title: "Opret og del grupper",
        text: "Byg træningsgrupper, og lad flere trænere arbejde med de samme atleter.",
      },
      {
        title: "AI-drevet analyse",
        text: "Få hurtig, datastøttet teknisk feedback for hver video-upload.",
      },
      {
        title: "Træningsplaner og tørtræning",
        text: "Generer anbefalede fokusområder, sessioner og tørtræningsprogrammer fra samme platform.",
      },
    ],
    athleteExpBadge: "Atletoplevelsen",
    athleteExpTitle: "En problemfri oplevelse for skiløbere på farten.",
    athleteExpChecklist: [
      "Upload træningsvideoer direkte fra mobilen.",
      "Få øjeblikkelig AI-analyse med tydelig teknisk feedback.",
      "Følg forbedringer over tid med ægte træningshistorik.",
      "Få trænerkommentarer og korrektioner i samme app.",
    ],
    finalBadge: "Klar til at føre din klub ind i fremtiden?",
    finalTitle: "Tag din klub med ind i fremtiden for skicoaching.",
    ctaContact: "Kontakt os",
    footerCtaTitle: "Klar til næste skridt?",
    footerCtaDesc:
      "Vi hjælper dig med at vælge den rigtige pakke til din klub. Prøv Alpine Mastery gratis, og opdag, hvad AI-drevet coaching kan gøre for dit hold.",
    metaDescription:
      "Alpine Mastery for klubber og organisationer. Administrer atleter, tildel trænere, skaler AI-drevet analyse og hold holdet på linje fra træning til konkurrence.",
    schemaName: "Alpine Mastery for klubber og organisationer",
  },
  fi: {
    heroBadge: "Alpine Mastery seuroille",
    heroTitle: "Alpine Mastery seuroille ja organisaatioille",
    heroSubtitle:
      "Täydellinen digitaalinen valmennusalusta nykyaikaisille lasketteluseuroille. Hallitse urheilijoita, määritä valmentajia, skaalaa tekoälypohjaista analyysiä ja pidä joukkueesi linjassa harjoituksista kilpailuihin.",
    ctaStartOrg: "Perusta organisaatiosi",
    ctaBookDemo: "Varaa demo",
    videoCaption:
      "Katso, miten Coach-hallintanäkymä auttaa seuroja ja valmentajia hallitsemaan urheilijoita, käymään läpi analyysejä ja seuraamaan kehitystä.",
    benefitsBadge: "Edut seuroille",
    benefitsTitle: "Vähemmän hallintoa, enemmän oikeaa valmennusta.",
    benefits: [
      "Urheilijat saavat tekoälypalautteen 2 minuutin kuluessa latauksesta.",
      "Valmentajat käyvät läpi tekniikkatiedot kaikista urheilijoista yhdestä näkymästä.",
      "Ei manuaalista videoselailua — tekoäly hoitaa analyysin automaattisesti.",
      "Parempi viestintä valmentajien ja urheilijoiden välillä.",
      "Vähemmän hallintoa, enemmän valmennusta rinteessä.",
      "Yksi alusta harjoittelulle, arvioinnille ja kehityksen seurannalle.",
    ],
    ctaViewPricing: "Katso hinnat ja suunnitelmat",
    pricingBadge: "Hinnoittelu",
    pricingTitle: "Suunnitelmat rakennettu seuroille kaiken kokoisina.",
    pricingDesc:
      "Valitse joukkueellesi sopiva tilaus ja lisää sitten valmentajia ja urheilijoita seuran kasvaessa.",
    billingMonthly: "Kuukausittain",
    billingYearly: "Vuosittain",
    saveBadge: "Säästä 50%",
    perAthlete: "SEK / urheilija / kuukausi",
    contactVolume: "Ota yhteyttä volyymihinnoittelua varten",
    plans: [
      {
        name: "Small Club",
        price: "1 190 kr/kk",
        perAthlete: "119 SEK / urheilija / kuukausi",
        features: [
          "Jopa 10 urheilijaa",
          "Rajattomasti valmentajia",
          "Rajattomasti analyysejä",
        ],
      },
      {
        name: "Club Pro",
        price: "3 990 kr/kk",
        perAthlete: "80 SEK / urheilija / kuukausi",
        badge: "Suosituin",
        features: [
          "Jopa 50 urheilijaa",
          "Rajattomasti valmentajia",
          "Rajattomasti analyysejä",
          "Priorisoitu tuki",
        ],
      },
      {
        name: "Club Unlimited",
        price: "9 990 kr/kk",
        perAthlete: "Ota yhteyttä volyymihinnoittelua varten",
        features: [
          "Rajattomasti urheilijoita",
          "Rajattomasti valmentajia",
          "Rajattomasti analyysejä",
          "Premium-tuki",
        ],
      },
    ],
    offerDescs: {
      small: "Jopa 10 urheilijaa, rajattomasti valmentajia ja rajattomasti analyysejä.",
      pro: "Jopa 50 urheilijaa, rajattomasti valmentajia, rajattomasti analyysejä ja priorisoitu tuki.",
      unlimited: "Rajattomasti urheilijoita, rajattomasti valmentajia, rajattomasti analyysejä ja premium-tuki.",
    },
    orgsBadge: "Mitä organisaatiot ovat",
    orgsTitle: "Alusta seuroille, akatemioille, hiihtokouluille ja maajoukkueille.",
    orgsDesc:
      "Organisaatiot voivat olla julkisia tai yksityisiä, kutsua urheilijoita ja valmentajia, hyväksyä seuran jäsenpyyntöjä ja pitää jokainen harjoitusryhmä yhteydessä yhdessä järjestelmässä.",
    orgsCards: [
      {
        title: "Seurat & hiihtoakatemiat",
        text: "Organisoituja harjoitusympäristöjä valmentajavetoisella urheilijakehityksellä.",
      },
      {
        title: "Hiihtolukiot",
        text: "Rakenteellisia ohjelmia, jotka tarvitsevat selkeät valmentaja- ja urheilijavirrat.",
      },
      {
        title: "Maajoukkueet",
        text: "Suorituskeskeisiä joukkueita, jotka tarvitsevat nopeaa palautetta ja seurantaa.",
      },
      {
        title: "Yksityiset harjoitusryhmät",
        text: "Ryhmät voivat pysyä yksityisinä ja käyttää samoja seuratyökaluja.",
      },
    ],
    orgsTrailing:
      "Urheilijat ja valmentajat voivat etsiä organisaatiosi, pyytää jäsenyyttä ja liittyä, kun pyyntö on hyväksytty.",
    clubAdminBadge: "Seuran hallinta",
    clubAdminTitle: "Hallinnoi seuraasi selkeydellä ja hallinnalla.",
    clubAdminChecklist: [
      "Luo ja hallinnoi organisaatiotasi yhdessä paikassa.",
      "Jaa urheilijatilit tilaustason mukaan.",
      "Kutsu ja perehdytä valmentajia nopeasti.",
      "Määritä valmentajat urheilijoille ja harjoitusryhmille.",
      "Aseta roolit, käyttöoikeudet ja seuran pääsytasot.",
      "Seuraa seuran toimintaa, kehitystä ja käyttöä yhdellä silmäyksellä.",
    ],
    orgControl: "Organisatorinen hallinta",
    orgControlDesc:
      "Nykyaikainen seuran hallintakokemus urheilijoiden, valmentajien ja tilauspaikkojen hallintaan samalla kun hallinto pysyy kevyenä.",
    orgControlItems: [
      "Hyväksy urheilija- ja valmentajapyynnöt",
      "Seuraa valmentajamäärityksiä ja rooleja",
      "Käy läpi seuran toiminta ja analyysimäärät",
    ],
    coachWorkflowBadge: "Valmentajan työnkulku",
    coachWorkflowTitle: "Anna valmentajille työnkulku, joka pitää urheilijat liikkeessä eteenpäin.",
    coachWorkflowDesc:
      "Valmentajat saavat hallintanäkymän määrätyistä urheilijoista, työkalut ryhmäharjoitteluun ja sisäänrakennetun tekoälytuen, joka tekee palautteesta nopeampaa ja johdonmukaisempaa.",
    coachCards: [
      {
        title: "Määrättyjen urheilijoiden hallintanäkymä",
        text: "Näe jokainen urheilija yhdestä näkymästä heidän uusimpine videoineen, raportteineen ja kehityksineen.",
      },
      {
        title: "Luo ja jaa ryhmiä",
        text: "Rakenna harjoitusryhmiä ja anna useiden valmentajien työskennellä samojen urheilijoiden kanssa.",
      },
      {
        title: "Tekoälypohjainen analyysi",
        text: "Saa nopeaa, dataan perustuvaa teknistä palautetta jokaisesta videolatauksesta.",
      },
      {
        title: "Harjoitussuunnitelmat ja kuivaharjoittelu",
        text: "Luo suositeltuja fokusalueita, harjoituksia ja kuivaharjoitteluohjelmia samalta alustalta.",
      },
    ],
    athleteExpBadge: "Urheilijakokemus",
    athleteExpTitle: "Saumaton kokemus laskijoille liikkeellä.",
    athleteExpChecklist: [
      "Lataa harjoitusvideoita suoraan mobiililaitteesta.",
      "Saa välitön tekoälyanalyysi selkeällä tekniikkapalautteella.",
      "Seuraa kehitystä ajan myötä aidolla harjoitushistorialla.",
      "Saa valmentajan kommentit ja korjaukset samassa sovelluksessa.",
    ],
    finalBadge: "Valmis viemään seurasi tulevaisuuteen?",
    finalTitle: "Vie seurasi tulevaisuuden hiihtovalmennukseen.",
    ctaContact: "Ota yhteyttä",
    footerCtaTitle: "Valmis seuraavaan vaiheeseen?",
    footerCtaDesc:
      "Autamme sinua valitsemaan oikean paketin seurallesi. Kokeile Alpine Masteryä ilmaiseksi ja tutustu siihen, mitä tekoälypohjainen valmennus voi tehdä joukkueellesi.",
    metaDescription:
      "Alpine Mastery seuroille ja organisaatioille. Hallitse urheilijoita, määritä valmentajia, skaalaa tekoälypohjaista analyysiä ja pidä joukkueesi linjassa harjoituksista kilpailuihin.",
    schemaName: "Alpine Mastery seuroille ja organisaatioille",
  },
  de: {
    heroBadge: "Alpine Mastery für Vereine",
    heroTitle: "Alpine Mastery für Vereine und Organisationen",
    heroSubtitle:
      "Eine komplette digitale Coaching-Plattform für moderne Skivereine. Verwalte Athleten, weise Trainer zu, skaliere KI-gestützte Analysen und halte das Team vom Training bis zum Wettkampf auf Kurs.",
    ctaStartOrg: "Organisation starten",
    ctaBookDemo: "Demo buchen",
    videoCaption:
      "Sehen Sie, wie das Coach-Dashboard Vereinen und Trainern hilft, Athleten zu verwalten, Analysen zu prüfen und Fortschritte zu verfolgen.",
    benefitsBadge: "Vorteile für Vereine",
    benefitsTitle: "Weniger Verwaltung, mehr echtes Coaching.",
    benefits: [
      "Athleten erhalten KI-Feedback innerhalb von 2 Minuten nach dem Hochladen.",
      "Trainer prüfen Technikdaten aller Athleten in einer einzigen Ansicht.",
      "Keine manuelle Videoauswertung – die KI übernimmt die Analyse automatisch.",
      "Bessere Kommunikation zwischen Trainern und Athleten.",
      "Weniger Verwaltung, mehr Coaching auf der Piste.",
      "Eine einzige Plattform für Training, Auswertung und Fortschrittsverfolgung.",
    ],
    ctaViewPricing: "Preise und Pläne ansehen",
    pricingBadge: "Preise",
    pricingTitle: "Pläne für Vereine jeder Größe.",
    pricingDesc:
      "Wählen Sie ein Abonnement, das zu Ihrem Team passt, und fügen Sie dann Trainer und Athleten hinzu, während Ihr Verein wächst.",
    billingMonthly: "Monatlich",
    billingYearly: "Jährlich",
    saveBadge: "50 % sparen",
    perAthlete: "SEK / Athlet / Monat",
    contactVolume: "Kontakt für Mengenrabatte",
    plans: [
      {
        name: "Small Club",
        price: "1 190 kr/Monat",
        perAthlete: "119 SEK / Athlet / Monat",
        features: [
          "Bis zu 10 Athleten",
          "Unbegrenzte Trainer",
          "Unbegrenzte Analysen",
        ],
      },
      {
        name: "Club Pro",
        price: "3 990 kr/Monat",
        perAthlete: "80 SEK / Athlet / Monat",
        badge: "Am beliebtesten",
        features: [
          "Bis zu 50 Athleten",
          "Unbegrenzte Trainer",
          "Unbegrenzte Analysen",
          "Priorisierter Support",
        ],
      },
      {
        name: "Club Unlimited",
        price: "9 990 kr/Monat",
        perAthlete: "Kontakt für Mengenrabatte",
        features: [
          "Unbegrenzte Athleten",
          "Unbegrenzte Trainer",
          "Unbegrenzte Analysen",
          "Premium-Support",
        ],
      },
    ],
    offerDescs: {
      small: "Bis zu 10 Athleten, unbegrenzte Trainer und unbegrenzte Analysen.",
      pro: "Bis zu 50 Athleten, unbegrenzte Trainer, unbegrenzte Analysen und priorisierter Support.",
      unlimited: "Unbegrenzte Athleten, unbegrenzte Trainer, unbegrenzte Analysen und Premium-Support.",
    },
    orgsBadge: "Was Organisationen sind",
    orgsTitle: "Eine Plattform für Vereine, Akademien, Skischulen und Nationalteams.",
    orgsDesc:
      "Organisationen können öffentlich oder privat sein, Athleten und Trainer einladen, Vereinsmitgliedschaftsanfragen annehmen und jede Trainingsgruppe in einem System verbunden halten.",
    orgsCards: [
      {
        title: "Vereine & Skiakademien",
        text: "Organisierte Trainingsumgebungen mit trainerbegleiteter Athletenentwicklung.",
      },
      {
        title: "Ski-Gymnasien",
        text: "Strukturierte Programme, die klare Trainer- und Athletenabläufe benötigen.",
      },
      {
        title: "Nationalteams",
        text: "Leistungsorientierte Teams, die schnelles Feedback und Nachverfolgung brauchen.",
      },
      {
        title: "Private Trainingsgruppen",
        text: "Gruppen können privat bleiben und trotzdem dieselben Vereinstools nutzen.",
      },
    ],
    orgsTrailing:
      "Athleten und Trainer können nach Ihrer Organisation suchen, eine Mitgliedschaft beantragen und beitreten, sobald der Antrag genehmigt wurde.",
    clubAdminBadge: "Vereinsverwaltung",
    clubAdminTitle: "Verwalten Sie Ihren Verein mit Klarheit und Kontrolle.",
    clubAdminChecklist: [
      "Erstellen und verwalten Sie Ihre Organisation an einem Ort.",
      "Verteilen Sie Athletenkonten nach Abonnementstufe.",
      "Laden Sie Trainer ein und binden Sie sie schnell ein.",
      "Weisen Sie Trainer Athleten und Trainingsgruppen zu.",
      "Legen Sie Rollen, Berechtigungen und Zugriffsstufen fest.",
      "Überwachen Sie Vereinsaktivität, Fortschritt und Nutzung auf einen Blick.",
    ],
    orgControl: "Organisatorische Kontrolle",
    orgControlDesc:
      "Eine moderne Vereinsverwaltung zum Verwalten von Athleten, Trainern und Abonnementplätzen – bei leichter Verwaltung.",
    orgControlItems: [
      "Athleten- und Traineranfragen genehmigen",
      "Trainerzuweisungen und Rollen verfolgen",
      "Vereinsaktivität und Analysevolumen prüfen",
    ],
    coachWorkflowBadge: "Trainer-Workflow",
    coachWorkflowTitle: "Geben Sie Trainern einen Workflow, der Athleten voranbringt.",
    coachWorkflowDesc:
      "Trainer erhalten ein Dashboard für zugewiesene Athleten, Tools für das Gruppentraining und integrierte KI-Unterstützung, die Feedback schneller und konsistenter macht.",
    coachCards: [
      {
        title: "Dashboard für zugewiesene Athleten",
        text: "Sehen Sie jeden Athleten in einer Ansicht mit den neuesten Videos, Berichten und Fortschritten.",
      },
      {
        title: "Gruppen erstellen und teilen",
        text: "Bauen Sie Trainingsgruppen auf und lassen Sie mehrere Trainer mit denselben Athleten arbeiten.",
      },
      {
        title: "KI-gestützte Analyse",
        text: "Erhalten Sie schnelles, datengestütztes technisches Feedback zu jedem Video-Upload.",
      },
      {
        title: "Trainingspläne & Trockentraining",
        text: "Generieren Sie empfohlene Schwerpunkte, Einheiten und Trockentrainingsprogramme von derselben Plattform.",
      },
    ],
    athleteExpBadge: "Athleten-Erlebnis",
    athleteExpTitle: "Ein nahtloses Erlebnis für Skifahrer unterwegs.",
    athleteExpChecklist: [
      "Trainingsvideos direkt vom Handy hochladen.",
      "Sofortige KI-Analyse mit klarem Technik-Feedback erhalten.",
      "Verbesserungen mit echter Trainingshistorie verfolgen.",
      "Trainerkommentare und Korrekturen in derselben App erhalten.",
    ],
    finalBadge: "Bereit, Ihren Verein in die Zukunft zu führen?",
    finalTitle: "Bringen Sie Ihren Verein in die Zukunft des Skicoachings.",
    ctaContact: "Kontaktieren Sie uns",
    footerCtaTitle: "Bereit für den nächsten Schritt?",
    footerCtaDesc:
      "Wir helfen Ihnen, das richtige Paket für Ihren Verein zu wählen. Testen Sie Alpine Mastery kostenlos und entdecken Sie, was KI-gestütztes Coaching für Ihr Team tun kann.",
    metaDescription:
      "Alpine Mastery für Vereine und Organisationen. Verwalten Sie Athleten, weisen Sie Trainer zu, skalieren Sie KI-gestützte Analysen und halten Sie das Team vom Training bis zum Wettkampf auf Kurs.",
    schemaName: "Alpine Mastery für Vereine und Organisationen",
  },
  fr: {
    heroBadge: "Alpine Mastery pour les clubs",
    heroTitle: "Alpine Mastery pour les clubs et les organisations",
    heroSubtitle:
      "Une plateforme complète de coaching numérique pour les clubs de ski modernes. Gérez les athlètes, affectez des coachs, développez l'analyse par IA et gardez votre équipe alignée de l'entraînement à la compétition.",
    ctaStartOrg: "Créer votre organisation",
    ctaBookDemo: "Réserver une démo",
    videoCaption:
      "Découvrez comment le tableau de bord Coach aide les clubs et les coachs à gérer les athlètes, à examiner les analyses et à suivre les progrès.",
    benefitsBadge: "Avantages pour les clubs",
    benefitsTitle: "Moins d'administration, plus de coaching réel.",
    benefits: [
      "Les athlètes reçoivent un retour IA dans les 2 minutes après l'envoi.",
      "Les coachs consultent les données techniques de tous les athlètes en une seule vue.",
      "Aucune révision vidéo manuelle — l'IA gère l'analyse automatiquement.",
      "Meilleure communication entre coachs et athlètes.",
      "Moins d'administration, plus de coaching sur la neige.",
      "Une seule plateforme pour l'entraînement, la révision et le suivi des progrès.",
    ],
    ctaViewPricing: "Voir les tarifs et les plans",
    pricingBadge: "Tarifs",
    pricingTitle: "Des plans conçus pour les clubs de toutes tailles.",
    pricingDesc:
      "Choisissez un abonnement adapté à votre équipe, puis ajoutez des coachs et des athlètes à mesure que le club grandit.",
    billingMonthly: "Mensuel",
    billingYearly: "Annuel",
    saveBadge: "Économisez 50%",
    perAthlete: "SEK / athlète / mois",
    contactVolume: "Contactez-nous pour un tarif de volume",
    plans: [
      {
        name: "Small Club",
        price: "1 190 kr/mois",
        perAthlete: "119 SEK / athlète / mois",
        features: [
          "Jusqu'à 10 athlètes",
          "Coachs illimités",
          "Analyses illimitées",
        ],
      },
      {
        name: "Club Pro",
        price: "3 990 kr/mois",
        perAthlete: "80 SEK / athlète / mois",
        badge: "Le plus populaire",
        features: [
          "Jusqu'à 50 athlètes",
          "Coachs illimités",
          "Analyses illimitées",
          "Support prioritaire",
        ],
      },
      {
        name: "Club Unlimited",
        price: "9 990 kr/mois",
        perAthlete: "Contactez-nous pour un tarif de volume",
        features: [
          "Athlètes illimités",
          "Coachs illimités",
          "Analyses illimitées",
          "Support premium",
        ],
      },
    ],
    offerDescs: {
      small: "Jusqu'à 10 athlètes, coachs illimités et analyses illimitées.",
      pro: "Jusqu'à 50 athlètes, coachs illimités, analyses illimitées et support prioritaire.",
      unlimited: "Athlètes illimités, coachs illimités, analyses illimitées et support premium.",
    },
    orgsBadge: "Ce que sont les organisations",
    orgsTitle: "Une plateforme pour les clubs, académies, écoles de ski et équipes nationales.",
    orgsDesc:
      "Les organisations peuvent être publiques ou privées, inviter des athlètes et des coachs, accepter les demandes d'adhésion et garder chaque groupe d'entraînement connecté dans un seul système.",
    orgsCards: [
      {
        title: "Clubs & académies de ski",
        text: "Des environnements d'entraînement organisés avec un développement mené par les coachs.",
      },
      {
        title: "Lycées de ski",
        text: "Des programmes structurés qui ont besoin de flux clairs entre coachs et athlètes.",
      },
      {
        title: "Équipes nationales",
        text: "Des équipes axées sur la performance qui ont besoin de retours rapides et de suivi.",
      },
      {
        title: "Groupes d'entraînement privés",
        text: "Les groupes peuvent rester privés tout en utilisant les mêmes outils de club.",
      },
    ],
    orgsTrailing:
      "Les athlètes et les coachs peuvent rechercher votre organisation, demander une adhésion et la rejoindre une fois la demande approuvée.",
    clubAdminBadge: "Administration du club",
    clubAdminTitle: "Gérez votre club avec clarté et contrôle.",
    clubAdminChecklist: [
      "Créez et gérez votre organisation en un seul endroit.",
      "Répartissez les comptes athlètes selon le niveau d'abonnement.",
      "Invitez et intégrez rapidement les coachs.",
      "Affectez des coachs aux athlètes et aux groupes d'entraînement.",
      "Définissez les rôles, permissions et niveaux d'accès du club.",
      "Surveillez l'activité, les progrès et l'utilisation du club en un coup d'œil.",
    ],
    orgControl: "Contrôle organisationnel",
    orgControlDesc:
      "Une expérience moderne d'administration de club pour gérer athlètes, coachs et sièges d'abonnement tout en gardant une administration légère.",
    orgControlItems: [
      "Approuver les demandes des athlètes et des coachs",
      "Suivre les affectations et les rôles des coachs",
      "Examiner l'activité du club et le volume d'analyses",
    ],
    coachWorkflowBadge: "Flux de travail coach",
    coachWorkflowTitle: "Donnez aux coachs un flux de travail qui fait progresser les athlètes.",
    coachWorkflowDesc:
      "Les coachs disposent d'un tableau de bord pour leurs athlètes, d'outils pour l'entraînement en groupe et d'un support IA intégré qui rend le retour plus rapide et plus cohérent.",
    coachCards: [
      {
        title: "Tableau de bord des athlètes affectés",
        text: "Voyez chaque athlète en une vue avec leurs dernières vidéos, rapports et progrès.",
      },
      {
        title: "Créer et partager des groupes",
        text: "Construisez des groupes d'entraînement et laissez plusieurs coachs travailler avec les mêmes athlètes.",
      },
      {
        title: "Analyse par IA",
        text: "Recevez un retour technique rapide et fondé sur les données pour chaque vidéo envoyée.",
      },
      {
        title: "Plans d'entraînement & dryland",
        text: "Générez des domaines d'attention, des séances et des programmes dryland recommandés depuis la même plateforme.",
      },
    ],
    athleteExpBadge: "Expérience athlète",
    athleteExpTitle: "Une expérience fluide pour les skieurs en déplacement.",
    athleteExpChecklist: [
      "Envoyez des vidéos d'entraînement directement depuis le mobile.",
      "Recevez une analyse IA immédiate avec un retour technique clair.",
      "Suivez vos progrès dans le temps avec un véritable historique d'entraînement.",
      "Recevez commentaires et corrections du coach dans la même application.",
    ],
    finalBadge: "Prêt à mener votre club vers l'avenir ?",
    finalTitle: "Faites entrer votre club dans l'avenir du coaching de ski.",
    ctaContact: "Contactez-nous",
    footerCtaTitle: "Prêt à passer à l'étape suivante ?",
    footerCtaDesc:
      "Nous vous aiderons à choisir le bon forfait pour votre club. Essayez Alpine Mastery gratuitement et découvrez ce que le coaching par IA peut faire pour votre équipe.",
    metaDescription:
      "Alpine Mastery pour les clubs et les organisations. Gérez les athlètes, affectez des coachs, développez l'analyse par IA et gardez votre équipe alignée de l'entraînement à la compétition.",
    schemaName: "Alpine Mastery pour les clubs et les organisations",
  },
  nl: {
    heroBadge: "Alpine Mastery voor clubs",
    heroTitle: "Alpine Mastery voor clubs en organisaties",
    heroSubtitle:
      "Een compleet digitaal coachingplatform voor moderne skiclubs. Beheer atleten, wijs coaches toe, schaal AI-gestuurde analyses op en houd je team op één lijn van training tot wedstrijd.",
    ctaStartOrg: "Start je organisatie",
    ctaBookDemo: "Boek een demo",
    videoCaption:
      "Ontdek hoe het Coach-dashboard clubs en coaches helpt om atleten te beheren, analyses te bekijken en voortgang te volgen.",
    benefitsBadge: "Voordelen voor clubs",
    benefitsTitle: "Minder administratie, meer echt coachen.",
    benefits: [
      "Atleten ontvangen binnen 2 minuten na het uploaden AI-feedback.",
      "Coaches bekijken techniekdata van alle atleten in één overzicht.",
      "Geen handmatige videoreview — AI verzorgt de analyse automatisch.",
      "Betere communicatie tussen coaches en atleten.",
      "Minder administratie, meer coaching op de piste.",
      "Eén platform voor training, review en voortgangsregistratie.",
    ],
    ctaViewPricing: "Bekijk prijzen en abonnementen",
    pricingBadge: "Prijzen",
    pricingTitle: "Abonnementen voor clubs van elke omvang.",
    pricingDesc:
      "Kies een abonnement dat past bij je team en voeg daarna coaches en atleten toe naarmate je club groeit.",
    billingMonthly: "Maandelijks",
    billingYearly: "Jaarlijks",
    saveBadge: "Bespaar 50%",
    perAthlete: "SEK / atleet / maand",
    contactVolume: "Neem contact op voor volume prijzen",
    plans: [
      {
        name: "Small Club",
        price: "1 190 kr/maand",
        perAthlete: "119 SEK / atleet / maand",
        features: [
          "Tot 10 atleten",
          "Onbeperkt aantal coaches",
          "Onbeperkte analyses",
        ],
      },
      {
        name: "Club Pro",
        price: "3 990 kr/maand",
        perAthlete: "80 SEK / atleet / maand",
        badge: "Meest populair",
        features: [
          "Tot 50 atleten",
          "Onbeperkt aantal coaches",
          "Onbeperkte analyses",
          "Prioritaire support",
        ],
      },
      {
        name: "Club Unlimited",
        price: "9 990 kr/maand",
        perAthlete: "Neem contact op voor volume prijzen",
        features: [
          "Onbeperkt aantal atleten",
          "Onbeperkt aantal coaches",
          "Onbeperkte analyses",
          "Premium-support",
        ],
      },
    ],
    offerDescs: {
      small: "Tot 10 atleten, onbeperkt aantal coaches en onbeperkte analyses.",
      pro: "Tot 50 atleten, onbeperkt aantal coaches, onbeperkte analyses en prioritaire support.",
      unlimited: "Onbeperkt aantal atleten, onbeperkt aantal coaches, onbeperkte analyses en premium-support.",
    },
    orgsBadge: "Wat organisaties zijn",
    orgsTitle: "Een platform voor clubs, academies, skischolen en nationale teams.",
    orgsDesc:
      "Organisaties kunnen openbaar of privé zijn, atleten en coaches uitnodigen, lidmaatschapsverzoeken accepteren en elke trainingsgroep verbonden houden in één systeem.",
    orgsCards: [
      {
        title: "Clubs & ski-academies",
        text: "Georganiseerde trainingsomgevingen met coachgeleide atletenontwikkeling.",
      },
      {
        title: "Skigymnasia",
        text: "Gestructureerde programma's die duidelijke coach- en atletenstromen nodig hebben.",
      },
      {
        title: "Nationale teams",
        text: "Prestatiegerichte teams die snelle feedback en opvolging nodig hebben.",
      },
      {
        title: "Privé trainingsgroepen",
        text: "Groepen kunnen privé blijven terwijl ze dezelfde clubtools gebruiken.",
      },
    ],
    orgsTrailing:
      "Atleten en coaches kunnen naar je organisatie zoeken, lidmaatschap aanvragen en zich aansluiten zodra de aanvraag is goedgekeurd.",
    clubAdminBadge: "Clubbeheer",
    clubAdminTitle: "Beheer je club met helderheid en controle.",
    clubAdminChecklist: [
      "Creëer en beheer je organisatie op één plek.",
      "Verdeel atleetaccounts per abonnementsniveau.",
      "Nodig coaches snel uit en help ze op weg.",
      "Wijs coaches toe aan atleten en trainingsgroepen.",
      "Stel rollen, rechten en toegangsniveaus voor de club in.",
      "Bekijk clubactiviteit, voortgang en gebruik in één oogopslag.",
    ],
    orgControl: "Organisatorische controle",
    orgControlDesc:
      "Een moderne clubbeheerervaring voor het beheren van atleten, coaches en abonnementsplaatsen terwijl de administratie licht blijft.",
    orgControlItems: [
      "Keur atleet- en coachverzoeken goed",
      "Volg coachtoewijzingen en rollen",
      "Bekijk clubactiviteit en analysevolume",
    ],
    coachWorkflowBadge: "Coach-workflow",
    coachWorkflowTitle: "Geef coaches een workflow die atleten vooruit laat bewegen.",
    coachWorkflowDesc:
      "Coaches krijgen een dashboard voor toegewezen atleten, tools voor groepstraining en ingebouwde AI-ondersteuning die feedback sneller en consistenter maakt.",
    coachCards: [
      {
        title: "Dashboard voor toegewezen atleten",
        text: "Zie elke atleet in één overzicht met hun nieuwste video's, rapporten en voortgang.",
      },
      {
        title: "Groepen maken en delen",
        text: "Bouw trainingsgroepen en laat meerdere coaches met dezelfde atleten werken.",
      },
      {
        title: "AI-gestuurde analyse",
        text: "Ontvang snelle, datagestuurde technische feedback voor elke videoupload.",
      },
      {
        title: "Trainingsplannen & dryland",
        text: "Genereer aanbevolen focusgebieden, sessies en dryland-programma's vanaf hetzelfde platform.",
      },
    ],
    athleteExpBadge: "Atletenervaring",
    athleteExpTitle: "Een naadloze ervaring voor skiërs onderweg.",
    athleteExpChecklist: [
      "Upload trainingsvideo's rechtstreeks vanaf je mobiel.",
      "Ontvang directe AI-analyse met duidelijke techniekfeedback.",
      "Volg verbetering in de tijd met echte trainingsgeschiedenis.",
      "Ontvang coachcommentaar en correcties in dezelfde app.",
    ],
    finalBadge: "Klaar om je club de toekomst in te leiden?",
    finalTitle: "Breng je club naar de toekomst van skicoaching.",
    ctaContact: "Neem contact op",
    footerCtaTitle: "Klaar voor de volgende stap?",
    footerCtaDesc:
      "We helpen je het juiste pakket voor je club te kiezen. Probeer Alpine Mastery gratis en ontdek wat AI-gestuurd coachen voor je team kan betekenen.",
    metaDescription:
      "Alpine Mastery voor clubs en organisaties. Beheer atleten, wijs coaches toe, schaal AI-gestuurde analyses op en houd je team op één lijn van training tot wedstrijd.",
    schemaName: "Alpine Mastery voor clubs en organisaties",
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
  const canonicalUrl = `https://blog.masteryhub.se/${locale}/klubbpaket`;
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((supportedLocale) => [
      supportedLocale,
      `https://blog.masteryhub.se/${supportedLocale}/klubbpaket`,
    ])
  ) as Record<string, string>;

  return {
    title: copy.heroTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ...languages,
        "x-default": "https://blog.masteryhub.se/sv/klubbpaket",
      },
    },
    openGraph: {
      title: copy.heroTitle,
      description: copy.metaDescription,
      url: canonicalUrl,
      type: "website",
      siteName: "Alpine Mastery Blog",
      images: [
        {
          url: "https://blog.masteryhub.se/og-image.png",
          width: 1200,
          height: 630,
          alt: copy.heroTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.heroTitle,
      description: copy.metaDescription,
      images: ["https://blog.masteryhub.se/og-image.png"],
    },
  };
}

export default async function KlubbpaketPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = getLocaleCopy(locale);
  const pageUrl = `https://blog.masteryhub.se/${locale}/klubbpaket`;

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: copy.schemaName,
        url: "https://alpine.masteryhub.se",
        description: copy.metaDescription,
        areaServed: "Worldwide",
      },
      {
        "@type": "Service",
        name: copy.schemaName,
        serviceType: "AI-driven ski coaching platform for clubs and organizations",
        provider: {
          "@type": "Organization",
          name: "Alpine Mastery",
          url: "https://alpine.masteryhub.se",
        },
        description: copy.metaDescription,
        url: pageUrl,
        audience: {
          "@type": "BusinessAudience",
          "audienceType": ["Ski clubs", "Ski academies", "Ski gymnasiums", "National teams"],
        },
        offers: [
          {
            "@type": "Offer",
            name: "Small Club",
            price: "1190",
            priceCurrency: "SEK",
            description: copy.offerDescs.small,
          },
          {
            "@type": "Offer",
            name: "Club Pro",
            price: "3990",
            priceCurrency: "SEK",
            description: copy.offerDescs.pro,
          },
          {
            "@type": "Offer",
            name: "Club Unlimited",
            price: "9990",
            priceCurrency: "SEK",
            description: copy.offerDescs.unlimited,
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-bg-primary text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-slate-950 via-slate-900 to-bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.20),transparent_40%),linear-gradient(135deg,_rgba(14,165,233,0.10),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
          <div className="mb-8 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {copy.heroBadge}
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="max-w-xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                {copy.heroTitle}
              </h1>

              <p className="mt-6 max-w-xl text-lg text-text-secondary sm:text-xl">
                {copy.heroSubtitle}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={productUrls.startOrg}
                  className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-4 text-base font-bold text-bg-primary transition hover:bg-accent-hover"
                >
                  {copy.ctaStartOrg}
                </a>
                <a
                  href={productUrls.bookDemo}
                  className="inline-flex items-center justify-center rounded-xl border border-accent px-6 py-4 text-base font-semibold text-accent transition hover:bg-accent/10"
                >
                  {copy.ctaBookDemo}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-border bg-bg-card/80 p-5 shadow-2xl shadow-sky-500/10">
                <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-slate-950">
                  <video
                    className="h-full w-full object-contain"
                    src={productUrls.demoVideo}
                    controls
                    preload="metadata"
                    aria-label={copy.ctaBookDemo}
                  />
                </div>
                <p className="mt-4 text-sm leading-6 text-text-secondary">
                  {copy.videoCaption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FÖRDELAR FÖR KLUBBAR */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {copy.benefitsBadge}
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{copy.benefitsTitle}</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {copy.benefits.map((benefit) => (
            <article key={benefit} className="rounded-3xl border border-border bg-bg-card p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-lg text-accent">
                ✦
              </div>
              <p className="text-text-secondary">{benefit}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-xl border border-accent px-8 py-4 text-base font-semibold text-accent transition hover:bg-accent/10"
          >
            {copy.ctaViewPricing}
          </a>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-y border-border bg-bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {copy.pricingBadge}
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{copy.pricingTitle}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-text-secondary">{copy.pricingDesc}</p>
          </div>

          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="text-sm font-medium text-text-secondary">{copy.billingMonthly}</span>
            <span className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-700">
              <span className="inline-block h-5 w-5 translate-x-0.5 rounded-full bg-white" />
            </span>
            <span className="text-sm font-medium text-white">{copy.billingYearly}</span>
            <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-bold text-bg-primary">
              {copy.saveBadge}
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {copy.plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border bg-bg-card p-8 ${
                  plan.badge ? "border-accent shadow-xl shadow-sky-500/10" : "border-border"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-bg-primary">
                    {plan.badge}
                  </div>
                )}
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <div className="mt-4 text-3xl font-black text-white">{plan.price}</div>
                <div className="mt-1 text-sm text-text-secondary">{plan.perAthlete}</div>
                <ul className="mt-6 space-y-3 text-text-secondary">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VAD ORGANISATIONER ÄR */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {copy.orgsBadge}
          </div>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl">{copy.orgsTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-secondary">{copy.orgsDesc}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {copy.orgsCards.map((card) => (
            <article key={card.title} className="rounded-3xl border border-border bg-bg-card p-6">
              <h3 className="mb-3 text-lg font-bold text-white">{card.title}</h3>
              <p className="text-sm leading-6 text-text-secondary">{card.text}</p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-text-secondary">
          {copy.orgsTrailing}
        </p>
      </section>

      {/* KLUBBADMIN */}
      <section className="border-y border-border bg-bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-border bg-bg-card p-8">
              <div className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {copy.clubAdminBadge}
              </div>
              <h2 className="text-3xl font-bold text-white">{copy.clubAdminTitle}</h2>
              <ul className="mt-6 space-y-3 text-text-secondary">
                {copy.clubAdminChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-slate-900 p-6">
              <h3 className="text-lg font-bold text-white">{copy.orgControl}</h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">{copy.orgControlDesc}</p>
              <ul className="mt-5 space-y-3 text-text-secondary">
                {copy.orgControlItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COACH ARBETSFLÖDE */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {copy.coachWorkflowBadge}
          </div>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl">{copy.coachWorkflowTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-secondary">{copy.coachWorkflowDesc}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {copy.coachCards.map((card) => (
            <article key={card.title} className="rounded-3xl border border-border bg-bg-card p-6">
              <h3 className="mb-3 text-xl font-bold text-white">{card.title}</h3>
              <p className="text-text-secondary">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ÅKARUPPLEVELSE */}
      <section className="border-y border-border bg-bg-secondary/60 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {copy.athleteExpBadge}
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{copy.athleteExpTitle}</h2>

          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
            {copy.athleteExpChecklist.map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-bg-card p-5 text-text-secondary">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-bg-primary">
                  ✓
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mb-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {copy.finalBadge}
        </div>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{copy.finalTitle}</h2>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={productUrls.startOrg}
            className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-base font-bold text-bg-primary transition hover:bg-accent-hover"
          >
            {copy.ctaStartOrg}
          </a>
          <a
            href={productUrls.bookDemoFooter}
            className="inline-flex items-center justify-center rounded-xl border border-accent px-8 py-4 text-base font-semibold text-accent transition hover:bg-accent/10"
          >
            {copy.ctaBookDemo}
          </a>
          <a
            href={productUrls.contact}
            className="inline-flex items-center justify-center rounded-xl border border-border px-8 py-4 text-base font-semibold text-text-secondary transition hover:bg-bg-card"
          >
            {copy.ctaContact}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <CTABanner
          title={copy.footerCtaTitle}
          description={copy.footerCtaDesc}
          showBrand
          product="Alpine Mastery"
        />
      </section>
    </main>
  );
}