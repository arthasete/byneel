'use client';

import { useRef, useState, useEffect } from 'react';
import { useInView } from 'motion/react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface Stat {
  number: string;
  label: string;
  description: string;
  icon: string;
}

const stats: Stat[] = [
  {
    number: '8',
    label: 'Apps',
    description: 'Applications et outils en développement actif',
    icon: '📱',
  },
  {
    number: '5+',
    label: 'Plateformes',
    description: 'iOS, Android, Web, Desktop, CLI',
    icon: '🌐',
  },
  {
    number: '100%',
    label: 'Geek',
    description: 'Humain + IA — codé avec passion, café et trop d\'ambition',
    icon: '🤓',
  },
];

function CountUp({ target, duration = 2 }: { target: string; duration?: number }) {
  const [count, setCount] = useState('0');
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    const numericTarget = parseInt(target.replace(/\D/g, ''));
    const hasPlus = target.includes('+');
    const hasPercent = target.includes('%');

    let animationStart: number | null = null;

    const animate = (timestamp: number) => {
      if (!animationStart) animationStart = timestamp;
      const progress = Math.min((timestamp - animationStart) / (duration * 1000), 1);
      const currentValue = Math.floor(numericTarget * progress);

      let displayValue = currentValue.toString();
      if (hasPlus) displayValue += '+';
      if (hasPercent) displayValue += '%';

      setCount(displayValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="inline-block">
      {count}
    </span>
  );
}

export function StatsSection() {
  return (
    <section id="stats" className="relative py-24 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-brand-blue/5 to-brand-violet/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-blue mb-3">
            Par les chiffres
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ce qui nous définit
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Une passion pour la qualité, l&apos;innovation et l&apos;excellence sur chaque plateforme.
          </p>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="group relative h-full">
                {/* Gradient border background */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-violet/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                {/* Glass card */}
                <div className="relative h-full p-8 rounded-3xl glass-shimmer border border-white/10 group-hover:border-brand-blue/30 transition-all duration-300 overflow-hidden">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon — CSS float only, no Motion.js */}
                    <div
                      className="text-5xl mb-4 animate-float-slow"
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      {stat.icon}
                    </div>

                    <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent mb-3">
                      <CountUp target={stat.number} />
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {stat.label}
                    </h3>

                    <p className="text-sm text-muted leading-relaxed">
                      {stat.description}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-blue/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom accent */}
        <ScrollReveal>
          <div className="h-1 max-w-xs mx-auto bg-gradient-to-r from-brand-blue via-brand-violet to-cyan rounded-full" />
        </ScrollReveal>
      </div>
    </section>
  );
}
