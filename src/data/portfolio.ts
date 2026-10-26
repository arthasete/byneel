export type Discipline =
  | 'apps'
  | 'ai'
  | 'games'
  | 'video'
  | 'images'
  | 'music'
  | 'architecture'
  | 'writing';

/** Display order of the disciplines in the portfolio filters */
export const disciplines: Discipline[] = ['apps', 'ai', 'games', 'video', 'images', 'music', 'architecture', 'writing'];

type Localized = { en: string; fr: string };

export interface PortfolioItem {
  id: string;
  discipline: Discipline;
  kind: 'video' | 'image';
  /** Path under /public */
  src: string;
  /** Poster image for videos */
  poster?: string;
  /** Wide items span two columns on large screens */
  wide?: boolean;
  title: Localized;
  caption: Localized;
  /** Related project slug, if any */
  project?: string;
}

export const portfolio: PortfolioItem[] = [
  {
    id: 'video-cookbook',
    discipline: 'video',
    kind: 'video',
    src: '/portfolio/video-cookbook-recette.mp4',
    poster: '/portfolio/poster-cookbook-recette.jpg',
    wide: true,
    title: { en: 'CookBook AI, told as a recipe', fr: 'CookBook AI, racontée comme une recette' },
    caption: {
      en: 'Motion design written in code, filmed on the real app. 20 s, 60 fps.',
      fr: 'Motion design écrit en code, filmé sur la vraie app. 20 s, 60 i/s.',
    },
    project: 'motionstudio',
  },
  {
    id: 'video-scolia',
    discipline: 'video',
    kind: 'video',
    src: '/portfolio/video-scolia-cahier.mp4',
    poster: '/portfolio/poster-scolia-cahier.jpg',
    title: { en: 'ScolIA, the notebook you no longer write in', fr: "ScolIA, le cahier qu'on n'écrit plus" },
    caption: {
      en: 'The old way on paper, then the iPad takes over. 20 s, 60 fps.',
      fr: "L'ancienne méthode sur papier, puis l'iPad prend le relais. 20 s, 60 i/s.",
    },
    project: 'motionstudio',
  },
  {
    id: 'video-2am',
    discipline: 'video',
    kind: 'video',
    src: '/portfolio/video-2am-idea.mp4',
    poster: '/portfolio/poster-2am-idea.jpg',
    title: { en: '2 AM Idea', fr: '2 AM Idea' },
    caption: {
      en: 'Kinetic typography with fully synthesized sound. 15 s, 60 fps.',
      fr: 'Typographie animée, son entièrement synthétisé. 15 s, 60 i/s.',
    },
    project: 'motionstudio',
  },
  {
    id: 'arch-reel',
    discipline: 'architecture',
    kind: 'image',
    src: '/portfolio/arch-plans3d-reel.webp',
    wide: true,
    title: { en: 'L’Escale, real-time render', fr: 'L’Escale, rendu temps réel' },
    caption: {
      en: 'The same model with materials, sky and an adjustable sun, in the browser.',
      fr: 'La même maquette avec matériaux, ciel et soleil réglable, dans le navigateur.',
    },
    project: 'plans3d',
  },
  {
    id: 'arch-dessin',
    discipline: 'architecture',
    kind: 'image',
    src: '/portfolio/arch-plans3d-dessin.webp',
    title: { en: 'Architect board', fr: "Planche d'architecte" },
    caption: {
      en: 'Plan, facades and section that draw themselves as they appear.',
      fr: 'Plan, façades et coupe qui se tracent à leur apparition.',
    },
    project: 'plans3d',
  },
  {
    id: 'arch-3d',
    discipline: 'architecture',
    kind: 'image',
    src: '/portfolio/arch-plans3d-3d.webp',
    title: { en: 'White 3D model', fr: 'Maquette 3D blanche' },
    caption: {
      en: 'The plan rises into a model you can orbit.',
      fr: 'Le plan monte en maquette que l’on fait tourner.',
    },
    project: 'plans3d',
  },
  {
    id: 'arch-accueil',
    discipline: 'architecture',
    kind: 'image',
    src: '/portfolio/arch-plans3d-accueil.webp',
    title: { en: 'Plans3D, home page', fr: 'Plans3D, accueil' },
    caption: {
      en: '“See your house before it exists.”',
      fr: '« Voyez votre maison avant qu’elle existe. »',
    },
    project: 'plans3d',
  },
  {
    id: 'img-contemporaine',
    discipline: 'images',
    kind: 'image',
    src: '/portfolio/img-plans3d-ambiance-contemporaine.webp',
    title: { en: 'Contemporary', fr: 'Contemporaine' },
    caption: {
      en: 'AI-generated mood image for the Plans3D style picker.',
      fr: 'Ambiance générée par IA pour le choix de style de Plans3D.',
    },
    project: 'plans3d',
  },
  {
    id: 'img-patio',
    discipline: 'images',
    kind: 'image',
    src: '/portfolio/img-plans3d-ambiance-patio.webp',
    title: { en: 'Patio house', fr: 'Maison à patio' },
    caption: {
      en: 'AI-generated mood image for the Plans3D style picker.',
      fr: 'Ambiance générée par IA pour le choix de style de Plans3D.',
    },
    project: 'plans3d',
  },
  {
    id: 'img-bois',
    discipline: 'images',
    kind: 'image',
    src: '/portfolio/img-plans3d-ambiance-bois.webp',
    title: { en: 'Timber', fr: 'Bois' },
    caption: {
      en: 'AI-generated mood image for the Plans3D style picker.',
      fr: 'Ambiance générée par IA pour le choix de style de Plans3D.',
    },
    project: 'plans3d',
  },
  {
    id: 'app-cookbook-accueil',
    discipline: 'apps',
    kind: 'image',
    src: '/portfolio/app-cookbook-accueil.webp',
    wide: true,
    title: { en: 'CookBook AI on iPad', fr: 'CookBook AI sur iPad' },
    caption: { en: 'Tonight, this week, and everything in one glance.', fr: 'Ce soir, la semaine, et tout le reste en un coup d’œil.' },
    project: 'cookbook-ai',
  },
  {
    id: 'app-cookbook-planning',
    discipline: 'apps',
    kind: 'image',
    src: '/portfolio/app-cookbook-planning.webp',
    title: { en: 'CookBook AI, meal plan', fr: 'CookBook AI, planning' },
    caption: { en: 'Native iOS design, dark mode.', fr: 'Design iOS natif, mode sombre.' },
    project: 'cookbook-ai',
  },
  {
    id: 'app-cookbook-recette',
    discipline: 'apps',
    kind: 'image',
    src: '/portfolio/app-cookbook-recette.webp',
    title: { en: 'CookBook AI, recipe on iPad', fr: 'CookBook AI, recette sur iPad' },
    caption: { en: 'Imported from a link, ready to cook.', fr: 'Importée depuis un lien, prête à cuisiner.' },
    project: 'cookbook-ai',
  },
  {
    id: 'app-cookbook-courses',
    discipline: 'apps',
    kind: 'image',
    src: '/portfolio/app-cookbook-courses.webp',
    title: { en: 'CookBook AI, shopping list', fr: 'CookBook AI, liste de courses' },
    caption: {
      en: 'Synced with the plan, sorted by aisle.',
      fr: 'Synchronisée avec le planning, rangée par rayon.',
    },
    project: 'cookbook-ai',
  },
  {
    id: 'app-scolia-aujourdhui',
    discipline: 'apps',
    kind: 'image',
    src: '/portfolio/app-scolia-aujourdhui.webp',
    title: { en: 'ScolIA, today', fr: 'ScolIA, aujourd’hui' },
    caption: { en: 'The day’s lessons and mission, with Lumi the mascot.', fr: 'Les leçons et la mission du jour, avec Lumi la mascotte.' },
    project: 'scolia',
  },
  {
    id: 'app-scolia-fractions',
    discipline: 'apps',
    kind: 'image',
    src: '/portfolio/app-scolia-fractions.webp',
    title: { en: 'ScolIA, a transfer challenge', fr: 'ScolIA, un défi de transfert' },
    caption: {
      en: 'Fractions used in a new situation. No writing, only touch.',
      fr: "Les fractions dans une situation nouvelle. Pas d'écriture, que du toucher.",
    },
    project: 'scolia',
  },
  {
    id: 'ai-aion2-conseiller',
    discipline: 'ai',
    kind: 'image',
    src: '/portfolio/tool-aion2-conseiller.webp',
    title: { en: 'AION 2 Companion, advisor', fr: 'AION 2 Companion, conseiller' },
    caption: {
      en: 'A session plan built from the official public API.',
      fr: "Un programme de session construit depuis l'API publique officielle.",
    },
    project: 'aion2-companion',
  },
  {
    id: 'ai-aion2-daevanion',
    discipline: 'ai',
    kind: 'image',
    src: '/portfolio/tool-aion2-daevanion.webp',
    title: { en: 'Daevanion boards', fr: 'Plateaux Daevanion' },
    caption: {
      en: 'The recommended path drawn on each board.',
      fr: 'Le chemin conseillé dessiné sur chaque plateau.',
    },
    project: 'aion2-companion',
  },
  {
    id: 'game-bonne-etoile',
    discipline: 'games',
    kind: 'image',
    src: '/portfolio/icon-bonne-etoile.webp',
    title: { en: 'Bonne Étoile', fr: 'Bonne Étoile' },
    caption: {
      en: 'Text RPG for iPhone with an on-device AI game master.',
      fr: 'JDR textuel pour iPhone avec un MJ IA embarqué.',
    },
    project: 'bonne-etoile',
  },
];
