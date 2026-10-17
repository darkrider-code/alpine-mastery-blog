"use client";
import BlogLink from "@/components/BlogLink";


import AppLink from "@/components/AppLink";


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

function BoltIcon() {
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
      className="text-green-500"
      aria-hidden="true"
    >
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function WindIcon() {
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
      className="text-cyan-400"
      aria-hidden="true"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}

function BlogIcon() {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
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
  const klubbpaketLabel = getTranslationForLocale(currentLocale, "site.klubbpaket");
  const ambassadorLabel = getTranslationForLocale(currentLocale, "site.ambassador");
  const blogLabel = getTranslationForLocale(currentLocale, "site.blog") ?? "Blogg";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg-primary/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-4">
          <BlogLink
            href={`/${currentLocale}`}
            className="flex items-center gap-2 font-semibold text-white"
            aria-label={blogLabel}
          >
            <BlogIcon />
            <span>{blogLabel}</span>
          </BlogLink>
          <span className="hidden h-6 w-px bg-border sm:block" aria-hidden="true" />
          <div className="hidden items-center gap-4 sm:flex">
            <AppLink placement="header_desktop"
              href="https://alpine.masteryhub.se/"
              className="flex items-center gap-2 font-semibold text-white"
              aria-label={t("site.title")}
            >
              <MountainIcon />
              <span>{t("site.title")}</span>
            </AppLink>
            <a
              href="https://run.masteryhub.se/"
              className="flex items-center gap-2 font-semibold text-white"
              aria-label="Go to Run Mastery"
            >
              <BoltIcon />
              <span>Run Mastery</span>
            </a>
            <a
              href="https://foil.masteryhub.se/"
              className="flex items-center gap-2 font-semibold text-white"
              aria-label="Go to Foil Mastery"
            >
              <WindIcon />
              <span>Foil Mastery</span>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <BlogLink
            href={`/${currentLocale}/ai-skidanalys`}
            className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent/20 hover:text-white"
          >
            {aiSkidanalysLabel}
          </BlogLink>
          <BlogLink
            href={`/${currentLocale}/klubbpaket`}
            className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent/20 hover:text-white"
          >
            {klubbpaketLabel}
          </BlogLink>
          <BlogLink
            href={`/${currentLocale}/ambassador`}
            className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent/20 hover:text-white"
          >
            {ambassadorLabel}
          </BlogLink>
          <LanguageSwitcher />
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 pb-3 sm:hidden">
        <AppLink placement="header_mobile"
          href="https://alpine.masteryhub.se/"
          className="flex items-center gap-2 text-sm font-semibold text-white"
          aria-label={t("site.title")}
        >
          <MountainIcon />
          <span>{t("site.title")}</span>
        </AppLink>
        <a
          href="https://run.masteryhub.se/"
          className="flex items-center gap-2 text-sm font-semibold text-white"
          aria-label="Go to Run Mastery"
        >
          <BoltIcon />
          <span>Run Mastery</span>
        </a>
        <a
          href="https://foil.masteryhub.se/"
          className="flex items-center gap-2 text-sm font-semibold text-white"
          aria-label="Go to Foil Mastery"
        >
          <WindIcon />
          <span>Foil Mastery</span>
        </a>
      </div>
    </header>
  );
}