'use client';

import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';

function BoldItem({ text }: { text: string }) {
  const idx = text.indexOf(':');
  if (idx === -1) return <>{text}</>;
  return <><strong>{text.slice(0, idx)}</strong>{text.slice(idx)}</>;
}

export default function CookiesPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm text-muted mb-2">{t('legal.lastUpdated')}</p>
      <h1 className="text-4xl font-bold tracking-tight mb-8">{t('cookies.title')}</h1>

      <div className="glass p-5 mb-8 text-sm font-medium">
        {t('cookies.summary')}
      </div>

      <div className="prose prose-invert prose-p:text-muted prose-li:text-muted prose-headings:text-foreground max-w-none">
        <h2>{t('cookies.s1.title')}</h2>
        <p>{t('cookies.s1.text')}</p>

        <h2>{t('cookies.s2.title')}</h2>
        <p>{t('cookies.s2.text')}</p>
        <ul>
          <li><BoldItem text={t('cookies.s2.l1')} /></li>
          <li><BoldItem text={t('cookies.s2.l2')} /></li>
        </ul>

        <h2>{t('cookies.s3.title')}</h2>
        <p>{t('cookies.s3.text')}</p>
        <ul>
          <li>{t('cookies.s3.l1')}</li>
          <li>{t('cookies.s3.l2')}</li>
          <li>{t('cookies.s3.l3')}</li>
          <li>{t('cookies.s3.l4')}</li>
        </ul>

        <h2>{t('cookies.s4.title')}</h2>
        <p>{t('cookies.s4.text1')}</p>
        <p>{t('cookies.s4.text2')} <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Google</a>.</p>

        <h2>{t('cookies.s5.title')}</h2>
        <p>{t('cookies.s5.text')}</p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Firefox</a></li>
          <li><a href="https://support.apple.com/en-us/guide/safari/sfri11471/" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Edge</a></li>
        </ul>
        <p>{t('cookies.s5.note')}</p>

        <h2>{t('cookies.s6.title')}</h2>
        <p>{t('cookies.s6.text')} <a href="mailto:contact@byneel.com" className="text-brand-blue hover:underline">contact@byneel.com</a></p>
      </div>

      <div className="mt-12 text-center text-sm text-muted">
        <Link href="/" className="hover:text-foreground transition-colors">{t('legal.home')}</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/privacy" className="hover:text-foreground transition-colors">{t('legal.privacy')}</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/terms" className="hover:text-foreground transition-colors">{t('legal.terms')}</Link>
      </div>
    </div>
  );
}
