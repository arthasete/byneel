# byneel.com — Site web byNeel

Site statique HTML pur — hébergé sur Cloudflare Pages.

## Structure

```
index.html    — Page d'accueil
privacy.html  — Politique de confidentialité
terms.html    — Conditions d'utilisation
```

## Déploiement

Cloudflare Pages connecté au repo GitHub `arthasete/byneel`.
Tout push sur `main` déclenche un déploiement automatique.

Settings Cloudflare Pages :
- Framework preset : None
- Build command : (vide)
- Build output directory : `/`

## TODO

- [ ] **Bilingue FR / EN** — ajouter un switch langue (FR par défaut, EN pour le worldwide). Option simple : deux versions de chaque page (`index.fr.html` / `index.en.html`) avec redirect selon le navigateur, ou un petit script JS qui swap le contenu.
- [ ] **Animations** — ajouter des micro-animations à l'arrivée des sections (fade-in au scroll avec `IntersectionObserver`), hover sur les cartes app, transition douce sur le CTA.
- [ ] **Page app CookBook AI** — page dédiée avec screenshots, description complète, liens App Store / Google Play (à faire quand l'app est soumise).
- [ ] **Vrai logo byNeel** — remplacer le texte "byNeel" en nav par un vrai logo SVG.
- [ ] **Mettre à jour "Bientôt"** sur la carte CookBook AI quand l'app est disponible sur les stores (remplacer par les vrais liens App Store / Google Play).
- [ ] **"on" → "je"** dans le hero ("byNeel crée" → "Je crée") pour cohérence avec la section about.
