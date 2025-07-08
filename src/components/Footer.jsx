import React from 'react';
import blinkyLogo from '../assets/blinky-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: {
      title: 'Entreprise',
      links: [
        { name: 'À propos', href: '#' },
        { name: 'Notre équipe', href: '#' },
        { name: 'Carrières', href: '#' },
        { name: 'Presse', href: '#' },
        { name: 'Blog', href: '#' }
      ]
    },
    services: {
      title: 'Services',
      links: [
        { name: 'Livraison de repas', href: '#services' },
        { name: 'Restaurants partenaires', href: '#partenaires' },
        { name: 'Zones de livraison', href: '#zones' },
        { name: 'Devenir partenaire', href: '#inscription' },
        { name: 'Programme de fidélité', href: '#' }
      ]
    },
    support: {
      title: 'Support',
      links: [
        { name: 'Centre d\'aide', href: '#faq' },
        { name: 'Nous contacter', href: '#' },
        { name: 'Signaler un problème', href: '#' },
        { name: 'Suivi de commande', href: '#' },
        { name: 'Remboursements', href: '#' }
      ]
    },
    legal: {
      title: 'Légal',
      links: [
        { name: 'Conditions d\'utilisation', href: '#' },
        { name: 'Politique de confidentialité', href: '#' },
        { name: 'Politique de cookies', href: '#' },
        { name: 'Mentions légales', href: '#' },
        { name: 'RGPD', href: '#' }
      ]
    }
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: '📘',
      href: '#',
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      icon: '📷',
      href: '#',
      color: '#E4405F'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      href: '#',
      color: '#1DA1F2'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      href: '#',
      color: '#0A66C2'
    },
    {
      name: 'YouTube',
      icon: '📺',
      href: '#',
      color: '#FF0000'
    }
  ];

  const cities = [
    'Casablanca', 'Rabat', 'Marrakech', 'Fès', 'Tanger', 'Agadir'
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={styles.footer}>
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content" style={styles.footerContent}>
          {/* Company Section */}
          <div className="company-section" style={styles.companySection}>
            <div style={styles.logoSection}>
              <img 
                src={blinkyLogo} 
                alt="Blinky" 
                style={styles.footerLogo}
              />
              <span style={styles.logoText}>Blinky</span>
            </div>
            <p style={styles.companyDescription}>
              La première application marocaine de livraison de nourriture qui vous connecte 
              aux meilleurs restaurants locaux. Savourez l'authenticité, commandez en simplicité.
            </p>
            
            {/* App download */}
            <div style={styles.appDownload}>
              <h4 style={styles.downloadTitle}>Téléchargez l'application</h4>
              <div className="download-buttons" style={styles.downloadButtons}>
                <a href="#" className="download-button" style={styles.downloadButton}>
                  <img 
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMjBIMjFWMjJIM1YyMFpNMyAySDIxVjRIM1YyWk0zIDEwSDIxVjEySDNWMTBaTTMgMTRIMjFWMTZIM1YxNFpNMyA2SDIxVjhIM1Y2WiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=" 
                    alt="Google Play" 
                    style={styles.downloadIcon}
                  />
                  <div style={styles.downloadText}>
                    <span style={styles.downloadLabel}>Disponible sur</span>
                    <span style={styles.downloadStore}>Google Play</span>
                  </div>
                </a>
                <a href="#" className="download-button" style={styles.downloadButton}>
                  <img 
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMjBIMjFWMjJIM1YyMFpNMyAySDIxVjRIM1YyWk0zIDEwSDIxVjEySDNWMTBaTTMgMTRIMjFWMTZIM1YxNFpNMyA2SDIxVjhIM1Y2WiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=" 
                    alt="App Store" 
                    style={styles.downloadIcon}
                  />
                  <div style={styles.downloadText}>
                    <span style={styles.downloadLabel}>Télécharger sur</span>
                    <span style={styles.downloadStore}>App Store</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="social-section" style={styles.socialSection}>
              <h4 style={styles.socialTitle}>Suivez-nous</h4>
              <div className="social-links" style={styles.socialLinks}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="social-link"
                    style={styles.socialLink}
                    title={social.name}
                  >
                    <span style={styles.socialIcon}>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer links */}
          <div className="links-section" style={styles.linksSection}>
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key} className="link-column" style={styles.linkColumn}>
                <h4 style={styles.columnTitle}>{section.title}</h4>
                <ul style={styles.linkList}>
                  {section.links.map((link) => (
                    <li key={link.name} style={styles.linkItem}>
                      <a href={link.href} className="link" style={styles.link}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Cities */}
        <div className="cities-section" style={styles.citiesSection}>
          <h4 style={styles.citiesTitle}>Nos villes de livraison</h4>
          <div className="cities-list" style={styles.citiesList}>
            {cities.map((city, index) => (
              <span key={city} className="city-item" style={styles.cityItem}>
                {city}
                {index < cities.length - 1 && <span className="city-separator" style={styles.citySeparator}>•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="newsletter-section" style={styles.newsletterSection}>
          <div className="newsletter-card" style={styles.newsletterCard}>
            <div style={styles.newsletterContent}>
              <h3 style={styles.newsletterTitle}>
                Restez informé des dernières nouveautés
              </h3>
              <p style={styles.newsletterDescription}>
                Recevez nos offres exclusives, nouveaux restaurants et actualités directement dans votre boîte mail.
              </p>
            </div>
            <div className="newsletter-form" style={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Votre adresse email"
                style={styles.newsletterInput}
              />
              <button className="btn btn-primary" style={styles.newsletterButton}>
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="contact-info" style={styles.contactInfo}>
          <div className="contact-grid" style={styles.contactGrid}>
            <div className="contact-item" style={styles.contactItem}>
              <span style={styles.contactIcon}>📍</span>
              <div style={styles.contactDetails}>
                <h5 style={styles.contactLabel}>Adresse</h5>
                <p style={styles.contactText}>123 Avenue Mohammed V, Casablanca, Maroc</p>
              </div>
            </div>
            <div className="contact-item" style={styles.contactItem}>
              <span style={styles.contactIcon}>📞</span>
              <div style={styles.contactDetails}>
                <h5 style={styles.contactLabel}>Téléphone</h5>
                <p style={styles.contactText}>+212 5XX XXX XXX</p>
              </div>
            </div>
            <div className="contact-item" style={styles.contactItem}>
              <span style={styles.contactIcon}>📧</span>
              <div style={styles.contactDetails}>
                <h5 style={styles.contactLabel}>Email</h5>
                <p style={styles.contactText}>contact@blinky.ma</p>
              </div>
            </div>
            <div className="contact-item" style={styles.contactItem}>
              <span style={styles.contactIcon}>🕒</span>
              <div style={styles.contactDetails}>
                <h5 style={styles.contactLabel}>Horaires</h5>
                <p style={styles.contactText}>7j/7, 24h/24</p>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div style={styles.separator}></div>

        {/* Footer bottom */}
        <div className="footer-bottom" style={styles.footerBottom}>
          <div style={styles.copyright}>
            <p style={styles.copyrightText}>
              © {currentYear} Blinky. Tous droits réservés. Fait avec ❤️ au Maroc.
            </p>
          </div>
          <div style={styles.bottomLinks}>
            <a href="#" className="bottom-link" style={styles.bottomLink}>Conditions d'utilisation</a>
            <span className="bottom-separator" style={styles.bottomSeparator}>|</span>
            <a href="#" className="bottom-link" style={styles.bottomLink}>Politique de confidentialité</a>
            <span className="bottom-separator" style={styles.bottomSeparator}>|</span>
            <a href="#" className="bottom-link" style={styles.bottomLink}>Cookies</a>
          </div>
          <button onClick={scrollToTop} className="back-to-top" style={styles.backToTop}>
            <span style={styles.backToTopIcon}>↑</span>
            Haut de page
          </button>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'var(--gray-900)',
    color: 'var(--primary-white)',
    paddingTop: '4rem',
    paddingBottom: '2rem',
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: '2fr 3fr',
    gap: '4rem',
    marginBottom: '3rem',
  },
  companySection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  footerLogo: {
    height: '40px',
    width: '40px',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--primary-red)',
  },
  companyDescription: {
    color: 'var(--gray-300)',
    lineHeight: '1.6',
    fontSize: '0.95rem',
  },
  appDownload: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  downloadTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--primary-white)',
    marginBottom: '0.5rem',
  },
  downloadButtons: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  downloadButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.75rem 1rem',
    backgroundColor: 'var(--gray-800)',
    borderRadius: '8px',
    textDecoration: 'none',
    color: 'var(--primary-white)',
    transition: 'background-color 0.3s ease',
    border: '1px solid var(--gray-700)',
  },
  downloadIcon: {
    width: '24px',
    height: '24px',
    filter: 'invert(1)',
  },
  downloadText: {
    display: 'flex',
    flexDirection: 'column',
  },
  downloadLabel: {
    fontSize: '0.75rem',
    color: 'var(--gray-400)',
  },
  downloadStore: {
    fontSize: '0.9rem',
    fontWeight: '600',
  },
  socialSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  socialTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--primary-white)',
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: 'var(--gray-800)',
    borderRadius: '50%',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },
  socialIcon: {
    fontSize: '1.2rem',
  },
  linksSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem',
  },
  linkColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  columnTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--primary-white)',
    marginBottom: '0.5rem',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  linkItem: {
    margin: 0,
  },
  link: {
    color: 'var(--gray-300)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.3s ease',
  },
  citiesSection: {
    textAlign: 'center',
    marginBottom: '3rem',
    padding: '2rem 0',
    borderTop: '1px solid var(--gray-700)',
    borderBottom: '1px solid var(--gray-700)',
  },
  citiesTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--primary-white)',
    marginBottom: '1rem',
  },
  citiesList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  cityItem: {
    color: 'var(--gray-300)',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  citySeparator: {
    color: 'var(--gray-500)',
  },
  newsletterSection: {
    marginBottom: '3rem',
  },
  newsletterCard: {
    background: 'linear-gradient(135deg, var(--primary-red) 0%, var(--secondary-red) 100%)',
    padding: '2.5rem',
    borderRadius: '16px',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '2rem',
    alignItems: 'center',
  },
  newsletterContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  newsletterTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: 'var(--primary-white)',
  },
  newsletterDescription: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
  newsletterForm: {
    display: 'flex',
    gap: '1rem',
  },
  newsletterInput: {
    flex: 1,
    padding: '12px 16px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
  },
  newsletterButton: {
    flexShrink: 0,
  },
  contactInfo: {
    marginBottom: '3rem',
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
  },
  contactIcon: {
    fontSize: '1.5rem',
    marginTop: '0.25rem',
  },
  contactDetails: {
    flex: 1,
  },
  contactLabel: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--primary-white)',
    marginBottom: '0.25rem',
  },
  contactText: {
    color: 'var(--gray-300)',
    fontSize: '0.85rem',
    lineHeight: '1.4',
  },
  separator: {
    height: '1px',
    backgroundColor: 'var(--gray-700)',
    marginBottom: '2rem',
  },
  footerBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  copyright: {
    flex: 1,
  },
  copyrightText: {
    color: 'var(--gray-400)',
    fontSize: '0.85rem',
  },
  bottomLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  bottomLink: {
    color: 'var(--gray-400)',
    textDecoration: 'none',
    fontSize: '0.85rem',
    transition: 'color 0.3s ease',
  },
  bottomSeparator: {
    color: 'var(--gray-600)',
  },
  backToTop: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    backgroundColor: 'var(--gray-800)',
    color: 'var(--gray-300)',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.85rem',
    transition: 'all 0.3s ease',
  },
  backToTopIcon: {
    fontSize: '1rem',
  },
};

