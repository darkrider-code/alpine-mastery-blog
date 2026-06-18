import type { Metadata } from "next";
import BlogList from "@/components/BlogList";
import HomeHero from "@/components/HomeHero";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Skidteknik & Träning",
  description:
    "Vetenskapsbaserade artiklar om alpinteknik, träningsplanering och mental förberedelse.",
  openGraph: {
    title: "Skidteknik & Träning | Alpine Mastery Blog",
    description:
      "Vetenskapsbaserade artiklar om alpinteknik, träningsplanering och mental förberedelse.",
    url: "https://blog.masteryhub.se",
  },
};

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <HomeHero />
      <BlogList posts={posts} />
    </div>
  );
}
