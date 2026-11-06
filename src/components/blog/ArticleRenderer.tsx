import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, ExternalLink, HelpCircle, BookOpen, ChevronRight, AlertTriangle } from 'lucide-react';
import { BlogPostData, getRelatedPublishedPosts } from '@/lib/blog';
import { sanitizeHtml } from '@/lib/sanitize-html';

interface ArticleRendererProps {
  post: BlogPostData;
  isPreview?: boolean;
}

export default function ArticleRenderer({ post, isPreview = false }: ArticleRendererProps) {
  const sanitizedBody = sanitizeHtml(post.content);
  const relatedPosts = isPreview ? [] : getRelatedPublishedPosts(post);

  // Schema.org Article / BlogPosting Structured Data
  const authorType = post.author.type === 'Person' ? 'Person' : 'Organization';
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://adualliance.com/blog/${post.slug}`,
    },
    headline: post.title,
    description: post.excerpt,
    image: [
      post.featuredImage.url.startsWith('http')
        ? post.featuredImage.url
        : `https://adualliance.com${post.featuredImage.url}`,
    ],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': authorType,
      name: post.author.name,
      url: 'https://adualliance.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ADU Alliance',
      url: 'https://adualliance.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://adualliance.com/images/logo-transparent.png',
      },
    },
  };

  // Schema.org BreadcrumbList Structured Data
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://adualliance.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://adualliance.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://adualliance.com/blog/${post.slug}`,
      },
    ],
  };

  // Safely escape '<' in JSON-LD strings to prevent inline script breakout
  const safeArticleSchemaJson = JSON.stringify(articleSchema).replace(/</g, '\\u003c');
  const safeBreadcrumbSchemaJson = JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c');

  return (
    <div className="py-8 sm:py-14 w-full">
      {/* Inject JSON-LD Structured Data only for public / non-preview pages */}
      {!isPreview && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeArticleSchemaJson }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeBreadcrumbSchemaJson }}
          />
        </>
      )}

      {/* Development Preview Banner */}
      {isPreview && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="p-4 rounded-xl bg-amber-500/10 border-2 border-brand-amber text-brand-amber flex items-start gap-3 shadow-lg">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <strong className="uppercase font-bold tracking-wider block">
                Internal Development Template Preview &bull; Not For Public Indexation
              </strong>
              <p className="text-slate-300">
                This route exercises the shared article renderer, heading hierarchy, responsive tables, and citations using clearly labeled synthetic data. It is restricted to development mode and barred from production sitemaps.
              </p>
            </div>
          </div>
        </div>
      )}

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-brand-amber transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/blog" className="hover:text-brand-amber transition-colors">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-300 truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
        </nav>

        {/* Header Block */}
        <header className="mb-10 space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-brand-amber text-black">
              {post.category}
            </span>
            {isPreview && (
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest border border-slate-700 px-2.5 py-0.5 rounded">
                Preview Mode
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-slate-400 border-t border-brand-borderDark/60 pt-4">
            <div className="flex items-center gap-1.5 text-slate-300">
              <User className="w-4 h-4 text-brand-amber" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-500" />
              <span>{post.publishedAt ? `Published: ${new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}` : 'Draft · Not published'}</span>
            </div>
            {post.updatedAt && post.updatedAt !== post.publishedAt && (
              <div className="flex items-center gap-1.5 text-slate-400">
                <Clock className="w-4 h-4 text-slate-500" />
                <span>Updated: {new Date(post.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <span>&bull; {post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-brand-borderDark bg-brand-dark">
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
          {(post.featuredImage.caption || post.featuredImage.credit) && (
            <p className="text-xs text-slate-400 font-mono mt-2 text-center">
              {post.featuredImage.caption}{' '}
              {post.featuredImage.credit && <span className="text-slate-500">Source: {post.featuredImage.credit}</span>}
            </p>
          )}
        </div>

        {/* Table of Contents */}
        {post.tableOfContents && post.tableOfContents.length > 0 && (
          <nav aria-label="Table of Contents" className="mb-12 p-6 rounded-2xl bg-brand-dark border border-brand-borderDark">
            <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
              <BookOpen className="w-4 h-4" /> Table of Contents
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              {post.tableOfContents.map((item) => (
                <li key={item.id} className={item.level === 3 ? 'ml-4' : ''}>
                  <a href={`#${item.id}`} className="hover:text-brand-amber transition-colors underline-offset-4 hover:underline">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Content Body Styled via .blog-prose */}
        <div
          className="blog-prose mb-16"
          dangerouslySetInnerHTML={{ __html: sanitizedBody }}
        />

        {/* FAQ Section */}
        {post.faq && post.faq.length > 0 && (
          <section
            id="frequently-asked-questions"
            aria-labelledby="faq-heading"
            className="mb-16 pt-8 border-t border-brand-borderDark scroll-mt-28"
          >
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-brand-amber" />
              <h2 id="faq-heading" className="text-2xl font-bold text-white uppercase tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {post.faq.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-brand-dark border border-brand-borderDark space-y-2">
                  <h3 className="text-base font-bold text-white">{item.question}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Official Sources & References Section */}
        {post.sources && post.sources.length > 0 && (
          <section
            id="sources-and-references"
            aria-labelledby="sources-heading"
            className="mb-16 pt-8 border-t border-brand-borderDark scroll-mt-28"
          >
            <h2 id="sources-heading" className="text-lg font-bold text-white uppercase tracking-wider mb-4 font-mono text-xs text-brand-amber">
              Official References &amp; Primary Legal Sources
            </h2>
            <div className="space-y-3">
              {post.sources.map((src, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-brand-dark/50 border border-brand-borderDark flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-slate-200">{src.title}</div>
                    {src.citationPassage && (
                      <div className="text-xs text-slate-400 font-mono">{src.citationPassage}</div>
                    )}
                    {src.note && (
                      <div className="text-xs text-slate-400">{src.note}</div>
                    )}
                  </div>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-amber hover:text-brand-amberDark transition-colors p-2 rounded-lg bg-brand-black border border-brand-borderDark flex-shrink-0"
                    aria-label={`Open external source: ${src.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Author / Editorial Responsibility Block */}
        <section aria-labelledby="author-heading" className="mb-16 p-6 sm:p-8 rounded-2xl bg-brand-dark border border-brand-borderDark shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-brand-black border border-brand-borderDark flex items-center justify-center text-brand-amber font-bold text-xl flex-shrink-0 overflow-hidden relative">
              {post.author.avatarUrl ? (
                <Image
                  src={post.author.avatarUrl}
                  alt={post.author.name}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              ) : (
                <User className="w-7 h-7" />
              )}
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-brand-amber font-bold block">
                Editorial &amp; Research Byline
              </span>
              <h2 id="author-heading" className="text-lg font-bold text-white">
                {post.author.name}
              </h2>
              <p className="text-xs text-brand-amber font-mono">{post.author.role}</p>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                {post.author.bio}
              </p>
            </div>
          </div>

          {/* Optional Reviewer Attribution (Rendered only when present) */}
          {post.reviewer && (
            <div className="mt-6 pt-5 border-t border-brand-borderDark/60 flex items-start gap-3 text-xs text-slate-400">
              <span className="px-2 py-0.5 rounded bg-brand-amber/10 border border-brand-amber/20 text-brand-amber font-mono font-bold text-[10px] uppercase flex-shrink-0">
                Technical Review
              </span>
              <div>
                <strong className="text-slate-200">{post.reviewer.name}</strong> ({post.reviewer.role}
                {post.reviewer.credentials ? ` &bull; ${post.reviewer.credentials}` : ''})
                {post.reviewer.bio && <p className="text-slate-400 mt-0.5">{post.reviewer.bio}</p>}
              </div>
            </div>
          )}
        </section>

        {/* Related Articles Section (Rendered only when published related articles exist) */}
        {relatedPosts.length > 0 && (
          <section aria-labelledby="related-heading" className="mb-16 pt-8 border-t border-brand-borderDark">
            <h2 id="related-heading" className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-6">
              Related Published Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="p-5 rounded-xl bg-brand-dark border border-brand-borderDark hover:border-brand-amber/40 transition-colors flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-brand-amber uppercase tracking-wider font-bold">
                      {rel.category}
                    </span>
                    <h3 className="text-sm font-bold text-white group-hover:text-brand-amber transition-colors line-clamp-2">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 text-xs font-mono text-brand-amber flex items-center gap-1 font-bold">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Footer: Related Services & Assessment CTA */}
        <footer className="space-y-8 pt-8 border-t border-brand-borderDark">
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Related Orange County Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="/services/adu-design"
                className="p-4 rounded-xl bg-brand-dark border border-brand-borderDark hover:border-brand-amber/40 transition-colors block text-xs font-bold text-slate-200 hover:text-white"
              >
                &bull; Plans &amp; Design Architecture &rarr;
              </Link>
              <Link
                href="/services/garage-conversion"
                className="p-4 rounded-xl bg-brand-dark border border-brand-borderDark hover:border-brand-amber/40 transition-colors block text-xs font-bold text-slate-200 hover:text-white"
              >
                &bull; Garage Conversion Overview &rarr;
              </Link>
              <Link
                href="/services/adu-permits"
                className="p-4 rounded-xl bg-brand-dark border border-brand-borderDark hover:border-brand-amber/40 transition-colors block text-xs font-bold text-slate-200 hover:text-white"
              >
                &bull; City Permitting Assistance &rarr;
              </Link>
            </div>
          </div>

          {/* Standardized Restrained CTA */}
          <div className="p-8 sm:p-10 rounded-2xl bg-brand-black border border-brand-borderDark text-center space-y-4 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-amber/5 rounded-full blur-2xl pointer-events-none"></div>
            <h3 className="text-2xl font-black uppercase text-white tracking-tight relative z-10">
              Planning an ADU in Orange County?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed relative z-10">
              Before committing to architectural drafting or finalizing contractor bids, evaluate your property&apos;s setback parameters, utility routes, and municipal feasibility.
            </p>
            <div className="pt-2 relative z-10">
              <Link
                href="/free-feasibility"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-amber hover:bg-brand-amberDark text-black font-black text-xs uppercase tracking-wider rounded-full shadow-lg transition-all"
              >
                Request a Property Assessment <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
