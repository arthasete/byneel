'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useProjects } from '@/i18n/useLocalizedData';
import { useLanguage } from '@/i18n/LanguageContext';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const localizedProjects = useProjects();
  const { t } = useLanguage();

  const socialLinks = useMemo(() => [
    { icon: Mail, href: 'mailto:contact@byneel.com', label: 'Email' },
    { icon: Github, href: 'https://github.com/byneel-dev', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/by-neel-5461173b4/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/_byneel', label: 'X (Twitter)' },
  ], []);

  return (
    <footer className="relative border-t border-white/[0.08] px-6 md:px-12 py-16 mt-32 overflow-hidden">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-brand-blue/5 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand column */}
          <ScrollReveal>
            <div className="mb-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                ByNeel
              </h3>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-6">
              {t('footer.brand')}
            </p>

            {/* Social links — CSS hover only */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass-shimmer border border-white/10 flex items-center justify-center text-muted hover:text-brand-blue hover:border-brand-blue/30 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Projects column */}
          <ScrollReveal delay={0.1}>
            <p className="text-sm font-semibold mb-4 text-foreground">{t('footer.projects')}</p>
            <div className="flex flex-col gap-3">
              {localizedProjects.slice(0, 6).map((project) => (
                <Link
                  key={project.slug}
                  href={project.landingUrl || `/projects/${project.slug}`}
                  className="text-sm text-muted hover:text-foreground hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
                >
                  <span>{project.icon}</span>
                  {project.title}
                </Link>
              ))}
            </div>
          </ScrollReveal>

          {/* Company column */}
          <ScrollReveal delay={0.2}>
            <p className="text-sm font-semibold mb-4 text-foreground">{t('footer.company')}</p>
            <div className="flex flex-col gap-3">
              <Link
                href="/#contact"
                className="text-sm text-muted hover:text-foreground hover:translate-x-1 transition-all duration-300"
              >
                {t('footer.about')}
              </Link>
              <Link
                href="/blog"
                className="text-sm text-muted hover:text-foreground hover:translate-x-1 transition-all duration-300"
              >
                {t('footer.blog')}
              </Link>
              <Link
                href="/kit"
                className="text-sm text-brand-blue hover:text-foreground hover:translate-x-1 transition-all duration-300"
              >
                {t('footer.kit')}
              </Link>
              <Link
                href="/#contact"
                className="text-sm text-muted hover:text-foreground hover:translate-x-1 transition-all duration-300"
              >
                {t('footer.contact')}
              </Link>
            </div>
          </ScrollReveal>

          {/* Legal column */}
          <ScrollReveal delay={0.3}>
            <p className="text-sm font-semibold mb-4 text-foreground">{t('footer.legal')}</p>
            <div className="flex flex-col gap-3">
              <Link
                href="/privacy"
                className="text-sm text-muted hover:text-foreground hover:translate-x-1 transition-all duration-300"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted hover:text-foreground hover:translate-x-1 transition-all duration-300"
              >
                {t('footer.terms')}
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-muted hover:text-foreground hover:translate-x-1 transition-all duration-300"
              >
                {t('footer.cookies')}
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom section */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-muted">
            <div>
              <p>&copy; 2026 ByNeel &mdash; {t('footer.rights')}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span>{t('footer.madeWith')}</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>{t('footer.online')}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
