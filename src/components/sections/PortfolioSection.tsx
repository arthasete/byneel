'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Play, X } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/i18n/LanguageContext';
import { type TranslationKey } from '@/i18n/translations';
import { disciplines, portfolio, type Discipline, type PortfolioItem } from '@/data/portfolio';

type Filter = 'all' | Discipline;

export function disciplineKey(d: Discipline): TranslationKey {
  return `portfolio.d.${d}` as TranslationKey;
}

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const { language } = useLanguage();
  const [open, setOpen] = useState<PortfolioItem | null>(null);
  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {items.map((item, i) => (
          <ScrollReveal key={item.id} delay={i * 0.03} className={item.wide ? 'lg:col-span-2' : undefined}>
            <button
              type="button"
              onClick={() => setOpen(item)}
              className="group relative block w-full aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] text-left"
              aria-label={item.title[language]}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.kind === 'video' ? item.poster : item.src}
                alt={item.title[language]}
                loading="lazy"
                className={`absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-[1.03] ${
                  item.discipline === 'games' ? 'object-contain p-10' : 'object-cover object-top'
                }`}
              />
              {item.kind === 'video' && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-14 h-14 rounded-full bg-black/50 backdrop-blur flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white ml-0.5" />
                  </span>
                </span>
              )}
              <span className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent">
                <span className="block text-sm font-semibold text-white">{item.title[language]}</span>
                <span className="block text-xs text-white/70 mt-0.5">{item.caption[language]}</span>
              </span>
            </button>
          </ScrollReveal>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={open.title[language]}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <div className="max-w-6xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            {open.kind === 'video' ? (
              <video
                src={open.src}
                poster={open.poster}
                controls
                autoPlay
                playsInline
                className="max-h-[78vh] w-auto max-w-full rounded-xl"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={open.src} alt={open.title[language]} className="max-h-[78vh] w-auto max-w-full rounded-xl" />
            )}
            <p className="mt-4 text-white font-semibold text-center">{open.title[language]}</p>
            <p className="text-white/70 text-sm text-center">{open.caption[language]}</p>
            {open.project && (
              <Link
                href={`/projects/${open.project}`}
                className="mt-3 text-sm text-brand-blue hover:underline"
                onClick={close}
              >
                {language === 'fr' ? 'Voir le projet →' : 'See the project →'}
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export function PortfolioSection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>('all');

  const counts = useMemo(() => {
    const c = {} as Record<Discipline, number>;
    disciplines.forEach((d) => (c[d] = portfolio.filter((p) => p.discipline === d).length));
    return c;
  }, []);

  const items = useMemo(
    () => (filter === 'all' ? portfolio : portfolio.filter((p) => p.discipline === filter)),
    [filter],
  );

  return (
    <section id="portfolio" className="relative py-24 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-blue mb-3">
            {t('portfolio.label')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t('portfolio.title')}
            <span className="gradient-text">.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-8">{t('portfolio.subtitle')}</p>

          <div className="flex flex-wrap gap-2 mb-10">
            <FilterChip active={filter === 'all'} onClick={() => setFilter('all')} label={t('bento.filterAll')} />
            {disciplines.map((d) =>
              counts[d] > 0 ? (
                <FilterChip
                  key={d}
                  active={filter === d}
                  onClick={() => setFilter(d)}
                  label={t(disciplineKey(d))}
                  count={counts[d]}
                />
              ) : (
                <span
                  key={d}
                  className="px-4 py-2 text-sm rounded-full border border-dashed border-white/[0.12] text-muted/60"
                  title={t('portfolio.soon')}
                >
                  {t(disciplineKey(d))} · {t('portfolio.soon')}
                </span>
              ),
            )}
          </div>
        </ScrollReveal>

        <PortfolioGrid items={items} />
      </div>
    </section>
  );
}

function FilterChip({ active, onClick, label, count }: { active: boolean; onClick: () => void; label: string; count?: number }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
        active
          ? 'bg-brand-blue/15 border-brand-blue/40 text-foreground'
          : 'border-white/[0.1] text-muted hover:text-foreground hover:border-white/20'
      }`}
    >
      {label}
      {count !== undefined && <span className="ml-1.5 text-xs opacity-60">{count}</span>}
    </button>
  );
}
