import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.masteryhub.se"),
  title: {
    default: "Masteryhub",
    template: "%s",
  },
  description:
    "Vetenskapsbaserade artiklar om alpinteknik, träningsplanering och mental förberedelse.",
  openGraph: {
    siteName: "Masteryhub",
    locale: "sv_SE",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="dark">
      <body className={`${inter.className} flex min-h-screen flex-col bg-bg-primary text-white antialiased`}>
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}