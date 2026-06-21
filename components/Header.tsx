"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const FREE_ANALYSIS_URL = "https://alpine.masteryhub.se/free-analysis";
const CREATE_ACCOUNT_URL = "https://alpine.masteryhub.se/auth?redirect=/membership/checkout?cycle=monthly";

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

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg-primary/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 font-semibold text-white">
            <MountainIcon />
            <span>{t("site.title")}</span>
          </Link>
          <a
            href="https://masteryhub.se"
            className="hidden text-sm text-text-secondary transition hover:text-accent sm:inline"
          >
            masteryhub.se
          </a>
        </div>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <div className="flex items-center gap-2">
            <a
              href={FREE_ANALYSIS_URL}
              className="rounded-lg bg-accent px-4 py-2 font-semibold text-bg-primary transition hover:bg-accent-hover"
            >
              {t("site.cta")}
            </a>
            <a
              href={CREATE_ACCOUNT_URL}
              className="hidden rounded-lg border border-accent px-4 py-2 font-semibold text-accent transition hover:bg-accent/10 sm:inline-flex"
            >
              Skapa konto
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
