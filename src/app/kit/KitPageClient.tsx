'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const kitItems = [
  {
    icon: '\u{1F4D6}',
    title: 'Complete Guide (60+ pages)',
    desc: 'From setup to App Store. Every step, every error, every solution.',
  },
  {
    icon: '\u{1F4C4}',
    title: '4 CLAUDE.md Templates',
    desc: 'Flutter, Next.js, Python/FastAPI, Universal. Copy, adapt, code.',
  },
  {
    icon: '\u{1F680}',
    title: 'Flutter Starter Project',
    desc: 'A working app with architecture, navigation, dark mode, API service.',
  },
  {
    icon: '\u2705',
    title: 'App Store Checklist (43+ items)',
    desc: 'One missed item = rejection + 48h lost.',
  },
  {
    icon: '\u{1F4AC}',
    title: '15 Ready-to-Paste Prompts',
    desc: 'Init project, add auth, CRUD, payments, tests, deploy.',
  },
  {
    icon: '\u{1F527}',
    title: 'Setup Scripts (Mac + Windows)',
    desc: 'One command installs Flutter, Android Studio, VS Code, Claude Code.',
  },
];

const beforeItems = [
  '2-3h per feature',
  'Re-explain context every session',
  'Files in random places',
  'Refactoring every 2 weeks',
  '3 App Store rejections',
  'Frustration: 8/10',
];

const afterItems = [
  '30-45min per feature',
  'Claude knows your project instantly',
  'Every file in the right folder',
  'Refactored once in 3 months',
  'First submission approved',
  'Frustration: 2/10',
];

const pricingFeatures = [
  'Complete guide (60+ pages)',
  '4 CLAUDE.md templates (Flutter, Next.js, Python, Universal)',
  'Flutter starter project',
  'App Store checklist (43 items)',
  '15 ready-to-paste prompts',
  'Setup scripts (Mac + Windows)',
  '50+ documented error fixes',
  'Bonus: Cheat Sheet + 7-Day Sprint + Privacy Policy template',
  'All future updates included',
];

const faqs = [
  {
    q: 'Do I need to know how to code?',
    a: 'No. Claude Code writes the code. You direct it. The kit teaches you how to direct it effectively.',
  },
  {
    q: 'Do I need a Mac?',
    a: 'For iOS: yes, you need a Mac. For Android: no, Windows works perfectly with the included setup scripts.',
  },
  {
    q: "What's a CLAUDE.md?",
    a: 'A file that tells Claude Code how your project works. Think of it as a permanent briefing \u2014 so Claude never forgets your architecture, conventions, and rules.',
  },
  {
    q: 'What are the total costs to ship an app?',
    a: 'Apple Developer: $99/year + Google Play: $25 one-time + Claude Pro: $20/month. Total \u2248 $360 for year 1.',
  },
];

export default function KitPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'ByNeel Starter Kit',
            description:
              'Complete kit for non-developers building apps with Claude Code.',
            brand: { '@type': 'Brand', name: 'ByNeel' },
            url: 'https://byneel.com/kit',
            image: 'https://byneel.com/og-kit.png',
            offers: {
              '@type': 'Offer',
              price: '49.00',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-brand-blue/15 to-brand-violet/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan/8 to-pink/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="reveal">
            {/* Badge */}
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full border border-brand-blue/30 text-brand-blue bg-brand-blue/5 mb-8">
              For vibe coders &mdash; by a vibe coder
            </span>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Zero to App Store
              <br />
              <span className="gradient-text">with Claude Code</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-10">
              The complete kit for non-developers who build apps with AI.
            </p>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-lg text-white gradient-glow transition-all duration-300 hover:scale-105"
            >
              Get the Kit &mdash; $49
            </a>

            {/* Sub-CTA */}
            <p className="mt-6 text-sm text-muted">
              2 apps shipped. 50+ errors documented. 0 CS degree required.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHAT'S INSIDE ═══════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-blue mb-3">
                Everything you need
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                What&apos;s Inside
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                6 resources. Battle-tested on 2 real apps. Zero fluff.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kitItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <GlassCard className="p-8 h-full hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ BEFORE vs AFTER ═══════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-blue mb-3">
                Real numbers
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Before vs After
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <ScrollReveal>
              <GlassCard className="p-8 border-red-500/20 hover:border-red-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">&#x2717;</span>
                  <h3 className="text-xl font-bold text-red-400">
                    Before the Kit
                  </h3>
                </div>
                <ul className="space-y-4">
                  {beforeItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-muted"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-red-500/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>

            {/* After */}
            <ScrollReveal delay={0.1}>
              <GlassCard className="p-8 border-green-500/20 hover:border-green-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">&#x2713;</span>
                  <h3 className="text-xl font-bold text-green-400">
                    After the Kit
                  </h3>
                </div>
                <ul className="space-y-4">
                  {afterItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-muted"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-green-500/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ PRICING ═══════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 rounded-3xl blur-2xl opacity-50 pointer-events-none" />

              <GlassCard className="relative p-10 border-brand-blue/20 hover:border-brand-blue/30">
                {/* Badge */}
                <div className="text-center mb-8">
                  <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full gradient-glow text-white mb-6">
                    Complete Kit
                  </span>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-6xl font-bold">$49</span>
                    <span className="text-muted text-lg">one-time</span>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-4 mb-10">
                  {pricingFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#"
                  className="block w-full text-center px-8 py-4 rounded-xl font-bold text-lg text-white gradient-glow transition-all duration-300 hover:scale-105"
                >
                  Get the Kit &mdash; $49
                </a>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-blue mb-3">
                Questions
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                FAQ
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 0.08}>
                <GlassCard className="p-0 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold pr-4">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-muted shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted shrink-0" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === i ? 'max-h-40 pb-6' : 'max-h-0'
                    }`}
                  >
                    <p className="px-6 text-muted text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIAL ═══════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <GlassCard className="p-10 text-center">
              <blockquote className="text-xl md:text-2xl font-light italic text-muted leading-relaxed mb-6">
                &ldquo;I shipped my first app in 3 weeks with this kit. The
                CLAUDE.md alone saved me dozens of hours.&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-glow flex items-center justify-center text-white font-bold text-sm">
                  N
                </div>
                <div>
                  <p className="font-semibold text-sm">Neel</p>
                  <p className="text-xs text-muted">ByNeel</p>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to ship your first app?
            </h2>
            <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
              Stop fighting with Claude Code. Start directing it.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-lg text-white gradient-glow transition-all duration-300 hover:scale-105"
            >
              Get the Kit &mdash; $49
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
