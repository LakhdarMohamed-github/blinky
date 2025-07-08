import React, { useState } from 'react';
import blinkyLogo from '../assets/blinky-logo.png';

const navLinks = [
  { label: 'Services', section: 'services' },
  { label: 'Zones de livraison', section: 'zones' },
  { label: 'Partenaires', section: 'partenaires' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="main-header" style={styles.header}>
      <div className="container header-container" style={styles.container}>
        <div style={styles.left}>
          <img 
            src={blinkyLogo} 
            alt="Blinky - Livraison de nourriture marocaine" 
            style={styles.logo}
          />
          <span style={styles.logoText}>Blinky</span>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-desktop" style={styles.navDesktop}>
          {navLinks.map((item) => (
            <button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              className="nav-link"
              style={styles.navLink}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('inscription')}
            className="btn btn-primary"
            style={styles.ctaButton}
          >
            Devenir partenaire
          </button>
        </nav>

        {/* Hamburger for Mobile */}
        <button 
          className="hamburger-btn"
          aria-label="Menu"
          style={styles.hamburgerBtn}
          onClick={() => setIsMenuOpen(true)}
        >
          <div className="hamburger-icon" style={styles.hamburgerIcon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-overlay">
          <div className="mobile-header">
            <img 
              src={blinkyLogo} 
              alt="Blinky - Livraison de nourriture marocaine" 
              style={styles.logo}
            />
            <span style={styles.logoText}>Blinky</span>
            <button 
              className="close-btn"
              aria-label="Fermer le menu"
              style={styles.closeBtn}
              onClick={() => setIsMenuOpen(false)}
            >
              &times;
            </button>
          </div>
          <nav className="mobile-nav">
            {navLinks.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="mobile-nav-link"
                style={styles.mobileNavLink}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('inscription')}
              className="btn btn-primary mobile-nav-cta"
              style={styles.mobileCta}
            >
              Devenir partenaire
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: 'var(--primary-white)',
    zIndex: 1000,
    boxShadow: 'var(--shadow)',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '64px',
    justifyContent: 'space-between',
    width: '100%',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logo: {
    height: '36px',
    width: '36px',
  },
  logoText: {
    fontSize: '1.35rem',
    fontWeight: '700',
    color: 'var(--primary-red)',
    letterSpacing: '1px'
  },
  navDesktop: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  navLink: {
    background: 'none',
    border: 'none',
    color: 'var(--gray-700)',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'color 0.3s',
    padding: '0.5rem 0',
  },
  ctaButton: {
    marginLeft: '1rem',
    minWidth: '160px'
  },
  hamburgerBtn: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
    outline: 'none',
  },
  hamburgerIcon: {
    width: '30px',
    height: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  mobileNavLink: {
    background: 'none',
    border: 'none',
    color: 'var(--gray-700)',
    fontSize: '1.15rem',
    fontWeight: '500',
    cursor: 'pointer',
    padding: '1rem 0',
    width: '100%',
    textAlign: 'left',
  },
  mobileCta: {
    marginTop: '1rem',
    width: '100%',
    fontWeight: '600',
    fontSize: '1.1rem'
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    fontSize: '2rem',
    color: 'var(--gray-700)',
    position: 'absolute',
    right: '1.25rem',
    top: '1.25rem',
    cursor: 'pointer'
  }
};

// Responsive & overlay CSS
const headerCSS = `
  .main-header {
    width: 100vw;
  }
  .header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  .nav-desktop {
    display: flex;
  }
  .hamburger-btn {
    display: none;
  }
  .hamburger-icon span {
    display: block;
    height: 3px;
    width: 100%;
    background: var(--gray-700);
    border-radius: 2px;
    transition: all 0.3s;
  }
  /* Mobile overlay */
  .mobile-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: var(--primary-white);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    animation: fadeInDown 0.18s;
  }
  .mobile-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.25rem 1.5rem 0.5rem 1.5rem;
    position: relative;
  }
  .mobile-header img {
    height: 36px;
    width: 36px;
  }
  .mobile-header span {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--primary-red);
    letter-spacing: 1px;
  }
  .close-btn {
    position: absolute;
    right: 1.25rem;
    top: 1.25rem;
  }
  .mobile-nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    width: 100%;
    padding: 1.5rem;
    padding-top: 0.25rem;
  }
  .mobile-nav-link {
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    color: var(--gray-700);
    font-size: 1.15rem;
    font-weight: 500;
    cursor: pointer;
    padding: 1rem 0;
    transition: color 0.2s;
  }
  .mobile-nav-link:hover, .nav-link:hover {
    color: var(--primary-red) !important;
  }
  .mobile-nav-cta {
    width: 100%;
    margin-top: 1rem;
    font-weight: 600;
    font-size: 1.1rem;
  }
  @media (max-width: 900px) {
    .header-container {
      padding: 0 1rem;
    }
    .nav-desktop {
      gap: 1rem !important;
    }
  }
  @media (max-width: 768px) {
    .nav-desktop {
      display: none !important;
    }
    .hamburger-btn {
      display: block !important;
    }
    .header-container {
      padding: 0 0.5rem !important;
    }
    .main-header {
      height: 56px !important;
    }
  }
  @media (max-width: 480px) {
    .header-container {
      padding: 0 0.1rem !important;
    }
    .main-header {
      height: 48px !important;
    }
  }
  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-30px);}
    to   { opacity: 1; transform: translateY(0);}
  }
`;

// Inject CSS only once
if (typeof document !== 'undefined' && !document.getElementById('header-responsive-css')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'header-responsive-css';
  styleSheet.textContent = headerCSS;
  document.head.appendChild(styleSheet);
}

export default Header;