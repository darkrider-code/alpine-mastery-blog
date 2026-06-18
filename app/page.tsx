import type { Metadata } from "next";
import BlogList from "@/components/BlogList";
import { cookies } from "next/headers";
import HomeHero from "@/components/HomeHero";
import { getAllPosts, DEFAULT_LOCALE } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Progress starts with insight",
  description:
    "Science-based articles on technique, training, mindset, and analysis for athletes.",
  openGraph: {
    title: "Progress starts with insight | Masteryhub Training Lab",
    description:
      "Science-based articles on technique, training, mindset, and analysis for athletes.",
    url: "https://blog.masteryhub.se",
  },
};

export default function HomePage() {
  const posts = getAllPosts(DEFAULT_LOCALE);
  const cookieStore = cookies();
  const locale = cookieStore.get("alpine-mastery-language")?.value || DEFAULT_LOCALE;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <HomeHero />
      <BlogList posts={posts} locale={locale} />
    </div>
  );
}
