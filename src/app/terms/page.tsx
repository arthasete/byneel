import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Conditions d'utilisation — byNeel",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm text-muted mb-2">Derni&egrave;re mise &agrave; jour : janvier 2026</p>
      <h1 className="text-4xl font-bold tracking-tight mb-8">Conditions d&apos;utilisation</h1>

      <div className="glass p-5 mb-8 text-sm font-medium">
        En utilisant CookBook AI, vous acceptez ces conditions. Elles sont courtes et &eacute;crites en fran&ccedil;ais clair.
      </div>

      <div className="prose prose-invert prose-p:text-muted prose-li:text-muted prose-headings:text-foreground max-w-none">
        <h2>1. L&apos;application</h2>
        <p>CookBook AI est une application mobile d&eacute;velopp&eacute;e par byNeel permettant de g&eacute;rer des recettes de cuisine, planifier des repas et cr&eacute;er des livres de recettes personnalis&eacute;s.</p>

        <h2>2. Utilisation de l&apos;IA</h2>
        <p>L&apos;application utilise des services d&apos;intelligence artificielle tiers (Google Gemini, OpenAI, etc.) via votre propre cl&eacute; API. Vous &ecirc;tes responsable de l&apos;obtention et de la s&eacute;curisation de cette cl&eacute;. byNeel n&apos;a acc&egrave;s ni &agrave; votre cl&eacute; ni aux contenus que vous soumettez &agrave; ces services.</p>

        <h2>3. Contenu des recettes</h2>
        <p>Vous &ecirc;tes seul responsable du contenu que vous importez ou cr&eacute;ez dans l&apos;application. En particulier :</p>
        <ul>
          <li>Vous devez respecter les droits d&apos;auteur des sources dont vous importez des recettes</li>
          <li>L&apos;import de recettes est autoris&eacute; pour un usage personnel uniquement</li>
          <li>byNeel n&apos;est pas responsable des contenus tiers import&eacute;s</li>
        </ul>

        <h2>4. Livre de recettes imprim&eacute;</h2>
        <p>La fonctionnalit&eacute; d&apos;impression de livre est fournie en partenariat avec Lulu Direct. En commandant un livre :</p>
        <ul>
          <li>Vous certifiez &ecirc;tre l&apos;auteur des recettes ou avoir le droit de les reproduire &agrave; titre personnel</li>
          <li>Le livre est destin&eacute; &agrave; un usage personnel et familial uniquement</li>
          <li>La revente ou redistribution commerciale du livre est interdite</li>
          <li>Les sources des recettes import&eacute;es sont automatiquement mentionn&eacute;es dans le PDF</li>
        </ul>

        <h2>5. Abonnement Premium</h2>
        <p>CookBook AI propose un abonnement Premium payant. L&apos;abonnement est g&eacute;r&eacute; par Apple (App Store) ou Google (Play Store) selon votre appareil. Les conditions de remboursement sont celles d&apos;Apple et Google. byNeel ne g&egrave;re pas directement les paiements.</p>

        <h2>6. Disponibilit&eacute;</h2>
        <p>L&apos;application est fournie &quot;telle quelle&quot;. byNeel s&apos;efforce d&apos;assurer son bon fonctionnement mais ne garantit pas une disponibilit&eacute; ininterrompue. Les fonctionnalit&eacute;s IA d&eacute;pendent de la disponibilit&eacute; des services tiers.</p>

        <h2>7. Limitation de responsabilit&eacute;</h2>
        <p>byNeel ne peut &ecirc;tre tenu responsable des dommages directs ou indirects li&eacute;s &agrave; l&apos;utilisation de l&apos;application, notamment en cas d&apos;erreur dans une recette g&eacute;n&eacute;r&eacute;e par l&apos;IA.</p>

        <h2>8. Modifications</h2>
        <p>Ces conditions peuvent &ecirc;tre mises &agrave; jour. La date de derni&egrave;re modification est indiqu&eacute;e en haut de cette page. L&apos;utilisation continue de l&apos;application vaut acceptation des nouvelles conditions.</p>

        <h2>9. Contact</h2>
        <p>Pour toute question : <a href="mailto:contact@byneel.com" className="text-brand-blue hover:underline">contact@byneel.com</a></p>
      </div>

      <div className="mt-12 text-center text-sm text-muted">
        <Link href="/" className="hover:text-foreground transition-colors">Accueil</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/privacy" className="hover:text-foreground transition-colors">Politique de confidentialit&eacute;</Link>
      </div>
    </div>
  );
}
