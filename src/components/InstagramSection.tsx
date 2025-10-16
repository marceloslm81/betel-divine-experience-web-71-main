import React from 'react';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InstagramSection = () => {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/mencontrobetel', '_blank');
  };

  return (
    <section id="instagram" className="py-12 md:py-16 bg-gradient-to-br from-white to-betel-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 gradient-betel rounded-full flex items-center justify-center ring-2 ring-white/60">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-betel-gray-dark font-playfair">
                Siga-nos no Instagram
              </h2>
            </div>
            <p className="text-betel-gray max-w-2xl mx-auto">
              Acompanhe fotos, avisos e momentos especiais da Igreja Ministério Encontro Betel.
            </p>
          </div>

          {/* Removido: Preview Grid de imagens */}
          {/* (antes havia um grid com 6 cards simulando imagens) */}

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={handleInstagramClick}
              aria-label="Abrir Instagram @mencontrobetel"
              className="bg-betel-red hover:bg-betel-red-dark text-white px-8 py-3 rounded-full font-semibold hover-lift focus-visible:ring-2 focus-visible:ring-betel-red/40 w-full sm:w-auto"
            >
              Seguir @mencontrobetel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;