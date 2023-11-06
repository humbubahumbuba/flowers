import { FC } from 'react';
import { Navbar, Footer } from '@/features';
import { AboutSection } from './pages/home/about-section/AboutSection';
import { BenefitsSection } from './pages/home/benefits-section/BenefitsSection';
import { ContactsSection } from './pages/home/contacts-section/ContactsSection';
import { ServiceSection } from './pages/home/service-section/ServiceSection';
import { ReviewsSection } from './pages/home/reviews-section/ReviewsSection';
import { HeroSection } from './pages/home/hero-section/HeroSection';
// import { Button } from './shared/components/button/Button';

export const App: FC = () => {
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
