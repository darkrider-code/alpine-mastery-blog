import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import { SUPPORTED_LOCALES } from "@/lib/translations";

const productUrls = {
  freeAnalysis: "https://alpine.masteryhub.se/free-analysis",
  contact: "https://alpine.masteryhub.se/contact",
  athletes: "https://alpine.masteryhub.se/athletes",
  demoVideo: "https://alpine.masteryhub.se/demo-video.mp4",
};

interface LocaleCopy {
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaFreeAnalysis: string;
  ctaApply: string;
  videoCaption: string;
  whatBadge: string;
  whatTitle: string;
  whatDesc: string;
  whatPoints: { title: string; text: string }[];
  whoBadge: string;
  whoTitle: string;
  whoDesc: string;
  whoCards: { title: string; text: string }[];
  benefitsBadge: string;
  benefitsTitle: string;
  benefitsDesc: string;
  benefits: { title: string; text: string }[];
  expectationsBadge: string;
  expectationsTitle: string;
  expectationsDesc: string;
  expectationsChecklist: string[];
  lowCommitBadge: string;
  lowCommitTitle: string;
  lowCommitPoints: string[];
  howBadge: string;
  howTitle: string;
  howSteps: { title: string; text: string }[];
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
    heroBadge: "Alpine Mastery Ambassadorprogram",
    heroTitle: "Bli ambassadör för Alpine Mastery",
    heroSubtitle:
      "Få gratis fullt medlemskap i utbyte mot att dela din träningsresa. Inga kontrakt, inga dolda åtaganden — bara ett genuint samarbete med en plattform som hjälper dig bli en bättre åkare.",
    ctaFreeAnalysis: "Starta med en gratis analys",
    ctaApply: "Ansök som ambassadör",
    videoCaption:
      "Se hur AI-analysen hjälper åkare att förstå sin teknik och följa sin utveckling över tid.",
    whatBadge: "Vad programmet är",
    whatTitle: "Ett enkelt samarbete: gratis medlemskap för delad resa.",
    whatDesc:
      "Ambassadorprogrammet är byggt för att vara enkelt och ärligt. Du får gratis fullt medlemskap i Alpine Mastery — och i utbyte delar du din träningsresa med din community. Inga formella kontrakt, inga dolda villkor.",
    whatPoints: [
      {
        title: "Gratis fullt medlemskap",
        text: "Obegränsade AI-analyser, framstegsspårning och tränarverktyg — helt kostnadsfritt.",
      },
      {
        title: "Inga kontrakt",
        text: "Ingen bindningstid och inga formella avtal. Samarbetet bygger på ömsesidig tillit.",
      },
      {
        title: "Dela din resa",
        text: "Vi ber dig dela det du redan gör — din träning, dina analyser och din utveckling.",
      },
    ],
    whoBadge: "Vem det är för",
    whoTitle: "För åkare, tränare och community-byggare.",
    whoDesc:
      "Ambassadorprogrammet passar dig som brinner för alpint och vill inspirera andra — oavsett om du är en tävlingsåkare på juniornivå, en tränare eller någon som bygger en skidcommunity.",
    whoCards: [
      {
        title: "Tävlings- & junioråkare",
        text: "Satsande åkare som vill dela sin säsong, sina analyser och sin väg mot bättre teknik.",
      },
      {
        title: "Tränare",
        text: "Tränare som vill visa hur AI-driven analys kan hjälpa åkare och lag.",
      },
      {
        title: "Community-byggare",
        text: "Personer med engagerad följarskara som vill lyfta alpin träning och teknik.",
      },
      {
        title: "Internationella åkare",
        text: "Åkare från hela världen — från Sverige till Japan och vidare.",
      },
    ],
    benefitsBadge: "Vad du får",
    benefitsTitle: "Allt du behöver för att utvecklas som åkare.",
    benefitsDesc:
      "Som ambassadör får du full tillgång till Alpine Masterys plattform — samma verktyg som våra betalande medlemmar använder.",
    benefits: [
      {
        title: "Fullt gratis medlemskap",
        text: "Obegränsade AI-skidanalyser med teknisk feedback, övningar och betyg.",
      },
      {
        title: "Framstegsspårning",
        text: "Följ din teknikutveckling över tid med riktig träningshistorik.",
      },
      {
        title: "Profil på åkarsidan",
        text: "Publicerad profil med dina analyser och sociala länkar på åkardirektoriet.",
      },
      {
        title: "Community-exponering",
        text: "Synlighet inför Alpine Masterys växande community av åkare och tränare.",
      },
    ],
    expectationsBadge: "Vad som förväntas",
    expectationsTitle: "Dela din träningsresa på sociala medier.",
    expectationsDesc:
      "Vi ber dig inte om något du inte redan gör som åkare. Dela din vardag, dina analyser och din utveckling — på ditt eget sätt.",
    expectationsChecklist: [
      "Dela dina AI-analyser och vad de lär dig om din teknik.",
      "Visa behind-the-scenes från din träning — på snö och barmark.",
      "Tagga @alpinemastery och hänvisa till plattformen när det känns naturligt.",
      "Inspirera andra åkare att prova gratis AI-analys av sin teknik.",
    ],
    lowCommitBadge: "Lågt åtagande",
    lowCommitTitle: "Inga kontrakt. Ingen bindningstid. Ingen press.",
    lowCommitPoints: [
      "Samarbetet bygger på frivillighet och ömsesidig respekt.",
      "Du delar det du känner dig bekväm med — det finns inga krav på antal inlägg.",
      "Du kan när som helst välja att avsluta samarbetet utan förklaring.",
    ],
    howBadge: "Så här kommer du igång",
    howTitle: "Tre enkla steg till en bättre resa.",
    howSteps: [
      {
        title: "Starta med en gratis analys",
        text: "Ladda upp ett klipp och få en gratis AI-analys av din teknik — ingen inloggning eller betalning krävs.",
      },
      {
        title: "Ta kontakt",
        text: "Hör av dig via kontaktformuläret eller Instagram DM med en kort presentation av dig och din åkning.",
      },
      {
        title: "Börja dela din resa",
        text: "När samarbetet är igång börjar du dela dina analyser och din träning med din community.",
      },
    ],
    finalBadge: "Redo att bli en del av teamet?",
    finalTitle: "Börja med en gratis analys — och ta det därifrån.",
    ctaContact: "Kontakta oss",
    footerCtaTitle: "Din resa börjar med en analys.",
    footerCtaDesc:
      "Ladda upp ett klipp och få en gratis AI-analys av din teknik. Upptäck vad Alpine Mastery kan göra för din åkning.",
    metaDescription:
      "Bli ambassadör för Alpine Mastery: gratis fullt medlemskap i utbyte mot att dela din träningsresa. Inga kontrakt, inget åtagande. Starta med en gratis AI-analys.",
    schemaName: "Alpine Mastery Ambassadorprogram",
  },
  en: {
    heroBadge: "Alpine Mastery Ambassador Program",
    heroTitle: "Become an Alpine Mastery Ambassador",
    heroSubtitle:
      "Get a free full membership in exchange for sharing your training journey. No contracts, no hidden commitments — just a genuine partnership with a platform that helps you become a better skier.",
    ctaFreeAnalysis: "Start with a free analysis",
    ctaApply: "Apply as an ambassador",
    videoCaption:
      "See how the AI analysis helps skiers understand their technique and track their progress over time.",
    whatBadge: "What the program is",
    whatTitle: "A simple partnership: free membership for sharing your journey.",
    whatDesc:
      "The ambassador program is built to be simple and honest. You get a free full Alpine Mastery membership — and in return, you share your training journey with your community. No formal contracts, no hidden terms.",
    whatPoints: [
      {
        title: "Free full membership",
        text: "Unlimited AI analyses, progress tracking and coach tools — completely free.",
      },
      {
        title: "No contracts",
        text: "No commitment and no formal agreements. The partnership is built on mutual trust.",
      },
      {
        title: "Share your journey",
        text: "We ask you to share what you already do — your training, your analyses and your progress.",
      },
    ],
    whoBadge: "Who it's for",
    whoTitle: "For skiers, coaches and community builders.",
    whoDesc:
      "The ambassador program is for anyone passionate about alpine skiing who wants to inspire others — whether you're a junior competitive skier, a coach, or someone building a ski community.",
    whoCards: [
      {
        title: "Competitive & junior skiers",
        text: "Dedicated skiers who want to share their season, their analyses and their path to better technique.",
      },
      {
        title: "Coaches",
        text: "Coaches who want to show how AI-driven analysis can help skiers and teams.",
      },
      {
        title: "Community builders",
        text: "People with an engaged following who want to elevate alpine training and technique.",
      },
      {
        title: "International skiers",
        text: "Skiers from around the world — from Sweden to Japan and beyond.",
      },
    ],
    benefitsBadge: "What you get",
    benefitsTitle: "Everything you need to develop as a skier.",
    benefitsDesc:
      "As an ambassador you get full access to the Alpine Mastery platform — the same tools our paying members use.",
    benefits: [
      {
        title: "Free full membership",
        text: "Unlimited AI ski analyses with technical feedback, drills and scores.",
      },
      {
        title: "Progress tracking",
        text: "Track your technique development over time with real training history.",
      },
      {
        title: "Profile on the athletes page",
        text: "A published profile with your analyses and social links on the athlete directory.",
      },
      {
        title: "Community exposure",
        text: "Visibility in front of Alpine Mastery's growing community of skiers and coaches.",
      },
    ],
    expectationsBadge: "What's expected",
    expectationsTitle: "Share your training journey on social media.",
    expectationsDesc:
      "We don't ask you to do anything you're not already doing as a skier. Share your routine, your analyses and your progress — in your own way.",
    expectationsChecklist: [
      "Share your AI analyses and what they teach you about your technique.",
      "Show behind-the-scenes from your training — on snow and dryland.",
      "Tag @alpinemastery and reference the platform when it feels natural.",
      "Inspire other skiers to try a free AI analysis of their technique.",
    ],
    lowCommitBadge: "Low commitment",
    lowCommitTitle: "No contracts. No commitment. No pressure.",
    lowCommitPoints: [
      "The partnership is built on voluntariness and mutual respect.",
      "You share what you're comfortable with — there are no posting requirements.",
      "You can end the partnership at any time, no explanation needed.",
    ],
    howBadge: "How to get started",
    howTitle: "Three simple steps to a better journey.",
    howSteps: [
      {
        title: "Start with a free analysis",
        text: "Upload a clip and get a free AI analysis of your technique — no login or payment required.",
      },
      {
        title: "Get in touch",
        text: "Reach out via the contact form or Instagram DM with a short introduction of you and your skiing.",
      },
      {
        title: "Start sharing your journey",
        text: "Once the partnership is live, start sharing your analyses and your training with your community.",
      },
    ],
    finalBadge: "Ready to join the team?",
    finalTitle: "Start with a free analysis — and take it from there.",
    ctaContact: "Contact us",
    footerCtaTitle: "Your journey starts with an analysis.",
    footerCtaDesc:
      "Upload a clip and get a free AI analysis of your technique. Discover what Alpine Mastery can do for your skiing.",
    metaDescription:
      "Become an Alpine Mastery ambassador: free full membership in exchange for sharing your training journey. No contracts, no commitment. Start with a free AI analysis.",
    schemaName: "Alpine Mastery Ambassador Program",
  },
  no: {
    heroBadge: "Alpine Mastery Ambassadorprogram",
    heroTitle: "Bli ambassadør for Alpine Mastery",
    heroSubtitle:
      "Få gratis fullt medlemskap i bytte mot å dele treningsreisen din. Ingen kontrakter, ingen skjulte forpliktelser — bare et ekte samarbeid med en plattform som hjelper deg bli en bedre skiløper.",
    ctaFreeAnalysis: "Start med en gratis analyse",
    ctaApply: "Søk som ambassadør",
    videoCaption:
      "Se hvordan AI-analysen hjelper løpere med å forstå teknikken og følge utviklingen over tid.",
    whatBadge: "Hva programmet er",
    whatTitle: "Et enkelt samarbeid: gratis medlemskap for delt reise.",
    whatDesc:
      "Ambassadorprogrammet er bygget for å være enkelt og ærlig. Du får gratis fullt medlemskap i Alpine Mastery — og i bytte deler du treningsreisen din med communityen din. Ingen formelle kontrakter, ingen skjulte vilkår.",
    whatPoints: [
      {
        title: "Gratis fullt medlemskap",
        text: "Ubegrensede AI-analyser, fremgangssporing og trenerverktøy — helt gratis.",
      },
      {
        title: "Ingen kontrakter",
        text: "Ingen bindingstid og ingen formelle avtaler. Samarbeidet bygger på gjensidig tillit.",
      },
      {
        title: "Del reisen din",
        text: "Vi ber deg dele det du allerede gjør — treningen, analysene og utviklingen din.",
      },
    ],
    whoBadge: "Hvem det er for",
    whoTitle: "For løpere, trenere og community-byggere.",
    whoDesc:
      "Ambassadorprogrammet passer for deg som brenner for alpint og vil inspirere andre — enten du er en konkurranseløper på juniornivå, en trener eller noen som bygger en skicommunity.",
    whoCards: [
      {
        title: "Konkurranse- & juniorløpere",
        text: "Satsende løpere som vil dele sesongen, analysene og veien mot bedre teknikk.",
      },
      {
        title: "Trenere",
        text: "Trenere som vil vise hvordan AI-drevet analyse kan hjelpe løpere og lag.",
      },
      {
        title: "Community-byggere",
        text: "Personer med engasjert følgerskare som vil løfte alpintrening og teknikk.",
      },
      {
        title: "Internasjonale løpere",
        text: "Løpere fra hele verden — fra Sverige til Japan og videre.",
      },
    ],
    benefitsBadge: "Hva du får",
    benefitsTitle: "Alt du trenger for å utvikle deg som løper.",
    benefitsDesc:
      "Som ambassadør får du full tilgang til Alpine Masterys plattform — de samme verktøyene som våre betalende medlemmer bruker.",
    benefits: [
      {
        title: "Fullt gratis medlemskap",
        text: "Ubegrensede AI-skianalyser med teknisk tilbakemelding, øvelser og vurderinger.",
      },
      {
        title: "Fremgangssporing",
        text: "Følg teknikkutviklingen din over tid med ekte treningshistorie.",
      },
      {
        title: "Profil på løpersiden",
        text: "Publisert profil med analyser og sosiale lenker på løperdirektoriet.",
      },
      {
        title: "Community-eksponering",
        text: "Synlighet overfor Alpine Masterys voksende community av løpere og trenere.",
      },
    ],
    expectationsBadge: "Hva som forventes",
    expectationsTitle: "Del treningsreisen din på sosiale medier.",
    expectationsDesc:
      "Vi ber deg ikke om noe du ikke allerede gjør som løper. Del hverdagen, analysene og utviklingen din — på din egen måte.",
    expectationsChecklist: [
      "Del AI-analysene dine og hva de lærer deg om teknikken.",
      "Vis behind-the-scenes fra treningen — på snø og barmark.",
      "Tag @alpinemastery og henvis til plattformen når det føles naturlig.",
      "Inspirer andre løpere til å prøve gratis AI-analyse av teknikken.",
    ],
    lowCommitBadge: "Lavt engasjement",
    lowCommitTitle: "Ingen kontrakter. Ingen bindingstid. Ingen press.",
    lowCommitPoints: [
      "Samarbeidet bygger på frivillighet og gjensidig respekt.",
      "Du deler det du føler deg komfortabel med — det er ingen krav til antall innlegg.",
      "Du kan når som helst avslutte samarbeidet uten forklaring.",
    ],
    howBadge: "Slik kommer du i gang",
    howTitle: "Tre enkle steg til en bedre reise.",
    howSteps: [
      {
        title: "Start med en gratis analyse",
        text: "Last opp et klipp og få en gratis AI-analyse av teknikken din — ingen innlogging eller betaling kreves.",
      },
      {
        title: "Ta kontakt",
        text: "Hør fra deg via kontaktskjemaet eller Instagram DM med en kort presentasjon av deg og kjøringen din.",
      },
      {
        title: "Begynn å dele reisen",
        text: "Når samarbeidet er i gang, begynner du å dele analysene og treningen med communityen din.",
      },
    ],
    finalBadge: "Klar til å bli en del av teamet?",
    finalTitle: "Start med en gratis analyse — og ta det derfra.",
    ctaContact: "Kontakt oss",
    footerCtaTitle: "Reisen din starter med en analyse.",
    footerCtaDesc:
      "Last opp et klipp og få en gratis AI-analyse av teknikken din. Oppdag hva Alpine Mastery kan gjøre for kjøringen din.",
    metaDescription:
      "Bli ambassadør for Alpine Mastery: gratis fullt medlemskap i bytte mot å dele treningsreisen din. Ingen kontrakter, ingen forpliktelser. Start med en gratis AI-analyse.",
    schemaName: "Alpine Mastery Ambassadorprogram",
  },
  da: {
    heroBadge: "Alpine Mastery Ambassadørprogram",
    heroTitle: "Bliv ambassadør for Alpine Mastery",
    heroSubtitle:
      "Få gratis fuldt medlemskab i bytte for at dele din træningsrejse. Ingen kontrakter, ingen skjulte forpligtelser — bare et ægte partnerskab med en platform, der hjælper dig med at blive en bedre skiløber.",
    ctaFreeAnalysis: "Start med en gratis analyse",
    ctaApply: "Ansøg som ambassadør",
    videoCaption:
      "Se, hvordan AI-analysen hjælper løbere med at forstå teknikken og følge udviklingen over tid.",
    whatBadge: "Hvad programmet er",
    whatTitle: "Et enkelt partnerskab: gratis medlemskab for delt rejse.",
    whatDesc:
      "Ambassadørprogrammet er bygget til at være enkelt og ærligt. Du får gratis fuldt medlemskab i Alpine Mastery — og til gengæld deler du din træningsrejse med din community. Ingen formelle kontrakter, ingen skjulte vilkår.",
    whatPoints: [
      {
        title: "Gratis fuldt medlemskab",
        text: "Ubegrænsede AI-analyser, fremgangssporing og træner-værktøjer — helt gratis.",
      },
      {
        title: "Ingen kontrakter",
        text: "Ingen bindingstid og ingen formelle aftaler. Partnerskabet bygger på gensidig tillid.",
      },
      {
        title: "Del din rejse",
        text: "Vi beder dig dele det, du allerede gør — din træning, dine analyser og din udvikling.",
      },
    ],
    whoBadge: "Hvem det er for",
    whoTitle: "For løbere, trænere og community-byggere.",
    whoDesc:
      "Ambassadørprogrammet passer til dig, der brænder for alpint og vil inspirere andre — uanset om du er en konkurrenceløber på juniorniveau, en træner eller nogen, der bygger en skicommunity.",
    whoCards: [
      {
        title: "Konkurrence- & juniorløbere",
        text: "Satsende løbere, der vil dele deres sæson, analyser og vej mod bedre teknik.",
      },
      {
        title: "Trænere",
        text: "Trænere, der vil vise, hvordan AI-drevet analyse kan hjælpe løbere og hold.",
      },
      {
        title: "Community-byggere",
        text: "Personer med engageret følgerskare, der vil løfte alpintræning og teknik.",
      },
      {
        title: "Internationale løbere",
        text: "Løbere fra hele verden — fra Sverige til Japan og videre.",
      },
    ],
    benefitsBadge: "Hvad du får",
    benefitsTitle: "Alt du skal bruge for at udvikle dig som løber.",
    benefitsDesc:
      "Som ambassadør får du fuld adgang til Alpine Masterys platform — de samme værktøjer som vores betalende medlemmer bruger.",
    benefits: [
      {
        title: "Gratis fuldt medlemskab",
        text: "Ubegrænsede AI-skianalyser med teknisk feedback, øvelser og karakterer.",
      },
      {
        title: "Fremgangssporing",
        text: "Følg din teknikudvikling over tid med ægte træningshistorik.",
      },
      {
        title: "Profil på løbersiden",
        text: "Offentliggjort profil med dine analyser og sociale links på løberdirektoriet.",
      },
      {
        title: "Community-eksponering",
        text: "Synlighed over for Alpine Masterys voksende community af løbere og trænere.",
      },
    ],
    expectationsBadge: "Hvad der forventes",
    expectationsTitle: "Del din træningsrejse på sociale medier.",
    expectationsDesc:
      "Vi beder dig ikke om noget, du ikke allerede gør som løber. Del din hverdag, dine analyser og din udvikling — på din egen måde.",
    expectationsChecklist: [
      "Del dine AI-analyser, og hvad de lærer dig om din teknik.",
      "Vis behind-the-scenes fra din træning — på sne og tørtræning.",
      "Tag @alpinemastery og henvis til platformen, når det føles naturligt.",
      "Inspirér andre løbere til at prøve en gratis AI-analyse af deres teknik.",
    ],
    lowCommitBadge: "Lavt engagement",
    lowCommitTitle: "Ingen kontrakter. Ingen bindingstid. Ingen pres.",
    lowCommitPoints: [
      "Partnerskabet bygger på frivillighed og gensidig respekt.",
      "Du deler det, du føler dig tryg ved — der er ingen krav til antal opslag.",
      "Du kan til enhver tid afslutte partnerskabet uden forklaring.",
    ],
    howBadge: "Sådan kommer du i gang",
    howTitle: "Tre enkle trin til en bedre rejse.",
    howSteps: [
      {
        title: "Start med en gratis analyse",
        text: "Upload et klip og få en gratis AI-analyse af din teknik — ingen login eller betaling kræves.",
      },
      {
        title: "Tag kontakt",
        text: "Hør fra dig via kontaktformularen eller Instagram DM med en kort præsentation af dig og din skiløb.",
      },
      {
        title: "Begynd at dele din rejse",
        text: "Når partnerskabet er i gang, begynder du at dele dine analyser og din træning med din community.",
      },
    ],
    finalBadge: "Klar til at blive en del af teamet?",
    finalTitle: "Start med en gratis analyse — og tag det derfra.",
    ctaContact: "Kontakt os",
    footerCtaTitle: "Din rejse starter med en analyse.",
    footerCtaDesc:
      "Upload et klip og få en gratis AI-analyse af din teknik. Opdag, hvad Alpine Mastery kan gøre for din skiløb.",
    metaDescription:
      "Bliv ambassadør for Alpine Mastery: gratis fuldt medlemskab i bytte for at dele din træningsrejse. Ingen kontrakter, ingen forpligtelser. Start med en gratis AI-analyse.",
    schemaName: "Alpine Mastery Ambassadørprogram",
  },
  fi: {
    heroBadge: "Alpine Mastery -lähettilässohjelma",
    heroTitle: "Ryhdy Alpine Mastery -lähettilääksi",
    heroSubtitle:
      "Saat ilmaisen täyden jäsenyyden vastineeksi siitä, että jaat harjoitusmatkasi. Ei sopimuksia, ei piilotettuja sitoumuksia — vain aito kumppanuus alustan kanssa, joka auttaa sinua kehittymään paremmaksi laskijaksi.",
    ctaFreeAnalysis: "Aloita ilmaisella analyysillä",
    ctaApply: "Hae lähettilääksi",
    videoCaption:
      "Katso, miten tekoälyanalyysi auttaa laskijoita ymmärtämään tekniikkansa ja seuraamaan kehitystään ajan myötä.",
    whatBadge: "Mitä ohjelma on",
    whatTitle: "Yksinkertainen kumppanuus: ilmainen jäsenyys jaetusta matkasta.",
    whatDesc:
      "Lähettilässohjelma on rakennettu yksinkertaiseksi ja rehelliseksi. Saat ilmaisen täyden Alpine Mastery -jäsenyyden — ja vastineeksi jaat harjoitusmatkasi yhteisöllesi. Ei muodollisia sopimuksia, ei piilotettuja ehtoja.",
    whatPoints: [
      {
        title: "Ilmainen täysi jäsenyys",
        text: "Rajattomasti tekoälyanalyysejä, kehityksen seurantaa ja valmentajatyökaluja — täysin ilmaiseksi.",
      },
      {
        title: "Ei sopimuksia",
        text: "Ei sitoutumisaikaa eikä muodollisia sopimuksia. Kumppanuus perustuu molemminpuoliseen luottamukseen.",
      },
      {
        title: "Jaa matkasi",
        text: "Pyydämme sinua jakamaan sen, mitä jo teet — harjoittelusi, analyysisi ja kehityksesi.",
      },
    ],
    whoBadge: "Kenelle se on tarkoitettu",
    whoTitle: "Laskijoille, valmentajille ja yhteisön rakentajille.",
    whoDesc:
      "Lähettilässohjelma sopii sinulle, joka palaa alppihiihtoon ja haluat innostaa muita — oletpa sitten junioritason kilpalaskija, valmentaja tai joku, joka rakentaa laskuyhteisöä.",
    whoCards: [
      {
        title: "Kilpa- & juniorilaskijat",
        text: "Satsaavat laskijat, jotka haluavat jakaa kautensa, analyysinsä ja tiensä kohti parempaa tekniikkaa.",
      },
      {
        title: "Valmentajat",
        text: "Valmentajat, jotka haluavat näyttää, miten tekoälypohjainen analyysi voi auttaa laskijoita ja joukkueita.",
      },
      {
        title: "Yhteisön rakentajat",
        text: "Henkilöt, joilla on sitoutunut seuraajakunta ja jotka haluavat nostaa alppiharjoittelua ja tekniikkaa.",
      },
      {
        title: "Kansainväliset laskijat",
        text: "Laskijoita ympäri maailmaa — Ruotsista Japaniin ja siitä eteenpäin.",
      },
    ],
    benefitsBadge: "Mitä saat",
    benefitsTitle: "Kaikki mitä tarvitset kehittyäksesi laskijana.",
    benefitsDesc:
      "Lähettiläänä saat täyden pääsyn Alpine Mastery -alustalle — samoihin työkaluihin, joita maksavat jäsenemme käyttävät.",
    benefits: [
      {
        title: "Ilmainen täysi jäsenyys",
        text: "Rajattomasti tekoälypohjaisia laskuanalyysejä teknisine palautteineen, harjoitteineen ja arvosanoineen.",
      },
      {
        title: "Kehityksen seuranta",
        text: "Seuraa tekniikkasi kehitystä ajan myötä aidolla harjoitushistorialla.",
      },
      {
        title: "Profiili laskijasivulla",
        text: "Julkaistu profiili analyyseinesi ja some-linkkeinesi laskijahakemistossa.",
      },
      {
        title: "Yhteisönäkyvyys",
        text: "Näkyvyyttä Alpine Masteryn kasvavalle laskijoiden ja valmentajien yhteisölle.",
      },
    ],
    expectationsBadge: "Mitä odotetaan",
    expectationsTitle: "Jaa harjoitusmatkasi sosiaalisessa mediassa.",
    expectationsDesc:
      "Emme pyydä sinua tekemään mitään, mitä et jo tekisi laskijana. Jaa arkesi, analyysisi ja kehityksesi — omalla tavallasi.",
    expectationsChecklist: [
      "Jaa tekoälyanalyysisi ja se, mitä ne opettavat tekniikastasi.",
      "Näytä behind-the-scenes -sisältöä harjoittelustasi — rinteessä ja kuivaharjoittelussa.",
      "Tägitä @alpinemastery ja viittaa alustaan, kun se tuntuu luonnolliselta.",
      "Innosta muita laskijoita kokeilemaan ilmaista tekoälyanalyysiä tekniikastaan.",
    ],
    lowCommitBadge: "Matala sitoutuminen",
    lowCommitTitle: "Ei sopimuksia. Ei sitoutumista. Ei paineita.",
    lowCommitPoints: [
      "Kumppanuus perustuu vapaaehtoisuuteen ja molemminpuoliseen kunnioitukseen.",
      "Jaot sen, miltä sinusta tuntuu mukavalta — julkaisumääriä ei vaadita.",
      "Voit lopettaa kumppanuuden milloin tahansa ilman selitystä.",
    ],
    howBadge: "Näin pääset alkuun",
    howTitle: "Kolme yksinkertaista askelta parempaan matkaan.",
    howSteps: [
      {
        title: "Aloita ilmaisella analyysillä",
        text: "Lataa pätkä ja saat ilmaisen tekoälyanalyysin tekniikastasi — kirjautumista tai maksua ei tarvita.",
      },
      {
        title: "Ota yhteyttä",
        text: "Ota yhteyttä yhteyslomakkeen tai Instagram DM:n kautta lyhyellä esittelyllä itsestäsi ja laskustasi.",
      },
      {
        title: "Ala jakaa matkaasi",
        text: "Kun kumppanuus on käynnissä, alat jakaa analyysejäsi ja harjoitteluasi yhteisöllesi.",
      },
    ],
    finalBadge: "Valmis liittymään joukkueeseen?",
    finalTitle: "Aloita ilmaisella analyysillä — ja jatka siitä.",
    ctaContact: "Ota yhteyttä",
    footerCtaTitle: "Matkasi alkaa analyysistä.",
    footerCtaDesc:
      "Lataa pätkä ja saat ilmaisen tekoälyanalyysin tekniikastasi. Tutustu siihen, mitä Alpine Mastery voi tehdä laskullesi.",
    metaDescription:
      "Ryhdy Alpine Mastery -lähettilääksi: ilmainen täysi jäsenyys vastineeksi harjoitusmatkasi jakamisesta. Ei sopimuksia, ei sitoumuksia. Aloita ilmaisella tekoälyanalyysillä.",
    schemaName: "Alpine Mastery -lähettilässohjelma",
  },
  de: {
    heroBadge: "Alpine-Mastery-Botschafterprogramm",
    heroTitle: "Werde Alpine-Mastery-Botschafter",
    heroSubtitle:
      "Erhalte eine kostenlose Vollmitgliedschaft im Austausch für das Teilen deiner Trainingsreise. Keine Verträge, keine versteckten Verpflichtungen — nur eine echte Partnerschaft mit einer Plattform, die dir hilft, ein besserer Skifahrer zu werden.",
    ctaFreeAnalysis: "Mit einer kostenlosen Analyse starten",
    ctaApply: "Als Botschafter bewerben",
    videoCaption:
      "Sehen Sie, wie die KI-Analyse Skifahrern hilft, ihre Technik zu verstehen und ihre Fortschritte im Laufe der Zeit zu verfolgen.",
    whatBadge: "Was das Programm ist",
    whatTitle: "Eine einfache Partnerschaft: kostenlose Mitgliedschaft für geteilte Reise.",
    whatDesc:
      "Das Botschafterprogramm ist einfach und ehrlich aufgebaut. Du erhältst eine kostenlose Vollmitgliedschaft bei Alpine Mastery — und im Gegenzug teilst du deine Trainingsreise mit deiner Community. Keine formellen Verträge, keine versteckten Bedingungen.",
    whatPoints: [
      {
        title: "Kostenlose Vollmitgliedschaft",
        text: "Unbegrenzte KI-Analysen, Fortschrittsverfolgung und Trainer-Tools — völlig kostenlos.",
      },
      {
        title: "Keine Verträge",
        text: "Keine Bindung und keine formellen Vereinbarungen. Die Partnerschaft basiert auf gegenseitigem Vertrauen.",
      },
      {
        title: "Teile deine Reise",
        text: "Wir bitten dich, das zu teilen, was du bereits tust — dein Training, deine Analysen und deine Entwicklung.",
      },
    ],
    whoBadge: "Für wen es ist",
    whoTitle: "Für Skifahrer, Trainer und Community-Builder.",
    whoDesc:
      "Das Botschafterprogramm ist für alle, die den alpinen Skisport lieben und andere inspirieren wollen — ob Nachwuchs-Rennfahrer, Trainer oder jemand, der eine Ski-Community aufbaut.",
    whoCards: [
      {
        title: "Renn- & Nachwuchsfahrer",
        text: "Engagierte Skifahrer, die ihre Saison, ihre Analysen und ihren Weg zu besserer Technik teilen wollen.",
      },
      {
        title: "Trainer",
        text: "Trainer, die zeigen wollen, wie KI-gestützte Analyse Skifahrern und Teams hilft.",
      },
      {
        title: "Community-Builder",
        text: "Personen mit engagierter Follower-Schaft, die alpines Training und Technik voranbringen wollen.",
      },
      {
        title: "Internationale Skifahrer",
        text: "Skifahrer aus aller Welt — von Schweden bis Japan und darüber hinaus.",
      },
    ],
    benefitsBadge: "Was du bekommst",
    benefitsTitle: "Alles, was du brauchst, um dich als Skifahrer zu entwickeln.",
    benefitsDesc:
      "Als Botschafter erhältst du vollen Zugang zur Alpine-Mastery-Plattform — die gleichen Tools, die unsere zahlenden Mitglieder nutzen.",
    benefits: [
      {
        title: "Kostenlose Vollmitgliedschaft",
        text: "Unbegrenzte KI-Skianalysen mit technischem Feedback, Übungen und Bewertungen.",
      },
      {
        title: "Fortschrittsverfolgung",
        text: "Verfolge deine Technikentwicklung im Laufe der Zeit mit echter Trainingshistorie.",
      },
      {
        title: "Profil auf der Skifahrerseite",
        text: "Ein veröffentlichtes Profil mit deinen Analysen und Social-Links im Athletenverzeichnis.",
      },
      {
        title: "Community-Präsenz",
        text: "Sichtbarkeit vor Alpine Masterys wachsender Community aus Skifahrern und Trainern.",
      },
    ],
    expectationsBadge: "Was erwartet wird",
    expectationsTitle: "Teile deine Trainingsreise in den sozialen Medien.",
    expectationsDesc:
      "Wir bitten dich nicht um etwas, das du als Skifahrer nicht ohnehin tust. Teile deinen Alltag, deine Analysen und deine Entwicklung — auf deine eigene Weise.",
    expectationsChecklist: [
      "Teile deine KI-Analysen und was sie dir über deine Technik beibringen.",
      "Zeige Behind-the-Scenes aus deinem Training — auf der Piste und beim Trockentraining.",
      "Tagge @alpinemastery und verweise auf die Plattform, wenn es sich natürlich anfühlt.",
      "Inspiriere andere Skifahrer, eine kostenlose KI-Analyse ihrer Technik auszuprobieren.",
    ],
    lowCommitBadge: "Geringe Verpflichtung",
    lowCommitTitle: "Keine Verträge. Keine Bindung. Kein Druck.",
    lowCommitPoints: [
      "Die Partnerschaft basiert auf Freiwilligkeit und gegenseitigem Respekt.",
      "Du teilst, womit du dich wohlfühlst — es gibt keine Vorgaben zur Anzahl der Beiträge.",
      "Du kannst die Partnerschaft jederzeit ohne Erklärung beenden.",
    ],
    howBadge: "So kommst du los",
    howTitle: "Drei einfache Schritte zu einer besseren Reise.",
    howSteps: [
      {
        title: "Starte mit einer kostenlosen Analyse",
        text: "Lade einen Clip hoch und erhalte eine kostenlose KI-Analyse deiner Technik — ohne Anmeldung oder Zahlung.",
      },
      {
        title: "Nimm Kontakt auf",
        text: "Melde dich über das Kontaktformular oder per Instagram-DM mit einer kurzen Vorstellung von dir und deinem Skifahren.",
      },
      {
        title: "Beginne, deine Reise zu teilen",
        text: "Sobald die Partnerschaft läuft, teilst du deine Analysen und dein Training mit deiner Community.",
      },
    ],
    finalBadge: "Bereit, Teil des Teams zu werden?",
    finalTitle: "Starte mit einer kostenlosen Analyse — und mach weiter von dort.",
    ctaContact: "Kontaktiere uns",
    footerCtaTitle: "Deine Reise beginnt mit einer Analyse.",
    footerCtaDesc:
      "Lade einen Clip hoch und erhalte eine kostenlose KI-Analyse deiner Technik. Entdecke, was Alpine Mastery für dein Skifahren tun kann.",
    metaDescription:
      "Werde Alpine-Mastery-Botschafter: kostenlose Vollmitgliedschaft im Austausch für das Teilen deiner Trainingsreise. Keine Verträge, keine Verpflichtungen. Starte mit einer kostenlosen KI-Analyse.",
    schemaName: "Alpine-Mastery-Botschafterprogramm",
  },
  fr: {
    heroBadge: "Programme Ambassadeur Alpine Mastery",
    heroTitle: "Devenez ambassadeur Alpine Mastery",
    heroSubtitle:
      "Obtenez un abonnement complet gratuit en échange du partage de votre parcours d'entraînement. Aucun contrat, aucun engagement caché — juste un véritable partenariat avec une plateforme qui vous aide à devenir un meilleur skieur.",
    ctaFreeAnalysis: "Commencez par une analyse gratuite",
    ctaApply: "Postuler comme ambassadeur",
    videoCaption:
      "Découvrez comment l'analyse IA aide les skieurs à comprendre leur technique et à suivre leurs progrès dans le temps.",
    whatBadge: "Ce qu'est le programme",
    whatTitle: "Un partenariat simple : abonnement gratuit pour une histoire partagée.",
    whatDesc:
      "Le programme ambassadeur est conçu pour être simple et honnête. Vous obtenez un abonnement complet gratuit à Alpine Mastery — et en échange, vous partagez votre parcours d'entraînement avec votre communauté. Aucun contrat formel, aucune condition cachée.",
    whatPoints: [
      {
        title: "Abonnement complet gratuit",
        text: "Analyses IA illimitées, suivi des progrès et outils coach — entièrement gratuits.",
      },
      {
        title: "Aucun contrat",
        text: "Aucun engagement et aucun accord formel. Le partenariat repose sur la confiance mutuelle.",
      },
      {
        title: "Partagez votre parcours",
        text: "Nous vous demandons de partager ce que vous faites déjà — votre entraînement, vos analyses et votre progression.",
      },
    ],
    whoBadge: "À qui cela s'adresse",
    whoTitle: "Pour les skieurs, coachs et bâtisseurs de communauté.",
    whoDesc:
      "Le programme ambassadeur est fait pour les passionnés de ski alpin qui veulent inspirer les autres — que vous soyez un skieur de compétition junior, un coach ou quelqu'un qui construit une communauté de ski.",
    whoCards: [
      {
        title: "Skieurs de compétition & juniors",
        text: "Des skieurs dévoués qui veulent partager leur saison, leurs analyses et leur chemin vers une meilleure technique.",
      },
      {
        title: "Coachs",
        text: "Des coachs qui veulent montrer comment l'analyse par IA aide les skieurs et les équipes.",
      },
      {
        title: "Bâtisseurs de communauté",
        text: "Des personnes avec une audience engagée qui veulent faire progresser l'entraînement et la technique alpine.",
      },
      {
        title: "Skieurs internationaux",
        text: "Des skieurs du monde entier — de la Suède au Japon et au-delà.",
      },
    ],
    benefitsBadge: "Ce que vous obtenez",
    benefitsTitle: "Tout ce dont vous avez besoin pour progresser comme skieur.",
    benefitsDesc:
      "En tant qu'ambassadeur, vous obtenez un accès complet à la plateforme Alpine Mastery — les mêmes outils que nos membres payants utilisent.",
    benefits: [
      {
        title: "Abonnement complet gratuit",
        text: "Analyses IA de ski illimitées avec retour technique, exercices et notes.",
      },
      {
        title: "Suivi des progrès",
        text: "Suivez votre évolution technique dans le temps avec un véritable historique d'entraînement.",
      },
      {
        title: "Profil sur la page athlètes",
        text: "Un profil publié avec vos analyses et vos réseaux sociaux sur l'annuaire des athlètes.",
      },
      {
        title: "Visibilité communautaire",
        text: "Une visibilité devant la communauté croissante d'Alpine Mastery de skieurs et de coachs.",
      },
    ],
    expectationsBadge: "Ce qui est attendu",
    expectationsTitle: "Partagez votre parcours d'entraînement sur les réseaux sociaux.",
    expectationsDesc:
      "Nous ne vous demandons rien que vous ne faites déjà en tant que skieur. Partagez votre quotidien, vos analyses et votre progression — à votre manière.",
    expectationsChecklist: [
      "Partagez vos analyses IA et ce qu'elles vous apprennent sur votre technique.",
      "Montrez les coulisses de votre entraînement — sur neige et en dryland.",
      "Taguez @alpinemastery et référencez la plateforme quand c'est naturel.",
      "Inspirez d'autres skieurs à essayer une analyse IA gratuite de leur technique.",
    ],
    lowCommitBadge: "Engagement léger",
    lowCommitTitle: "Aucun contrat. Aucun engagement. Aucune pression.",
    lowCommitPoints: [
      "Le partenariat repose sur le volontariat et le respect mutuel.",
      "Vous partagez ce avec quoi vous êtes à l'aise — aucun quota de publications.",
      "Vous pouvez mettre fin au partenariat à tout moment, sans explication.",
    ],
    howBadge: "Comment commencer",
    howTitle: "Trois étapes simples vers une meilleure aventure.",
    howSteps: [
      {
        title: "Commencez par une analyse gratuite",
        text: "Téléchargez une séquence et obtenez une analyse IA gratuite de votre technique — sans connexion ni paiement.",
      },
      {
        title: "Prenez contact",
        text: "Contactez-nous via le formulaire ou un DM Instagram avec une brève présentation de vous et de votre ski.",
      },
      {
        title: "Commencez à partager votre parcours",
        text: "Une fois le partenariat lancé, partagez vos analyses et votre entraînement avec votre communauté.",
      },
    ],
    finalBadge: "Prêt à rejoindre l'équipe ?",
    finalTitle: "Commencez par une analyse gratuite — et continuez à partir de là.",
    ctaContact: "Contactez-nous",
    footerCtaTitle: "Votre parcours commence par une analyse.",
    footerCtaDesc:
      "Téléchargez une séquence et obtenez une analyse IA gratuite de votre technique. Découvrez ce qu'Alpine Mastery peut faire pour votre ski.",
    metaDescription:
      "Devenez ambassadeur Alpine Mastery : abonnement complet gratuit en échange du partage de votre parcours d'entraînement. Aucun contrat, aucun engagement. Commencez par une analyse IA gratuite.",
    schemaName: "Programme Ambassadeur Alpine Mastery",
  },
  nl: {
    heroBadge: "Alpine Mastery Ambassadeursprogramma",
    heroTitle: "Word Alpine Mastery-ambassadeur",
    heroSubtitle:
      "Krijg een gratis volledig lidmaatschap in ruil voor het delen van je trainingsreis. Geen contracten, geen verborgen verplichtingen — alleen een echt partnerschap met een platform dat je helpt een betere skiër te worden.",
    ctaFreeAnalysis: "Start met een gratis analyse",
    ctaApply: "Solliciteer als ambassadeur",
    videoCaption:
      "Ontdek hoe de AI-analyse skiërs helpt hun techniek te begrijpen en hun voortgang in de tijd te volgen.",
    whatBadge: "Wat het programma is",
    whatTitle: "Een eenvoudig partnerschap: gratis lidmaatschap voor een gedeelde reis.",
    whatDesc:
      "Het ambassadeursprogramma is eenvoudig en eerlijk opgebouwd. Je krijgt een gratis volledig Alpine Mastery-lidmaatschap — en in ruil daarvoor deel je je trainingsreis met je community. Geen formele contracten, geen verborgen voorwaarden.",
    whatPoints: [
      {
        title: "Gratis volledig lidmaatschap",
        text: "Onbeperkte AI-analyses, voortgangsregistratie en coachtools — volledig gratis.",
      },
      {
        title: "Geen contracten",
        text: "Geen verplichting en geen formele overeenkomsten. Het partnerschap is gebaseerd op wederzijds vertrouwen.",
      },
      {
        title: "Deel je reis",
        text: "We vragen je te delen wat je al doet — je training, je analyses en je ontwikkeling.",
      },
    ],
    whoBadge: "Voor wie het is",
    whoTitle: "Voor skiërs, coaches en community-builders.",
    whoDesc:
      "Het ambassadeursprogramma is voor iedereen die gepassioneerd is over alpineskiën en anderen wil inspireren — of je nu een junior wedstrijdskiër bent, een coach, of iemand die een skicommunity opbouwt.",
    whoCards: [
      {
        title: "Wedstrijd- & juniorskiërs",
        text: "Toegewijde skiërs die hun seizoen, analyses en weg naar betere techniek willen delen.",
      },
      {
        title: "Coaches",
        text: "Coaches die willen laten zien hoe AI-gestuurde analyse skiërs en teams helpt.",
      },
      {
        title: "Community-builders",
        text: "Mensen met een betrokken volgersschare die alpientraining en techniek willen versterken.",
      },
      {
        title: "Internationale skiërs",
        text: "Skiërs van over de hele wereld — van Zweden tot Japan en verder.",
      },
    ],
    benefitsBadge: "Wat je krijgt",
    benefitsTitle: "Alles wat je nodig hebt om je als skiër te ontwikkelen.",
    benefitsDesc:
      "Als ambassadeur krijg je volledige toegang tot het Alpine Mastery-platform — dezelfde tools die onze betalende leden gebruiken.",
    benefits: [
      {
        title: "Gratis volledig lidmaatschap",
        text: "Onbeperkte AI-skianalyses met technische feedback, oefeningen en scores.",
      },
      {
        title: "Voortgangsregistratie",
        text: "Volg je techniekontwikkeling in de tijd met echte trainingsgeschiedenis.",
      },
      {
        title: "Profiel op de skiërs-pagina",
        text: "Een gepubliceerd profiel met je analyses en social links in de skiërsgids.",
      },
      {
        title: "Community-zichtbaarheid",
        text: "Zichtbaarheid voor Alpine Mastery's groeiende community van skiërs en coaches.",
      },
    ],
    expectationsBadge: "Wat er verwacht wordt",
    expectationsTitle: "Deel je trainingsreis op sociale media.",
    expectationsDesc:
      "We vragen je niets te doen wat je als skiër niet al doet. Deel je dagelijkse routine, je analyses en je ontwikkeling — op jouw eigen manier.",
    expectationsChecklist: [
      "Deel je AI-analyses en wat ze je leren over je techniek.",
      "Toon behind-the-scenes van je training — op sneeuw en bij dryland.",
      "Tag @alpinemastery en verwijs naar het platform wanneer het natuurlijk voelt.",
      "Inspireer andere skiërs om een gratis AI-analyse van hun techniek te proberen.",
    ],
    lowCommitBadge: "Lage drempel",
    lowCommitTitle: "Geen contracten. Geen verplichting. Geen druk.",
    lowCommitPoints: [
      "Het partnerschap is gebaseerd op vrijwilligheid en wederzijds respect.",
      "Je deelt waar je je comfortabel bij voelt — er zijn geen eisen aan het aantal berichten.",
      "Je kunt het partnerschap op elk moment zonder uitleg beëindigen.",
    ],
    howBadge: "Zo kom je op gang",
    howTitle: "Drie eenvoudige stappen naar een betere reis.",
    howSteps: [
      {
        title: "Start met een gratis analyse",
        text: "Upload een filmpje en krijg een gratis AI-analyse van je techniek — geen login of betaling vereist.",
      },
      {
        title: "Neem contact op",
        text: "Neem contact op via het formulier of een Instagram DM met een korte introductie van jezelf en je skiën.",
      },
      {
        title: "Begin je reis te delen",
        text: "Zodra het partnerschap loopt, deel je je analyses en je training met je community.",
      },
    ],
    finalBadge: "Klaar om deel uit te maken van het team?",
    finalTitle: "Start met een gratis analyse — en ga vanaf daar verder.",
    ctaContact: "Neem contact op",
    footerCtaTitle: "Je reis begint met een analyse.",
    footerCtaDesc:
      "Upload een filmpje en krijg een gratis AI-analyse van je techniek. Ontdek wat Alpine Mastery voor je skiën kan betekenen.",
    metaDescription:
      "Word Alpine Mastery-ambassadeur: gratis volledig lidmaatschap in ruil voor het delen van je trainingsreis. Geen contracten, geen verplichtingen. Start met een gratis AI-analyse.",
    schemaName: "Alpine Mastery Ambassadeursprogramma",
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
  const canonicalUrl = `https://blog.masteryhub.se/${locale}/ambassador`;
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((supportedLocale) => [
      supportedLocale,
      `https://blog.masteryhub.se/${supportedLocale}/ambassador`,
    ])
  ) as Record<string, string>;

  return {
    title: copy.heroTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ...languages,
        "x-default": "https://blog.masteryhub.se/sv/ambassador",
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

export default async function AmbassadorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = getLocaleCopy(locale);
  const pageUrl = `https://blog.masteryhub.se/${locale}/ambassador`;

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Alpine Mastery",
        url: "https://alpine.masteryhub.se",
        description: copy.metaDescription,
        areaServed: "Worldwide",
      },
      {
        "@type": "Service",
        name: copy.schemaName,
        serviceType: "Ambassador program for free membership in exchange for social sharing",
        provider: {
          "@type": "Organization",
          name: "Alpine Mastery",
          url: "https://alpine.masteryhub.se",
        },
        description: copy.metaDescription,
        url: pageUrl,
        audience: {
          "@type": "SportsActivityLocation",
          "audienceType": ["Competitive skiers", "Junior alpine skiers", "Coaches", "Community builders"],
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "SEK",
          description: "Free full Alpine Mastery membership for ambassadors in exchange for social media sharing.",
        },
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
                  href={productUrls.freeAnalysis}
                  className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-4 text-base font-bold text-bg-primary transition hover:bg-accent-hover"
                >
                  {copy.ctaFreeAnalysis}
                </a>
                <a
                  href={productUrls.contact}
                  className="inline-flex items-center justify-center rounded-xl border border-accent px-6 py-4 text-base font-semibold text-accent transition hover:bg-accent/10"
                >
                  {copy.ctaApply}
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
                    aria-label={copy.videoCaption}
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

      {/* VAD PROGRAMMET ÄR */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {copy.whatBadge}
          </div>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl">{copy.whatTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-secondary">{copy.whatDesc}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {copy.whatPoints.map((point) => (
            <article key={point.title} className="rounded-3xl border border-border bg-bg-card p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-lg text-accent">
                ✦
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{point.title}</h3>
              <p className="text-text-secondary">{point.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* VEM DET ÄR FÖR */}
      <section className="border-y border-border bg-bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {copy.whoBadge}
            </div>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl">{copy.whoTitle}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-text-secondary">{copy.whoDesc}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {copy.whoCards.map((card) => (
              <article key={card.title} className="rounded-3xl border border-border bg-bg-card p-6">
                <h3 className="mb-3 text-lg font-bold text-white">{card.title}</h3>
                <p className="text-sm leading-6 text-text-secondary">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VAD DU FÅR */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {copy.benefitsBadge}
          </div>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl">{copy.benefitsTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-secondary">{copy.benefitsDesc}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {copy.benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-3xl border border-border bg-bg-card p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-lg text-accent">
                ✓
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{benefit.title}</h3>
              <p className="text-text-secondary">{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* VAD SOM FÖRVÄNTAS */}
      <section className="border-y border-border bg-bg-secondary/60 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {copy.expectationsBadge}
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{copy.expectationsTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-secondary">{copy.expectationsDesc}</p>

          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
            {copy.expectationsChecklist.map((item) => (
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

      {/* LÅGT ÅTAGANDE */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {copy.lowCommitBadge}
          </div>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl">{copy.lowCommitTitle}</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {copy.lowCommitPoints.map((point) => (
            <div key={point} className="rounded-3xl border border-border bg-bg-card p-6 text-center text-text-secondary">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-bg-primary">
                ✓
              </div>
              {point}
            </div>
          ))}
        </div>
      </section>

      {/* SÅ HÄR KOMMER DU IGÅNG */}
      <section className="border-y border-border bg-bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {copy.howBadge}
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{copy.howTitle}</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {copy.howSteps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-border bg-bg-card p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-bg-primary">
                  {index + 1}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
                <p className="text-text-secondary">{step.text}</p>
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
            href={productUrls.freeAnalysis}
            className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-base font-bold text-bg-primary transition hover:bg-accent-hover"
          >
            {copy.ctaFreeAnalysis}
          </a>
          <a
            href={productUrls.contact}
            className="inline-flex items-center justify-center rounded-xl border border-accent px-8 py-4 text-base font-semibold text-accent transition hover:bg-accent/10"
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