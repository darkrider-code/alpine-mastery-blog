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
  
  return {
    title: "Progress starts with insight",
    description:
      locale === "sv"
        ? "Vetenskapsbaserade artiklar om teknik, träningsplanering, mindset och AI-analys för idrottare."
        : "Science-based articles on technique, training, mindset, and analysis for athletes.",
    openGraph: {
      title: "Progress starts with insight | Alpine Mastery Blog",
      description:
        locale === "sv"
          ? "Vetenskapsbaserade artiklar om teknik, träningsplanering, mindset och AI-analys för idrottare."
          : "Science-based articles on technique, training, mindset, and analysis for athletes.",
      url: "https://blog.masteryhub.se",
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const posts = getAllPosts(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <HomeHero />
      <BlogList posts={posts} locale={locale} />
    </div>
  );
}