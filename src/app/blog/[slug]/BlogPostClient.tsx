'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { posts } from '@/data/posts';
import { GlassCard } from '@/components/ui/GlassCard';

/** Very lightweight markdown → JSX for blog posts */
function renderMarkdown(md: string) {
  const lines = md.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Heading ##
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold tracking-tight mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // Blockquote >
    if (line.startsWith('> ')) {
      elements.push(
        <blockquote
          key={i}
          className="border-l-2 border-brand-blue/50 pl-5 py-2 my-6 text-lg italic text-muted"
        >
          {line.slice(2)}
        </blockquote>
      );
      i++;
      continue;
    }

    // List item - **bold** — text
    if (line.startsWith('- ')) {
      const listItems: React.ReactNode[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        const itemText = lines[i].slice(2);
        const boldMatch = itemText.match(/^\*\*(.+?)\*\*(.*)$/);
        if (boldMatch) {
          listItems.push(
            <li key={i} className="flex items-start gap-2 mb-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
              <span>
                <strong className="text-foreground">{boldMatch[1]}</strong>
                <span className="text-muted">{boldMatch[2]}</span>
              </span>
            </li>
          );
        } else {
          listItems.push(
            <li key={i} className="flex items-start gap-2 mb-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
              <span className="text-muted">{itemText}</span>
            </li>
          );
        }
        i++;
      }
      elements.push(
        <ul key={`list-${i}`} className="my-4 space-y-1">
          {listItems}
        </ul>
      );
      continue;
    }

    // Numbered list
    if (/^\d+\.\s/.test(line)) {
      const listItems: React.ReactNode[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        const itemText = lines[i].replace(/^\d+\.\s/, '');
        const boldMatch = itemText.match(/^\*\*(.+?)\*\*(.*)$/);
        if (boldMatch) {
          listItems.push(
            <li key={i} className="mb-2 text-muted">
              <strong className="text-foreground">{boldMatch[1]}</strong>
              {boldMatch[2]}
            </li>
          );
        } else {
          listItems.push(
            <li key={i} className="mb-2 text-muted">{itemText}</li>
          );
        }
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="my-4 list-decimal list-inside space-y-1">
          {listItems}
        </ol>
      );
      continue;
    }

    // Empty line
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Paragraph (with inline bold support)
    const parts = line.split(/(\*\*.*?\*\*)/g);
    elements.push(
      <p key={i} className="text-muted leading-relaxed mb-4">
        {parts.map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className="text-foreground">{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </p>
    );
    i++;
  }

  return elements;
}

export default function BlogPostClient({ slug }: { slug: string }) {
  const post = posts.find((p) => p.slug === slug);
  const postIndex = posts.findIndex((p) => p.slug === slug);
  const nextPost = posts[(postIndex + 1) % posts.length];
  const prevPost = posts[(postIndex - 1 + posts.length) % posts.length];

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-30px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-bold mb-4">Article introuvable</h1>
        <Link href="/blog" className="text-muted hover:text-foreground transition-colors">
          &larr; Retour au blog
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br ${post.gradient} opacity-10 rounded-full blur-[120px] pointer-events-none`}
        />

        <div className="max-w-3xl mx-auto relative z-10 reveal">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
          >
            &larr; Tous les articles
          </Link>

          <div className="flex items-center gap-3 mb-4 text-sm text-muted">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <span>&middot;</span>
            <span>{post.readTime} de lecture</span>
          </div>

          <div className="flex items-start gap-5 mb-6">
            <span className="text-5xl md:text-6xl animate-float-slow shrink-0">{post.icon}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              {post.title}
            </h1>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full border border-white/15 text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto reveal" style={{ transitionDelay: '100ms' }}>
          <GlassCard className="p-8 md:p-12">
            <div className="prose-dark">{renderMarkdown(post.content)}</div>
          </GlassCard>
        </div>
      </section>

      {/* Navigation between posts */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href={`/blog/${prevPost.slug}`} className="group">
                <GlassCard className="p-6 hover:-translate-y-1 transition-transform duration-300">
                  <p className="text-xs text-muted mb-2">&larr; Article pr&eacute;c&eacute;dent</p>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{prevPost.icon}</span>
                    <span className="font-bold text-sm group-hover:gradient-text transition-colors duration-300 line-clamp-1">
                      {prevPost.title}
                    </span>
                  </div>
                </GlassCard>
              </Link>

              <Link href={`/blog/${nextPost.slug}`} className="group">
                <GlassCard className="p-6 hover:-translate-y-1 transition-transform duration-300 text-right">
                  <p className="text-xs text-muted mb-2">Article suivant &rarr;</p>
                  <div className="flex items-center justify-end gap-3">
                    <span className="font-bold text-sm group-hover:gradient-text transition-colors duration-300 line-clamp-1">
                      {nextPost.title}
                    </span>
                    <span className="text-2xl">{nextPost.icon}</span>
                  </div>
                </GlassCard>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to blog */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white gradient-glow transition-all duration-300 hover:scale-105"
          >
            Voir tous les articles
          </Link>
        </div>
      </section>
    </main>
  );
}
