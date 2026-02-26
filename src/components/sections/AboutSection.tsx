'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function AboutSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="glass p-10 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Bonjour, je suis Neel
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-xl mx-auto mb-4">
              Développeur solo passionné. Je crée des applications mobiles que
              j&apos;aimerais utiliser moi-même — soignées dans les détails,
              simples dans l&apos;usage.
            </p>
            <p className="text-muted text-base leading-relaxed max-w-xl mx-auto mb-8">
              <span className="text-foreground/80 font-medium">Développement assisté par IA</span> — j&apos;utilise
              Claude et d&apos;autres outils IA pour accélérer le développement
              tout en gardant une vision humaine et une attention aux détails.
            </p>
            <a
              href="mailto:contact@byneel.com"
              className="inline-block px-6 py-3 rounded-xl border border-white/[0.15] text-foreground font-semibold hover:border-white/[0.3] hover:scale-[1.03] active:scale-95 transition-all duration-300"
            >
              Me contacter
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
