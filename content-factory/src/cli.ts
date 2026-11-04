import { approveItem } from "./approve.js";
import { runDraft } from "./draft.js";
import { exportApproved } from "./export.js";
import { runReply } from "./reply.js";
import { generateReview } from "./review.js";

async function main(): Promise<void> {
  const [command, ...args] = process.argv.slice(2);
  if (command === "draft") await runDraft(args);
  else if (command === "review") await generateReview();
  else if (command === "approve") await approveItem(args[0]);
  else if (command === "export") await exportApproved();
  else if (command === "reply") await runReply(args);
  else throw new Error("Expected one of: draft, review, approve, export, reply.");
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`content-factory: ${message}`);
  process.exitCode = 1;
});
