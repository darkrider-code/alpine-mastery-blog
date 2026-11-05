import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InlineCTA from "@/components/InlineCTA";
import PartnerLinkGenerator from "@/components/PartnerLinkGenerator";
import { buildPartnerContactLink } from "@/lib/appLinks";
import { getOpenGraphLocale } from "@/lib/landingMetadata";
import { partnerCopy } from "@/lib/partnerCopy";
import { SUPPORTED_LOCALES } from "@/lib/translations";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

function getCopy(locale: string) {
  if (!SUPPORTED_LOCALES.some((supported) => supported === locale)) notFound();
  return partnerCopy[locale];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = getCopy(locale);
  const canonical = `https://blog.masteryhub.se/${locale}/partner`;
  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(SUPPORTED_LOCALES.map((language) => [language, `https://blog.masteryhub.se/${language}/partner`])),
        "x-default": "https://blog.masteryhub.se/sv/partner",
      },
    },
    openGraph: {
      locale: getOpenGraphLocale(locale), title: copy.title, description: copy.description,
      url: canonical, type: "website", siteName: "Alpine Mastery Blog",
      images: [{ url: "https://blog.masteryhub.se/og-image.png", width: 1200, height: 630, alt: copy.title }],
    },
    twitter: {
      card: "summary_large_image", title: copy.title, description: copy.description,
      images: ["https://blog.masteryhub.se/og-image.png"],
    },
  };
}

export default async function PartnerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = getCopy(locale);
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-white sm:px-6 sm:py-20">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Alpine Mastery</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{copy.title}</h1>
        <p className="mt-5 text-lg leading-8 text-text-secondary">{copy.description}</p>
        <p className="mt-5 leading-7 text-text-secondary">{copy.problem}</p>
      </header>
      <section className="my-10" aria-labelledby="partner-workflow">
        <h2 id="partner-workflow" className="text-2xl font-bold">{copy.workflowTitle}</h2>
        <ol className="mt-5 list-decimal space-y-4 pl-6 leading-7 text-text-secondary">
          {copy.steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
        <p className="mt-5 font-semibold text-accent">{copy.free}</p>
      </section>
      <section className="my-10">
        <h2 className="text-2xl font-bold">{copy.trackingTitle}</h2>
        <p className="mt-3 leading-7 text-text-secondary">{copy.tracking}</p>
      </section>
      <PartnerLinkGenerator copy={copy.generator} />
      <section className="my-10">
        <h2 className="text-2xl font-bold">{copy.limitsTitle}</h2>
        <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-text-secondary">
          {copy.limits.map((limit) => <li key={limit}>{limit}</li>)}
        </ul>
      </section>
      <InlineCTA url={buildPartnerContactLink()} text={copy.cta} campaign="partner" placement="partner_contact"
        className="inline-flex min-h-12 items-center justify-center rounded-xl bg-accent px-6 py-3 font-bold text-bg-primary hover:bg-accent-hover" />
      <p className="mt-8 text-sm text-text-secondary">
        <Link href={`/${locale}/klubbpaket`} className="underline hover:text-accent">{copy.club}</Link>
      </p>
    </main>
  );
}
