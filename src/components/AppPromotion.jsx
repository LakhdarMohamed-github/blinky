import React from 'react';

const AppPromotion = () => {
  const features = [
    {
      icon: '🔍',
      title: 'Recherche intelligente',
      description: 'Trouvez rapidement vos restaurants et plats préférés'
    },
    {
      icon: '📍',
      title: 'Suivi en temps réel',
      description: 'Suivez votre commande de la cuisine à votre porte'
    },
    {
      icon: '💳',
      title: 'Paiement facile',
      description: 'Payez en ligne ou à la livraison en toute sécurité'
    },
    {
      icon: '⭐',
      title: 'Avis et notes',
      description: 'Consultez les avis pour faire le meilleur choix'
    },
    {
      icon: '🎁',
      title: 'Offres exclusives',
      description: 'Profitez de promotions réservées aux utilisateurs'
    },
    {
      icon: '🔔',
      title: 'Notifications',
      description: 'Restez informé de vos commandes et des nouveautés'
    }
  ];

  const screenshots = [
    {
      id: 1,
      title: 'Accueil',
      description: 'Interface intuitive et recherche facile'
    },
    {
      id: 2,
      title: 'Restaurant',
      description: 'Menu détaillé avec photos et descriptions'
    },
    {
      id: 3,
      title: 'Commande',
      description: 'Processus de commande simplifié'
    },
    {
      id: 4,
      title: 'Suivi',
      description: 'Suivi en temps réel de votre livraison'
    }
  ];

  return (
    <section className="section" id="application">
      <div className="container">
        {/* En-tête de section */}
        <div className="section-header" style={styles.sectionHeader}>
          <h2 className="heading-lg text-center">
            L'application <span className="text-red">Blinky</span> dans votre poche
          </h2>
          <p className="text-lg text-center text-gray" style={styles.sectionSubtitle}>
            Téléchargez l'application Blinky et découvrez une nouvelle façon de commander 
            vos plats préférés. Simple, rapide et conçue pour les gourmets marocains.
          </p>
        </div>

        {/* Section principale avec téléphones */}
        <div className="main-section" style={styles.mainSection}>
          <div className="phones-container" style={styles.phonesContainer}>
            {/* Téléphone principal */}
            <div className="main-phone" style={styles.mainPhone}>
              <div className="phone-frame" style={styles.phoneFrame}>
                <div className="phone-screen" style={styles.phoneScreen}>
                  <div style={styles.appInterface}>
                    {/* Barre de statut */}
                    <div style={styles.statusBar}>
                      <span style={styles.time}>14:30</span>
                      <div style={styles.statusIcons}>
                        <span>📶</span>
                        <span>📶</span>
                        <span>🔋</span>
                      </div>
                    </div>
                    
                    {/* Header de l'app */}
                    <div style={styles.appHeader}>
                      <div style={styles.appLogo}></div>
                      <span style={styles.appTitle}>Blinky</span>
                      <div style={styles.profileIcon}>👤</div>
                    </div>
                    
                    {/* Barre de recherche */}
                    <div style={styles.searchSection}>
                      <div style={styles.searchBar}>
                        <span style={styles.searchIcon}>🔍</span>
                        <span style={styles.searchText}>Rechercher un restaurant...</span>
                      </div>
                      <div style={styles.locationBar}>
                        <span style={styles.locationIcon}>📍</span>
                        <span style={styles.locationText}>Casablanca, Maarif</span>
                      </div>
                    </div>
                    
                    {/* Catégories */}
                    <div style={styles.categories}>
                      <div style={styles.categoryItem}>
                        <div style={styles.categoryIcon}>🥘</div>
                        <span style={styles.categoryLabel}>Traditionnel</span>
                      </div>
                      <div style={styles.categoryItem}>
                        <div style={styles.categoryIcon}>🍔</div>
                        <span style={styles.categoryLabel}>Fast Food</span>
                      </div>
                      <div style={styles.categoryItem}>
                        <div style={styles.categoryIcon}>🍕</div>
                        <span style={styles.categoryLabel}>Pizza</span>
                      </div>
                      <div style={styles.categoryItem}>
                        <div style={styles.categoryIcon}>🧁</div>
                        <span style={styles.categoryLabel}>Desserts</span>
                      </div>
                    </div>
                    
                    {/* Restaurant en vedette */}
                    <div style={styles.featuredRestaurant}>
                      <div style={styles.restaurantImage}></div>
                      <div style={styles.restaurantDetails}>
                        <h4 style={styles.restaurantName}>Restaurant Al Fassia</h4>
                        <p style={styles.restaurantType}>Cuisine marocaine • ⭐ 4.8</p>
                        <p style={styles.deliveryInfo}>🚚 25-35 min • Gratuit</p>
                      </div>
                      <div style={styles.favoriteIcon}>❤️</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Téléphones secondaires */}
            <div className="secondary-phones" style={styles.secondaryPhones}>
              <div className="secondary-phone phone2" style={{...styles.secondaryPhone, ...styles.phone2}}>
                <div className="phone-frame" style={styles.phoneFrame}>
                  <div className="phone-screen" style={styles.phoneScreen}>
                    <div style={styles.orderScreen}>
                      <div style={styles.orderHeader}>
                        <h4 style={styles.orderTitle}>Votre commande</h4>
                      </div>
                      <div style={styles.orderItem}>
                        <span style={styles.itemName}>Tajine poulet</span>
                        <span style={styles.itemPrice}>85 DH</span>
                      </div>
                      <div style={styles.orderItem}>
                        <span style={styles.itemName}>Thé à la menthe</span>
                        <span style={styles.itemPrice}>15 DH</span>
                      </div>
                      <div style={styles.orderTotal}>
                        <span style={styles.totalLabel}>Total</span>
                        <span style={styles.totalPrice}>100 DH</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="secondary-phone phone3" style={{...styles.secondaryPhone, ...styles.phone3}}>
                <div className="phone-frame" style={styles.phoneFrame}>
                  <div className="phone-screen" style={styles.phoneScreen}>
                    <div style={styles.trackingScreen}>
                      <div style={styles.trackingHeader}>
                        <h4 style={styles.trackingTitle}>Suivi de commande</h4>
                      </div>
                      <div style={styles.trackingSteps}>
                        <div style={{...styles.trackingStep, ...styles.stepCompleted}}>
                          <div style={styles.stepIcon}>✅</div>
                          <span style={styles.stepText}>Commande confirmée</span>
                        </div>
                        <div style={{...styles.trackingStep, ...styles.stepCompleted}}>
                          <div style={styles.stepIcon}>👨‍🍳</div>
                          <span style={styles.stepText}>En préparation</span>
                        </div>
                        <div style={{...styles.trackingStep, ...styles.stepActive}}>
                          <div style={styles.stepIcon}>🚚</div>
                          <span style={styles.stepText}>En livraison</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu textuel */}
          <div className="content-section" style={styles.contentSection}>
            <h3 className="heading-md">
              Une expérience culinaire <span className="text-red">révolutionnaire</span>
            </h3>
            <p style={styles.contentDescription}>
              L'application Blinky transforme votre façon de commander de la nourriture. 
              Avec une interface intuitive et des fonctionnalités avancées, découvrez 
              le plaisir de commander en quelques clics.
            </p>
            
            {/* Fonctionnalités */}
            <div className="features-list" style={styles.featuresList}>
              {features.map((feature, index) => (
                <div key={index} className="feature-item" style={styles.featureItem}>
                  <div style={styles.featureIcon}>{feature.icon}</div>
                  <div style={styles.featureContent}>
                    <h4 style={styles.featureTitle}>{feature.title}</h4>
                    <p style={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Boutons de téléchargement */}
            <div className="download-buttons" style={styles.downloadButtons}>
              <a href="#" className="btn btn-primary" style={styles.downloadBtn}>
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMjBIMjFWMjJIM1YyMFpNMyAySDIxVjRIM1YyWk0zIDEwSDIxVjEySDNWMTBaTTMgMTRIMjFWMTZIM1YxNFpNMyA2SDIxVjhIM1Y2WiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=" 
                  alt="Google Play" 
                  style={styles.downloadIcon}
                />
                Google Play
              </a>
              <a href="#" className="btn btn-secondary" style={styles.downloadBtn}>
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMjBIMjFWMjJIM1YyMFpNMyAySDIxVjRIM1YyWk0zIDEwSDIxVjEySDNWMTBaTTMgMTRIMjFWMTZIM1YxNFpNMyA2SDIxVjhIM1Y2WiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=" 
                  alt="App Store" 
                  style={styles.downloadIcon}
                />
                App Store
              </a>
            </div>
          </div>
        </div>

        {/* Section des captures d'écran */}
        <div className="screenshots-section" style={styles.screenshotsSection}>
          <h3 className="heading-md text-center" style={styles.screenshotsTitle}>
            Découvrez l'interface de l'application
          </h3>
          <div className="screenshots-grid" style={styles.screenshotsGrid}>
            {screenshots.map((screenshot) => (
              <div key={screenshot.id} className="screenshot-card" style={styles.screenshotCard}>
                <div className="screenshot-image" style={styles.screenshotImage}>
                  <span style={styles.screenshotNumber}>{screenshot.id}</span>
                </div>
                <h4 style={styles.screenshotTitle}>{screenshot.title}</h4>
                <p style={styles.screenshotDescription}>{screenshot.description}</p>
              </div>
            ))}
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
  mainSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    marginBottom: '5rem',
  },
  phonesContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '600px',
  },
  mainPhone: {
    position: 'relative',
    zIndex: 3,
  },
  secondaryPhones: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  secondaryPhone: {
    position: 'absolute',
    transform: 'scale(0.8)',
    opacity: 0.7,
  },
  phone2: {
    top: '10%',
    left: '-20%',
    transform: 'scale(0.8) rotate(-10deg)',
  },
  phone3: {
    bottom: '10%',
    right: '-20%',
    transform: 'scale(0.8) rotate(10deg)',
  },
  phoneFrame: {
    width: '280px',
    height: '560px',
    backgroundColor: '#1a1a1a',
    borderRadius: '30px',
    padding: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
  },
  phoneScreen: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    overflow: 'hidden',
  },
  appInterface: {
    padding: '10px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  statusBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 10px',
    fontSize: '12px',
    color: '#333',
  },
  time: {
    fontWeight: '600',
  },
  statusIcons: {
    display: 'flex',
    gap: '5px',
  },
  appHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 10px',
    borderBottom: '1px solid #f0f0f0',
  },
  appLogo: {
    width: '30px',
    height: '30px',
    backgroundColor: 'var(--primary-red)',
    borderRadius: '8px',
  },
  appTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: 'var(--primary-red)',
  },
  profileIcon: {
    fontSize: '20px',
  },
  searchSection: {
    padding: '15px 10px',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#f5f5f5',
    padding: '12px',
    borderRadius: '12px',
    marginBottom: '10px',
  },
  searchIcon: {
    fontSize: '16px',
  },
  searchText: {
    color: '#999',
    fontSize: '14px',
  },
  locationBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '12px',
    color: '#666',
  },
  locationIcon: {
    fontSize: '14px',
  },
  locationText: {
    fontSize: '12px',
  },
  categories: {
    display: 'flex',
    gap: '10px',
    padding: '15px 10px',
    overflowX: 'auto',
  },
  categoryItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    minWidth: '60px',
  },
  categoryIcon: {
    width: '40px',
    height: '40px',
    backgroundColor: 'var(--light-red)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  },
  categoryLabel: {
    fontSize: '10px',
    color: '#666',
    textAlign: 'center',
  },
  featuredRestaurant: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '15px 10px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    margin: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  restaurantImage: {
    width: '60px',
    height: '60px',
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
  },
  restaurantDetails: {
    flex: 1,
  },
  restaurantName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '2px',
  },
  restaurantType: {
    fontSize: '12px',
    color: '#666',
    marginBottom: '2px',
  },
  deliveryInfo: {
    fontSize: '11px',
    color: '#999',
  },
  favoriteIcon: {
    fontSize: '16px',
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  orderScreen: {
    padding: '20px',
    height: '100%',
  },
  orderHeader: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  orderTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
  },
  orderItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #f0f0f0',
  },
  itemName: {
    fontSize: '14px',
    color: '#333',
  },
  itemPrice: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--primary-red)',
  },
  orderTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 0',
    borderTop: '2px solid var(--primary-red)',
    marginTop: '10px',
  },
  totalLabel: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
  },
  totalPrice: {
    fontSize: '16px',
    fontWeight: '700',
    color: 'var(--primary-red)',
  },
  trackingScreen: {
    padding: '20px',
    height: '100%',
  },
  trackingHeader: {
    marginBottom: '30px',
    textAlign: 'center',
  },
  trackingTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
  },
  trackingSteps: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  trackingStep: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  stepIcon: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
  },
  stepCompleted: {
    color: '#4CAF50',
  },
  stepActive: {
    color: 'var(--primary-red)',
  },
  stepText: {
    fontSize: '14px',
    color: '#333',
  },
  contentSection: {
    textAlign: 'left',
  },
  contentDescription: {
    color: 'var(--gray-700)',
    marginBottom: '2rem',
    lineHeight: '1.6',
  },
  featuresList: {
    display: 'grid',
    gap: '1.5rem',
    marginBottom: '2.5rem',
  },
  featureItem: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
  },
  featureIcon: {
    fontSize: '1.5rem',
    flexShrink: 0,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--gray-900)',
    marginBottom: '0.25rem',
  },
  featureDescription: {
    fontSize: '0.9rem',
    color: 'var(--gray-700)',
    lineHeight: '1.5',
  },
  downloadButtons: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  downloadBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  downloadIcon: {
    width: '20px',
    height: '20px',
  },
  screenshotsSection: {
    marginTop: '5rem',
  },
  screenshotsTitle: {
    marginBottom: '3rem',
    color: 'var(--gray-900)',
  },
  screenshotsGrid: {
    gap: '2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  screenshotCard: {
    textAlign: 'center',
  },
  screenshotImage: {
    width: '100%',
    height: '200px',
    backgroundColor: 'var(--gray-200)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    position: 'relative',
  },
  screenshotNumber: {
    fontSize: '3rem',
    fontWeight: '700',
    color: 'var(--gray-500)',
  },
  screenshotTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--gray-900)',
    marginBottom: '0.5rem',
  },
  screenshotDescription: {
    fontSize: '0.9rem',
    color: 'var(--gray-700)',
  },
};

