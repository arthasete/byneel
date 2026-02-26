'use client';

import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-32">
      {/* Background — hero orbs + grid only (floating elements are now global) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      {/* Main content — CSS entry animation, no Motion.js */}
      <div
        className="relative z-10 max-w-4xl"
        style={{ animation: 'slide-up 0.6s ease-out both' }}
      >
        {/* Badge */}
        <div className="inline-block px-4 py-2 mb-8 text-xs font-medium tracking-widest uppercase rounded-full glass-shimmer animate-shimmer">
          <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-cyan bg-clip-text text-transparent">
            ✨ Développement assisté par IA
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
          <span className="bg-gradient-to-r from-white via-white to-blue-400 bg-clip-text text-transparent">
            ByNeel.
          </span>
        </h1>

        {/* Tagline */}
        <div className="h-20 md:h-24 flex items-center justify-center mb-8">
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-cyan via-brand-blue to-brand-violet bg-clip-text text-transparent">
              Des idées
            </span>
            <br />
            <span className="inline-block mt-2 bg-gradient-to-r from-brand-violet via-pink to-cyan bg-clip-text text-transparent">
              qui prennent vie.
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
          Applications mobiles, outils IA et projets open source.{' '}
          <span className="text-foreground font-semibold">Développement assisté par IA</span>,
          conçus pour durer.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-violet to-cyan opacity-100 group-hover:opacity-90 transition-opacity rounded-2xl" />
            <span className="relative flex items-center gap-2">
              Découvrir les projets
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-2xl font-semibold border-2 border-white/20 text-white hover:bg-white/5 hover:scale-[1.03] active:scale-95 transition-all duration-300"
          >
            En savoir plus
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-float">
        <a href="#stats" className="flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors">
          <span className="text-sm font-medium">Scroll</span>
          <div className="w-6 h-10 border border-white/20 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-white/40 rounded-full scroll-dot" />
          </div>
        </a>
      </div>
    </section>
  );
}
