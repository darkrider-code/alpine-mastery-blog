"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function TranslatedPostNavigation({ category }: { category: string }) {
  const { t } = useLanguage();

  return (
    <>
      <a href="https://masteryhub.se" className="transition hover:text-accent">
        {t("site.breadcrumbMasteryhub")}
      </a>
      <Link href="/" className="transition hover:text-accent">
        {t("site.breadcrumbBlog")}
      </Link>
      <h2 className="mb-6 text-2xl font-bold text-white">
        {t("site.relatedTitle")} {category}
      </h2>
    </>
  );
}
