'use client';

import { motion } from 'motion/react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Monitor, Laptop, Terminal, Smartphone, Tablet } from 'lucide-react';

const platforms = [
  { name: 'Windows', icon: Monitor },
  { name: 'macOS', icon: Laptop },
  { name: 'Linux', icon: Terminal },
  { name: 'Android', icon: Smartphone },
  { name: 'iOS', icon: Tablet },
];

export function PlatformSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Partout.{' '}
            <span className="text-muted">Sur chaque plateforme.</span>
          </h2>
          <p className="text-muted text-lg mb-16 max-w-lg mx-auto">
            OmniDrop fonctionne sur tous vos appareils. Windows, Mac, Linux, Android, iOS.
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {platforms.map((platform, i) => (
            <ScrollReveal key={platform.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl glass flex items-center justify-center transition-all duration-300 group-hover:border-white/[0.2] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                  <platform.icon className="w-7 h-7 md:w-8 md:h-8 text-muted group-hover:text-foreground transition-colors" />
                </div>
                <span className="text-xs text-muted group-hover:text-foreground transition-colors">
                  {platform.name}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
