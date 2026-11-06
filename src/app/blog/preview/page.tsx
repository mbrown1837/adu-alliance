import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { SAMPLE_PREVIEW_POST, getPreviewPostBySlug } from '@/lib/blog';
import ArticleRenderer from '@/components/blog/ArticleRenderer';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  // In production builds and runtime, strictly withhold preview metadata
  if (process.env.NODE_ENV !== 'development') {
    return {
      title: 'Not Found | ADU Alliance',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: 'Template Preview (Internal Non-Public Sample) | ADU Alliance',
    description: 'Internal development preview demonstrating the ADU Alliance reusable blog template, typography, responsive tables, and source references.',
    robots: {
      index: false,
      follow: false,
      nocache: true,
    },
  };
}

export default async function BlogPreviewPage({ searchParams }: { searchParams: Promise<{ slug?: string }> }) {
  // Strict Development-Only Access Boundary:
  // Normal production requests receive a 404 Not Found and no sample body.
  if (process.env.NODE_ENV !== 'development') {
    notFound();
  }

  const { slug } = await searchParams;
  const post = slug ? getPreviewPostBySlug(slug) : SAMPLE_PREVIEW_POST;
  if (!post || !post.content.trim()) notFound();
  return <ArticleRenderer post={post} isPreview={true} />;
}
