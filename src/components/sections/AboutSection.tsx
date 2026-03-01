'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/i18n/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="glass p-10 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              {t('about.title')}
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-xl mx-auto mb-4">
              {t('about.p1')}
            </p>
            <p className="text-muted text-base leading-relaxed max-w-xl mx-auto mb-8">
              <span className="text-foreground/80 font-medium">{t('about.highlight')}</span> — {t('about.p2')}
            </p>
            <a
              href="mailto:contact@byneel.com"
              className="inline-block px-6 py-3 rounded-xl border border-white/[0.15] text-foreground font-semibold hover:border-white/[0.3] hover:scale-[1.03] active:scale-95 transition-all duration-300"
            >
              {t('about.cta')}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
