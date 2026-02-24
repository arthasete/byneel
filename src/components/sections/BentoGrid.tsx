'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { projects } from '@/data/projects';

export function BentoGrid() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
            Projets
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Ce qu&apos;on construit
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ScrollReveal
              key={project.title}
              delay={i * 0.1}
              className={project.featured ? 'md:col-span-2 md:row-span-2' : ''}
            >
              <GlassCard className={`h-full ${project.featured ? 'p-8 md:p-10' : 'p-6'}`}>
                <div className="flex flex-col h-full">
                  <span className={`text-3xl ${project.featured ? 'md:text-5xl' : ''} mb-4`}>
                    {project.icon}
                  </span>
                  <h3 className={`font-bold mb-2 ${project.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-muted mb-6 leading-relaxed ${project.featured ? 'text-base md:text-lg' : 'text-sm'}`}>
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full border border-white/[0.1] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.comingSoon && (
                      <span className="px-3 py-1 text-xs rounded-full bg-white/[0.1] text-foreground font-medium">
                        Bient&ocirc;t
                      </span>
                    )}
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}

          {/* Placeholder card */}
          <ScrollReveal delay={0.2}>
            <GlassCard className="h-full p-6 flex items-center justify-center min-h-[160px]">
              <p className="text-muted text-sm text-center">
                D&apos;autres projets arrivent bient&ocirc;t...
              </p>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
