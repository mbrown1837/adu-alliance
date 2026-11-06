import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Calculator, FileText, ArrowRight, MapPin, Compass } from 'lucide-react';
import { getPublishedPosts, getPublishedCategories } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Orange County ADU Insights & Educational Guides | ADU Alliance',
  description: 'Evidence-backed planning insights, California statutory updates, and construction cost guidance for Orange County homeowners building an ADU.',
  alternates: {
    canonical: 'https://adualliance.com/blog',
  },
  openGraph: {
    title: 'Orange County ADU Insights & Educational Guides | ADU Alliance',
    description: 'Evidence-backed planning insights, California statutory updates, and construction cost guidance for Orange County homeowners.',
    url: 'https://adualliance.com/blog',
    siteName: 'ADU Alliance',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogListingPage() {
  const publishedPosts = getPublishedPosts();
  const categories = getPublishedCategories();

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Page Header */}
      <div className="mb-14 text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-amber/10 border border-brand-amber/20 text-brand-amber text-xs font-mono font-bold uppercase tracking-widest">
          <BookOpen className="w-3.5 h-3.5" /> Educational Planning Guides
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
          Orange County ADU Insights &amp; Guides
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Objective educational research, statutory zoning analysis, and contractor scope evaluation designed specifically for homeowners in Orange County, California.
        </p>
      </div>

      {/* Category Pills (Active when published content exists) */}
      {categories.length > 0 && (
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          <span className="px-4 py-2 rounded-full text-xs font-mono font-bold uppercase bg-brand-amber text-black">
            All Articles ({publishedPosts.length})
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 rounded-full text-xs font-mono font-bold uppercase bg-brand-dark border border-brand-borderDark text-slate-300"
            >
              {cat}
            </span>
          ))}
        </div>
      )}

      {/* Published Content Grid OR Homeowner-Facing Empty State */}
      {publishedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-brand-dark border border-brand-borderDark rounded-2xl overflow-hidden hover:border-brand-amber/50 transition-all flex flex-col shadow-xl group"
            >
              <div className="relative w-full h-56 bg-brand-black">
                <Image
                  src={post.featuredImage.url}
                  alt={post.featuredImage.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-amber text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-white line-clamp-2 group-hover:text-brand-amber transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="w-full inline-flex items-center justify-center font-mono text-xs uppercase tracking-widest px-4 py-2.5 border border-brand-amber/40 rounded-full text-brand-amber hover:bg-brand-amber hover:text-black transition-colors font-bold"
                  >
                    Read Guide &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Homeowner-Facing Empty State (Clean & Jargon-Free) */
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="bg-brand-dark border border-brand-borderDark rounded-2xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-brand-amber/10 border border-brand-amber/30 text-brand-amber flex items-center justify-center mx-auto">
              <FileText className="w-7 h-7" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
              Educational Planning Guides Coming Soon
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              We are preparing comprehensive, source-verified educational guides on property taxes, contractor bidding scopes, and Orange County municipal fee categories.
            </p>

            <p className="text-xs text-slate-400 font-mono pt-1">
              Explore our active planning calculators and architectural resources below while our first guides are finalized.
            </p>
          </div>

          {/* Quick Links to Live Planning Tools */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 text-center">
              Active Planning Resources
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/calculator"
                className="bg-brand-black border border-brand-borderDark hover:border-brand-amber/50 p-5 rounded-xl transition-all group flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-brand-dark border border-brand-borderDark text-brand-amber group-hover:scale-105 transition-transform flex-shrink-0">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-brand-amber transition-colors">Budget Calculator</h4>
                  <p className="text-xs text-slate-400 mt-1">Model custom soft and hard construction scenarios.</p>
                </div>
              </Link>

              <Link
                href="/models"
                className="bg-brand-black border border-brand-borderDark hover:border-brand-amber/50 p-5 rounded-xl transition-all group flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-brand-dark border border-brand-borderDark text-brand-amber group-hover:scale-105 transition-transform flex-shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-brand-amber transition-colors">Layout Concepts</h4>
                  <p className="text-xs text-slate-400 mt-1">Explore custom stick-built ADU floor plan concepts.</p>
                </div>
              </Link>

              <Link
                href="/free-feasibility"
                className="bg-brand-black border border-brand-borderDark hover:border-brand-amber/50 p-5 rounded-xl transition-all group flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-brand-dark border border-brand-borderDark text-brand-amber group-hover:scale-105 transition-transform flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-brand-amber transition-colors">Property Assessment</h4>
                  <p className="text-xs text-slate-400 mt-1">Request a site zoning and setback review.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Restrained Bottom CTA */}
      <div className="mt-20 bg-brand-dark border border-brand-borderDark rounded-2xl p-8 sm:p-12 text-center space-y-4 max-w-4xl mx-auto shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
          Planning an ADU in Orange County?
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Before committing to architectural drafting or signing contractor agreements, evaluate your property&apos;s setback parameters, utility routes, and municipal zoning rules.
        </p>
        <div className="pt-2">
          <Link
            href="/free-feasibility"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-amber hover:bg-brand-amberDark text-black font-black text-xs uppercase tracking-wider rounded-full shadow-lg transition-all"
          >
            Request a Property Assessment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
