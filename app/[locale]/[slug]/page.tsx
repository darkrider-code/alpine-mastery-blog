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
import { SUPPORTED_LOCALES, getCategoryLabel } from "@/lib/translations";
import { compile } from "@mdx-js/mdx";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "@/components/mdx-components";
import type { Post } from "@/types/post";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

// Sport colors for badges
const sportColors: Record<string, string> = {
  "Alpine Skiing": "bg-sky-900 text-sky-300",
  "Cross Country": "bg-emerald-900 text-emerald-300",
  Foil: "bg-purple-900 text-purple-300",
  Running: "bg-orange-900 text-orange-300",
};

// Sport labels for display
function getSportLabel(sport: string): string {
  const sportLabels: Record<string, string> = {
    "Alpine Skiing": "Alpine",
    "Cross Country": "Längd",
    Foil: "Foil",
    Running: "Löpning",
  };
  return sportLabels[sport] ?? sport;
}



export function generateStaticParams() {
  try {
    const slugs = getAllSlugs();
    return SUPPORTED_LOCALES.flatMap((locale) =>
      slugs.map((slug) => ({ locale, slug }))
    );
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
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

    const title = post.title + " | Alpine Mastery Blog";
    const url = "https://blog.masteryhub.se/" + locale + "/" + post.slug;

    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title,
        description: post.description,
        type: "article",
        publishedTime: post.publishedAt,
        url,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description: post.description,
      },
    };
  } catch (error) {
    console.error('Error in generateMetadata:', error);
    return {};
  }
}

function formatDate(dateString: string, locale: string): string {
  const lang = locale === "sv" ? "sv-SE" : locale === "no" ? "nb-NO" : locale === "da" ? "da-DK" : locale === "fi" ? "fi-FI" : locale === "de" ? "de-DE" : locale === "fr" ? "fr-FR" : locale === "nl" ? "nl-NL" : "en-US";
  return new Intl.DateTimeFormat(lang, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(dateString));
}

// Server component to render compiled MDX
async function MdxContent({ content }: { content: string }) {
  // Clean the content first
  const cleanedContent = content;
  
  // Compile MDX to a function
  const compiled = await compile(cleanedContent, {
    outputFormat: 'function',
    development: false,
  });
  
  // Execute the compiled function to get the React component
  // @ts-ignore - compiled is a VFile with the function code
  const MdxComponent = (compiled as any).default || compiled;
  
  return (
    <MDXProvider components={mdxComponents}>
      <MdxComponent />
    </MDXProvider>
  );
}

export default async function PostPage({ params }: PageProps) {
  try {
    const { locale, slug } = await params;
    console.log('Loading post:', { locale, slug });
    
    const post = getPostBySlug(slug, locale);
    
    if (!post) {
      console.log('Post not found:', { locale, slug });
      return notFound();
    }

    const relatedPosts = getRelatedPosts(post, locale, 3);
    const badgeClass = categoryColors[post.category] ?? "bg-bg-secondary text-text-secondary";
    const sportBadgeClass = sportColors[post.sport] ?? "bg-bg-secondary text-text-secondary";
    const sportLabel = getSportLabel(post.sport);
    const categoryLabel = getCategoryLabel(post.category, locale);
    const formattedDate = formatDate(post.publishedAt, locale);
    const postUrl = "https://blog.masteryhub.se/" + locale + "/" + post.slug;

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
          dangerouslySetInnerHTML={{"__html": JSON.stringify(articleJsonLd)}}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{"__html": JSON.stringify(breadcrumbJsonLd)}}
        />

        <ScrollProgress />

        <article className="mx-auto max-w-6xl px-4 sm:px-6">
          <header className="bg-gradient-to-b from-bg-secondary to-bg-primary px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-3xl">
              {/* Breadcrumb without numbers */}
              <nav aria-label="breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 list-none p-0 m-0 text-sm text-text-secondary flex-wrap">
                  <li>
                    <a href="https://masteryhub.se" className="hover:text-accent transition-colors">
                      Masteryhub
                    </a>
                  </li>
                  <li className="text-border">›</li>
                  <li>
                    <Link href={"/" + locale} className="hover:text-accent transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li className="text-border">›</li>
                  <li className="text-white truncate max-w-[200px] sm:max-w-none">
                    {post.title}
                  </li>
                </ol>
              </nav>

              {/* Hero section with visual separation */}
              <div className="relative mb-12 pb-10 border-b border-border">
                {/* Subtil gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary to-transparent rounded-2xl -z-10 opacity-60" />

                {/* Sport and Category badges */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={"inline-block text-xs font-semibold px-3 py-1 rounded-full " + sportBadgeClass}>
                    {sportLabel}
                  </span>
                  <span className={"inline-block text-xs font-semibold px-3 py-1 rounded-full " + badgeClass}>
                    {categoryLabel}
                  </span>
                </div>

                {/* TranslatedPostHeader handles the title */}
                <TranslatedPostHeader post={post} />

                {/* Ingress/description */}
                {post.description && (
                  <p className="text-lg text-text-secondary leading-relaxed mb-6 max-w-2xl">
                    {post.description}
                  </p>
                )}

                {/* Meta row */}
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

          {/* Article body with prose styling */}
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
                    <BlogCard key={related.slug + "-" + locale} post={related} locale={locale} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </>
    );
  } catch (error) {
    console.error('Error in PostPage:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading Article</h1>
          <p className="text-gray-500">An error occurred while loading the article.</p>
          <p className="text-sm text-gray-400 mt-2">Error: {error instanceof Error ? error.message : 'Unknown error'}</p>
        </div>
      </div>
    );
  }
}