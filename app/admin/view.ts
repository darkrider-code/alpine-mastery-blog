export function adminPage(slugs:string[], locales:string[]) {
 const options=(values:string[])=>values.map(value=>`<option>${value}</option>`).join("");
 return `<!doctype html><html lang="sv"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Innehållsfabriken · Alpine Mastery</title>
<style>*{box-sizing:border-box}body{font:16px/1.5 system-ui,sans-serif;color:#193a3d;background:#f2f6f5;margin:0}main{max-width:890px;margin:auto;padding:32px 16px}section,article{background:white;border:1px solid #cddbd8;padding:20px;border-radius:12px;margin:14px 0}h1,h2{line-height:1.15}h1{font-size:2.5rem}label{display:block;margin:12px 0}select,textarea,button{font:inherit;padding:9px;border-radius:6px}select,textarea{width:100%;border:1px solid #8ca5a3}button{margin:4px 4px 4px 0;background:#174c4c;color:white;border:0;cursor:pointer}button:disabled{opacity:.55}pre{white-space:pre-wrap;overflow-wrap:anywhere}summary{cursor:pointer}small{color:#476363}</style>
<main><small>ALPINE MASTERY / ADMIN</small><h1>Innehållsfabriken</h1><p>Skapa utkast från en bloggartikel, kontrollera källstödet och godkänn de texter du vill exportera.</p>
<section><h2>Artikelutkast</h2><label>Artikel<select id="slug">${options(slugs)}</select></label><label>Språk för utkast och svar<select id="locale">${options(locales)}</select></label><button id="draft">Skapa utkast</button><button id="check">Provkör utan Gemini</button></section>
<section><details><summary>Svarshjälpare</summary><label>Kanal<select id="channel">${options(["reddit","facebook","x"])}</select></label><label>Klistra in diskussionen<textarea id="thread" maxlength="12000" rows="5"></textarea></label><button id="reply">Ta fram svarsförslag</button></details></section>
<pre role="status" id="status"></pre><pre id="replyText"></pre><section><h2>Granskningskö</h2><p>Utkast och godkännanden sparas i den här webbläsaren. Publicering sker manuellt.</p><button id="export">Exportera godkända till CSV</button><div id="queue"></div></section></main>
<script>
const el=id=>document.getElementById(id), key="alpine-admin-queue-v1";
let batches=JSON.parse(localStorage.getItem(key)||"[]");
const save=()=>localStorage.setItem(key,JSON.stringify(batches));
function node(parent,tag,text){const n=document.createElement(tag); n.textContent=text; parent.append(n);return n}
function render(){const root=el("queue");root.replaceChildren();if(!batches.length)node(root,"p","Kön är tom.");
 for(const batch of batches){const wrap=node(root,"article","");node(wrap,"h3",batch.queue[0].slug+" · "+batch.queue[0].locale);
 const audit=node(wrap,"details","");node(audit,"summary","Faktakontroll och validering");node(audit,"pre",JSON.stringify(batch.audit,null,2));
 for(const item of batch.queue){const card=node(wrap,"details","");node(card,"summary",item.output_file.split("/").pop()+" · "+item.status);node(card,"pre",item.text);
 const copy=node(card,"button","Kopiera");copy.onclick=()=>navigator.clipboard.writeText(item.text);
 const approve=node(card,"button",item.status==="approved"?"Ångra godkännande":"Godkänn");approve.onclick=()=>{item.status=item.status==="approved"?"needs_review":"approved";save();render()};}}
}
for(const action of ["draft","check","reply"])el(action).onclick=async()=>{const buttons=["draft","check","reply"].map(el);buttons.forEach(b=>b.disabled=true);el("status").textContent="Arbetar…";try{
 const response=await fetch("/admin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action,slug:el("slug").value,locale:el("locale").value,channel:el("channel").value,thread:action==="reply"?el("thread").value:""})});
 if(response.status===401)throw Error("Logga in igen."); const data=await response.json();
 if(!response.ok)throw Error(data.error||"Körningen misslyckades.");
 if(data.queue){batches.unshift(data);render();save()}if(data.reply)el("replyText").textContent=[data.reply.recommendation,data.reply.reason,data.reply.draftReply].filter(Boolean).join("\\n\\n");
 el("status").textContent=data.message||"Klart.";}catch(err){el("status").textContent=err.message}finally{buttons.forEach(b=>b.disabled=false)}};
el("export").onclick=()=>{const items=batches.flatMap(b=>b.queue).filter(i=>i.status==="approved");if(!items.length){el("status").textContent="Godkänn minst ett utkast först.";return}
 const cell=value=>{let s=String(value);if(/^[=+@\\-\\t\\r]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"'};
 const rows=[["date","channel","text","link","media_file","status"],...items.map(i=>["",i.channel,i.text,i.link,"",i.status])];const url=URL.createObjectURL(new Blob([rows.map(r=>r.map(cell).join(",")).join("\\r\\n")],{type:"text/csv;charset=utf-8"}));const a=document.createElement("a");a.href=url;a.download="godkanda-utkast.csv";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};
render();</script></html>`;
}
