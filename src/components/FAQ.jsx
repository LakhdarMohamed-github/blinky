import React, { useState } from 'react';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    // ... (same as your list)
    {
      id: 1,
      category: 'Général',
      question: "Qu'est-ce que Blinky ?",
      answer: 'Blinky est la première application marocaine de livraison de nourriture qui vous connecte aux meilleurs restaurants locaux. Nous proposons une expérience moderne et authentique pour commander vos plats préférés et les recevoir rapidement chez vous.'
    },
    {
      id: 2,
      category: 'Livraison',
      question: 'Dans quelles villes Blinky est-il disponible ?',
      answer: "Blinky est actuellement disponible à Casablanca, Rabat, Marrakech, Fès, Tanger et Agadir. Nous étendons progressivement notre service à d'autres villes marocaines. Vous pouvez vérifier la disponibilité dans votre zone via notre application."
    },
    {
      id: 3,
      category: 'Commande',
      question: 'Comment passer une commande sur Blinky ?',
      answer: "C'est très simple ! Téléchargez l'application, créez votre compte, parcourez les restaurants disponibles dans votre zone, sélectionnez vos plats, ajoutez-les au panier, choisissez votre mode de paiement et confirmez votre commande. Vous recevrez une confirmation et pourrez suivre votre livraison en temps réel."
    },
    {
      id: 4,
      category: 'Paiement',
      question: 'Quels sont les modes de paiement acceptés ?',
      answer: 'Nous acceptons plusieurs modes de paiement : cartes bancaires (Visa, Mastercard), paiement mobile, et paiement à la livraison en espèces. Tous les paiements en ligne sont sécurisés et cryptés pour votre protection.'
    },
    {
      id: 5,
      category: 'Livraison',
      question: 'Combien de temps prend une livraison ?',
      answer: "Le temps de livraison varie généralement entre 25 et 45 minutes selon la distance, le restaurant choisi et l'affluence. Vous pouvez voir le temps estimé avant de confirmer votre commande et suivre la progression en temps réel."
    },
    {
      id: 6,
      category: 'Livraison',
      question: 'Y a-t-il des frais de livraison ?',
      answer: "Les frais de livraison varient selon la distance et le restaurant. Certains restaurants offrent la livraison gratuite pour les commandes dépassant un montant minimum. Les frais sont toujours affichés clairement avant la confirmation de votre commande."
    },
    {
      id: 7,
      category: 'Commande',
      question: 'Puis-je modifier ou annuler ma commande ?',
      answer: "Vous pouvez modifier ou annuler votre commande dans les premières minutes après la confirmation, tant qu'elle n'a pas été acceptée par le restaurant. Après acceptation, contactez notre service client pour toute modification urgente."
    },
    {
      id: 8,
      category: 'Partenaires',
      question: 'Comment devenir restaurant partenaire ?',
      answer: "Pour rejoindre notre réseau de partenaires, remplissez le formulaire d'inscription sur notre site web. Notre équipe vous contactera dans les 48 heures pour examiner votre dossier et vous accompagner dans le processus d'intégration."
    },
    {
      id: 9,
      category: 'Application',
      question: "L'application Blinky est-elle gratuite ?",
      answer: "Oui, l'application Blinky est entièrement gratuite à télécharger et à utiliser. Vous ne payez que pour vos commandes et les éventuels frais de livraison. Aucun abonnement ou frais cachés."
    },
    {
      id: 10,
      category: 'Support',
      question: 'Comment contacter le service client ?',
      answer: "Notre service client est disponible 7j/7 via l'application (chat en direct), par email à support@blinky.ma, ou par téléphone au +212 5XX XXX XXX. Nous nous engageons à répondre rapidement à toutes vos questions."
    },
    {
      id: 11,
      category: 'Général',
      question: 'Blinky propose-t-il des promotions ?',
      answer: 'Oui ! Nous proposons régulièrement des offres spéciales, des codes promo et des réductions pour nos utilisateurs. Activez les notifications pour être informé des dernières promotions et offres exclusives.'
    },
    {
      id: 12,
      category: 'Sécurité',
      question: 'Mes données personnelles sont-elles sécurisées ?',
      answer: "Absolument. Nous prenons la protection de vos données très au sérieux. Toutes vos informations personnelles et de paiement sont cryptées et stockées de manière sécurisée. Nous respectons strictement la réglementation sur la protection des données."
    }
  ];

  const categories = ['Tous', ...new Set(faqData.map(item => item.category))];
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredFAQ = selectedCategory === 'Tous' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        {/* En-tête de section */}
        <div className="section-header" style={styles.sectionHeader}>
          <h2 className="heading-lg text-center">
            Questions <span className="text-red">fréquentes</span>
          </h2>
          <p className="text-lg text-center text-gray" style={styles.sectionSubtitle}>
            Trouvez rapidement les réponses à vos questions sur Blinky. 
            Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à nous contacter.
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="category-filters" style={styles.categoryFilters}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="category-button"
              style={{
                ...styles.categoryButton,
                ...(selectedCategory === category ? styles.categoryButtonActive : {})
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Questions et réponses */}
        <div className="faq-container" style={styles.faqContainer}>
          <div className="faq-list" style={styles.faqList}>
            {filteredFAQ.map((item) => (
              <div key={item.id} className="faq-item" style={styles.faqItem}>
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className="question-button"
                  style={styles.questionButton}
                  aria-expanded={openQuestion === item.id}
                >
                  <div style={styles.questionContent}>
                    <span style={styles.categoryTag}>{item.category}</span>
                    <h3 className="question-text" style={styles.questionText}>{item.question}</h3>
                  </div>
                  <div className={`expand-icon${openQuestion === item.id ? " open" : ""}`} style={{
                    ...styles.expandIcon,
                    ...(openQuestion === item.id ? styles.expandIconOpen : {})
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M6 9L12 15L18 9" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
                
                {openQuestion === item.id && (
                  <div style={styles.answerContainer}>
                    <div style={styles.answerContent}>
                      <p style={styles.answerText}>{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Section contact */}
          <div className="contact-section" style={styles.contactSection}>
            <div className="contact-card" style={styles.contactCard}>
              <h3 className="heading-sm text-white">
                Vous ne trouvez pas votre réponse ?
              </h3>
              <p style={styles.contactDescription}>
                Notre équipe de support est là pour vous aider. 
                Contactez-nous et nous vous répondrons rapidement.
              </p>
              <div className="contact-methods" style={styles.contactMethods}>
                <div className="contact-method" style={styles.contactMethod}>
                  <div style={styles.contactIcon}>📧</div>
                  <div style={styles.contactInfo}>
                    <h4 style={styles.contactTitle}>Email</h4>
                    <p style={styles.contactDetail}>support@blinky.ma</p>
                  </div>
                </div>
                <div className="contact-method" style={styles.contactMethod}>
                  <div style={styles.contactIcon}>📞</div>
                  <div style={styles.contactInfo}>
                    <h4 style={styles.contactTitle}>Téléphone</h4>
                    <p style={styles.contactDetail}>+212 5XX XXX XXX</p>
                  </div>
                </div>
                <div className="contact-method" style={styles.contactMethod}>
                  <div style={styles.contactIcon}>💬</div>
                  <div style={styles.contactInfo}>
                    <h4 style={styles.contactTitle}>Chat en direct</h4>
                    <p style={styles.contactDetail}>Via l'application</p>
                  </div>
                </div>
              </div>
              <button className="btn btn-secondary">
                Nous contacter
              </button>
            </div>
          </div>
        </div>

        {/* Statistiques de support */}
        <div className="stats-section" style={styles.statsSection}>
          <div className="stats-grid grid grid-3" style={styles.statsGrid}>
            <div className="stat-card" style={styles.statCard}>
              <div style={styles.statNumber}>&lt; 2h</div>
              <div style={styles.statLabel}>Temps de réponse moyen</div>
            </div>
            <div className="stat-card" style={styles.statCard}>
              <div style={styles.statNumber}>98%</div>
              <div style={styles.statLabel}>Taux de satisfaction</div>
            </div>
            <div className="stat-card" style={styles.statCard}>
              <div style={styles.statNumber}>24/7</div>
              <div style={styles.statLabel}>Support disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  sectionHeader: {
    marginBottom: '3rem',
    maxWidth: '800px',
    margin: '0 auto 3rem auto',
  },
  sectionSubtitle: {
    marginTop: '1rem',
  },
  categoryFilters: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '3rem',
  },
  categoryButton: {
    padding: '0.75rem 1.5rem',
    border: '2px solid var(--gray-300)',
    backgroundColor: 'var(--primary-white)',
    color: 'var(--gray-700)',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: '500',
    fontSize: '0.9rem',
  },
  categoryButtonActive: {
    backgroundColor: 'var(--primary-red)',
    borderColor: 'var(--primary-red)',
    color: 'var(--primary-white)',
  },
  faqContainer: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '3rem',
    alignItems: 'flex-start',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  faqItem: {
    backgroundColor: 'var(--primary-white)',
    borderRadius: '12px',
    boxShadow: 'var(--shadow)',
    overflow: 'hidden',
    transition: 'box-shadow 0.3s ease',
  },
  questionButton: {
    width: '100%',
    padding: '1.5rem',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'left',
    transition: 'background-color 0.3s ease',
  },
  questionContent: {
    flex: 1,
  },
  categoryTag: {
    display: 'inline-block',
    backgroundColor: 'var(--light-red)',
    color: 'var(--primary-red)',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  questionText: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--gray-900)',
    margin: 0,
    lineHeight: '1.4',
  },
  expandIcon: {
    color: 'var(--gray-500)',
    transition: 'transform 0.3s ease, color 0.3s ease',
    marginLeft: '1rem',
  },
  expandIconOpen: {
    transform: 'rotate(180deg)',
    color: 'var(--primary-red)',
  },
  answerContainer: {
    borderTop: '1px solid var(--gray-200)',
    animation: 'slideDown 0.3s ease-out',
  },
  answerContent: {
    padding: '1.5rem',
    backgroundColor: 'var(--gray-100)',
  },
  answerText: {
    color: 'var(--gray-700)',
    lineHeight: '1.6',
    margin: 0,
  },
  contactSection: {
    position: 'sticky',
    top: '2rem',
  },
  contactCard: {
    background: 'linear-gradient(135deg, var(--primary-red) 0%, var(--secondary-red) 100%)',
    padding: '2rem',
    borderRadius: '16px',
    color: 'var(--primary-white)',
    textAlign: 'center',
  },
  contactDescription: {
    opacity: 0.9,
    marginBottom: '2rem',
    lineHeight: '1.6',
  },
  contactMethods: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2rem',
  },
  contactMethod: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    textAlign: 'left',
  },
  contactIcon: {
    fontSize: '1.5rem',
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactInfo: {
    flex: 1,
  },
  contactTitle: {
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '0.25rem',
  },
  contactDetail: {
    fontSize: '0.8rem',
    opacity: 0.9,
  },
  statsSection: {
    marginTop: '4rem',
  },
  statsGrid: {
    gap: '2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  statCard: {
    backgroundColor: 'var(--primary-white)',
    padding: '2rem 1.5rem',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: 'var(--shadow)',
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
};

// Styles CSS pour les animations et interactions
const faqStyles = `
  @keyframes slideDown {
    from {
      opacity: 0;
      max-height: 0;
    }
    to {
      opacity: 1;
      max-height: 200px;
    }
  }
  
  .question-button:hover {
    background-color: var(--gray-100) !important;
  }
  
  .question-button:hover .expand-icon {
    color: var(--primary-red) !important;
  }
  
  .faq-item:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
  }
  
  .category-button:hover {
    border-color: var(--primary-red) !important;
    color: var(--primary-red) !important;
  }
  
  .stat-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
  }
  
  @media (max-width: 900px) {
    .faq-container {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
    .contact-section {
      position: static !important;
    }
    .category-filters {
      justify-content: flex-start !important;
      overflow-x: auto !important;
      padding-bottom: 1rem !important;
    }
    .category-button {
      flex-shrink: 0 !important;
    }
    .question-button {
      padding: 1rem !important;
    }
    .question-text {
      font-size: 1rem !important;
    }
    .contact-methods {
      gap: 0.75rem !important;
    }
    .contact-method {
      flex-direction: column !important;
      text-align: center !important;
    }
    .stats-grid {
      grid-template-columns: 1fr !important;
    }
  }
  @media (max-width: 480px) {
    .question-button {
      flex-direction: column !important;
      align-items: flex-start !important;
    }
    .expand-icon {
      margin-left: 0 !important;
      margin-top: 0.5rem !important;
      align-self: flex-end !important;
    }
    .contact-card {
      padding: 1.5rem !important;
    }
  }
`;

// Inject CSS
if (typeof document !== 'undefined' && !document.getElementById('faq-css')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'faq-css';
  styleSheet.textContent = faqStyles;
  document.head.appendChild(styleSheet);
}

export default FAQ;