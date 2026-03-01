'use client';

import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm text-muted mb-2">{t('legal.lastUpdated')}</p>
      <h1 className="text-4xl font-bold tracking-tight mb-8">{t('terms.title')}</h1>

      <div className="glass p-5 mb-8 text-sm font-medium">
        {t('terms.summary')}
      </div>

      <div className="prose prose-invert prose-p:text-muted prose-li:text-muted prose-headings:text-foreground max-w-none">
        <h2>{t('terms.s1.title')}</h2>
        <p>{t('terms.s1.text')}</p>

        <h2>{t('terms.s2.title')}</h2>
        <p>{t('terms.s2.text')}</p>
        <ul>
          <li>{t('terms.s2.l1')}</li>
          <li>{t('terms.s2.l2')}</li>
          <li>{t('terms.s2.l3')}</li>
          <li>{t('terms.s2.l4')}</li>
        </ul>

        <h2>{t('terms.s3.title')}</h2>
        <p>{t('terms.s3.text')}</p>
        <ul>
          <li>{t('terms.s3.l1')}</li>
          <li>{t('terms.s3.l2')}</li>
          <li>{t('terms.s3.l3')}</li>
        </ul>

        <h2>{t('terms.s4.title')}</h2>
        <p>{t('terms.s4.text')}</p>
        <ul>
          <li>{t('terms.s4.l1')}</li>
          <li>{t('terms.s4.l2')}</li>
          <li>{t('terms.s4.l3')}</li>
        </ul>

        <h2>{t('terms.s5.title')}</h2>
        <p>{t('terms.s5.text')}</p>

        <h2>{t('terms.s6.title')}</h2>
        <p>{t('terms.s6.text')}</p>

        <h2>{t('terms.s7.title')}</h2>
        <p>{t('terms.s7.text')}</p>

        <h2>{t('terms.s8.title')}</h2>
        <p>{t('terms.s8.text')}</p>
        <ul>
          <li>{t('terms.s8.l1')}</li>
          <li>{t('terms.s8.l2')}</li>
          <li>{t('terms.s8.l3')}</li>
        </ul>

        <h2>{t('terms.s9.title')}</h2>
        <p>{t('terms.s9.text')}</p>

        <h2>{t('terms.s10.title')}</h2>
        <p>{t('terms.s10.text')}</p>

        <h2>{t('terms.s11.title')}</h2>
        <p>{t('terms.s11.text')} <a href="mailto:contact@byneel.com" className="text-brand-blue hover:underline">contact@byneel.com</a></p>
      </div>

      <div className="mt-12 text-center text-sm text-muted">
        <Link href="/" className="hover:text-foreground transition-colors">{t('legal.home')}</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/privacy" className="hover:text-foreground transition-colors">{t('legal.privacy')}</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/cookies" className="hover:text-foreground transition-colors">{t('legal.cookies')}</Link>
      </div>
    </div>
  );
}
