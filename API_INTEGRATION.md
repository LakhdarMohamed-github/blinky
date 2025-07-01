# Guide d'intégration des APIs - Blinky

Ce document détaille comment intégrer les APIs backend avec l'interface frontend de Blinky.

## 🔗 Points d'intégration principaux

### 1. Authentification et gestion des utilisateurs

#### Endpoints requis
```
POST /api/auth/login
POST /api/auth/register
POST /api/auth/logout
GET  /api/auth/profile
PUT  /api/auth/profile
```

#### Intégration dans Header.jsx
```javascript
// Service d'authentification
class AuthService {
  static async login(email, password) {
    const response = await fetch(`${process.env.VITE_API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    if (!response.ok) {
      throw new Error('Erreur de connexion');
    }
    
    const data = await response.json();
    localStorage.setItem('token', data.token);
    return data;
  }
  
  static async logout() {
    localStorage.removeItem('token');
    // Optionnel: appel API pour invalider le token côté serveur
  }
  
  static getToken() {
    return localStorage.getItem('token');
  }
  
  static isAuthenticated() {
    return !!this.getToken();
  }
}
```

### 2. Gestion des restaurants

#### Endpoints requis
```
GET    /api/restaurants                    # Liste des restaurants
GET    /api/restaurants/:id               # Détails d'un restaurant
GET    /api/restaurants/categories        # Catégories disponibles
POST   /api/restaurants/apply             # Inscription nouveau restaurant
PUT    /api/restaurants/:id               # Mise à jour restaurant
DELETE /api/restaurants/:id               # Suppression restaurant
```

#### Intégration dans RestaurantPartners.jsx
```javascript
// Service des restaurants
class RestaurantService {
  static async getRestaurants(filters = {}) {
    const params = new URLSearchParams();
    
    if (filters.category && filters.category !== 'tous') {
      params.append('category', filters.category);
    }
    if (filters.city) {
      params.append('city', filters.city);
    }
    if (filters.featured) {
      params.append('featured', 'true');
    }
    
    const response = await fetch(
      `${process.env.VITE_API_BASE_URL}/api/restaurants?${params}`
    );
    
    if (!response.ok) {
      throw new Error('Erreur lors du chargement des restaurants');
    }
    
    return response.json();
  }
  
  static async getCategories() {
    const response = await fetch(
      `${process.env.VITE_API_BASE_URL}/api/restaurants/categories`
    );
    return response.json();
  }
}

// Utilisation dans le composant
const RestaurantPartners = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [restaurantsData, categoriesData] = await Promise.all([
          RestaurantService.getRestaurants(),
          RestaurantService.getCategories()
        ]);
        
        setRestaurants(restaurantsData);
        setCategories(categoriesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);
  
  // Reste du composant...
};
```

### 3. Zones de livraison

#### Endpoints requis
```
GET  /api/delivery/zones                  # Liste des zones de livraison
POST /api/delivery/check                  # Vérifier si une adresse est couverte
GET  /api/delivery/cities                 # Villes disponibles
```

#### Intégration dans DeliveryZones.jsx
```javascript
// Service de livraison
class DeliveryService {
  static async checkAddress(address) {
    const response = await fetch(
      `${process.env.VITE_API_BASE_URL}/api/delivery/check`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address }),
      }
    );
    
    if (!response.ok) {
      throw new Error('Erreur lors de la vérification');
    }
    
    return response.json();
  }
  
  static async getCities() {
    const response = await fetch(
      `${process.env.VITE_API_BASE_URL}/api/delivery/cities`
    );
    return response.json();
  }
  
  static async getZonesByCity(cityId) {
    const response = await fetch(
      `${process.env.VITE_API_BASE_URL}/api/delivery/zones?city=${cityId}`
    );
    return response.json();
  }
}
```

### 4. Inscription des restaurants

#### Endpoints requis
```
POST /api/restaurants/apply              # Soumission candidature
GET  /api/restaurants/apply/:id          # Statut candidature
PUT  /api/restaurants/apply/:id          # Mise à jour candidature
```

#### Intégration dans RestaurantSignUpForm.jsx
```javascript
// Service d'inscription
class ApplicationService {
  static async submitApplication(formData) {
    const response = await fetch(
      `${process.env.VITE_API_BASE_URL}/api/restaurants/apply`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erreur lors de la soumission');
    }
    
    return response.json();
  }
  
  static async getApplicationStatus(applicationId) {
    const response = await fetch(
      `${process.env.VITE_API_BASE_URL}/api/restaurants/apply/${applicationId}`
    );
    return response.json();
  }
}

