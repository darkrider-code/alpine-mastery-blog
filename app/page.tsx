import type { Metadata } from "next";
import { redirect } from "next/navigation";
import BlogList from "@/components/BlogList";


import HomeHero from "@/components/HomeHero";
import { getAllPosts, DEFAULT_LOCALE } from "@/lib/posts";
import { getLocaleFromCookies } from "@/lib/language";

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
  redirect("/sv");
}