const appPromotionStyles = `
  @media (max-width: 1080px) {
    .screenshots-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
  @media (max-width: 900px) {
    .main-section {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
      text-align: center !important;
    }
    .phones-container {
      height: 400px !important;
    }
    .phone-frame {
      width: 200px !important;
      height: 400px !important;
    }
    .secondary-phone {
      display: none !important;
    }
    .content-section {
      text-align: center !important;
    }
    .features-list {
      grid-template-columns: 1fr !important;
      display: grid !important;
    }
    .download-buttons {
      justify-content: center !important;
    }
    .screenshots-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
  @media (max-width: 480px) {
    .screenshots-grid {
      grid-template-columns: 1fr !important;
    }
    .download-buttons {
      flex-direction: column !important;
    }
    .phone-frame {
      width: 150px !important;
      height: 300px !important;
    }
  }
  .main-phone {
    animation: float 6s ease-in-out infinite;
  }
  .phone2 {
    animation: float 6s ease-in-out infinite 2s;
  }
  .phone3 {
    animation: float 6s ease-in-out infinite 4s;
  }
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) scale(0.8) rotate(-10deg);
    }
    50% {
      transform: translateY(-10px) scale(0.8) rotate(-10deg);
    }
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('app-promo-css')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'app-promo-css';
  styleSheet.textContent = appPromotionStyles;
  document.head.appendChild(styleSheet);
}

export default AppPromotion;