// Utilisation dans le composant
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    setSubmitting(true);
    const result = await ApplicationService.submitApplication(formData);
    
    setApplicationId(result.id);
    setIsSubmitted(true);
    
    // Optionnel: redirection ou notification
  } catch (error) {
    setError(error.message);
  } finally {
    setSubmitting(false);
  }
};
```

### 5. Newsletter et contact

#### Endpoints requis
```
POST /api/newsletter/subscribe           # Inscription newsletter
POST /api/contact/message               # Envoi message contact
GET  /api/faq                          # Questions fréquentes
```

#### Intégration dans Footer.jsx
```javascript
// Service newsletter
class NewsletterService {
  static async subscribe(email) {
    const response = await fetch(
      `${process.env.VITE_API_BASE_URL}/api/newsletter/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      }
    );
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erreur lors de l\'inscription');
    }
    
    return response.json();
  }
}
```

## 🔐 Gestion des erreurs et sécurité

### Intercepteur pour les requêtes
```javascript
// utils/api.js
class ApiClient {
  static baseURL = process.env.VITE_API_BASE_URL;
  
  static async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const token = AuthService.getToken();
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };
    
    try {
      const response = await fetch(url, config);
      
      // Gestion des erreurs HTTP
      if (!response.ok) {
        if (response.status === 401) {
          // Token expiré, rediriger vers login
          AuthService.logout();
          window.location.href = '/login';
          return;
        }
        
        const error = await response.json();
        throw new Error(error.message || `Erreur ${response.status}`);
      }
      
      return response.json();
    } catch (error) {
      // Gestion des erreurs réseau
      if (error.name === 'TypeError') {
        throw new Error('Erreur de connexion au serveur');
      }
      throw error;
    }
  }
  
  static get(endpoint, options = {}) {
    return this.request(endpoint, { method: 'GET', ...options });
  }
  
  static post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
  }
  
  static put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
  }
  
  static delete(endpoint, options = {}) {
    return this.request(endpoint, { method: 'DELETE', ...options });
  }
}
```

### Gestion des états de chargement
```javascript
// hooks/useApi.js
import { useState, useEffect } from 'react';

export const useApi = (apiCall, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiCall();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, dependencies);
  
  const refetch = () => {
    fetchData();
  };
  
  return { data, loading, error, refetch };
};

// Utilisation
const RestaurantList = () => {
  const { data: restaurants, loading, error } = useApi(
    () => RestaurantService.getRestaurants(),
    []
  );
  
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  
  return (
    <div>
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};
```

## 📊 Format des données attendues

### Restaurant
```typescript
interface Restaurant {
  id: string;
  name: string;
  category: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  image: string;
  specialties: string[];
  priceRange: '$' | '$$' | '$$$';
  featured: boolean;
  address: string;
  city: string;
  phone: string;
  email: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
```

### Zone de livraison
```typescript
interface DeliveryZone {
  id: string;
  name: string;
  city: string;
  isActive: boolean;
  deliveryFee: number;
  minimumOrder: number;
  estimatedTime: string;
  coordinates?: {
    lat: number;
    lng: number;
  }[];
}
```

### Candidature restaurant
```typescript
interface RestaurantApplication {
  id: string;
  restaurantName: string;
  ownerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  cuisineType: string;
  description?: string;
  hasDelivery: boolean;
  acceptsOnlinePayment: boolean;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
  reviewedAt?: string;
  notes?: string;
}
```

## 🚀 Déploiement et variables d'environnement

### Variables requises
```env
# API
VITE_API_BASE_URL=https://api.blinky.ma
VITE_API_TIMEOUT=10000

# Services externes
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
VITE_ANALYTICS_ID=your_analytics_id

# Configuration
VITE_APP_NAME=Blinky
VITE_APP_VERSION=1.0.0
VITE_ENVIRONMENT=production
```

### Configuration par environnement
```javascript
// config/environment.js
const config = {
  development: {
    apiBaseUrl: 'http://localhost:3000',
    debug: true,
  },
  staging: {
    apiBaseUrl: 'https://staging-api.blinky.ma',
    debug: false,
  },
  production: {
    apiBaseUrl: 'https://api.blinky.ma',
    debug: false,
  },
};

export default config[process.env.VITE_ENVIRONMENT || 'development'];
```

## 📝 Tests d'intégration recommandés

### Tests des services API
```javascript
// tests/services/RestaurantService.test.js
import { describe, it, expect, vi } from 'vitest';
import RestaurantService from '../services/RestaurantService';

describe('RestaurantService', () => {
  it('should fetch restaurants successfully', async () => {
    const mockRestaurants = [
      { id: '1', name: 'Restaurant Test', category: 'traditionnel' }
    ];
    
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockRestaurants),
    });
    
    const result = await RestaurantService.getRestaurants();
    expect(result).toEqual(mockRestaurants);
  });
  
  it('should handle API errors', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
    });
    
    await expect(RestaurantService.getRestaurants()).rejects.toThrow();
  });
});
```

## 🔄 Migration des données fictives

Pour remplacer les données fictives par les vraies données API :

1. **Identifier les données statiques** dans chaque composant
2. **Remplacer par des appels API** avec gestion d'état
3. **Ajouter la gestion des erreurs** et états de chargement
4. **Tester l'intégration** avec des données réelles
5. **Optimiser les performances** (cache, pagination, etc.)

---

Cette documentation doit être mise à jour au fur et à mesure du développement des APIs backend.

