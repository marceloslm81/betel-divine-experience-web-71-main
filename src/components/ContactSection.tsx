import React from 'react';
import { Mail, Phone, MessageSquare, MapPin, Clock, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511989073079', '_blank');
  };
  const handlePhoneClick = () => {
    window.open('tel:+5511989073079', '_self');
  };
  const handleEmailClick = () => {
    window.open('mailto:enbetel@enbetel.com.br', '_self');
  };

  // Ação segura para abrir o Google Maps
  const openMaps = (address: string) => {
    const encoded = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encoded}`, '_blank');
  };
  return (
    <section id="contact" className="py-20 bg-betel-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-betel-gray-dark mb-6 font-playfair">
              Fale <span className="text-gradient">Conosco</span>
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-betel-red via-betel-gold to-betel-gold rounded-full" />
            <p className="mt-6 text-xl text-betel-gray max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para ouvir você. Entre em contato conosco através dos canais abaixo!
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* WhatsApp */}
            <div className="bg-white/90 backdrop-blur rounded-3xl border-2 border-betel-gray-light shadow-2xl p-8 text-center hover-lift animate-on-scroll transition-all hover:ring-2 hover:ring-betel-red/40">
              <button onClick={handleWhatsAppClick} className="w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-betel-red/50 rounded-2xl">
                <div className="w-16 h-16 gradient-betel rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-white/70">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-betel-gray-dark mb-3 font-playfair">
                  WhatsApp
                </h3>
                <p className="text-betel-gray mb-2">Fale conosco pelo WhatsApp</p>
                <p className="text-lg font-semibold text-betel-red">(11) 98907-3079</p>
              </button>
            </div>

            {/* Phone */}
            <div className="bg-white/90 backdrop-blur rounded-3xl border-2 border-betel-gray-light shadow-2xl p-8 text-center hover-lift animate-on-scroll transition-all hover:ring-2 hover:ring-betel-red/40">
              <button onClick={handlePhoneClick} className="w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-betel-red/50 rounded-2xl">
                <div className="w-16 h-16 gradient-betel rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-white/70">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-betel-gray-dark mb-3 font-playfair">
                  Telefone
                </h3>
                <p className="text-betel-gray mb-2">Ligue para nós</p>
                <p className="text-lg font-semibold text-betel-red">(11) 98907-3079</p>
              </button>
            </div>

            {/* Email */}
            <div className="bg-white/90 backdrop-blur rounded-3xl border-2 border-betel-gray-light shadow-2xl p-8 text-center hover-lift animate-on-scroll transition-all hover:ring-2 hover:ring-betel-gold/40">
              <button onClick={handleEmailClick} className="w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-betel-gold/50 rounded-2xl">
                <div className="w-16 h-16 gradient-betel rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-white/70">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-betel-gray-dark mb-3 font-playfair">
                  E-mail
                </h3>
                <p className="text-betel-gray mb-2">Envie um e-mail</p>
                <p className="text-lg font-semibold text-betel-blue">enbetel@enbetel.com.br</p>
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Office Hours */}
            <div className="bg-gradient-to-br from-betel-gold-light to-betel-yellow rounded-3xl p-8 animate-on-scroll shadow-2xl">
              <div className="text-center">
                <Clock className="w-12 h-12 text-betel-red mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-betel-gray-dark mb-6 font-playfair">
                  Horário de Atendimento
                </h3>
                <div className="text-betel-gray-dark space-y-2">
                  <p className="font-semibold">Segunda a Sexta: 9h às 17h</p>
                  <p className="font-semibold">Sábado: 9h às 12h</p>
                  <p className="font-semibold">Domingo: Durante os cultos</p>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="bg-white/90 backdrop-blur rounded-3xl border-2 border-betel-gray-light p-8 animate-on-scroll shadow-2xl transition-all hover:ring-2 hover:ring-betel-gold/50">
              <div className="text-center">
                <div className="w-16 h-16 gradient-betel rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-white/70">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-betel-gray-dark mb-6 font-playfair">
                  Nossos Endereços
                </h3>

                <div className="space-y-4 text-left mt-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-betel-gray-dark mb-1">Sede - Jardim Palmira</h4>
                      <p className="text-betel-gray text-sm">R. Jaime dos Santos Augusto Filho, 52</p>
                      <p className="text-betel-gray text-sm">Guarulhos - SP</p>
                    </div>
                    <Button
                      variant="outline"
                      className="rounded-full border-betel-red text-betel-red hover:bg-betel-red hover:text-white focus-visible:ring-2 focus-visible:ring-betel-red/40"
                      onClick={() => openMaps('R. Jaime dos Santos Augusto Filho, 52 - Jardim Palmira, Guarulhos - SP')}
                    >
                      <Navigation className="w-4 h-4 mr-1" /> Como Chegar
                    </Button>
                  </div>

                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-betel-gray-dark mb-1">Vila Progresso</h4>
                      <p className="text-betel-gray text-sm">R. Cardon, 1192 - Jardim Ipanema</p>
                      <p className="text-betel-gray text-sm">São Paulo - SP</p>
                    </div>
                    <Button
                      variant="outline"
                      className="rounded-full border-betel-gold text-betel-gold hover:bg-betel-gold hover:text-white focus-visible:ring-2 focus-visible:ring-betel-gold/40"
                      onClick={() => openMaps('R. Cardon, 1192 - Jardim Ipanema, São Paulo - SP')}
                    >
                      <Navigation className="w-4 h-4 mr-1" /> Como Chegar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;