import { individualCopy } from "@/lib/individualCopy";
import { partnerCopy } from "@/lib/partnerCopy";
import { getOpenGraphLocale } from "@/lib/landingMetadata";
import BlogLink from "@/components/BlogLink";
import type { Metadata } from "next";
import BlogList from "@/components/BlogList";
import SkiGuides from "@/components/SkiGuides";
import HomeHero from "@/components/HomeHero";
import { getAllPosts } from "@/lib/posts";
import { SUPPORTED_LOCALES, getTranslationForLocale } from "@/lib/translations";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const canonicalUrl = `https://blog.masteryhub.se/${locale}`;
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((supportedLocale) => [
      supportedLocale,
      `https://blog.masteryhub.se/${supportedLocale}`,
    ])
  ) as Record<string, string>;

  const homeTitle = getTranslationForLocale(locale, "site.homeTitle") ?? "Progress starts with insight";
  const homeDescription =
    getTranslationForLocale(locale, "site.homeDescription") ??
    "Science-based articles on technique, training, mindset, and analysis for athletes.";

  return {
    title: `${homeTitle} | Masteryhub Training Lab`,
    description: homeDescription,
    openGraph: {
      locale: getOpenGraphLocale(locale),
      title: homeTitle,
      description: homeDescription,
      url: canonicalUrl,
      images: [
        {
          url: "https://blog.masteryhub.se/og-image.png",
          width: 1200,
          height: 630,
          alt: "Masteryhub Training Lab",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: ["https://blog.masteryhub.se/og-image.png"],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ...languages,
        "x-default": "https://blog.masteryhub.se/sv",
      },
    }
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const posts = getAllPosts(locale);

  const intro = individualCopy(locale);
  const copy = { title: intro.title, description: intro.body,
    cta: getTranslationForLocale(locale, "site.ctaPrimary") ?? "Try a free analysis" };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <HomeHero />

      <section className="mb-10 overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-slate-900 via-bg-secondary to-bg-card">
        <div className="grid items-center gap-6 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Alpine Mastery
            </div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{copy.title}</h2>
            <p className="mt-3 text-text-secondary">{copy.description}</p>
          </div>
          <div className="text-left lg:text-right">
            <BlogLink
              href={`/${locale}/ai-skidanalys`}
              className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-4 text-base font-bold text-bg-primary transition hover:bg-accent-hover"
            >
              {copy.cta}
            </BlogLink>
          </div>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-bg-card p-6 sm:p-8" aria-labelledby="home-partner-title">
        <h2 id="home-partner-title" className="text-2xl font-bold text-white">{partnerCopy[locale].title}</h2>
        <p className="mt-3 text-text-secondary">{partnerCopy[locale].description}</p>
        <BlogLink href={`/${locale}/partner`} className="mt-4 inline-block py-2 font-semibold text-accent underline underline-offset-4 hover:text-white">
          {partnerCopy[locale].footer}
        </BlogLink>
      </section>

      {locale === "sv" && <SkiGuides />}
      <BlogList posts={posts} locale={locale} />
    </div>
  );
}

