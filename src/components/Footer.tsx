import React from 'react';
import { Heart, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleYouTubeClick = () => {
    window.open('https://www.youtube.com/@igrejaencontrobetel', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/encontrobetel', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+5511999999999', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:enbetel@enbetel.com.br', '_self');
  };

  const handleDvelloperClick = () => {
    window.open('https://www.dvelloper.com.br', '_blank');
  };

  return (
    <footer className="bg-betel-gray-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img
                  src="/lovable-uploads/logo-encontro-betel.png"
                  alt="Ministério Encontro Betel"
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Igreja Encontro Betel - Um lugar para viver algo novo com Deus.
                Transformando vidas através do amor de Cristo.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                <button
                  onClick={handleYouTubeClick}
                  className="w-10 h-10 bg-betel-red rounded-full flex items-center justify-center hover:bg-betel-red-dark transition-colors hover-lift"
                >
                  <Youtube className="w-5 h-5" />
                </button>
                <button
                  onClick={handleInstagramClick}
                  className="w-10 h-10 bg-betel-red rounded-full flex items-center justify-center hover:bg-betel-red-dark transition-colors hover-lift"
                >
                  <Instagram className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 font-playfair">
                Links Rápidos
              </h3>
              <ul className="space-y-3">
                {[
                  { label: 'Início', id: 'hero' },
                  { label: 'Sobre Nós', id: 'about' },
                  { label: 'Eventos', id: 'events' },
                  { label: 'Palavra da Semana', id: 'devotional' },
                  { label: 'Vídeos', id: 'videos' },
                  { label: 'Contato', id: 'contact' }
                ].map(link => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-betel-gold transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 font-playfair">
                Contato
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-betel-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">
                      R. Cardon, 1192<br />
                      Jardim Ipanema (Zona Leste)<br />
                      São Paulo - SP, 08041-525
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-betel-gold flex-shrink-0" />
                  <button
                    onClick={handlePhoneClick}
                    className="text-gray-300 text-sm hover:text-betel-gold transition-colors"
                  >
                    (11) 99999-9999
                  </button>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-betel-gold flex-shrink-0" />
                  <button
                    onClick={handleEmailClick}
                    className="text-gray-300 text-sm hover:text-betel-gold transition-colors"
                  >
                    enbetel@enbetel.com.br
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2025 Igreja Encontro Betel. Todos os direitos reservados. Desenvolvido pela empresa{' '}
                <button
                  onClick={handleDvelloperClick}
                  className="text-betel-gold hover:text-betel-red transition-colors underline"
                >
                  DVELLOPER
                </button>
              </p>

              {/* Final Message */}
              <div className="flex items-center space-x-2 text-betel-gold">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Um lugar para viver algo novo com Deus
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
