'use client';

import { useMemo } from 'react';
import { useLanguage } from './LanguageContext';
import { projects } from '@/data/projects';
import { projectsFr } from '@/data/projects-fr';
import { posts } from '@/data/posts';
import { postsFr } from '@/data/posts-fr';

export function useProjects() {
  const { language } = useLanguage();
  return useMemo(() => (language === 'fr' ? projectsFr : projects), [language]);
}

export function usePosts() {
  const { language } = useLanguage();
  return useMemo(() => (language === 'fr' ? postsFr : posts), [language]);
}
