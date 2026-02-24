'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-background/80 backdrop-blur-xl border-b border-white/[0.06]"
    >
      <Link href="/" className="text-xl font-semibold tracking-tight">
        by<span className="gradient-text">Neel</span>
      </Link>
      <a
        href="mailto:contact@byneel.com"
        className="text-sm text-muted hover:text-foreground transition-colors"
      >
        contact@byneel.com
      </a>
    </motion.nav>
  );
}
