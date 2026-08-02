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
  const results = [];

  for (const post of posts) {
    for (const locale of locales) {
      const url = `http://127.0.0.1:3001/${locale}/${post}`;
      const html = await fetch(url).then((res) => res.text());
      const found = citationPattern.test(html);
      const snippet = html.match(/(?:Källor:|Sources:|Quellen:|Lähteet:|Kilder:|Fuentes:|References:)[^<]{0,180}/i)?.[0] ?? 'NO_MATCH';
      results.push({ url, found, snippet });
      console.log(`${found ? 'PASS' : 'FAIL'} ${url}`);
      console.log(`  ${snippet}`);
    }
  }

  const failed = results.filter((r) => !r.found);
  console.log(`FAILED_COUNT=${failed.length}`);
})();