// Styles CSS pour interactions et responsive
const footerStyles = `
  .download-button:hover {
    background-color: var(--gray-700) !important;
  }
  
  .social-link:hover {
    background-color: var(--primary-red) !important;
    transform: translateY(-2px);
  }
  
  .link:hover {
    color: var(--primary-red) !important;
  }
  
  .bottom-link:hover {
    color: var(--primary-white) !important;
  }
  
  .back-to-top:hover {
    background-color: var(--primary-red) !important;
    color: var(--primary-white) !important;
  }
  
  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
    
    .links-section {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 1.5rem !important;
    }
    
    .newsletter-card {
      grid-template-columns: 1fr !important;
      gap: 1.5rem !important;
      text-align: center !important;
    }
    
    .newsletter-form {
      flex-direction: column !important;
      gap: 1rem !important;
    }
    
    .contact-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 1.5rem !important;
    }
    
    .cities-list {
      justify-content: center !important;
    }
    
    .footer-bottom {
      flex-direction: column !important;
      text-align: center !important;
      gap: 1rem !important;
    }
    
    .download-buttons {
      flex-direction: column !important;
      gap: 1rem !important;
    }
  }
  
  @media (max-width: 480px) {
    .links-section {
      grid-template-columns: 1fr !important;
    }
    
    .contact-grid {
      grid-template-columns: 1fr !important;
    }
    
    .cities-list {
      flex-direction: column !important;
      gap: 0.5rem !important;
    }
    
    .city-separator {
      display: none !important;
    }
    
    .newsletter-card {
      padding: 1.5rem !important;
    }
    
    .social-links {
      justify-content: center !important;
    }
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('footer-css')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'footer-css';
  styleSheet.textContent = footerStyles;
  document.head.appendChild(styleSheet);
}

export default Footer;