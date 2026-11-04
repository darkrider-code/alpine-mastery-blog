import { createHash, timingSafeEqual } from "node:crypto";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { cp, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import { buildLink } from "../../content-factory/src/links";
import type { Locale } from "../../content-factory/src/types";
import config from "../../content-factory/config.json";
import { adminPage } from "./view";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;
const run = promisify(execFile);
const factory = join(process.cwd(), "content-factory");
const articles = join(process.cwd(), "content/posts");
const locales = ["sv","en","no","da","fi","de","fr","nl"];
const headers = { "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex, nofollow", "X-Frame-Options": "DENY", "Referrer-Policy": "no-referrer" };
function guard(request: Request) {
  const password = process.env.CONTENT_FACTORY_ADMIN_PASSWORD;
  if (!password) return new Response("Admin är inte konfigurerad.", {status:503,headers});
  const expected = "Basic " + Buffer.from("admin:" + password).toString("base64");
  const digest = (value:string) => createHash("sha256").update(value).digest();
  if (!timingSafeEqual(digest(expected),digest(request.headers.get("authorization") || "")))
    return new Response("Logga in för att öppna innehållsfabriken.",{status:401,headers:{...headers,"WWW-Authenticate":'Basic realm="Alpine Mastery admin"'}});
}
async function slugs() {
  return (await readdir(articles,{withFileTypes:true})).filter(item=>item.isDirectory() && /^[a-z0-9-]+$/.test(item.name)).map(item=>item.name).sort();
}
export async function GET(request:Request) {
  return guard(request) ?? new Response(adminPage(await slugs(),locales),{headers:{...headers,"Content-Type":"text/html; charset=utf-8"}});
}
export async function POST(request:Request) {
  const denial = guard(request);
  if (denial) return denial;
  const json = (body:unknown,status=200)=>Response.json(body,{status,headers});
  if (request.headers.get("origin") !== new URL(request.url).origin || request.headers.get("content-type")?.split(";")[0] !== "application/json") return json({error:"Ogiltigt anrop."},403);
  const raw = await request.text();
  if (raw.length > 20000) return json({error:"Texten är för lång."},413);
  let input;
  try { input = JSON.parse(raw); } catch { return json({error:"Ogiltiga uppgifter."},400); }
  if (!input || !locales.includes(input.locale)) return json({error:"Välj ett språk."},400);
  const {action,locale,slug,thread,channel} = input;
  if (action === "reply" ? typeof thread !== "string" || !thread.trim() || !["reddit","facebook","x"].includes(channel) : !["draft","check","excerpt"].includes(action) || !(await slugs()).includes(slug)) return json({error:"Kontrollera formuläret."},400);
  if (action === "excerpt") {
    const article = matter(await readFile(join(articles,slug,locale+".mdx"),"utf8"));
    const description = article.data.description;
    if (typeof description !== "string" || !description.trim()) return json({error:"Artikeln saknar en ingress."},422);
    const language = locale as Locale;
    const link = buildLink({ kind:"article",slug,locale:language,channel:"facebook" });
    const text = [description.trim(),config.disclosures[language],link].join("\n\n");
    return json({queue:[{slug,locale,channel:"facebook",status:"needs_review",output_file:"artikelutdrag.txt",text,link}],audit:{metod:"Artikelns egen ingress. Granska före användning.",artikel:slug,ingress:description}});
  }
  const dir = await mkdtemp(join(tmpdir(),"alpine-admin-"));
  try {
    await Promise.all(["config.json","prompts"].map(name=>cp(join(factory,name),join(dir,name),{recursive:true})));
    if(action==="reply") await writeFile(join(dir,"thread.txt"),thread);
    const args = action==="reply" ? ["reply","--file",join(dir,"thread.txt"),"--locale",locale,"--channel",channel] : ["draft","--slug",slug,"--locales",locale,...(action==="check"?["--dry-run"]:[])];
    const {stdout} = await run(process.execPath,[join(factory,"runtime/cli.mjs"),...args],{cwd:dir,env:{...process.env,FACTORY_JOB_DIR:dir,FACTORY_ARTICLES:articles},timeout:250000,maxBuffer:2000000});
    if(action==="check") return json({message:stdout});
    if(action==="reply") return json({reply:JSON.parse(stdout.split("\nValidation warnings:")[0])});
    const queue = JSON.parse(await readFile(join(dir,"queue.json"),"utf8"));
    const audit = JSON.parse(await readFile(join(dir,queue[0].output_file,"..","claims.json"),"utf8"));
    return json({queue,audit});
  } catch(error) {
    const detail = String((error as {stderr?:string}).stderr || "");
    const status = detail.match(/Gemini request failed with HTTP (\d{3})/)?.[1];
    return json({error:status ? "Gemini svarade med HTTP "+status+". Försök igen senare." : "Körningen kunde inte slutföras. Kontrollera konfigurationen eller försök igen."},502);
  } finally { await rm(dir,{recursive:true,force:true}); }
}
