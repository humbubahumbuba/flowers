import { FC } from 'react';
import { Navbar, Footer } from '@/features';
import { AboutSection } from './pages/home/about-section/AboutSection';

export const App: FC = () => {
  return (
    <>
      <Navbar />
      <AboutSection />
      <Footer />
    </>
  );
};
