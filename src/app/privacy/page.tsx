'use client';

import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';

function BoldItem({ text }: { text: string }) {
  const idx = text.indexOf(':');
  if (idx === -1) return <>{text}</>;
  return <><strong>{text.slice(0, idx)}</strong>{text.slice(idx)}</>;
}

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm text-muted mb-2">{t('legal.lastUpdated')}</p>
      <h1 className="text-4xl font-bold tracking-tight mb-8">{t('privacy.title')}</h1>

      <div className="glass p-5 mb-8 text-sm font-medium">
        {t('privacy.summary')}
      </div>

      <div className="prose prose-invert prose-p:text-muted prose-li:text-muted prose-headings:text-foreground max-w-none">
        <h2>{t('privacy.s1.title')}</h2>
        <p>{t('privacy.s1.text')} <a href="mailto:contact@byneel.com" className="text-brand-blue hover:underline">contact@byneel.com</a></p>

        <h2>{t('privacy.s2.title')}</h2>
        <p>{t('privacy.s2.text')}</p>

        <h2>{t('privacy.s3.title')}</h2>
        <p>{t('privacy.s3.text')}</p>
        <ul>
          <li><BoldItem text={t('privacy.s3.cookbook')} /></li>
          <li><BoldItem text={t('privacy.s3.tiplog')} /></li>
          <li><BoldItem text={t('privacy.s3.omnidrop')} /></li>
          <li><BoldItem text={t('privacy.s3.imagevault')} /></li>
          <li><BoldItem text={t('privacy.s3.jarvis')} /></li>
          <li><BoldItem text={t('privacy.s3.isekai')} /></li>
          <li><BoldItem text={t('privacy.s3.ephemera')} /></li>
          <li><BoldItem text={t('privacy.s3.bridgegen')} /></li>
          <li><BoldItem text={t('privacy.s3.earthpulse')} /></li>
        </ul>

        <h2>{t('privacy.s4.title')}</h2>
        <p>{t('privacy.s4.text')}</p>
        <ul>
          <li><BoldItem text={t('privacy.s4.beloved')} /></li>
          <li><BoldItem text={t('privacy.s4.stickervibe')} /></li>
        </ul>

        <h2>{t('privacy.s5.title')}</h2>
        <p>{t('privacy.s5.text')}</p>
        <ul>
          <li>{t('privacy.s5.l1')}</li>
          <li>{t('privacy.s5.l2')}</li>
          <li>{t('privacy.s5.l3')}</li>
        </ul>
        <p>{t('privacy.s5.providers')}</p>
        <ul>
          <li><a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Anthropic (Claude AI)</a></li>
          <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Google (Gemini)</a></li>
          <li><a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">OpenAI</a></li>
          <li><a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Supabase</a></li>
        </ul>

        <h2>{t('privacy.s6.title')}</h2>
        <p>{t('privacy.s6.text')}</p>

        <h2>{t('privacy.s7.title')}</h2>
        <p>{t('privacy.s7.text')}</p>

        <h2>{t('privacy.s8.title')}</h2>
        <p>{t('privacy.s8.text')}</p>

        <h2>{t('privacy.s9.title')}</h2>
        <p>{t('privacy.s9.text')}</p>

        <h2>{t('privacy.s10.title')}</h2>
        <p>{t('privacy.s10.text')} <a href="mailto:contact@byneel.com" className="text-brand-blue hover:underline">contact@byneel.com</a></p>
      </div>

      <div className="mt-12 text-center text-sm text-muted">
        <Link href="/" className="hover:text-foreground transition-colors">{t('legal.home')}</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/terms" className="hover:text-foreground transition-colors">{t('legal.terms')}</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/cookies" className="hover:text-foreground transition-colors">{t('legal.cookies')}</Link>
      </div>
    </div>
  );
}
