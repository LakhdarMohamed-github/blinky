import React, { useState } from 'react';

const RestaurantSignUpForm = () => {
  const [formData, setFormData] = useState({
    restaurantName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    cuisineType: '',
    description: '',
    hasDelivery: false,
    acceptsOnlinePayment: false,
    agreedToTerms: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cities = [
    'Casablanca', 'Rabat', 'Marrakech', 'Fès', 'Tanger', 'Agadir',
    'Meknès', 'Oujda', 'Tétouan', 'Salé', 'Autre'
  ];

  const cuisineTypes = [
    'Cuisine marocaine traditionnelle',
    'Cuisine moderne',
    'Fast food',
    'Pizza',
    'Pâtisserie',
    'Café/Boissons',
    'Cuisine internationale',
    'Végétarienne/Vegan',
    'Fruits de mer',
    'Grillades'
  ];

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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, on intégrerait l'API pour envoyer les données
    console.log('Données du formulaire:', formData);
    setIsSubmitted(true);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.restaurantName && formData.ownerName && formData.email && formData.phone;
      case 2:
        return formData.address && formData.city && formData.cuisineType;
      case 3:
        return formData.agreedToTerms;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <section className="section section-alt" id="inscription">
        <div className="container">
          <div className="success-container" style={styles.successContainer}>
            <div className="success-card" style={styles.successCard}>
              <div style={styles.successIcon}>✅</div>
              <h2 className="heading-lg text-center">
                Demande envoyée avec succès !
              </h2>
              <p style={styles.successMessage}>
                Merci pour votre intérêt, <strong>{formData.ownerName}</strong> ! 
                Nous avons bien reçu votre demande d'inscription pour <strong>{formData.restaurantName}</strong>.
              </p>
              <p style={styles.successDetails}>
                Notre équipe va examiner votre dossier et vous contacter dans les 48 heures 
                pour finaliser votre inscription et vous accompagner dans la mise en place.
              </p>
              <div style={styles.nextSteps}>
                <h3 style={styles.nextStepsTitle}>Prochaines étapes :</h3>
                <ul className="steps-list" style={styles.stepsList}>
                  <li>📞 Appel de notre équipe commerciale</li>
                  <li>📋 Validation de votre dossier</li>
                  <li>📱 Formation à l'utilisation de la plateforme</li>
                  <li>🚀 Lancement de votre restaurant sur Blinky</li>
                </ul>
              </div>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                  setFormData({
                    restaurantName: '',
                    ownerName: '',
                    email: '',
                    phone: '',
                    address: '',
                    city: '',
                    cuisineType: '',
                    description: '',
                    hasDelivery: false,
                    acceptsOnlinePayment: false,
                    agreedToTerms: false
                  });
                }}
              >
                Nouvelle inscription
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section section-alt" id="inscription">
      <div className="container">
        {/* En-tête de section */}
        <div className="section-header" style={styles.sectionHeader}>
          <h2 className="heading-lg text-center">
            Rejoignez le réseau <span className="text-red">Blinky</span>
          </h2>
          <p className="text-lg text-center text-gray" style={styles.sectionSubtitle}>
            Développez votre restaurant avec notre plateforme de livraison moderne. 
            Inscription simple et accompagnement personnalisé.
          </p>
        </div>

        <div className="main-content" style={styles.mainContent}>
          {/* Avantages */}
          <div className="benefits-section" style={styles.benefitsSection}>
            <h3 className="heading-md text-center" style={styles.benefitsTitle}>
              Pourquoi choisir Blinky ?
            </h3>
            <div className="benefits-grid grid grid-3" style={styles.benefitsGrid}>
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card" style={styles.benefitCard}>
                  <div style={styles.benefitIcon}>{benefit.icon}</div>
                  <h4 style={styles.benefitTitle}>{benefit.title}</h4>
                  <p style={styles.benefitDescription}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Formulaire */}
          <div className="form-section" style={styles.formSection}>
            <div className="form-container" style={styles.formContainer}>
              {/* Indicateur de progression */}
              <div className="progress-indicator" style={styles.progressIndicator}>
                <div className="progress-bar" style={styles.progressBar}>
                  <div 
                    className="progress-fill"
                    style={{
                      ...styles.progressFill,
                      width: `${(currentStep / 3) * 100}%`
                    }}
                  ></div>
                </div>
                <div className="step-indicators" style={styles.stepIndicators}>
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`step-indicator${currentStep >= step ? ' active' : ''}`}
                      style={{
                        ...styles.stepIndicator,
                        ...(currentStep >= step ? styles.stepActive : {})
                      }}
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} style={styles.form}>
                {/* Étape 1: Informations de base */}
                {currentStep === 1 && (
                  <div className="form-step" style={styles.formStep}>
                    <h3 style={styles.stepTitle}>Informations de base</h3>
                    <div className="form-grid" style={styles.formGrid}>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Nom du restaurant *</label>
                        <input
                          type="text"
                          name="restaurantName"
                          value={formData.restaurantName}
                          onChange={handleInputChange}
                          className="input"
                          style={styles.input}
                          placeholder="Ex: Restaurant Al Fassia"
                          required
                        />
                      </div>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Nom du propriétaire *</label>
                        <input
                          type="text"
                          name="ownerName"
                          value={formData.ownerName}
                          onChange={handleInputChange}
                          className="input"
                          style={styles.input}
                          placeholder="Votre nom complet"
                          required
                        />
                      </div>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="input"
                          style={styles.input}
                          placeholder="votre@email.com"
                          required
                        />
                      </div>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Téléphone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="input"
                          style={styles.input}
                          placeholder="+212 6XX XXX XXX"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Étape 2: Localisation et type */}
                {currentStep === 2 && (
                  <div className="form-step" style={styles.formStep}>
                    <h3 style={styles.stepTitle}>Localisation et spécialités</h3>
                    <div className="form-grid" style={styles.formGrid}>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Adresse complète *</label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="textarea"
                          style={styles.textarea}
                          placeholder="Adresse complète de votre restaurant"
                          rows="3"
                          required
                        />
                      </div>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Ville *</label>
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="select"
                          style={styles.select}
                          required
                        >
                          <option value="">Sélectionnez votre ville</option>
                          {cities.map((city) => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                      </div>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Type de cuisine *</label>
                        <select
                          name="cuisineType"
                          value={formData.cuisineType}
                          onChange={handleInputChange}
                          className="select"
                          style={styles.select}
                          required
                        >
                          <option value="">Sélectionnez le type de cuisine</option>
                          {cuisineTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Description (optionnel)</label>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          className="textarea"
                          style={styles.textarea}
                          placeholder="Décrivez votre restaurant, vos spécialités..."
                          rows="3"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Étape 3: Services et confirmation */}
                {currentStep === 3 && (
                  <div className="form-step" style={styles.formStep}>
                    <h3 style={styles.stepTitle}>Services et confirmation</h3>
                    <div className="checkbox-group" style={styles.checkboxGroup}>
                      <label style={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          name="hasDelivery"
                          checked={formData.hasDelivery}
                          onChange={handleInputChange}
                          style={styles.checkbox}
                        />
                        <span style={styles.checkboxText}>
                          Mon restaurant propose déjà un service de livraison
                        </span>
                      </label>
                      <label style={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          name="acceptsOnlinePayment"
                          checked={formData.acceptsOnlinePayment}
                          onChange={handleInputChange}
                          style={styles.checkbox}
                        />
                        <span style={styles.checkboxText}>
                          J'accepte les paiements en ligne
                        </span>
                      </label>
                      <label style={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          name="agreedToTerms"
                          checked={formData.agreedToTerms}
                          onChange={handleInputChange}
                          style={styles.checkbox}
                          required
                        />
                        <span style={styles.checkboxText}>
                          J'accepte les <a href="#" style={styles.link}>conditions d'utilisation</a> et la 
                          <a href="#" style={styles.link}> politique de confidentialité</a> *
                        </span>
                      </label>
                    </div>
                    
                    <div style={styles.summarySection}>
                      <h4 style={styles.summaryTitle}>Récapitulatif de votre inscription</h4>
                      <div className="summary-grid" style={styles.summaryGrid}>
                        <div style={styles.summaryItem}>
                          <strong>Restaurant:</strong> {formData.restaurantName}
                        </div>
                        <div style={styles.summaryItem}>
                          <strong>Propriétaire:</strong> {formData.ownerName}
                        </div>
                        <div style={styles.summaryItem}>
                          <strong>Ville:</strong> {formData.city}
                        </div>
                        <div style={styles.summaryItem}>
                          <strong>Type de cuisine:</strong> {formData.cuisineType}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Boutons de navigation */}
                <div className="form-actions" style={styles.formActions}>
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="btn btn-secondary"
                    >
                      Précédent
                    </button>
                  )}
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="btn btn-primary"
                      disabled={!isStepValid()}
                      style={!isStepValid() ? styles.disabledButton : {}}
                    >
                      Suivant
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={!isStepValid()}
                      style={!isStepValid() ? styles.disabledButton : {}}
                    >
                      Envoyer ma demande
                    </button>
                  )}
                </div>
              </form>
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
  mainContent: {
    display: 'grid',
    gap: '4rem',
  },
  benefitsSection: {
    marginBottom: '2rem',
  },
  benefitsTitle: {
    marginBottom: '3rem',
    color: 'var(--gray-900)',
  },
  benefitsGrid: {
    gap: '2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  benefitCard: {
    backgroundColor: 'var(--primary-white)',
    padding: '2rem 1.5rem',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: 'var(--shadow)',
    transition: 'transform 0.3s ease',
  },
  benefitIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  benefitTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--gray-900)',
    marginBottom: '0.5rem',
  },
  benefitDescription: {
    fontSize: '0.9rem',
    color: 'var(--gray-700)',
    lineHeight: '1.5',
  },
  formSection: {
    display: 'flex',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: 'var(--primary-white)',
    padding: '3rem',
    borderRadius: '16px',
    boxShadow: 'var(--shadow-lg)',
    maxWidth: '800px',
    width: '100%',
  },
  progressIndicator: {
    marginBottom: '3rem',
  },
  progressBar: {
    width: '100%',
    height: '4px',
    backgroundColor: 'var(--gray-300)',
    borderRadius: '2px',
    marginBottom: '1rem',
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'var(--primary-red)',
    borderRadius: '2px',
    transition: 'width 0.3s ease',
  },
  stepIndicators: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  stepIndicator: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: 'var(--gray-300)',
    color: 'var(--gray-700)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.9rem',
    fontWeight: '600',
  },
  stepActive: {
    backgroundColor: 'var(--primary-red)',
    color: 'var(--primary-white)',
  },
  form: {
    width: '100%',
  },
  formStep: {
    marginBottom: '2rem',
  },
  stepTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: 'var(--gray-900)',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--gray-900)',
    marginBottom: '0.5rem',
  },
  input: {
    padding: '12px 16px',
    border: '2px solid var(--gray-300)',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    padding: '12px 16px',
    border: '2px solid var(--gray-300)',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    resize: 'vertical',
    fontFamily: 'inherit',
  },
  select: {
    padding: '12px 16px',
    border: '2px solid var(--gray-300)',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    backgroundColor: 'var(--primary-white)',
  },
  checkboxGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2rem',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    cursor: 'pointer',
  },
  checkbox: {
    width: '18px',
    height: '18px',
    marginTop: '2px',
  },
  checkboxText: {
    fontSize: '0.9rem',
    color: 'var(--gray-700)',
    lineHeight: '1.5',
  },
  link: {
    color: 'var(--primary-red)',
    textDecoration: 'none',
    marginLeft: '3px'
  },
  summarySection: {
    backgroundColor: 'var(--gray-100)',
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '2rem',
  },
  summaryTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--gray-900)',
    marginBottom: '1rem',
  },
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.75rem',
  },
  summaryItem: {
    fontSize: '0.9rem',
    color: 'var(--gray-700)',
  },
  formActions: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
  },
  disabledButton: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  successContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
  },
  successCard: {
    backgroundColor: 'var(--primary-white)',
    padding: '3rem',
    borderRadius: '16px',
    boxShadow: 'var(--shadow-lg)',
    textAlign: 'center',
    maxWidth: '600px',
  },
  successIcon: {
    fontSize: '4rem',
    marginBottom: '2rem',
  },
  successMessage: {
    fontSize: '1.1rem',
    color: 'var(--gray-700)',
    marginBottom: '1.5rem',
    lineHeight: '1.6',
  },
  successDetails: {
    fontSize: '1rem',
    color: 'var(--gray-700)',
    marginBottom: '2rem',
    lineHeight: '1.6',
  },
  nextSteps: {
    backgroundColor: 'var(--gray-100)',
    padding: '2rem',
    borderRadius: '12px',
    marginBottom: '2rem',
    textAlign: 'left',
  },
  nextStepsTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: 'var(--gray-900)',
    marginBottom: '1rem',
  },
  stepsList: {
    listStyle: 'none',
    padding: 0,
  },
};

// Styles CSS pour les interactions et responsive
const formStyles = `
  .input:focus,
  .textarea:focus,
  .select:focus {
    border-color: var(--primary-red) !important;
  }

  .benefit-card:hover {
    transform: translateY(-4px);
  }

  .link:hover {
    text-decoration: underline !important;
  }

  .steps-list li {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--gray-300);
  }
  .steps-list li:last-child {
    border-bottom: none;
  }

  @media (max-width: 900px) {
    .main-content {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
    .form-grid, .summary-grid {
      grid-template-columns: 1fr !important;
    }
    .benefits-grid {
      grid-template-columns: 1fr !important;
    }
    .form-actions {
      flex-direction: column !important;
    }
    .step-indicators {
      justify-content: center !important;
      gap: 2rem !important;
    }
    .form-container {
      padding: 2rem 1.5rem !important;
    }
  }
  @media (max-width: 480px) {
    .form-container {
      padding: 1.5rem 1rem !important;
    }
    .success-card {
      padding: 2rem 1.5rem !important;
    }
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('restaurant-form-css')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'restaurant-form-css';
  styleSheet.textContent = formStyles;
  document.head.appendChild(styleSheet);
}

export default RestaurantSignUpForm;