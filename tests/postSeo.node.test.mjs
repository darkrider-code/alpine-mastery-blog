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
