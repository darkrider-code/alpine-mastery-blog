const http = require('http');
const https = require('https');

const targets = [
  { url: 'http://127.0.0.1:3000/sv/periodisering-for-alpina-skidakare', expected: 'Vill du träna smartare under säsongen? Lär dig hur periodisering hjälper alpina skidåkare att bygga form, återhämta sig och prestera bättre i rätt fas.' },
  { url: 'http://127.0.0.1:3000/sv/knaskador-i-alpinism', expected: 'Förstå varför ACL-skador uppstår i alpint och hur du minskar risken med rätt träning, teknik och återhämtning före och under säsongen – för säkrare skidåkning.' },
  { url: 'http://127.0.0.1:3000/sv/ungdomsutveckling', expected: 'Vill du skapa nästa generation av alpina skidåkare? Lär dig hur långsiktig utveckling, rätt belastning och starka träningsmiljöer bygger bättre idrottare över tid.' },
  { url: 'http://127.0.0.1:3000/nl/konsten-att-valja-ratt-linje', expected: 'Ontdek hoe je de juiste lijn kiest in het alpien skiën: lees het terrein, bepaal je snelheid en neem slimme beslissingen wanneer elke meter telt.' },
  { url: 'http://127.0.0.1:3000/nl/mental-traning-for-alpinister', expected: 'Ontdek hoe mentale training jouw prestaties in het alpien skiën kan verbeteren met focus, visualisatie en rustige routines die je voorbereiden op training en races.' },
  { url: 'http://127.0.0.1:3000/en/mental-training-for-runners', expected: 'Discover powerful mental training techniques to improve your running performance. Learn how to develop focus, resilience, and a winning mindset for your next race.' },
];

function fetchText(url) {
  const lib = url.startsWith('https') ? https : http;
  return new Promise((resolve, reject) => {
    const req = lib.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve(fetchText(new URL(res.headers.location, url).toString()));
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
  });
}

function extractDescription(html) {
  const matches = [
    html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i),
    html.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i),
    html.match(/<meta\s+name=["']twitter:description["']\s+content=["']([^"']+)["']/i),
  ].filter(Boolean);

  if (!matches.length) return '<not found>';
  return matches[0][1];
}

(async () => {
  let allPass = true;
  for (const { url, expected } of targets) {
    const html = await fetchText(url);
    const actual = extractDescription(html);
    const pass = actual === expected;
    console.log(`URL: ${url}`);
    console.log(`EXPECTED: ${expected}`);
    console.log(`ACTUAL:   ${actual}`);
    console.log(`RESULT:   ${pass ? 'PASS' : 'FAIL'}`);
    console.log('---');
    if (!pass) allPass = false;
  }

  if (!allPass) process.exitCode = 1;
})();
