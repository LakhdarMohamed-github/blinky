import React, { useState } from 'react';
import blinkyLogo from '../assets/blinky-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header style={styles.header}>
      <div className="container">
        <nav style={styles.nav}>
          {/* Logo */}
          <div style={styles.logoContainer}>
            <img 
              src={blinkyLogo} 
              alt="Blinky - Livraison de nourriture marocaine" 
              style={styles.logo}
            />
            <span style={styles.logoText}>Blinky</span>
          </div>

          {/* Navigation Desktop */}
          <div style={styles.navLinks}>
            <button 
              onClick={() => scrollToSection('services')}
              style={styles.navLink}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('zones')}
              style={styles.navLink}
            >
              Zones de livraison
            </button>
            <button 
              onClick={() => scrollToSection('partenaires')}
              style={styles.navLink}
            >
              Partenaires
            </button>
            <button 
              onClick={() => scrollToSection('inscription')}
              className="btn btn-primary"
              style={styles.ctaButton}
            >
              Devenir partenaire
            </button>
          </div>

          {/* Menu Mobile */}
          <button 
            onClick={toggleMenu}
            style={styles.mobileMenuButton}
            aria-label="Menu"
          >
            <div style={{...styles.hamburger, ...(isMenuOpen ? styles.hamburgerOpen : {})}}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </nav>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div style={styles.mobileMenu}>
            <button 
              onClick={() => scrollToSection('services')}
              style={styles.mobileNavLink}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('zones')}
              style={styles.mobileNavLink}
            >
              Zones de livraison
            </button>
            <button 
              onClick={() => scrollToSection('partenaires')}
              style={styles.mobileNavLink}
            >
              Partenaires
            </button>
            <button 
              onClick={() => scrollToSection('inscription')}
              className="btn btn-primary"
              style={styles.mobileCta}
            >
              Devenir partenaire
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'var(--primary-white)',
    boxShadow: 'var(--shadow)',
    zIndex: 1000,
    padding: '1rem 0',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logo: {
    height: '40px',
    width: '40px',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--primary-red)',
  },
  navLinks: {
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
    transition: 'color 0.3s ease',
    padding: '0.5rem 0',
  },
  ctaButton: {
    marginLeft: '1rem',
  },
  mobileMenuButton: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
  },
  hamburger: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  mobileMenu: {
    display: 'none',
    flexDirection: 'column',
    gap: '1rem',
    padding: '2rem 0',
    borderTop: '1px solid var(--gray-200)',
    marginTop: '1rem',
  },
  mobileNavLink: {
    background: 'none',
    border: 'none',
    color: 'var(--gray-700)',
    fontSize: '1.1rem',
    fontWeight: '500',
    cursor: 'pointer',
    padding: '0.75rem 0',
    textAlign: 'left',
  },
  mobileCta: {
    marginTop: '1rem',
  },
};

// Styles CSS pour le hamburger menu
const hamburgerStyles = `
  .hamburger span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: var(--gray-700);
    transition: all 0.3s ease;
  }
  
  .hamburger-open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .hamburger-open span:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger-open span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
  
  @media (max-width: 768px) {
    .nav-links {
      display: none !important;
    }
    
    .mobile-menu-button {
      display: block !important;
    }
    
    .mobile-menu {
      display: flex !important;
    }
  }
  
  .nav-link:hover {
    color: var(--primary-red) !important;
  }
  
  .mobile-nav-link:hover {
    color: var(--primary-red) !important;
  }
`;

// Injecter les styles CSS
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = hamburgerStyles;
  document.head.appendChild(styleSheet);
}

export default Header;

