import test from 'node:test';
import assert from 'node:assert/strict';
import ts from 'typescript';
import {readFile} from 'node:fs/promises';
import {contentModules,locales} from './contentModules.mjs';

test('article indexes and sitemap contain real locale-specific files',async()=>{
 const {posts,sitemap}=await contentModules();
 const entries=sitemap();
 for(const slug of posts.getAllSlugs())for(const locale of locales){
  assert.equal(posts.getPostBySlug(slug,locale)?.locale,locale);
  assert.ok(entries.some(entry=>entry.url==='https://blog.masteryhub.se/'+locale+'/'+slug));
 }
 assert.equal(posts.getPostBySlug('../biomekaniken-bakom-svangen','sv'),null);
 assert.equal(posts.getPostBySlug('filma-skidteknik','xx'),null);
 assert.equal(posts.getPostBySlug('unpublished-article','en'),null);
});

test('all carving article translations include the new film guidance before AI-video analysis',async()=>{
 const expected={
  da:['## Tjekliste: Gennemgå videoen og vælg dit næste trin','## Fra skivideo til et konkret spørgsmål','## Sammenlign to videoer uden at drage forhastede konklusioner','## For forældre: lad barnet begynde med sin egen oplevelse','## Prøv med din egen skivideo','## Hvad kan AI-videoanalyse vise, og hvad kan den ikke måle præcist?','Prøv en gratis skianalyse','AI-feedback kan være forkert'],
  de:['## Checkliste: Sehen Sie sich das Video an und wählen Sie Ihren nächsten Schritt','## Vom Skivideo zu einer konkreten Frage','## Zwei Videos vergleichen, ohne vorschnelle Schlüsse zu ziehen','## Für Eltern: Lassen Sie Ihr Kind mit der eigenen Erfahrung beginnen','## Probieren Sie es mit Ihrem eigenen Skivideo aus','## Was kann die KI-Videoanalyse zeigen und was kann sie nicht präzise messen?','Probieren Sie eine kostenlose Skianalyse aus','KI-Feedback kann falsch sein'],
  en:['## Checklist: review the video and choose your next step','## From ski video to a useful question','## Compare two videos without jumping to conclusions','## For parents: let your child start with their own experience','## Try it with your own ski video','## What can AI video analysis show, and what can it not measure precisely?','Try a free ski analysis','AI feedback can be wrong'],
  fi:['## Tarkistuslista: katso video ja valitse seuraava vaihe','## Hiihtovideosta konkreettiseksi kysymykseksi','## Vertaa kahta videota tekemättä liian nopeita johtopäätöksiä','## Vanhemmille: anna lapsen aloittaa omasta kokemuksestaan','## Kokeile omalla hiihtovideollasi','## Mitä tekoälyvideoanalyysi voi näyttää ja mitä se ei voi mitata tarkasti?','Kokeile ilmaista suksianalyysiä','Tekoälyn palaute voi olla väärää'],
  fr:['## Checklist : examinez la vidéo et choisissez votre prochaine étape','## De la vidéo de ski à une question concrète','## Comparer deux vidéos sans tirer de conclusions hâtives','## Parents : laissez votre enfant commencer par son ressenti','## Essayez avec votre propre vidéo de ski','## Que peut montrer l’analyse vidéo de l’IA et qu’est-ce qu’elle ne peut pas mesurer avec précision ?','Essayez une analyse de ski gratuite','Les retours de l’IA peuvent être erronés'],
  nl:['## Checklist: bekijk de video en kies je volgende stap','## Van skivideo naar een concrete vraag','## Vergelijk twee video’s zonder te snel conclusies te trekken','## Voor ouders: laat uw kind beginnen met de eigen ervaring','## Probeer het met uw eigen skivideo','## Wat kan AI-videoanalyse laten zien, en wat kan het niet precies meten?','Probeer een gratis skianalyse','AI-feedback kan onjuist zijn'],
  no:['## Sjekkliste: Se gjennom videoen og velg neste trinn','## Fra skivideo til et konkret spørsmål','## Sammenlign to videoer uten å trekke forhastede konklusjoner','## For foreldre: la barnet begynne med sin egen opplevelse','## Prøv med din egen skivideo','## Hva kan AI-videoanalyse vise, og hva kan den ikke måle nøyaktig?','Prøv en gratis skianalyse','AI-tilbakemelding kan være feil'],
  sv:['## Checklista: granska filmen och välj ett nästa steg','## Från skidfilm till en konkret fråga','## Jämför två filmer utan att dra för snabba slutsatser','## För föräldrar: låt barnet börja med sin upplevelse','## Prova med din egen skidfilm','## Vad kan AI-videoanalys säga – och vad kan den inte mäta exakt?','Prova en gratis skidanalys','AI-feedback kan vara fel'],
 };
 for(const [locale,headings] of Object.entries(expected)){
  const source=await readFile('content/posts/biomekaniken-bakom-svangen/'+locale+'.mdx','utf8');
  const positions=headings.slice(0,6).map(heading=>source.indexOf(heading));
  assert.ok(positions.every(index=>index>=0),locale+' contains all translated sections');
  assert.deepEqual(positions,[...positions].sort((a,b)=>a-b),locale+' preserves section order');
  assert.match(source,new RegExp('<InlineCTA placement="carving_example_video">[^<]+</InlineCTA>'),locale+' tracks the new CTA');
  assert.ok(source.includes(headings[6]),locale+' translates the CTA');
  assert.ok(source.includes(headings[7]),locale+' retains the AI-feedback caution');
  assert.match(source,/updatedAt: ['"]2026-11-14['"]/,locale+' updates sitemap date');
 }
});

test('metadata and static paths follow actual translations; missing translations redirect',async()=>{
 const {posts}=await contentModules();
 const file='app/[locale]/[slug]/page.tsx';
 const source=await readFile(file,'utf8');
 const ast=ts.createSourceFile(file,source,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
 const names=['generateStaticParams','resolvePost','generateMetadata','warnIfInvalidDescription'];
 const functions=ast.statements.filter(node=>ts.isFunctionDeclaration(node)&&names.includes(node.name?.text)).map(node=>node.getText(ast)).join('\n');
 const code=ts.transpileModule(functions,{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
 const exports={};
 // A hypothetical future Swedish-only article exercises the missing-translation path
 // without adding incomplete content to the production tree.
 const fixture='translation-fixture';
 const getPost=(slug,locale)=>slug===fixture?(locale==='sv'?{...posts.getPostBySlug('biomekaniken-bakom-svangen','sv'),slug}:null):posts.getPostBySlug(slug,locale);
 const getLocales=slug=>slug===fixture?['sv']:posts.getPostLocales(slug);
 new Function('exports','getAllSlugs','getPostLocales','getPostBySlug','SUPPORTED_LOCALES','getOpenGraphLocale','notFound','permanentRedirect',code)(exports,
  ()=>[...posts.getAllSlugs(),fixture],getLocales,getPost,locales,locale=>locale,
  ()=>{throw new Error('NOT_FOUND');},path=>{throw new Error('REDIRECT:'+path);});
 const params=exports.generateStaticParams();
 assert.ok(params.some(p=>p.locale==='sv'&&p.slug===fixture));
 assert.ok(!params.some(p=>p.locale==='en'&&p.slug===fixture));
 for(const slug of posts.getAllSlugs())for(const locale of posts.getPostLocales(slug)){
  const meta=await exports.generateMetadata({params:Promise.resolve({slug,locale})});
  assert.equal(meta.alternates.canonical,'https://blog.masteryhub.se/'+locale+'/'+slug);
  assert.deepEqual(Object.keys(meta.alternates.languages).filter(key=>key!=='x-default').sort(),posts.getPostLocales(slug).sort());
 }
 await assert.rejects(exports.generateMetadata({params:Promise.resolve({slug:fixture,locale:'en'})}),/REDIRECT:\/sv\/translation-fixture/);
 await assert.rejects(exports.generateMetadata({params:Promise.resolve({slug:'does-not-exist',locale:'sv'})}),/NOT_FOUND/);
});
