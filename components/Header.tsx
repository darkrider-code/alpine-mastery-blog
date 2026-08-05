"use client";

import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, getTranslationForLocale } from "@/lib/translations";

function MountainIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent"
      aria-hidden="true"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();

  // Derive the current locale from the URL path (e.g. /en/... -> en)
  const pathLocale = SUPPORTED_LOCALES.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  const currentLocale = pathLocale ?? DEFAULT_LOCALE;
  const aiSkidanalysLabel = getTranslationForLocale(currentLocale, "site.aiSkidanalys");

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg-primary/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-4">
          <a
            href="https://masteryhub.se"
            className="flex items-center gap-2 font-semibold text-white"
            aria-label="Go to Masteryhub"
          >
            <MountainIcon />
            <span>{t("site.title")}</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`/${currentLocale}/ai-skidanalys`}
            className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent/20 hover:text-white"
          >
            {aiSkidanalysLabel}
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
