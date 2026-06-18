"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function TranslatedRelatedTitle({ category }: { category: string }) {
  const { t } = useLanguage();

  return (
    <h2 className="mb-6 text-2xl font-bold text-white">
      {t("site.relatedTitle")} {category}
    </h2>
  );
}
