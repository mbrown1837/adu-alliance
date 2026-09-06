import React from 'react';
import type { Metadata } from 'next';
import { MOCK_BLOG_POSTS } from '@/lib/data';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Orange County ADU News, Guides & 2026 Laws | ADU Alliance Blog',
  description: 'Expert guides, line-item cost breakdowns, municipal permit timelines, and California ADU legal updates for Orange County homeowners.',
  alternates: {
    canonical: 'https://adualliance.com/blog',
  },
};

export default function BlogHubPage() {
  return (
    <div className="py-16 sm:py-24 px-6 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
          ORANGE COUNTY ADU KNOWLEDGE HUB
        </span>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white">
          Guides, Costs & <br />
          <span className="font-normal italic text-brand-amber">
            2026 California laws.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Stay informed on Orange County setback regulations, garage conversion costs, and California state housing legislation.
        </p>
      </div>

      {/* Featured Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MOCK_BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            className="p-8 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-6 flex flex-col justify-between group hover:border-brand-amber/50 transition-all"
          >
            <div className="space-y-4">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-brand-black relative">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-brand-amber font-bold border border-white/10">
                  {post.category}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-amber" /> {post.date}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-amber" /> {post.readTime}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white tracking-tight group-hover:text-brand-amber transition-colors leading-snug">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-brand-borderDark/60">
              <Link
                href={`/blog/${post.slug}`}
                className="text-xs font-mono font-bold text-brand-amber uppercase tracking-wider flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
              >
                Read Full Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Free Feasibility CTA */}
      <div className="text-center p-12 bg-gradient-to-r from-brand-dark to-brand-black rounded-3xl border border-brand-borderDark space-y-6">
        <h2 className="text-3xl font-black uppercase text-white tracking-tight">
          Have Questions About Your Specific Property?
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Every Orange County lot has unique setbacks, utility alignments, and municipal zoning rules. Request a free 30-minute feasibility assessment today.
        </p>
        <Link
          href="/free-feasibility"
          className="inline-block px-8 py-4 bg-brand-amber hover:bg-white text-black font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all"
        >
          Check Your Lot Feasibility &rarr;
        </Link>
      </div>
    </div>
  );
}
