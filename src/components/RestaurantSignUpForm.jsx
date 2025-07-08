import React from 'react';

// Responsive styles for the partner card button
const partnerCardStyles = `
  .blinky-partner-card {
    background: #f6f1eb;
    border-radius: 18px;
    padding: 2.2rem 2rem 2.5rem 2rem;
    text-align: center;
    max-width: 420px;
    margin: 0 auto 2.5rem auto;
    box-shadow: 0 2px 18px 0 rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .blinky-partner-card .icon-partner {
    background: #fff;
    border-radius: 18px;
    padding: 1.2rem 1.1rem 1rem 1.1rem;
    margin-bottom: 1.4rem;
    display: inline-block;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
  }
  .blinky-partner-card h2 {
    font-size: 2rem;
    margin: 0 0 0.7rem 0;
    font-weight: 700;
    color: #121212;
  }
  .blinky-partner-card p {
    color: #333;
    font-size: 1.07rem;
    margin-bottom: 2.1rem;
  }
  .blinky-partner-card .blinky-cta-btn {
    background: #e53e3e;
    color: #fff;
    border: none;
    padding: 0.9rem 0;
    width: 100%;
    border-radius: 10px;
    font-size: 1.08rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s;
  }
  .blinky-partner-card .blinky-cta-btn:hover {
    background: #db3d0a;
  }

  /* Responsive section start */
  @media (max-width: 900px) {
    .main-content {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
    .benefits-grid {
      grid-template-columns: 1fr !important;
      gap: 1.2rem !important;
    }
    .blinky-partner-card {
      max-width: 98vw;
      padding: 1.5rem 0.6rem 2rem 0.6rem;
    }
  }
  @media (max-width: 600px) {
    .container {
      padding-left: 0.5rem !important;
      padding-right: 0.5rem !important;
    }
    .section-header {
      margin-bottom: 2rem !important;
    }
    .blinky-partner-card {
      border-radius: 8px;
      font-size: 0.98rem;
      padding: 1.1rem 0.1rem 1.3rem 0.1rem;
      min-width: 0;
      width: 100%;
      max-width: 100vw;
      box-sizing: border-box;
    }
    .blinky-partner-card h2 {
      font-size: 1.3rem;
    }
    .blinky-partner-card .icon-partner {
      padding: 0.6rem 0.6rem 0.5rem 0.6rem;
      margin-bottom: 0.7rem;
    }
    .blinky-partner-card .blinky-cta-btn {
      font-size: 1rem;
      padding: 0.8rem 0;
      border-radius: 8px;
    }
    .benefit-card {
      padding: 1rem 0.5rem !important;
    }
  }
  @media (max-width: 420px) {
    .blinky-partner-card {
      padding: 0.7rem 0.05rem 1rem 0.05rem;
    }
    .blinky-partner-card h2 {
      font-size: 1.1rem;
    }
    .blinky-partner-card p {
      font-size: 0.93rem;
      margin-bottom: 1.1rem;
    }
    .blinky-partner-card .icon-partner {
      width: 40px;
      height: 40px;
      padding: 0.2rem 0.2rem 0.1rem 0.2rem;
    }
  }
  /* Responsive section end */
`;

if (typeof document !== 'undefined' && !document.getElementById('blinky-partner-card-css')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'blinky-partner-card-css';
  styleSheet.textContent = partnerCardStyles;
  document.head.appendChild(styleSheet);
}

