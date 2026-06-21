"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getCategoryLabel } from "@/lib/translations";

export default function TranslatedRelatedTitle({ category, locale }: { category: string; locale: string }) {
  const { t } = useLanguage();

  return (
    <h2 className="mb-6 text-2xl font-bold text-white">
      {t("site.relatedTitle")} {getCategoryLabel(category, locale)}
    </h2>
  );
}