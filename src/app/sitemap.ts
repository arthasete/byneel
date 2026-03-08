import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { posts } from '@/data/posts';
import { postsFr } from '@/data/posts-fr';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://byneel.com';

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/kit`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/cookbookai`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/omnidrop`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/tiplog`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/beloved`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/cookies`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/omnidrop/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/omnidrop/terms`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/tiplog/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/tiplog/terms`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/cookbookai/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/bridgegen/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/earthpulse/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/ephemera/privacy`, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const allBlogSlugs = new Set([
    ...posts.map((p) => p.slug),
    ...postsFr.map((p) => p.slug),
  ]);
  const blogPages: MetadataRoute.Sitemap = Array.from(allBlogSlugs).map((slug) => ({
    url: `${base}/blog/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages, ...projectPages];
}
