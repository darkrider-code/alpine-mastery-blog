"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import type { Post } from "@/types/post";
import { getCategoryLabel } from "@/lib/translations";

const categoryColors: Record<string, string> = {
  Slalom: "bg-blue-900 text-blue-300",
  GS: "bg-purple-900 text-purple-300",
  SL: "bg-indigo-900 text-indigo-300",
  Teknik: "bg-cyan-900 text-cyan-300",
  Träning: "bg-green-900 text-green-300",
  Mental: "bg-orange-900 text-orange-300",
};

const sportColors: Record<string, string> = {
  "Alpine Skiing": "bg-sky-900 text-sky-300",
  "Cross Country": "bg-emerald-900 text-emerald-300",
  Foil: "bg-purple-900 text-purple-300",
  Running: "bg-orange-900 text-orange-300",
};

function formatDate(dateString: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}

function getSportLabel(sport: string): string {
  const sportLabels: Record<string, string> = {
    "Alpine Skiing": "Alpine",
    "Cross Country": "Längd",
    Foil: "Foil",
    Running: "Löpning",
  };
  return sportLabels[sport] ?? sport;
}

interface BlogCardProps {
  post: Post;
  locale: string;
}

export default function BlogCard({ post, locale }: BlogCardProps) {
  const { t } = useLanguage();
  const badgeClass = categoryColors[post.category] ?? "bg-bg-secondary text-text-secondary";
  const sportBadgeClass = sportColors[post.sport] ?? "bg-bg-secondary text-text-secondary";
  const sportLabel = getSportLabel(post.sport);

  // Fix excerpt: only show if description exists and is > 30 characters
  const excerpt = post.description && post.description.length > 30
    ? truncate(post.description, 120)
    : null;

  return (
    <article className="rounded-xl border border-border bg-bg-card p-6 transition hover:border-accent/50">
      <div className="mb-4 flex items-center gap-2">
        <span className={"rounded-full px-3 py-1 text-xs font-medium " + badgeClass}>
          {getCategoryLabel(post.category, locale)}
        </span>
        <span className="text-text-secondary text-xs">·</span>
        <span className="text-text-secondary text-xs">{post.readingTime}</span>
      </div>

      <Link href={"/" + locale + "/" + post.slug}>
        <h2 className="text-xl font-bold text-white transition hover:text-accent">
          {post.title}
        </h2>
      </Link>

      {excerpt && (
        <p className="mt-3 text-text-secondary">{excerpt}</p>
      )}

      <div className="mt-6 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className={"rounded-full px-3 py-1 text-xs font-medium " + sportBadgeClass}>
            {sportLabel}
          </span>
          <time dateTime={post.publishedAt} className="text-text-secondary">
            {formatDate(post.publishedAt, locale)}
          </time>
        </div>
        <Link
          href={"/" + locale + "/" + post.slug}
          className="font-medium text-accent transition hover:text-accent-hover"
        >
          {t("site.readMore")}
        </Link>
      </div>
    </article>
  );
}

export { formatDate, categoryColors };