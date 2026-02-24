import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — byNeel',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm text-muted mb-2">Derni&egrave;re mise &agrave; jour : janvier 2026</p>
      <h1 className="text-4xl font-bold tracking-tight mb-8">Politique de confidentialit&eacute;</h1>

      <div className="glass p-5 mb-8 text-sm font-medium">
        En r&eacute;sum&eacute; : CookBook AI ne collecte aucune donn&eacute;e personnelle. Tout reste sur votre t&eacute;l&eacute;phone.
      </div>

      <div className="prose prose-invert prose-p:text-muted prose-li:text-muted prose-headings:text-foreground max-w-none">
        <h2>1. Qui sommes-nous ?</h2>
        <p>byNeel est un d&eacute;veloppeur ind&eacute;pendant d&apos;applications mobiles. Contact : <a href="mailto:contact@byneel.com" className="text-brand-blue hover:underline">contact@byneel.com</a></p>

        <h2>2. Donn&eacute;es collect&eacute;es</h2>
        <p>CookBook AI <strong>ne collecte aucune donn&eacute;e personnelle</strong>. L&apos;application ne dispose d&apos;aucun serveur, d&apos;aucune base de donn&eacute;es et d&apos;aucun compte utilisateur.</p>
        <p>Les donn&eacute;es suivantes sont stock&eacute;es <strong>uniquement sur votre appareil</strong> :</p>
        <ul>
          <li>Vos recettes et leur contenu</li>
          <li>Votre planning de repas</li>
          <li>Vos pr&eacute;f&eacute;rences (th&egrave;me, portions par d&eacute;faut, etc.)</li>
          <li>Votre cl&eacute; API IA (chiffr&eacute;e dans le Keychain iOS / Keystore Android)</li>
        </ul>
        <p>Ces donn&eacute;es <strong>ne quittent jamais votre t&eacute;l&eacute;phone</strong> et ne nous sont pas accessibles.</p>

        <h2>3. Requ&ecirc;tes vers des services tiers</h2>
        <p>Lorsque vous utilisez les fonctionnalit&eacute;s IA (import de recette, Pantry AI, Sous-Chef), votre t&eacute;l&eacute;phone envoie une requ&ecirc;te directement aux serveurs du provider IA que vous avez configur&eacute; (Google Gemini, OpenAI, etc.) en utilisant <strong>votre propre cl&eacute; API</strong>.</p>
        <p>Ces &eacute;changes sont soumis &agrave; la politique de confidentialit&eacute; du provider concern&eacute; :</p>
        <ul>
          <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Google — Politique de confidentialit&eacute;</a></li>
          <li><a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">OpenAI — Politique de confidentialit&eacute;</a></li>
        </ul>

        <h2>4. Commande d&apos;impression (Lulu Direct)</h2>
        <p>Si vous utilisez la fonctionnalit&eacute; de livre de recettes imprim&eacute;, vous &ecirc;tes redirig&eacute; vers le site de Lulu Direct pour finaliser votre commande et votre paiement. Cette transaction est trait&eacute;e directement par Lulu et soumise &agrave; <a href="https://www.lulu.com/about/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">leur politique de confidentialit&eacute;</a>. Nous ne recevons ni ne stockons vos informations de paiement ou d&apos;adresse.</p>

        <h2>5. Publicit&eacute;s</h2>
        <p>La version gratuite de l&apos;application peut afficher des publicit&eacute;s via Google AdMob. Google peut collecter certaines donn&eacute;es d&apos;usage &agrave; des fins publicitaires, conform&eacute;ment &agrave; <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">sa politique de confidentialit&eacute;</a>. Les utilisateurs Premium ne voient aucune publicit&eacute;.</p>

        <h2>6. Droits RGPD</h2>
        <p>&Eacute;tant donn&eacute; que nous ne collectons aucune donn&eacute;e personnelle, il n&apos;y a rien &agrave; supprimer, modifier ou exporter de notre c&ocirc;t&eacute;. Toutes vos donn&eacute;es sont sur votre appareil — vous pouvez les supprimer en d&eacute;sinstallant l&apos;application.</p>

        <h2>7. Contact</h2>
        <p>Pour toute question : <a href="mailto:contact@byneel.com" className="text-brand-blue hover:underline">contact@byneel.com</a></p>
      </div>

      <div className="mt-12 text-center text-sm text-muted">
        <Link href="/" className="hover:text-foreground transition-colors">Accueil</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/terms" className="hover:text-foreground transition-colors">Conditions d&apos;utilisation</Link>
      </div>
    </div>
  );
}
