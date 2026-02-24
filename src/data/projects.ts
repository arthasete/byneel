export interface Project {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  featured: boolean;
  comingSoon?: boolean;
  gradient?: string;
}

export const projects: Project[] = [
  {
    title: 'OmniDrop',
    description: 'Transfert de fichiers P2P. Touchez, déposez, c\'est fait. Fonctionne entre tous les appareils, sans cloud.',
    icon: '📡',
    tags: ['Flutter', 'NFC', 'Wi-Fi Direct', 'Cross-platform'],
    featured: true,
    comingSoon: true,
    gradient: 'from-blue-500 to-violet-500',
  },
  {
    title: 'CookBook AI',
    description: 'Votre deuxième cerveau culinaire. Importez des recettes depuis n\'importe où, planifiez vos repas et créez votre livre de recettes personnalisé.',
    icon: '🍳',
    tags: ['iOS', 'Android', 'IA'],
    featured: false,
    comingSoon: true,
  },
];
