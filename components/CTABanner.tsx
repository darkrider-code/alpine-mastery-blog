"use client";

import { useLanguage } from "@/components/LanguageProvider";

const FREE_ANALYSIS_URL = "https://alpine.masteryhub.se/free-analysis";
const CREATE_ACCOUNT_URL = "https://alpine.masteryhub.se/auth?redirect=/membership/checkout?cycle=monthly";

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
      <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
        <a
          href={FREE_ANALYSIS_URL}
          className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-lg font-bold text-bg-primary transition hover:bg-accent-hover"
        >
          Testa gratis analys
        </a>
        <a
          href={CREATE_ACCOUNT_URL}
          className="inline-flex items-center justify-center rounded-xl border border-accent px-8 py-4 text-lg font-semibold text-accent transition hover:bg-accent/10"
        >
          Skapa konto
        </a>
      </div>
    </section>
  );
}
