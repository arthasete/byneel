'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import {
  Globe,
  MapPin,
  Calculator,
  Receipt,
  FileText,
  CreditCard,
  Compass,
  BarChart3,
  Flame,
  Shield,
  WifiOff,
  Zap,
  Check,
  Sparkles,
  ArrowRight,
  Mail,
  Loader2,
} from 'lucide-react';

const features = [
  { icon: MapPin, key: 'gps' },
  { icon: Globe, key: 'countries' },
  { icon: Calculator, key: 'calculator' },
  { icon: Receipt, key: 'expenses' },
  { icon: FileText, key: 'export' },
  { icon: CreditCard, key: 'split' },
] as const;

const steps = [
  { icon: Compass, num: '01', key: 'step1' },
  { icon: BarChart3, num: '02', key: 'step2' },
  { icon: Flame, num: '03', key: 'step3' },
] as const;

const trustItems = [
  { icon: Shield, key: 'privacy' },
  { icon: WifiOff, key: 'offline' },
  { icon: Zap, key: 'fast' },
] as const;

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mwvngvrp';

function WaitlistForm({ variant = 'hero' }: { variant?: 'hero' | 'footer' }) {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, source: 'tiplog-waitlist' }),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={`flex items-center gap-2 justify-center ${variant === 'hero' ? 'mt-8' : 'mt-6'}`}>
        <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
          <Check className="w-4 h-4" />
          {t('tiplog.waitlist.success')}
        </div>
      </div>
    );
  }

  return (
    <div className={variant === 'hero' ? 'mt-8' : 'mt-6'}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888]" />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('tiplog.waitlist.placeholder')}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-[#EDEDED] text-sm placeholder:text-[#666] focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all duration-300"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 disabled:opacity-60 shrink-0 flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              {t('tiplog.waitlist.cta')}
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-red-400 text-xs mt-2 text-center">{t('tiplog.waitlist.error')}</p>
      )}
      <p className="text-[#666] text-xs mt-3 text-center">{t('tiplog.waitlist.privacy')}</p>
    </div>
  );
}

