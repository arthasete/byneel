'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { posts } from '@/data/posts';
import { GlassCard } from '@/components/ui/GlassCard';

export default function BlogPage() {
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

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-brand-blue to-brand-violet opacity-10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 reveal">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
          >
            &larr; Accueil
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Blog<span className="gradient-text">.</span>
          </h1>
          <p className="text-lg text-muted max-w-xl leading-relaxed">
            Retours d&apos;exp&eacute;rience, choix techniques et r&eacute;flexions d&apos;un dev solo assist&eacute; par IA.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-6">
            {posts.map((post, i) => (
              <div key={post.slug} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <GlassCard className="p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-start gap-5">
                      <span className="text-4xl md:text-5xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {post.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2 text-xs text-muted">
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

                        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-2 group-hover:gradient-text transition-colors duration-300">
                          {post.title}
                        </h2>

                        <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs rounded-full border border-white/[0.1] text-muted/80"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
