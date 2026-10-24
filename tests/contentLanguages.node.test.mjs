import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import matter from 'gray-matter';
import {franc} from 'franc';

const expected={sv:'swe',en:'eng',no:'nob',da:'dan',fi:'fin',de:'deu',fr:'fra',nl:'nld'};
const plain=content=>content.replace(/<[^>]*>|https?:\/\/\S+|\]\([^)]*\)/g,' ');

test('every article has eight complete bodies in the declared languages',async()=>{
 const slugs=(await readdir('content/posts',{withFileTypes:true})).filter(entry=>entry.isDirectory()).map(entry=>entry.name);
 for(const slug of slugs){
  const bodies=new Set();
  for(const [locale,language] of Object.entries(expected)){
   const file='content/posts/'+slug+'/'+locale+'.mdx';
   const {data,content}=matter(await readFile(file,'utf8'));
   assert.ok(data.title?.trim(),file+' title');assert.ok(data.description?.trim(),file+' description');
   const body=plain(content);assert.ok(body.trim().length>400,file+' complete body');
   assert.equal(franc(body),language,file+' body language');
   const fingerprint=body.toLowerCase().replace(/[^\p{L}]+/gu,' ');
   assert.ok(!bodies.has(fingerprint),file+' repeats another language');bodies.add(fingerprint);
   assert.doesNotMatch(content,/ZXQ\d+QXZ|DIAGNOSTIC:/,file+' unresolved placeholder');
   for(const match of content.matchAll(/\]\(\/([a-z]{2})\//g))assert.equal(match[1],locale,file+' internal link locale');
  }
 }
});
