import React, { useState } from 'react';

const RestaurantPartners = () => {
  const [activeCategory, setActiveCategory] = useState('tous');

  const categories = [
    { id: 'tous', name: 'Tous', icon: '🍽️' },
    { id: 'traditionnel', name: 'Traditionnel', icon: '🥘' },
    { id: 'moderne', name: 'Moderne', icon: '🍔' },
    { id: 'patisserie', name: 'Pâtisserie', icon: '🧁' },
    { id: 'boissons', name: 'Boissons', icon: '🍵' }
  ];

  const restaurants = [
    {
      id: 1,
      name: 'Restaurant Al Fassia',
      category: 'traditionnel',
      cuisine: 'Cuisine marocaine authentique',
      rating: 4.8,
      deliveryTime: '25-35 min',
      image: '🏪',
      specialties: ['Tajine', 'Couscous', 'Pastilla'],
      priceRange: '$$',
      featured: true
    },
    {
      id: 2,
      name: 'Café Maure',
      category: 'boissons',
      cuisine: 'Thés et pâtisseries orientales',
      rating: 4.6,
      deliveryTime: '15-25 min',
      image: '☕',
      specialties: ['Thé à la menthe', 'Makroud', 'Chebakia'],
      priceRange: '$',
      featured: false
    },
    {
      id: 3,
      name: 'Burger Palace',
      category: 'moderne',
      cuisine: 'Burgers et fast-food',
      rating: 4.4,
      deliveryTime: '20-30 min',
      image: '🍔',
      specialties: ['Burger Royal', 'Frites maison', 'Milkshakes'],
      priceRange: '$$',
      featured: false
    },
    {
      id: 4,
      name: 'Pâtisserie Bennis',
      category: 'patisserie',
      cuisine: 'Pâtisseries marocaines et françaises',
      rating: 4.9,
      deliveryTime: '30-40 min',
      image: '🧁',
      specialties: ['Cornes de gazelle', 'Mille-feuille', 'Baklava'],
      priceRange: '$$',
      featured: true
    },
    {
      id: 5,
      name: 'Riad Cuisine',
      category: 'traditionnel',
      cuisine: 'Spécialités du palais',
      rating: 4.7,
      deliveryTime: '35-45 min',
      image: '🏛️',
      specialties: ['Méchoui', 'Rfissa', 'Harira'],
      priceRange: '$$$',
      featured: true
    },
    {
      id: 6,
      name: 'Pizza Corner',
      category: 'moderne',
      cuisine: 'Pizzas et cuisine italienne',
      rating: 4.3,
      deliveryTime: '25-35 min',
      image: '🍕',
      specialties: ['Pizza Margherita', 'Calzone', 'Tiramisu'],
      priceRange: '$$',
      featured: false
    }
  ];

  const filteredRestaurants = activeCategory === 'tous' 
    ? restaurants 
    : restaurants.filter(restaurant => restaurant.category === activeCategory);

  const featuredRestaurants = restaurants.filter(restaurant => restaurant.featured);

  return (
    <section className="section" id="partenaires">
      <div className="container">
        {/* En-tête de section */}
        <div style={styles.sectionHeader}>
          <h2 className="heading-lg text-center">
            Nos <span className="text-red">partenaires</span> restaurants
          </h2>
          <p className="text-lg text-center text-gray" style={styles.sectionSubtitle}>
            Découvrez une sélection soigneusement choisie de restaurants qui partagent notre passion 
            pour la qualité et l'authenticité de la cuisine marocaine.
          </p>
        </div>

        {/* Restaurants en vedette */}
        <div style={styles.featuredSection}>
          <h3 className="heading-md text-center" style={styles.featuredTitle}>
            ⭐ Restaurants en vedette
          </h3>
          <div className="grid grid-3" style={styles.featuredGrid}>
            {featuredRestaurants.map((restaurant) => (
              <div key={restaurant.id} style={styles.featuredCard}>
                <div style={styles.featuredBadge}>Vedette</div>
                <div style={styles.restaurantImage}>
                  <span style={styles.restaurantEmoji}>{restaurant.image}</span>
                </div>
                <div style={styles.restaurantInfo}>
                  <h4 style={styles.restaurantName}>{restaurant.name}</h4>
                  <p style={styles.restaurantCuisine}>{restaurant.cuisine}</p>
                  <div style={styles.restaurantMeta}>
                    <span style={styles.rating}>
                      ⭐ {restaurant.rating}
                    </span>
                    <span style={styles.deliveryTime}>
                      🚚 {restaurant.deliveryTime}
                    </span>
                    <span style={styles.priceRange}>
                      {restaurant.priceRange}
                    </span>
                  </div>
                  <div style={styles.specialties}>
                    {restaurant.specialties.slice(0, 2).map((specialty, idx) => (
                      <span key={idx} style={styles.specialtyTag}>
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filtres par catégorie */}
        <div style={styles.filtersSection}>
          <h3 className="heading-md text-center" style={styles.filtersTitle}>
            Explorez par catégorie
          </h3>
          <div style={styles.categoryFilters}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  ...styles.categoryButton,
                  ...(activeCategory === category.id ? styles.categoryButtonActive : {})
                }}
              >
                <span style={styles.categoryIcon}>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Liste des restaurants filtrés */}
        <div className="grid grid-2" style={styles.restaurantsGrid}>
          {filteredRestaurants.map((restaurant) => (
            <div key={restaurant.id} style={styles.restaurantCard}>
              <div style={styles.cardImage}>
                <span style={styles.cardEmoji}>{restaurant.image}</span>
                {restaurant.featured && (
                  <div style={styles.featuredBadgeSmall}>⭐</div>
                )}
              </div>
              <div style={styles.cardContent}>
                <h4 style={styles.cardTitle}>{restaurant.name}</h4>
                <p style={styles.cardCuisine}>{restaurant.cuisine}</p>
                <div style={styles.cardMeta}>
                  <span style={styles.cardRating}>
                    ⭐ {restaurant.rating}
                  </span>
                  <span style={styles.cardDelivery}>
                    🚚 {restaurant.deliveryTime}
                  </span>
                </div>
                <div style={styles.cardSpecialties}>
                  {restaurant.specialties.map((specialty, idx) => (
                    <span key={idx} style={styles.cardSpecialtyTag}>
                      {specialty}
                    </span>
                  ))}
                </div>
                <button className="btn btn-primary" style={styles.orderButton}>
                  Commander maintenant
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action pour les restaurants */}
        <div style={styles.partnerCta}>
          <div style={styles.partnerCtaCard}>
            <h3 className="heading-md text-white">
              Vous êtes restaurateur ?
            </h3>
            <p style={styles.partnerCtaDescription}>
              Rejoignez notre réseau de partenaires et développez votre activité avec Blinky. 
              Bénéficiez de notre plateforme moderne et de notre service de livraison professionnel.
            </p>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('inscription').scrollIntoView({ behavior: 'smooth' })}
            >
              Devenir partenaire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  sectionHeader: {
    marginBottom: '4rem',
    maxWidth: '800px',
    margin: '0 auto 4rem auto',
  },
  sectionSubtitle: {
    marginTop: '1rem',
  },
  featuredSection: {
    marginBottom: '5rem',
  },
  featuredTitle: {
    marginBottom: '3rem',
    color: 'var(--gray-900)',
  },
  featuredGrid: {
    gap: '2rem',
  },
  featuredCard: {
    backgroundColor: 'var(--primary-white)',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-lg)',
    position: 'relative',
    transition: 'transform 0.3s ease',
  },
  featuredBadge: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: '#FFD700',
    color: 'var(--gray-900)',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '600',
    zIndex: 2,
  },
  restaurantImage: {
    height: '120px',
    backgroundColor: 'var(--light-red)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantEmoji: {
    fontSize: '4rem',
  },
  restaurantInfo: {
    padding: '1.5rem',
  },
  restaurantName: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'var(--gray-900)',
    marginBottom: '0.5rem',
  },
  restaurantCuisine: {
    color: 'var(--gray-700)',
    marginBottom: '1rem',
  },
  restaurantMeta: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
    fontSize: '0.9rem',
  },
  rating: {
    color: 'var(--gray-700)',
  },
  deliveryTime: {
    color: 'var(--gray-700)',
  },
  priceRange: {
    color: 'var(--primary-red)',
    fontWeight: '600',
  },
  specialties: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  specialtyTag: {
    backgroundColor: 'var(--light-red)',
    color: 'var(--primary-red)',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '500',
  },
  filtersSection: {
    marginBottom: '3rem',
  },
  filtersTitle: {
    marginBottom: '2rem',
    color: 'var(--gray-900)',
  },
  categoryFilters: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  categoryButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    border: '2px solid var(--gray-300)',
    backgroundColor: 'var(--primary-white)',
    color: 'var(--gray-700)',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: '500',
  },
  categoryButtonActive: {
    backgroundColor: 'var(--primary-red)',
    borderColor: 'var(--primary-red)',
    color: 'var(--primary-white)',
  },
  categoryIcon: {
    fontSize: '1.2rem',
  },
  restaurantsGrid: {
    marginBottom: '4rem',
    gap: '2rem',
  },
  restaurantCard: {
    backgroundColor: 'var(--primary-white)',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: 'var(--shadow)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardImage: {
    height: '100px',
    backgroundColor: 'var(--gray-200)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  cardEmoji: {
    fontSize: '3rem',
  },
  featuredBadgeSmall: {
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
    fontSize: '1.2rem',
  },
  cardContent: {
    padding: '1.5rem',
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--gray-900)',
    marginBottom: '0.5rem',
  },
  cardCuisine: {
    color: 'var(--gray-700)',
    fontSize: '0.9rem',
    marginBottom: '1rem',
  },
  cardMeta: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
    fontSize: '0.85rem',
  },
  cardRating: {
    color: 'var(--gray-700)',
  },
  cardDelivery: {
    color: 'var(--gray-700)',
  },
  cardSpecialties: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
    marginBottom: '1.5rem',
  },
  cardSpecialtyTag: {
    backgroundColor: 'var(--gray-200)',
    color: 'var(--gray-700)',
    padding: '0.25rem 0.5rem',
    borderRadius: '8px',
    fontSize: '0.7rem',
  },
  orderButton: {
    width: '100%',
  },
  partnerCta: {
    marginTop: '4rem',
  },
  partnerCtaCard: {
    background: 'linear-gradient(135deg, var(--primary-red) 0%, var(--secondary-red) 100%)',
    padding: '3rem 2rem',
    borderRadius: '20px',
    textAlign: 'center',
    color: 'var(--primary-white)',
  },
  partnerCtaDescription: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    opacity: 0.9,
    maxWidth: '600px',
    margin: '0 auto 2rem auto',
  },
};

// Styles CSS pour les interactions
const partnerStyles = `
  .featured-card:hover,
  .restaurant-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
  }
  
  .category-button:hover {
    border-color: var(--primary-red) !important;
    color: var(--primary-red) !important;
  }
  
  @media (max-width: 768px) {
    .featured-grid,
    .restaurants-grid {
      grid-template-columns: 1fr !important;
    }
    
    .category-filters {
      justify-content: flex-start !important;
      overflow-x: auto !important;
      padding-bottom: 1rem !important;
    }
    
    .category-button {
      flex-shrink: 0 !important;
    }
    
    .restaurant-meta,
    .card-meta {
      flex-direction: column !important;
      gap: 0.5rem !important;
    }
  }
  
  @media (max-width: 480px) {
    .featured-grid {
      grid-template-columns: 1fr !important;
    }
    
    .card-specialties,
    .specialties {
      justify-content: center !important;
    }
  }
`;

// Injecter les styles CSS
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = partnerStyles;
  document.head.appendChild(styleSheet);
}

export default RestaurantPartners;

