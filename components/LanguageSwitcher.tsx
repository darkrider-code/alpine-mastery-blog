"use client";

import { LANGUAGE_OPTIONS } from "@/lib/translations";
import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className="flex items-center">
      <label htmlFor="language-switcher" className="sr-only">
        {t("site.languageLabel")}
      </label>
      <select
        id="language-switcher"
        value={locale}
        onChange={(event) => setLocale(event.target.value)}
        aria-label={t("site.languageLabel")}
        className="rounded-lg border border-border bg-bg-card px-3 py-2 text-sm text-white outline-none transition focus:border-accent"
      >
        {LANGUAGE_OPTIONS.map((option) => (
          <option key={option.code} value={option.code}>
            {option.nativeName}
          </option>
        ))}
      </select>
    </div>
  );
}
