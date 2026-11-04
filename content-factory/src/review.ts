import { readFile, writeFile } from "node:fs/promises";
import { QUEUE_PATH, FACTORY_ROOT } from "./paths.js";
import type { QueueItem } from "./types.js";

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/gu, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character] ?? character);
}

async function readQueue(): Promise<QueueItem[]> {
  try {
    const parsed: unknown = JSON.parse(await readFile(QUEUE_PATH, "utf8"));
    if (!Array.isArray(parsed)) throw new Error("queue.json must contain an array.");
    return parsed as QueueItem[];
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") return [];
    throw error;
  }
}

export async function generateReview(): Promise<void> {
  const queue = await readQueue();
  const entries = queue.map((item) => {
    const fields = Object.entries({ ...item.fields, link: item.link }).map(([name, value], index) => {
      const fieldId = `${item.id}-${index}`;
      return `
      <section class="field">
        <h3>${escapeHtml(name)}</h3>
        <textarea id="${escapeHtml(fieldId)}" readonly rows="4">${escapeHtml(value)}</textarea>
        <button type="button" data-copy="${escapeHtml(fieldId)}">Copy ${escapeHtml(name)}</button>
      </section>`;
    }).join("");
    const claims = item.claims.map((claim) => `
      <li class="${claim.supported ? "supported" : "unsupported"}">
        <strong>${claim.supported ? "Supported" : "Needs review"}</strong>
        <span>${escapeHtml(claim.field)}: ${escapeHtml(claim.sentence)}</span>
        <small>Source (${escapeHtml(claim.source)}): ${escapeHtml(claim.checkedPassage || claim.passage)}</small>
        <small>${escapeHtml(claim.reason)}</small>
      </li>`).join("");
    return `
      <article>
        <header>
          <div><h2>${escapeHtml(item.channel)} · ${escapeHtml(item.locale)} · ${escapeHtml(item.slug)}</h2><code>${escapeHtml(item.id)}</code></div>
          <span class="status ${escapeHtml(item.status)}">${escapeHtml(item.status)}</span>
        </header>
        <p><a href="${escapeHtml(item.link)}">${escapeHtml(item.link)}</a></p>
        ${item.media_file ? `<p>Media: ${escapeHtml(item.media_file)}</p>` : ""}
        ${fields}
        <details><summary>Claims (${item.claims.length})</summary><ul>${claims}</ul></details>
      </article>`;
  }).join("\n");
  const html = `<!doctype html>
<html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<title>Alpine Mastery draft review</title>
<style>
body{margin:0 auto;max-width:980px;padding:2rem;font:16px/1.5 system-ui;background:#171a1d;color:#f3f1ec}
article{padding:1.5rem;margin:1rem 0;border:1px solid #48524c;border-radius:12px}
header{display:flex;justify-content:space-between;align-items:center;gap:1rem}h2{font-size:1.2rem}
.status{padding:.25rem .6rem;border-radius:1rem;background:#343a36}.needs_review{background:#664d22}.approved{background:#235744}.published{background:#354a66}
a{color:#b6c4bc;overflow-wrap:anywhere}.field{margin:1rem 0}textarea{display:block;width:100%;margin:.4rem 0;padding:.6rem;box-sizing:border-box;color:inherit;background:#22272a;border:1px solid #48524c}
button{padding:.45rem .8rem;background:#b6c4bc;color:#171a1d;border:0;border-radius:5px;cursor:pointer}
li{margin:.8rem 0}.supported strong{color:#8ed3a8}.unsupported strong{color:#ffd27a}small{display:block;color:#b6c4bc}
</style>
<h1>Draft review</h1>
<p>Drafts are not published. Approval is manual.</p>
${entries || "<p>No drafts in the queue.</p>"}
<script>
document.addEventListener("click", async event => {
  const button = event.target.closest("button[data-copy]");
  if (!button) return;
  const field = document.getElementById(button.dataset.copy);
  if (!(field instanceof HTMLTextAreaElement)) return;
  try {
    await navigator.clipboard.writeText(field.value);
  } catch {
    field.select();
    if (!document.execCommand("copy")) {
      button.textContent = "Copy failed";
      return;
    }
  }
  const original = button.textContent;
  button.textContent = "Copied";
  setTimeout(() => { button.textContent = original; }, 1200);
});
</script></html>`;
  await writeFile(`${FACTORY_ROOT}/review.html`, html, "utf8");
  console.log(`Wrote content-factory/review.html with ${queue.length} queued item(s).`);
}
