import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import AboutPreview from '../components/home/AboutPreview';
import PortfolioPreview from '../components/home/PortfolioPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactCTA from '../components/home/ContactCTA';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AboutPreview />
      <PortfolioPreview />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
};

export default HomePage;