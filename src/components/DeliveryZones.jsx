import React, { useState } from 'react';

const DeliveryZones = () => {
  const [selectedCity, setSelectedCity] = useState('casablanca');

  const cities = [
    {
      id: 'casablanca',
      name: 'Casablanca',
      emoji: '🏙️',
      population: '3.7M',
      restaurants: 150,
      avgDeliveryTime: '25 min',
      zones: [
        'Centre-ville', 'Maarif', 'Gauthier', 'Racine', 'Bourgogne',
        'Palmier', 'Anfa', 'Ain Diab', 'Sidi Belyout', 'Hay Hassani'
      ],
      featured: true
    },
    {
      id: 'rabat',
      name: 'Rabat',
      emoji: '🏛️',
      population: '1.8M',
      restaurants: 85,
      avgDeliveryTime: '22 min',
      zones: [
        'Agdal', 'Hassan', 'Hay Riad', 'Souissi', 'Océan',
        'Yacoub El Mansour', 'Temara', 'Salé Médina'
      ],
      featured: true
    },
    {
      id: 'marrakech',
      name: 'Marrakech',
      emoji: '🕌',
      population: '1.3M',
      restaurants: 120,
      avgDeliveryTime: '28 min',
      zones: [
        'Médina', 'Gueliz', 'Hivernage', 'Majorelle', 'Targa',
        'Daoudiate', 'Semlalia', 'Amerchich'
      ],
      featured: true
    },
    {
      id: 'fes',
      name: 'Fès',
      emoji: '🏺',
      population: '1.2M',
      restaurants: 65,
      avgDeliveryTime: '30 min',
      zones: [
        'Médina', 'Ville Nouvelle', 'Zouagha', 'Bensouda',
        'Narjiss', 'Atlas Fès', 'Saiss'
      ],
      featured: false
    },
    {
      id: 'tanger',
      name: 'Tanger',
      emoji: '⛵',
      population: '1.1M',
      restaurants: 55,
      avgDeliveryTime: '26 min',
      zones: [
        'Centre-ville', 'Malabata', 'Boukhalef', 'Gzenaya',
        'Médina', 'Charf', 'Mesnana'
      ],
      featured: false
    },
    {
      id: 'agadir',
      name: 'Agadir',
      emoji: '🏖️',
      population: '900K',
      restaurants: 45,
      avgDeliveryTime: '24 min',
      zones: [
        'Centre-ville', 'Talborjt', 'Hay Mohammadi', 'Secteur Touristique',
        'Anza', 'Tikiouine', 'Inezgane'
      ],
      featured: false
    }
  ];

  const selectedCityData = cities.find(city => city.id === selectedCity);

  const checkCoverage = () => {
    alert('Fonctionnalité de vérification de couverture - À intégrer avec l\'API de géolocalisation');
  };

  return (
    <section className="section section-alt" id="zones">
      <div className="container">
        {/* En-tête de section */}
        <div style={styles.sectionHeader}>
          <h2 className="heading-lg text-center">
            Nous livrons dans tout le <span className="text-red">Maroc</span>
          </h2>
          <p className="text-lg text-center text-gray" style={styles.sectionSubtitle}>
            Blinky étend progressivement sa couverture pour servir les principales villes marocaines. 
            Découvrez si votre zone est déjà couverte par nos services de livraison.
          </p>
        </div>

        {/* Vérificateur de zone */}
        <div style={styles.coverageChecker}>
          <div style={styles.checkerCard}>
            <h3 className="heading-sm text-center">
              🎯 Vérifiez votre zone de livraison
            </h3>
            <p style={styles.checkerDescription}>
              Entrez votre adresse pour savoir si nous livrons chez vous
            </p>
            <div style={styles.checkerForm}>
              <input
                type="text"
                placeholder="Entrez votre adresse (ex: Rue Mohammed V, Casablanca)"
                style={styles.addressInput}
              />
              <button 
                className="btn btn-primary"
                onClick={checkCoverage}
                style={styles.checkButton}
              >
                Vérifier
              </button>
            </div>
          </div>
        </div>

        {/* Statistiques globales */}
        <div style={styles.statsSection}>
          <div className="grid grid-4" style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={styles.statIcon}>🏙️</div>
              <div style={styles.statNumber}>6+</div>
              <div style={styles.statLabel}>Villes couvertes</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statIcon}>🍽️</div>
              <div style={styles.statNumber}>520+</div>
              <div style={styles.statLabel}>Restaurants partenaires</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statIcon}>🚚</div>
              <div style={styles.statNumber}>25 min</div>
              <div style={styles.statLabel}>Temps moyen de livraison</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statIcon}>📍</div>
              <div style={styles.statNumber}>50+</div>
              <div style={styles.statLabel}>Quartiers desservis</div>
            </div>
          </div>
        </div>

        {/* Sélecteur de villes */}
        <div style={styles.citySelector}>
          <h3 className="heading-md text-center" style={styles.citySelectorTitle}>
            Explorez nos zones de livraison
          </h3>
          <div style={styles.cityTabs}>
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => setSelectedCity(city.id)}
                style={{
                  ...styles.cityTab,
                  ...(selectedCity === city.id ? styles.cityTabActive : {})
                }}
              >
                <span style={styles.cityEmoji}>{city.emoji}</span>
                <span style={styles.cityName}>{city.name}</span>
                {city.featured && <span style={styles.featuredDot}>●</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Détails de la ville sélectionnée */}
        {selectedCityData && (
          <div style={styles.cityDetails}>
            <div style={styles.cityHeader}>
              <div style={styles.cityInfo}>
                <h3 className="heading-md">
                  {selectedCityData.emoji} {selectedCityData.name}
                  {selectedCityData.featured && (
                    <span style={styles.featuredBadge}>Ville principale</span>
                  )}
                </h3>
                <div style={styles.cityStats}>
                  <span style={styles.cityStat}>
                    👥 {selectedCityData.population} habitants
                  </span>
                  <span style={styles.cityStat}>
                    🍽️ {selectedCityData.restaurants} restaurants
                  </span>
                  <span style={styles.cityStat}>
                    ⏱️ {selectedCityData.avgDeliveryTime} en moyenne
                  </span>
                </div>
              </div>
            </div>

            <div style={styles.zonesGrid}>
              <h4 style={styles.zonesTitle}>Quartiers et zones desservies :</h4>
              <div className="grid grid-4" style={styles.zonesList}>
                {selectedCityData.zones.map((zone, index) => (
                  <div key={index} style={styles.zoneCard}>
                    <span style={styles.zoneIcon}>📍</span>
                    <span style={styles.zoneName}>{zone}</span>
                    <span style={styles.zoneStatus}>✅</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Expansion future */}
        <div style={styles.expansionSection}>
          <div style={styles.expansionCard}>
            <h3 className="heading-md text-white">
              🚀 Bientôt dans votre ville
            </h3>
            <p style={styles.expansionDescription}>
              Nous travaillons activement pour étendre notre service à d'autres villes marocaines. 
              Laissez-nous votre email pour être informé dès que nous arrivons chez vous !
            </p>
            <div style={styles.notifyForm}>
              <input
                type="email"
                placeholder="Votre adresse email"
                style={styles.emailInput}
              />
              <button className="btn btn-secondary">
                Me notifier
              </button>
            </div>
            <p style={styles.expansionNote}>
              Prochaines villes : Oujda, Tétouan, Meknès, El Jadida
            </p>
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
  coverageChecker: {
    marginBottom: '4rem',
  },
  checkerCard: {
    backgroundColor: 'var(--primary-white)',
    padding: '2.5rem 2rem',
    borderRadius: '16px',
    boxShadow: 'var(--shadow)',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  checkerDescription: {
    color: 'var(--gray-700)',
    marginBottom: '2rem',
  },
  checkerForm: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  addressInput: {
    flex: 1,
    padding: '12px 16px',
    border: '2px solid var(--gray-300)',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  checkButton: {
    flexShrink: 0,
  },
  statsSection: {
    marginBottom: '4rem',
  },
  statsGrid: {
    gap: '2rem',
  },
  statCard: {
    backgroundColor: 'var(--primary-white)',
    padding: '2rem 1.5rem',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: 'var(--shadow)',
  },
  statIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: '700',
    color: 'var(--primary-red)',
    marginBottom: '0.5rem',
  },
  statLabel: {
    color: 'var(--gray-700)',
    fontSize: '0.9rem',
  },
  citySelector: {
    marginBottom: '3rem',
  },
  citySelectorTitle: {
    marginBottom: '2rem',
    color: 'var(--gray-900)',
  },
  cityTabs: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  cityTab: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem 1.5rem',
    border: '2px solid var(--gray-300)',
    backgroundColor: 'var(--primary-white)',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
  },
  cityTabActive: {
    backgroundColor: 'var(--primary-red)',
    borderColor: 'var(--primary-red)',
    color: 'var(--primary-white)',
  },
  cityEmoji: {
    fontSize: '1.5rem',
  },
  cityName: {
    fontWeight: '600',
  },
  featuredDot: {
    color: '#FFD700',
    fontSize: '0.8rem',
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
  },
  cityDetails: {
    backgroundColor: 'var(--primary-white)',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: 'var(--shadow)',
    marginBottom: '3rem',
  },
  cityHeader: {
    marginBottom: '2rem',
  },
  cityInfo: {
    textAlign: 'center',
  },
  featuredBadge: {
    backgroundColor: '#FFD700',
    color: 'var(--gray-900)',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '600',
    marginLeft: '1rem',
  },
  cityStats: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    marginTop: '1rem',
    flexWrap: 'wrap',
  },
  cityStat: {
    color: 'var(--gray-700)',
    fontSize: '0.9rem',
  },
  zonesGrid: {
    textAlign: 'left',
  },
  zonesTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--gray-900)',
    marginBottom: '1.5rem',
  },
  zonesList: {
    gap: '1rem',
  },
  zoneCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1rem',
    backgroundColor: 'var(--gray-100)',
    borderRadius: '8px',
    fontSize: '0.9rem',
  },
  zoneIcon: {
    fontSize: '1rem',
  },
  zoneName: {
    flex: 1,
    color: 'var(--gray-700)',
  },
  zoneStatus: {
    fontSize: '0.8rem',
  },
  expansionSection: {
    marginTop: '4rem',
  },
  expansionCard: {
    background: 'linear-gradient(135deg, var(--primary-red) 0%, var(--secondary-red) 100%)',
    padding: '3rem 2rem',
    borderRadius: '20px',
    textAlign: 'center',
    color: 'var(--primary-white)',
  },
  expansionDescription: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    opacity: 0.9,
    maxWidth: '600px',
    margin: '0 auto 2rem auto',
  },
  notifyForm: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    maxWidth: '400px',
    margin: '0 auto 1.5rem auto',
  },
  emailInput: {
    flex: 1,
    padding: '12px 16px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
  },
  expansionNote: {
    fontSize: '0.9rem',
    opacity: 0.8,
    fontStyle: 'italic',
  },
};

// Styles CSS pour les interactions
const zoneStyles = `
  .address-input:focus {
    border-color: var(--primary-red) !important;
  }
  
  .city-tab:hover {
    border-color: var(--primary-red) !important;
    color: var(--primary-red) !important;
  }
  
  .stat-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
  }
  
  @media (max-width: 768px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
    
    .checker-form {
      flex-direction: column !important;
    }
    
    .city-tabs {
      justify-content: flex-start !important;
      overflow-x: auto !important;
      padding-bottom: 1rem !important;
    }
    
    .city-tab {
      flex-shrink: 0 !important;
    }
    
    .city-stats {
      flex-direction: column !important;
      gap: 0.5rem !important;
    }
    
    .zones-list {
      grid-template-columns: repeat(2, 1fr) !important;
    }
    
    .notify-form {
      flex-direction: column !important;
    }
  }
  
  @media (max-width: 480px) {
    .stats-grid {
      grid-template-columns: 1fr !important;
    }
    
    .zones-list {
      grid-template-columns: 1fr !important;
    }
  }
`;

// Injecter les styles CSS
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = zoneStyles;
  document.head.appendChild(styleSheet);
}

export default DeliveryZones;

