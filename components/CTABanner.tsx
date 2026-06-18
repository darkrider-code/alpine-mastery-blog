"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function CTABanner() {
  const { t } = useLanguage();

  return (
    <section className="rounded-2xl border border-accent/30 bg-gradient-to-br from-bg-secondary to-bg-card p-8 text-center sm:p-10">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">
        {t("site.homeTitle")}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-text-secondary">
        {t("site.homeDescription")}
      </p>
      <a
        href="https://alpine.masteryhub.se"
        className="mt-6 inline-block rounded-xl bg-accent px-8 py-4 text-lg font-bold text-bg-primary transition hover:bg-accent-hover"
      >
        {t("site.cta")}
      </a>
    </section>
  );
}
