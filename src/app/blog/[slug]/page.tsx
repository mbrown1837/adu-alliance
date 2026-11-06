import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPublishedPostBySlug, getPublishedPosts } from '@/lib/blog';
import ArticleRenderer from '@/components/blog/ArticleRenderer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getPublishedPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedPostBySlug(slug);

  if (!post) {
    return {
      title: 'Guide Not Found | ADU Alliance',
      robots: { index: false, follow: false },
    };
  }

  const title = post.seoTitle || `${post.title} | ADU Alliance`;
  const description = post.seoDescription || post.excerpt;

  return {
    title,
    description,
    alternates: {
      canonical: `https://adualliance.com/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://adualliance.com/blog/${slug}`,
      siteName: 'ADU Alliance',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage.url.startsWith('http')
            ? post.featuredImage.url
            : `https://adualliance.com${post.featuredImage.url}`,
          width: post.featuredImage.width || 1200,
          height: post.featuredImage.height || 514,
          alt: post.featuredImage.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [post.featuredImage.url],
    },
    robots: post.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPublishedPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <ArticleRenderer post={post} />;
}