export default function TipLogLandingPage() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden">
      {/* ====== HERO ====== */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-[10%] left-[15%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(16,185,129,0.4) 0%, rgba(20,184,166,0.2) 50%, transparent 70%)',
              animation: 'orb-drift-1 12s ease-in-out infinite',
            }}
          />
          <div
            className="absolute bottom-[15%] right-[10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-25"
            style={{
              background: 'radial-gradient(circle, rgba(52,211,153,0.35) 0%, rgba(16,185,129,0.15) 50%, transparent 70%)',
              animation: 'orb-drift-2 15s ease-in-out infinite',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              {t('tiplog.badge')}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-7xl mb-6 animate-float">
              💰
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {t('tiplog.title')}
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-[#EDEDED] font-medium mb-4">
              {t('tiplog.tagline')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="text-base md:text-lg text-[#888] max-w-2xl mx-auto mb-6 leading-relaxed">
              {t('tiplog.description')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="max-w-lg mx-auto">
              <p className="text-sm text-[#888] mb-1">{t('tiplog.waitlist.subtitle')}</p>
              <WaitlistForm variant="hero" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button
                disabled
                className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.1] transition-all duration-300 cursor-not-allowed opacity-80"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#EDEDED]" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.89C10.1 6.87 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-[#888] leading-none">{t('tiplog.cta.comingSoon')}</div>
                  <div className="text-sm font-semibold text-[#EDEDED]">App Store</div>
                </div>
              </button>

              <button
                disabled
                className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.1] transition-all duration-300 cursor-not-allowed opacity-80"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#EDEDED]" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-[#888] leading-none">{t('tiplog.cta.comingSoon')}</div>
                  <div className="text-sm font-semibold text-[#EDEDED]">Google Play</div>
                </div>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ====== FEATURES ====== */}
      <section className="relative px-6 py-24 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-wider uppercase mb-4">
              {t('tiplog.features.label')}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#EDEDED]">
              {t('tiplog.features.title')}
            </h2>
            <p className="text-[#888] text-base md:text-lg max-w-2xl mx-auto">
              {t('tiplog.features.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, key }, i) => (
            <ScrollReveal key={key} delay={i * 0.06}>
              <div className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/20 transition-all duration-300 h-full">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-4 group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-300">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#EDEDED] mb-2">
                    {t(`tiplog.feat.${key}.title` as keyof typeof import('@/i18n/translations').translations.en)}
                  </h3>
                  <p className="text-sm text-[#888] leading-relaxed">
                    {t(`tiplog.feat.${key}.desc` as keyof typeof import('@/i18n/translations').translations.en)}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section className="relative px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-wider uppercase mb-4">
                {t('tiplog.how.label')}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#EDEDED]">
                {t('tiplog.how.title')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(({ icon: Icon, num, key }, i) => (
              <ScrollReveal key={key} delay={i * 0.1}>
                <div className="relative text-center">
                  {i < 2 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-emerald-500/30 to-transparent" />
                  )}
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 mb-6">
                    <Icon className="w-10 h-10 text-emerald-400" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white text-xs font-bold flex items-center justify-center">
                      {num.replace('0', '')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#EDEDED] mb-2">
                    {t(`tiplog.how.${key}.title` as keyof typeof import('@/i18n/translations').translations.en)}
                  </h3>
                  <p className="text-sm text-[#888] leading-relaxed max-w-xs mx-auto">
                    {t(`tiplog.how.${key}.desc` as keyof typeof import('@/i18n/translations').translations.en)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PRICING ====== */}
      <section className="relative px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-wider uppercase mb-4">
                {t('tiplog.pricing.label')}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#EDEDED]">
                {t('tiplog.pricing.title')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <ScrollReveal delay={0.05}>
              <div className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] h-full">
                <h3 className="text-lg font-semibold text-[#EDEDED] mb-1">{t('tiplog.pricing.free')}</h3>
                <div className="text-3xl font-bold text-[#EDEDED] mb-6">
                  {t('tiplog.pricing.free.price')}
                </div>
                <ul className="space-y-3">
                  {(['f1', 'f2', 'f3', 'f4'] as const).map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#888]">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      {t(`tiplog.pricing.free.${f}` as keyof typeof import('@/i18n/translations').translations.en)}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="relative p-8 rounded-2xl bg-white/[0.03] border border-emerald-500/30 h-full">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold">
                  {t('tiplog.pricing.pro.badge')}
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5" />
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-[#EDEDED] mb-1">{t('tiplog.pricing.pro')}</h3>
                  <div className="text-3xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                      {t('tiplog.pricing.pro.price')}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {(['f1', 'f2', 'f3', 'f4', 'f5'] as const).map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-[#EDEDED]">
                        <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        {t(`tiplog.pricing.pro.${f}` as keyof typeof import('@/i18n/translations').translations.en)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====== TRUST ====== */}
      <section className="relative px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-wider uppercase mb-4">
                {t('tiplog.trust.label')}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#EDEDED]">
                {t('tiplog.trust.title')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustItems.map(({ icon: Icon, key }, i) => (
              <ScrollReveal key={key} delay={i * 0.08}>
                <div className="text-center p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/15 to-teal-500/15 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#EDEDED] mb-2">
                    {t(`tiplog.trust.${key}.title` as keyof typeof import('@/i18n/translations').translations.en)}
                  </h3>
                  <p className="text-sm text-[#888] leading-relaxed">
                    {t(`tiplog.trust.${key}.desc` as keyof typeof import('@/i18n/translations').translations.en)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className="relative px-6 py-24">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative p-12 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-3xl" />
              <div className="relative z-10">
                <div className="text-5xl mb-6">💰</div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#EDEDED]">
                  {t('tiplog.final.title')}
                </h2>
                <p className="text-[#888] text-base mb-2 max-w-xl mx-auto">
                  {t('tiplog.final.subtitle')}
                </p>
                <WaitlistForm variant="footer" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 text-center text-sm text-[#888]">
          <Link href="/" className="hover:text-[#EDEDED] transition-colors">Home</Link>
          <span className="mx-3">&middot;</span>
          <Link href="/tiplog/privacy" className="hover:text-[#EDEDED] transition-colors">Privacy</Link>
          <span className="mx-3">&middot;</span>
          <Link href="/projects/tiplog" className="hover:text-[#EDEDED] transition-colors">Project details</Link>
        </div>
      </section>
    </div>
  );
}
