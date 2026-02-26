import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Conditions d'utilisation — ByNeel",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm text-muted mb-2">Derni&egrave;re mise &agrave; jour : f&eacute;vrier 2026</p>
      <h1 className="text-4xl font-bold tracking-tight mb-8">Conditions d&apos;utilisation</h1>

      <div className="glass p-5 mb-8 text-sm font-medium">
        En utilisant les applications et services ByNeel, vous acceptez ces conditions. Elles sont courtes et &eacute;crites en fran&ccedil;ais clair.
      </div>

      <div className="prose prose-invert prose-p:text-muted prose-li:text-muted prose-headings:text-foreground max-w-none">
        <h2>1. Les applications</h2>
        <p>ByNeel d&eacute;veloppe un ensemble d&apos;applications mobiles, d&apos;outils IA et de projets open source, incluant notamment : OmniDrop (transfert de fichiers P2P), Beloved (compagnon IA), CookBook AI (gestion de recettes), TipLog (notes de frais et pourboires), ImageVault (catalogage d&apos;images IA), Project J.A.R.V.I.S. (assistant vocal IA), Isekai Survie (hub de connaissances offline) et StickerVibe AI (g&eacute;n&eacute;ration de stickers).</p>

        <h2>2. Utilisation de l&apos;intelligence artificielle</h2>
        <p>Plusieurs applications utilisent des services d&apos;IA, qu&apos;ils soient locaux (Ollama, Whisper) ou cloud (Claude AI, Google Gemini, OpenAI). Concernant l&apos;IA :</p>
        <ul>
          <li>Les contenus g&eacute;n&eacute;r&eacute;s par IA sont fournis &agrave; titre indicatif et peuvent contenir des erreurs</li>
          <li>Quand une cl&eacute; API personnelle est requise, vous &ecirc;tes responsable de son obtention et de sa s&eacute;curisation</li>
          <li>ByNeel n&apos;a acc&egrave;s ni &agrave; vos cl&eacute;s API ni aux contenus que vous soumettez aux services IA tiers</li>
          <li>Les fonctionnalit&eacute;s IA d&eacute;pendent de la disponibilit&eacute; des services tiers concern&eacute;s</li>
        </ul>

        <h2>3. Contenu utilisateur</h2>
        <p>Vous &ecirc;tes seul responsable du contenu que vous cr&eacute;ez, importez ou partagez via nos applications :</p>
        <ul>
          <li>Vous devez respecter les droits d&apos;auteur des sources dont vous importez du contenu</li>
          <li>L&apos;import de contenu tiers est autoris&eacute; pour un usage personnel uniquement</li>
          <li>ByNeel n&apos;est pas responsable des contenus tiers import&eacute;s ou g&eacute;n&eacute;r&eacute;s par IA</li>
        </ul>

        <h2>4. Transfert de fichiers (OmniDrop)</h2>
        <p>En utilisant OmniDrop, vous acceptez que :</p>
        <ul>
          <li>Vous ne transf&eacute;rerez pas de contenu ill&eacute;gal ou portant atteinte aux droits d&apos;autrui</li>
          <li>Les transferts se font en P2P — ByNeel ne peut ni voir ni contr&ocirc;ler les fichiers transf&eacute;r&eacute;s</li>
          <li>Vous &ecirc;tes responsable du contenu que vous envoyez et recevez</li>
        </ul>

        <h2>5. Compagnon IA (Beloved)</h2>
        <p>Beloved est une application de divertissement. Les personnages IA sont fictifs et ne remplacent en aucun cas un accompagnement professionnel (psychologue, m&eacute;decin, etc.). Les conversations sont g&eacute;n&eacute;r&eacute;es par IA et ne constituent pas des conseils.</p>

        <h2>6. Abonnements Premium</h2>
        <p>Certaines applications proposent des abonnements Premium payants. Les abonnements sont g&eacute;r&eacute;s par Apple (App Store) ou Google (Play Store) selon votre appareil. Les conditions de remboursement sont celles d&apos;Apple et Google. ByNeel ne g&egrave;re pas directement les paiements.</p>

        <h2>7. Disponibilit&eacute;</h2>
        <p>Les applications sont fournies &quot;telles quelles&quot;. ByNeel s&apos;efforce d&apos;assurer leur bon fonctionnement mais ne garantit pas une disponibilit&eacute; ininterrompue. Les applications fonctionnant principalement en local (OmniDrop, TipLog, CookBook AI, ImageVault, J.A.R.V.I.S., Isekai Survie) restent utilisables sans connexion internet.</p>

        <h2>8. Limitation de responsabilit&eacute;</h2>
        <p>ByNeel ne peut &ecirc;tre tenu responsable des dommages directs ou indirects li&eacute;s &agrave; l&apos;utilisation des applications, notamment :</p>
        <ul>
          <li>Erreurs dans les contenus g&eacute;n&eacute;r&eacute;s par IA (recettes, conseils, transcriptions)</li>
          <li>Perte de donn&eacute;es locales li&eacute;e &agrave; la d&eacute;sinstallation ou un dysfonctionnement de l&apos;appareil</li>
          <li>Dysfonctionnement des services IA tiers</li>
        </ul>

        <h2>9. Propri&eacute;t&eacute; intellectuelle</h2>
        <p>Les applications, leur code source (sauf projets open source), leur design et leur contenu sont la propri&eacute;t&eacute; de ByNeel. Les projets open source sont distribu&eacute;s sous leurs licences respectives.</p>

        <h2>10. Modifications</h2>
        <p>Ces conditions peuvent &ecirc;tre mises &agrave; jour. La date de derni&egrave;re modification est indiqu&eacute;e en haut de cette page. L&apos;utilisation continue des applications vaut acceptation des nouvelles conditions.</p>

        <h2>11. Contact</h2>
        <p>Pour toute question : <a href="mailto:contact@byneel.com" className="text-brand-blue hover:underline">contact@byneel.com</a></p>
      </div>

      <div className="mt-12 text-center text-sm text-muted">
        <Link href="/" className="hover:text-foreground transition-colors">Accueil</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/privacy" className="hover:text-foreground transition-colors">Politique de confidentialit&eacute;</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/cookies" className="hover:text-foreground transition-colors">Politique de cookies</Link>
      </div>
    </div>
  );
}
