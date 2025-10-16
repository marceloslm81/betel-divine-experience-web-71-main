
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import DevotionalSection from '@/components/DevotionalSection';
import VideosSection from '@/components/VideosSection';
import LocationSection from '@/components/LocationSection';
import DonationSection from '@/components/DonationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import InstagramSection from '@/components/InstagramSection';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Add smooth scrolling to html element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        {/* Mini seção Instagram */}
        <InstagramSection />
        <EventsSection />
        <DevotionalSection />
        <VideosSection />
        <LocationSection />
        <DonationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
