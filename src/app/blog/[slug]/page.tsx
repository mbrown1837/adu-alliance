import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MOCK_BLOG_POSTS } from '@/lib/data';
import { Calendar, Clock, ArrowLeft, ShieldCheck, CheckCircle2, Phone } from 'lucide-react';
import Link from 'next/link';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return MOCK_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = MOCK_BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | ADU Alliance`,
    description: post.excerpt,
    alternates: {
      canonical: `https://adualliance.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://adualliance.com/blog/${post.slug}`,
      images: [{ url: post.featuredImage }],
      type: 'article',
    },
  };
}

export default function SingleBlogPostPage({ params }: BlogPostPageProps) {
  const post = MOCK_BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: '2026-02-01',
    author: {
      '@type': 'Organization',
      name: 'ADU Alliance Technical Team',
      url: 'https://adualliance.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ADU Alliance',
      logo: {
        '@type': 'ImageObject',
        url: 'https://adualliance.com/assets/img/logo.png',
      },
    },
  };

  return (
    <div className="py-16 sm:py-24 px-6 max-w-4xl mx-auto space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Back Link */}
      <div>
        <Link
          href="/blog"
          className="text-xs font-mono font-bold text-brand-amber uppercase tracking-wider flex items-center gap-1.5 hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to All Guides
        </Link>
      </div>

      {/* Post Header */}
      <header className="space-y-6">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber bg-brand-dark px-3 py-1.5 rounded-full border border-brand-borderDark inline-block">
          {post.category}
        </span>

        <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-xs font-mono text-slate-400 border-y border-brand-borderDark/60 py-3">
          <span>By {post.author}</span>
          <span>&bull;</span>
          <span>{post.date}</span>
          <span>&bull;</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-brand-dark border border-brand-borderDark">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Key Takeaways Box (Direct AI Answer Engine Requirement) */}
      <div className="p-6 sm:p-8 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-4">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-amber flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-amber" /> Key Takeaways for Orange County Homeowners
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
            <span>California state laws (SB 9 & AB 1033) provide ministerial 60-day review timelines for compliant accessory dwelling units.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
            <span>Side and rear setbacks are capped at a maximum of 4 feet across all single-family zones in Orange County.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
            <span>Turnkey garage conversions represent the fastest and most cost-effective path to secondary living space.</span>
          </li>
        </ul>
      </div>

      {/* Main Body */}
      <div
        className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-sm sm:text-base space-y-6"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* In-Article Conversion Card */}
      <div className="p-8 sm:p-10 bg-gradient-to-r from-brand-dark to-brand-black rounded-3xl border border-brand-borderDark space-y-6 text-center">
        <h3 className="text-2xl font-black uppercase text-white tracking-tight">
          Want to Check What is Buildable on Your Specific Parcel?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
          We provide a free property feasibility assessment within 24 hours. Know your setbacks, model options, and ballpark budgets before committing to architectural drafting.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/free-feasibility"
            className="px-8 py-3.5 bg-brand-amber hover:bg-white text-black font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all"
          >
            Request Free Lot Feasibility Plan &rarr;
          </Link>
          <a
            href="tel:+16572984061"
            className="px-8 py-3.5 bg-brand-black hover:bg-brand-dark text-white border border-brand-borderDark font-bold text-xs uppercase tracking-wider rounded-full transition-all"
          >
            Call (657) 298-4061
          </a>
        </div>
      </div>
    </div>
  );
}
