"use client";

import { useLanguage } from "@/components/LanguageProvider";

const FREE_ANALYSIS_URL = "https://alpine.masteryhub.se/free-analysis";
const CREATE_ACCOUNT_URL = "https://alpine.masteryhub.se/auth?redirect=/membership/checkout?cycle=monthly";

export default function CTABanner() {
  const { t } = useLanguage();

  return (
    <section className="mt-16 p-8 sm:p-10 rounded-2xl
                bg-gradient-to-br from-bg-secondary to-bg-card
                border border-accent/30 text-center">
      <p className="text-xs font-semibold text-accent uppercase
                tracking-widest mb-3">
        Masteryhub Training Lab
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
        {t("site.homeTitle")}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-text-secondary">
        {t("site.homeDescription")}
      </p>
      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <a
          href={FREE_ANALYSIS_URL}
          className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-base font-bold text-bg-primary transition hover:bg-accent-hover"
        >
          Testa gratis analys
        </a>
        <a
          href={CREATE_ACCOUNT_URL}
          className="inline-flex items-center justify-center rounded-xl border border-accent px-8 py-4 text-base font-semibold text-accent transition hover:bg-accent/10"
        >
          Skapa konto
        </a>
      </div>
    </section>
  );
}