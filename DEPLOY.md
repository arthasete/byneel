# Procédure de déploiement — byneel.com

## Prérequis (une seule fois)

```bash
npm install -g wrangler
npx wrangler login
```
Cela ouvre le navigateur pour se connecter à Cloudflare.

---

## Déployer le site

Depuis le dossier `byneel-website`, lancer ces 2 commandes :

```bash
npm run build
npx wrangler deploy
```

C'est tout. Le site sera mis à jour sur `https://byneel.byneel.workers.dev` et `byneel.com`.

---

## Ce que font ces commandes

1. `npm run build` — Compile le site Next.js en fichiers statiques dans le dossier `out/`
2. `npx wrangler deploy` — Upload les fichiers sur Cloudflare Workers et active le déploiement

---

## Fichier de config important : wrangler.json

Ce fichier à la racine de `byneel-website` dit à Cloudflare où trouver les fichiers :

```json
{
  "name": "byneel",
  "compatibility_date": "2026-02-26",
  "assets": {
    "directory": "./out"
  }
}
```

Ne pas supprimer ce fichier, sinon Cloudflare ne saura pas quoi servir.

---

## Workflow complet (modifier + déployer)

```bash
# 1. Faire les modifications dans le code

# 2. Tester en local (optionnel)
npm run dev
# Ouvrir http://localhost:3000 pour vérifier

# 3. Commit et push sur GitHub
git add -A
git commit -m "description des changements"
git push

# 4. Déployer sur Cloudflare
npm run build
npx wrangler deploy
```

---

## En cas de problème

### "Not logged in"
```bash
npx wrangler login
```

### Le site ne se met pas à jour
- Vider le cache du navigateur (Cmd + Shift + R sur Mac)
- Ou ouvrir en navigation privée pour vérifier

### Erreur de build
- Vérifier les erreurs TypeScript : `npx tsc --noEmit`
- Vérifier que `next.config.ts` contient `output: 'export'`

### La branche principale
Tout le code est sur la branche `main`. C'est cette branche qui doit être déployée.

---

## Infos utiles

- **URL Workers** : https://byneel.byneel.workers.dev
- **URL custom** : https://byneel.com
- **Dashboard Cloudflare** : https://dash.cloudflare.com → Workers & Pages → byneel
- **Hébergement du code** : GitHub
- **Framework** : Next.js (export statique)
- **Branche** : main
