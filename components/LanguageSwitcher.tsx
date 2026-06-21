"use client";

import { usePathname, useRouter } from "next/navigation";
import { LANGUAGE_OPTIONS } from "@/lib/translations";
import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (nextLocale: string) => {
    const parts = pathname.split("/").filter(Boolean);

    if (parts.length >= 2 && parts[0] === locale) {
      router.push(`/${nextLocale}/${parts.slice(1).join("/")}`);
    } else if (parts.length >= 1 && parts[0] !== locale && parts[0] !== "") {
      router.push(`/${nextLocale}/${parts.join("/")}`);
    } else {
      router.push(`/${nextLocale}`);
    }

    setLocale(nextLocale);
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
