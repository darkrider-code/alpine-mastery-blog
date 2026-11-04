import { build } from "esbuild";
await build({ entryPoints: ["content-factory/src/cli.ts"], outfile: "content-factory/runtime/cli.mjs", bundle: true, platform: "node", format: "esm", target: "node22", banner: { js: 'import {createRequire as makeRequire} from "node:module"; const require = makeRequire(import.meta.url);' } });
