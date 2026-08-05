import type { Metadata } from "next";
import { redirect } from "next/navigation";
import BlogList from "@/components/BlogList";
import HomeHero from "@/components/HomeHero";
import { getAllPosts, DEFAULT_LOCALE } from "@/lib/posts";
import { getLocaleFromCookies } from "@/lib/language";
import { SUPPORTED_LOCALES } from "@/lib/translations";

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

  return {
    title: "Progress starts with insight | Masteryhub Training Lab",
    description:
      locale === "sv"
        ? "Vetenskapsbaserade artiklar om teknik, träningsplanering, mindset och AI-analys för idrottare."
        : "Science-based articles on technique, training, mindset, and analysis for athletes.",
    openGraph: {
      title: "Progress starts with insight",
      description:
        locale === "sv"
          ? "Vetenskapsbaserade artiklar om teknik, träningsplanering, mindset och AI-analys för idrottare."
          : "Science-based articles on technique, training, mindset, and analysis for athletes.",
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

  const aiSkidanalysCopy: Record<string, { title: string; description: string; cta: string }> = {
    sv: {
      title: "AI-skidanalys – Bemästra berget med AI",
      description: "Ladda upp ett klipp och få personlig AI-analys av din skidteknik inom sekunder. Perfekt för skidåkare, tränare och klubbar.",
      cta: "Prova AI-skidanalys →",
    },
    en: {
      title: "AI Ski Analysis – Master the mountain with AI",
      description: "Upload a clip and get personalized AI analysis of your ski technique within seconds. Perfect for skiers, coaches, and clubs.",
      cta: "Try AI ski analysis →",
    },
    no: {
      title: "AI-skiteknikanalyse – Mester fjellet med AI",
      description: "Last opp et klipp og få personlig AI-analyse av skiteknikken din i løpet av sekunder. Perfekt for skiløpere, trenere og klubber.",
      cta: "Prøv AI-skiteknikanalyse →",
    },
    da: {
      title: "AI-skidteknikanalyse – Mester bjerget med AI",
      description: "Upload et klip og få personlig AI-analyse af din skidteknik inden for sekunder. Perfekt til skiløbere, trænere og klubber.",
      cta: "Prøv AI-skidteknikanalyse →",
    },
    fi: {
      title: "Tekoälypohjainen laskuanalyysi – Hallitse rinne tekoälyn avulla",
      description: "Lataa pätkä ja saat henkilökohtaisen tekoälyanalyysin laskutekniikastasi sekunneissa. Täydellinen laskijoille, valmentajille ja seuroille.",
      cta: "Kokeile tekoälyanalyysiä →",
    },
    de: {
      title: "KI-Skianalyse – Meistere den Berg mit KI",
      description: "Lade einen Clip hoch und erhalte in Sekunden eine persönliche KI-Analyse deiner Skitechnik. Perfekt für Skifahrer, Trainer und Vereine.",
      cta: "KI-Skianalyse testen →",
    },
    fr: {
      title: "Analyse IA du ski – Maîtrise la montagne avec l'IA",
      description: "Télécharge une séquence et obtiens une analyse IA personnelle de ta technique de ski en quelques secondes. Parfait pour les skieurs, entraîneurs et clubs.",
      cta: "Essayer l'analyse IA →",
    },
    nl: {
      title: "AI-skitechniekanalyse – Beheers de berg met AI",
      description: "Upload een filmpje en ontvang binnen seconden een persoonlijke AI-analyse van je skitechniek. Perfect voor skiërs, coaches en clubs.",
      cta: "Probeer AI-skianalyse →",
    },
  };

  const copy = aiSkidanalysCopy[locale] ?? aiSkidanalysCopy.sv;

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
            <a
              href={`/${locale}/ai-skidanalys`}
              className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-4 text-base font-bold text-bg-primary transition hover:bg-accent-hover"
            >
              {copy.cta}
            </a>
          </div>
        </div>
      </section>

      <BlogList posts={posts} locale={locale} />
    </div>
  );
}
