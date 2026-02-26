'use client';

/**
 * Full-page floating particles & geeky elements.
 * Pure CSS animations — no JS runtime cost.
 * Uses position:fixed to float across all sections.
 */
export function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
      {/* === ROW 1: Top area (0-25%) === */}

      {/* Circuit brain */}
      <div className="floating-element" style={{ top: '5%', left: '8%', animationDelay: '0s', animationDuration: '22s' }}>
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="opacity-[0.06]">
          <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1.27c.34-.6.99-1 1.73-1a2 2 0 010 4c-.74 0-1.39-.4-1.73-1H21a7 7 0 01-7 7v1.27c.6.34 1 .99 1 1.73a2 2 0 01-4 0c0-.74.4-1.39 1-1.73V23a7 7 0 01-7-7H3.73c-.34.6-.99 1-1.73 1a2 2 0 010-4c.74 0 1.39.4 1.73 1H5a7 7 0 017-7V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2zm0 7a5 5 0 100 10 5 5 0 000-10z" fill="currentColor" className="text-brand-violet"/>
        </svg>
      </div>

      {/* Curly braces */}
      <div className="floating-element" style={{ top: '8%', right: '15%', animationDelay: '3s', animationDuration: '19s' }}>
        <span className="text-3xl font-mono opacity-[0.05] text-cyan select-none">&#123;&#125;</span>
      </div>

      {/* Binary stream */}
      <div className="floating-element" style={{ top: '12%', left: '45%', animationDelay: '7s', animationDuration: '25s' }}>
        <span className="text-[10px] font-mono opacity-[0.04] text-brand-blue select-none tracking-widest">10110011</span>
      </div>

      {/* Hashtag */}
      <div className="floating-element" style={{ top: '3%', right: '35%', animationDelay: '2s', animationDuration: '18s' }}>
        <span className="text-2xl font-mono opacity-[0.05] text-pink select-none">#</span>
      </div>

      {/* === ROW 2: Upper-mid (25-50%) === */}

      {/* CPU Chip */}
      <div className="floating-element" style={{ top: '28%', left: '3%', animationDelay: '1s', animationDuration: '24s' }}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="opacity-[0.06]">
          <rect x="6" y="6" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-pink"/>
          <line x1="9" y1="6" x2="9" y2="2" stroke="currentColor" strokeWidth="1.5" className="text-pink"/>
          <line x1="15" y1="6" x2="15" y2="2" stroke="currentColor" strokeWidth="1.5" className="text-pink"/>
          <line x1="9" y1="22" x2="9" y2="18" stroke="currentColor" strokeWidth="1.5" className="text-pink"/>
          <line x1="15" y1="22" x2="15" y2="18" stroke="currentColor" strokeWidth="1.5" className="text-pink"/>
          <line x1="6" y1="9" x2="2" y2="9" stroke="currentColor" strokeWidth="1.5" className="text-pink"/>
          <line x1="6" y1="15" x2="2" y2="15" stroke="currentColor" strokeWidth="1.5" className="text-pink"/>
          <line x1="22" y1="9" x2="18" y2="9" stroke="currentColor" strokeWidth="1.5" className="text-pink"/>
          <line x1="22" y1="15" x2="18" y2="15" stroke="currentColor" strokeWidth="1.5" className="text-pink"/>
        </svg>
      </div>

      {/* Code brackets */}
      <div className="floating-element" style={{ top: '32%', right: '6%', animationDelay: '5s', animationDuration: '20s' }}>
        <span className="text-2xl font-mono opacity-[0.06] text-brand-blue select-none">&lt;/&gt;</span>
      </div>

      {/* Lambda */}
      <div className="floating-element" style={{ top: '38%', left: '88%', animationDelay: '9s', animationDuration: '21s' }}>
        <span className="text-3xl font-mono opacity-[0.05] text-brand-violet select-none">λ</span>
      </div>

      {/* Semicolon */}
      <div className="floating-element" style={{ top: '25%', left: '55%', animationDelay: '4s', animationDuration: '17s' }}>
        <span className="text-4xl font-mono opacity-[0.04] text-cyan select-none">;</span>
      </div>

      {/* Neural network node */}
      <div className="floating-element" style={{ top: '35%', left: '20%', animationDelay: '6s', animationDuration: '23s' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="opacity-[0.05]">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" className="text-brand-blue"/>
          <circle cx="4" cy="6" r="2" stroke="currentColor" strokeWidth="1" className="text-brand-blue"/>
          <circle cx="20" cy="6" r="2" stroke="currentColor" strokeWidth="1" className="text-brand-blue"/>
          <circle cx="4" cy="18" r="2" stroke="currentColor" strokeWidth="1" className="text-brand-blue"/>
          <circle cx="20" cy="18" r="2" stroke="currentColor" strokeWidth="1" className="text-brand-blue"/>
          <line x1="10" y1="10" x2="6" y2="7" stroke="currentColor" strokeWidth="1" className="text-brand-blue"/>
          <line x1="14" y1="10" x2="18" y2="7" stroke="currentColor" strokeWidth="1" className="text-brand-blue"/>
          <line x1="10" y1="14" x2="6" y2="17" stroke="currentColor" strokeWidth="1" className="text-brand-blue"/>
          <line x1="14" y1="14" x2="18" y2="17" stroke="currentColor" strokeWidth="1" className="text-brand-blue"/>
        </svg>
      </div>

      {/* === ROW 3: Lower-mid (50-75%) === */}

      {/* Terminal prompt */}
      <div className="floating-element" style={{ top: '55%', right: '10%', animationDelay: '8s', animationDuration: '16s' }}>
        <span className="text-xl font-mono opacity-[0.06] text-cyan select-none">$_</span>
      </div>

      {/* AI Brain hemisphere */}
      <div className="floating-element" style={{ top: '52%', left: '5%', animationDelay: '4s', animationDuration: '22s' }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="opacity-[0.06]">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.06-7.44 7-7.93v15.86zm2 0V4.07c3.94.49 7 3.85 7 7.93s-3.06 7.44-7 7.93z" fill="currentColor" className="text-brand-violet"/>
          <circle cx="9" cy="12" r="1.5" fill="currentColor" className="text-brand-violet"/>
          <circle cx="15" cy="12" r="1.5" fill="currentColor" className="text-brand-violet"/>
        </svg>
      </div>

      {/* Binary */}
      <div className="floating-element" style={{ top: '60%', right: '40%', animationDelay: '11s', animationDuration: '26s' }}>
        <span className="text-xs font-mono opacity-[0.04] text-brand-blue select-none tracking-wider">01101</span>
      </div>

      {/* Pipe operator */}
      <div className="floating-element" style={{ top: '65%', left: '75%', animationDelay: '3s', animationDuration: '19s' }}>
        <span className="text-3xl font-mono opacity-[0.05] text-pink select-none">|&gt;</span>
      </div>

      {/* Arrow function */}
      <div className="floating-element" style={{ top: '58%', left: '35%', animationDelay: '10s', animationDuration: '20s' }}>
        <span className="text-2xl font-mono opacity-[0.05] text-brand-violet select-none">=&gt;</span>
      </div>

      {/* Database icon */}
      <div className="floating-element" style={{ top: '68%', left: '12%', animationDelay: '7s', animationDuration: '23s' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="opacity-[0.05]">
          <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="1.5" className="text-cyan"/>
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="currentColor" strokeWidth="1.5" className="text-cyan"/>
          <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="currentColor" strokeWidth="1.5" className="text-cyan"/>
        </svg>
      </div>

      {/* === ROW 4: Bottom area (75-100%) === */}

      {/* Git branch */}
      <div className="floating-element" style={{ top: '78%', right: '8%', animationDelay: '2s', animationDuration: '21s' }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="opacity-[0.05]">
          <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" className="text-brand-blue"/>
          <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" className="text-brand-blue"/>
          <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" className="text-brand-blue"/>
          <path d="M6 9v6M18 9c0 4-12 3-12 9" stroke="currentColor" strokeWidth="1.5" className="text-brand-blue"/>
        </svg>
      </div>

      {/* Infinity symbol */}
      <div className="floating-element" style={{ top: '82%', left: '25%', animationDelay: '5s', animationDuration: '18s' }}>
        <span className="text-3xl opacity-[0.05] text-brand-violet select-none">∞</span>
      </div>

      {/* Brackets */}
      <div className="floating-element" style={{ top: '88%', right: '30%', animationDelay: '9s', animationDuration: '24s' }}>
        <span className="text-2xl font-mono opacity-[0.04] text-brand-blue select-none">[ ]</span>
      </div>

      {/* Atom/React icon */}
      <div className="floating-element" style={{ top: '75%', left: '60%', animationDelay: '1s', animationDuration: '20s' }}>
        <span className="text-2xl opacity-[0.06] text-cyan select-none">⚛</span>
      </div>

      {/* Function */}
      <div className="floating-element" style={{ top: '92%', left: '8%', animationDelay: '6s', animationDuration: '17s' }}>
        <span className="text-xl font-mono opacity-[0.05] text-pink select-none">fn()</span>
      </div>

      {/* Angle brackets */}
      <div className="floating-element" style={{ top: '85%', right: '55%', animationDelay: '12s', animationDuration: '22s' }}>
        <span className="text-xl font-mono opacity-[0.04] text-brand-violet select-none">&lt;T&gt;</span>
      </div>

      {/* Asterisk */}
      <div className="floating-element" style={{ top: '95%', right: '15%', animationDelay: '8s', animationDuration: '19s' }}>
        <span className="text-4xl font-mono opacity-[0.04] text-cyan select-none">*</span>
      </div>

      {/* Geometric shapes — borders only, extremely lightweight */}
      <div className="geo-shape" style={{ top: '15%', left: '8%', width: '80px', height: '80px', borderColor: 'rgba(59,130,246,0.06)', borderRadius: '20px', animation: 'geo-spin 30s linear infinite' }} />
      <div className="geo-shape" style={{ top: '45%', right: '5%', width: '60px', height: '60px', borderColor: 'rgba(236,72,153,0.05)', borderRadius: '12px', animation: 'geo-spin 25s linear infinite reverse' }} />
      <div className="geo-shape" style={{ top: '70%', left: '15%', width: '50px', height: '50px', borderColor: 'rgba(6,182,212,0.05)', borderRadius: '50%', animation: 'geo-spin 35s linear infinite' }} />
      <div className="geo-shape" style={{ top: '90%', right: '20%', width: '70px', height: '70px', borderColor: 'rgba(139,92,246,0.04)', borderRadius: '16px', animation: 'geo-spin 28s linear infinite reverse' }} />
    </div>
  );
}
