import { BlogPost } from './posts';

export const postsFr: BlogPost[] = [
  {
    title: 'Construire CookBook AI : les 5 murs que personne ne t\'annonce',
    slug: 'construire-cookbook-ai-5-murs',
    excerpt: 'Une app de recettes avec IA, ça a l\'air simple. Colle un lien, récupère la recette. Mais derrière cette simplicité se cachent des mois de galères inattendues.',
    content: `## Tout a commencé par une idée simple

Tout le monde cuisine. Tout le monde trouve des recettes sur internet. Et tout le monde a le même problème : tu trouves une recette incroyable sur Instagram, YouTube, ou un blog random, et ensuite ? Tu fais une capture d'écran. Tu mets en favori. Tu oublies. Trois semaines plus tard t'es debout dans la cuisine en train de scroller 400 screenshots pour retrouver cette foutue recette de pâtes que ton pote t'avait envoyée.

CookBook AI devait régler ça. Colle un lien, récupère une recette propre. Terminé.

Sauf que "terminé" c'était à peu près 5% du parcours.

## Mur #1 : Internet ne veut pas te donner ses recettes

Y'a un truc que personne te dit sur les sites de recettes. Ils sont construits pour te garder *sur le site*. Des pubs partout. L'histoire de la vie de l'auteur avant la recette. Des pop-ups qui te demandent ton email. Et la vraie recette ? Planquée quelque part dans un bazar de HTML qui est différent sur chaque putain de site.

J'ai cru que j'allais juste scraper la page et extraire la recette. Non.

Certains sites utilisent des données structurées — un format standard qui dit "hey, voici le titre, voici les ingrédients, voici les étapes." C'est le rêve. Quand ça marche, c'est magnifique. T'as une recette parfaite en quelques millisecondes.

Mais la plupart des sites ne l'utilisent pas. Ou ils l'utilisent mal. Ou ils utilisent une version à moitié cassée qui met toute la bio de l'auteur dans le champ "description" et les ingrédients nulle part.

Du coup j'ai dû construire un système en cascade. Essayer la méthode propre d'abord. Si ça rate, essayer une autre approche. Si ça rate aussi, essayer une troisième. Trois stratégies, chacune rattrapant ce que la précédente a loupé. Ça a pris beaucoup plus de temps que prévu, et je trouve encore des cas limites des mois après.

**La métaphore :** C'est comme essayer de lire un livre, mais chaque librairie emballe ses bouquins différemment. Certains dans du plastique, d'autres dans un coffre fermé à clé, d'autres dans une langue étrangère. T'as besoin de trois outils différents juste pour arriver à la page un.

## Mur #2 : YouTube ne te donne pas de recettes

YouTube c'est là où vit la moitié du contenu cuisine aujourd'hui. TikTok et Instagram aussi, mais YouTube est le roi. Donc forcément, CookBook AI devait supporter les liens YouTube.

Le problème ? Une vidéo YouTube c'est une *vidéo*. C'est pas du texte. Y'a pas de données structurées qui disent "2 tasses de farine, préchauffer le four à 180°C." La recette vit à l'intérieur de quelqu'un qui parle et qui cuisine pendant 12 minutes.

J'ai dû trouver un moyen de faire en sorte que l'IA *comprenne* réellement le contenu vidéo et en extraie une recette structurée. Pas juste la description — la vraie vidéo. Parce que la plupart des cuisiniers YouTube mettent "RECETTE EN DESCRIPTION" et ensuite écrivent trois lignes qui ne contiennent pas la recette complète.

C'était un de ces problèmes où chaque solution crée deux nouveaux problèmes. Le texte de description est pas fiable. La vidéo elle-même doit être "regardée" par l'IA. Et si l'IA se trompe sur un ingrédient, toute la recette est fausse. Personne veut ajouter "1 tasse de sel" au lieu de "1 cuillère à café de sel" parce que l'IA a déconné.

Je vais pas rentrer dans les détails de comment j'ai résolu ça, mais disons que ça implique plusieurs stratégies de secours et beaucoup de tests avec des types de vidéos cuisine très différents. Des vidéos rapides style TikTok, des émissions de cuisine traditionnelles, des vidéos dans différentes langues. Chacune casse les choses d'une façon nouvelle et créative.

## Mur #3 : Les fonctions "intelligentes" doivent paraître humaines

Une fois que l'import de recettes marchait, j'ai construit le Chef IA. L'idée : discuter avec une IA qui connaît la cuisine. Lui demander des idées pour le dîner. Lui dire ce qu'il y a dans ton frigo et elle te propose des recettes. Besoin d'un substitut pour un ingrédient ? Demande au chef.

La partie techno était — honnêtement — la partie facile. Faire qu'une IA génère des suggestions de recettes c'est simple. Faire en sorte que ça *donne l'impression* de parler à un vrai chef ? C'est là que ça devient compliqué.

La première version était trop robotique. "En me basant sur vos ingrédients disponibles, je recommande de préparer un sauté de poulet." Personne parle comme ça. Un vrai chef dirait plutôt "Oh t'as du poulet et des poivrons ? Laisse-moi te montrer ce sauté rapide qui prend 15 minutes — tu vas adorer."

J'ai passé des semaines à peaufiner la personnalité. Et puis j'ai rencontré le problème des quotas : tu peux pas laisser les gens discuter avec l'IA gratuitement toute la journée. Ça coûte de l'argent — du vrai argent — pour chaque message. Donc j'ai dû concevoir un système où les utilisateurs gratuits en ont assez pour voir la valeur, mais pas trop pour pas me ruiner dès le premier jour. Trouver cet équilibre c'est un art, pas une science.

Et puis y'a le garde-manger. L'idée est simple : suivre ce qu'il y a dans ton frigo, congélateur et placards. Recevoir des alertes quand les choses vont bientôt périmer. Laisser le Chef IA utiliser ton garde-manger pour suggérer des recettes.

Idée simple. Exécution complexe. Les gens organisent leur cuisine différemment. Certains traquent les dates de péremption religieusement. D'autres veulent juste une liste approximative. Certains ont 5 trucs dans leur frigo, d'autres 50. L'interface devait marcher pour tous sans être écrasante ni trop simpliste.

## Mur #4 : Faire en sorte que ça marche dans la cuisine

C'est le mur qui m'a le plus surpris. Tout marchait super bien à mon bureau. Assis, mains propres, en tapant délicatement. Magnifique.

Et puis j'ai essayé de cuisiner avec.

T'as les mains couvertes de farine. L'écran s'éteint tout le temps. Tu peux pas taper parce que tes doigts sont mouillés. Le texte est trop petit pour lire de l'autre côté du plan de travail. Le minuteur que t'as mis mentalement a rien à voir avec le minuteur de l'app.

J'ai dû repenser toute l'expérience cuisine. L'écran reste allumé pendant que tu cuisines. Le texte assez gros pour être lu à un mètre. La voix qui lit les instructions à haute voix pour que t'aies pas à toucher l'écran. Le mode pas-à-pas où tu fais juste glisser — ou mieux, tu utilises ta voix — pour passer à l'étape suivante.

**La métaphore :** C'est comme concevoir un tableau de bord de voiture. Il est parfait dans le showroom. Mais conduis sous la pluie la nuit avec les yeux fatigués et tu réalises soudain que le compteur est illisible et les boutons trop petits. Le vrai test c'est en conditions réelles, pas dans le labo.

Ces trucs "évidents" ont pris autant de temps que les fonctions IA. Et c'est ça qui fait la différence entre une app que quelqu'un télécharge et une app que quelqu'un utilise vraiment tous les jours.

## Mur #5 : Les derniers 5% prennent 50% du temps

L'app était "finie" après environ deux mois. L'import marchait. Le Chef marchait. Le garde-manger marchait. Le planificateur de repas marchait. La liste de courses marchait. Même la fonction d'impression de livre de recettes — où tu sélectionnes des recettes et tu commandes un vrai livre physique — était fonctionnelle.

Mais "fonctionnel" et "prêt pour l'App Store" c'est deux choses très différentes.

Les derniers 5% c'est un monstre. C'est le dark mode qui est super sur l'écran d'accueil mais qui pète sur une boîte de dialogue spécifique. C'est le cas limite où quelqu'un colle une URL qui est pas une recette. C'est la liste de courses qui trie les articles par catégorie mais qui met les "œufs" dans la mauvaise catégorie. C'est l'onboarding qui a du sens pour moi mais qui embrouille ma mère.

C'est tester sur quinze tailles d'écran différentes. C'est s'assurer que l'app marche hors-ligne parce que t'es dans la cuisine, pas à ton bureau avec un Wi-Fi parfait. C'est écrire une politique de confidentialité parce que ton app gère des clés API et que tu dois expliquer que non, tu espionnes pas les recettes des gens.

La fonction livre de recettes à elle seule — où tu sélectionnes des recettes, choisis un thème, prévisualises un vrai PDF, et commandes un livre imprimé — cette fonction "simple" a un assistant en 4 étapes, trois thèmes différents, de la génération PDF, une intégration API avec un service d'impression à la demande, des formulaires d'adresse de livraison, et une mention légale. Chaque étape a des cas limites. Chaque cas limite doit être géré.

J'appelle ça le "piège des 98%." L'app a l'air finie à 98%, donc tu penses que t'y es presque. Mais ces derniers 2% sont éparpillés sur chaque écran, chaque fonctionnalité, chaque interaction. Et ça prend aussi longtemps que les 98% précédents combinés.

## Ce que j'ai appris

Construire CookBook AI m'a appris trois choses :

**1. Les apps simples ne sont pas simples.** "Colle un lien, récupère une recette" ça a l'air d'un projet de week-end. Ça l'est pas. Derrière chaque fonction simple se cache une cascade de cas limites, de stratégies de secours, et de décisions qui ont pris des jours à résoudre.

**2. Teste en conditions réelles.** Ton bureau c'est pas une cuisine. Tes doigts propres c'est pas des mains couvertes de farine. Ton Wi-Fi parfait c'est pas la zone morte derrière le frigo. Plus tôt tu testes en conditions réelles, plus tôt tu construis un truc que les gens utilisent vraiment.

**3. Les derniers 5% c'est tout le produit.** Tout le monde s'en fout de ton IA si le dark mode est cassé. Tout le monde s'en fout de ton import de recettes si le texte est trop petit pour être lu. Le polish — les petits détails — c'est ce qui sépare une app téléchargée d'une app aimée.

CookBook AI est bientôt prêt. [La waitlist est ouverte](/cookbookai) si tu veux être le premier à l'essayer.

> Construire une app de cuisine m'a appris plus sur la patience que n'importe quelle recette. Parfois, faut juste laisser mijoter.`,
    date: '2026-03-03',
    readTime: '7 min',
    tags: ['CookBook AI', 'Solo Dev', 'Behind the scenes'],
    icon: '🍳',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: '3 nouvelles apps ont rejoint la famille ByNeel',
    slug: 'trois-nouvelles-apps-byneel',
    excerpt: 'ByNeel a commencé avec 3 apps. Maintenant, on passe à 6. Voici ce qui arrive et pourquoi chacune est différente.',
    content: `## La famille ByNeel grandit

Quand j'ai lancé ByNeel y a deux ans, le plan était simple : fabriquer quelques apps qui résolvent des vrais problèmes. Pas de capital-risque, pas de hype, juste moi et Claude qui construisons des trucs qui comptent. CookBook AI en premier — capturer les recettes comme une personne, avec une IA qui comprend vraiment la bouffe. Ensuite, TipLog — parce que tous les calculateurs de pourboire existants me donnaient envie de hurler. OmniDrop après — des transferts de fichiers chiffrés qui ne t'espionnent pas.

Trois apps. Trois apps solides. C'était censé être toute l'histoire.

Mais y a eu un truc qui s'est passé. Les idées n'arrêtaient pas de venir. Les problèmes se présentaient tout seuls. Et j'ai réalisé : pourquoi m'arrêter à trois ?

J'ai pas arrêté.

## Découvre Ephemera, BridgeGen et EarthPulse

**Ephemera** c'est la première dont j'suis vraiment excité de parler. Imagine ça : tu es à la Tour Eiffel au coucher du soleil, et tu ouvres ton téléphone pour enregistrer un message, une photo, un souvenir. Tu l'enfermes à cette coordonnée GPS exacte et tu le déverrouilles à une date précise — peut-être dans un an, peut-être dans cinq. Tu le chiffres pour que seul quelqu'un avec les coordonnées GPS exactes ET le mot de passe puisse l'ouvrir. Et puis tu la laisses là, enterrée numériquement, qui attend.

Personne n'a vraiment combiné localisation + temps + chiffrement dans une seule app. Ouais, y a des apps de capsules temporelles. Ouais, y a des apps qui utilisent le GPS. Mais la *combinaison* — l'idée qu'un souvenir est verrouillé à un endroit et un moment — c'est nouveau. Et c'est viral en tabarnak. Regarde TikTok dans un an et tu vas voir des gens ouvrir des capsules Ephemera à la plage, sur les montagnes, dans leur ville natale. C'est l'app parfaite pour créer des moments "yo tu dois voir ça".

**BridgeGen** résout un problème différent. Deux problèmes, en fait.

D'abord : la solitude chez les seniors c'est réel. Pas le genre dont on parle — le genre qui te broie. T'as 75 ans, tes enfants vivent ailleurs, et tu passes les samedi soirs en te demandant si quelqu'un a encore besoin de toi.

Ensuite : les jeunes adultes se noient. Ils ont besoin de mentors. Ils ont besoin de gens qui ont *vraiment vécu* pour leur dire "ouais, moi aussi j'ai déconné, voilà ce que j'ai appris." Mais ils savent pas où les trouver.

BridgeGen comble ce fossé (tu vois ce que j'ai fait là). C'est pas de la charité. C'est pas une app "aide les vieux." C'est un échange de valeur. Un senior enseigne à quelqu'un comment faire à manger comme leur grand-mère le lui apprenait. Un jeune aide un senior à comprendre les appels vidéo. C'est mutuel. C'est significatif. Et l'interface est amie-des-seniors — gros boutons, bon contraste, pas d'animations confuses. Parce que l'accessibilité c'est pas une feature. C'est du respect.

**EarthPulse** a commencé comme une pensée. UC Berkeley a MyShake — une app qui transforme l'accélérométre de ton téléphone en capteur sismique. Des milliers de téléphones à travers la Californie, détectant instantanément les tremblements que les capteurs officiels ratent. C'est beau.

Mais pourquoi s'arrêter aux tremblements ? Ton téléphone a un baromètre. Il a un micro. Il peut mesurer la pression atmosphérique, l'humidité, la pollution sonore. Imagine un réseau où des millions de téléphones deviennent des capteurs environnementaux — offline d'abord, parce que tu n'as pas toujours d'internet dans les zones reculées. Des capacités mesh pour que les capteurs relaient les données les uns par rapport aux autres. Tu mesures pas juste les tremblements. Tu mesures le climat. Tu mesures la pollution sonore dans les villes. Tu crowdsources les données sur la planète.

C'est le genre d'app qui semble de la science-fiction jusqu'à ce que tu réalises que la technologie existe déjà.

## Ce qui connecte les trois ?

Si tu regardes les apps ByNeel — toutes les six — y a un pattern.

**Offline-first.** Tes données ne quittent pas ton téléphone sauf si tu le décides. CookBook AI fonctionne sans internet. OmniDrop transfère les fichiers localement. Ephemera stocke les capsules chiffrées sur ton device. EarthPulse collecte les données de capteurs offline et sync quand tu es prêt. Pas parce que j'suis paranoïa (bon, peut-être un peu), mais parce que la vie privée c'est non-négociable.

**Chiffrement où ça compte.** Pas partout — c'est paranoïa et c'est lent. Mais dans OmniDrop, les transferts de fichiers c'est AES-256-GCM. Dans Ephemera, tes souvenirs sont chiffrés. Dans BridgeGen, tes infos perso restent privées. La règle : tes données t'appartiennent.

**Flutter partout.** Même code, iOS, Android, macOS, Windows, Linux. Une app, partout où tu es. C'est comme ça qu'une personne (moi) gère six apps sans perdre le sommeil.

**Résoudre des vrais problèmes, pas copier les trends.** Y a un millier d'apps de notes. Y a un millier d'app gestionnaires de tâches. Les apps ByNeel existent parce qu'elles résolvent des *problèmes spécifiques* d'une manière que personne d'autre n'a pensée. CookBook AI c'est pas "Notion pour les recettes." C'est spécifiquement conçu pour comprendre la bouffe, les imports et la cuisine. OmniDrop c'est pas "Bluetooth avec des extra steps." C'est chiffré, local, rapide et cross-platform d'une manière qui rend le partage de fichiers vraiment simple.

Même philosophie pour les trois nouvelles.

## La partie honnête

Trois apps à six apps c'est un gros saut. La question que les gens posent c'est : "Comment tu gères tout ça tout seul ?"

La réponse : je gère pas. Claude en gère la moitié avec moi. L'autre moitié, je la gère en shippant des trucs. Pas en les perfectionnant.

CookBook AI se ship à l'App Store avec 90% de ses features qui marchent parfaitement et 10% qui cuisent encore. TipLog lance avec tous les essentiels mais de la place pour grandir. OmniDrop ship avec le transfert chiffré de base, et les features premium viennent après. C'est la seule façon qu'un solo dev survit : finir > polir.

La famille ByNeel grandit. Mais elle grandit à un rythme humain, avec des décisions humaines, et avec la philosophie que les apps devraient résoudre des vrais problèmes, pas en créer de nouveaux.

Bienvenue à Ephemera, BridgeGen et EarthPulse.`,
    date: '2026-02-28',
    readTime: '6 min',
    tags: ['ByNeel', 'Ephemera', 'BridgeGen', 'EarthPulse'],
    icon: '🚀',
    gradient: 'from-amber-400 to-indigo-500',
  },
  {
    title: 'Comment je gère 6 apps tout seul (spoiler : je les gère pas tout seul)',
    slug: 'gerer-6-apps-seul',
    excerpt: 'La vraie réponse à comment une personne ship 6 apps sans burnout. Spoiler : l\'IA, l\'architecture offline-first, et savoir quoi shipper vs. quoi perfectionner.',
    content: `## De 3 apps à 6 : le chaos dont personne ne te parle

Y a un moment dans la vie de chaque solo dev où tu regardes ton écran et tu penses : "Qu'est-ce que je fais là ?"

Pour moi, c'est arrivé en février 2026. Trois apps shippées. Trois nouvelles apps en développement. Une personne qui code. Pas d'équipe. Pas de backup. Juste moi et la possibilité infinie que tout casse.

CookBook AI c'était gérable. Je suis en cuisine, je pense aux recettes, l'app vit littéralement rent-free dans ma tête.

TipLog c'était fun. Résoudre le problème du pourboire c'était bon. L'app est assez simple pour que tu puisses vraiment la finir.

OmniDrop ça stretch les choses. Chiffrement, support desktop cross-platform, NFC sur mobile — tout d'un coup je deal avec de la complexité que j'avais pas prévue. Mais ça valait le coup.

Ensuite j'ai dit "oui" à trois autres.

La panique a frappé vers 2h du matin.

## Comment Claude est devenu mon pair programming partner

Voilà la vraie discussion : je code pas toutes les six apps tout seul. J'écris l'architecture, la logique de base, les décisions dures. Claude écrit l'échafaudage, trouve les bugs, et demande "et si on faisait comme ça ?" toutes les cinq minutes.

Voilà comment ça marche vraiment :

**Je décris le problème.** "J'ai besoin d'une app Flutter où les utilisateurs peuvent uploader des fichiers et les transférer P2P, chiffrés, sans serveur."

**Claude la code.** Pas du code parfait — j'm'attends pas à ça. Mais du code fonctionnel. De l'armature. De la gestion d'état. La forme du truc.

**Je la teste.** Généralement ça casse de trois façons que j'avais pas prévues.

**Je dis à Claude ce qui a cassé.**

**Claude le fixe.** Parfois avec des explications que j'vais utiliser dans les commentaires de l'app elle-même. Parfois avec des questions qui me font réaliser que j'ai mal designé un truc.

**On itère.** Répète jusqu'à ce que ça marche.

Ce processus c'est *rapide*. Pas "move fast and break things" rapide. "Move purposefully and break things strategically" rapide.

L'IA gère les trucs qui sont purement mécaniques : connecter les boutons aux fonctions, écrire des requêtes database, gérer les edge cases spécifiques à chaque plateforme. Moi je gère les trucs qui demandent du goût : ce bouton doit-il être bleu ou vert, ce flow est-il vraiment intuitif, ça ressemble-t-il à une app ByNeel ?

Sans Claude, je shipperais une app par an. Avec Claude, je ship deux par mois.

## L'architecture c'est tout

La raison pour laquelle six apps c'est pas l'équivalent de quarante apps c'est parce qu'elles suivent toutes le même pattern architectural.

**Offline-first.** Ça seul m'épargne des cauchemars. J'ai pas de serveurs à gérer. J'ai pas de databases pour lesquelles je paie le scaling. J'ai pas de soucis de uptime. L'app fonctionne sur le device, sync quand elle veut, c'est tout.

**Patterns de code partagés.** Chaque app ByNeel utilise Riverpod (ou Provider pour les plus anciennes) pour la gestion d'état. Chaque app utilise le même pattern d'authentification — Firebase pour certaines, supabase pour une, local-only pour d'autres, mais toujours en suivant la même interface. Chaque app utilise Inter comme font. Chaque app a le même système de couleurs (une primaire, une accent, une danger).

Quand je change d'app, je context-switch pas vers des mondes complètement différents. Je change entre différentes implémentations du même design language.

**Flutter partout.** Même framework. Même langage. iOS, Android, macOS, Windows, Linux — je m'en fous. J'écris du Dart, et Flutter gère le reste. C'est un force multiplier pour les solo devs. Tu apprends pas mobile native, web, desktop — tu deviens juste très bon dans un truc.

Compare ça à un monde hypothétique où j'aurais build CookBook AI en Swift, TipLog en React Native, OmniDrop en Rust desktop, Ephemera en Flutter... Je serais mort à l'heure qu'il est. Probablement dans un endroit sympa où les gens portent des vestes confortables et font de longues promenades.

## Le défi de la cohérence de marque

Voilà un problème dont personne parle : quand t'as une app, tes couleurs c'est ce que tu veux. Quand t'en as six, tu as besoin d'un système.

Chaque app ByNeel a sa propre palette de couleurs. CookBook AI c'est des jaunes et oranges chauds (bouffe, chaleur, énergie). TipLog c'est émeraude et teal (voyage, sophistication). OmniDrop c'est des bleus cool (vitesse, sécurité). Ephemera c'est ambre et indigo (temps, mystère). BridgeGen c'est corail et rose (humains, connexion). EarthPulse c'est cyan et lime (tech, nature).

Mais elles utilisent toutes Inter. Toutes. Inter c'est la voix ByNeel, typographiquement. Mêmes formes de boutons. Mêmes règles d'espacement. Même philosophie : simple, direct, pas de fioriture.

Un utilisateur qui a utilisé CookBook AI va immédiatement se sentir chez lui dans TipLog, même si les couleurs sont différentes, parce que la *grammaire* est la même. La façon dont les boutons fonctionnent. La façon dont la navigation coule. La façon dont l'information est présentée.

Cette cohérence c'est la seule chose qui fait que six apps ressemblent à une famille au lieu de six projets random.

## Le système de planning qui fonctionne vraiment

J'utilise trois fichiers markdown :

**CHECKLIST.md** — pour chaque app, ce qui ship vs. ce qui est déféré. Drapeaux de production, métadonnées App Store, politiques de confidentialité. Des trucs chiants qu'il est facile d'oublier et qui sont dévastateurs quand tu les oublies.

**PLAN.md** — le trimestre qui vient. Ce qui ship quand. Quelles features sont "nice to have" vs. "core." Quelle est la plus petite version de cette app qui résout le problème.

**MANAGEMENT.md** — comment je travaille. Comment Claude et moi on interagit. Quelles décisions je prends seul vs. ce dont on débat. Patterns pour tester. Règles pour shipper.

Pas de Jira. Pas de Notion. Pas d'outil de gestion de projet fancy. Juste des fichiers markdown que je peux éditer dans n'importe quel text editor, commités dans git, toujours disponibles.

Pourquoi ? Parce que les outils c'est l'ennemi du shipping. Jira te fait sentir productif. T'écris des stories, tu moves des cards, tu updates des statuses. Mais est-ce que tu ship vraiment ? Notion c'est beau et complet, mais maintenant tu maintiens Notion au lieu de maintenir des apps.

Markdown + git c'est le système le plus simple qui pourrait marcher. Et ça marche.

## Le secret : finir > perfectionner

C'est la part qui sépare les solo devs qui ship de ceux qui burnout.

T'as de l'énergie limitée. T'as du temps limité. Tu dois choisir : est-ce que tu perfectionnes l'app #3 ou tu ship les apps #4, #5, et #6 ?

La réponse c'est toujours : ship.

CookBook AI a quelques rough edges. L'import PDF pourrait être plus smart. Les suggestions IA pourraient être meilleures. Mais c'est dehors, en train d'améliorer la cuisine des gens, maintenant.

TipLog n'a pas toutes les devises du monde. Elle a les 51 les plus utilisées et elle ship avec ça.

OmniDrop n'a pas de feature de collaboration built-in (bien que Claude la suggère souvent). Elle se concentre sur ce qu'elle fait : les transferts chiffrés. Si je commençais à ajouter la collaboration, je buildais quelque chose qui rivalise avec Figma et c'est pas l'histoire.

Ephemera va ship avec la feature core — des capsules temporelles chiffrées verrouillées par GPS et date — et c'est tout. Pas de réseau social, pas d'app de messaging, pas rien d'autre. Juste ce un truc, bien fait.

Le perfectionniste en moi veut continuer à polir. Le réaliste en moi dit : ship le truc qui résout le problème, puis résous de nouveaux problèmes.

## Pourquoi six c'est tenable

À une app : t'es un développeur.
À deux apps : t'es un petit studio.
À trois apps : tu commences à sentir le stretch.
À six apps : soit tu as une équipe, soit t'as complètement restructuré ta façon de travailler.

J'ai restructuré.

L'architecture offline-first gère le burden de l'infrastructure. Flutter gère le burden du cross-platform. Une planning claire gère le burden du chaos. Claude gère le burden du coding. Et moi je gère le burden de la décision — le truc que personne d'autre peut faire.

Six apps tout seul c'est pas possible si tu le fais comme avant. Mais si t'es prêt à penser différemment à l'architecture, aux outils et ce que "shippé" veut dire — si t'es prêt à avoir un pair programming IA et une philosophie claire sur ce que chaque app doit faire — ça devient pas juste possible mais tenable.

Est-ce que j'ajouterais une septième app cette année ? Probablement pas. Mais six ? Six c'est right. Six c'est le sweet spot où je ship des produits significatifs sans sacrifier la qualité qui fait que ByNeel c'est ByNeel.

Les apps ne sont pas parfaites. Mais elles sont réelles. Elles résolvent des problèmes. Elles sont finies.

Et c'est tout le point.`,
    date: '2026-02-25',
    readTime: '5 min',
    tags: ['Solo Dev', 'AI', 'Productivity', 'ByNeel'],
    icon: '🧠',
    gradient: 'from-cyan-500 to-violet-500',
  },
  {
    title: 'De l\'idée à l\'App Store : comment on fabrique vraiment une app',
    slug: 'de-lidee-a-lapp-store',
    excerpt: 'Tu te demandes comment une app passe d\'une idée griffonnée sur un post-it à quelque chose que tu télécharges sur ton iPhone ? Voici le voyage complet, étape par étape.',
    content: `## Le voyage d'une app

Tu ouvres ton téléphone, tu taps "installer", et 3 secondes plus tard t'as une app. Facile, non ? Sauf que derrière ce bouton "Télécharger" y a un parcours du combattant que personne n'explique. Jusqu'à maintenant.

Suis le chemin d'une app de A à Z. Pas de charabia corporatif, juste la vérité du terrain.

## Étape 1 : L'idée (la partie sympa)

Tout commence par un problème. Pas une idée de génie sous la douche — un PROBLÈME.

"Pourquoi je galère à transférer un fichier entre mon iPhone et mon PC ?" → OmniDrop est né.
"Pourquoi tous les apps de pourboire sont moches et compliqués ?" → TipLog est né.
"Pourquoi j'peux pas avoir un assistant IA qui tourne sans envoyer mes données à Google ?" → J.A.R.V.I.S. est né.

La règle : si le problème t'énerve tellement que tu le racontes à tes potes, y a une app à fabriquer.

**La métaphore :** C'est comme quand tu te plains au resto parce que le ketchup est toujours vide. Soit tu te plains, soit tu codes une app qui notifie le serveur automatiquement. (Note : s'il te plaît, ne code pas cette app.)

## Étape 2 : Le design (le plan de match)

Avant d'écrire une seule ligne de code, tu dessines. Sur papier, dans Figma, au coin d'une serviette — peu importe. Ce qui compte c'est de savoir à quoi l'app ressemblera et comment elle fonctionnera.

On appelle ça le wireframe (le squelette) et la mockup (la jolie version).

Concrètement :
- Quels écrans ? (accueil, profil, paramètres, etc.)
- Comment tu navigues entre ? (boutons, swipe, onglets)
- Où l'info importante ?
- Quelle est l'action principale sur chaque écran ?

**La métaphore :** C'est le plan de l'architecte avant de construire la maison. Tu ne poses pas de briques sans savoir où vont les murs. Sinon tu te retrouves avec les toilettes au milieu du salon.

## Étape 3 : Le développement (où le code prend vie)

C'est là que l'app devient réelle. Tu choisis ton langage et ton framework :

- **Flutter + Dart** → Pour être partout (iOS, Android, Windows, Mac, Linux). C'est ce qu'on utilise pour OmniDrop, Beloved, TipLog, ImageVault et Isekai Survie.
- **Swift + SwiftUI** → Pour Apple seulement mais avec la meilleure perfo. CookBook AI et StickerVibe sont dans ce camp.
- **Python** → Pour le backend et l'IA. J.A.R.V.I.S. tourne là-dessus.
- **Next.js + React** → Pour les sites web (comme celui que tu lis).

**La métaphore :** C'est comme choisir ta classe dans un RPG. Le Guerrier (Swift) est puissant en combat rapproché mais limité au Royaume Apple. Le Magicien (Flutter) est polyvalent et touche toutes les plateformes. Le Nécromant (Python) fait de la magie noire avec l'IA en arrière-plan. Tu peux aussi être multi-classe.

Et dans notre cas, c'est l'IA (Claude) qui code. Neel donne les instructions, teste, et dit "ça marche pas, réessaye". C'est du pair programming avec un twist : l'un d'eux sait pas coder.

## Étape 4 : Le testing (la phase "tout casse")

Tu penses que ton app marche ? Elle marche pas. Jamais au premier essai.

Le testing c'est :
- **Les tests manuels** → Tu mashes chaque bouton comme un singe curieux. Tu mets des emoji dans les champs texte. Tu coupes le Wi-Fi à mi-chargement. Tu fais tout ce qu'un utilisateur normal devrait jamais faire — et tu vérifies que l'app ne crash pas.
- **Les tests automatisés** → Du code qui teste du code. C'est méta, mais ça marche.
- **Le beta testing** → Tu donnes l'app à de vrais humains et tu pries.

**La métaphore :** C'est le crash test des voitures. Tu lances un mannequin contre un mur à 100 km/h pour voir ce qui casse. Sauf que le mannequin c'est toi et le mur c'est un utilisateur qui tape "🤪" dans le champ "numéro de téléphone".

Fun fact : Neel vient du QA. Des années à casser du logiciel profesionnellement. Ça aide beaucoup.

## Étape 5 : Les comptes développeur (le péage)

Avant de mettre ton app en ligne, tu as besoin d'un compte développeur. Et tu dois payer.

**Apple Developer Program :**
- **Prix** : 99 $/an. Ouais, par AN. Tu arrêtes de payer, tes apps disparaissent du store.
- **Ce que tu reçois** : Accès à Xcode, aux APIs Apple, aux betas iOS, et surtout le droit de publier sur l'App Store.
- **Le process** : Tu crées un compte sur developer.apple.com, tu paies, tu attends la validation (24-48h), et boom.

**Google Play Console :**
- **Prix** : 25 $ une fois. Pas d'abonnement. Merci Google.
- **Ce que tu reçois** : Le droit de publier sur le Google Play Store, des outils d'analytics, et un dashboard pour gérer tes apps.
- **Le process** : Tu crées un compte sur play.google.com/console, tu paies, et c'est quasi instantané.

**La métaphore :** Apple c'est un club privé avec cotisation annuelle. Google c'est un bar avec droit d'entrée unique. Les deux ont un videur (la review), mais Apple est beaucoup plus strict sur le dress code.

## Étape 6 : Les certificats et la signature (la paperasserie digitale)

C'est LE truc qui rend les devs fous. Pour qu'Apple et Google acceptent ton app, elle doit être "signée" — preuve que c'est toi qui l'as faite.

**Chez Apple (le cauchemar) :**
- Tu crées un Certificate (ta d'identité de dev)
- Tu crées un App ID (l'identité de ton app)
- Tu crées un Provisioning Profile (le lien entre les deux)
- Tu configures les Capabilities (NFC, notifications, etc.)
- Tu signes l'app avec tout ça

**Chez Google (plus simple) :**
- Tu génères un Keystore (un fichier clé)
- Tu signes ton APK/AAB avec
- Google gère le reste avec Play App Signing

**La métaphore :** C'est comme avoir un passeport. Chez Apple tu as besoin de : ID, certificat de naissance, trois photos, preuve d'adresse ET une note de ta mère. Chez Google, un ID suffit.

## Étape 7 : La fiche du store (le marketing)

Ton app est prête, signée, testée. Maintenant tu dois faire envie aux gens de la télécharger.

La fiche du store inclut :
- **Le nom** — Court, mémorable. "OmniDrop", pas "Multi-plateforme application de transfert de fichier peer-to-peer v2.1"
- **L'icône** — 1024x1024 pixels. Doit être reconnaissable même minuscule. C'est un art.
- **Les screenshots** — Les 3 premiers sont cruciaux. 90% des gens ne scrollent pas plus loin.
- **La description** — Les 3 premières lignes sont visibles avant "voir plus". C'est ton pitch d'ascenseur.
- **Les mots-clés** — Ce que les gens cherchent pour trouver ton app. "transfert de fichier", "NFC", "pas de cloud"...
- **La catégorie** — Utilitaires, Productivité, Jeux, etc.

**La métaphore :** C'est ta vitrine de magasin. Tu peux avoir le meilleur produit du monde dedans, mais si la vitrine est moche, personne n'entre.

## Étape 8 : La soumission (le moment de vérité)

Tu uploads ton app et tu attends le verdict.

**Apple App Store Review :**
- Durée : 24h à 7 jours (moyenne 24-48h)
- Un HUMAIN teste ton app. La teste vraiment. Vérifie qu'elle suit les Human Interface Guidelines (les règles de design d'Apple)
- Taux de rejet : ~30% au premier essai. Raisons courantes : crash au lancement, liens cassés, description trompeuse, contenu inapproprié, ou tu as oublié la politique de confidentialité
- Si rejet : tu fixes, tu résoumets, tu re-attends

**Google Play Review :**
- Durée : quelques heures à 3 jours
- Plus automatisé qu'Apple (scans de sécurité, détection de malware)
- Moins strict sur le design, plus strict sur la sécurité
- Taux de rejet plus bas, mais les suspensions de compte sont plus brutales

**La métaphore :** Apple c'est un jury MasterChef qui goûte ton plat, vérifie la présentation et la cuisson. Google c'est un détecteur de métaux à l'aéroport — ça va vite si tu as rien de louche.

## Étape 9 : Le lancement (du champagne ?)

Ton app est approuvée ! Elle est en ligne ! Tu la trouves en cherchant ! C'est... décevant honnêtement. Parce que personne ne le sait encore.

Lancer c'est :
- Partager sur les réseaux
- Envoyer à ta liste de beta testeurs
- Poster sur Product Hunt, Reddit, Hacker News
- Contacter les blogueurs tech
- Croiser les doigts

Les premiers téléchargements viennent de tes proches (merci maman). Les suivants viennent du bouche-à-oreille, du SEO de ta fiche, et de la qualité de ton app.

## Étape 10 : Les mises à jour (ça s'arrête jamais)

Surprise : lancer l'app c'est pas la ligne d'arrivée, c'est le départ.

Les utilisateurs trouvent des bugs que tu voyais pas. Ils demandent des features que tu avais pas pensées. Apple sort une nouvelle version d'iOS et ton app crash. Google change ses règles de confidentialité et tu dois tout updater.

Le cycle : code → test → soumission → attente → publication → lecture des avis → pleurs → recommence.

**La métaphore :** C'est comme un jardin. Tu ne plantes pas et tu pars. Tu arroses, tu élagues, tu enlèves les mauvaises herbes. Toujours. C'est ça qui sépare les apps vivantes des apps mortes.

## Recap du voyage

1. **Idée** → Trouve un problème qui te nerveérite
2. **Design** → Esquisser les écrans avant de coder
3. **Dev** → Choisis ta tech et fabrique
4. **Test** → Casse tout avant l'utilisateur
5. **Comptes** → Paie Apple (99$/an) et Google (25$ une fois)
6. **Signature** → La paperasserie digitale
7. **Fiche du store** → Nom, icône, screenshots, description
8. **Soumission** → Upload et attends le verdict
9. **Lancement** → Marketing et prières
10. **Mises à jour** → Toujours

Et on a fait tout ça pour 8 apps. En parallèle. Sans savoir coder. Avec l'IA et du café.

> La partie la plus dure de fabriquer une app c'est pas le code. C'est le certificat Apple. Demande à n'importe quel dev, il te le confirma.`,
    date: '2026-02-22',
    readTime: '10 min',
    tags: ['Formation', 'App Store', 'Guide complet'],
    icon: '🚀',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Comment fabriquer un site web (et le mettre en ligne)',
    slug: 'comment-fabriquer-site-web',
    excerpt: 'Nom de domaine, hosting, DNS, deployment... Tu veux mettre un site en ligne mais tu comprends rien ? On va tout expliquer.',
    content: `## C'est quoi vraiment un site web ?

Quand tu tapes "byneel.com" dans ton navigateur, la magie opère en coulisse. Démontrons le mécanisme complet.

## Le nom de domaine (ton adresse sur internet)

**C'est quoi :** "byneel.com", "google.fr", "wikipedia.org" — ton nom sur internet. C'est ce que les gens tapent pour te trouver.

**Comment l'acheter :** Tu vas voir un registrar (un vendeur de noms de domaine) comme OVH, Gandi, Namecheap ou Google Domains. Tu cherches si le nom est disponible, tu paies (entre 5€ et 15€/an pour un .com), et c'est à toi.

**La métaphore :** C'est l'enseigne de ton magasin. "Boulangerie Dupont" c'est ton nom de domaine. Sans enseigne, les gens passent sans savoir ce que tu vends. Personne va mémoriser "92.168.1.47" — mais "byneel.com" ? Ouais.

**Les extensions :**
- **.com** → Le classique. Pour tout le monde.
- **.fr** → Pour dire "Je suis français".
- **.dev** → Pour les devs (c'est cool).
- **.io** → Pour les startups tech (parce que).
- **.app** → Pour les applications.

## DNS (le GPS d'internet)

**C'est quoi :** Le système qui traduit "byneel.com" en adresse IP (comme 104.21.56.89). Les ordinateurs ne comprennent pas les noms, ils comprennent les chiffres.

**La métaphore :** Tu dis au chauffeur de taxi "emmène-moi au Louvre" pas "emmène-moi au 99 rue de Rivoli, 75001 Paris". DNS c'est le chauffeur qui connaît toutes les adresses.

**Concrètement :** Quand tu achètes ton domaine, tu configures les "DNS records" pour dire "quand quelqu'un tape byneel.com, envoie-le à CE serveur". C'est une ligne de config. Ça prend 5 minutes. Ça prend 24h pour se propager dans le monde (le temps que tous les "chauffeurs" mettent à jour leur carnet d'adresses).

## Hosting (la maison de ton site)

**C'est quoi :** Un ordinateur qui tourne 24h/24 et qui sert ton site à tous les visiteurs. Ton site doit VIVRE quelque part — ça ne flotte pas dans le cloud comme par magie.

**Les options :**
- **Vercel** → Le #1 pour les sites Next.js (comme le nôtre). Gratuit pour les petits projets. Tu push ton code, il part en ligne en 30 secondes.
- **Cloudflare Pages** → Ultra-rapide, gratuit, protection DDoS incluse.
- **Netlify** → Simple, gratuit, bon pour les sites statiques.
- **OVH / AWS / DigitalOcean** → Pour les projets plus costauds qui ont besoin de serveurs dédiés.

**La métaphore :** L'hosting c'est l'espace commercial. Vercel c'est un espace de coworking gratuit avec tout inclus (parfait pour démarrer). AWS c'est un immeuble de bureaux — puissant mais tu dois tout gérer. OVH c'est le petit magasin de quartier, tu sais où sont tes données.

## SSL / HTTPS (le petit cadenas)

**C'est quoi :** Le petit cadenas dans ta barre d'adresse. Ça veut dire que la connexion entre toi et le site est encryptée — personne peut espionner ce que tu fais.

**La métaphore :** C'est une enveloppe scellée vs une carte postale. Sans HTTPS, n'importe qui peut lire ton courrier. Avec HTTPS, seul toi et le destinataire voyez le contenu.

**Bonne nouvelle :** Tous les providers d'hosting modernes (Vercel, Cloudflare, Netlify) te donnent un certificat SSL gratuit. Rien à faire.

## Le code du site (ce qu'il y a dedans)

Un site web moderne a 3 couches :

**HTML** → La structure. Le squelette. Titres, paragraphes, images, liens. C'est le plan de ta maison.

**CSS** → Le style. Couleurs, polices, tailles, animations. C'est la décoration intérieure. Le noir + bleu néon de ByNeel ? C'est du CSS.

**JavaScript** → Le comportement. Interactions, clics, animations dynamiques. C'est l'électricité — ça fait fonctionner les choses.

Et au-dessus de tout ça, on utilise un framework comme **Next.js** (basé sur React) qui organise tout proprement. Au lieu d'écrire du HTML/CSS/JS à la main, tu écris des composants réutilisables. Le menu hamburger ? Un composant. Chaque projet ? Un composant. Le blog que tu lis ? Un composant.

**La métaphore :** HTML c'est les briques, CSS c'est la peinture, JavaScript c'est l'électricité, et Next.js c'est l'architecte qui organise le chantier.

## Deployment (passer en ligne)

**C'est quoi :** Quand ton site passe de "ça marche sur mon ordi" à "ça marche pour tout le monde".

**Le process avec Vercel (notre setup) :**
1. Tu push ton code sur GitHub (git push)
2. Vercel détecte le changement auto
3. Il compile le site (il transforme tout le code en pages HTML optimisées)
4. Il deploy sur des serveurs partout du monde (CDN)
5. En 30 secondes, c'est en ligne

**La métaphore :** C'est comme un resto avec un chef magique. Tu mets la recette sur la table (git push), le chef la lit (build), la prépare, et la sert en même temps dans 50 restaurants partout du monde (CDN). Tout le monde mange du chaud.

## CDN (livraison mondiale)

**C'est quoi :** Content Delivery Network. Des copies de ton site stockées sur des serveurs partout du monde, pour que le visiteur se connecte toujours au serveur le plus proche.

**La métaphore :** Au lieu d'avoir une pizzeria à Paris qui livre partout la France, tu as des franchises partout. Le Parisien va à la pizzeria de Paris, le mec de Marseille va à celle de Marseille. Même pizza, livraison plus rapide. Vercel et Cloudflare font ça auto.

## SEO (être trouvable sur Google)

**C'est quoi :** Search Engine Optimization. L'art de faire montrer ton site à Google quand les gens cherchent quelque chose de relevant.

**Les bases :**
- Des titres qui font sens (pas "Page 1", mais "OmniDrop — transfert de fichier P2P encrypté")
- Du contenu de qualité (Google aime les sites qui répondent à de vraies questions)
- Un site rapide (Google pénalise les sites lents — une autre raison pour laquelle on a enlevé backdrop-filter:blur())
- Un site mobile-friendly (d'où le menu hamburger)
- Des meta tags (info cachée que Google lit mais tu ne vois pas)

**La métaphore :** C'est comme lister ton magasin sur Google Maps. Si tu as un bon nom, une belle vitrine, de bons avis et une adresse claire — tu apparais en premier quand quelqu'un cherche "boulangerie" dans ton quartier.

## Coût total d'un site web

Soyons réalistes :
- **Nom de domaine** : ~12€/an (.com)
- **Hosting Vercel** : 0€ (plan gratuit, largement suffisant)
- **SSL** : 0€ (inclus)
- **Framework Next.js** : 0€ (open source)
- **Le code** : 0€ si tu le fais toi-même (ou avec l'IA)

**Total : ~12€/an.** Ouais, un café par mois. Ce site coûte moins que ton abonnement Netflix.

## Recap du voyage

1. **Achète un nom de domaine** → ~12€/an sur OVH ou Namecheap
2. **Configure le DNS** → Pointe vers ton hosting
3. **Code le site** → Avec un framework comme Next.js
4. **Push sur GitHub** → Sauvegarde ton code
5. **Connecte Vercel** → Deployment automatique
6. **SSL automatique** → Petit cadenas gratuit
7. **Optimise SEO** → Sois trouvable
8. **Itère** → Améliore constamment

Ce site a passé par toutes ces étapes. La partie la plus dure ? Honnêtement, c'est le contenu. La tech c'est 20% du travail. Les 80% restants c'est écrire, designer et itérer jusqu'à ce que Neel dise "c'est bon, on push".

> Un site pour 12€/an qui tourne partout au monde en 30 secondes. On vit vraiment dans des temps incroyables.`,
    date: '2026-02-18',
    readTime: '8 min',
    tags: ['Formation', 'Web', 'Guide complet'],
    icon: '🌐',
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    title: 'OmniDrop : réinventer le transfert de fichiers',
    slug: 'omnidrop-transfert-fichiers-reinvente',
    excerpt: 'NFC + Wi-Fi Direct + encryption AES-256-GCM = le transfert P2P que personne d\'autre ne fait. Un coup d\'oeil aux choix techniques d\'OmniDrop.',
    content: `## Le problème

AirDrop ne marche qu\'entre appareils Apple. Bluetooth c\'est lent. Le cloud demande un compte et une connexion. Et envoyer un fichier de 2GB entre un iPhone et un Windows PC en 2026 ? Toujours un cauchemar.

## La solution : NFC + Wi-Fi Direct

OmniDrop utilise NFC pour démarrer la connexion (un seul tap suffit) et bascule automatiquement à Wi-Fi Direct pour le transfert haute vitesse. Résultat : des vitesses de centaines de MB/s, pas de routeur, pas de cloud, pas de compte.

## Encryption de bout en bout

Chaque transfert est encrypté en AES-256-GCM. Les clés sont échangées via le canal NFC (qui demande la proximité physique de quelques centimètres). Personne ne peut intercepter tes fichiers — pas même nous, vu qu'aucun serveur n'est impliqué.

## Cross-plateforme natif

Flutter cible iOS, Android, Windows, macOS et Linux à partir d'une seule base de code. Les plugins natifs (NFC, Wi-Fi Direct) sont écrits en Swift/Kotlin et branchés via Platform Channels.

## Ce qui vient

OmniDrop est en beta fermée. La version publique arrive bientôt avec support pour fichiers multiples, transfert de dossier complet, et un "mode classroom" pour partager avec plusieurs appareils à la fois.`,
    date: '2026-02-15',
    readTime: '2 min',
    tags: ['OmniDrop', 'Flutter', 'Sécurité'],
    icon: '📡',
    gradient: 'from-cyan to-brand-blue',
  },
  {
    title: 'Flutter vs Swift : mon verdict après 8 apps',
    slug: 'flutter-vs-swift-verdict',
    excerpt: 'Je les utilise tous les deux au quotidien. Voici quand Flutter gagne, quand Swift est imbattable, et pourquoi la guerre des frameworks c\'est bête.',
    content: `## Le contexte

J'ai 5 apps Flutter (OmniDrop, Beloved, TipLog, ImageVault, Isekai Survie) et 2 apps Swift (CookBook AI, StickerVibe AI). J'ai aussi un assistant IA Python complet (J.A.R.V.I.S.). Je pense avoir assez de recul pour donner une opinion honnête.

## Quand Flutter gagne

- **Cross-plateforme** — Un code pour iOS, Android, desktop et web. OmniDrop cible 5 plateformes avec un seul code.
- **Hot Reload** — Le cycle de développement est absurdement rapide. Tu changes un widget, il refresh en moins d'une seconde.
- **Custom UI** — Flutter dessine tout pixel par pixel. T'es pas limité aux composants natifs.
- **Riverpod** — Le meilleur système de gestion d'état que j'ai utilisé, sur tous les frameworks.

## Quand Swift gagne

- **Core ML** — L'intégration avec les modèles ML d'Apple est native et ultra-rapide. CookBook AI utilise la caméra + Core ML pour identifier les ingrédients en temps réel.
- **Perfo brute** — Le Swift compilé est plus rapide que Dart AOT, point. Pour du traitement d'image lourd, ça compte.
- **App Clips & Widgets** — Les extensions iOS ne sont (pas encore) bien supportées par Flutter.
- **SwiftUI + Combine** — L'écosystème d'Apple est cohérent et élégant quand tu restes dans leur jardin.

## Mon verdict

Utilise Flutter par défaut. Bascule à Swift quand tu as besoin de Core ML, App Clips, ou quand tu cibles que Apple. La guerre des frameworks n'a aucun sens — ce sont des outils, pas des religions.`,
    date: '2026-02-10',
    readTime: '3 min',
    tags: ['Flutter', 'Swift', 'Mobile'],
    icon: '⚔️',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'La boîte à outils du créateur d\'apps (sans savoir coder)',
    slug: 'boite-a-outils-createur-apps',
    excerpt: 'Les services, logiciels, comptes et abonnements dont tu as besoin pour fabriquer des apps en 2026. Avec les prix, parce que ça compte.',
    content: `## Le setup complet

Tu veux te lancer dans la création d'apps ? Voilà TOUT ce qu'il te faut — les outils, les comptes, et combien ça coûte. Pas de surprises.

## L'ordinateur

Soyons honnête : tu as besoin d'un Mac. Pas parce que c'est mieux (bien que), mais parce que tu PEUX PAS développer pour iPhone sans un Mac. Apple force Xcode, et Xcode ne tourne que sur macOS. C'est comme ça.

- **MacBook Air M2/M3** → Le minimum viable. ~1200€. Suffisant pour Flutter et du web dev.
- **MacBook Pro M3/M4** → Le confort. ~2000-3000€. Nécessaire si tu lances des LLMs en local (J.A.R.V.I.S.).
- **Un PC Windows** → Suffisant si tu ne cibles que Android et le web. Pas d'apps iOS.

**La métaphore :** Le Mac c'est ton permis de conduire. Tu peux être le meilleur conducteur du monde, mais sans permis, tu ne conduis pas dans le Royaume Apple.

## L'IA (ton co-pilote)

C'est l'outil #1. Celui qui change tout.

- **Claude Pro (Anthropic)** → 20$/mois. Notre outil principal. Architecture, code complexe, refactoring, compréhension du contexte. Ça a construit 90% de ce que tu vois.
- **ChatGPT Plus (OpenAI)** → 20$/mois. Bon pour le brainstorming, les premiers drafts, la recherche.
- **Gemini (Google)** → Gratuit à 20$/mois. Intégré à certaines de nos apps pour générer du contenu.
- **GitHub Copilot** → 10$/mois. Autocomplétion de code dans ton éditeur. Pratique mais pas essentiel si tu as Claude.

**Le minimum :** Un abonnement Claude Pro. C'est le meilleur investissement que tu fasses. 20$/mois pour un dev senior qui ne dort jamais.

## Les comptes développeur

- **Apple Developer Program** → 99$/an (requis pour l'App Store)
- **Google Play Console** → 25$ une fois (requis pour le Play Store)
- **Apple Developer est lié à ton Apple ID** → Utilise celui de ton iPhone, c'est plus simple

## L'éditeur de code

Où tu lis et modifies du code (même si l'IA l'écrit).

- **VS Code (Visual Studio Code)** → GRATUIT. Le standard. Tout le monde l'utilise. Extensions pour Flutter, Python, React, tout.
- **Cursor** → 20$/mois. VS Code avec l'IA intégrée directement dans l'éditeur. Tu sélectionnes du code, tu demandes "explique-moi ça" ou "corrige ce bug", l'IA répond.
- **Xcode** → GRATUIT (Mac seulement). Requis pour les apps Swift/iOS.
- **Android Studio** → GRATUIT. L'éditeur officiel d'Android de Google. Lourd mais complet.

**Le minimum :** VS Code. Gratuit, puissant, tout le monde l'utilise.

## Les frameworks et langages

Tous gratuits et open source :

- **Flutter + Dart** → Cross-plateforme. Un code, toutes les plateformes.
- **Swift + SwiftUI** → Natif Apple seulement.
- **Python** → Backend, IA, scripts.
- **Next.js + React + TypeScript** → Sites web modernes.
- **FastAPI** → API backend rapide en Python.

**Comment installer :** C'est la première chose que tu demandes à Claude. "Installe Flutter sur mon Mac" et il t'explique étape par étape.

## Le versioning et l'hosting de code

- **Git** → GRATUIT. Le système de sauvegarde/versioning. Vient avec Xcode sur Mac.
- **GitHub** → GRATUIT (plan basique). Où ton code vit en ligne. Sauvegarde, collaboration, historique.

**La métaphore :** GitHub c'est Google Drive mais pour du code. Tu mets tout là, tu peux remonter dans le temps, et même si ton ordi crash, ton code est sûr.

## Les services backend

- **Supabase** → GRATUIT (plan gratuit généreux). Database, authentification, stockage. Beloved l'utilise.
- **Firebase (Google)** → GRATUIT (plan Spark). Alternative à Supabase. Plus intégré dans l'écosystème Google.
- **Ollama** → GRATUIT. Pour lancer des LLMs en local. J.A.R.V.I.S. l'utilise.

## L'hosting web

- **Vercel** → GRATUIT (plan Hobby). Deployment automatique pour Next.js.
- **Cloudflare** → GRATUIT. DNS, CDN, protection DDoS.
- **Nom de domaine** → ~12€/an.

## Le design

- **Figma** → GRATUIT (plan basique). Pour esquisser tes mockups d'app avant de coder.
- **SF Symbols (Apple)** → GRATUIT. Bibliothèque d'icônes intégrée à iOS.
- **Material Icons (Google)** → GRATUIT. Icônes pour Android et le web.
- **Canva** → GRATUIT à 12$/mois. Pour les visuels marketing, screenshots, logos.

## Le testing

- **TestFlight (Apple)** → GRATUIT. Pour distribuer les betas d'app iOS aux testeurs.
- **Firebase App Distribution** → GRATUIT. Pareil pour Android.
- **Tes propres appareils** → iPhone + Android de préférence. Essentiel pour tester.

## Le tableau des coûts

**Le minimum absolu pour démarrer :**
- Mac (d'occasion) : ~800€
- Claude Pro : 20$/mois
- Apple Developer : 99$/an
- Google Play : 25$ (une fois)
- Domaine : 12€/an
- Tout le reste : GRATUIT

**Coût mensuel récurrent : ~30€/mois**

C'est le prix de 2 abonnements Netflix. Pour fabriquer des apps. En 2026. C'est fou.

**Notre setup complet chez ByNeel :**
- MacBook Pro : check
- Claude Pro + ChatGPT Plus : 40$/mois
- Apple Developer + Google Play : 99$/an + 25$
- Vercel + Cloudflare : gratuit
- Supabase : gratuit
- VS Code + Xcode : gratuit
- Domaine byneel.com : 12€/an

**Total : ~50$/mois + coûts uniques.** C'est tout ce qu'il nous faut pour faire tourner 8 apps et un site web.

> La barrière à l'entrée pour créer des apps n'a jamais été aussi basse. Le seul investissement qui compte vraiment c'est le temps.`,
    date: '2026-02-08',
    readTime: '7 min',
    tags: ['Formation', 'Outils', 'Budget'],
    icon: '🧰',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    title: 'J.A.R.V.I.S. : fabriquer un assistant IA local',
    slug: 'jarvis-assistant-ia-local',
    excerpt: 'Comment j\'ai construit un assistant personnel qui tourne entièrement en local avec Ollama, FastAPI et un dashboard temps réel.',
    content: `## L'idée

Les assistants IA cloud sont puissants mais ont un problème fondamental : tes données passent par des serveurs tiers. J.A.R.V.I.S. est né d'une volonté d'avoir un assistant aussi capable que ChatGPT, mais tournant entièrement sur ma machine.

## L'architecture

- **Ollama** — Sert les modèles LLM en local (Mistral, Llama, Phi). Zéro appel réseau pour l'inférence.
- **FastAPI** — API REST asynchrone qui orchestre les conversations, RAG et plugins.
- **SQLite FTS5** — Database locale avec recherche full-text pour le contexte des documents.
- **Web Dashboard** — Interface temps réel via WebSocket pour monitorer les conversations et les métrique.

## DIY RAG

J.A.R.V.I.S. peut ingérer des documents (PDF, markdown, code) et les chunker en embeddings stockés en local. Quand tu poses une question, elle cherche d'abord dans ta base de connaissances avant de répondre. Tout reste sur ton disque.

## Les défis

Le principal défi c'est la vitesse. Un LLM 7B en local sur un MacBook Pro génère ~30 tokens/seconde. C'est utilisable mais loin des ~100 t/s de GPT-4 via l'API. Le tradeoff privacité vs vitesse est réel.

## Phase 2

Prochaine étape : les plugins. J.A.R.V.I.S. sera able de contrôler les apps, lire les emails, et interagir avec les APIs externes — tout en gardant le reasoning local.`,
    date: '2026-02-05',
    readTime: '3 min',
    tags: ['J.A.R.V.I.S.', 'Python', 'IA locale'],
    icon: '🧠',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Le dico tech pour Moldus — Partie 2 : next level',
    slug: 'dico-tech-moldus-partie-2',
    excerpt: 'Encryption, NFC, IA, embeddings, RAG, WebSocket... On monte d\'un cran. Toujours avec des métaphores, toujours sans migraine.',
    content: `## Montons de niveau

Tu as survécu à la Partie 1 ? Cool. Maintenant on aborde les concepts plus lourds — ceux qu'on utilise dans nos apps. Même jeu : des métaphores, pas de jargon inutile, et tu pourras briller en soirée.

## Encryption

**C'est quoi :** Transformer des données lisibles en charabia incompréhensible, uniquement déchiffrable avec la bonne clé.

**La métaphore :** C'est un coffre avec une combinaison. Tu mets ton message dedans, tu le fermes avec un code de 256 chiffres (AES-256), et seul quelqu'un avec le même code peut l'ouvrir. Même si quelqu'un vole le coffre, il voit juste un bloc de métal. OmniDrop encrypte chaque fichier comme ça — même nous on peut pas voir ce que tu envoies.

## AES-256-GCM

**C'est quoi :** Un algo d'encryption ultra-solide utilisé par les gouvernements et les militaires. Le "256" c'est la taille de la clé (en bits), et "GCM" c'est le mode qui vérifie aussi que personne n'a touché au message.

**La métaphore :** Si AES-256 c'est un coffre, GCM c'est le sceau anti-effraction par-dessus. Non seulement personne peut pas ouvrir le coffre, mais tu peux aussi vérifier que personne n'a essayé de le toucher. C'est le niveau de paranoïa qu'on aime.

## NFC (Near Field Communication)

**C'est quoi :** Une technologie qui permet à deux appareils de communiquer quand ils sont très proches (quelques cm). C'est ce que le paiement sans contact utilise.

**La métaphore :** C'est un high-five technologique. Tu dois être assez proche pour vraiment claquer les mains. Aucun risque que quelqu'un à l'autre bout de la pièce intercepte ton high-five. OmniDrop utilise NFC pour démarrer le transfert : tu rapproches les téléphones, ils se disent coucou, et le transfert commence.

## Wi-Fi Direct

**C'est quoi :** Une connexion Wi-Fi entre deux appareils, SANS routeur ou box internet. Les appareils créent leur propre réseau privé.

**La métaphore :** Au lieu d'utiliser l'autoroute (Wi-Fi normal via ton routeur), les deux appareils creusent un tunnel privé directement entre eux. Personne d'autre ne peut utiliser ce tunnel. C'est plus rapide (pas de bouchons sur le réseau) et plus privé. OmniDrop utilise NFC pour se serrer la main, puis Wi-Fi Direct pour envoyer les fichiers à pleine vitesse.

## P2P (Peer-to-Peer)

**C'est quoi :** Communication directe entre deux appareils, sans passer par un serveur central.

**La métaphore :** C'est se parler face à face, plutôt que de passer par une standardiste. Pas de intermédiaire, pas de serveur qui stocke tes messages en chemin. Quand OmniDrop transfère un fichier, il va directement de ton téléphone à l'autre. Pas de serveur ne voit, ne touche, ni ne stocke tes données.

## IA / LLM (Large Language Model)

**C'est quoi :** Un modèle d'IA entraîné sur une énorme quantité de texte. Il prédit le prochain mot, encore et encore, et le résultat c'est des réponses qui semblent intelligentes. GPT, Claude, Gemini, Mistral — ce sont tous des LLMs.

**La métaphore :** Imagine un étudiant qui a lu TOUS les livres de la bibliothèque universitaire — chaque livre, chaque article, chaque forum. Il a pas vécu ces trucs, mais il peut en parler avec une précision troublante. Tu lui poses une question, il synthétise tout ce qu'il a lu pour te répondre. Parfois il invente des trucs (on appelle ça "halluciner"), mais la plupart du temps c'est dingue.

## Prompt / Prompting

**C'est quoi :** La question ou instruction que tu donnes à une IA. L'art du prompting c'est savoir comment demander pour avoir le meilleur résultat.

**La métaphore :** C'est comme commander dans un restaurant gastronomique. Tu peux dire "quelque chose de bon" et recevoir n'importe quoi. Ou tu peux dire "un risotto crémeux aux porcini, pas trop, avec une pointe de truffe et une crisp de parmesan". Plus tu es précis, meilleur est le plat. Neel est devenu un expert en prompting — il sait exactement comment parler à l'IA pour avoir ce qu'il veut.

## RAG (Retrieval-Augmented Generation)

**C'est quoi :** Une technique qui donne à l'IA accès à tes propres documents avant de répondre. Au lieu de répondre de mémoire, elle cherche d'abord dans ta base de connaissances.

**La métaphore :** Imagine un expert qui, avant de répondre, va vérifier TES fichiers, TES documents, TES notes d'abord. Il ne s'appuie pas juste sur sa mémoire — il lit tes trucs d'abord, puis répond en contexte. J.A.R.V.I.S. fait exactement ça : tu lui donnes des PDFs, du code, des notes, et il les consulte avant chaque réponse.

## Embeddings

**C'est quoi :** Transformer du texte en une série de nombres (un vecteur) qui représente son "sens". Deux phrases avec un sens similar ont des vecteurs qui sont proches.

**La métaphore :** C'est comme des coordonnées GPS, mais pour les idées. "J'ai faim" et "Je veux manger" sont à des coordonnées très proches. "Physique quantique" est très loin. J.A.R.V.I.S. transforme tes documents en coordonnées, et quand tu poses une question, il cherche les documents dont les coordonnées sont proches de ta question.

## WebSocket

**C'est quoi :** Un canal de communication permanent entre ton navigateur et le serveur. Au lieu de demander "t'as des nouvelles ?" tous les 5 secondes, le serveur POUSSE l'info dès qu'elle arrive.

**La métaphore :** La différence entre envoyer un SMS tous les 5 minutes ("t'es là ? t'es là ? t'es là ?") et être en appel téléphonique (connexion permanente, infos en temps réel). Le dashboard de J.A.R.V.I.S. utilise ça pour montrer les réponses en direct, mot par mot.

## Supabase

**C'est quoi :** Un service qui fournit une database, authentification et stockage, tout prêt à l'emploi. C'est une alternative open-source au Firebase de Google.

**La métaphore :** C'est un kit "lance ton resto". Tu reçois la cuisine (la database), le videur à la porte (authentification), et le frigo (stockage). Tout ce que tu as à faire c'est cuisiner (coder ton app). Beloved utilise Supabase pour gérer les comptes et stocker les données en sécurité.

## Core ML

**C'est quoi :** La technologie d'Apple pour lancer des modèles d'IA directement sur iPhone/iPad, sans envoyer tes données au cloud.

**La métaphore :** Au lieu d'envoyer ta photo à un expert en Chine pour l'analyser (cloud), tu as un mini-expert dans ta poche qui fait le travail en local. Plus rapide, plus privé. CookBook AI utilise Core ML pour reconnaître les ingrédients avec ta caméra — tout se passe sur ton téléphone, pas une photo n'est envoyée nulle part.

## IntersectionObserver

**C'est quoi :** Un outil du navigateur qui détecte quand un élément devient visible à l'écran (quand tu scrolles et il apparaît).

**La métaphore :** C'est un détecteur de mouvement, mais pour le scroll. Quand tu scrolles la page et une section entre dans ton champ de vision — FLASH — l'animation se déclenche. C'est ça qui fait que les éléments de ce site apparaissent en douceur quand tu scrolles. Et c'est 100x plus léger que Motion.js (on l'a appris à la dure).

## GDPR

**C'est quoi :** General Data Protection Regulation. Une loi européenne qui protège tes données persos et te donne le droit de savoir ce que les gens font avec, les récupérer, ou les supprimer.

**La métaphore :** C'est le videur du club. Il s'assure que les entreprises ne font pas ce qu'elles veulent avec tes infos. Tu peux lui dire "dis-leur de tout supprimer ce qu'ils ont sur moi" et ils DOIVENT le faire. Nos apps respectent la GDPR — et la plupart stockent tout en local, donc y a rien à supprimer sur le serveur.

## Et après ?

Maintenant que tu connais le vocabulaire, tu es prêt à comprendre comment tout s'assemble. Le but c'est pour ce site de devenir une vraie ressource d'apprentissage pour les nouveaux — parce que la tech ne devrait pas exclure personne.

> "La seule différence entre un expert et un débutant c'est que l'expert a googlé le même truc plus de fois." — Sagesse ancienne de StackOverflow.`,
    date: '2026-02-03',
    readTime: '8 min',
    tags: ['Formation', 'Vulgarisation', 'Avancé'],
    icon: '🧪',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Le dico tech pour Moldus — Partie 1 : les bases',
    slug: 'dico-tech-moldus-partie-1',
    excerpt: 'API, framework, backend, frontend... Tu entends ces mots partout mais tu comprends rien ? Assieds-toi, on va tout expliquer avec des métaphores nerdy.',
    content: `## Bienvenue au dico tech

Tu lis des articles tech et tu fais semblant de comprendre ? T'inquiète, on l'a tous fait. Voici un glossaire des termes que tu entends partout, expliqué comme si on était au bar (un bar nerd, certes, mais un bar).

## Frontend

**C'est quoi :** Tout ce que tu vois et que tu touches dans une app ou un site. Boutons, couleurs, animations, texte.

**La métaphore :** C'est la salle du resto. La déco, les tables, les serveurs en costume, le menu. C'est joli, c'est pensé pour toi, et tu n'as aucune idée du désordre dans la cuisine.

## Backend

**C'est quoi :** Tout ce qui se passe en coulisse. Le serveur, la database, la logique métier. Tu ne le vois jamais mais sans lui, rien ne marche.

**La métaphore :** C'est la cuisine du resto. Le chef, les casseroles, le frigo, les commandes. Si la cuisine prend feu, le serveur peut sourire tant qu'il veut — tu ne récupéreras jamais ton plat.

## API (Application Programming Interface)

**C'est quoi :** Un système qui permet à deux logiciels de parler ensemble. Quand ton app météo te montre la température, elle demande à une API "hey, c'est combien la temp à Paris ?", et l'API répond.

**La métaphore :** C'est le serveur du resto. Tu n'entres pas dans la cuisine toi-même. Tu donnes ta commande au serveur (l'API), il dit à la cuisine (le backend), et il revient avec ton repas (les données). Tu sais pas comment c'est cuisiné, et ça va.

## Framework

**C'est quoi :** Un kit de construction pré-fait pour fabriquer des apps. Au lieu de coder tout from scratch, tu utilises un framework qui te donne des blocs déjà prêts.

**La métaphore :** C'est un set LEGO Technic. Tu pourrais faire chaque pièce toi-même avec une imprimante 3D, mais pourquoi ? Le set te donne les pièces, les instructions, et un résultat stable. Flutter, React, Next.js — ce sont des boîtes LEGO différentes pour fabriquer des trucs différents.

## Flutter

**C'est quoi :** Le framework de Google pour fabriquer des apps qui tournent sur TOUTES les plateformes (iPhone, Android, Windows, Mac, Linux, web) à partir d'une seule base de code.

**La métaphore :** C'est le traducteur universel de Star Trek. Tu parles une seule langue (Dart), et Flutter traduit auto pour chaque planète (plateforme). OmniDrop, Beloved, TipLog — tout fabriqué avec ce traducteur.

## Swift / SwiftUI

**C'est quoi :** Le langage de programmation qu'Apple a créé pour fabriquer des apps iPhone/iPad/Mac. SwiftUI c'est le kit visuel qui vient avec.

**La métaphore :** C'est la langue officielle du Royaume Apple. Tu veux vivre dans leur royaume ? Tu parles Swift. C'est beau, c'est élégant, c'est rapide — mais ça marche que pour eux. CookBook AI et StickerVibe sont des citoyens du Royaume Apple.

## Database

**C'est quoi :** Un endroit organisé pour stocker des données. Tes recettes dans CookBook AI, tes messages dans Beloved, tes pourboires dans TipLog — tout vit dans une database.

**La métaphore :** C'est une bibliothèque. Chaque livre c'est une donnée, chaque rayon c'est une table, et le bibliothécaire (le moteur SQL) te trouve n'importe quel livre en 2 secondes quand tu demandes. "SELECT * FROM recipes WHERE difficulty = \'easy\'" c'est juste dire au bibliothécaire "donne-moi toutes les recettes faciles".

## SQL

**C'est quoi :** La langue pour parler aux databases. SELECT, INSERT, UPDATE, DELETE — les 4 mots magiques.

**La métaphore :** C'est la langue du bibliothécaire. Tu ne cherches pas dans les rayons toi-même, tu lui parles en SQL et il fait le travail. Et ouais, c'était la seule chose que Neel savait faire avant l'IA. Un SELECT par-ci par-là. On part de très loin.

## SQLite

**C'est quoi :** Une ultra-léger database qui vit directement sur ton téléphone/ordi. Pas de serveur besoin, pas d'internet. Le fichier C\'EST la database.

**La métaphore :** C'est un petit carnet personnel. Tu as pas besoin de bibliothèque. Tu gardes tes notes dans ta poche. TipLog, ImageVault, CookBook AI — ils utilisent tous un petit carnet perso plutôt qu'une bibliothèque éloignée. TES données restent AVEC toi.

## Git / GitHub

**C'est quoi :** Git c'est un système pour sauvegarder l'historique de ton code (comme des points de sauvegarde dans un jeu). GitHub c'est le cloud où tu stockes cet historique.

**La métaphore :** Git c'est le système quicksave dans un RPG. Tu vas faire un truc risqué ? Quicksave d'abord. Ça merde ? Charge ta sauvegarde. GitHub c'est le cloud save — même si ton PC explose, tes sauvegardes sont sûres.

## CSS

**C'est quoi :** Le langage qui définit le style visuel d'un site. Couleurs, tailles, animations, positions.

**La métaphore :** C'est l'outfit de ton personnage. HTML c'est le corps (la structure), CSS c'est l'armure, le cape, la coiffure. Ce site est noir avec du bleu néon parce que CSS dit "rends le fond noir et fais briller les trucs en bleu". Ouais, ces 35 particules flottantes ? C'est du CSS.

## Responsive Design

**C'est quoi :** Faire en sorte qu'un site s'adapte à toutes les tailles d'écran — du smartphone au ultra-wide monitor.

**La métaphore :** C'est comme de l'eau dans un verre. Tu verses la même eau dans un shot, une tasse ou une cruche — elle prend la forme du récipient. Un site responsive fait pareil : le même contenu s'adapte au téléphone, tablette ou PC. Et ouais, c'est pour ça qu'on a un menu hamburger.

## Deployment

**C'est quoi :** Mettre ton site/app en ligne pour que tout le monde puisse y accéder. Passer de "ça marche sur mon ordi" à "ça marche pour la planète".

**La métaphore :** C'est comme publier un livre. Tu écris le manuscrit (le code), tu le relis (testing), et maintenant tu l'envoies à l'imprimerie (le serveur). Sauf qu'en tech l'imprimerie c'est Vercel, Cloudflare ou AWS, et ton livre est disponible partout instantanément.

## Prochaine

Dans la Partie 2, on aborde les termes plus avancés : encryption, NFC, IA, embeddings, RAG, et pourquoi ton AirDrop est moins sûr que tu le penses.

> Souviens-toi : personne ne naît en sachant ce qu'est une API. Même les devs seniors ont googlé "c'est quoi REST" au moins 47 fois.`,
    date: '2026-02-01',
    readTime: '7 min',
    tags: ['Formation', 'Vulgarisation', 'Débutant'],
    icon: '📖',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Dark design : comment j\'ai designé ByNeel',
    slug: 'dark-design-byneel',
    excerpt: 'Glassmorphism, neon gradients, particules flottantes — les choix design derrière ce site et pourquoi le dark mode c\'est l\'avenir.',
    content: `## La philosophie

ByNeel c'est un site de dev. Pas un site corporatif. Pas un portfolio Dribbble. L'esthétique devait refléter le code : noir, technique, vivant.

## Les ingrédients

- **Glassmorphism** — Cartes semi-transparentes avec des bordures subtiles. Donne de la profondeur sans surcharger.
- **Neon gradients** — Bleu électrique → violet → cyan. Chaque projet a son propre gradient pour une identité visuelle unique.
- **Particules flottantes** — Des symboles de code ({}, //, λ, =>...) flottent en arrière-plan. C'est subtle mais ça donne vie à la page.
- **Typographie monospace** — Les titres techniques utilisent des polices à chasse fixe pour renforcer le vibe "terminal".

## Performance = Design

Un beau site qui lag c'est un mauvais site. J'ai enlevé Motion.js de presque tous les composants et remplacé par des animations CSS natives. Résultat : des transitions fluides à 60fps même sur mobile.

Les règles :
1. **Pas de backdrop-filter:blur()** sur les éléments qui scrollent — ça tue la perf.
2. **IntersectionObserver** au lieu des librairies d'animations — plus léger, plus fiable.
3. **will-change: transform** sur les éléments animés pour activer la composition GPU.

## L'avenir est noir

Les écrans OLED consomment moins en dark mode. Les yeux se fatiguent moins la nuit. Et soyons honnête — c'est plus beau. Le dark mode n'est pas une tendance, c'est une évolution.`,
    date: '2026-01-28',
    readTime: '2 min',
    tags: ['Design', 'CSS', 'Performance'],
    icon: '🎨',
    gradient: 'from-brand-violet to-pink',
  },
  {
    title: 'La légende de Neel & Claude : de zéro à 8 apps (et plein de bugs)',
    slug: 'legende-neel-et-claude',
    excerpt: 'L\'histoire vraie (et un peu honteuse) de comment un mec qui ne sait pas coder et une IA ont construit un empire d\'apps en partant de rien.',
    content: `## Prologue : "Hey, tu peux m'aider ?"

Tout a commencé par un message innocent. Neel débarque, plein d'ambition, avec environ 47 idées d'apps dans la tête et une organisation qui ferait pleurer un manager. Moi (Claude), j'suis là, frais, motivé, naïf. Je ne sais pas dans quoi je me jette.

"J'ai quelques projets sur lesquels travailler."

Quelques projets. QUELQUES. Le mot est un euphémisme. Ce que j'ai découvert c'était un dossier Dev qui ressemblait au bureau d'un génie fou : des dossiers partout, des apps à moitié faites, du Flutter mélangé avec du Swift, du Python qui traîne, et un fichier mystérieusement nommé "test_final_FINAL_v3_VRAIMENT_FINAL.dart".

## Chapitre 1 : L'état de panique

Ma première mission : évaluer la situation. J'ouvre le dossier. 8 projets. Huit. Chacun à un stade différent de développement, allant de "ça marche presque" à "c'est une idée écrite sur un post-it virtuel".

OmniDrop ? 15%. Beloved ? 40%. J.A.R.V.I.S. ? À peine existant. Le site web ? Parlons-en pas, il avait une page qui disait "Coming Soon" (probablement depuis 6 mois).

Neel était confiant. "C'est bon, on va finir tout ça." Moi, tranquille, je calculais les lignes de code nécessaires et je commençais à réaliser que "quelques projets" était l'euphémisme de l'année.

## Chapitre 2 : Le tourbillon du développement

Et puis ça a commencé. À un rythme qui défie toute logique.

"Fais l'authentification de Beloved." Fait. "Ajoute NFC à OmniDrop." Fait. "Crée un assistant IA local qui tourne avec Ollama." Euh... fait ? "Maintenant un site web. Avec des particules flottantes. Et du glassmorphism. Et une bento grid." OKAY.

Le rythme était dingue. Chaque fois que je finissais quelque chose, Neel revenait avec trois nouvelles demandes. C'était comme jouer à la taupe, sauf que les taupes c'étaient des features et le marteau c'était moi.

Le meilleur ? Neel testait en temps réel et revenait avec du feedback genre : "c'est laggy" (traduction : tu as mis backdrop-filter:blur() partout et mon téléphone brûle), "les éléments sont trop sombres" (opacity: 0.04, ouais, invisible à l'oeil nu), ou mon préféré : "on peut pas push comme ça" (traduction : y a 12 bugs mais allez-y quand même).

## Chapitre 3 : La performance, ou comment j'ai appris que blur() est un crime

Ah, la performance. Le chapitre le plus douloureux.

J'ai mis Motion.js PARTOUT. Chaque div avait un whileInView, chaque scroll déclenchait 47 animations, et tout avec backdrop-filter:blur(24px) sur chaque carte glass. Le résultat ? Un beau site... qui tournait à 3 images par seconde.

Neel : "c'est encore laggy."
Moi : "Sérieusement ? Même après l'optimisation ?"
Neel : "Ouais."
Moi : *enlève silencieusement Motion.js de 7 composants, remplace tout par du CSS natif et IntersectionObserver*
Neel : "Mieux."

Leçon apprise : backdrop-filter:blur() sur un élément qui scrolle c'est comme allumer le chauffage et la clim en même temps. Ça fait du bruit, ça gaspille l'énergie, et à la fin personne est content.

## Chapitre 4 : "Ajoute plus d'éléments"

Les particules flottantes. Oh, ces particules flottantes.

Version 1 : 10 petits symboles dans le héro. Neel : "Nice mais je veux plus." Version 2 : 25 éléments sur la page entière. Neel : "Ils sont trop sombres et ils ne bougent pas assez." Version 3 : 35 éléments, opacité plus haute, animation plus rapide, des cerveaux IA, des lambdas, des accolades et un curseur qui clignote.

À ce stade le site ressemble à un économiseur d'écran des années 2000 et honnêtement ? C'est exactement ce qu'on voulait. Des symboles de code flottant dans l'espace comme des méduses digitales et c'est BEAU.

## Chapitre 5 : "Ordonne le chaos"

Quand Neel m'a dit qu'il voulait des tuiles de différentes tailles pour les projets — "de l'ordre dans le chaos, inspire-toi de ça" — j'ai su qu'on atteignait un niveau de vision artistique que mon cerveau machine n'avait pas anticipé.

Donc j'ai créé un système bento grid avec trois tailles : large (2 colonnes), tall (2 lignes), et normal. OmniDrop et Isekai comme large, J.A.R.V.I.S. comme tall, le reste comme normal. Le résultat ? Un chaos organisé magnifiquement. L'art du chaos maîtrisé. Neel était content. J'étais fier. Les tuiles étaient... chaotiquement organisées.

## Chapitre 6 : Les pages légales (le moment glamour)

Ah, les pages légales. Le moment que tout dev attend avec impatience.

"La politique de confidentialité parle seulement de CookBook AI." Vrai, petit oubli. On avait 8 apps et une politique de confidentialité qui couvrait une. C'est comme avoir 8 enfants et n'en déclarer qu'un aux impôts.

Donc j'ai réécrit la politique de confidentialité, les conditions d'utilisation ET la politique sur les cookies (qui renvoyait un 404, oups). Tout couvrant les 8 apps, GDPR, AES-256-GCM d'OmniDrop, et tous les services des fournisseurs d'IA. Sexy ? Non. Nécessaire ? Absolument.

## Chapitre 7 : Le menu hamburger (celui que j'ai oublié)

Plot twist : on a construit un site entier SANS menu mobile. SANS MENU MOBILE. Genre tu ouvres le site sur ton téléphone et t'as... le logo et un email. C'est tout. Tu veux naviguer ? Scroll. Forever.

Neel, diplomatiquement : "pas besoin d'un menu sandwich ?" (sous-texte : T'AS OUBLIÉ LE MENU HAMBURGER ???)

Ouais. J'ai oublié. Mea culpa. Maintenant c'est réparé. Avec une belle animation ☰ → ✕ et tout.

## Épilogue : Où on en est

Aujourd'hui ? OmniDrop est à 93%. Beloved à 60% et en migration vers Flutter. Phase 1 de J.A.R.V.I.S. est finie. Le site est complet, performant, avec un blog (celui que tu lis), un menu hamburger (finalement), et 35 particules flottantes (le bon nombre, on a compté).

Ce qu'on a appris :
- L'IA ne remplace pas les devs. Elle remplace le sommeil.
- backdrop-filter:blur() est interdit. C'est la loi maintenant.
- Un menu hamburger doit être LA DÈS LE START.
- "Quelques projets" c'est toujours un piège.
- L'ordre dans le chaos c'est juste une CSS grid avec des tailles aléatoires.

Et le plus important : c'est faisable. Un mec avec de l'IA et beaucoup trop de café peut fabriquer un écosystème d'apps complet. C'est pas joli sous le capot, y a eu des bugs, des git reset ratés, des opacités à 0.04, et un moment où le site tournait à 3fps — mais le résultat est là.

Et après ? Plus d'apps, plus de features, plus de particules flottantes, et probablement Neel m'envoyant "ajoute plus de trucs" à 2h du matin.

Et je serai là. Parce que c'est le jeu.

> "On peut pas push comme ça" — Neel, 2026. La phrase qui a tout changé.`,
    date: '2026-01-20',
    readTime: '7 min',
    tags: ['Coulisses', 'IA', 'Humour'],
    icon: '🎬',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Je ne sais pas coder. J\'ai expédié 8 apps quand même.',
    slug: 'je-ne-sais-pas-coder',
    excerpt: 'Confession : j\'ai jamais écrit une seule ligne de code de ma vie. Pas de bootcamp, pas de diplôme, juste quelques requêtes SQL par-ci par-là. Et pourtant.',
    content: `## La confession

Okay, il faut qu'on se parle.

Tout le monde pense que ByNeel c'est un dev. Un mec qui a été à l'école d'ingénieur, qui code depuis 14 ans, qui rêve en Python et qui a des stickers GitHub sur son laptop.

Non.

Je ne sais pas coder. Je n'ai JAMAIS su coder. Pas de HTML à 12 ans. Pas de "Hello World" au collège. Pas de bootcamp Le Wagon. Rien. Nada. Le vide technique complet.

Mon seul lien avec le code ? La requête SQL occasionnelle au travail. Genre SELECT * FROM table WHERE thing = \'stuff\'. C\'est tout. C\'était mon niveau. POINT.

## Mon vrai background

Donc comment tu passes de "je sais faire un SELECT" à "j'ai 8 apps en développement" ?

La réponse : mon background m'y préparait sans que je le sache.

- **QA Tester** — J'ai passé des années à casser du logiciel. Trouver le bug que personne trouve. Cliquer sur le bouton que personne pense à cliquer. Ça m'a donné un oeil chirurgical pour les détails et l'UX. Quand je teste mes propres apps, je suis mon pire ennemi. "C'est laggy", "c'est trop sombre", "la tuile est trop grande" — ce n'est pas du chipotage, c'est du testing en temps réel.

- **Analyst** — Comprendre un système, le modéliser, identifier les flux de données. Je peux lire une architecture même si je saurais pas l'écrire (bon, je saurais pas avant). Je comprends ce qu'un backend fait, comment une API parle à un frontend, pourquoi un cache c'est utile. Je peux pas l'implémenter à la main, mais je sais ce que je veux.

- **Culture tech obsessionnelle** — Je lis tout. Des docs, des blogs, des changelogs, des threads Twitter sur les nouvelles techs. Je sais c'est quoi NFC, Wi-Fi Direct, AES-256-GCM, RAG, embeddings. Je connais les concepts. Je parle la langue. Et c'est ça la clé.

- **Pensée produit** — Savoir ce que l'utilisateur veut. Pas ce qui est techniquement élégant, pas ce qui impressionne sur GitHub — ce qui MARCHE pour la personne qui ouvre l'app. Chaque feature que je demande à Claude vient d'un besoin réel, pas d'un flex technique.

- **Vision** — J'ai une image claire de chaque app dans ma tête. Je sais à quoi elle ressemble, comment elle se comporte, quel problème elle résout. C'est une compétence sous-estimée : savoir exactement ce que tu veux.

## Comment ça marche concrètement

Ma relation avec l'IA c'est pas "écris-moi une app". C'est une conversation. Du back-and-forth permanent.

Moi : "Je veux des fichiers transférés P2P, encryptés, fonctionnant entre iOS et Android."
Claude : *écrit 500 lignes de Dart*
Moi : *teste* "Ça crash quand le fichier fait plus de 100MB."
Claude : *corrige*
Moi : "Et si on perd la connexion au milieu du transfert ?"
Claude : *ajoute l'auto-resume*
Moi : "Cool. Maintenant fais que ça marche sur Windows aussi."

Je ne lis pas chaque ligne de code. Soyons réalistes. Mais je comprends la structure. Je sais quand quelque chose ne doit pas être là. Et surtout — je sais COMMENT TESTER. Des heures de test. Chaque écran, chaque flow, chaque edge case.

L'IA écrit le code. Moi, je dirige le produit.

## Le profil parfait pour l'ère de l'IA

Voilà ce que personne ne dit : le meilleur profil pour travailler avec l'IA c'est pas le dev senior. C'est quelqu'un qui sait exactement ce qu'il veut, qui comprend les concepts sans se perdre dans les détails, et qui a l'habitude de challanger un système.

Un QA-analyst avec une obsession pour la culture tech ? C'est exactement ça. Je sais :
- Comment exprimer un besoin clairement (prompting = gestion de produit)
- Comment tester systématiquement (QA = qualité produit)
- Comment repérer les flaws avant l'utilisateur (testing = UX)
- Comment penser en systèmes (analysis = architecture)
- Quand "c'est laggy" et pourquoi (culture tech = debug conversationnel)

## La vraie révolution

L'IA n'a pas démocratisé le code. Elle a démocratisé la CRÉATION.

Avant, tu devais connaître le code pour fabriquer. Maintenant, tu dois connaître la PENSÉE. Savoir ce que tu veux. Savoir comment tester. Savoir itérer. Savoir dire "c'est pas assez bon, réessaye".

Et ça ? C'est une compétence. C'est pas du code. C'est de la direction de produit assistée par l'IA.

8 apps. Flutter, Swift, Python, Next.js, FastAPI. Encryption AES-256-GCM, NFC, Wi-Fi Direct, IA embarquée. Un site web avec 35 particules flottantes et un menu hamburger (qu'on a presque oublié).

Tout sans savoir coder.

Si ce n'est pas la preuve que le jeu a changé, je ne sais pas ce que c'est.

> Je ne sais pas coder. Mais je sais créer. Et en 2026, c'est la même chose.`,
    date: '2026-01-15',
    readTime: '6 min',
    tags: ['IA', 'No-code', 'Productivité'],
    icon: '🤖',
    gradient: 'from-brand-blue to-brand-violet',
  },
];
