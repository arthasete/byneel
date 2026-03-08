import type { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Blog — ByNeel',
  description:
    "Retours d'expérience, choix techniques et réflexions d'un dev solo assisté par IA.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}
