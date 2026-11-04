import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const FACTORY_ROOT = process.env.FACTORY_JOB_DIR ?? resolve(dirname(fileURLToPath(import.meta.url)), "..");
export const REPO_ROOT = resolve(FACTORY_ROOT, "..");
export const CONTENT_ROOT = process.env.FACTORY_ARTICLES ?? resolve(REPO_ROOT, "content", "posts");
export const CONFIG_PATH = resolve(FACTORY_ROOT, "config.json");
export const QUEUE_PATH = resolve(FACTORY_ROOT, "queue.json");
