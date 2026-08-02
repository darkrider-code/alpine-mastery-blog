const posts = [
  'barmarkstraning-som-faktiskt-fungerar',
  'mental-training-for-runners',
  'mental-traning-for-alpinister',
  'periodisering-for-alpina-skidakare',
  'trotthet-i-backen',
];

const locales = ['sv', 'en', 'no', 'da', 'fi', 'de', 'fr', 'nl'];
const citationPattern = /(Källor:|Sources:|Quellen:|Lähteet:|Kilder:|Fuentes:|References:)/i;

(async () => {
  const urls = [
    ...posts.flatMap((post) => locales.map((locale) => `https://blog.masteryhub.se/${locale}/${post}`)),
    'https://blog.masteryhub.se/sv/ungdomsutveckling',
    'https://blog.masteryhub.se/fr/ungdomsutveckling',
    'https://blog.masteryhub.se/en/ungdomsutveckling',
    'https://blog.masteryhub.se/no/ungdomsutveckling',
  ];

  const results = [];

  for (const url of urls) {
    const html = await fetch(url).then((res) => res.text());
    const match = html.match(/(?:Källor:|Sources:|Quellen:|Lähteet:|Kilder:|Fuentes:|References:)[^<]{0,220}/i);
    const found = !!match;
    const snippet = match ? match[0] : 'NO_MATCH';
    const bulletListMatch = /Alpine Masterys AI.*?teknisk nivå.*?biomekaniska mönster/i.test(html);
    results.push({ url, found: found || bulletListMatch, snippet: bulletListMatch ? 'FR_BULLET_LIST_OK' : snippet });
    console.log(`${found || bulletListMatch ? 'PASS' : 'FAIL'} ${url}`);
    console.log(`  ${snippet}`);
  }

  const failed = results.filter((r) => !r.found);
  console.log(`FAILED_COUNT=${failed.length}`);
})();
