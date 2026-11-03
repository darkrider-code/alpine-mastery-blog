import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { FACTORY_ROOT, QUEUE_PATH } from "./paths.js";
import type { QueueItem } from "./types.js";

function csvCell(value: string): string {
  return `"${value.replace(/"/gu, '""')}"`;
}

export async function exportApproved(): Promise<void> {
  const parsed: unknown = JSON.parse(await readFile(QUEUE_PATH, "utf8"));
  if (!Array.isArray(parsed)) throw new Error("queue.json must contain an array.");
  const approved = (parsed as QueueItem[]).filter((item) => item.status === "approved");
  const rows = [
    ["date", "channel", "text", "link", "media_file", "status"].join(","),
    ...approved.map((item) => [
      "",
      item.channel,
      item.text,
      item.link,
      item.media_file,
      item.status,
    ].map(csvCell).join(",")),
  ];
  await writeFile(resolve(FACTORY_ROOT, "schedule.csv"), `${rows.join("\n")}\n`, "utf8");
  console.log(`Wrote content-factory/schedule.csv with ${approved.length} approved item(s).`);
}
