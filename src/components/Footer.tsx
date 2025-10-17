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
    window.open('https://www.youtube.com/@mencontrobetel', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/mencontrobetel', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+5511989073079', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:enbetel@enbetel.com.br', '_self');
  };

  const handleDvelloperClick = () => {
    window.open('https://www.dvelloper.com.br', '_blank');
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#2E3640] via-[#2B3340] to-[#1F2937] text-white py-20 md:py-16">
      {/* decorativos suaves */}
      <div className="pointer-events-none absolute -top-24 -left-32 w-[28rem] h-[28rem] bg-betel-gold/10 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-32 w-[26rem] h-[26rem] bg-betel-red/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Conteúdo principal */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 place-items-center md:place-items-start">
            {/* Logo e descrição */}
            <div className="lg:col-span-2 w-full">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 md:p-7 shadow-lg transition-transform hover:-translate-y-0.5">
                <div className="mb-6 text-center md:text-left">
                  <img
                    src="/lovable-uploads/LogoRodape.png"
                    alt="Ministério Encontro Betel"
                    className="h-20 md:h-28 w-auto mx-auto md:mx-0 drop-shadow-md"
                  />
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 max-w-md text-center md:text-left mx-auto md:mx-0">
                  Uma igreja que se importa com você.
                </p>

                {/* Redes sociais */}
                <div className="flex justify-center md:justify-start space-x-4">
                  <button
                    onClick={handleYouTubeClick}
                    className="w-10 h-10 gradient-betel rounded-full flex items-center justify-center ring-2 ring-white/40 transition-all duration-300 hover:scale-110 hover:shadow-betel"
                  >
                    <Youtube className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={handleInstagramClick}
                    className="w-10 h-10 gradient-betel rounded-full flex items-center justify-center ring-2 ring-white/40 transition-all duration-300 hover:scale-110 hover:shadow-betel"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Links rápidos */}
            <div className="w-full">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-2 font-playfair text-center md:text-left">
                  Links Rápidos
                </h3>
                <div className="w-16 h-[2px] bg-gradient-to-r from-betel-red via-betel-gold to-betel-gold rounded-full mb-4" />
                <ul className="space-y-2 md:space-y-3 flex flex-col items-center md:items-start">
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
                        className="group relative inline-block text-sm md:text-base text-gray-300 hover:text-betel-gold transition-colors"
                      >
                        {link.label}
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-betel-red via-betel-gold to-betel-gold rounded-full transition-all duration-300 group-hover:w-full" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contato */}
            <div className="w-full">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-6 font-playfair text-center md:text-left">
                  Contato
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3 justify-center md:justify-start">
                    <MapPin className="w-5 h-5 text-betel-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 text-sm">
                        Sede - Jardim Palmira<br />
                        R. Jaime dos Santos Augusto Filho, 52<br />
                        Guarulhos - SP
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3 justify-center md:justify-start">
                    <MapPin className="w-5 h-5 text-betel-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 text-sm">
                        R. Cardon, 1192<br />
                        Jardim Ipanema (Zona Leste)<br />
                        São Paulo - SP, 08041-525
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center space-x-3 justify-center md:justify-start">
                    <Phone className="w-5 h-5 text-betel-gold flex-shrink-0" />
                    <button
                      onClick={handlePhoneClick}
                      className="text-gray-300 text-sm hover:text-betel-gold transition-colors"
                    >
                      (11) 98907-3079
                    </button>
                  </li>
                  <li className="flex items-center space-x-3 justify-center md:justify-start">
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
          </div>

          {/* Divisor e rodapé */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2025 Igreja Encontro Betel. Todos os direitos reservados. Desenvolvido pela empresa {' '}
                <button
                  onClick={handleDvelloperClick}
                  className="relative inline-flex items-center px-3 py-1 bg-gradient-to-r from-betel-gold to-yellow-500 text-betel-gray-dark font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 group overflow-hidden"
                >
                  <span className="relative z-10">DVELLOPER</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-betel-red to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-betel-gold to-yellow-500 group-hover:opacity-0 transition-opacity duration-300 rounded-lg"></div>
                </button>
              </p>

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
