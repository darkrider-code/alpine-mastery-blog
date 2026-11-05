"use client";

import { useState } from "react";
import { buildPartnerLink, isPartnerSlug, partnerSlug, PARTNER_CHANNELS, type PartnerChannel } from "@/lib/appLinks";
import type { PartnerGeneratorCopy } from "@/lib/partnerCopy";

export default function PartnerLinkGenerator({ copy }: { copy: PartnerGeneratorCopy }) {
  const [name, setName] = useState("");
  const [channel, setChannel] = useState<PartnerChannel>("lesson_handout");
  const [message, setMessage] = useState("");
  const slug = partnerSlug(name);
  const valid = isPartnerSlug(slug);

  async function copyLink(audience: "adult" | "parent") {
    if (!valid) return;
    try {
      await navigator.clipboard.writeText(buildPartnerLink(slug, channel, audience));
      setMessage(copy.copied);
    } catch {
      setMessage(copy.copyFailed);
    }
  }

  return (
    <section className="rounded-2xl border border-border bg-bg-card p-5 sm:p-8" aria-labelledby="partner-generator-title">
      <h2 id="partner-generator-title" className="text-2xl font-bold text-white">{copy.title}</h2>
      <p id="partner-privacy" className="mt-3 text-sm leading-6 text-text-secondary">{copy.privacy}</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="partner-name" className="mb-2 block font-medium">{copy.name}</label>
          <input id="partner-name" type="text" value={name} maxLength={128} autoComplete="off" spellCheck={false}
            aria-describedby="partner-privacy partner-slug partner-error" aria-invalid={name.length > 0 && !valid}
            onChange={(event) => { setName(event.target.value); setMessage(""); }}
            className="w-full rounded-lg border border-border bg-bg-primary p-3 text-white focus-visible:outline-2 focus-visible:outline-accent" />
        </div>
        <div>
          <label htmlFor="partner-channel" className="mb-2 block font-medium">{copy.channel}</label>
          <select id="partner-channel" value={channel}
            onChange={(event) => { setChannel(event.target.value as PartnerChannel); setMessage(""); }}
            className="w-full rounded-lg border border-border bg-bg-primary p-3 text-white focus-visible:outline-2 focus-visible:outline-accent">
            {PARTNER_CHANNELS.map((value, index) => <option key={value} value={value}>{copy.channels[index]}</option>)}
          </select>
        </div>
      </div>
      <p id="partner-slug" className="mt-3 break-all text-sm text-text-secondary">{copy.slug} <code>{slug || "—"}</code></p>
      <p id="partner-error" className="mt-2 text-sm text-text-secondary" aria-live="polite">{name.length > 0 && !valid ? copy.invalid : ""}</p>
      <div className="mt-5 space-y-6">
        {(["adult", "parent"] as const).map((audience) => (
          <div key={audience}>
            <label htmlFor={`partner-${audience}`} className="mb-2 block text-sm leading-6">{copy[audience]}</label>
            <textarea id={`partner-${audience}`} readOnly rows={3}
              value={valid ? buildPartnerLink(slug, channel, audience) : ""}
              className="w-full resize-y rounded-lg border border-border bg-bg-primary p-3 text-sm text-text-secondary"
              onFocus={(event) => event.target.select()} />
            <button type="button" disabled={!valid} onClick={() => copyLink(audience)}
              className="mt-2 min-h-11 rounded-lg border border-accent px-5 py-2 font-medium text-accent disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-accent">
              {copy.copy}
            </button>
          </div>
        ))}
      </div>
      <p className="mt-3 min-h-6 text-sm text-text-secondary" role="status">{message}</p>
    </section>
  );
}
