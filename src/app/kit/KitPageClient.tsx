'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const kitItems = {
  en: [
    { icon: '\u{1F4D6}', title: 'Complete Guide (60+ pages)', desc: 'From setup to App Store. Every step, every error, every solution.' },
    { icon: '\u{1F4C4}', title: '4 CLAUDE.md Templates', desc: 'Flutter, Next.js, Python/FastAPI, Universal. Copy, adapt, code.' },
    { icon: '\u{1F680}', title: 'Flutter Starter Project', desc: 'A working app with architecture, navigation, dark mode, API service.' },
    { icon: '\u2705', title: 'App Store Checklist (43+ items)', desc: 'One missed item = rejection + 48h lost.' },
    { icon: '\u{1F4AC}', title: '15 Ready-to-Paste Prompts', desc: 'Init project, add auth, CRUD, payments, tests, deploy.' },
    { icon: '\u{1F527}', title: 'Setup Scripts (Mac + Windows)', desc: 'One command installs Flutter, Android Studio, VS Code, Claude Code.' },
  ],
  fr: [
    { icon: '\u{1F4D6}', title: 'Guide complet (60+ pages)', desc: "Du setup \u00e0 l'App Store. Chaque \u00e9tape, chaque erreur, chaque solution." },
    { icon: '\u{1F4C4}', title: '4 Templates CLAUDE.md', desc: 'Flutter, Next.js, Python/FastAPI, Universel. Copie, adapte, code.' },
    { icon: '\u{1F680}', title: 'Projet Flutter Starter', desc: 'Une app fonctionnelle avec architecture, navigation, dark mode, service API.' },
    { icon: '\u2705', title: 'Checklist App Store (43+ items)', desc: "Un item oubli\u00e9 = rejet + 48h perdues." },
    { icon: '\u{1F4AC}', title: '15 Prompts pr\u00eats \u00e0 coller', desc: 'Init projet, auth, CRUD, paiements, tests, deploy.' },
    { icon: '\u{1F527}', title: 'Scripts de setup (Mac + Windows)', desc: 'Une commande installe Flutter, Android Studio, VS Code, Claude Code.' },
  ],
};

const beforeAfter = {
  en: {
    before: ['2-3h per feature', 'Re-explain context every session', 'Files in random places', 'Refactoring every 2 weeks', '3 App Store rejections', 'Frustration: 8/10'],
    after: ['30-45min per feature', 'Claude knows your project instantly', 'Every file in the right folder', 'Refactored once in 3 months', 'First submission approved', 'Frustration: 2/10'],
    beforeTitle: 'Before the Kit',
    afterTitle: 'After the Kit',
  },
  fr: {
    before: ['2-3h par feature', 'Re-expliquer le contexte \u00e0 chaque session', 'Fichiers n\'importe o\u00f9', 'Refactoring toutes les 2 semaines', '3 rejets App Store', 'Frustration : 8/10'],
    after: ['30-45min par feature', 'Claude conna\u00eet ton projet instantan\u00e9ment', 'Chaque fichier au bon endroit', 'Refactor\u00e9 1 fois en 3 mois', 'Premi\u00e8re soumission accept\u00e9e', 'Frustration : 2/10'],
    beforeTitle: 'Avant le Kit',
    afterTitle: 'Apr\u00e8s le Kit',
  },
};

const pricingFeatures = {
  en: [
    'Complete guide (60+ pages)',
    '4 CLAUDE.md templates (Flutter, Next.js, Python, Universal)',
    'Flutter starter project',
    'App Store checklist (43 items)',
    '15 ready-to-paste prompts',
    'Setup scripts (Mac + Windows)',
    '50+ documented error fixes',
    'Bonus: Cheat Sheet + 7-Day Sprint + Privacy Policy template',
    'All future updates included',
  ],
  fr: [
    'Guide complet (60+ pages)',
    '4 templates CLAUDE.md (Flutter, Next.js, Python, Universel)',
    'Projet Flutter starter',
    'Checklist App Store (43 items)',
    '15 prompts pr\u00eats \u00e0 coller',
    'Scripts de setup (Mac + Windows)',
    '50+ corrections d\'erreurs document\u00e9es',
    'Bonus : Cheat Sheet + Sprint 7 jours + Template Privacy Policy',
    'Toutes les futures mises \u00e0 jour incluses',
  ],
};

