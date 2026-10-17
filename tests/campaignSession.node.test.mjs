import test from "node:test";
import assert from "node:assert/strict";
import { resolve } from "node:path";
import { loadTs } from "./loadTs.mjs";
const { createCampaignSession, buildBlogLink }=await loadTs(resolve("lib/campaignSession.ts"));
const { buildAppLink }=await loadTs(resolve("lib/appLinks.ts"));
const campaign="?utm_source=instagram&utm_medium=social&utm_campaign=test&utm_content=parent&utm_term=x&email=private";
function memoryStorage(){const values=new Map();return {getItem:key=>values.get(key)??null,setItem:(key,value)=>values.set(key,value)};}
function assertHandoff(search,locale="nl"){
 const url=new URL(buildAppLink("https://alpine.masteryhub.se/free-analysis",{search,locale,slug:"ai-skidanalys",placement:"header_mobile"}));
 for(const key of ["utm_source","utm_medium","utm_campaign","utm_content","utm_term"]) assert.equal(url.searchParams.get(key),new URLSearchParams(campaign).get(key));
 assert.equal(url.searchParams.get("blog_slug"),"ai-skidanalys");assert.equal(url.searchParams.get("blog_placement"),"header_mobile");
 assert.equal(url.searchParams.get("blog_locale"),locale);assert.equal(url.searchParams.get("lang"),locale);assert.equal(url.searchParams.get("email"),null);
}
test("URL acquisition is available before storage and is persisted when permitted",()=>{
 const store=memoryStorage(),session=createCampaignSession();let reads=0;
 assertHandoff(session.read(campaign,()=>{reads++;return store;}));assert.equal(reads,0);
 session.remember(campaign,()=>store);
 assertHandoff(createCampaignSession().read("",()=>store));
});
test("throwing storage getter or methods never discards URL or in-memory campaign",()=>{
 const session=createCampaignSession();const blocked=()=>{throw new Error("storage blocked");};
 assertHandoff(session.read(campaign,blocked));session.remember(campaign,blocked);assertHandoff(session.read("",blocked));
 const methods=()=>({getItem(){throw Error("blocked");},setItem(){throw Error("blocked");}});
 const other=createCampaignSession();assertHandoff(other.read(campaign,methods));other.remember(campaign,methods);assertHandoff(other.read("",methods));
});
for(const blocked of [false,true]) test(`internal navigation, language change and reload retain campaign (storage blocked=${blocked})`,()=>{
 const store=memoryStorage();const access=()=>{if(blocked) throw Error("blocked");return store;};
 let session=createCampaignSession();session.remember(campaign,access);
 const postHref=buildBlogLink("/sv/example?category=technique#next",session.read(campaign,access));
 let location=new URL(postHref,"https://blog.masteryhub.se");assert.equal(location.searchParams.get("email"),null);assert.equal(location.hash,"#next");assert.equal(location.searchParams.get("category"),"technique");
 // A plain anchor may create a new document: memory resets, URL still carries the campaign.
 session=createCampaignSession();assertHandoff(session.read(location.search,access));session.remember(location.search,access);
 const landing=buildBlogLink("/nl/ai-skidanalys",session.read(location.search,access));location=new URL(landing,"https://blog.masteryhub.se");
 assertHandoff(createCampaignSession().read(location.search,access));
 // A full reload starts a fresh session object with the same URL.
 assertHandoff(createCampaignSession().read(location.search,access));
});
test("internal URL decoration preserves explicit new campaigns and external/hash destinations",()=>{
 for(const href of ["https://other.test/", "//other.test/", "#pricing", "mailto:info@example.test", "/sv?utm_source=new"]) assert.equal(buildBlogLink(href,campaign),href);
 const session=createCampaignSession();session.remember("?utm_source=old",()=>memoryStorage());
 assert.equal(new URLSearchParams(session.read("?utm_source=new",()=>memoryStorage())).get("utm_source"),"new");
});
