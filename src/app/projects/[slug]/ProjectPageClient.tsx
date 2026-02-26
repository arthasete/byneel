'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { projects } from '@/data/projects';
import { GlassCard } from '@/components/ui/GlassCard';
import { ArrowRight } from 'lucide-react';

export default function ProjectPageClient({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  // Trigger .reveal → .revealed via IntersectionObserver
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

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-bold mb-4">Projet introuvable</h1>
        <Link href="/#projects" className="text-muted hover:text-foreground transition-colors">
          &larr; Retour aux projets
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br ${project.gradient} opacity-15 rounded-full blur-[120px] pointer-events-none`} />

        <div className="max-w-4xl mx-auto relative z-10 reveal">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
          >
            &larr; Tous les projets
          </Link>

          <div className="flex items-start gap-6 mb-8">
            <span className="text-6xl md:text-7xl animate-float-slow">{project.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                {project.comingSoon && (
                  <span className="px-4 py-1.5 text-xs rounded-full bg-gradient-to-r from-brand-blue/20 to-brand-violet/20 text-foreground border border-brand-blue/30 font-semibold animate-pulse-glow">
                    ✨ Bient&ocirc;t disponible
                  </span>
                )}
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs rounded-full border border-white/15 text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            {project.longDescription}
          </p>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="px-6 -mt-4 mb-8">
        <div className="max-w-4xl mx-auto reveal">
          <div className="grid grid-cols-3 gap-4">
            <GlassCard className="p-5 text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent mb-1">
                {project.features.length}
              </div>
              <p className="text-xs text-muted">Fonctionnalit&eacute;s</p>
            </GlassCard>
            <GlassCard className="p-5 text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan to-brand-blue bg-clip-text text-transparent mb-1">
                {project.techStack.length}
              </div>
              <p className="text-xs text-muted">Technologies</p>
            </GlassCard>
            <GlassCard className="p-5 text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-brand-violet to-pink bg-clip-text text-transparent mb-1">
                {project.tags.length}
              </div>
              <p className="text-xs text-muted">Plateformes</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-blue mb-3">
              Fonctionnalit&eacute;s
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">
              Ce que {project.title} peut faire
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, i) => (
              <div key={feature} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <GlassCard className="p-5 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start gap-3">
                    <span className={`mt-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-r ${project.gradient} shrink-0 group-hover:scale-150 transition-transform duration-300`} />
                    <p className="text-sm text-foreground/90 leading-relaxed">{feature}</p>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-blue mb-3">
              Technologies
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">
              Stack technique
            </h2>
          </div>

          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2.5 text-sm rounded-xl border border-white/[0.12] bg-white/[0.04] text-foreground/80 font-medium hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture overview */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-blue mb-3">
              Architecture
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">
              Comment c&apos;est construit
            </h2>
          </div>

          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <GlassCard className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl mb-3">🏗️</div>
                  <h4 className="font-bold text-foreground mb-2">Frontend</h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.techStack.includes('Flutter') || project.techStack.includes('Dart')
                      ? 'Flutter avec Dart pour une UI native cross-platform performante. Riverpod pour le state management.'
                      : project.techStack.includes('Swift')
                      ? 'SwiftUI natif pour une expérience iOS optimale avec Core ML pour l\'IA embarquée.'
                      : 'Dashboard web standalone avec interface responsive et temps réel.'}
                  </p>
                </div>
                <div>
                  <div className="text-2xl mb-3">⚡</div>
                  <h4 className="font-bold text-foreground mb-2">Backend</h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.techStack.includes('Supabase')
                      ? 'Supabase pour l\'authentification, la base de données PostgreSQL et le stockage en temps réel.'
                      : project.techStack.includes('FastAPI')
                      ? 'FastAPI pour une API REST haute performance avec workers asynchrones et WebSocket.'
                      : project.techStack.includes('SQLite') || project.techStack.includes('SQLite FTS5')
                      ? 'SQLite local pour un stockage rapide et fiable sans serveur. Tout reste sur l\'appareil.'
                      : 'Architecture serverless avec stockage local prioritaire.'}
                  </p>
                </div>
                <div>
                  <div className="text-2xl mb-3">🔒</div>
                  <h4 className="font-bold text-foreground mb-2">S&eacute;curit&eacute;</h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.techStack.includes('AES-256-GCM')
                      ? 'Chiffrement AES-256-GCM de bout en bout. Aucune donnée ne transite par un serveur tiers.'
                      : project.slug === 'beloved'
                      ? 'Authentification sécurisée via Supabase Auth. Données chiffrées en transit et au repos.'
                      : 'Données stockées localement. Clés API chiffrées via Keychain/Keystore natif.'}
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Screenshots placeholder */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-blue mb-3">
              Aper&ccedil;u
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">
              Captures d&apos;&eacute;cran
            </h2>
          </div>

          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <GlassCard className="p-12 flex flex-col items-center justify-center min-h-[280px]">
              <div className="text-5xl mb-4 opacity-50">{project.icon}</div>
              <p className="text-muted text-sm text-center mb-2">
                Captures d&apos;&eacute;cran en cours de pr&eacute;paration
              </p>
              <p className="text-muted/50 text-xs text-center">
                Les visuels seront ajout&eacute;s lors du lancement
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Navigation between projects */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href={`/projects/${prevProject.slug}`} className="group">
                <GlassCard className="p-6 hover:-translate-y-1 transition-transform duration-300">
                  <p className="text-xs text-muted mb-2">&larr; Projet pr&eacute;c&eacute;dent</p>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{prevProject.icon}</span>
                    <span className="font-bold group-hover:gradient-text-cyan transition-colors duration-300">{prevProject.title}</span>
                  </div>
                </GlassCard>
              </Link>

              <Link href={`/projects/${nextProject.slug}`} className="group">
                <GlassCard className="p-6 hover:-translate-y-1 transition-transform duration-300 text-right">
                  <p className="text-xs text-muted mb-2">Projet suivant &rarr;</p>
                  <div className="flex items-center justify-end gap-3">
                    <span className="font-bold group-hover:gradient-text-cyan transition-colors duration-300">{nextProject.title}</span>
                    <span className="text-2xl">{nextProject.icon}</span>
                  </div>
                </GlassCard>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white gradient-glow transition-all duration-300 hover:scale-105"
          >
            Voir tous les projets <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
