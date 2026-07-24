"use client";

import { useLanguage } from "@/components/LanguageProvider";

interface CTABannerProps {
  title?: string;
  description?: string;
  showBrand?: boolean;
  product?: string;
}

function getProductUrls(product?: string) {
  if (product === "Run Mastery") {
    return {
      freeAnalysis: "https://run.masteryhub.se/free-analysis",
      createAccount: "https://run.masteryhub.se/auth",
    };
  }

  if (product === "Foil Mastery") {
    return {
      freeAnalysis: "https://foil.masteryhub.se/free-analysis",
      createAccount: "https://foil.masteryhub.se/auth",
    };
  }

  return {
    freeAnalysis: "https://alpine.masteryhub.se/free-analysis",
    createAccount: "https://alpine.masteryhub.se/auth?redirect=/membership/checkout?cycle=monthly",
  };
}

export default function CTABanner({ title, description, showBrand = true, product }: CTABannerProps) {
  const { t } = useLanguage();
  const urls = getProductUrls(product);
  const displayTitle = title ?? t("site.homeTitle");
  const displayDescription = description ?? t("site.homeDescription");
  const primaryButtonLabel = t("site.ctaPrimary");
  const secondaryButtonLabel = t("site.ctaSecondary");

  return (
    <section className="mt-16 rounded-2xl border border-accent/30 bg-gradient-to-br from-bg-secondary to-bg-card p-8 text-center sm:p-10">
      {showBrand && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
          Alpine Mastery App
        </p>
      )}

      <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
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
          {primaryButtonLabel}
        </a>
        <a
          href={urls.createAccount}
          className="inline-flex items-center justify-center rounded-xl border border-accent px-8 py-4 text-base font-semibold text-accent transition hover:bg-accent/10"
        >
          {secondaryButtonLabel}
        </a>
      </div>
    </section>
  );
}