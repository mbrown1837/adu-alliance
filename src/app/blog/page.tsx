import Link from 'next/link';
import Image from 'next/image';

async function getPosts() {
  const allPosts: any[] = [];
  let page = 1;
  let hasMore = true;
  
  while (hasMore) {
    try {
      const res = await fetch(`https://cms.adualliance.com/wp-json/wp/v2/posts?_embed&per_page=50&page=${page}`, {
        next: { revalidate: 3600 },
      });
      if (!res.ok) break;
      const posts = await res.json();
      if (posts.length === 0) break;
      allPosts.push(...posts);
      const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1');
      hasMore = page < totalPages;
      page++;
    } catch {
      break;
    }
  }
  return allPosts;
}

export default async function BlogIndex() {
  const posts = await getPosts();

  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
          ADU INSIGHTS &amp; LOCAL GUIDES
        </span>
        <h1 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
          Orange County ADU Insights &amp; Guides
        </h1>
        <p className="text-base sm:text-xl text-slate-300">
          Expert advice, local municipal compliance updates, and cost-saving strategies for building in Orange County.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => {
           const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/localized/adu_asset_52dc4cc0e2.jpg';
           const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'ADU Guide';
           let rawExcerpt = post.excerpt.rendered.replace(/<[^>]+>/g, '');
           rawExcerpt = rawExcerpt.replace(/&[a-z]+;/gi, '');
           
           return (
          <article 
            key={post.id} 
            className="bg-brand-dark border border-brand-borderDark rounded-2xl overflow-hidden hover:border-brand-amber transition-colors flex flex-col shadow-xl"
          >
            <div className="relative w-full h-56">
              <Image
                src={imageUrl}
                alt={post.title.rendered}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-brand-amber text-brand-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {category}
                </span>
              </div>
            </div>
            
            <div className="p-6 sm:p-8 flex flex-col flex-grow space-y-4">
              <div className="flex items-center text-xs font-mono text-slate-400">
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
              </div>
              
              <h2 className="text-xl font-bold text-white line-clamp-2" dangerouslySetInnerHTML={{ __html: post.title.rendered.replace(/&#8217;/g, "'") }} />
              
              <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                {rawExcerpt}
              </p>
              
              <div className="mt-auto pt-4">
                <Link href={`/blog/${post.slug}`}>
                  <button className="w-full font-mono text-xs uppercase tracking-widest px-4 py-2.5 border border-brand-amber rounded-full text-brand-amber hover:bg-brand-amber hover:text-black transition-colors font-bold">
                    Read Article &rarr;
                  </button>
                </Link>
              </div>
            </div>
          </article>
        )})}
      </div>
    </div>
  );
}
