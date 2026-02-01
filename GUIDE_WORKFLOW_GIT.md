# Guide étape par étape — Reprise du projet portfolioDev

Ce guide vous accompagne pour : connecter le repo à GitHub, mettre en place un workflow branches (main / dev / feature), nettoyer le repo, et redéployer sur GitHub Pages.

---

## Étape 0 — Interprétation du diagnostic (déjà fait)

### Ce que vous avez lancé
- `git status`  
- `git remote -v`  
- `git branch -vv`  
- `git log --oneline --decorate --graph --all --max-count=30`

### Comment interpréter le résultat

| Commande        | Résultat | Interprétation |
|-----------------|----------|----------------|
| **git status**  | "On branch main", "up to date with 'origin/main'" | ✅ Repo Git valide, branche `main` synchronisée avec `origin/main`. |
|                 | Modifications : .DS_Store, README.md, build/, node_modules/.cache/… | Fichiers modifiés ou non suivis ; **build/** et **node_modules/** sont bien pris en compte par Git (à nettoyer plus tard). |
| **git remote -v** | `origin` → `https://github.com/ayoubLems/portfolioDev.git` (fetch + push) | ✅ Le dépôt local est bien lié au repo GitHub **ayoubLems/portfolioDev**. |
| **git branch -vv** | `main` → `[origin/main]`, `gh-pages` local uniquement | ✅ `main` suit `origin/main`. Pas de branche `dev` pour l’instant. |
| **git log**      | Historique linéaire, `main` et `origin/main` au même commit | ✅ Pas de divergence local / distant. |

### Conclusion Étape 0
- **Oui**, le dossier est un repo Git.
- **Oui**, il est correctement lié à GitHub via `origin` (ayoubLems/portfolioDev).
- **À faire plus tard :** créer la branche `dev`, nettoyer le suivi de `node_modules/` et `build/`, et ajouter un `.gitignore`.

---

## Étape 1 — Connexion GitHub (vérification)

Votre cas correspond à : **remote existe et URL correcte**.

- **Cas A** (pas un repo git) : vous auriez eu "not a git repository". ❌ Ce n’est pas votre cas.
- **Cas B** (pas de remote) : `git remote -v` n’aurait rien affiché. ❌ Ce n’est pas votre cas.
- **Cas C** (mauvaise URL) : l’URL aurait été différente de `https://github.com/ayoubLems/portfolioDev.git`. ❌ Ce n’est pas votre cas.

**Action :** Aucune. La connexion au repo GitHub est correcte.

Si un jour vous deviez changer l’URL :
```bash
git remote set-url origin https://github.com/ayoubLems/portfolioDev.git
git remote -v   # vérification
```

---

## Étape 2 — Se mettre à jour et éviter les dégâts

### 2.1 Récupérer l’état du dépôt distant

À lancer dans le dossier du projet (par ex. `~/portfolioDev`) :

```bash
cd ~/portfolioDev
git fetch origin
```

**Résultat attendu :**  
- Soit rien de spécial (déjà à jour), soit des lignes du type `From https://github.com/ayoubLems/portfolioDev ...` avec des noms de branches.

**En cas d’erreur (ex. 403, 404) :**  
- Vérifier que vous avez les droits sur le repo (compte GitHub, accès réseau, éventuellement token si 2FA).

### 2.2 Comparer branches locales et distantes

```bash
git branch -vv
git log --oneline origin/main -3
git log --oneline main -3
```

**Interprétation :**
- Si `main` et `origin/main` pointent sur le même commit (ex. `1531155a`) → tout est aligné.
- Si `origin/main` a des commits que vous n’avez pas : faire plus tard `git pull origin main` (après avoir décidé quoi faire des changements locaux, voir Étape 2.3).

### 2.3 Que faire de vos changements locaux avant la suite ?

Vous avez des **modifications non commitées** (README, build, .DS_Store, etc.). Deux approches possibles :

**Option A — Tout garder et committer plus tard sur une branche dédiée (recommandé pour “safe”)**

- On ne touche pas à ces fichiers pour l’instant.
- On crée d’abord la branche `dev` à partir de `main` (état actuel du dernier commit, sans vos modifs).
- Ensuite vous pourrez soit :
  - créer une branche `feature/cleanup` (ou `feature/gitignore`), y ajouter vos changements + le nouveau `.gitignore` + le nettoyage `build/` et `node_modules/`, puis faire des PR,  
  - soit committer ces changements sur `dev` après création de `dev`.

**Option B — Mettre de côté les changements (stash), avancer, puis les réappliquer**

```bash
git stash push -u -m "WIP avant mise en place workflow"
git status   # doit être propre
```

Plus tard, après création de `dev` et d’une branche feature :

```bash
git checkout dev
git stash pop
```

**Recommandation :** Option A. On enchaîne avec la création de `dev` et des branches, puis on nettoie (`.gitignore` + arrêt du suivi de `build/` et `node_modules/`) dans une branche feature dédiée, et on valide par PR.

---

## Étape 3 — Mise en place des branches (main / dev / feature)

Principe : **main** = stable, **dev** = intégration, **feature/\*** = travail. PR : feature → dev, puis dev → main.

### 3.1 Partir d’un main à jour

```bash
cd ~/portfolioDev
git checkout main
git pull origin main
```

- Si "Already up to date" → OK.
- Si des commits sont récupérés → votre `main` local est à jour avec GitHub.
- S’il y a des conflits ou un message d’erreur, ne pas faire de `git push` et me copier la sortie.

### 3.2 Créer la branche `dev` et la pousser

```bash
git checkout -b dev
git push -u origin dev
```

**Résultat attendu :**  
- Création de la branche `dev` à partir de `main`.  
- Premier push : "Branch 'dev' set up to track remote branch 'dev' from 'origin'."

**Si `dev` existe déjà sur origin :**  
- `git checkout dev` puis `git pull origin dev` pour la mettre à jour.

### 3.3 Créer une branche feature (ex. pour le nettoyage)

```bash
git checkout dev
git checkout -b feature/gitignore-and-cleanup
```

Vous êtes maintenant sur `feature/gitignore-and-cleanup`. C’est sur cette branche qu’on ajoutera le `.gitignore` et qu’on retirera `node_modules/` et `build/` du suivi (Étape 4). Vous pourrez aussi y committer vos changements actuels (README, ANALYSE_PROJET.md, etc.) si vous le souhaitez.

### 3.4 Travailler et pousser la branche feature

Après avoir fait les modifications (Étape 4) :

```bash
git add .gitignore
# puis les autres fichiers que vous voulez versionner (pas node_modules ni build)
git status   # vérifier avant commit
git commit -m "chore: add .gitignore and stop tracking node_modules and build"
git push -u origin feature/gitignore-and-cleanup
```

### 3.5 Ouvrir une Pull Request feature → dev

1. Aller sur https://github.com/ayoubLems/portfolioDev.
2. Un bandeau peut proposer "Compare & pull request" pour la branche que vous venez de pousser.
3. Sinon : **Pull requests** → **New pull request**.
4. **Base :** `dev` — **Compare :** `feature/gitignore-and-cleanup`.
5. Titre / description, puis **Create pull request**.
6. Vérifier les changements, puis **Merge pull request** (merge dans `dev`).

### 3.6 Plus tard : PR dev → main

Quand `dev` est prête à être livrée en stable :

1. **Pull requests** → **New pull request**.
2. **Base :** `main` — **Compare :** `dev`.
3. Créer la PR, vérifier, merger.
4. En local (optionnel) :

```bash
git checkout main
git pull origin main
```

Votre workflow est alors en place : travail sur `feature/*` → PR vers `dev` → PR `dev` → `main`.

---

## Étape 4 — Nettoyage du repo (.gitignore, ne plus versionner node_modules et build)

### 4.1 Fichier `.gitignore`

Le projet n’a pas de `.gitignore` à la racine. Un fichier **`.gitignore`** a été créé à la racine du projet avec les entrées suivantes (adapté React + GitHub Pages) :

- `node_modules/`
- `build/`
- `.DS_Store`
- `.env`
- Fichiers de cache / logs / IDE

**Action de votre part :**  
Vérifier que le fichier `.gitignore` à la racine contient bien ces règles (il a été créé pour vous par le guide). Si vous préférez le créer vous-même, utilisez le contenu proposé dans la section suivante.

### 4.2 Contenu recommandé du `.gitignore`

Voir le fichier **`.gitignore`** à la racine du projet (créé automatiquement). Il doit au minimum contenir :

```
# Dependencies
node_modules/

# Build
build/

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# OS
.DS_Store

# Logs / cache
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

### 4.3 Arrêter de versionner `node_modules/` et `build/` (sans les supprimer du disque)

À faire **sur votre branche feature** (ex. `feature/gitignore-and-cleanup`), après avoir ajouté le `.gitignore` :

```bash
git checkout feature/gitignore-and-cleanup
git rm -r --cached node_modules
git rm -r --cached build
```

**Explication :**  
- `--cached` = retirer du suivi Git uniquement, **pas** supprimer les dossiers sur votre disque.  
- Vous gardez `node_modules/` et `build/` en local ; ils ne seront plus suivis par Git.

**Résultat attendu :**  
- Beaucoup de lignes "deleted: node_modules/..." et "deleted: build/...". C’est normal.

Ensuite :

```bash
git add .gitignore
git status
```

**Vérifier que :**  
- `.gitignore` est ajouté.  
- `node_modules/` et `build/` n’apparaissent plus comme "deleted" à committer une fois que vous avez fait `git add .gitignore` (ils sont "untracked" ou ignorés). Si des "deleted" restent, c’est qu’il faut bien les committer (ce qui enlève ces dossiers de l’historique futur).

Puis :

```bash
git commit -m "chore: add .gitignore and stop tracking node_modules and build"
git push origin feature/gitignore-and-cleanup
```

**Cas particuliers :**

- **Erreur "fatal: pathspec 'node_modules' did not match any files"**  
  → Soit `node_modules` n’était pas suivi (déjà ignoré ailleurs). Vérifier avec `git ls-files node_modules`. Si rien, ignorer cette étape pour `node_modules` et ne faire que `build/` si besoin.

- **Conflits ou refus de push**  
  → Faire un `git pull origin feature/gitignore-and-cleanup --rebase` (si vous êtes seul sur la branche), résoudre les conflits éventuels, puis `git push` à nouveau.

Après merge de la PR feature → dev, les prochains clones et les prochains pulls ne récupéreront plus `node_modules/` ni `build/` ; chaque développeur fera `npm install` et `npm run build` en local.

---

## Étape 5 — Déploiement GitHub Pages (React)

### 5.1 Outil utilisé dans ce projet

Dans **package.json** vous avez :

- `"homepage": "https://ayoublems.github.io/portfolioDev"`
- Scripts : `"predeploy": "npm run build"`, `"deploy": "gh-pages -d build"`

Donc la méthode est : **package `gh-pages`** qui pousse le contenu du dossier **build/** vers la branche **gh-pages** du repo.

### 5.2 Méthode standard recommandée

- **Code source :** sur `main` (et vous travaillez via `dev` + feature, puis vous mergez dans `main`).
- **Build :** généré localement avec `npm run build`.
- **Déploiement :** `npm run deploy` (ou `npx gh-pages -d build`) pousse **build/** vers la branche **gh-pages**.
- **GitHub Pages :** doit être configuré pour servir la branche **gh-pages** (racine ou `/`).

### 5.3 Vérifier la configuration GitHub Pages

1. Sur GitHub : **ayoubLems/portfolioDev** → **Settings** → **Pages** (menu gauche).
2. Section **Build and deployment** :
   - **Source :** "Deploy from a branch".
   - **Branch :** `gh-pages` — dossier `/ (root)`.
3. **Save** si vous avez changé quelque chose.

### 5.4 Déployer après vos modifications

Une fois votre branche mergée dans `main` (ou si vous déployez depuis `main` après merge) :

```bash
git checkout main
git pull origin main
npm install
npm run deploy
```

**Résultat attendu :**  
- Le script build puis pousse sur `origin gh-pages`.  
- Message du type "Published" ou équivalent.

**Si erreur d’authentification (403, etc.) :**  
- Vérifier vos identifiants GitHub (HTTPS ou token).  
- En SSH : vérifier que `git remote -v` pointe vers une URL SSH si vous utilisez une clé SSH.

### 5.5 Vérifier que le site fonctionne

- Attendre 1–2 minutes après le déploiement.
- Ouvrir : **https://ayoublems.github.io/portfolioDev/**
- Vérifier que la page s’affiche correctement (pas d’erreurs 404 pour les assets ; le `homepage` dans package.json gère le préfixe `/portfolioDev`).

Si la page est blanche ou les assets ne chargent pas : vérifier que dans **package.json** le champ **"homepage"** est bien `https://ayoublems.github.io/portfolioDev` (sans slash final si c’est ce qui est utilisé dans le build).

---

## Récapitulatif des commandes (ordre suggéré)

1. **Diagnostic (déjà fait)**  
   - `git status` ; `git remote -v` ; `git branch -vv` ; `git log --oneline --decorate --graph --all -30`

2. **Connexion GitHub**  
   - Rien à faire (origin déjà bon).

3. **Mise à jour**  
   - `git fetch origin`  
   - `git checkout main` ; `git pull origin main`

4. **Branches**  
   - `git checkout -b dev` ; `git push -u origin dev`  
   - `git checkout -b feature/gitignore-and-cleanup`

5. **Nettoyage**  
   - Vérifier/créer `.gitignore` (déjà créé à la racine).  
   - `git rm -r --cached node_modules build`  
   - `git add .gitignore` ; `git commit -m "chore: add .gitignore and stop tracking node_modules and build"`  
   - `git push -u origin feature/gitignore-and-cleanup`

6. **Workflow**  
   - PR feature → dev sur GitHub, merger.  
   - Plus tard : PR dev → main, merger.

7. **Déploiement**  
   - `git checkout main` ; `git pull origin main` ; `npm run deploy`  
   - Vérifier **Settings → Pages** (branche `gh-pages`).  
   - Ouvrir https://ayoublems.github.io/portfolioDev/

En suivant ce guide étape par étape, vous aurez un repo propre, un workflow main/dev/feature avec PR, et un déploiement GitHub Pages fonctionnel.
