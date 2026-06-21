"use client";

import { usePathname, useRouter } from "next/navigation";
import { LANGUAGE_OPTIONS } from "@/lib/translations";
import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const parts = pathname.split('/').filter(Boolean);
    const rest = parts.slice(1).join('/');
    router.push(rest ? `/${newLocale}/${rest}` : `/${newLocale}`);
    setLocale(newLocale);
  };

  return (
    <div className="flex items-center">
      <label htmlFor="language-switcher" className="sr-only">
        {t("site.languageLabel")}
      </label>
      <select
        id="language-switcher"
        value={locale}
        onChange={(event) => switchLocale(event.target.value)}
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