'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import {
  Nfc,
  Monitor,
  ShieldCheck,
  Infinity,
  CloudOff,
  History,
  Smartphone,
  FolderOpen,
  Zap,
  Lock,
  Route,
  Code,
  Check,
  Sparkles,
  ArrowRight,
  Mail,
  Loader2,
} from 'lucide-react';

const features = [
  { icon: Nfc, key: 'nfc' },
  { icon: Monitor, key: 'cross' },
  { icon: ShieldCheck, key: 'encrypt' },
  { icon: Infinity, key: 'nolimit' },
  { icon: CloudOff, key: 'nocloud' },
  { icon: History, key: 'history' },
] as const;

const steps = [
  { icon: Smartphone, num: '01', key: 'step1' },
  { icon: FolderOpen, num: '02', key: 'step2' },
  { icon: Zap, num: '03', key: 'step3' },
] as const;

const trustItems = [
  { icon: Lock, key: 'encrypt' },
  { icon: Route, key: 'direct' },
  { icon: Code, key: 'open' },
] as const;

// OmniDrop currently has no dedicated Formspree — reuse contact or add later
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqedreaw';

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
        body: JSON.stringify({ email, source: 'omnidrop-waitlist' }),
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
          {t('omnidrop.waitlist.success')}
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
            placeholder={t('omnidrop.waitlist.placeholder')}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-[#EDEDED] text-sm placeholder:text-[#666] focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20 transition-all duration-300"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-60 shrink-0 flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              {t('omnidrop.waitlist.cta')}
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-red-400 text-xs mt-2 text-center">{t('omnidrop.waitlist.error')}</p>
      )}
      <p className="text-[#666] text-xs mt-3 text-center">{t('omnidrop.waitlist.privacy')}</p>
    </div>
  );
}

export default function OmniDropLandingPage() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden">
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-30" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(139,92,246,0.2) 50%, transparent 70%)', animation: 'orb-drift-1 12s ease-in-out infinite' }} />
          <div className="absolute bottom-[15%] right-[10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-25" style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.35) 0%, rgba(59,130,246,0.15) 50%, transparent 70%)', animation: 'orb-drift-2 15s ease-in-out infinite' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />{t('omnidrop.badge')}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}><div className="text-7xl mb-6 animate-float">📡</div></ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">{t('omnidrop.title')}</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}><p className="text-xl md:text-2xl text-[#EDEDED] font-medium mb-4">{t('omnidrop.tagline')}</p></ScrollReveal>
          <ScrollReveal delay={0.25}><p className="text-base md:text-lg text-[#888] max-w-2xl mx-auto mb-6 leading-relaxed">{t('omnidrop.description')}</p></ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="max-w-lg mx-auto">
              <p className="text-sm text-[#888] mb-1">{t('omnidrop.waitlist.subtitle')}</p>
              <WaitlistForm variant="hero" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative px-6 py-24 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium tracking-wider uppercase mb-4">{t('omnidrop.features.label')}</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#EDEDED]">{t('omnidrop.features.title')}</h2>
            <p className="text-[#888] text-base md:text-lg max-w-2xl mx-auto">{t('omnidrop.features.subtitle')}</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, key }, i) => (
            <ScrollReveal key={key} delay={i * 0.06}>
              <div className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/20 transition-all duration-300 h-full">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-blue-400" /></div>
                  <h3 className="text-lg font-semibold text-[#EDEDED] mb-2">{t(`omnidrop.feat.${key}.title` as keyof typeof import('@/i18n/translations').translations.en)}</h3>
                  <p className="text-sm text-[#888] leading-relaxed">{t(`omnidrop.feat.${key}.desc` as keyof typeof import('@/i18n/translations').translations.en)}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium tracking-wider uppercase mb-4">{t('omnidrop.how.label')}</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#EDEDED]">{t('omnidrop.how.title')}</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(({ icon: Icon, num, key }, i) => (
              <ScrollReveal key={key} delay={i * 0.1}>
                <div className="relative text-center">
                  {i < 2 && <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-blue-500/30 to-transparent" />}
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20 mb-6">
                    <Icon className="w-10 h-10 text-blue-400" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-white text-xs font-bold flex items-center justify-center">{num.replace('0', '')}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#EDEDED] mb-2">{t(`omnidrop.how.${key}.title` as keyof typeof import('@/i18n/translations').translations.en)}</h3>
                  <p className="text-sm text-[#888] leading-relaxed max-w-xs mx-auto">{t(`omnidrop.how.${key}.desc` as keyof typeof import('@/i18n/translations').translations.en)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium tracking-wider uppercase mb-4">{t('omnidrop.pricing.label')}</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#EDEDED]">{t('omnidrop.pricing.title')}</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <ScrollReveal delay={0.05}>
              <div className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] h-full">
                <h3 className="text-lg font-semibold text-[#EDEDED] mb-1">{t('omnidrop.pricing.free')}</h3>
                <div className="text-3xl font-bold text-[#EDEDED] mb-6">{t('omnidrop.pricing.free.price')}</div>
                <ul className="space-y-3">
                  {(['f1', 'f2', 'f3', 'f4'] as const).map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#888]"><Check className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />{t(`omnidrop.pricing.free.${f}` as keyof typeof import('@/i18n/translations').translations.en)}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative p-8 rounded-2xl bg-white/[0.03] border border-blue-500/30 h-full">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white text-xs font-bold">{t('omnidrop.pricing.pro.badge')}</div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-violet-500/5" />
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-[#EDEDED] mb-1">{t('omnidrop.pricing.pro')}</h3>
                  <div className="text-3xl font-bold mb-6"><span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">{t('omnidrop.pricing.pro.price')}</span></div>
                  <ul className="space-y-3">
                    {(['f1', 'f2', 'f3', 'f4', 'f5'] as const).map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-[#EDEDED]"><Check className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />{t(`omnidrop.pricing.pro.${f}` as keyof typeof import('@/i18n/translations').translations.en)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium tracking-wider uppercase mb-4">{t('omnidrop.trust.label')}</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#EDEDED]">{t('omnidrop.trust.title')}</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustItems.map(({ icon: Icon, key }, i) => (
              <ScrollReveal key={key} delay={i * 0.08}>
                <div className="text-center p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 flex items-center justify-center mx-auto mb-4"><Icon className="w-7 h-7 text-blue-400" /></div>
                  <h3 className="text-lg font-semibold text-[#EDEDED] mb-2">{t(`omnidrop.trust.${key}.title` as keyof typeof import('@/i18n/translations').translations.en)}</h3>
                  <p className="text-sm text-[#888] leading-relaxed">{t(`omnidrop.trust.${key}.desc` as keyof typeof import('@/i18n/translations').translations.en)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative p-12 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20 rounded-3xl" />
              <div className="relative z-10">
                <div className="text-5xl mb-6">📡</div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#EDEDED]">{t('omnidrop.final.title')}</h2>
                <p className="text-[#888] text-base mb-2 max-w-xl mx-auto">{t('omnidrop.final.subtitle')}</p>
                <WaitlistForm variant="footer" />
              </div>
            </div>
          </div>
        </ScrollReveal>
        <div className="mt-12 text-center text-sm text-[#888]">
          <Link href="/" className="hover:text-[#EDEDED] transition-colors">Home</Link>
          <span className="mx-3">&middot;</span>
          <Link href="/omnidrop/privacy" className="hover:text-[#EDEDED] transition-colors">Privacy</Link>
          <span className="mx-3">&middot;</span>
          <Link href="/omnidrop/terms" className="hover:text-[#EDEDED] transition-colors">Terms</Link>
        </div>
      </section>
    </div>
  );
}
