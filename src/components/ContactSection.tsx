import React from 'react';
import { Mail, Phone, MessageSquare, MapPin, Clock } from 'lucide-react';
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
  return (
    <section id="contact" className="py-20 bg-betel-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-betel-gray-dark mb-6 font-playfair">
              Fale <span className="text-gradient">Conosco</span>
            </h2>
            <p className="text-xl text-betel-gray max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para ouvir você. Entre em contato conosco através dos canais abaixo!
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* WhatsApp */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center hover-lift animate-on-scroll">
              <button onClick={handleWhatsAppClick} className="w-full">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-betel-gray-dark mb-3 font-playfair">
                  WhatsApp
                </h3>
                <p className="text-betel-gray mb-2">
                  Fale conosco pelo WhatsApp
                </p>
                <p className="text-lg font-semibold text-green-600">
                  (11) 98907-3079
                </p>
              </button>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center hover-lift animate-on-scroll">
              <button onClick={handlePhoneClick} className="w-full">
                <div className="w-16 h-16 bg-gradient-betel rounded-full flex items-center justify-center mx-auto mb-4 bg-orange-400">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-betel-gray-dark mb-3 font-playfair">
                  Telefone
                </h3>
                <p className="text-betel-gray mb-2">
                  Ligue para nós
                </p>
                <p className="text-lg font-semibold text-betel-red">
                  (11) 98907-3079
                </p>
              </button>
            </div>

            {/* Email */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center hover-lift animate-on-scroll">
              <button onClick={handleEmailClick} className="w-full">
                <div className="w-16 h-16 bg-gradient-betel rounded-full flex items-center justify-center mx-auto mb-4 bg-gray-800">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-betel-gray-dark mb-3 font-playfair">
                  E-mail
                </h3>
                <p className="text-betel-gray mb-2">
                  Envie um e-mail
                </p>
                <p className="text-lg font-semibold text-betel-blue">
                  enbetel@enbetel.com.br
                </p>
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Office Hours */}
            <div className="bg-gradient-to-br from-betel-gold-light to-betel-yellow rounded-3xl p-8 animate-on-scroll">
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
            <div className="bg-white rounded-3xl shadow-2xl p-8 animate-on-scroll">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-betel-red mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-betel-gray-dark mb-6 font-playfair">
                  Nossos Endereços
                </h3>
                <div className="space-y-4 text-left">
                  <div>
                    <h4 className="font-bold text-betel-gray-dark mb-1">Sede - Jardim Palmira</h4>
                    <p className="text-betel-gray text-sm">R. Jaime dos Santos Augusto Filho, 52</p>
                    <p className="text-betel-gray text-sm">Guarulhos - SP</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-betel-gray-dark mb-1">Vila Progresso</h4>
                    <p className="text-betel-gray text-sm">R. Cardon, 1192 - Jardim Ipanema</p>
                    <p className="text-betel-gray text-sm">São Paulo - SP</p>
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