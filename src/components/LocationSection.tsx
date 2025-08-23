import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
const LocationSection = () => {
  const handleDirectionsClick = () => {
    const address = 'R. Cardon, 1192 - Jardim Ipanema, São Paulo - SP, 08041-525';
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };
  const handlePhoneClick = () => {
    window.open('tel:+5511999999999', '_self');
  };
  const handleEmailClick = () => {
    window.open('mailto:enbetel@enbetel.com.br', '_self');
  };
  return <section id="location" className="py-20 bg-betel-gray-light">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-betel-gray-dark mb-6 font-playfair">
            Venha nos <span className="text-gradient">Visitar</span>
          </h2>
          <p className="text-xl text-betel-gray max-w-3xl mx-auto leading-relaxed">
            Você é sempre bem-vindo em nossa casa. Venha fazer parte desta família!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Location Info */}
          <div className="animate-on-scroll">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-betel-gray-dark mb-8 font-playfair text-center">
                Informações de Localização
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-betel rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-betel-gray-dark mb-1">
                      Endereço
                    </h4>
                    <p className="text-betel-gray">
                      R. Cardon, 1192<br />
                      Jardim Ipanema (Zona Leste)<br />
                      São Paulo - SP, 08041-525
                    </p>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-betel rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-betel-gray-dark mb-1">
                      Horários dos Cultos
                    </h4>
                    <div className="text-betel-gray space-y-1">
                      <p>Domingo: 18h00 (Culto da Família)</p>
                      <p>Quarta: 19h30 (Culto)</p>
                      <p>Sexta: 19h30 (Culto)</p>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-betel rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-betel-gray-dark mb-1">
                      Contato
                    </h4>
                    <div className="text-betel-gray space-y-1">
                      <button onClick={handlePhoneClick} className="block hover:text-betel-red transition-colors">
                        (11) 99999-9999
                      </button>
                      <button onClick={handleEmailClick} className="block hover:text-betel-red transition-colors">enbetel@enbetel.com.br</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 text-center">
                <Button size="lg" onClick={handleDirectionsClick} className="bg-betel-red hover:bg-betel-red-dark text-white px-8 py-3 rounded-full font-semibold hover-lift group">
                  <Navigation className="w-5 h-5 mr-2" />
                  Como Chegar
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="animate-on-scroll">
            <div className="bg-white rounded-3xl shadow-2xl p-4 overflow-hidden">
              <div className="h-96 rounded-2xl overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d587.3570726959093!2d-46.44158053546454!3d-23.51940133895651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce674e8214d557%3A0x1c1765afe6ecab9b!2sMinist%C3%A9rio%20Encontro%20Betel%20(Encontro%20Betel%20-%20Vila%20Progresso)!5e0!3m2!1spt-BR!2sbr!4v1754688172530!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-2xl"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default LocationSection;