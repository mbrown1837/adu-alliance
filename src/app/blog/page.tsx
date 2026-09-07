import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

async function getPosts() {
  const res = await fetch('https://cms.adualliance.com/wp-json/wp/v2/posts?_embed&per_page=50', {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
}

export default async function BlogIndex() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen flex flex-col pt-32">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-white mb-6 tracking-tight">
            ADU Insights & Guides
          </h1>
          <p className="text-xl text-brand-gray-300">
            Expert advice, local compliance updates, and cost-saving strategies for building in Orange County.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => {
             const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://www.evoadu.com/assets/images/Home_Pic_5_Two_Home.jpg';
             const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'ADU Guide';
             let rawExcerpt = post.excerpt.rendered.replace(/<[^>]+>/g, '');
             rawExcerpt = rawExcerpt.replace(/&[a-z]+;/gi, '');
             
             return (
            <article 
              key={post.id} 
              className="bg-brand-gray-900 border border-brand-gray-800 rounded-2xl overflow-hidden hover:border-brand-amber transition-colors flex flex-col"
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
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-sm font-mono text-brand-gray-400 mb-4">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                </div>
                
                <h2 className="text-2xl font-bold font-display text-brand-white mb-4 line-clamp-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                
                <p className="text-brand-gray-300 mb-6 line-clamp-3">
                  {rawExcerpt}
                </p>
                
                <div className="mt-auto">
                  <Link href={`/blog/${post.slug}`}>
                    <button className="w-full group font-mono text-xs uppercase tracking-widest px-4 py-2 border border-brand-amber rounded-md text-brand-amber hover:bg-brand-amber hover:text-brand-black transition-colors">
                      Read Article
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          )})}
        </div>
      </main>
      <Footer />
    </div>
  );
}
