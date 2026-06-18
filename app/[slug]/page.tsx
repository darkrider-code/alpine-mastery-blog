import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogCard, { categoryColors, formatDate } from "@/components/BlogCard";
import CTABanner from "@/components/CTABanner";
import ScrollProgress from "@/components/ScrollProgress";
import TranslatedPostBody from "@/components/TranslatedPostBody";
import TranslatedPostHeader from "@/components/TranslatedPostHeader";
import TranslatedRelatedTitle from "@/components/TranslatedRelatedTitle";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const title = `${post.title} | Alpine Mastery Blog`;
  const url = `https://blog.masteryhub.se/${post.slug}`;

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
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post, 3);
  const badgeClass = categoryColors[post.category] ?? "bg-bg-secondary text-text-secondary";
  const postUrl = `https://blog.masteryhub.se/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Alpine Mastery",
      url: "https://alpine.masteryhub.se",
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
        name: "Blogg",
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
              {post.category}
            </span>

            <TranslatedPostHeader />

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-text-secondary">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime}</span>
              <span aria-hidden="true">·</span>
              <span>{post.author}</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <TranslatedPostBody />
        </div>
      </article>

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <CTABanner />

        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <TranslatedRelatedTitle category={post.category} />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
