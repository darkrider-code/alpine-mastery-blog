"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function TranslatedPostHeader() {
  const { t } = useLanguage();

  return (
    <div>
      <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {t("post.title")}
      </h1>
      <p className="mt-4 text-lg leading-8 text-text-secondary">
        {t("post.description")}
      </p>
    </div>
  );
}
