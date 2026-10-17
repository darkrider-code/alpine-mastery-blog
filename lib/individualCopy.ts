const COPY = {
  "sv": {
    "title": "Se vad du kan förbättra i nästa åk",
    "body": "Filma dig själv eller ditt barn med en vanlig mobil. Få personlig teknikfeedback och ett tydligt nästa steg."
  },
  "en": {
    "title": "See what to improve on your next run",
    "body": "Film yourself or your child with an ordinary phone. Get personal technique feedback and a clear next step."
  },
  "no": {
    "title": "Se hva du kan forbedre i neste tur",
    "body": "Film deg selv eller barnet ditt med en vanlig mobil. Få personlig tilbakemelding på teknikken og et tydelig neste steg."
  },
  "da": {
    "title": "Se, hvad du kan forbedre på næste tur",
    "body": "Film dig selv eller dit barn med en almindelig mobil. Få personlig feedback på teknikken og et tydeligt næste skridt."
  },
  "fi": {
    "title": "Näe, mitä voit parantaa seuraavassa laskussa",
    "body": "Kuvaa oma tai lapsesi lasku tavallisella puhelimella. Saat henkilökohtaista tekniikkapalautetta ja selkeän seuraavan askeleen."
  },
  "de": {
    "title": "Erkenne, was du bei der nächsten Abfahrt verbessern kannst",
    "body": "Filme dich oder dein Kind mit einem normalen Handy. Erhalte persönliches Technikfeedback und einen klaren nächsten Schritt."
  },
  "fr": {
    "title": "Découvrez quoi améliorer lors de votre prochaine descente",
    "body": "Filmez-vous ou filmez votre enfant avec un téléphone ordinaire. Recevez un retour technique personnalisé et une prochaine étape claire."
  },
  "nl": {
    "title": "Ontdek wat je in je volgende afdaling kunt verbeteren",
    "body": "Film jezelf of je kind met een gewone telefoon. Krijg persoonlijke techniekfeedback en een duidelijke volgende stap."
  },
  "es": {
    "title": "Descubre qué mejorar en tu próxima bajada",
    "body": "Grábate a ti o a tu hijo con un móvil normal. Recibe comentarios personales sobre la técnica y un siguiente paso claro."
  }
} as const;
export function individualCopy(locale: string) { return COPY[locale as keyof typeof COPY] ?? COPY.en; }
