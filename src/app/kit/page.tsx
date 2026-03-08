import type { Metadata } from 'next';
import KitPageClient from './KitPageClient';

export const metadata: Metadata = {
  title: 'ByNeel Starter Kit — Zero to App Store with Claude Code',
  description:
    'The complete kit for non-devs building apps with Claude Code. CLAUDE.md templates, Flutter starter, App Store checklist, 15 prompts & setup scripts. $19 (launch price).',
  alternates: {
    canonical: 'https://byneel.com/kit',
  },
  openGraph: {
    title: 'ByNeel Starter Kit — Zero to App Store with Claude Code',
    description: 'Everything you need to go from idea to published app. $19 launch price.',
    images: ['/og-kit.png'],
    url: 'https://byneel.com/kit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ByNeel Starter Kit — Zero to App Store with Claude Code',
    description: 'Everything you need to go from idea to published app. $19 launch price.',
    images: ['/og-kit.png'],
  },
};

export default function KitPage() {
  return <KitPageClient />;
}
