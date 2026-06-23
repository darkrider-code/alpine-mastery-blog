"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto border-t border-border bg-bg-secondary py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center text-sm text-text-secondary sm:px-6">
        <p>{t("site.copyright")}</p>
        <div className="flex gap-4">
          <a href="https://masteryhub.se" className="transition hover:text-accent">
            masteryhub.se
          </a>
        </div>
      </div>
    </footer>
  );
}