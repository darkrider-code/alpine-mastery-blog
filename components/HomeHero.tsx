"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function HomeHero() {
  const { t } = useLanguage();

  return (
    <header className="mb-10 max-w-2xl">
      <h1 className="text-4xl font-bold text-white sm:text-5xl">
        {t("site.homeTitle")}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-text-secondary">
        {t("site.homeDescription")}
      </p>
    </header>
  );
}
