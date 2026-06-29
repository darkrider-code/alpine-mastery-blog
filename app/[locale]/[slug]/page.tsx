import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { MDXComponents } from 'mdx/types'
import { evaluate } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import { getAllSlugs, getPostBySlug, getRelatedPosts } from '@/lib/posts'
import { SUPPORTED_LOCALES, getCategoryLabel } from '@/lib/translations'
import CTABanner from '@/components/CTABanner'
import { ScrollProgress } from '@/components/ScrollProgress'
import BlogCard from '@/components/BlogCard'

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return SUPPORTED_LOCALES.flatMap(locale =>
    slugs.map(slug => ({ locale, slug }))
  )
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const post = getPostBySlug(params.slug, params.locale)
  if (!post) return {}
  const url = 'https://blog.masteryhub.se/' + params.locale + '/' + params.slug
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries([
        ...SUPPORTED_LOCALES.map(l => [l, 'https://blog.masteryhub.se/' + l + '/' + params.slug]),
        ['x-default', 'https://blog.masteryhub.se/sv/' + params.slug],
      ]),
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      url: url,
    },
    twitter: { card: 'summary_large_image' },
  }
}

async function MdxContent({ content, components }: { content: string; components: MDXComponents }) {
  const { default: Content } = await evaluate(content, {
    ...runtime,
    development: false,
  })
  return <Content components={components} />
}

const mdxComponents: MDXComponents = {
  h1: () => null,
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-accent pl-4">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-white mt-8 mb-3">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-text-secondary leading-relaxed mb-4">{children}</p>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-accent pl-6 italic text-text-secondary my-6 bg-bg-card rounded-r-lg py-4 pr-4">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a href={href} className="text-accent hover:text-accent-hover underline">
      {children}
    </a>
  ),
  table: ({ children }) => (
    <table className="w-full border-collapse my-6">{children}</table>
  ),
  th: ({ children }) => (
    <th className="bg-bg-card text-white px-4 py-3 text-left border border-border">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 border border-border text-text-secondary">
      {children}
    </td>
  ),
}

export default async function ArticlePage({ params }: { params: { locale: string; slug: string } }) {
  const post = getPostBySlug(params.slug, params.locale)
  if (!post) return notFound()

  const relatedPosts = getRelatedPosts(post, params.locale, 3)
  const categoryLabel = getCategoryLabel(post.category, params.locale)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    inLanguage: params.locale,
    author: { '@type': 'Organization', name: 'Masteryhub' },
    publisher: { '@type': 'Organization', name: 'Masteryhub' },
    url: 'https://blog.masteryhub.se/' + params.locale + '/' + params.slug,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <nav aria-label="breadcrumb" className="mb-8">
          <ol
            style={{ listStyle: 'none', padding: 0, margin: 0 }}
            className="flex flex-wrap items-center gap-2 text-sm text-text-secondary"
          >
            <li style={{ listStyle: 'none' }}>
              <a href="https://masteryhub.se" className="hover:text-accent transition-colors">
                Masteryhub
              </a>
            </li>
            <li style={{ listStyle: 'none' }} aria-hidden="true">&raquo;</li>
            <li style={{ listStyle: 'none' }}>
              <Link href={'/' + params.locale} className="hover:text-accent transition-colors">
                Blog
              </Link>
            </li>
            <li style={{ listStyle: 'none' }} aria-hidden="true">&raquo;</li>
            <li style={{ listStyle: 'none' }} className="text-white">
              {post.title}
            </li>
          </ol>
        </nav>

        <div className="mb-12 pb-10 border-b border-border">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 bg-cyan-900 text-cyan-300">
            {categoryLabel}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-text-secondary">
            <span>{new Date(post.publishedAt).toLocaleDateString(params.locale, { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span className="text-border">&middot;</span>
            <span>{post.readingTime}</span>
            <span className="text-border">&middot;</span>
            <span>{post.author}</span>
          </div>
        </div>

        <article className="prose prose-invert prose-lg max-w-none mb-16">
          <MdxContent content={post.content} components={mdxComponents} />
        </article>

        <CTABanner product={post.product} />

        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl font-bold text-white mb-6">
              Fler artiklar i {categoryLabel}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug + '-' + params.locale} post={related} locale={params.locale} />
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  )
}