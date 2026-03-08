import { posts } from '@/data/posts';
import { postsFr } from '@/data/posts-fr';
import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
  const slugs = new Set([
    ...posts.map((p) => p.slug),
    ...postsFr.map((p) => p.slug),
  ]);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogPostClient slug={slug} />;
}
