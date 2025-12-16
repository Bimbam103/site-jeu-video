# Déploiement GitHub Pages

## Instructions pour héberger le site sur GitHub Pages

### Étape 1 : Créer un Repository GitHub

1. Allez sur [GitHub](https://github.com) et connectez-vous
2. Cliquez sur le bouton **"New"** ou **"+"** pour créer un nouveau repository
3. Nommez votre repository (ex: `monster-hunter-festival`)
4. Choisissez **Public** (requis pour GitHub Pages gratuit)
5. Ne cochez PAS "Add a README file"
6. Cliquez sur **"Create repository"**

### Étape 2 : Initialiser Git et Pousser le Code

Ouvrez votre terminal dans le dossier du projet et exécutez les commandes suivantes :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit: Monster Hunter Festival website"

# Ajouter le repository distant (remplacer USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/USERNAME/monster-hunter-festival.git

# Pousser le code
git branch -M main
git push -u origin main
```

### Étape 3 : Activer GitHub Pages

1. Allez sur votre repository GitHub dans votre navigateur
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu latéral, cliquez sur **Pages**
4. Sous **"Source"**, sélectionnez :
   - Branch: `main`
   - Folder: `/ (root)`
5. Cliquez sur **Save**

### Étape 4 : Accéder à votre Site

Après quelques minutes, votre site sera disponible à l'adresse :

```
https://USERNAME.github.io/monster-hunter-festival/
```

Remplacez `USERNAME` par votre nom d'utilisateur GitHub.

---

## Alternative : Déploiement Rapide avec GitHub Desktop

Si vous préférez une interface graphique :

1. Téléchargez [GitHub Desktop](https://desktop.github.com/)
2. Ouvrez GitHub Desktop et connectez-vous
3. Cliquez sur **"File" → "Add Local Repository"**
4. Sélectionnez le dossier de votre projet
5. Cliquez sur **"Publish repository"**
6. Suivez l'étape 3 ci-dessus pour activer GitHub Pages

---

## Vérification du Déploiement

Une fois déployé, vérifiez que :

- ✅ Toutes les images s'affichent correctement
- ✅ Les liens de navigation fonctionnent
- ✅ Le menu burger fonctionne sur mobile
- ✅ Le formulaire est fonctionnel
- ✅ La FAQ s'ouvre et se ferme correctement
- ✅ Le site est responsive (testez sur mobile)

---

## Points Bonus Obtenus : +2 pts

En hébergeant votre site sur GitHub Pages, vous obtenez **+2 points** supplémentaires pour le barème de notation !

**Note finale potentielle : 20/20** 🎉
