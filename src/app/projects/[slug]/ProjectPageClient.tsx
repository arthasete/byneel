'use client';

import Link from 'next/link';
import { useEffect, useMemo } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useProjects } from '@/i18n/useLocalizedData';
import { GlassCard } from '@/components/ui/GlassCard';
import { ArrowRight } from 'lucide-react';

function useRevealAnimation() {
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
}

export default function ProjectPageClient({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const localizedProjects = useProjects();

  useRevealAnimation();

  const project = useMemo(() => localizedProjects.find((p) => p.slug === slug), [localizedProjects, slug]);
  const projectIndex = useMemo(() => localizedProjects.findIndex((p) => p.slug === slug), [localizedProjects, slug]);
  const nextProject = useMemo(() => localizedProjects[(projectIndex + 1) % localizedProjects.length], [localizedProjects, projectIndex]);
  const prevProject = useMemo(() => localizedProjects[(projectIndex - 1 + localizedProjects.length) % localizedProjects.length], [localizedProjects, projectIndex]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-bold mb-4">{t('projectPage.notFound')}</h1>
        <Link href="/#projects" className="text-muted hover:text-foreground transition-colors">
          &larr; {t('projectPage.backToProjects')}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-clip">
        {/* Main gradient orb — stronger */}
        <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br ${project.gradient} opacity-25 rounded-full blur-[140px] pointer-events-none`} />
        {/* Secondary gradient orb */}
        <div className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl ${project.gradient} opacity-15 rounded-full blur-[120px] pointer-events-none`} />

        <div className="max-w-4xl mx-auto relative z-10 reveal">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
          >
            &larr; {t('projectPage.allProjects')}
          </Link>

          <div className="flex items-start gap-4 md:gap-6 mb-8">
            <span className="text-5xl md:text-7xl animate-float-slow shrink-0">{project.icon}</span>
            <div className="min-w-0">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 leading-[1.15]">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                {project.comingSoon && (
                  <span className="px-4 py-1.5 text-xs rounded-full bg-gradient-to-r from-brand-blue/20 to-brand-violet/20 text-foreground border border-brand-blue/30 font-semibold animate-pulse-glow">
                    {'✨ ' + t('projectPage.comingSoon')}
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

      {/* Gradient divider line */}
      <div className="px-6">
        <div className={`max-w-4xl mx-auto h-px bg-gradient-to-r ${project.gradient} opacity-40`} />
      </div>

      {/* Key Stats Bar */}
      <section className="px-6 py-10">
        <div className="max-w-4xl mx-auto reveal">
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            <GlassCard className="p-3 md:p-5 text-center">
              <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent pb-0.5">
                {project.features.length}
              </div>
              <p className="text-[10px] md:text-xs text-muted">{t('projectPage.features')}</p>
            </GlassCard>
            <GlassCard className="p-3 md:p-5 text-center">
              <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-cyan to-brand-blue bg-clip-text text-transparent pb-0.5">
                {project.techStack.length}
              </div>
              <p className="text-[10px] md:text-xs text-muted">{t('projectPage.technologies')}</p>
            </GlassCard>
            <GlassCard className="p-3 md:p-5 text-center">
              <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-brand-violet to-pink bg-clip-text text-transparent pb-0.5">
                {project.tags.length}
              </div>
              <p className="text-[10px] md:text-xs text-muted">{t('projectPage.platforms')}</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-blue mb-3">
              {t('projectPage.features')}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">
              {t('projectPage.featuresTitle').replace('{title}', project.title)}
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
              {t('projectPage.technologies')}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">
              {t('projectPage.techStack')}
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
              {t('projectPage.architecture')}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">
              {t('projectPage.howBuilt')}
            </h2>
          </div>

          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <GlassCard className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl mb-3">🏗️</div>
                  <h4 className="font-bold text-foreground mb-2">{t('projectPage.frontend')}</h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.techStack.includes('Flutter') || project.techStack.includes('Dart')
                      ? t('projectPage.arch.flutter')
                      : project.techStack.includes('Swift')
                      ? t('projectPage.arch.swift')
                      : t('projectPage.arch.web')}
                  </p>
                </div>
                <div>
                  <div className="text-2xl mb-3">⚡</div>
                  <h4 className="font-bold text-foreground mb-2">{t('projectPage.backend')}</h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.techStack.includes('Supabase')
                      ? t('projectPage.arch.supabase')
                      : project.techStack.includes('FastAPI')
                      ? t('projectPage.arch.fastapi')
                      : project.techStack.includes('SQLite') || project.techStack.includes('SQLite FTS5')
                      ? t('projectPage.arch.sqlite')
                      : t('projectPage.arch.serverless')}
                  </p>
                </div>
                <div>
                  <div className="text-2xl mb-3">🔒</div>
                  <h4 className="font-bold text-foreground mb-2">{t('projectPage.security')}</h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.techStack.includes('AES-256-GCM')
                      ? t('projectPage.arch.aes')
                      : project.slug === 'beloved'
                      ? t('projectPage.arch.beloved')
                      : t('projectPage.arch.keychain')}
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
              {t('projectPage.preview')}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">
              {t('projectPage.screenshots')}
            </h2>
          </div>

          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <GlassCard className="p-12 flex flex-col items-center justify-center min-h-[280px]">
              <div className="text-5xl mb-4 opacity-50">{project.icon}</div>
              <p className="text-muted text-sm text-center mb-2">
                {t('projectPage.screenshotsPreparing')}
              </p>
              <p className="text-muted/50 text-xs text-center">
                {t('projectPage.screenshotsLaunch')}
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
                  <p className="text-xs text-muted mb-2">&larr; {t('projectPage.prevProject')}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{prevProject.icon}</span>
                    <span className="font-bold group-hover:gradient-text-cyan transition-colors duration-300">{prevProject.title}</span>
                  </div>
                </GlassCard>
              </Link>

              <Link href={`/projects/${nextProject.slug}`} className="group">
                <GlassCard className="p-6 hover:-translate-y-1 transition-transform duration-300 text-right">
                  <p className="text-xs text-muted mb-2">{t('projectPage.nextProject')} &rarr;</p>
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
            {t('projectPage.viewAll')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
