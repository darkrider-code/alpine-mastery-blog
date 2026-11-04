const url = "https://blog.masteryhub.se/admin";
const access = "Basic "+Buffer.from("admin:"+process.env.CONTENT_FACTORY_ADMIN_PASSWORD).toString("base64");
const anon = await fetch(url); console.log("ADMIN anonymous",anon.status); if(anon.status!==401) throw Error("guard");
const page=await fetch(url,{headers:{Authorization:access}}); const html=await page.text(); console.log("ADMIN signed in",page.status,html.includes("Granskningskö")); if(page.status!==200||!html.includes("Granskningskö"))throw Error("page");
const call=async(action,origin="https://blog.masteryhub.se")=>{const r=await fetch(url,{method:"POST",headers:{Authorization:access,Origin:origin,"Content-Type":"application/json"},body:JSON.stringify({action,locale:"sv",slug:"biomekaniken-bakom-svangen"})});return [r.status,await r.json()]};
let [s]=await call("check","https://invalid.example");console.log("ADMIN cross-origin",s);if(s!==403)throw Error("origin");
let [status,check]=await call("check");console.log("ADMIN check",status,check.message?.slice(0,65),check.error);if(status!==200||!check.message?.includes("Dry run"))throw Error("worker");
let [ds,draft]=await call("draft");console.log("ADMIN draft",ds,draft.queue?.length,draft.audit?.status,draft.error);
if(ds!==200 || !draft.queue?.length) throw Error("Draft generation failed.");
