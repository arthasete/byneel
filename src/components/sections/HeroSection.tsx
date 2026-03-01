'use client';

import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();
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
            {'✨ ' + t('hero.badge')}
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
          <span className="bg-gradient-to-r from-white via-white to-blue-400 bg-clip-text text-transparent">
            ByNeel.
          </span>
        </h1>

        {/* Tagline */}
        <div className="flex items-center justify-center mb-10">
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-cyan via-brand-blue to-brand-violet bg-clip-text text-transparent">
              {t('hero.ideas')}
            </span>
            <br />
            <span className="inline-block mt-2 bg-gradient-to-r from-brand-violet via-pink to-cyan bg-clip-text text-transparent pb-1">
              {t('hero.broughtToLife')}
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-14 leading-relaxed">
          {t('hero.subtitle1')} <span className="text-foreground font-semibold">{t('hero.subtitle2')}</span>{t('hero.subtitle3')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-violet to-cyan opacity-100 group-hover:opacity-90 transition-opacity rounded-2xl" />
            <span className="relative flex items-center gap-2">
              {t('hero.cta1')}
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-2xl font-semibold border-2 border-white/20 text-white hover:bg-white/5 hover:scale-[1.03] active:scale-95 transition-all duration-300"
          >
            {t('hero.cta2')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-float">
        <a href="#stats" className="flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors">
          <span className="text-sm font-medium">{t('hero.scroll')}</span>
          <div className="w-6 h-10 border border-white/20 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-white/40 rounded-full scroll-dot" />
          </div>
        </a>
      </div>
    </section>
  );
}
