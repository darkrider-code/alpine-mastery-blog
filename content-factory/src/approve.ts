import { readFile, writeFile } from "node:fs/promises";
import { QUEUE_PATH } from "./paths.js";
import type { QueueItem } from "./types.js";

export async function approveItem(id: string | undefined): Promise<void> {
  if (!id) throw new Error("Usage: npm run approve -- <id>");
  const parsed: unknown = JSON.parse(await readFile(QUEUE_PATH, "utf8"));
  if (!Array.isArray(parsed)) throw new Error("queue.json must contain an array.");
  const queue = parsed as QueueItem[];
  const item = queue.find((entry) => entry.id === id);
  if (!item) throw new Error(`Queue item not found: ${id}`);
  if (item.status === "published") throw new Error("Published items cannot be re-approved.");
  item.status = "approved";
  await writeFile(QUEUE_PATH, `${JSON.stringify(queue, null, 2)}\n`, "utf8");
  console.log(`Approved ${id}. No content was published.`);
}
