'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="glass p-10 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Bonjour, je suis Neel
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-xl mx-auto mb-8">
              D&eacute;veloppeur solo passionn&eacute;. Je cr&eacute;e des applications mobiles que
              j&apos;aimerais utiliser moi-m&ecirc;me &mdash; soign&eacute;es dans les d&eacute;tails,
              simples dans l&apos;usage.
            </p>
            <motion.a
              href="mailto:contact@byneel.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-6 py-3 rounded-xl border border-white/[0.15] text-foreground font-semibold hover:border-white/[0.3] transition-colors"
            >
              Me contacter
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
