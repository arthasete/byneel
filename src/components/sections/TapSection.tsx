'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function TapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const leftX = useTransform(scrollYProgress, [0.1, 0.45], [-120, 0]);
  const rightX = useTransform(scrollYProgress, [0.1, 0.45], [120, 0]);
  const pulseScale = useTransform(scrollYProgress, [0.42, 0.5, 0.58], [0, 1.2, 0]);
  const pulseOpacity = useTransform(scrollYProgress, [0.42, 0.5, 0.58], [0, 0.8, 0]);

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Phone animation */}
        <div className="relative h-48 md:h-64 flex items-center justify-center mb-16">
          <motion.div
            style={{ x: leftX }}
            className="w-16 h-28 md:w-20 md:h-36 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-2xl md:text-3xl"
          >
            📱
          </motion.div>

          {/* Pulse effect */}
          <motion.div
            style={{ scale: pulseScale, opacity: pulseOpacity }}
            className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-brand-blue/40 to-brand-violet/40 blur-md"
          />

          <motion.div
            style={{ x: rightX }}
            className="w-16 h-28 md:w-20 md:h-36 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-2xl md:text-3xl"
          >
            💻
          </motion.div>
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
        >
          Touchez pour partager.{' '}
          <span className="text-muted">C&apos;est tout.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted text-lg max-w-lg mx-auto"
        >
          NFC pour se connecter, Wi-Fi pour transf&eacute;rer. Rapide, chiffr&eacute;, sans effort.
        </motion.p>
      </div>
    </section>
  );
}
