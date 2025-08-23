
import React from 'react';
import { Button } from '@/components/ui/button';
import { Youtube, Instagram, Play } from 'lucide-react';

const HeroSection = () => {
  const handleYouTubeClick = () => {
    window.open('https://www.youtube.com/@igrejaencontrobetel', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/encontrobetel', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=7372&q=80" 
          alt="Hero Background" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/9d9f394a-8ebc-41d0-b89d-c4bce783cfee.png" 
              alt="Ministério Encontro Betel" 
              className="h-32 w-auto mx-auto lg:h-60" 
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair">
            Viva um <span className="text-gradient">Encontro</span> com Deus!
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Seja bem-vindo à Igreja Ministério Encontro Betel, onde vidas são transformadas através do amor de Cristo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={handleYouTubeClick} 
              className="bg-betel-red hover:bg-betel-red-dark text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-lift group"
            >
              <Youtube className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Assista no YouTube
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleInstagramClick} 
              className="border-2 border-white hover:bg-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-lift group text-red-900"
            >
              <Instagram className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Nos siga no Instagram
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
