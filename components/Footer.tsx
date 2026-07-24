"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-bg-secondary py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center text-sm text-text-secondary sm:px-6">
        <p>© {currentYear} Masteryhub</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="https://masteryhub.se" className="transition hover:text-accent">
            masteryhub.se
          </a>
          <a href="https://alpine.masteryhub.se" className="transition hover:text-accent">
            {t("site.footerAlpineCta")}
          </a>
        </div>
      </div>
    </footer>
  );
}