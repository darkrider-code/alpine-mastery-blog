import ts from "typescript";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { loadTs } from "./loadTs.mjs";
// Execute only the real locale data and metadata functions, without importing JSX/Next runtime.
export async function pageSource(route) {
 const filename=resolve(`app/[locale]/${route}/page.tsx`);
 const source=await readFile(filename,"utf8");
 const ast=ts.createSourceFile(filename,source,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
 let copy;const functions=[];
 for(const node of ast.statements){
  if(ts.isVariableStatement(node)) for(const declaration of node.declarationList.declarations) if(declaration.name.getText(ast)==="localeContent") copy=declaration.initializer.getText(ast);
  if(ts.isFunctionDeclaration(node) && ["getLocaleCopy","generateMetadata"].includes(node.name?.text)) functions.push(node.getText(ast));
 }
 if(!copy || functions.length!==2) throw new Error("Page fixture no longer matches source");
 const code=ts.transpileModule(`export const localeContent=${copy};\n${functions.join("\n")}`,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
 const exports={};const { individualCopy }=await loadTs(resolve("lib/individualCopy.ts"));
 const locales=["sv","en","no","da","fi","de","fr","nl"];
 const og={sv:"sv_SE",en:"en_US",no:"nb_NO",da:"da_DK",fi:"fi_FI",de:"de_DE",fr:"fr_FR",nl:"nl_NL"};
 new Function("exports","SUPPORTED_LOCALES","individualCopy","getOpenGraphLocale",code)(exports,locales,individualCopy,(locale)=>og[locale]);
 return { copy:exports.localeContent, metadata:exports.generateMetadata, source };
}
