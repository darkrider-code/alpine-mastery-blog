import type { Metadata } from "next";
import BlogList from "@/components/BlogList";
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
      <header className="mb-10 max-w-2xl">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Skidteknik & Träning
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-text-secondary">
          Vetenskapsbaserade artiklar om alpinteknik, träningsplanering och mental
          förberedelse.
        </p>
      </header>

      <BlogList posts={posts} />
    </div>
  );
}
