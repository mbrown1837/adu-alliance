import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeasibilityForm from '@/components/FeasibilityForm';

async function getPost(slug: string) {
  const res = await fetch(`https://cms.adualliance.com/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
    next: { revalidate: 3600 },
  });
  const posts = await res.json();
  return posts[0] || null;
}

export async function generateStaticParams() {
  const res = await fetch('https://cms.adualliance.com/wp-json/wp/v2/posts?per_page=100');
  const posts = await res.json();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) {
    return { title: 'Not Found' };
  }
  
  let rawExcerpt = post.excerpt.rendered.replace(/<[^>]+>/g, '');
  rawExcerpt = rawExcerpt.replace(/&[a-z]+;/gi, '');
  
  return {
    title: `${post.title.rendered.replace(/&#8217;/g, "'")} | ADU Alliance`,
    description: rawExcerpt,
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://www.evoadu.com/assets/images/Home_Pic_5_Two_Home.jpg';
  const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'ADU Guide';
  const authorName = post._embedded?.['author']?.[0]?.name || 'ADU Alliance Technical Team';

  // Specific check to preserve the feasibility form injection for exact critical slugs
  const isHighValueLeadPage = [
    'adu-garage-conversion-cost-in-orange-county',
    'adu-orange-county-2025-why-everyone-is-talking-about-new-laws-and-you-should-too',
    'orange-county-adu-permits-sb-543',
    'adu-construction-cost-per-square-foot-2026-in-orange-county-exposed-guide'
  ].includes(post.slug);

  return (
    <div className="min-h-screen flex flex-col pt-32">
      <Navbar />
      <main className="flex-grow w-full">
        <article>
          {/* Post Header */}
          <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
            <div className="mb-6">
              <span className="bg-brand-amber text-brand-black px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                {category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-white mb-8 tracking-tight leading-tight" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            
            <div className="flex items-center justify-center space-x-6 text-brand-gray-400 font-mono text-sm">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {authorName}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-brand-gray-800">
              <Image
                src={imageUrl}
                alt={post.title.rendered}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Block */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            {isHighValueLeadPage && (
              <div className="mb-12">
                 {/* High-value conversion logic: stick a lead form at the very top for SEO migrated pages */}
                 <FeasibilityForm />
              </div>
            )}
            
            <div className="prose prose-invert prose-brand prose-lg max-w-none
                            prose-headings:font-display prose-headings:font-bold prose-headings:text-brand-white
                            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-brand-gray-800 prose-h2:pb-4
                            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                            prose-p:text-brand-gray-300 prose-p:leading-relaxed
                            prose-a:text-brand-amber prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-brand-white
                            prose-ul:text-brand-gray-300 prose-li:marker:text-brand-amber
                            prose-blockquote:border-brand-amber prose-blockquote:bg-brand-gray-900 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-brand-gray-100"
                 dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
            
            {/* Bottom CTA for all blogs */}
            <div className="mt-16 bg-brand-gray-900 border border-brand-gray-800 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-amber/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-3xl font-display font-bold text-brand-white mb-4 relative z-10">Ready to unlock your property's potential?</h3>
              <p className="text-xl text-brand-gray-300 mb-8 relative z-10 max-w-2xl mx-auto">
                Get a free, custom feasibility report detailing exactly what you can build on your Orange County lot in 2026.
              </p>
              <Link href="/free-feasibility" className="relative z-10 inline-block font-mono text-sm uppercase tracking-widest bg-brand-amber text-brand-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors duration-300">
                Get Free Feasibility Report
              </Link>
            </div>
            
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