const faqs = {
  en: [
    { q: 'Do I need to know how to code?', a: 'No. Claude Code writes the code. You direct it. The kit teaches you how to direct it effectively.' },
    { q: 'Do I need a Mac?', a: 'For iOS: yes, you need a Mac. For Android: no, Windows works perfectly with the included setup scripts.' },
    { q: "What's a CLAUDE.md?", a: 'A file that tells Claude Code how your project works. Think of it as a permanent briefing \u2014 so Claude never forgets your architecture, conventions, and rules.' },
    { q: 'What are the total costs to ship an app?', a: 'Apple Developer: $99/year + Google Play: $25 one-time + Claude Pro: $20/month. Total \u2248 $360 for year 1.' },
  ],
  fr: [
    { q: 'Faut-il savoir coder ?', a: 'Non. Claude Code \u00e9crit le code. Toi, tu le diriges. Le kit t\'apprend \u00e0 le diriger efficacement.' },
    { q: 'Faut-il un Mac ?', a: 'Pour iOS : oui. Pour Android : non, Windows marche parfaitement avec les scripts de setup inclus.' },
    { q: "C'est quoi un CLAUDE.md ?", a: 'Un fichier qui dit \u00e0 Claude Code comment ton projet fonctionne. Un briefing permanent pour qu\'il n\'oublie jamais ton architecture et tes conventions.' },
    { q: 'Quels sont les co\u00fbts totaux pour publier une app ?', a: 'Apple Developer : 99\u20ac/an + Google Play : 25\u20ac une fois + Claude Pro : 20\u20ac/mois. Total \u2248 360\u20ac la premi\u00e8re ann\u00e9e.' },
  ],
};

const texts = {
  en: {
    badge: 'For vibe coders \u2014 by a vibe coder',
    title1: 'Zero to App Store',
    title2: 'with Claude Code',
    subtitle: 'The complete kit for non-developers who build apps with AI.',
    cta: 'Get the Kit',
    ctaPrice: '$19',
    ctaOldPrice: '$49',
    subCta: '2 apps shipped. 50+ errors documented. 0 CS degree required.',
    launchBadge: 'Launch price \u2014 first 50 only',
    promoLabel: 'Promo code: LAUNCH',
    insideLabel: 'Everything you need',
    insideTitle: "What's Inside",
    insideDesc: '6 resources. Battle-tested on 2 real apps. Zero fluff.',
    baLabel: 'Real numbers',
    baTitle: 'Before vs After',
    priceBadge: 'COMPLETE KIT',
    priceAmount: '$19',
    priceOld: '$49',
    priceUnit: 'one-time',
    faqLabel: 'Questions',
    faqTitle: 'FAQ',
    testimonial: 'I shipped my first app in 3 weeks with this kit. The CLAUDE.md alone saved me dozens of hours.',
    testimonialBy: 'Neel',
    testimonialRole: 'ByNeel',
    finalTitle: 'Ready to ship your first app?',
    finalSubtitle: 'Stop fighting with Claude Code. Start directing it.',
  },
  fr: {
    badge: 'Pour les vibe coders \u2014 par un vibe coder',
    title1: 'De z\u00e9ro \u00e0 l\'App Store',
    title2: 'avec Claude Code',
    subtitle: 'Le kit complet pour les non-d\u00e9veloppeurs qui cr\u00e9ent des apps avec l\'IA.',
    cta: 'Obtenir le Kit',
    ctaPrice: '19\u20ac',
    ctaOldPrice: '49\u20ac',
    subCta: '2 apps publi\u00e9es. 50+ erreurs document\u00e9es. 0 dipl\u00f4me requis.',
    launchBadge: 'Prix de lancement \u2014 50 premiers uniquement',
    promoLabel: 'Code promo : LAUNCH',
    insideLabel: 'Tout ce qu\'il faut',
    insideTitle: 'Ce qui est inclus',
    insideDesc: '6 ressources. Test\u00e9es sur 2 vraies apps. Z\u00e9ro blabla.',
    baLabel: 'Chiffres r\u00e9els',
    baTitle: 'Avant vs Apr\u00e8s',
    priceBadge: 'KIT COMPLET',
    priceAmount: '19\u20ac',
    priceOld: '49\u20ac',
    priceUnit: 'paiement unique',
    faqLabel: 'Questions',
    faqTitle: 'FAQ',
    testimonial: "J'ai publi\u00e9 ma premi\u00e8re app en 3 semaines avec ce kit. Le CLAUDE.md seul m'a fait gagner des dizaines d'heures.",
    testimonialBy: 'Neel',
    testimonialRole: 'ByNeel',
    finalTitle: 'Pr\u00eat \u00e0 publier ta premi\u00e8re app ?',
    finalSubtitle: 'Arr\u00eate de te battre avec Claude Code. Dirige-le.',
  },
};

