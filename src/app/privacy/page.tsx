import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — ByNeel',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm text-muted mb-2">Derni&egrave;re mise &agrave; jour : f&eacute;vrier 2026</p>
      <h1 className="text-4xl font-bold tracking-tight mb-8">Politique de confidentialit&eacute;</h1>

      <div className="glass p-5 mb-8 text-sm font-medium">
        En r&eacute;sum&eacute; : les applications ByNeel privil&eacute;gient le stockage local. Vos donn&eacute;es restent sur votre appareil autant que possible.
      </div>

      <div className="prose prose-invert prose-p:text-muted prose-li:text-muted prose-headings:text-foreground max-w-none">
        <h2>1. Qui sommes-nous ?</h2>
        <p>ByNeel est un d&eacute;veloppeur ind&eacute;pendant d&apos;applications mobiles, d&apos;outils IA et de projets open source. Contact : <a href="mailto:contact@byneel.com" className="text-brand-blue hover:underline">contact@byneel.com</a></p>

        <h2>2. Applications concern&eacute;es</h2>
        <p>Cette politique couvre l&apos;ensemble des applications et services ByNeel, notamment : OmniDrop, Beloved, CookBook AI, TipLog, ImageVault, Project J.A.R.V.I.S., Isekai Survie, StickerVibe AI, ainsi que le site web byneel.com.</p>

        <h2>3. Donn&eacute;es stock&eacute;es localement</h2>
        <p>La majorit&eacute; de nos applications stockent vos donn&eacute;es <strong>uniquement sur votre appareil</strong>. Cela inclut :</p>
        <ul>
          <li><strong>CookBook AI</strong> : recettes, planning de repas, pr&eacute;f&eacute;rences, cl&eacute; API (chiffr&eacute;e dans le Keychain/Keystore)</li>
          <li><strong>TipLog</strong> : historique des d&eacute;penses, notes de frais, pr&eacute;f&eacute;rences</li>
          <li><strong>OmniDrop</strong> : historique des transferts, param&egrave;tres. Aucun fichier ne transite par un serveur — tout est en P2P</li>
          <li><strong>ImageVault</strong> : m&eacute;tadonn&eacute;es d&apos;images, classifications IA. Tout reste sur votre machine locale</li>
          <li><strong>J.A.R.V.I.S.</strong> : historique vocal, pr&eacute;f&eacute;rences. Les mod&egrave;les IA tournent en local sur votre GPU</li>
          <li><strong>Isekai Survie</strong> : 100% offline, aucune connexion internet requise ni utilis&eacute;e</li>
        </ul>

        <h2>4. Donn&eacute;es n&eacute;cessitant un serveur</h2>
        <p>Certaines applications utilisent des services en ligne pour fonctionner :</p>
        <ul>
          <li><strong>Beloved</strong> : utilise Supabase pour la persistance des conversations et l&apos;authentification. Vos messages sont stock&eacute;s de mani&egrave;re s&eacute;curis&eacute;e et ne sont jamais partag&eacute;s avec des tiers</li>
          <li><strong>StickerVibe AI</strong> : les prompts de g&eacute;n&eacute;ration sont envoy&eacute;s au service IA pour cr&eacute;er les stickers</li>
        </ul>

        <h2>5. Services tiers d&apos;intelligence artificielle</h2>
        <p>Certaines applications utilisent des services IA tiers (Claude AI, Google Gemini, OpenAI, Ollama en local). Lorsque vous utilisez ces fonctionnalit&eacute;s :</p>
        <ul>
          <li>Les requ&ecirc;tes sont envoy&eacute;es directement depuis votre appareil aux serveurs du fournisseur IA</li>
          <li>Quand une cl&eacute; API personnelle est requise (CookBook AI), vous &ecirc;tes responsable de son obtention et de sa s&eacute;curisation</li>
          <li>Pour les applications utilisant l&apos;IA locale (ImageVault, J.A.R.V.I.S.), aucune donn&eacute;e ne quitte votre machine</li>
        </ul>
        <p>Politiques de confidentialit&eacute; des fournisseurs :</p>
        <ul>
          <li><a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Anthropic (Claude AI)</a></li>
          <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Google (Gemini)</a></li>
          <li><a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">OpenAI</a></li>
          <li><a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Supabase</a></li>
        </ul>

        <h2>6. Publicit&eacute;s</h2>
        <p>Certaines applications en version gratuite peuvent afficher des publicit&eacute;s via Google AdMob. Google peut collecter certaines donn&eacute;es d&apos;usage &agrave; des fins publicitaires, conform&eacute;ment &agrave; <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">sa politique de confidentialit&eacute;</a>. Les utilisateurs Premium ne voient aucune publicit&eacute;.</p>

        <h2>7. Transfert de fichiers (OmniDrop)</h2>
        <p>OmniDrop transf&egrave;re les fichiers directement entre appareils via NFC et Wi-Fi Direct. Aucun fichier ne transite par nos serveurs ou par le cloud. Les transferts sont chiffr&eacute;s de bout en bout en AES-256-GCM.</p>

        <h2>8. Droits RGPD</h2>
        <p>Conform&eacute;ment au R&egrave;glement G&eacute;n&eacute;ral sur la Protection des Donn&eacute;es, vous disposez d&apos;un droit d&apos;acc&egrave;s, de rectification et de suppression de vos donn&eacute;es. Pour les applications purement locales, toutes vos donn&eacute;es sont sur votre appareil — vous pouvez les supprimer en d&eacute;sinstallant l&apos;application. Pour Beloved, contactez-nous pour demander la suppression de votre compte et de vos donn&eacute;es.</p>

        <h2>9. S&eacute;curit&eacute;</h2>
        <p>Nous prenons la s&eacute;curit&eacute; au s&eacute;rieux. Les cl&eacute;s API sont chiffr&eacute;es via le Keychain iOS / Keystore Android, les transferts OmniDrop utilisent un chiffrement AES-256-GCM, et les communications avec les serveurs se font exclusivement en HTTPS.</p>

        <h2>10. Contact</h2>
        <p>Pour toute question relative &agrave; la protection de vos donn&eacute;es : <a href="mailto:contact@byneel.com" className="text-brand-blue hover:underline">contact@byneel.com</a></p>
      </div>

      <div className="mt-12 text-center text-sm text-muted">
        <Link href="/" className="hover:text-foreground transition-colors">Accueil</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/terms" className="hover:text-foreground transition-colors">Conditions d&apos;utilisation</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/cookies" className="hover:text-foreground transition-colors">Politique de cookies</Link>
      </div>
    </div>
  );
}
