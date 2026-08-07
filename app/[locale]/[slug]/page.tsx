import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BlogCard, { categoryColors } from "@/components/BlogCard";
import CTABanner from "@/components/CTABanner";
import ScrollProgress from "@/components/ScrollProgress";
import TranslatedPostBody from "@/components/TranslatedPostBody";
import TranslatedPostHeader from "@/components/TranslatedPostHeader";
import TranslatedRelatedTitle from "@/components/TranslatedRelatedTitle";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { SUPPORTED_LOCALES, getCategoryLabel, getTranslationForLocale } from "@/lib/translations";
import { RenderMdx } from "@/lib/render-mdx";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const sportColors: Record<string, string> = {
  "Alpine Skiing": "bg-sky-900 text-sky-300",
  "Cross Country": "bg-emerald-900 text-emerald-300",
  Foil: "bg-purple-900 text-purple-300",
  Running: "bg-orange-900 text-orange-300",
};

function getSportLabel(sport: string, locale: string): string {
  if (locale === "sv") {
    const sportLabels: Record<string, string> = {
      "Alpine Skiing": "Alpine",
      "Cross Country": "Längd",
      Foil: "Foil",
      Running: "Löpning",
    };

    return sportLabels[sport] ?? sport;
  }

  return sport;
}

function cleanContent(content: string): string {
  if (!content) return content;

  let cleaned = content;
  cleaned = cleaned.replace(/DIAGNOSTIC:.*\n?/gi, "");
  cleaned = cleaned.replace(/Article Content\n?/gi, "");
  cleaned = cleaned.replace(/Title:.*\n?/gi, "");
  cleaned = cleaned.replace(/Description:.*\n?/gi, "");
  cleaned = cleaned.replace(/^(.*)\n\1$/gm, "$1");
  cleaned = cleaned.replace(/\n{3,}/g, "\n\n");

  return cleaned.trim();
}

function warnIfInvalidDescription(post: { slug: string; locale: string; description?: string }) {
  const description = (post.description ?? "").trim();
  const matchesCitationPattern = /(?:^|\s)(?:Källor:|Sources:|References:)/i.test(description);

  if (!description || matchesCitationPattern) {
    console.warn(
      `[metadata] Invalid description for ${post.slug} (${post.locale}): ${description || "<empty>"}`
    );
  }
}

export const revalidate = 3600; // Revalidate every hour to pick up content changes

export function generateStaticParams() {
  try {
    const slugs = getAllSlugs();

    for (const locale of SUPPORTED_LOCALES) {
      for (const slug of slugs) {
        const post = getPostBySlug(slug, locale);
        if (post) {
          warnIfInvalidDescription(post);
        }
      }
    }

    return SUPPORTED_LOCALES.flatMap((locale) =>
      slugs.map((slug) => ({ locale, slug }))
    );
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const { locale, slug } = await params;
    const post = getPostBySlug(slug, locale);

    if (!post) {
      return {};
    }

    warnIfInvalidDescription(post);

    const canonicalUrl = `https://blog.masteryhub.se/${locale}/${post.slug}`;
    const languages = Object.fromEntries(
      SUPPORTED_LOCALES.map((supportedLocale) => [
        supportedLocale,
        `https://blog.masteryhub.se/${supportedLocale}/${post.slug}`,
      ])
    ) as Record<string, string>;

    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        publishedTime: post.publishedAt,
        url: canonicalUrl,
        images: [
          {
            url: "https://blog.masteryhub.se/og-image.png",
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: ["https://blog.masteryhub.se/og-image.png"],
      },
      alternates: {
        canonical: canonicalUrl,
        languages: {
          ...languages,
          "x-default": `https://blog.masteryhub.se/sv/${post.slug}`,
        },
      },
    };
  } catch (error) {
    console.error("Error in generateMetadata:", error);
    return {};
  }
}

