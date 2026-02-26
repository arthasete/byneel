'use client';

import Link from 'next/link';
import { posts } from '@/data/posts';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function BlogPreview() {
  const latestPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-blue mb-3">
            Blog
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Derni&egrave;res r&eacute;flexions<span className="gradient-text">.</span>
          </h2>
          <p className="text-muted max-w-xl mb-12">
            Retours d&apos;exp, choix techniques et coulisses du d&eacute;veloppement.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block group h-full">
                <GlassCard className="p-6 h-full hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {post.icon}
                    </span>
                    <time dateTime={post.date} className="text-xs text-muted">
                      {new Date(post.date).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'short',
                      })}
                    </time>
                    <span className="text-xs text-muted">&middot; {post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight mb-2 group-hover:gradient-text transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs rounded-full border border-white/[0.08] text-muted/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white gradient-glow transition-all duration-300 hover:scale-105"
            >
              Voir tous les articles &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
