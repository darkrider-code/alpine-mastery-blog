import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
import * as runtime from "react/jsx-runtime";
import type { Post } from "@/types/post";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
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

    const title = `${post.title} | Masteryhub Training Lab`;
    const url = `https://blog.masteryhub.se/${locale}/${post.slug}`;

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

// Server component to compile and render MDX content
async function MdxContent({ content }: { content: string }) {
  try {
    // Compile MDX content to React component using @mdx-js/mdx
    // This happens on the server, so Node.js modules are available
    const compiled = await compile(content, {
      outputFormat: 'function-body',
      development: false,
      ...runtime,
    });

    // Create a React component from the compiled function body
    // @ts-ignore - compiled.value is the function body as string
    const Component = new Function('props', `return ${compiled.value}`);

    return (
      <MDXProvider components={mdxComponents}>
        <Component />
      </MDXProvider>
    );
  } catch (error) {
    console.error('MDX compilation error:', error);
    // Fallback: display raw content for debugging
    return (
      <div className="whitespace-pre-wrap bg-red-900/20 p-4 rounded-lg">
        <p className="text-red-400 text-sm mb-2">MDX Compilation Error:</p>
        <pre className="text-sm overflow-auto">{error instanceof Error ? error.message : 'Unknown error'}</pre>
        <p className="text-red-400 text-sm mt-4">Raw content preview:</p>
        <pre className="text-xs overflow-auto">{content.substring(0, 200)}...</pre>
      </div>
    );
  }
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
    const postUrl = `https://blog.masteryhub.se/${locale}/${post.slug}`;

    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      author: {
        "@type": "Organization",
        name: "Masteryhub Training Lab",
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

        <article>
          <header className="bg-gradient-to-b from-bg-secondary to-bg-primary px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-3xl">
              <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-secondary">
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <a href="https://masteryhub.se" className="transition hover:text-accent">
                      Masteryhub
                    </a>
                  </li>
                  <li aria-hidden="true">→</li>
                  <li>
                    <a href="https://blog.masteryhub.se" className="transition hover:text-accent">
                      Blog
                    </a>
                  </li>
                  <li aria-hidden="true">→</li>
                  <li className="text-white">{post.title}</li>
                </ol>
              </nav>

              <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${badgeClass}`}>
                {getCategoryLabel(post.category, locale)}
              </span>

              <TranslatedPostHeader post={post} />

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, locale)}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readingTime}</span>
                <span aria-hidden="true">·</span>
                <span>{post.author}</span>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
            <TranslatedPostBody post={post}>
              <MdxContent content={post.content} />
            </TranslatedPostBody>
          </div>
        </article>

        <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
          <CTABanner />

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