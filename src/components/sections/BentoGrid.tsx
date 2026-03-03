'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useProjects } from '@/i18n/useLocalizedData';
import type { TranslationKey } from '@/i18n/translations';

type FilterCategory = 'all' | 'mobile' | 'ai' | 'backend';

const MASONRY_MIN_HEIGHTS: Record<string, string> = {
  sm: 'min-h-[260px]',
  md: 'min-h-[300px]',
  lg: 'min-h-[340px]',
  xl: 'min-h-[380px]',
};

interface Project {
  slug: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  bentoSize?: 'large' | 'tall' | 'normal';
  masonryHeight?: 'sm' | 'md' | 'lg' | 'xl';
  category: 'mobile' | 'ai' | 'backend';
  tags: string[];
  comingSoon?: boolean;
  landingUrl?: string;
}

function ProjectCard({ project, i, t }: { project: Project; i: number; t: (key: TranslationKey) => string }) {
  const minHeightClass = MASONRY_MIN_HEIGHTS[project.masonryHeight || 'md'];

  return (
    <ScrollReveal
      key={project.slug}
      delay={i * 0.04}
      className="masonry-item"
    >
      <Link href={project.landingUrl || `/projects/${project.slug}`} className="block group">
        <div className={`relative ${minHeightClass}`}>
          {/* Gradient glow on hover */}
          <div className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-25 rounded-2xl blur-2xl transition-all duration-500`} />

          {/* Card */}
          <div className="relative rounded-2xl overflow-hidden group-hover:-translate-y-2 transition-all duration-300">
            {/* Glass background */}
            <div className="absolute inset-0 glass-shimmer rounded-2xl border border-white/[0.08] group-hover:border-white/25 transition-colors duration-300" />

            {/* Gradient accent strip at top */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            {/* Content */}
            <div className="relative z-10 flex flex-col p-6">
              {/* Icon */}
              <div
                className="text-4xl md:text-5xl mb-4 animate-float-slow"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {project.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold mb-2 transition-colors duration-300 group-hover:gradient-text-cyan">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted leading-relaxed transition-colors duration-300 group-hover:text-foreground/70">
                {project.description}
              </p>

              {/* Bottom section */}
              <div className="mt-4 space-y-3">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag: string) => (
                    <span key={tag} className="px-2.5 py-0.5 text-[10px] rounded-full border border-white/[0.1] text-muted/80">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2.5 py-0.5 text-[10px] rounded-full border border-white/[0.1] text-muted/80">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Badge + CTA */}
                <div className="flex items-center justify-between">
                  {project.landingUrl ? (
                    <span className="px-3 py-1 text-[10px] font-semibold rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/20 animate-pulse-glow">
                      {'🔥 ' + t('bento.joinWaitlist')}
                    </span>
                  ) : project.comingSoon ? (
                    <span className="px-3 py-1 text-[10px] font-semibold rounded-full bg-gradient-to-r from-brand-blue/20 to-brand-violet/20 text-foreground/80 border border-brand-blue/20">
                      {'✨ ' + t('bento.comingSoon')}
                    </span>
                  ) : null}
                  <div className="flex items-center gap-1 text-xs font-semibold text-brand-blue opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 ml-auto">
                    {t('bento.learnMore')} <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}

export function BentoGrid() {
  const { t } = useLanguage();
  const localizedProjects = useProjects();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filters: { key: FilterCategory; label: string }[] = [
    { key: 'all', label: t('bento.filterAll') },
    { key: 'mobile', label: t('bento.filterMobile') },
    { key: 'ai', label: t('bento.filterAI') },
    { key: 'backend', label: t('bento.filterBackend') },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return localizedProjects;
    return localizedProjects.filter((p) => p.category === activeFilter);
  }, [activeFilter, localizedProjects]);

  // Split projects into columns for masonry layout
  const columns = useMemo(() => {
    const cols: Project[][] = [[], [], []];
    filteredProjects.forEach((project, i) => {
      cols[i % 3].push(project);
    });
    return cols;
  }, [filteredProjects]);

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-brand-blue/5 to-brand-violet/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-blue mb-3">
            {t('bento.label')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t('bento.title')}
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-8">
            {localizedProjects.length} {t('bento.subtitle')}
          </p>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.1} className="mb-12">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'border-brand-blue/50 bg-brand-blue/15 text-foreground shadow-lg shadow-brand-blue/10'
                    : 'border-white/10 text-muted hover:border-white/25 hover:text-foreground hover:bg-white/5'
                }`}
              >
                {filter.label}
                {filter.key !== 'all' && (
                  <span className="ml-2 text-xs opacity-60">
                    {localizedProjects.filter((p) => filter.key === 'all' || p.category === filter.key).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Masonry grid — 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 items-start">
          {/* Column-based masonry */}
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4 md:gap-5">
              {column.map((project, i) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  i={colIndex + i * 3}
                  t={t}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal className="mt-16 text-center">
          <p className="text-muted text-lg mb-6">
            {t('bento.bottomText')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-violet hover:shadow-lg hover:shadow-brand-blue/50 transition-all duration-300"
          >
            {t('bento.cta')} <ArrowRight className="w-4 h-4" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
