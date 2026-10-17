import { getOpenGraphLocale } from "@/lib/landingMetadata";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SUPPORTED_LOCALES, getTranslationForLocale } from "@/lib/translations";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});



export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const description =
    getTranslationForLocale(locale, "site.homeDescription") ??
    "Science-based articles on technique, training, mindset, and analysis for athletes.";

  return {
    metadataBase: new URL("https://blog.masteryhub.se"),
    title: {
      default: "Masteryhub",
      template: "%s",
    },
    description,
    openGraph: {
      siteName: "Masteryhub",
      locale: getOpenGraphLocale(locale),
      type: "website",
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
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} className="dark">
      <body className={`${inter.className} flex min-h-screen flex-col bg-bg-primary text-white antialiased`}>
        <LanguageProvider locale={locale}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
