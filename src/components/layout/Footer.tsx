import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 md:px-12 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <span>&copy; 2026 byNeel &mdash; Tous droits r&eacute;serv&eacute;s</span>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Politique de confidentialit&eacute;
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Conditions d&apos;utilisation
          </Link>
        </div>
      </div>
    </footer>
  );
}
