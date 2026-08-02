const targets = [
  ['https://blog.masteryhub.se/sv/barmarkstraning-som-faktiskt-fungerar', 'Bli bättre på att läsa barmarksförhållanden och anpassa din skidteknik efter snö, terräng och temperatur – för mer kontroll och tryggare utför.'],
  ['https://blog.masteryhub.se/sv/knaskador-i-alpinism', 'Förstå varför ACL-skador uppstår i alpint och hur du minskar risken med rätt träning, teknik och återhämtning före och under säsongen – för säkrare skidåkning.'],
  ['https://blog.masteryhub.se/sv/ungdomsutveckling', 'Vill du skapa nästa generation av alpina skidåkare? Lär dig hur långsiktig utveckling, rätt belastning och starka träningsmiljöer bygger bättre idrottare över tid.'],
  ['https://blog.masteryhub.se/nl/konsten-att-valja-ratt-linje', 'Ontdek hoe je de juiste lijn kiest in het alpien skiën: lees het terrein, bepaal je snelheid en neem slimme beslissingen wanneer elke meter telt.'],
  ['https://blog.masteryhub.se/nl/mental-traning-for-alpinister', 'Ontdek hoe mentale training jouw prestaties in het alpien skiën kan verbeteren met focus, visualisatie en rustige routines die je voorbereiden op training en races.'],
  ['https://blog.masteryhub.se/en/mental-training-for-runners', 'Discover powerful mental training techniques to improve your running performance. Learn how to develop focus, resilience, and a winning mindset for your next race.'],
  ['https://blog.masteryhub.se/sv/konsten-att-valja-ratt-linje', 'Lär dig att välja rätt linje i alpina backar genom att läsa terrängen, styra farten och göra smarta beslut när varje meter räknas.'],
  ['https://blog.masteryhub.se/nl/snoforhallanden', 'Ontdek hoe sneeuwcondities je ski-ervaring bepalen en waarom smarta val keuzes, tempo en balans vaak meer betekenen dan styrka alleen.'],
  ['https://blog.masteryhub.se/sv/snoforhallanden', 'Upptäck hur snöförhållanden påverkar din skidåkning och varför smarta val i terrängen ofta gör större skillnad än styrka ensam.'],
  ['https://blog.masteryhub.se/nl/trotthet-i-backen', 'Lera hoe vermoeidheid de keuze van lijn, tempo en balans beïnvloedt in het alpien skiën, en hoe je met slimme rust en planning beter blijft presteren.'],
  ['https://blog.masteryhub.se/sv/trotthet-i-backen', 'Lär dig hur trötthet påverkar linjeval, hastighet och balans i alpint – och hur återhämtning och smart planering hjälper dig prestera bättre.'],
  ['https://blog.masteryhub.se/sv/periodisering-for-alpina-skidakare', 'Vill du träna smartare under säsongen? Lär dig hur periodisering hjälper alpina skidåkare att bygga form, återhämta sig och prestera bättre i rätt fas.'],
];

function extractDescription(html) {
  const matches = [
    html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i),
    html.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i),
    html.match(/<meta\s+name=["']twitter:description["']\s+content=["']([^"']+)["']/i),
  ].filter(Boolean);

  return matches.length ? matches[0][1] : '<not found>';
}

(async () => {
  let passCount = 0;

  for (const [url, expected] of targets) {
    const res = await fetch(url, { redirect: 'follow' });
    const html = await res.text();
    const actual = extractDescription(html);
    const ok = actual === expected;

    console.log('URL: ' + url);
    console.log('EXPECTED: ' + expected);
    console.log('ACTUAL: ' + actual);
    console.log('RESULT: ' + (ok ? 'PASS' : 'FAIL'));
    console.log('---');

    if (ok) passCount += 1;
  }

  console.log('TOTAL_PASS=' + passCount + '/' + targets.length);
  if (passCount !== targets.length) process.exitCode = 1;
})();
