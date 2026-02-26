'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Projets', href: '/#projects' },
  { label: 'Tech', href: '/#tech' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${
          scrolled && !isOpen
            ? 'bg-background/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
        style={{ animation: 'slide-up 0.5s ease-out' }}
      >
        <Link href="/" className="text-xl font-semibold tracking-tight z-[60]">
          By<span className="gradient-text">Neel</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:contact@byneel.com"
            className="text-sm px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-200"
          >
            contact@byneel.com
          </a>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[60] w-10 h-10 flex items-center justify-center"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
        >
          <div className="w-6 flex flex-col gap-[5px]">
            <span
              className={`block h-[2px] bg-foreground rounded-full transition-all duration-300 origin-center ${
                isOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block h-[2px] bg-foreground rounded-full transition-all duration-300 ${
                isOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block h-[2px] bg-foreground rounded-full transition-all duration-300 origin-center ${
                isOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-background/95 backdrop-blur-2xl transition-all duration-400 md:hidden ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-light text-muted hover:text-foreground transition-all duration-300 hover:tracking-wider"
              style={{
                transitionDelay: isOpen ? `${i * 60}ms` : '0ms',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.4s ease ${isOpen ? i * 60 : 0}ms, transform 0.4s ease ${isOpen ? i * 60 : 0}ms, color 0.2s, letter-spacing 0.3s`,
              }}
            >
              {link.label}
            </a>
          ))}
          <div
            className="mt-4 pt-6 border-t border-white/[0.08]"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.4s ease ${isOpen ? navLinks.length * 60 : 0}ms, transform 0.4s ease ${isOpen ? navLinks.length * 60 : 0}ms`,
            }}
          >
            <a
              href="mailto:contact@byneel.com"
              onClick={() => setIsOpen(false)}
              className="text-lg text-brand-blue hover:text-brand-purple transition-colors duration-200"
            >
              contact@byneel.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
