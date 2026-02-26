import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de cookies — ByNeel',
};

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm text-muted mb-2">Derni&egrave;re mise &agrave; jour : f&eacute;vrier 2026</p>
      <h1 className="text-4xl font-bold tracking-tight mb-8">Politique de cookies</h1>

      <div className="glass p-5 mb-8 text-sm font-medium">
        En r&eacute;sum&eacute; : le site byneel.com utilise un minimum de cookies, uniquement pour le fonctionnement technique. Aucun cookie publicitaire ni de tracking.
      </div>

      <div className="prose prose-invert prose-p:text-muted prose-li:text-muted prose-headings:text-foreground max-w-none">
        <h2>1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
        <p>Un cookie est un petit fichier texte stock&eacute; sur votre appareil lorsque vous visitez un site web. Il permet au site de se souvenir de certaines informations entre vos visites.</p>

        <h2>2. Cookies utilis&eacute;s sur byneel.com</h2>
        <p>Le site byneel.com est un site statique h&eacute;berg&eacute; sur Cloudflare Pages. Il utilise uniquement les cookies suivants :</p>
        <ul>
          <li><strong>Cookies techniques Cloudflare</strong> : utilis&eacute;s pour la s&eacute;curit&eacute; (protection DDoS, bot management) et la performance (CDN). Ces cookies sont n&eacute;cessaires au bon fonctionnement du site</li>
          <li><strong>Pr&eacute;f&eacute;rence de th&egrave;me</strong> : si applicable, un cookie local pour retenir votre pr&eacute;f&eacute;rence de mode sombre/clair</li>
        </ul>

        <h2>3. Cookies que nous n&apos;utilisons PAS</h2>
        <p>Le site byneel.com <strong>n&apos;utilise aucun</strong> :</p>
        <ul>
          <li>Cookie publicitaire ou de remarketing</li>
          <li>Cookie de tracking ou d&apos;analytics (pas de Google Analytics, pas de Facebook Pixel)</li>
          <li>Cookie de r&eacute;seau social</li>
          <li>Cookie de profilage</li>
        </ul>

        <h2>4. Cookies dans nos applications mobiles</h2>
        <p>Nos applications mobiles (OmniDrop, Beloved, CookBook AI, TipLog, StickerVibe AI) n&apos;utilisent pas de cookies au sens web du terme. Les donn&eacute;es sont stock&eacute;es localement via les m&eacute;canismes natifs de chaque plateforme (SharedPreferences, UserDefaults, SQLite).</p>
        <p>Les applications en version gratuite utilisant Google AdMob peuvent cependant &ecirc;tre soumises &agrave; la <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">politique de cookies de Google</a>.</p>

        <h2>5. Comment g&eacute;rer les cookies ?</h2>
        <p>Vous pouvez configurer votre navigateur pour refuser ou supprimer les cookies. Consultez l&apos;aide de votre navigateur :</p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Chrome</a></li>
          <li><a href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Firefox</a></li>
          <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Safari</a></li>
          <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Edge</a></li>
        </ul>
        <p>Notez que la d&eacute;sactivation des cookies techniques Cloudflare pourrait affecter le fonctionnement du site.</p>

        <h2>6. Contact</h2>
        <p>Pour toute question : <a href="mailto:contact@byneel.com" className="text-brand-blue hover:underline">contact@byneel.com</a></p>
      </div>

      <div className="mt-12 text-center text-sm text-muted">
        <Link href="/" className="hover:text-foreground transition-colors">Accueil</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/privacy" className="hover:text-foreground transition-colors">Politique de confidentialit&eacute;</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/terms" className="hover:text-foreground transition-colors">Conditions d&apos;utilisation</Link>
      </div>
    </div>
  );
}
