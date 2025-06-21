
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection'; // Correctly points to AboutSection.tsx
import SkillsSection from './components/ServicesSection'; // Updated path
import ExperienceEducationSection from './components/ExperienceEducationSection';
import ProjectsSection from './components/CreatorGallerySection'; // Updated path
import TechnologiesMarquee from './components/BrandsMarquee'; // Updated path
import ContactSection from './components/JoinNetworkSection'; // Updated path
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceEducationSection />
        <ProjectsSection />
        <TechnologiesMarquee />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;