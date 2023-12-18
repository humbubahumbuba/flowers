import { FC, useEffect } from 'react';
import { Navbar, Footer } from '@/features';
import { AboutSection } from './pages/home/about-section/AboutSection';
import { BenefitsSection } from './pages/home/benefits-section/BenefitsSection';
import { ContactsSection } from './pages/home/contacts-section/ContactsSection';
import { ServiceSection } from './pages/home/service-section/ServiceSection';
import { ReviewsSection } from './pages/home/reviews-section/ReviewsSection';
import { HeroSection } from './pages/home/hero-section/HeroSection';
// import { Button } from './shared/components/button/Button';

export const App: FC = () => {
  useEffect(() => {
    fetch('http://localhost:8787/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'valerii.strilets@gmail.com',
      }),
    });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <ContactsSection />
      <ServiceSection />
      <ReviewsSection />
      <Footer />
    </>
  );
};