// Responsive helper styles for .main-content and .benefits-grid
const helperStyles = `
  .container {
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    box-sizing: border-box;
  }
  .main-content {
    display: grid;
    gap: 4rem;
    grid-template-columns: 1fr;
  }
  .benefits-grid {
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    .main-content {
      gap: 2rem !important;
    }
    .benefits-grid {
      grid-template-columns: 1fr !important;
      gap: 1.2rem !important;
    }
  }
  @media (max-width: 600px) {
    .container {
      padding-left: 0.3rem !important;
      padding-right: 0.3rem !important;
    }
    .main-content {
      gap: 1.2rem !important;
    }
    .benefits-grid {
      gap: 0.7rem !important;
    }
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('main-content-helper-css')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'main-content-helper-css';
  styleSheet.textContent = helperStyles;
  document.head.appendChild(styleSheet);
}

const RestaurantSignUpForm = () => {
  const benefits = [
    {
      icon: '📈',
      title: 'Augmentez vos ventes',
      description: 'Accédez à de nouveaux clients et augmentez votre chiffre d\'affaires'
    },
    {
      icon: '🚚',
      title: 'Service de livraison',
      description: 'Bénéficiez de notre réseau de livreurs professionnels'
    },
    {
      icon: '📱',
      title: 'Gestion simplifiée',
      description: 'Interface intuitive pour gérer vos commandes et votre menu'
    },
    {
      icon: '💳',
      title: 'Paiements sécurisés',
      description: 'Recevez vos paiements rapidement et en toute sécurité'
    },
    {
      icon: '📊',
      title: 'Analyses détaillées',
      description: 'Suivez vos performances avec des statistiques avancées'
    },
    {
      icon: '🎯',
      title: 'Marketing ciblé',
      description: 'Profitez de nos campagnes promotionnelles'
    }
  ];

  // Handler for redirect
  const handleCtaClick = () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSc8XmMRfu_c2BqYnBl48iPZ9UlyRVpMFF_Tx4G6_k4t-SDLug/viewform?usp=header";
  };

  return (
    <section className="section section-alt" id="inscription">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{
          marginBottom: '3rem',
          maxWidth: 800,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <h2 className="heading-lg text-center">
            Rejoignez le réseau <span className="text-red">Blinky</span>
          </h2>
          <p className="text-lg text-center text-gray" style={{ marginTop: '1rem' }}>
            Développez votre restaurant avec notre plateforme de livraison moderne.<br />
            Inscription simple et accompagnement personnalisé.
          </p>
        </div>

        {/* Benefits */}
        <div className="main-content">
          <div className="benefits-section" style={{ marginBottom: '2rem' }}>
            <h3 className="heading-md text-center" style={{ marginBottom: '3rem', color: 'var(--gray-900)' }}>
              Pourquoi choisir Blinky ?
            </h3>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card" style={{
                  backgroundColor: 'var(--primary-white)',
                  padding: '2rem 1.5rem',
                  borderRadius: '12px',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow)',
                  transition: 'transform 0.3s ease',
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{benefit.icon}</div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--gray-900)',
                    marginBottom: '0.5rem',
                  }}>{benefit.title}</h4>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--gray-700)',
                    lineHeight: '1.5',
                  }}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Card */}
          <div className="form-section" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="blinky-partner-card">
              <span className="icon-partner">
                {/* Same SVG as your card */}
                <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
                  <rect width="56" height="56" rx="12" fill="#FFF3EC"/>
                  <path d="M16.5 23v-5.5A2.5 2.5 0 0 1 19 15h18a2.5 2.5 0 0 1 2.5 2.5V23m-23 0h23m-23 0v3a8.5 8.5 0 0 0 17 0v-3m-17 0v14.5A2.5 2.5 0 0 0 19 40h18a2.5 2.5 0 0 0 2.5-2.5V23m-14 13h6" stroke="#FA4B1A" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </span>
              <h2>Devenez partenaire</h2>
              <p>
                Vous possédez un restaurant ou une boutique&nbsp;? <br />
                Rejoignez-nous et faites découvrir vos services à encore plus de clients.
              </p>
              <a
  className="blinky-cta-btn"
  href="https://docs.google.com/forms/d/e/1FAIpQLSc8XmMRfu_c2BqYnBl48iPZ9UlyRVpMFF_Tx4G6_k4t-SDLug/viewform?usp=header"
  target="_blank"
  rel="noopener noreferrer"
>
  Commencez maintenant
</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSignUpForm;