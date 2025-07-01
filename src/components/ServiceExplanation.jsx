import React from 'react';

const ServiceExplanation = () => {
  const services = [
    {
      icon: '🍽️',
      title: 'Commandez votre repas',
      description: 'Découvrez une sélection authentique de restaurants marocains et commandez vos plats préférés en quelques clics.',
      features: ['Cuisine traditionnelle', 'Plats modernes', 'Options végétariennes']
    },
    {
      icon: '🚚',
      title: 'Livraison rapide',
      description: 'Nos livreurs expérimentés vous apportent vos commandes chaudes et fraîches directement à votre porte.',
      features: ['Livraison en 30 min', 'Suivi en temps réel', 'Livreurs professionnels']
    },
    {
      icon: '💳',
      title: 'Paiement sécurisé',
      description: 'Payez facilement et en toute sécurité avec plusieurs options de paiement adaptées au marché marocain.',
      features: ['Carte bancaire', 'Paiement mobile', 'Paiement à la livraison']
    }
  ];

  const specialties = [
    {
      emoji: '🥘',
      name: 'Tajine',
      description: 'Plat traditionnel mijoté'
    },
    {
      emoji: '🍖',
      name: 'Méchoui',
      description: 'Agneau grillé à la perfection'
    },
    {
      emoji: '🥙',
      name: 'Pastilla',
      description: 'Feuilleté sucré-salé'
    },
    {
      emoji: '🍵',
      name: 'Thé à la menthe',
      description: 'Boisson traditionnelle'
    },
    {
      emoji: '🥗',
      name: 'Salade marocaine',
      description: 'Fraîcheur et saveurs'
    },
    {
      emoji: '🍯',
      name: 'Pâtisseries',
      description: 'Douceurs orientales'
    }
  ];

  return (
    <section className="section section-alt" id="services">
      <div className="container">
        {/* En-tête de section */}
        <div style={styles.sectionHeader}>
          <h2 className="heading-lg text-center">
            Des saveurs <span className="text-red">authentiques</span>, une expérience moderne
          </h2>
          <p className="text-lg text-center text-gray" style={styles.sectionSubtitle}>
            Blinky révolutionne la livraison de nourriture au Maroc en connectant les amateurs de cuisine 
            locale aux meilleurs restaurants de leur région.
          </p>
        </div>

        {/* Services principaux */}
        <div className="grid grid-3" style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} style={styles.serviceCard} className="animate-fade-in-up">
              <div style={styles.serviceIcon}>
                <span style={styles.iconEmoji}>{service.icon}</span>
              </div>
              <h3 className="heading-sm">{service.title}</h3>
              <p style={styles.serviceDescription}>{service.description}</p>
              <ul style={styles.featureList}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={styles.featureItem}>
                    <span style={styles.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Spécialités culinaires */}
        <div style={styles.specialtiesSection}>
          <h3 className="heading-md text-center" style={styles.specialtiesTitle}>
            Découvrez nos spécialités marocaines
          </h3>
          <div className="grid grid-3" style={styles.specialtiesGrid}>
            {specialties.map((specialty, index) => (
              <div key={index} style={styles.specialtyCard}>
                <div style={styles.specialtyIcon}>{specialty.emoji}</div>
                <h4 style={styles.specialtyName}>{specialty.name}</h4>
                <p style={styles.specialtyDescription}>{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div style={styles.ctaSection}>
          <div style={styles.ctaCard}>
            <h3 className="heading-md text-white">
              Prêt à découvrir les saveurs du Maroc ?
            </h3>
            <p style={styles.ctaDescription}>
              Téléchargez l'application Blinky et commandez dès maintenant vos plats préférés.
            </p>
            <div style={styles.ctaButtons}>
              <button className="btn btn-secondary">
                Télécharger l'app
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => document.getElementById('partenaires').scrollIntoView({ behavior: 'smooth' })}
              >
                Voir les restaurants
              </button>
            </div>
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
  servicesGrid: {
    marginBottom: '5rem',
  },
  serviceCard: {
    backgroundColor: 'var(--primary-white)',
    padding: '2.5rem 2rem',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: 'var(--shadow)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  serviceIcon: {
    width: '80px',
    height: '80px',
    backgroundColor: 'var(--light-red)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem auto',
  },
  iconEmoji: {
    fontSize: '2.5rem',
  },
  serviceDescription: {
    color: 'var(--gray-700)',
    marginBottom: '1.5rem',
    lineHeight: '1.6',
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    textAlign: 'left',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
    color: 'var(--gray-700)',
  },
  checkmark: {
    color: 'var(--primary-red)',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  specialtiesSection: {
    marginBottom: '4rem',
  },
  specialtiesTitle: {
    marginBottom: '3rem',
    color: 'var(--gray-900)',
  },
  specialtiesGrid: {
    gap: '1.5rem',
  },
  specialtyCard: {
    backgroundColor: 'var(--primary-white)',
    padding: '1.5rem',
    borderRadius: '12px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  specialtyIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  specialtyName: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'var(--gray-900)',
    marginBottom: '0.5rem',
  },
  specialtyDescription: {
    color: 'var(--gray-700)',
    fontSize: '0.9rem',
  },
  ctaSection: {
    marginTop: '4rem',
  },
  ctaCard: {
    background: 'linear-gradient(135deg, var(--primary-red) 0%, var(--secondary-red) 100%)',
    padding: '3rem 2rem',
    borderRadius: '20px',
    textAlign: 'center',
    color: 'var(--primary-white)',
  },
  ctaDescription: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    opacity: 0.9,
  },
  ctaButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
};

// Styles CSS pour les animations et interactions
const serviceStyles = `
  .service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
  }
  
  .specialty-card:hover {
    transform: translateY(-4px);
  }
  
  @media (max-width: 768px) {
    .services-grid,
    .specialties-grid {
      grid-template-columns: 1fr !important;
      gap: 1.5rem !important;
    }
    
    .service-card {
      padding: 2rem 1.5rem !important;
    }
    
    .cta-buttons {
      flex-direction: column !important;
      align-items: center !important;
    }
    
    .cta-card {
      padding: 2rem 1.5rem !important;
    }
  }
  
  @media (max-width: 480px) {
    .specialties-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
    
    .specialty-card {
      padding: 1rem !important;
    }
    
    .specialty-icon {
      font-size: 2.5rem !important;
    }
  }
`;

// Injecter les styles CSS
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = serviceStyles;
  document.head.appendChild(styleSheet);
}

export default ServiceExplanation;

