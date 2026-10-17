import ts from "typescript";
import { readFile } from "node:fs/promises";
import { resolve, dirname, extname } from "node:path";
import { Buffer } from "node:buffer";
async function asUrl(filename) {
  let code = ts.transpileModule(await readFile(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 }
  }).outputText;
  for (const match of [...code.matchAll(/from ["'](\.[^"']+)["']/g)]) {
    const target = resolve(dirname(filename), match[1] + (extname(match[1]) ? "" : ".ts"));
    code = code.replace(match[0], `from "${await asUrl(target)}"`);
  }
  return "data:text/javascript;base64," + Buffer.from(code).toString("base64");
}
export async function loadTs(filename) { return import(await asUrl(filename)); }
