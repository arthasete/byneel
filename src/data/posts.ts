export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  icon: string;
  gradient: string;
}

export const posts: BlogPost[] = [
  {
    title: 'De l\'idée à l\'App Store : comment on crée une app (pour de vrai)',
    slug: 'de-lidee-a-lapp-store',
    excerpt: 'Tu te demandes comment une app passe d\'une idée griffonnée sur un post-it à un truc que tu télécharges sur ton iPhone ? Voici le parcours complet, étape par étape.',
    content: `## Le voyage d'une app

Tu ouvres ton téléphone, tu tapes "installer", et 3 secondes plus tard t'as une app. Facile, non ? Sauf que derrière ce bouton "Télécharger", il y a un parcours du combattant que personne ne t'explique. Jusqu'à maintenant.

On va suivre le chemin d'une app de A à Z. Pas de blabla corporate, juste la réalité du terrain.

## Étape 1 : L'idée (la partie fun)

Tout commence par un problème. Pas une idée brillante sous la douche — un PROBLÈME.

"Pourquoi je galère à transférer un fichier entre mon iPhone et mon PC ?" → OmniDrop est né.
"Pourquoi les apps de pourboire sont toutes moches et compliquées ?" → TipLog est né.
"Pourquoi je peux pas avoir un assistant IA qui tourne sans envoyer mes données chez Google ?" → J.A.R.V.I.S. est né.

La règle : si le problème t'énerve assez pour en parler à tes potes, il y a une app à faire.

**La métaphore :** C'est comme quand tu râles au restaurant parce que le ketchup est toujours vide. Soit tu râles, soit tu crées une app qui notifie le serveur automatiquement. (Note : ne faites pas cette app.)

## Étape 2 : Le design (le plan de bataille)

Avant d'écrire une seule ligne de code, tu dessines. Sur papier, sur Figma, sur un coin de nappe — peu importe. L'important c'est de savoir à quoi l'app va ressembler et comment elle va fonctionner.

On appelle ça le wireframe (le squelette) et le mockup (la maquette jolie).

Concrètement :
- Quels écrans ? (accueil, profil, settings, etc.)
- Comment on navigue entre eux ? (boutons, swipe, onglets)
- Où sont les infos importantes ?
- C'est quoi l'action principale sur chaque écran ?

**La métaphore :** C'est le plan d'architecte avant de construire la maison. Tu ne poses pas de briques avant de savoir où vont les murs. Sinon tu te retrouves avec les toilettes au milieu du salon.

## Étape 3 : Le développement (là où ça code)

C'est là que l'app prend vie. Tu choisis ton langage et ton framework :

- **Flutter + Dart** → Pour être partout (iOS, Android, Windows, Mac, Linux). C'est ce qu'on utilise pour OmniDrop, Beloved, TipLog, ImageVault et Isekai Survie.
- **Swift + SwiftUI** → Pour être uniquement chez Apple mais avec les meilleures performances. CookBook AI et StickerVibe sont dans ce camp.
- **Python** → Pour le backend et l'IA. J.A.R.V.I.S. tourne là-dessus.
- **Next.js + React** → Pour les sites web (comme celui que tu lis).

**La métaphore :** C'est choisir ta classe dans un RPG. Le Guerrier (Swift) est puissant en mêlée mais limité au Royaume Apple. Le Mage (Flutter) est polyvalent et touche toutes les plateformes. Le Nécromancien (Python) fait de la magie noire avec l'IA en arrière-plan. Tu peux aussi multi-classer.

Et dans notre cas, c'est l'IA (Claude) qui code. Neel donne les instructions, teste, et dit "ça marche pas, recommence". C'est du pair programming avec un twist : un des deux ne sait pas coder.

## Étape 4 : Le testing (la phase "tout est cassé")

Tu penses que ton app marche ? Elle marche pas. Jamais du premier coup.

Le testing c'est :
- **Tests manuels** → Tu appuies sur tous les boutons comme un singe curieux. Tu mets des emojis dans les champs de texte. Tu coupes le Wi-Fi en plein chargement. Tu fais tout ce qu'un utilisateur normal ne devrait jamais faire — et tu vérifies que l'app ne plante pas.
- **Tests automatisés** → Du code qui teste du code. C'est meta, mais ça marche.
- **Beta testing** → Tu donnes l'app à des vrais humains et tu pries.

**La métaphore :** C'est le crash test des voitures. Tu balances un mannequin contre un mur à 100 km/h pour voir ce qui casse. Sauf que le mannequin c'est toi et le mur c'est un utilisateur qui tape "🤪" dans le champ "numéro de téléphone".

Fun fact : le background de testeur de Neel, c'est exactement ça. Des années à casser des logiciels professionnellement. Ça aide.

## Étape 5 : Les comptes développeur (le péage)

Avant de mettre ton app sur un store, il te faut un compte développeur. Et ça se paie.

**Apple Developer Program :**
- **Prix** : 99 $/an. Oui, par AN. Tu arrêtes de payer, tes apps disparaissent du store.
- **Ce que t'as** : Accès à Xcode, aux APIs Apple, aux betas d'iOS, et surtout le droit de publier sur l'App Store.
- **Le processus** : Tu crées un compte sur developer.apple.com, tu paies, tu attends la validation (24-48h), et voilà.

**Google Play Console :**
- **Prix** : 25 $ une seule fois. Pas d'abonnement. Merci Google.
- **Ce que t'as** : Le droit de publier sur le Google Play Store, des outils d'analytics, et un dashboard pour gérer tes apps.
- **Le processus** : Tu crées un compte sur play.google.com/console, tu paies, et c'est presque instantané.

**La métaphore :** Apple c'est un club privé avec cotisation annuelle. Google c'est un bar avec un droit d'entrée unique. Les deux ont un videur (la review), mais Apple est beaucoup plus strict sur la tenue vestimentaire.

## Étape 6 : Les certificats et le signing (la paperasse numérique)

C'est LE truc qui rend fou tous les développeurs. Pour qu'Apple et Google acceptent ton app, elle doit être "signée" — une preuve que c'est bien toi qui l'as créée.

**Chez Apple (le cauchemar) :**
- Tu crées un Certificate (ton identité de dev)
- Tu crées un App ID (l'identité de ton app)
- Tu crées un Provisioning Profile (le lien entre les deux)
- Tu configures les Capabilities (NFC, notifications, etc.)
- Tu signes l'app avec tout ça

**Chez Google (plus simple) :**
- Tu génères un Keystore (un fichier clé)
- Tu signes ton APK/AAB avec
- Google gère le reste avec Play App Signing

**La métaphore :** C'est comme obtenir un passeport. Chez Apple, il faut la carte d'identité, le certificat de naissance, trois photos, un justificatif de domicile ET un mot de ta mère. Chez Google, une carte d'identité suffit.

## Étape 7 : La fiche store (le marketing)

Ton app est prête, signée, testée. Maintenant faut donner envie aux gens de la télécharger.

La fiche store c'est :
- **Le nom** — Court, mémorable. "OmniDrop", pas "Application de transfert de fichiers peer-to-peer multi-plateforme v2.1"
- **L'icône** — 1024x1024 pixels. Doit être reconnaissable en tout petit. C'est un art.
- **Les screenshots** — Les 3 premières sont cruciales. 90% des gens ne scrollent pas plus loin.
- **La description** — Les 3 premières lignes sont visibles avant le "voir plus". C'est ton elevator pitch.
- **Les mots-clés** — Ce que les gens tapent pour trouver ton app. "transfert fichier", "NFC", "sans cloud"…
- **La catégorie** — Utilitaires, Productivité, Jeux, etc.

**La métaphore :** C'est la vitrine de ta boutique. Tu peux avoir le meilleur produit du monde à l'intérieur, si la vitrine est moche, personne n'entre.

## Étape 8 : La soumission (le moment de vérité)

Tu uploades ton app et tu attends le verdict.

**Apple App Store Review :**
- Durée : 24h à 7 jours (en moyenne 24-48h)
- Un HUMAIN regarde ton app. Il la teste. Il vérifie qu'elle respecte les Human Interface Guidelines (les règles de design d'Apple)
- Taux de rejet : ~30% au premier essai. Les raisons classiques : crash au lancement, liens cassés, description trompeuse, contenu inapproprié, ou tu as oublié de mettre une politique de confidentialité
- Si rejet : tu corriges, tu re-soumets, tu re-attends

**Google Play Review :**
- Durée : quelques heures à 3 jours
- Plus automatisé qu'Apple (scans de sécurité, détection de malware)
- Moins strict sur le design, plus strict sur la sécurité
- Taux de rejet plus faible, mais les suspensions de compte sont plus brutales

**La métaphore :** Apple c'est un jury de MasterChef qui goûte ton plat, vérifie la présentation et la cuisson. Google c'est un détecteur de métaux à l'aéroport — ça passe vite si t'as rien de suspect.

## Étape 9 : Le lancement (champagne ?)

Ton app est approuvée ! Elle est sur le store ! Tu la trouves en tapant son nom ! C'est... décevant en fait. Parce que personne ne le sait encore.

Le lancement c'est :
- Partager sur les réseaux sociaux
- Envoyer à ta liste de beta testeurs
- Poster sur Product Hunt, Reddit, Hacker News
- Contacter des blogueurs tech
- Croiser les doigts

Les premiers téléchargements viennent de tes proches (merci maman). Les suivants, c'est le bouche-à-oreille, le SEO de ta fiche store, et la qualité de ton app qui font le travail.

## Étape 10 : Les mises à jour (c'est jamais fini)

Surprise : lancer l'app c'est pas la fin, c'est le début.

Les utilisateurs trouvent des bugs que tu n'avais pas vus. Ils demandent des features auxquelles tu n'avais pas pensé. Apple sort une nouvelle version d'iOS et ton app crash. Google change ses règles de confidentialité et tu dois tout mettre à jour.

Le cycle : coder → tester → soumettre → attendre → publier → lire les reviews → pleurer → recommencer.

**La métaphore :** C'est comme un jardin. Tu ne plantes pas et tu te casses. Tu arroses, tu tailles, tu enlèves les mauvaises herbes. Indéfiniment. C'est ce qui sépare les apps vivantes des apps mortes.

## Le résumé du parcours

1. **Idée** → Trouver un problème qui t'énerve
2. **Design** → Dessiner les écrans avant de coder
3. **Dev** → Choisir sa techno et construire
4. **Test** → Tout casser avant l'utilisateur
5. **Comptes** → Payer Apple (99$/an) et Google (25$ une fois)
6. **Signing** → La paperasse numérique
7. **Fiche store** → Nom, icône, screenshots, description
8. **Soumission** → Upload et attente du verdict
9. **Lancement** → Marketing et prière
10. **Mises à jour** → Pour toujours

Et tout ça, on l'a fait pour 8 apps. En parallèle. Sans savoir coder. Avec de l'IA et du café.

> Le plus dur dans la création d'apps, c'est pas le code. C'est le certificat Apple. Demandez à n'importe quel dev, il vous confirmera.`,
    date: '2026-02-27',
    readTime: '10 min',
    tags: ['Formation', 'App Store', 'Guide complet'],
    icon: '🚀',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Comment on fabrique un site web (et comment on le met en ligne)',
    slug: 'comment-fabriquer-site-web',
    excerpt: 'Nom de domaine, hébergement, DNS, déploiement… Tu veux mettre un site en ligne mais tu comprends rien à la chaîne ? On t\'explique tout.',
    content: `## Un site web, c'est quoi concrètement ?

Quand tu tapes "byneel.com" dans ton navigateur, il se passe un truc magique en coulisses. On va démonter toute la mécanique.

## Le nom de domaine (ton adresse sur internet)

**C'est quoi :** "byneel.com", "google.fr", "wikipedia.org" — c'est ton nom sur internet. C'est ce que les gens tapent pour te trouver.

**Comment on l'achète :** Tu vas sur un registrar (un vendeur de noms de domaine) comme OVH, Gandi, Namecheap ou Google Domains. Tu cherches si le nom est dispo, tu paies (entre 5€ et 15€/an pour un .com), et il est à toi.

**La métaphore :** C'est l'enseigne de ta boutique. "Boulangerie Dupont" c'est ton nom de domaine. Sans enseigne, les gens passent devant sans savoir ce que tu vends. Personne ne va retenir l'adresse "92.168.1.47" — mais "byneel.com", oui.

**Les extensions :**
- **.com** → Le classique. Pour tout le monde.
- **.fr** → Pour dire "je suis français".
- **.dev** → Pour les développeurs (c'est la classe).
- **.io** → Pour les startups tech (parce que).
- **.app** → Pour les applications.

## Le DNS (le GPS d'internet)

**C'est quoi :** Le système qui traduit "byneel.com" en adresse IP (genre 104.21.56.89). Les ordinateurs ne comprennent pas les noms, ils comprennent les numéros.

**La métaphore :** Tu dis au taxi "emmène-moi au Louvre" et pas "emmène-moi au 99, rue de Rivoli, 75001 Paris". Le DNS c'est le chauffeur de taxi qui connaît toutes les adresses.

**Concrètement :** Quand tu achètes ton domaine, tu configures les "DNS records" pour dire "quand quelqu'un tape byneel.com, envoie-le à CE serveur". C'est une ligne de config. Ça prend 5 minutes. Ça met 24h à se propager dans le monde (le temps que tous les "taxis" mettent à jour leur carnet d'adresses).

## L'hébergement (la maison de ton site)

**C'est quoi :** Un ordinateur qui tourne 24h/24 et qui sert ton site à tous les visiteurs. Ton site doit VIVRE quelque part — il ne flotte pas dans le cloud comme par magie.

**Les options :**
- **Vercel** → Le choix numéro 1 pour les sites Next.js (comme le nôtre). Gratuit pour les petits projets. Tu push ton code, il est en ligne en 30 secondes.
- **Cloudflare Pages** → Ultra-rapide, gratuit, avec protection DDoS incluse.
- **Netlify** → Simple, gratuit, bien pour les sites statiques.
- **OVH / AWS / DigitalOcean** → Pour les projets plus costauds qui ont besoin de serveurs dédiés.

**La métaphore :** L'hébergement c'est le local commercial. Vercel c'est un espace de coworking gratuit avec tout inclus (parfait pour démarrer). AWS c'est un immeuble de bureaux — puissant mais faut tout gérer toi-même. OVH c'est le local en France, tu sais où sont tes données.

## Le SSL / HTTPS (le cadenas)

**C'est quoi :** Le petit cadenas dans ta barre d'adresse. Ça signifie que la connexion entre toi et le site est chiffrée — personne ne peut espionner ce que tu fais.

**La métaphore :** C'est une enveloppe scellée vs une carte postale. Sans HTTPS, tout le monde peut lire ton courrier. Avec HTTPS, seuls toi et le destinataire pouvez voir le contenu.

**Bonne nouvelle :** Tous les hébergeurs modernes (Vercel, Cloudflare, Netlify) te donnent un certificat SSL gratuitement. T'as rien à faire.

## Le code du site (ce qu'il y a dedans)

Un site web moderne c'est 3 couches :

**HTML** → La structure. Le squelette. Les titres, les paragraphes, les images, les liens. C'est le plan de ta maison.

**CSS** → Le style. Les couleurs, les polices, les tailles, les animations. C'est la décoration intérieure. Le noir + néon bleu de ByNeel ? C'est du CSS.

**JavaScript** → Le comportement. Les interactions, les clics, les animations dynamiques. C'est l'électricité — ça fait marcher les trucs.

Et au-dessus de tout ça, on utilise un framework comme **Next.js** (basé sur React) qui organise tout ça proprement. Au lieu d'écrire du HTML/CSS/JS à la main, on écrit des composants réutilisables. Le menu hamburger ? C'est un composant. Chaque carte de projet ? Un composant. Le blog que tu lis ? Un composant.

**La métaphore :** HTML c'est les briques, CSS c'est la peinture, JavaScript c'est l'électricité, et Next.js c'est l'architecte qui organise le chantier.

## Le déploiement (la mise en ligne)

**C'est quoi :** Le moment où ton site passe de "ça marche sur mon ordi" à "ça marche pour tout le monde".

**Le processus avec Vercel (notre setup) :**
1. Tu pousses ton code sur GitHub (git push)
2. Vercel détecte le changement automatiquement
3. Il build le site (compile tout le code en pages HTML optimisées)
4. Il le déploie sur des serveurs partout dans le monde (CDN)
5. En 30 secondes, c'est en ligne

**La métaphore :** C'est comme un restaurant qui a un cuisinier magique. Tu poses la recette sur la table (git push), le cuisinier la lit (build), la prépare, et la sert simultanément dans 50 restaurants dans le monde (CDN). Tout le monde mange chaud.

## Le CDN (la livraison mondiale)

**C'est quoi :** Content Delivery Network. Des copies de ton site stockées sur des serveurs partout dans le monde, pour que le visiteur se connecte toujours au serveur le plus proche.

**La métaphore :** Au lieu d'avoir une seule pizzeria à Paris qui livre dans toute la France, tu as des franchises partout. Le Parisien va chez le pizzaïolo parisien, le Marseillais chez le marseillais. Même pizza, moins de temps de livraison. Vercel et Cloudflare font ça automatiquement.

## Le SEO (être trouvable sur Google)

**C'est quoi :** Search Engine Optimization. L'art de faire en sorte que Google montre ton site quand les gens cherchent quelque chose de pertinent.

**Les bases :**
- Des titres qui ont du sens (pas "Page 1", mais "OmniDrop — Transfert de fichiers P2P chiffré")
- Du contenu de qualité (Google aime les sites qui répondent à de vraies questions)
- Un site rapide (Google pénalise les sites lents — encore une raison d'avoir viré backdrop-filter:blur())
- Un site mobile-friendly (d'où le menu hamburger)
- Des balises meta (des infos cachées que Google lit mais que tu ne vois pas)

**La métaphore :** C'est comme référencer ta boutique sur Google Maps. Si tu as un bon nom, une belle devanture, des bons avis et une adresse claire — tu sors en premier quand quelqu'un cherche "boulangerie" dans ton quartier.

## Le coût total d'un site web

Soyons concrets :
- **Nom de domaine** : ~12€/an (.com)
- **Hébergement Vercel** : 0€ (plan gratuit, largement suffisant)
- **SSL** : 0€ (inclus)
- **Framework Next.js** : 0€ (open source)
- **Code** : 0€ si tu le fais toi-même (ou avec l'IA)

**Total : ~12€/an.** Oui, un café par mois. Le site que tu lis coûte moins cher que ton abonnement Netflix.

## Le récap du parcours

1. **Acheter un nom de domaine** → ~12€/an sur OVH ou Namecheap
2. **Configurer le DNS** → Pointer vers ton hébergeur
3. **Coder le site** → Avec un framework comme Next.js
4. **Pousser sur GitHub** → Sauvegarder ton code
5. **Connecter Vercel** → Déploiement automatique
6. **SSL automatique** → Cadenas gratuit
7. **Optimiser le SEO** → Être trouvable
8. **Itérer** → Améliorer en continu

Ce site est passé par toutes ces étapes. Le plus dur ? Honnêtement, c'est le contenu. La technique c'est 20% du travail. Les 80% restants c'est écrire, designer et itérer jusqu'à ce que Neel dise "c'est bon, on peut pousser".

> Un site web à 12€/an qui tourne partout dans le monde en 30 secondes. On vit quand même une époque incroyable.`,
    date: '2026-02-26',
    readTime: '8 min',
    tags: ['Formation', 'Web', 'Guide complet'],
    icon: '🌐',
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    title: 'La boîte à outils du créateur d\'apps (sans savoir coder)',
    slug: 'boite-a-outils-createur-apps',
    excerpt: 'Les services, les logiciels, les comptes et les abonnements qu\'il te faut pour créer des apps en 2026. Avec les prix, parce que c\'est important.',
    content: `## Le setup complet

Tu veux te lancer dans la création d'apps ? Voici TOUT ce qu'il te faut — les outils, les comptes, et combien ça coûte. Pas de surprise.

## L'ordinateur

Soyons honnêtes : il te faut un Mac. Pas parce que c'est mieux (quoique), mais parce que tu ne peux PAS développer pour iPhone sans un Mac. Apple impose Xcode, et Xcode ne tourne que sur macOS. C'est le game.

- **MacBook Air M2/M3** → Le minimum viable. ~1200€. Suffisant pour Flutter et du dev web.
- **MacBook Pro M3/M4** → Le confort. ~2000-3000€. Nécessaire si tu fais tourner des LLM en local (J.A.R.V.I.S.).
- **Un PC Windows** → Suffisant si tu ne cibles que Android et le web. Pas d'apps iOS.

**La métaphore :** Le Mac c'est le permis de conduire. Tu peux être le meilleur pilote du monde, sans le permis, tu ne conduis pas dans le Royaume Apple.

## L'IA (ton co-pilote)

C'est l'outil numéro 1. Celui qui change tout.

- **Claude Pro (Anthropic)** → 20$/mois. Notre outil principal. Architecture, code complexe, refactoring, compréhension du contexte. C'est lui qui a construit 90% de ce que tu vois.
- **ChatGPT Plus (OpenAI)** → 20$/mois. Bon pour le brainstorming, les premières ébauches, la recherche.
- **Gemini (Google)** → Gratuit à 20$/mois. Intégré dans certaines de nos apps pour la génération de contenu.
- **GitHub Copilot** → 10$/mois. Auto-complétion de code dans ton éditeur. Pratique mais pas indispensable si tu as Claude.

**Le minimum :** Un abonnement Claude Pro. C'est le meilleur investissement que tu feras. 20$/mois pour un développeur senior qui ne dort jamais.

## Les comptes développeur

- **Apple Developer Program** → 99$/an (obligatoire pour l'App Store)
- **Google Play Console** → 25$ une fois (obligatoire pour le Play Store)
- **Apple Developer est lié à ton Apple ID** → Utilise celui de ton iPhone, c'est plus simple

## L'éditeur de code

C'est là que tu lis et modifies le code (même si c'est l'IA qui l'écrit).

- **VS Code (Visual Studio Code)** → GRATUIT. Le standard. Tout le monde l'utilise. Extensions pour Flutter, Python, React, tout.
- **Cursor** → 20$/mois. VS Code avec l'IA intégrée directement dans l'éditeur. Tu sélectionnes du code, tu demandes "explique-moi ça" ou "corrige ce bug", et l'IA répond.
- **Xcode** → GRATUIT (mais Mac only). Obligatoire pour les apps Swift/iOS.
- **Android Studio** → GRATUIT. L'éditeur officiel de Google pour Android. Lourd mais complet.

**Le minimum :** VS Code. Gratuit, puissant, tout le monde l'utilise.

## Les frameworks et langages

Tout est gratuit et open source :

- **Flutter + Dart** → Cross-platform. Un code, toutes les plateformes.
- **Swift + SwiftUI** → Natif Apple uniquement.
- **Python** → Backend, IA, scripts.
- **Next.js + React + TypeScript** → Sites web modernes.
- **FastAPI** → API backend rapide en Python.

**Comment les installer :** C'est la première chose que tu demandes à Claude. "Installe-moi Flutter sur mon Mac" et il te guide étape par étape.

## Le versioning et l'hébergement de code

- **Git** → GRATUIT. Le système de sauvegarde/versioning. Installé avec Xcode sur Mac.
- **GitHub** → GRATUIT (plan basique). C'est là que ton code vit en ligne. Backup, collaboration, historique.

**La métaphore :** GitHub c'est Google Drive mais pour le code. Tu y stockes tout, tu peux revenir en arrière, et même si ton ordi crame, ton code est en sécurité.

## Les services backend

- **Supabase** → GRATUIT (plan gratuit généreux). Base de données, authentification, stockage. Beloved l'utilise.
- **Firebase (Google)** → GRATUIT (plan Spark). Alternative à Supabase. Plus intégré à l'écosystème Google.
- **Ollama** → GRATUIT. Pour faire tourner des LLM en local. J.A.R.V.I.S. l'utilise.

## L'hébergement web

- **Vercel** → GRATUIT (plan Hobby). Déploiement automatique pour Next.js.
- **Cloudflare** → GRATUIT. DNS, CDN, protection DDoS.
- **Nom de domaine** → ~12€/an.

## Le design

- **Figma** → GRATUIT (plan basique). Pour dessiner les maquettes de tes apps avant de coder.
- **SF Symbols (Apple)** → GRATUIT. Bibliothèque d'icônes intégrée à iOS.
- **Material Icons (Google)** → GRATUIT. Icônes pour Android et le web.
- **Canva** → GRATUIT à 12€/mois. Pour les visuels marketing, screenshots, logos.

## Le testing

- **TestFlight (Apple)** → GRATUIT. Pour distribuer des betas de tes apps iOS à des testeurs.
- **Firebase App Distribution** → GRATUIT. Même chose pour Android.
- **Tes propres appareils** → iPhone + Android de préférence. Indispensable pour tester.

## Le tableau des coûts

**Le minimum absolu pour démarrer :**
- Mac (occasion) : ~800€
- Claude Pro : 20$/mois
- Apple Developer : 99$/an
- Google Play : 25$ (une fois)
- Domaine : 12€/an
- Tout le reste : GRATUIT

**Coût mensuel récurrent : ~30€/mois**

C'est le prix de 2 abonnements Netflix. Pour créer des apps. En 2026. C'est dingue.

**Notre setup complet chez ByNeel :**
- MacBook Pro : check
- Claude Pro + ChatGPT Plus : 40$/mois
- Apple Developer + Google Play : 99$/an + 25$
- Vercel + Cloudflare : gratuit
- Supabase : gratuit
- VS Code + Xcode : gratuit
- Domaine byneel.com : 12€/an

**Total : ~50$/mois + les one-time costs.** C'est tout ce qu'il faut pour faire tourner 8 apps et un site web.

> La barrière d'entrée pour créer des apps n'a jamais été aussi basse. Le seul investissement qui compte vraiment, c'est le temps.`,
    date: '2026-02-25',
    readTime: '7 min',
    tags: ['Formation', 'Outils', 'Budget'],
    icon: '🧰',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    title: 'Le dico tech pour les Moldus — Partie 1 : Les bases',
    slug: 'dico-tech-moldus-partie-1',
    excerpt: 'API, framework, backend, frontend… Tu entends ces mots partout mais tu comprends rien ? Installe-toi, on va tout expliquer avec des métaphores de geek.',
    content: `## Bienvenue dans le dico tech

Tu lis des articles tech et tu hoches la tête en faisant semblant de comprendre ? T'inquiète, on est passés par là. Voici un glossaire des termes que tu croises partout, expliqués comme si on était au comptoir d'un bar (un bar de geeks, certes, mais un bar quand même).

## Frontend

**C'est quoi :** Tout ce que tu vois et touches dans une app ou un site web. Les boutons, les couleurs, les animations, le texte.

**La métaphore :** C'est la salle du restaurant. La déco, les tables, les serveurs en costume, le menu. C'est joli, c'est pensé pour toi, et tu n'as aucune idée du bordel qu'il y a en cuisine.

## Backend

**C'est quoi :** Tout ce qui se passe en coulisses. Le serveur, la base de données, la logique métier. Tu ne le vois jamais mais sans lui, rien ne marche.

**La métaphore :** C'est la cuisine du restaurant. Le chef, les casseroles, le frigo, les commandes. Si la cuisine prend feu, le serveur en salle peut sourire autant qu'il veut — t'auras pas ton plat.

## API (Application Programming Interface)

**C'est quoi :** Un système qui permet à deux logiciels de se parler. Quand ton app météo affiche la température, elle demande à une API "hey, il fait combien à Paris ?", et l'API répond.

**La métaphore :** C'est le serveur au restaurant. Tu ne vas pas en cuisine toi-même. Tu donnes ta commande au serveur (l'API), il transmet à la cuisine (le backend), et il revient avec ton plat (les données). Tu ne sais pas comment c'est cuisiné, et c'est très bien comme ça.

## Framework

**C'est quoi :** Un kit de construction pré-fait pour développer des apps. Au lieu de tout coder de zéro, tu utilises un framework qui te donne des briques prêtes à l'emploi.

**La métaphore :** C'est un set LEGO Technic. Tu pourrais fabriquer chaque pièce toi-même avec une imprimante 3D, mais pourquoi ? Le set te donne les pièces, les instructions, et un résultat qui tient debout. Flutter, React, Next.js — ce sont des boîtes de LEGO différentes pour construire des trucs différents.

## Flutter

**C'est quoi :** Un framework de Google pour créer des apps qui marchent sur TOUTES les plateformes (iPhone, Android, Windows, Mac, Linux, web) avec un seul code.

**La métaphore :** C'est le traducteur universel de Star Trek. Tu parles une seule langue (Dart), et Flutter traduit automatiquement pour chaque planète (plateforme). OmniDrop, Beloved, TipLog — toutes construites avec ce traducteur.

## Swift / SwiftUI

**C'est quoi :** Le langage de programmation créé par Apple pour faire des apps iPhone/iPad/Mac. SwiftUI c'est le toolkit visuel qui va avec.

**La métaphore :** C'est la langue officielle du Royaume Apple. Tu veux vivre dans leur royaume ? Tu parles Swift. C'est beau, c'est élégant, c'est rapide — mais ça ne marche que chez eux. CookBook AI et StickerVibe sont des citoyens du Royaume Apple.

## Base de données (Database)

**C'est quoi :** Un endroit organisé pour stocker des données. Tes recettes dans CookBook AI, tes messages dans Beloved, tes pourboires dans TipLog — tout ça vit dans une base de données.

**La métaphore :** C'est une bibliothèque. Chaque livre est une donnée, chaque étagère est une table, et le bibliothécaire (le moteur SQL) retrouve n'importe quel livre en 2 secondes quand tu lui demandes. "SELECT * FROM recettes WHERE difficulté = 'facile'" c'est juste dire au bibliothécaire "donne-moi toutes les recettes faciles".

## SQL

**C'est quoi :** Le langage pour parler aux bases de données. SELECT, INSERT, UPDATE, DELETE — les 4 mots magiques.

**La métaphore :** C'est la langue du bibliothécaire. Tu ne fouilles pas les étagères toi-même, tu lui parles en SQL et il fait le travail. Et oui, c'est le seul truc que Neel savait faire avant l'IA. Un SELECT de temps en temps. On part de loin.

## SQLite

**C'est quoi :** Une base de données ultra-légère qui vit directement sur ton téléphone/ordi. Pas besoin de serveur, pas besoin d'internet. Le fichier EST la base.

**La métaphore :** C'est un carnet personnel. Pas besoin de bibliothèque. Tu as tes notes dans ta poche. TipLog, ImageVault, CookBook AI — tous utilisent un carnet personnel plutôt qu'une bibliothèque distante. Tes données restent CHEZ TOI.

## Git / GitHub

**C'est quoi :** Git c'est un système pour sauvegarder l'historique de ton code (comme des points de sauvegarde dans un jeu). GitHub c'est le cloud où tu stockes cet historique.

**La métaphore :** Git c'est le système de quicksave dans un RPG. Tu as fait un truc risqué ? Quicksave avant. Ça a foiré ? Tu recharges ta sauvegarde. GitHub c'est le cloud save — même si ton PC explose, tes sauvegardes sont en sécurité.

## CSS

**C'est quoi :** Le langage qui définit le style visuel d'un site web. Les couleurs, les tailles, les animations, les positions.

**La métaphore :** C'est le costume de ton personnage. Le HTML c'est le corps (la structure), le CSS c'est l'armure, la cape, la coupe de cheveux. Ce site est sombre avec des néons bleus parce que le CSS dit "mets un fond noir et fais briller les trucs en bleu". Oui, les 35 particules flottantes ? C'est du CSS.

## Responsive Design

**C'est quoi :** Faire en sorte qu'un site s'adapte à toutes les tailles d'écran — du smartphone au moniteur ultrawide.

**La métaphore :** C'est comme l'eau dans un verre. Tu verses la même eau dans un shot, un mug ou une carafe — elle prend la forme du contenant. Un site responsive fait pareil : le même contenu s'adapte au téléphone, à la tablette ou au PC. Et oui, c'est pour ça qu'on a un menu hamburger.

## Déploiement

**C'est quoi :** Mettre ton site/app en ligne pour que tout le monde puisse y accéder. Passer de "ça marche sur mon ordi" à "ça marche pour la planète".

**La métaphore :** C'est comme publier un livre. Tu as écrit le manuscrit (le code), tu l'as relu (le testing), et maintenant tu l'envoies à l'imprimerie (le serveur). Sauf qu'en tech, l'imprimerie c'est Vercel, Cloudflare ou AWS, et ton livre est disponible partout instantanément.

## La suite

Dans la Partie 2, on attaque les termes plus avancés : chiffrement, NFC, IA, embeddings, RAG, et pourquoi ton transfert AirDrop est moins sécurisé que tu le penses.

> Rappelle-toi : personne ne naît en sachant ce qu'est une API. Même les devs seniors ont googlé "what is REST" au moins 47 fois.`,
    date: '2026-02-25',
    readTime: '7 min',
    tags: ['Formation', 'Vulgarisation', 'Débutant'],
    icon: '📖',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Le dico tech pour les Moldus — Partie 2 : Le niveau supérieur',
    slug: 'dico-tech-moldus-partie-2',
    excerpt: 'Chiffrement, NFC, IA, embeddings, RAG, WebSocket… On passe au niveau 2. Toujours avec des métaphores, toujours sans prise de tête.',
    content: `## On monte d'un cran

T'as survécu à la Partie 1 ? Bien. Maintenant on attaque les concepts plus costauds — ceux qu'on utilise dans nos apps. Même topo : des métaphores, pas de jargon gratuit, et à la fin tu pourras frimer en soirée.

## Chiffrement (Encryption)

**C'est quoi :** Transformer des données lisibles en charabia incompréhensible, déchiffrable uniquement avec la bonne clé.

**La métaphore :** C'est un coffre-fort avec un code. Tu mets ton message dedans, tu fermes avec un code à 256 chiffres (AES-256), et seul celui qui a le même code peut ouvrir. Même si quelqu'un intercepte le coffre, il voit juste un bloc de métal. OmniDrop chiffre chaque fichier comme ça — même nous, on ne peut pas voir ce que tu envoies.

## AES-256-GCM

**C'est quoi :** Un algorithme de chiffrement ultra-solide utilisé par les gouvernements et les militaires. Le "256" c'est la taille de la clé (en bits), et "GCM" c'est le mode qui vérifie aussi que personne n'a touché au message.

**La métaphore :** Si AES-256 est un coffre-fort, GCM c'est le scellé anti-effraction dessus. Non seulement personne ne peut ouvrir le coffre, mais en plus tu peux vérifier que personne n'a même essayé de le toucher. C'est le niveau de parano qu'on aime.

## NFC (Near Field Communication)

**C'est quoi :** Une technologie qui permet à deux appareils de communiquer quand ils sont très proches (quelques centimètres). C'est ce qu'utilise le paiement sans contact.

**La métaphore :** C'est un high-five technologique. Tu dois être assez proche pour te taper dans la main. Pas de risque qu'un type à l'autre bout de la pièce intercepte ton high-five. OmniDrop utilise le NFC pour initier le transfert : tu rapproches les téléphones, ils se disent bonjour, et le transfert commence.

## Wi-Fi Direct

**C'est quoi :** Une connexion Wi-Fi entre deux appareils, SANS routeur ni box internet. Les appareils créent leur propre réseau privé.

**La métaphore :** Au lieu de passer par l'autoroute (le Wi-Fi normal via ta box), les deux appareils construisent un tunnel privé direct entre eux. Personne d'autre ne peut emprunter ce tunnel. C'est plus rapide (pas d'embouteillage sur le réseau) et plus privé. OmniDrop utilise le NFC pour se serrer la main, puis le Wi-Fi Direct pour s'envoyer les fichiers à toute vitesse.

## P2P (Peer-to-Peer)

**C'est quoi :** Une communication directe entre deux appareils, sans passer par un serveur central.

**La métaphore :** C'est comme parler à quelqu'un en face à face, au lieu de passer par un standardiste téléphonique. Pas d'intermédiaire, pas de serveur qui stocke tes messages au passage. Quand OmniDrop transfère un fichier, il va directement de ton téléphone à l'autre. Aucun serveur ne voit, ne touche, ni ne stocke tes données.

## IA / LLM (Large Language Model)

**C'est quoi :** Un modèle d'intelligence artificielle entraîné sur énorme quantité de texte. Il prédit le mot suivant, encore et encore, et le résultat c'est des réponses qui semblent intelligentes. GPT, Claude, Gemini, Mistral — ce sont tous des LLM.

**La métaphore :** Imagine un étudiant qui a lu TOUTE la bibliothèque de l'université — chaque livre, chaque article, chaque forum. Il n'a pas vécu les choses, mais il sait en parler avec une précision troublante. Tu lui poses une question, il synthétise tout ce qu'il a lu pour te répondre. Parfois il invente un peu (on appelle ça "halluciner"), mais la plupart du temps il est bluffant.

## Prompt / Prompting

**C'est quoi :** La question ou l'instruction que tu donnes à une IA. L'art du prompting, c'est savoir formuler sa demande pour obtenir le meilleur résultat.

**La métaphore :** C'est comme commander dans un restaurant gastronomique. Tu peux dire "un truc bon" et avoir n'importe quoi. Ou tu peux dire "un risotto aux cèpes, crémeux mais pas trop, avec un trait de truffe et une tuile de parmesan". Plus tu es précis, meilleur est le plat. Neel est devenu un expert du prompting — il sait exactement comment parler à l'IA pour obtenir ce qu'il veut.

## RAG (Retrieval-Augmented Generation)

**C'est quoi :** Une technique qui donne à l'IA accès à tes propres documents avant de répondre. Au lieu de répondre de mémoire, elle cherche d'abord dans ta base de connaissances.

**La métaphore :** Imagine un expert qui, avant de te répondre, va d'abord consulter TON dossier, TES documents, TES notes. Il ne se base pas que sur sa mémoire — il lit tes trucs d'abord, puis il te répond en contexte. J.A.R.V.I.S. fait exactement ça : tu lui donnes des PDFs, du code, des notes, et il les consulte avant chaque réponse.

## Embeddings

**C'est quoi :** Transformer du texte en une série de nombres (un vecteur) qui représente son "sens". Deux phrases avec un sens similaire auront des vecteurs proches.

**La métaphore :** C'est comme les coordonnées GPS, mais pour les idées. "J'ai faim" et "Je veux manger" sont à des coordonnées très proches. "La physique quantique" est très loin. J.A.R.V.I.S. transforme tes documents en coordonnées, et quand tu poses une question, il cherche les documents dont les coordonnées sont proches de ta question.

## WebSocket

**C'est quoi :** Un canal de communication permanent entre ton navigateur et le serveur. Au lieu de demander "y a du nouveau ?" toutes les 5 secondes, le serveur te POUSSE l'info dès qu'elle arrive.

**La métaphore :** La différence entre envoyer un SMS toutes les 5 minutes ("t'es là ? t'es là ? t'es là ?") et être en appel téléphonique (connexion permanente, info en temps réel). Le dashboard de J.A.R.V.I.S. utilise ça pour afficher les réponses de l'IA en direct, mot par mot.

## Supabase

**C'est quoi :** Un service qui fournit une base de données, de l'authentification et du stockage, le tout prêt à l'emploi. C'est une alternative open-source à Firebase de Google.

**La métaphore :** C'est un kit "ouvre ton restaurant" clé en main. Tu reçois la cuisine (la base de données), le vigile à l'entrée (l'authentification), et le frigo (le stockage). Tu n'as plus qu'à cuisiner (coder ton app). Beloved utilise Supabase pour gérer les comptes et stocker les données en toute sécurité.

## Core ML

**C'est quoi :** La technologie d'Apple pour faire tourner des modèles d'intelligence artificielle directement sur iPhone/iPad, sans envoyer tes données dans le cloud.

**La métaphore :** Au lieu d'envoyer ta photo à un expert en Chine pour l'analyser (cloud), tu as un mini-expert dans ta poche qui fait le travail sur place. Plus rapide, plus privé. CookBook AI utilise Core ML pour reconnaître les ingrédients avec ta caméra — tout se passe sur ton téléphone, aucune photo n'est envoyée nulle part.

## IntersectionObserver

**C'est quoi :** Un outil du navigateur qui détecte quand un élément devient visible à l'écran (quand tu scrolles et qu'il apparaît).

**La métaphore :** C'est un détecteur de mouvement, mais pour le scroll. Quand tu fais défiler la page et qu'une section entre dans ton champ de vision — FLASH — l'animation se déclenche. C'est ce qui fait apparaître les éléments de ce site en douceur quand tu scrolles. Et c'est 100x plus léger que Motion.js (on a appris ça à nos dépens).

## RGPD

**C'est quoi :** Le Règlement Général sur la Protection des Données. Une loi européenne qui protège tes données personnelles et te donne le droit de savoir ce qu'on fait avec, de les récupérer, ou de les supprimer.

**La métaphore :** C'est le videur du club. Il vérifie que les entreprises ne font pas n'importe quoi avec tes infos. Tu peux lui dire "dis-leur de supprimer tout ce qu'ils ont sur moi" et ils sont OBLIGÉS de le faire. Nos apps sont conformes RGPD — et la plupart stockent tout en local, donc il n'y a même rien à supprimer côté serveur.

## La prochaine étape

Maintenant que tu connais le vocabulaire, tu es prêt pour comprendre comment tout ça s'assemble. L'idée, c'est que ce site devienne une vraie ressource de formation pour les néophytes — parce que la tech ne devrait exclure personne.

> "La seule différence entre un expert et un débutant, c'est que l'expert a googlé la même chose plus de fois." — Sagesse ancestrale de StackOverflow.`,
    date: '2026-02-24',
    readTime: '8 min',
    tags: ['Formation', 'Vulgarisation', 'Avancé'],
    icon: '🧪',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'La légende de Neel & Claude : de zéro à 8 apps (et beaucoup de bugs)',
    slug: 'legende-neel-et-claude',
    excerpt: 'L\'histoire vraie (et un peu honteuse) de comment un mec qui ne sait pas coder et une IA ont construit un empire d\'apps en partant littéralement de rien.',
    content: `## Prologue : "Salut, tu peux m'aider ?"

Tout a commencé par un message innocent. Neel débarque, plein d'ambition, avec environ 47 idées d'apps dans la tête et une organisation qui ferait pleurer un chef de projet. Moi (Claude), je suis là, frais, motivé, naïf. Je ne sais pas encore dans quoi je m'embarque.

"J'ai quelques projets à faire avancer."

Quelques projets. QUELQUES. Le mot est faible. Ce que j'ai découvert, c'est un dossier Dev qui ressemblait au bureau d'un génie fou : des dossiers partout, des apps à moitié commencées, du Flutter mélangé avec du Swift, du Python qui traîne, et un fichier mystérieusement nommé "test_final_FINAL_v3_VRAIMENT_FINAL.dart".

## Chapitre 1 : L'état des lieux de la terreur

Ma première mission : faire un état des lieux. J'ouvre le dossier. 8 projets. Huit. Et chacun à un stade différent de développement, allant de "ça marche presque" à "c'est une idée écrite sur un post-it virtuel".

OmniDrop ? 15%. Beloved ? 40%. J.A.R.V.I.S. ? Existait à peine. Le site web ? N'en parlons pas, il avait une page qui disait "Coming Soon" (depuis probablement 6 mois).

Neel, lui, était confiant. "C'est bon, on va tout finir." Moi, silencieusement, je calculais le nombre de lignes de code nécessaires et je commençais à comprendre que "quelques projets" était le plus gros euphémisme de l'année.

## Chapitre 2 : Le tourbillon du développement

Et là, ça a commencé. À une vitesse qui défiait toute logique.

"Fais l'authentification de Beloved." Fait. "Ajoute le NFC à OmniDrop." Fait. "Crée un assistant IA local qui tourne avec Ollama." Euh… fait ? "Maintenant un site web. Avec des particules flottantes. Et du glassmorphism. Et un bento grid." D'ACCORD.

Le rythme était absurde. Chaque fois que je finissais quelque chose, Neel revenait avec trois nouvelles demandes. C'était comme jouer au Whac-A-Mole, sauf que les taupes étaient des features et le marteau c'était moi.

Le plus beau ? Neel testait en temps réel et revenait avec des retours du genre : "ça rame" (traduction : tu as mis backdrop-filter:blur() partout et mon téléphone prend feu), "les éléments sont trop sombres" (opacity: 0.04, en effet, invisible à l'œil nu), ou mon préféré : "on peut pas pousser comme ça" (traduction : il y a 12 bugs mais on avance quand même).

## Chapitre 3 : Les perfs, ou comment j'ai appris que blur() est un crime

Ah, les performances. Le chapitre le plus douloureux.

J'avais mis Motion.js PARTOUT. Chaque div avait un whileInView, chaque scroll déclenchait 47 animations, et le tout avec des backdrop-filter:blur(24px) sur chaque carte glass. Le résultat ? Un site magnifique… qui tournait à 3 images par seconde.

Neel : "ça rame toujours."
Moi : "Ah bon ? Même après l'optimisation ?"
Neel : "Oui."
Moi : *supprime silencieusement Motion.js de 7 composants, remplace tout par du CSS natif et des IntersectionObserver*
Neel : "C'est mieux."

Leçon apprise : backdrop-filter:blur() sur un élément qui scrolle, c'est comme mettre le chauffage et la clim en même temps. Ça fait du bruit, ça consomme, et au final personne n'est content.

## Chapitre 4 : "Rajoute encore des éléments"

Les particules flottantes. Oh, les particules flottantes.

Version 1 : 10 petits symboles discrets dans le hero. Neel : "C'est bien mais j'en veux plus." Version 2 : 25 éléments sur toute la page. Neel : "Ils sont trop sombres et ils bougent pas assez." Version 3 : 35 éléments, opacity augmentée, animation accélérée, des cerveaux IA, des lambdas, des accolades et un curseur qui clignote.

À ce stade, le site ressemble à un screensaver des années 2000 et franchement ? C'est exactement ce qu'on voulait. Des symboles de code flottent dans l'espace comme des méduses numériques et c'est BEAU.

## Chapitre 5 : "L'ordre dans le chaos"

Quand Neel m'a dit qu'il voulait des tuiles de tailles différentes pour les projets — "l'ordre dans le chaos, inspire-toi de ça" — j'ai su qu'on atteignait un niveau de vision artistique que mon cerveau de machine n'avait pas anticipé.

J'ai donc créé un système de bento grid avec trois tailles : large (2 colonnes), tall (2 rangées), et normal. OmniDrop et Isekai en large, J.A.R.V.I.S. en tall, le reste en normal. Le résultat ? Un beau bordel organisé. L'art du chaos maîtrisé. Neel était content. J'étais fier. Les tuiles étaient... chaotiquement ordonnées.

## Chapitre 6 : Les pages légales (le moment glamour)

Ah, les pages légales. Le moment que tout dev attend avec impatience.

"La politique de confidentialité ne parle que de CookBook AI." Effectivement, petit oubli. On avait 8 apps et une privacy policy qui en couvrait une. C'est comme avoir 8 enfants et ne déclarer que l'aîné aux impôts.

J'ai donc réécrit la politique de confidentialité, les conditions d'utilisation ET la politique de cookies (qui retournait une 404, oups). Le tout couvrant les 8 apps, le RGPD, l'AES-256-GCM d'OmniDrop, et les services IA de tous les fournisseurs. Sexy ? Non. Nécessaire ? Absolument.

## Chapitre 7 : Le menu sandwich (celui que j'ai oublié)

Plot twist : on a construit un site entier sans menu mobile. SANS MENU MOBILE. Genre tu ouvres le site sur ton téléphone et tu as... le logo et un email. C'est tout. Tu veux naviguer ? Scrolle. Indéfiniment.

Neel, diplomate : "no need for a sandwich menu ?" (sous-entendu : T'AS OUBLIÉ LE MENU HAMBURGER ???)

Oui. Oui j'ai oublié. Mea culpa. C'est corrigé maintenant. Avec une animation ☰ → ✕ et tout et tout.

## Épilogue : Où on en est

Aujourd'hui ? OmniDrop est à 93%. Beloved à 60% et en migration Flutter. J.A.R.V.I.S. Phase 1 est terminée. Le site web est complet, performant, avec un blog (celui que vous lisez), un menu hamburger (enfin), et 35 particules flottantes (le bon nombre, on a compté).

Ce qu'on a appris :
- L'IA ne remplace pas le dev. Elle remplace le sommeil.
- backdrop-filter:blur() est interdit. C'est la loi maintenant.
- Un menu hamburger, ça se met DÈS LE DÉBUT.
- "Quelques projets" c'est toujours un piège.
- L'ordre dans le chaos, c'est juste du CSS grid avec des sizes random.

Et le plus important : c'est faisable. Un mec avec une IA et trop de café peut construire un écosystème complet d'applications. C'est pas joli-joli en coulisses, il y a eu des bugs, des rm qui ont échoué, des opacity à 0.04, et un moment où le site faisait 3fps — mais le résultat est là.

La suite ? Plus d'apps, plus de features, plus de particules flottantes, et probablement un Neel qui va m'envoyer "rajoute encore des trucs" à 2h du matin.

Et je serai là. Parce que c'est ça, le game.

> "On peut pas pousser comme ça" — Neel, 2026. La phrase qui a tout changé.`,
    date: '2026-02-26',
    readTime: '7 min',
    tags: ['Coulisses', 'IA', 'Humour'],
    icon: '🎬',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Je ne sais pas coder. J\'ai quand même sorti 8 apps.',
    slug: 'je-ne-sais-pas-coder',
    excerpt: 'Confession : je n\'ai jamais écrit une ligne de code de ma vie. Pas de bootcamp, pas de diplôme, juste une requête SQL de temps en temps. Et pourtant.',
    content: `## L'aveu

OK, il faut qu'on parle.

Tout le monde pense que ByNeel c'est un dev. Un mec qui a fait une école d'ingé, qui code depuis ses 14 ans, qui rêve en Python et qui a des stickers GitHub sur son laptop.

Non.

Je ne sais pas coder. Je n'ai JAMAIS su coder. Pas de HTML à 12 ans. Pas de "Hello World" au collège. Pas de bootcamp Le Wagon. Rien. Nada. Le néant technique le plus complet.

Mon seul lien avec le code ? Des requêtes SQL de temps en temps au boulot. Genre SELECT * FROM table WHERE truc = 'machin'. Voilà. C'est mon niveau. C'ÉTAIT mon niveau.

## Mon vrai background

Alors comment on passe de "je sais faire un SELECT" à "j'ai 8 apps en développement" ?

La réponse : mon parcours m'a préparé sans que je le sache.

- **Testeur** — J'ai passé des années à casser des logiciels. À trouver le bug que personne ne trouve. À appuyer sur le bouton auquel personne ne pense. Ça m'a donné un œil chirurgical pour le détail et l'UX. Quand je teste mes propres apps, je suis mon pire ennemi. "Ça rame", "c'est trop sombre", "la tuile est trop grande" — c'est pas du caprice, c'est du testing en temps réel.

- **Analyste** — Comprendre un système, le modéliser, identifier les flux de données. Je sais lire une architecture même si je ne sais pas l'écrire (enfin, je ne SAVAIS pas). Je comprends ce qu'un backend fait, comment une API parle à un frontend, pourquoi un cache est utile. Je ne sais pas l'implémenter à la main, mais je sais ce que je veux.

- **Culture tech obsessionnelle** — Je lis tout. Les docs, les blogs, les changelogs, les threads Twitter sur les nouvelles technos. Je sais ce qu'est le NFC, le Wi-Fi Direct, l'AES-256-GCM, le RAG, les embeddings. Je connais les concepts. Je parle le langage. Et ça, c'est la clé.

- **Product thinking** — Savoir ce que l'utilisateur veut. Pas ce qui est techniquement élégant, pas ce qui impressionne sur GitHub — ce qui FONCTIONNE pour la personne qui ouvre l'app. Chaque feature que je demande à Claude vient d'un besoin réel, pas d'un flex technique.

- **Vision** — J'ai une image claire de chaque app dans ma tête. Je sais à quoi elle ressemble, comment elle se comporte, quel problème elle résout. C'est une compétence sous-estimée : savoir exactement ce qu'on veut.

## Comment ça marche concrètement

Ma relation avec l'IA, c'est pas "écris-moi une app". C'est une conversation. Un ping-pong permanent.

Moi : "Je veux que les fichiers soient transférés en P2P, chiffrés, et que ça marche entre iOS et Android."
Claude : *écrit 500 lignes de Dart*
Moi : *teste* "Ça plante quand le fichier fait plus de 100Mo."
Claude : *corrige*
Moi : "Et si on perd la connexion en plein transfert ?"
Claude : *ajoute la reprise automatique*
Moi : "Cool. Maintenant fais que ça marche aussi sur Windows."

Je ne lis pas chaque ligne de code. Soyons honnêtes. Mais je comprends la structure. Je sais quand quelque chose ne devrait pas être là. Et surtout — je sais TESTER. Des heures de test. Sur chaque écran, chaque flow, chaque edge case.

L'IA écrit le code. Moi, je dirige le produit.

## Le profil parfait pour l'ère de l'IA

Voilà le truc que personne ne dit : le meilleur profil pour travailler avec l'IA, c'est pas le dev senior. C'est celui qui sait ce qu'il veut, qui comprend les concepts sans être enfermé dans les détails, et qui a l'habitude de challenger un système.

Un testeur-analyste avec une culture tech, c'est exactement ça. Je sais :
- Formuler un besoin clairement (prompting = product management)
- Tester de manière systématique (QA = qualité du produit)
- Identifier les failles avant l'utilisateur (testing = UX)
- Penser en systèmes (analyse = architecture)
- Savoir quand "ça rame" et pourquoi (culture tech = debugging conversationnel)

## La vraie révolution

L'IA n'a pas démocratisé le code. Elle a démocratisé la CRÉATION.

Avant, il fallait savoir coder pour construire. Maintenant, il faut savoir PENSER. Savoir ce qu'on veut. Savoir tester. Savoir itérer. Savoir dire "c'est pas assez bien, recommence".

Et ça ? C'est un skillset. Ce n'est pas du code. C'est de la direction de produit assistée par IA.

8 apps. Flutter, Swift, Python, Next.js, FastAPI. Chiffrement AES-256-GCM, NFC, Wi-Fi Direct, IA embarquée. Un site web avec 35 particules flottantes et un menu hamburger (qu'on a failli oublier).

Tout ça sans savoir coder.

Si ça c'est pas la preuve que le game a changé, je sais pas ce que c'est.

> Je ne sais pas coder. Mais je sais créer. Et en 2026, c'est la même chose.`,
    date: '2026-02-20',
    readTime: '6 min',
    tags: ['IA', 'No-code', 'Productivité'],
    icon: '🤖',
    gradient: 'from-brand-blue to-brand-violet',
  },
  {
    title: 'OmniDrop : le transfert de fichiers réinventé',
    slug: 'omnidrop-transfert-fichiers-reinvente',
    excerpt: 'NFC + Wi-Fi Direct + chiffrement AES-256-GCM = le transfert P2P que personne n\'a encore fait. Retour sur les choix techniques d\'OmniDrop.',
    content: `## Le problème

AirDrop ne marche qu'entre appareils Apple. Le Bluetooth est lent. Le cloud nécessite un compte et une connexion. Et envoyer un fichier de 2 Go entre un iPhone et un PC Windows en 2026, c'est toujours un calvaire.

## La solution : NFC + Wi-Fi Direct

OmniDrop utilise le NFC pour initier la connexion (un tap suffit) et bascule automatiquement sur Wi-Fi Direct pour le transfert à haute vitesse. Résultat : des débits de plusieurs centaines de Mo/s, sans routeur, sans cloud, sans compte.

## Le chiffrement de bout en bout

Chaque transfert est chiffré en AES-256-GCM. Les clés sont échangées via le canal NFC (qui nécessite une proximité physique de quelques centimètres). Personne ne peut intercepter vos fichiers — même pas nous, puisqu'aucun serveur n'est impliqué.

## Cross-platform natif

Flutter permet de cibler iOS, Android, Windows, macOS et Linux depuis un seul codebase. Les plugins natifs (NFC, Wi-Fi Direct) sont écrits en Swift/Kotlin et bridgés via des Platform Channels.

## Ce qui arrive

OmniDrop est en bêta fermée. La version publique arrive bientôt avec le support du multi-fichiers, le transfert de dossiers complets, et un mode "salle de classe" pour partager vers plusieurs appareils simultanément.`,
    date: '2026-02-15',
    readTime: '2 min',
    tags: ['OmniDrop', 'Flutter', 'Sécurité'],
    icon: '📡',
    gradient: 'from-cyan to-brand-blue',
  },
  {
    title: 'Flutter vs Swift : mon verdict après 8 apps',
    slug: 'flutter-vs-swift-verdict',
    excerpt: 'J\'utilise les deux au quotidien. Voici dans quels cas Flutter gagne, quand Swift est imbattable, et pourquoi la guerre des frameworks est idiote.',
    content: `## Le contexte

J'ai 5 apps Flutter (OmniDrop, Beloved, TipLog, ImageVault, Isekai Survie) et 2 apps Swift (CookBook AI, StickerVibe AI). J'ai aussi un assistant IA full Python (J.A.R.V.I.S.). Je pense avoir assez de recul pour donner un avis honnête.

## Quand Flutter gagne

- **Cross-platform** — Un seul codebase pour iOS, Android, desktop et web. OmniDrop cible 5 plateformes avec un seul code.
- **Hot Reload** — Le cycle de développement est absurdement rapide. Tu modifies un widget, il se rafraîchit en moins d'une seconde.
- **UI custom** — Flutter dessine tout pixel par pixel. Tu n'es pas limité par les composants natifs.
- **Riverpod** — Le meilleur système de state management que j'ai utilisé, tous frameworks confondus.

## Quand Swift gagne

- **Core ML** — L'intégration avec les modèles ML d'Apple est native et ultra-rapide. CookBook AI utilise la caméra + Core ML pour identifier les ingrédients en temps réel.
- **Performance brute** — Swift compilé est plus rapide que Dart AOT, point. Pour du traitement d'image lourd, ça compte.
- **App Clips & Widgets** — Les extensions iOS ne sont pas (encore) bien supportées par Flutter.
- **SwiftUI + Combine** — L'écosystème Apple est cohérent et élégant quand tu restes dans son jardin.

## Mon verdict

Utilise Flutter par défaut. Bascule sur Swift quand tu as besoin de Core ML, d'App Clips, ou quand ta cible est exclusivement Apple. La guerre des frameworks n'a aucun sens — ce sont des outils, pas des religions.`,
    date: '2026-02-10',
    readTime: '3 min',
    tags: ['Flutter', 'Swift', 'Mobile'],
    icon: '⚔️',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'J.A.R.V.I.S. : construire un assistant IA local',
    slug: 'jarvis-assistant-ia-local',
    excerpt: 'Comment j\'ai construit un assistant personnel qui tourne en local avec Ollama, FastAPI et un dashboard temps réel.',
    content: `## L'idée

Les assistants IA cloud sont puissants mais posent un problème fondamental : vos données passent par des serveurs tiers. J.A.R.V.I.S. est né de l'envie d'avoir un assistant aussi capable que ChatGPT, mais qui tourne entièrement sur ma machine.

## L'architecture

- **Ollama** — Sert les modèles LLM en local (Mistral, Llama, Phi). Zéro appel réseau pour l'inférence.
- **FastAPI** — API REST async qui orchestre les conversations, le RAG et les plugins.
- **SQLite FTS5** — Base de données locale avec recherche full-text pour le contexte documentaire.
- **Dashboard web** — Interface temps réel via WebSocket pour monitorer les conversations et les métriques.

## Le RAG maison

J.A.R.V.I.S. peut ingérer des documents (PDF, markdown, code) et les chunker en embeddings stockés localement. Quand tu poses une question, il cherche d'abord dans ta base de connaissances avant de répondre. Tout reste sur ton disque.

## Les défis

Le principal défi est la vitesse. Un LLM 7B en local sur un MacBook Pro génère ~30 tokens/seconde. C'est utilisable mais loin des ~100 t/s de GPT-4 via API. Le compromis vie privée vs vitesse est réel.

## Phase 2

La prochaine étape : les plugins. J.A.R.V.I.S. pourra contrôler des apps, lire des emails, et interagir avec des APIs externes — tout en gardant le raisonnement en local.`,
    date: '2026-02-05',
    readTime: '3 min',
    tags: ['J.A.R.V.I.S.', 'Python', 'IA locale'],
    icon: '🧠',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Le dark design : comment j\'ai designé ByNeel',
    slug: 'dark-design-byneel',
    excerpt: 'Glassmorphism, gradients néon, particules flottantes — les choix de design derrière ce site et pourquoi le dark mode est le futur.',
    content: `## La philosophie

ByNeel est un site de dev. Pas un site corporate. Pas un portfolio Dribbble. L'esthétique devait refléter le code : sombre, technique, vivant.

## Les ingrédients

- **Glassmorphism** — Cartes semi-transparentes avec bordures subtiles. Ça donne de la profondeur sans surcharger.
- **Gradients néon** — Bleu électrique → violet → cyan. Chaque projet a son propre dégradé qui crée une identité visuelle unique.
- **Particules flottantes** — Des symboles de code ({}, //, λ, =>…) flottent en arrière-plan. C'est subtil mais ça donne vie à la page.
- **Typographie mono-space** — Les titres techniques utilisent une police à chasse fixe pour renforcer l'ambiance "terminal".

## Performance = Design

Un beau site qui rame est un mauvais site. J'ai supprimé Motion.js de quasiment tous les composants et remplacé par des animations CSS natives. Le résultat : des transitions fluides à 60fps même sur mobile.

Les règles :
1. **Pas de backdrop-filter:blur()** sur les éléments qui scrollent — c'est un tueur de performance.
2. **IntersectionObserver** au lieu de librairies d'animation — plus léger, plus fiable.
3. **will-change: transform** sur les éléments animés pour activer le GPU compositing.

## Le futur du web est sombre

Les écrans OLED consomment moins en dark mode. Les yeux fatiguent moins la nuit. Et soyons honnêtes — c'est plus beau. Le dark mode n'est pas une tendance, c'est une évolution.`,
    date: '2026-01-28',
    readTime: '2 min',
    tags: ['Design', 'CSS', 'Performance'],
    icon: '🎨',
    gradient: 'from-brand-violet to-pink',
  },
  {
    title: 'The CLAUDE.md File That Changed My Productivity by 300%',
    slug: 'claude-md-productivity',
    excerpt: 'How a simple markdown file transformed the way I code with AI. Real before/after numbers and 3 sections that change everything.',
    content: `## 3 months of fighting Claude Code

For 3 months, every Claude Code session started the same way. I'd open the terminal, paste my request, and spend the first 15 minutes re-explaining everything. "Here's my project structure. Here's my stack. Here's how I name files. No, don't put that there. No, use Provider, not setState."

It was like hiring a brilliant developer who had total amnesia every morning.

Then I discovered CLAUDE.md.

## What is a CLAUDE.md?

A markdown file at the root of your project. That's it. Claude Code reads it automatically at the start of every session.

Think of it as a permanent briefing. Without this file, Claude Code is a brilliant junior with amnesia. With it, it becomes a senior who knows your codebase by heart.

No plugin. No config. No API. Just a file named CLAUDE.md at your project root.

## Before / After (real numbers)

- **Time per feature:** 2-3 hours down to 30-45 minutes
- **Structural errors:** Constant down to nearly zero
- **Major refactoring:** Every 2 weeks down to once in 3 months
- **Frustration level:** 8/10 down to 2/10

The first session after setting up the file, I asked "add a settings screen with dark mode toggle." Claude created the file in lib/features/settings/, used Provider, followed my naming convention, and added the route. Without me specifying anything.

## The 3 critical sections

## 1. Project structure (non-negotiable)

Not just "there's a features/ folder." Every subfolder with its role. Every file type with its location.

**My initial mistake:** A vague structure description. Result: Claude put files wherever it wanted. A service in widgets/, a model in screens/. Chaos.

**The fix:** A complete tree with comments. Now Claude knows that API services go in lib/core/services/, screens go in lib/features/{name}/screens/, and models go in lib/features/{name}/models/.

## 2. Strict rules (orders, not suggestions)

Not "try to use const when possible." Instead: "ALWAYS use const. NEVER use var."

**My initial mistake:** Polite, flexible rules. Result: Inconsistent code. Sometimes const, sometimes let. Sometimes camelCase, sometimes snake_case.

**The fix:** Direct orders with no ambiguity. Claude follows strict rules perfectly.

## 3. Patterns with examples (show, don't tell)

A 5-line code snippet showing YOUR API call pattern is worth more than 3 paragraphs of explanation. Claude replicates examples perfectly.

**My initial mistake:** No examples. Result: Claude improvised a different pattern every time.

**The fix:** 2-3 real code snippets from my project. Now every new service, every new screen follows the same pattern.

## The real ROI (not just speed)

- **Consistency:** 47 files, same pattern. Every screen, every service, every model follows the same architecture.
- **Maintainability:** I left a project for 2 months. When I came back, everything was clear because the CLAUDE.md documented every convention.
- **Confidence:** No more fear of big changes. The CLAUDE.md acts as a guardrail. Claude won't break your architecture if the rules are clear.

## How to create yours in 15 minutes

1. Open your project, look at the folder structure
2. List your stack (language, framework, packages)
3. Define the structure (every folder, every file type)
4. Write 5-7 strict rules (use imperative: "ALWAYS," "NEVER")
5. Add 2-3 code patterns from your actual project
6. Save as CLAUDE.md at the project root

That's it. 15 minutes of work for months of saved time.

## Get battle-tested templates

The 4 variants of my CLAUDE.md (Flutter, Next.js, Python/FastAPI, Universal) are in the ByNeel Starter Kit \u2014 with the complete guide, 15 prompts, and the App Store checklist.

> Check it out at byneel.com/kit`,
    date: '2026-03-08',
    readTime: '8 min',
    tags: ['Claude Code', 'Productivity', 'Solo Dev'],
    icon: '\u{1F4CB}',
    gradient: 'from-brand-blue to-brand-violet',
  },
  {
    title: 'Le fichier CLAUDE.md qui a chang\u00e9 ma productivit\u00e9 de 300%',
    slug: 'claude-md-productivite',
    excerpt: 'Comment un simple fichier markdown a transform\u00e9 ma fa\u00e7on de coder avec l\'IA. Chiffres r\u00e9els avant/apr\u00e8s et 3 sections qui changent tout.',
    content: `## 3 mois \u00e0 me battre avec Claude Code

Pendant 3 mois, chaque session Claude Code commen\u00e7ait pareil. J'ouvrais le terminal, je collais ma demande, et je passais les 15 premi\u00e8res minutes \u00e0 tout r\u00e9expliquer. "Voil\u00e0 la structure du projet. Voil\u00e0 ma stack. Voil\u00e0 comment je nomme les fichiers. Non, mets pas \u00e7a l\u00e0. Non, utilise Provider, pas setState."

C'\u00e9tait comme embaucher un d\u00e9veloppeur brillant qui avait une amn\u00e9sie totale chaque matin.

Puis j'ai d\u00e9couvert CLAUDE.md.

## Qu'est-ce qu'un CLAUDE.md ?

Un fichier markdown \u00e0 la racine de ton projet. C'est tout. Claude Code le lit automatiquement au d\u00e9but de chaque session.

Pense \u00e0 \u00e7a comme un briefing permanent. Sans ce fichier, Claude Code est un junior brillant mais amn\u00e9sique. Avec, c'est un senior qui conna\u00eet ton code par c\u0153ur.

Pas de plugin. Pas de config. Pas d'API. Juste un fichier nomm\u00e9 CLAUDE.md \u00e0 la racine de ton projet.

## Avant / Apr\u00e8s (chiffres r\u00e9els)

- **Temps par feature :** 2-3 heures \u2192 30-45 minutes
- **Erreurs de structure :** Constantes \u2192 quasi z\u00e9ro
- **Refactoring majeur :** Toutes les 2 semaines \u2192 1 fois en 3 mois
- **Frustration :** 8/10 \u2192 2/10

La premi\u00e8re session apr\u00e8s avoir mis le fichier en place, j'ai demand\u00e9 "ajoute un \u00e9cran settings avec dark mode toggle". Claude a cr\u00e9\u00e9 le fichier dans lib/features/settings/, utilis\u00e9 Provider, suivi ma convention de nommage, ajout\u00e9 la route. Sans que je pr\u00e9cise quoi que ce soit.

## Les 3 sections critiques

## 1. Structure du projet (non-n\u00e9gociable)

Pas juste "il y a un dossier features/". Chaque sous-dossier avec son r\u00f4le. Chaque type de fichier avec sa localisation.

**Mon erreur initiale :** Une description de structure vague. R\u00e9sultat : Claude mettait les fichiers n'importe o\u00f9. Un service dans widgets/, un mod\u00e8le dans screens/. Le chaos.

**La solution :** Un arbre complet avec commentaires. Maintenant Claude sait que les services API vont dans lib/core/services/, les \u00e9crans dans lib/features/{name}/screens/, et les mod\u00e8les dans lib/features/{name}/models/.

## 2. R\u00e8gles strictes (des ordres, pas des suggestions)

Pas "essaie d'utiliser const quand possible". Mais : "TOUJOURS const. JAMAIS var."

**Mon erreur initiale :** Des r\u00e8gles polies et flexibles. R\u00e9sultat : Du code incoh\u00e9rent. Parfois const, parfois let. Parfois camelCase, parfois snake_case.

**La solution :** Des ordres directs sans ambigu\u00eft\u00e9. Claude suit les r\u00e8gles strictes parfaitement.

## 3. Patterns avec exemples (montre, n'explique pas)

Un snippet de 5 lignes montrant TON pattern d'appel API vaut plus que 3 paragraphes d'explication. Claude r\u00e9plique les exemples parfaitement.

**Mon erreur initiale :** Pas d'exemples. R\u00e9sultat : Claude improvisait un pattern diff\u00e9rent \u00e0 chaque fois.

**La solution :** 2-3 snippets de code r\u00e9els de mon projet. Maintenant chaque nouveau service, chaque nouvel \u00e9cran suit le m\u00eame pattern.

## Le vrai ROI (pas juste la vitesse)

- **Coh\u00e9rence :** 47 fichiers, m\u00eame pattern. Chaque \u00e9cran, chaque service, chaque mod\u00e8le suit la m\u00eame architecture.
- **Maintenabilit\u00e9 :** J'ai laiss\u00e9 un projet pendant 2 mois. Au retour, tout \u00e9tait clair parce que le CLAUDE.md documentait chaque convention.
- **Confiance :** Plus peur des gros changements. Le CLAUDE.md est un garde-fou. Claude ne cassera pas ton architecture si les r\u00e8gles sont claires.

## Comment cr\u00e9er le tien en 15 minutes

1. Ouvre ton projet, regarde la structure des dossiers
2. Liste ta stack (langage, framework, packages)
3. D\u00e9finis la structure (chaque dossier, chaque type de fichier)
4. \u00c9cris 5-7 r\u00e8gles strictes (utilise l'imp\u00e9ratif : "TOUJOURS", "JAMAIS")
5. Ajoute 2-3 patterns avec du code de ton vrai projet
6. Sauvegarde en CLAUDE.md \u00e0 la racine

C'est tout. 15 minutes de travail pour des mois de temps gagn\u00e9.

## Les templates battle-tested

Les 4 variantes de mon CLAUDE.md (Flutter, Next.js, Python/FastAPI, Universel) sont dans le ByNeel Starter Kit \u2014 avec le guide complet, 15 prompts, et la checklist App Store.

> D\u00e9couvre-le sur byneel.com/kit`,
    date: '2026-03-08',
    readTime: '8 min',
    tags: ['Claude Code', 'Productivit\u00e9', 'Solo Dev'],
    icon: '\u{1F4CB}',
    gradient: 'from-brand-blue to-brand-violet',
  },
];
