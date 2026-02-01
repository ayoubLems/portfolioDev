# Analyse du projet portfolioDev

**Date d'analyse :** 1er février 2026  
**Projet :** portfolioDev — Portfolio personnel (React)

---

## 1. Lien avec GitHub

### ✅ Oui, le projet est lié à un dépôt GitHub

| Élément | Valeur |
|--------|--------|
| **Dépôt distant (origin)** | `https://github.com/ayoubLems/portfolioDev.git` |
| **Propriétaire** | ayoubLems (Ayoub Lemsoudi) |
| **Nom du dépôt** | portfolioDev |
| **URL publique** | https://github.com/ayoubLems/portfolioDev |

### Déploiement GitHub Pages

- **URL du site déployé :** https://ayoublems.github.io/portfolioDev  
- **Méthode :** package `gh-pages` (script `npm run deploy`)  
- **Commande :** `predeploy` lance le build, puis `deploy` pousse le dossier `build/` sur la branche `gh-pages`  
- **Cache de déploiement :** présent dans `node_modules/.cache/gh-pages/` (référence au dépôt GitHub)

---

## 2. Intégrations GitHub dans le projet

### Données GitHub utilisées

- **API GitHub GraphQL** (via `fetch.js`) :
  - Récupération du profil utilisateur (nom, bio, avatar, localisation)
  - Récupération des 6 dépôts épinglés (nom, description, étoiles, langage, etc.)
  - Données écrites dans `public/profile.json` au moment du build

- **Variables d'environnement** (voir `env.example`) :
  - `REACT_APP_GITHUB_TOKEN` : token d’accès GitHub (requis pour l’API GraphQL)
  - `GITHUB_USERNAME` : nom d’utilisateur GitHub (ex. ayoubLems)
  - `USE_GITHUB_DATA` : `"true"` pour activer la récupération des données GitHub

### Liens GitHub dans le contenu

- **Profil :** https://github.com/ayoubLems  
- **Projets référencés :**
  - https://github.com/ayoubLems/linkedin-bot  
  - https://github.com/ayoubLems/simulation-propagation-feu-foret  
- **Portfolio en ligne :** https://ayoublems.github.io/portfolioDev/

---

## 3. Structure et technologies

### Stack technique

- **Framework :** React 16  
- **Build :** Create React App (react-scripts 5)  
- **Styles :** SASS/SCSS  
- **Dépendances notables :** react-reveal, lottie-react, react-headroom, gh-pages, dotenv  

### Structure du projet

```
portfolioDev/
├── public/          # Assets statiques, index.html, profile.json (généré)
├── src/
│   ├── components/  # Composants réutilisables (cards, footer, header, etc.)
│   ├── containers/  # Pages / sections (Greeting, Projects, Contact, etc.)
│   ├── assets/      # Images, polices, Lottie
│   ├── portfolio.js # Données du portfolio (à personnaliser)
│   ├── App.js       # Point d’entrée React
│   └── ...
├── build/           # Sortie du build (déployée sur gh-pages)
├── fetch.js         # Script de récupération GitHub/Medium (exécuté avant build)
├── package.json     # homepage + scripts deploy
└── env.example      # Modèle pour .env (token GitHub, etc.)
```

### Scripts principaux

- `npm run build` : exécute `fetch.js` puis `react-scripts build`  
- `npm run deploy` : build puis déploiement sur GitHub Pages  
- `npm start` : serveur de développement  

---

## 4. Incohérence repérée

Dans le **README.md**, les instructions de clonage mentionnent encore :

- Dépôt : `https://github.com/ayoubLems/developerFolio.git`  
- Dossier : `developerFolio`  

Alors que le dépôt actuel est **portfolioDev**. Il serait cohérent de mettre à jour le README avec :

- `git clone https://github.com/ayoubLems/portfolioDev.git`  
- `cd portfolioDev`  

---

## 5. Résumé

| Critère | Statut |
|---------|--------|
| Dépôt Git configuré | ✅ origin → github.com/ayoubLems/portfolioDev |
| Déploiement GitHub Pages | ✅ https://ayoublems.github.io/portfolioDev |
| Utilisation de l’API GitHub | ✅ Profil + dépôts épinglés (fetch.js) |
| Références GitHub dans le code | ✅ Liens profil et projets dans portfolio.js |

**Conclusion :** Le projet **portfolioDev** est bien un projet GitHub (ayoubLems/portfolioDev), déployé sur GitHub Pages et utilisant l’API GitHub pour afficher le profil et les dépôts sur le portfolio.