function formatDate(dateString: string, locale: string): string {
  const lang =
    locale === "sv"
      ? "sv-SE"
      : locale === "no"
        ? "nb-NO"
        : locale === "da"
          ? "da-DK"
          : locale === "fi"
            ? "fi-FI"
            : locale === "de"
              ? "de-DE"
              : locale === "fr"
                ? "fr-FR"
                : locale === "nl"
                  ? "nl-NL"
                  : "en-US";

  return new Intl.DateTimeFormat(lang, {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
}

async function MdxContent({ content }: { content: string }) {
  const cleanedContent = cleanContent(content);
  return <RenderMdx source={cleanedContent} />;
}

export default async function PostPage({ params }: PageProps) {
  try {
    const { locale, slug } = await params;
    const post = getPostBySlug(slug, locale);

    if (!post) {
      return notFound();
    }

    const relatedPosts = getRelatedPosts(post, locale, 3);
    const badgeClass = categoryColors[post.category] ?? "bg-bg-secondary text-text-secondary";
    const sportBadgeClass = sportColors[post.sport] ?? "bg-bg-secondary text-text-secondary";
    const sportLabel = getSportLabel(post.sport, locale);
    const categoryLabel = getCategoryLabel(post.category, locale);
    const formattedDate = formatDate(post.publishedAt, locale);
    const postUrl = `https://blog.masteryhub.se/${locale}/${post.slug}`;
    const breadcrumbMasteryhub = getTranslationForLocale(locale, "site.breadcrumbMasteryhub") ?? "Masteryhub";
    const breadcrumbBlog = getTranslationForLocale(locale, "site.breadcrumbBlog") ?? "Blog";

    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      author: {
        "@type": "Organization",
        name: "Alpine Mastery",
        url: "https://masteryhub.se",
      },
      publisher: {
        "@type": "Organization",
        name: "Masteryhub",
      },
      url: postUrl,
    };

    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Masteryhub",
          item: "https://masteryhub.se",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://blog.masteryhub.se",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: postUrl,
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        <ScrollProgress />

        <article className="mx-auto max-w-6xl px-4 sm:px-6">
          <header className="bg-gradient-to-b from-bg-secondary to-bg-primary px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-3xl">
              <nav aria-label="breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-2 list-none p-0 m-0 text-sm text-text-secondary">
                  <li>
                    <a href="https://masteryhub.se" className="hover:text-accent transition-colors">
                      {breadcrumbMasteryhub}
                    </a>
                  </li>
                  <li className="text-border">›</li>
                  <li>
                    <Link href={`/${locale}`} className="hover:text-accent transition-colors">
                      {breadcrumbBlog}
                    </Link>
                  </li>
                  <li className="text-border">›</li>
                  <li className="truncate text-white max-w-[200px] sm:max-w-none">
                    {post.title}
                  </li>
                </ol>
              </nav>

              <div className="relative mb-12 pb-10 border-b border-border">
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-bg-secondary to-transparent opacity-60" />

                <div className="mb-4 flex items-center gap-2">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${sportBadgeClass}`}>
                    {sportLabel}
                  </span>
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}>
                    {categoryLabel}
                  </span>
                </div>

                <TranslatedPostHeader post={post} />

                {post.description && (
                  <p className="mb-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
                    {post.description}
                  </p>
                )}

                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <span>{formattedDate}</span>
                  <span className="text-border">·</span>
                  <span>{post.readingTime}</span>
                  <span className="text-border">·</span>
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-l-4 prose-h2:border-accent prose-h2:pl-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-4 prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-bg-card prose-blockquote:rounded-r-xl prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:my-8 prose-blockquote:not-italic prose-blockquote:text-text-secondary prose-a:text-accent hover:prose-a:text-accent-hover prose-strong:text-white">
              <TranslatedPostBody post={post}>
                <MdxContent content={post.content} />
              </TranslatedPostBody>
            </div>
          </div>

          <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
            <CTABanner product={post.product} />

            {relatedPosts.length > 0 && (
              <section className="mt-16">
                <TranslatedRelatedTitle category={post.category} locale={locale} />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {relatedPosts.map((related) => (
                    <BlogCard key={`${related.slug}-${locale}`} post={related} locale={locale} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </>
    );
  } catch (error) {
    console.error("Error rendering post page:", error);
    return notFound();
  }
}
