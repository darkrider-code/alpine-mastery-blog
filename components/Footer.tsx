"use client";

import { useLanguage } from "@/components/LanguageProvider";

const FREE_ANALYSIS_URL = "https://alpine.masteryhub.se/free-analysis";
const CREATE_ACCOUNT_URL = "https://alpine.masteryhub.se/auth?redirect=/membership/checkout?cycle=monthly";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto border-t border-border bg-bg-secondary py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center text-sm text-text-secondary sm:px-6">
        <p>{t("site.copyright")}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={FREE_ANALYSIS_URL} className="transition hover:text-accent">
            Testa gratis analys
          </a>
          <span aria-hidden="true">·</span>
          <a href={CREATE_ACCOUNT_URL} className="transition hover:text-accent">
            Skapa konto
          </a>
        </div>
        <div className="flex gap-4">
          <a href="https://masteryhub.se" className="transition hover:text-accent">
            masteryhub.se
          </a>
        </div>
      </div>
    </footer>
  );
}
