import React from 'react';

const HeroSection = () => {
  return (
    <section style={styles.hero} id="hero">
      <div className="container">
        <div className="hero-content" style={styles.heroContent}>
          <div className="text-content" style={styles.textContent}>
            <h1 style={styles.title} className="title animate-fade-in-up">
              Savourez le <span style={styles.highlight}>Maroc</span>...
              <br />
              en un clic
            </h1>
            <p style={styles.subtitle} className="subtitle animate-fade-in-up">
              Blinky est la première application marocaine de livraison de nourriture qui vous connecte 
              aux meilleurs restaurants locaux. Commandez vos plats préférés et recevez-les rapidement, 
              avec professionnalisme et authenticité.
            </p>
            <div style={styles.ctaButtons} className="cta-buttons animate-fade-in-up">
              <a 
                href="#" 
                className="btn btn-primary app-button"
                style={styles.appButton}
              >
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMjBIMjFWMjJIM1YyMFpNMyAySDIxVjRIM1YyWk0zIDEwSDIxVjEySDNWMTBaTTMgMTRIMjFWMTZIM1YxNFpNMyA2SDIxVjhIM1Y2WiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=" 
                  alt="Google Play" 
                  style={styles.appIcon}
                />
                Télécharger sur Google Play
              </a>
              <a 
                href="#" 
                className="btn btn-outline app-button"
                style={styles.appButton}
              >
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMjBIMjFWMjJIM1YyMFpNMyAySDIxVjRIM1YyWk0zIDEwSDIxVjEySDNWMTBaTTMgMTRIMjFWMTZIM1YxNFpNMyA2SDIxVjhIM1Y2WiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=" 
                  alt="App Store" 
                  style={styles.appIcon}
                />
                Télécharger sur App Store
              </a>
            </div>
          </div>
          <div style={styles.imageContent}>
            <div style={styles.phoneContainer}>
              <div className="phone" style={styles.phone}>
                <div style={styles.phoneScreen}>
                  <div style={styles.appPreview}>
                    <div style={styles.appHeader}>
                      <div style={styles.appLogo}></div>
                      <span style={styles.appName}>Blinky</span>
                    </div>
                    <div style={styles.searchBar}>
                      <span style={styles.searchText}>Rechercher un restaurant...</span>
                    </div>
                    <div style={styles.categories}>
                      <div style={styles.category}>🍕 Pizza</div>
                      <div style={styles.category}>🍔 Burger</div>
                      <div style={styles.category}>🥘 Tajine</div>
                    </div>
                    <div style={styles.restaurantCard}>
                      <div style={styles.restaurantImage}></div>
                      <div style={styles.restaurantInfo}>
                        <h4 style={styles.restaurantName}>Restaurant Al Fassia</h4>
                        <p style={styles.restaurantDesc}>Cuisine marocaine authentique</p>
                        <div style={styles.rating}>⭐ 4.8 • 25 min</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={styles.floatingElements}>
                <div style={{...styles.floatingElement, ...styles.element1}}>🍕</div>
                <div style={{...styles.floatingElement, ...styles.element2}}>🥘</div>
                <div style={{...styles.floatingElement, ...styles.element3}}>🍔</div>
                <div style={{...styles.floatingElement, ...styles.element4}}>🥗</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.backgroundPattern}></div>
    </section>
  );
};

const styles = {
  hero: {
    background: 'linear-gradient(135deg, var(--primary-red) 0%, var(--secondary-red) 100%)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '80px',
  },
  heroContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    zIndex: 2,
    position: 'relative',
  },
  textContent: {
    textAlign: 'left',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '800',
    color: 'var(--primary-white)',
    lineHeight: '1.1',
    marginBottom: '1.5rem',
  },
  highlight: {
    color: '#FFD700',
    textShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1.6',
    marginBottom: '2.5rem',
    maxWidth: '500px',
  },
  ctaButtons: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  appButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: '600',
  },
  appIcon: {
    width: '20px',
    height: '20px',
  },
  imageContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneContainer: {
    position: 'relative',
    transform: 'rotate(5deg)',
  },
  phone: {
    width: '280px',
    height: '560px',
    backgroundColor: '#1a1a1a',
    borderRadius: '30px',
    padding: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    position: 'relative',
  },
  phoneScreen: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    overflow: 'hidden',
    position: 'relative',
  },
  appPreview: {
    padding: '20px',
    height: '100%',
  },
  appHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  appLogo: {
    width: '30px',
    height: '30px',
    backgroundColor: 'var(--primary-red)',
    borderRadius: '8px',
  },
  appName: {
    fontSize: '18px',
    fontWeight: '700',
    color: 'var(--primary-red)',
  },
  searchBar: {
    backgroundColor: '#f5f5f5',
    padding: '12px 16px',
    borderRadius: '12px',
    marginBottom: '20px',
  },
  searchText: {
    color: '#999',
    fontSize: '14px',
  },
  categories: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  category: {
    backgroundColor: 'var(--light-red)',
    color: 'var(--primary-red)',
    padding: '8px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
  },
  restaurantCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '12px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    border: '1px solid #f0f0f0',
  },
  restaurantImage: {
    width: '100%',
    height: '80px',
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  restaurantInfo: {
    textAlign: 'left',
  },
  restaurantName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '4px',
  },
  restaurantDesc: {
    fontSize: '12px',
    color: '#666',
    marginBottom: '6px',
  },
  rating: {
    fontSize: '12px',
    color: '#999',
  },
  floatingElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  floatingElement: {
    position: 'absolute',
    fontSize: '2rem',
    animation: 'float 3s ease-in-out infinite',
  },
  element1: {
    top: '10%',
    left: '-20%',
    animationDelay: '0s',
  },
  element2: {
    top: '60%',
    right: '-30%',
    animationDelay: '1s',
  },
  element3: {
    top: '30%',
    right: '-10%',
    animationDelay: '2s',
  },
  element4: {
    bottom: '20%',
    left: '-10%',
    animationDelay: '1.5s',
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  },
};

// Responsive and animation CSS
const floatAnimation = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  
  @media (max-width: 768px) {
    .hero-content {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
      text-align: center !important;
    }
    
    .text-content {
      text-align: center !important;
    }
    
    .title {
      font-size: 2.5rem !important;
    }
    
    .phone {
      width: 240px !important;
      height: 480px !important;
    }
    
    .cta-buttons {
      justify-content: center !important;
    }
    
    .app-button {
      font-size: 0.9rem !important;
      padding: 10px 20px !important;
    }
  }
  
  @media (max-width: 480px) {
    .title {
      font-size: 2rem !important;
    }
    
    .subtitle {
      font-size: 1.1rem !important;
    }
    
    .cta-buttons {
      flex-direction: column !important;
    }
    
    .phone {
      width: 200px !important;
      height: 400px !important;
    }
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = floatAnimation;
  document.head.appendChild(styleSheet);
}

export default HeroSection;