export default function KitPageClient() {
  const { language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const t = texts[language];
  const items = kitItems[language];
  const ba = beforeAfter[language];
  const pricing = pricingFeatures[language];
  const faqList = faqs[language];

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-30px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'ByNeel Starter Kit',
            description: 'Complete kit for non-developers building apps with Claude Code.',
            brand: { '@type': 'Brand', name: 'ByNeel' },
            url: 'https://byneel.com/kit',
            image: 'https://byneel.com/og-kit.png',
            offers: { '@type': 'Offer', price: '19.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.en.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-brand-blue/15 to-brand-violet/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan/8 to-pink/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full border border-brand-blue/30 text-brand-blue bg-brand-blue/5 mb-8">
              {t.badge}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              {t.title1}<br />
              <span className="gradient-text">{t.title2}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-10">{t.subtitle}</p>
            <a href="https://byneel.lemonsqueezy.com/checkout/buy/1b7c90b6-f742-463f-9cb0-6e796ef9fdd0?discount=LAUNCH" className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-lg text-white gradient-glow transition-all duration-300 hover:scale-105">
              {t.cta} — <span className="line-through text-white/40">{t.ctaOldPrice}</span> <span className="text-green-400">{t.ctaPrice}</span>
            </a>
            <p className="mt-6 text-sm text-muted">{t.subCta}</p>
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT'S INSIDE ═══════════ */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-blue mb-3">{t.insideLabel}</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{t.insideTitle}</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">{t.insideDesc}</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <GlassCard className="p-8 h-full hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ BEFORE vs AFTER ═══════════ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-blue mb-3">{t.baLabel}</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{t.baTitle}</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <GlassCard className="p-8 border-red-500/20 hover:border-red-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">&#x2717;</span>
                  <h3 className="text-xl font-bold text-red-400">{ba.beforeTitle}</h3>
                </div>
                <ul className="space-y-4">
                  {ba.before.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-red-500/60 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <GlassCard className="p-8 border-green-500/20 hover:border-green-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">&#x2713;</span>
                  <h3 className="text-xl font-bold text-green-400">{ba.afterTitle}</h3>
                </div>
                <ul className="space-y-4">
                  {ba.after.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-green-500/60 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ PRICING ═══════════ */}
      <section className="py-20 px-6">
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 rounded-3xl blur-2xl opacity-50 pointer-events-none" />
              <GlassCard className="relative p-10 border-brand-blue/20 hover:border-brand-blue/30">
                <div className="text-center mb-8">
                  <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full gradient-glow text-white mb-4">{t.priceBadge}</span>
                  <div className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-green-500/10 border border-green-500/20 text-green-400 mb-6">
                    {t.launchBadge}
                  </div>
                  <div className="flex items-baseline justify-center gap-3">
                    <span className="text-2xl text-muted/50 line-through">{t.priceOld}</span>
                    <span className="text-6xl font-bold text-green-400">{t.priceAmount}</span>
                    <span className="text-muted text-lg">{t.priceUnit}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-10">
                  {pricing.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://byneel.lemonsqueezy.com/checkout/buy/1b7c90b6-f742-463f-9cb0-6e796ef9fdd0?discount=LAUNCH" className="block w-full text-center px-8 py-4 rounded-xl font-bold text-lg text-white gradient-glow transition-all duration-300 hover:scale-105">
                  {t.cta} — <span className="line-through text-white/40">{t.ctaOldPrice}</span> <span className="text-green-400">{t.ctaPrice}</span>
                </a>
                <p className="mt-4 text-sm text-muted text-center">{t.promoLabel}</p>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-blue mb-3">{t.faqLabel}</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{t.faqTitle}</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {faqList.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 0.08}>
                <GlassCard className="p-0 overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                    <span className="font-semibold pr-4">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-5 h-5 text-muted shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted shrink-0" />}
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                    <p className="px-6 text-muted text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIAL ═══════════ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <GlassCard className="p-10 text-center">
              <blockquote className="text-xl md:text-2xl font-light italic text-muted leading-relaxed mb-6">
                &ldquo;{t.testimonial}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-glow flex items-center justify-center text-white font-bold text-sm">N</div>
                <div>
                  <p className="font-semibold text-sm">{t.testimonialBy}</p>
                  <p className="text-xs text-muted">{t.testimonialRole}</p>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{t.finalTitle}</h2>
            <p className="text-muted text-lg mb-10 max-w-xl mx-auto">{t.finalSubtitle}</p>
            <a href="https://byneel.lemonsqueezy.com/checkout/buy/1b7c90b6-f742-463f-9cb0-6e796ef9fdd0?discount=LAUNCH" className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-lg text-white gradient-glow transition-all duration-300 hover:scale-105">
              {t.cta} — <span className="line-through text-white/40">{t.ctaOldPrice}</span> <span className="text-green-400">{t.ctaPrice}</span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
