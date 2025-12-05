
import React from 'react';
import { Button } from '@/components/ui/button';
import { Youtube, Instagram, Play } from 'lucide-react';

function HeroSection() {
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70 z-10"></div>
        <img 
          src="/lovable-uploads/adorar_a_Deus.png" 
          alt="Igreja Evangélica Interior" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo */}
          {/*<div className="mb-8">
            <img 
              src="/lovable-uploads/9d9f394a-8ebc-41d0-b89d-c4bce783cfee.png" 
              alt="Ministério Encontro Betel" 
              className="h-32 w-auto mx-auto lg:h-60" 
            />
          </div>*/}

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair">
            Na verdade o <span className="text-gradient">Senhor está</span> neste lugar. Gênesis 18:16B
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl mb-6 md:mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Seja bem-vindo à Igreja Ministério Encontro Betel, onde vidas são transformadas através do amor de Cristo.
          </p>

          {/* Destaques (sem botões) */}
          <div className="mt-4 md:mt-6 flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/10 text-white border border-white/30 backdrop-blur-sm">
              Comunhão
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/10 text-white border border-white/30 backdrop-blur-sm">
              Adoração
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/10 text-white border border-white/30 backdrop-blur-sm">
              Palavra
            </span>
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
