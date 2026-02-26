'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { projects } from '@/data/projects';
import { ArrowRight } from 'lucide-react';

function getBentoClasses(size?: 'large' | 'tall' | 'normal') {
  switch (size) {
    case 'large': return 'md:col-span-2';
    case 'tall': return 'md:row-span-2';
    default: return '';
  }
}

export function BentoGrid() {
  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-brand-blue/5 to-brand-violet/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-blue mb-3">
            Projets
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Ce qu&apos;on construit
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-12">
            {projects.length} projets actifs — applications mobiles, outils IA et projets open source.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[minmax(220px,auto)]">
          {projects.map((project, i) => {
            const sizeClass = getBentoClasses(project.bentoSize);
            const isLarge = project.bentoSize === 'large';
            const isTall = project.bentoSize === 'tall';

            return (
              <ScrollReveal
                key={project.slug}
                delay={i * 0.06}
                className={sizeClass}
              >
                <Link href={`/projects/${project.slug}`} className="block h-full group">
                  <div className="relative h-full">
                    {/* Glow on hover */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-all duration-300`} />

                    {/* Main card */}
                    <div className="relative h-full rounded-3xl p-6 md:p-8 overflow-hidden group-hover:-translate-y-2 transition-transform duration-300">
                      <div className="absolute inset-0 glass-shimmer rounded-3xl border border-white/10 group-hover:border-white/25 transition-colors duration-300" />

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Icon */}
                        <div className={`mb-4 animate-float-slow ${isLarge ? 'text-5xl md:text-6xl' : isTall ? 'text-5xl md:text-7xl' : 'text-4xl md:text-5xl'}`} style={{ animationDelay: `${i * 0.15}s` }}>
                          {project.icon}
                        </div>

                        <h3 className={`font-bold mb-3 transition-colors duration-300 group-hover:gradient-text-cyan ${isLarge ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                          {project.title}
                        </h3>

                        <p className={`text-muted mb-6 leading-relaxed flex-grow transition-colors duration-300 group-hover:text-foreground/80 ${isLarge ? 'text-base' : 'text-sm'}`}>
                          {project.description}
                        </p>

                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, isLarge ? 4 : 3).map((tag) => (
                              <span key={tag} className="px-3 py-1 text-xs rounded-full border border-white/[0.15] text-muted">
                                {tag}
                              </span>
                            ))}
                            {project.tags.length > (isLarge ? 4 : 3) && (
                              <span className="px-3 py-1 text-xs rounded-full border border-white/[0.15] text-muted">
                                +{project.tags.length - (isLarge ? 4 : 3)}
                              </span>
                            )}
                          </div>

                          {project.comingSoon && (
                            <span className="inline-block px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-brand-blue/20 to-brand-violet/20 text-foreground border border-brand-blue/30 animate-pulse-glow">
                              ✨ Bientôt disponible
                            </span>
                          )}

                          <div className="flex items-center gap-2 text-sm font-semibold text-brand-blue opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            Découvrir plus <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal className="mt-16 text-center">
          <p className="text-muted text-lg mb-6">
            Vous avez une idée ? Parlons-en !
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-violet hover:shadow-lg hover:shadow-brand-blue/50 transition-all duration-300"
          >
            Démarrer un projet <ArrowRight className="w-4 h-4" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
