'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface TechItem {
  name: string;
  icon: string;
  category: string;
  color: string;
}

const technologies: TechItem[] = [
  { name: 'Flutter', icon: '🦋', category: 'Mobile', color: 'from-blue-500 to-cyan-500' },
  { name: 'Next.js', icon: '▲', category: 'Web', color: 'from-neutral-400 to-neutral-600' },
  { name: 'TypeScript', icon: '🔷', category: 'Language', color: 'from-blue-600 to-blue-400' },
  { name: 'Python', icon: '🐍', category: 'Language', color: 'from-yellow-500 to-green-500' },
  { name: 'Supabase', icon: '🚀', category: 'Backend', color: 'from-green-500 to-emerald-500' },
  { name: 'Claude AI', icon: '🤖', category: 'IA', color: 'from-purple-600 to-pink-500' },
  { name: 'FastAPI', icon: '⚡', category: 'Backend', color: 'from-teal-500 to-green-500' },
  { name: 'Docker', icon: '🐳', category: 'DevOps', color: 'from-blue-600 to-cyan-500' },
  { name: 'Ollama', icon: '🧠', category: 'IA locale', color: 'from-orange-500 to-red-500' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'Styling', color: 'from-cyan-500 to-blue-500' },
  { name: 'Dart', icon: '🎯', category: 'Language', color: 'from-blue-400 to-cyan-400' },
  { name: 'SQLite', icon: '🗄️', category: 'Database', color: 'from-blue-300 to-blue-500' },
];

export function TechStackSection() {
  return (
    <section id="tech" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-brand-blue/10 to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-blue mb-3">
            Technologie
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            L&apos;arsenal technologique
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Les meilleures technologies pour construire des applications modernes, scalables et performantes.
          </p>
        </ScrollReveal>

        {/* Tech Grid */}
        <div className="relative py-12">
          {/* Center glow */}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-brand-blue/20 to-brand-violet/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <ScrollReveal key={tech.name} delay={index * 0.05}>
                <div className="group relative h-full">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300 blur-lg`} />

                  {/* Card */}
                  <div className="relative h-full p-6 rounded-2xl glass-shimmer border border-white/10 group-hover:border-white/30 group-hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center gap-3 overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Icon — CSS float only */}
                    <div
                      className="text-4xl relative z-10 animate-float-slow"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {tech.icon}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <h3 className="font-bold text-foreground text-sm md:text-base">
                        {tech.name}
                      </h3>
                      <p className="text-xs text-muted mt-1">
                        {tech.category}
                      </p>
                    </div>

                    {/* Corner accent */}
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${tech.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-300`} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom description */}
        <ScrollReveal className="mt-16 text-center">
          <p className="text-muted text-base max-w-2xl mx-auto">
            Stack soigneusement sélectionné pour la <span className="text-foreground font-semibold">performance</span>, la <span className="text-foreground font-semibold">maintenabilité</span> et la <span className="text-foreground font-semibold">scalabilité</span> de chaque projet.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
