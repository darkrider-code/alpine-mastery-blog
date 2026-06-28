"use client";

import { useLanguage } from "@/components/LanguageProvider";

interface CTABannerProps {
  title?: string;
  description?: string;
  showBrand?: boolean;
  product?: string;
}

function getProductUrls(product?: string) {
  if (product === 'Run Mastery') {
    return {
      freeAnalysis: 'https://run.masteryhub.se/free-analysis',
      createAccount: 'https://run.masteryhub.se/auth',
    };
  }
  if (product === 'Foil Mastery') {
    return {
      freeAnalysis: 'https://foil.masteryhub.se/free-analysis',
      createAccount: 'https://foil.masteryhub.se/auth',
    };
  }
  // Default: Alpine Mastery
  return {
    freeAnalysis: 'https://alpine.masteryhub.se/free-analysis',
    createAccount: 'https://alpine.masteryhub.se/auth?redirect=/membership/checkout?cycle=monthly',
  };
}

export default function CTABanner({ 
  title, 
  description,
  showBrand = true,
  product
}: CTABannerProps) {
  const { t } = useLanguage();
  const urls = getProductUrls(product);

  // Use props if provided, otherwise fall back to translations
  const displayTitle = title ?? t("site.homeTitle");
  const displayDescription = description ?? t("site.homeDescription");

  return (
    <section className="mt-16 p-8 sm:p-10 rounded-2xl
                bg-gradient-to-br from-bg-secondary to-bg-card
                border border-accent/30 text-center">
      {showBrand && (
        <p className="text-xs font-semibold text-accent uppercase
                    tracking-widest mb-3">
          Alpine Mastery App
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
        {displayTitle}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-text-secondary">
        {displayDescription}
      </p>
      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <a
          href={urls.freeAnalysis}
          className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-base font-bold text-bg-primary transition hover:bg-accent-hover"
        >
          Testa gratis analys
        </a>
        <a
          href={urls.createAccount}
          className="inline-flex items-center justify-center rounded-xl border border-accent px-8 py-4 text-base font-semibold text-accent transition hover:bg-accent/10"
        >
          Skapa konto
        </a>
      </div>
    </section>
  );
}