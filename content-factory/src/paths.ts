import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const FACTORY_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
export const REPO_ROOT = resolve(FACTORY_ROOT, "..");
export const CONTENT_ROOT = resolve(REPO_ROOT, "content", "posts");
export const CONFIG_PATH = resolve(FACTORY_ROOT, "config.json");
export const QUEUE_PATH = resolve(FACTORY_ROOT, "queue.json");
