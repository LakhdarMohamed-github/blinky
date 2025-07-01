import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceExplanation from './components/ServiceExplanation';
import RestaurantPartners from './components/RestaurantPartners';
import DeliveryZones from './components/DeliveryZones';
import AppPromotion from './components/AppPromotion';
import RestaurantSignUpForm from './components/RestaurantSignUpForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServiceExplanation />
      <RestaurantPartners />
      <DeliveryZones />
      <AppPromotion />
      <RestaurantSignUpForm />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

