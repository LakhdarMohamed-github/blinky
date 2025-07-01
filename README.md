# Blinky - Page de destination

Une page de destination moderne et responsive pour le service de livraison de nourriture marocain Blinky, développée avec ReactJS et inspirée du design de Done.ma.

## 🎯 Aperçu du projet

Blinky est une application de livraison de nourriture marocaine qui connecte les utilisateurs aux meilleurs restaurants locaux. Cette page de destination présente les services, les zones de livraison, les restaurants partenaires et permet aux nouveaux restaurants de s'inscrire.

## ✨ Fonctionnalités

### Sections principales
- **Header avec navigation** - Logo Blinky et menu de navigation fixe
- **Section Héro** - Présentation principale avec mockup d'application
- **Explication des services** - Description des services de livraison
- **Restaurants partenaires** - Galerie des restaurants avec filtres par catégorie
- **Zones de livraison** - Carte interactive des villes couvertes
- **Promotion de l'application** - Incitation au téléchargement avec captures d'écran
- **Formulaire d'inscription** - Processus en 3 étapes pour les nouveaux restaurants
- **FAQ** - Questions fréquemment posées avec filtres par catégorie
- **Footer complet** - Liens, contact, réseaux sociaux et newsletter

### Caractéristiques techniques
- **Design responsive** - Optimisé pour mobile, tablette et desktop
- **Animations fluides** - Transitions et micro-interactions
- **Couleurs de marque** - Rouge (#e53e3e) et blanc comme couleurs principales
- **Typographie moderne** - Police Inter pour une lisibilité optimale
- **Accessibilité** - Respect des standards WCAG
- **Performance** - Optimisé pour un chargement rapide

## 🚀 Installation et utilisation

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [URL_DU_REPO]
cd blinky-landing

# Installer les dépendances
npm install
# ou
yarn install
```

### Développement
```bash
# Démarrer le serveur de développement
npm run dev
# ou
yarn dev

# L'application sera accessible sur http://localhost:5173
```

### Build de production
```bash
# Créer le build de production
npm run build
# ou
yarn build

# Les fichiers optimisés seront dans le dossier dist/
```

### Aperçu du build
```bash
# Prévisualiser le build de production
npm run preview
# ou
yarn preview
```

## 📁 Structure du projet

```
blinky-landing/
├── public/                 # Fichiers statiques
├── src/
│   ├── assets/            # Images et ressources
│   │   └── blinky-logo.png
│   ├── components/        # Composants React
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ServiceExplanation.jsx
│   │   ├── RestaurantPartners.jsx
│   │   ├── DeliveryZones.jsx
│   │   ├── AppPromotion.jsx
│   │   ├── RestaurantSignUpForm.jsx
│   │   ├── FAQ.jsx
│   │   └── Footer.jsx
│   ├── App.jsx            # Composant principal
│   ├── App.css            # Styles globaux
│   ├── index.css          # Styles de base et animations
│   └── main.jsx           # Point d'entrée
├── index.html             # Template HTML
├── package.json           # Dépendances et scripts
└── vite.config.js         # Configuration Vite
```

## 🎨 Guide de style

### Couleurs
- **Rouge principal** : `#e53e3e`
- **Rouge secondaire** : `#c53030`
- **Rouge clair** : `#fed7d7`
- **Blanc** : `#ffffff`
- **Gris** : Palette de `#f7fafc` à `#1a202c`

### Typographie
- **Police principale** : Inter
- **Tailles** : De 0.75rem à 3.5rem
- **Poids** : 300 à 900

### Animations
- **Durées** : 0.15s (rapide), 0.3s (normal), 0.5s (lent)
- **Courbes** : ease-in-out pour la plupart des transitions
- **Effets** : fadeInUp, float, hover-lift, etc.

## 🔧 Intégration des APIs

Le code est structuré pour faciliter l'intégration future avec des APIs backend :

### Points d'intégration prévus

1. **Authentification utilisateur**
   ```javascript
   // Dans Header.jsx
   const handleLogin = async (credentials) => {
     const response = await fetch('/api/auth/login', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(credentials)
     });
     return response.json();
   };
   ```

2. **Liste des restaurants**
   ```javascript
   // Dans RestaurantPartners.jsx
   const fetchRestaurants = async (category = 'tous') => {
     const response = await fetch(`/api/restaurants?category=${category}`);
     return response.json();
   };
   ```

3. **Vérification des zones de livraison**
   ```javascript
   // Dans DeliveryZones.jsx
   const checkDeliveryZone = async (address) => {
     const response = await fetch('/api/delivery/check', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ address })
     });
     return response.json();
   };
   ```

4. **Inscription des restaurants**
   ```javascript
   // Dans RestaurantSignUpForm.jsx
   const submitRestaurantApplication = async (formData) => {
     const response = await fetch('/api/restaurants/apply', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData)
     });
     return response.json();
   };
   ```

5. **Newsletter**
   ```javascript
   // Dans Footer.jsx
   const subscribeNewsletter = async (email) => {
     const response = await fetch('/api/newsletter/subscribe', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ email })
     });
     return response.json();
   };
   ```

### Configuration des variables d'environnement

Créer un fichier `.env` à la racine du projet :

```env
VITE_API_BASE_URL=https://api.blinky.ma
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
VITE_ANALYTICS_ID=your_analytics_id
```

## 📱 Responsive Design

Le design s'adapte automatiquement aux différentes tailles d'écran :

- **Mobile** : < 768px - Layout en colonne unique
- **Tablette** : 768px - 1024px - Layout adapté
- **Desktop** : > 1024px - Layout complet

### Points de rupture
```css
/* Mobile */
@media (max-width: 768px) { ... }

/* Tablette */
@media (max-width: 1024px) { ... }

/* Desktop large */
@media (min-width: 1200px) { ... }
```

## 🔍 SEO et Performance

### Optimisations incluses
- Meta tags optimisés
- Images optimisées et lazy loading
- Code splitting automatique avec Vite
- Compression des assets
- Cache des ressources statiques

### Recommandations pour la production
1. Configurer un CDN pour les assets
2. Implémenter le cache côté serveur
3. Ajouter Google Analytics
4. Configurer les redirections HTTPS
5. Optimiser les images avec WebP

## 🧪 Tests

### Tests recommandés à implémenter
```bash
# Tests unitaires avec Vitest
npm install -D vitest @testing-library/react

# Tests e2e avec Playwright
npm install -D @playwright/test
```

## 🚀 Déploiement

### Options de déploiement

1. **Netlify** (recommandé)
   ```bash
   npm run build
   # Glisser-déposer le dossier dist/ sur Netlify
   ```

2. **Vercel**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

3. **Serveur traditionnel**
   ```bash
   npm run build
   # Copier le contenu de dist/ vers votre serveur web
   ```

## 📞 Support et Contact

Pour toute question ou assistance :
- **Email** : dev@blinky.ma
- **Documentation** : [docs.blinky.ma](https://docs.blinky.ma)
- **Support** : [support.blinky.ma](https://support.blinky.ma)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**Développé avec ❤️ pour Blinky - La livraison de nourriture marocaine réinventée**

