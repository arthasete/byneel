'use client';

import { motion } from 'motion/react';
import { AnimatedText } from '@/components/ui/AnimatedText';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-8 text-xs font-medium tracking-widest uppercase rounded-full border border-white/[0.1] text-muted"
        >
          Bient&ocirc;t disponible
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl">
          <AnimatedText text="OmniDrop." delay={0.3} />
          <br />
          <span className="gradient-text">
            <AnimatedText text="La magie du transfert," delay={0.6} />
          </span>
          <br />
          <AnimatedText text="partout." delay={1.0} />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="text-lg md:text-xl text-muted max-w-xl mx-auto mb-10"
        >
          Transf&eacute;rez vos fichiers entre tous vos appareils. Sans cloud. Sans c&acirc;ble. Juste un tap.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block px-8 py-3.5 rounded-xl font-semibold text-white gradient-glow transition-all duration-300"
        >
          D&eacute;couvrir
        </motion.a>
      </motion.div>
    </section>
  );
}
