import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationSection = () => {
  const handleDirectionsClickVilaProgresso = () => {
    const address = 'R. Cardon, 1192 - Jardim Ipanema, São Paulo - SP, 08041-525';
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const handleDirectionsClickSede = () => {
    const address = 'R. Jaime dos Santos Augusto Filho, 52 - (Sede) Jd Palmira, Guarulhos - SP';
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+5511999999999', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:enbetel@enbetel.com.br', '_self');
  };

  return (
    <section id="location" className="py-20 bg-gradient-to-br from-betel-blue/5 to-betel-purple/5">
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

          {/* Sede Vila Palmira */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-betel-gray-dark mb-8 font-playfair text-center">
              Encontro Betel Sede - <span className="text-gradient">Jardim Palmira</span>
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Location Info Sede */}
              <div className="animate-on-scroll">
                <div className="bg-white rounded-3xl shadow-2xl p-8">
                  <h4 className="text-2xl font-bold text-betel-gray-dark mb-8 font-playfair text-center">
                    Informações da Sede
                  </h4>

                  <div className="space-y-6">
                    {/* Address Sede */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-betel rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-betel-gray-dark mb-1">
                          Endereço
                        </h5>
                        <p className="text-betel-gray">
                          R. Jaime dos Santos Augusto Filho, 52<br />
                          Jardim Palmira<br />
                          Guarulhos - SP
                        </p>
                      </div>
                    </div>

                    {/* Schedule Sede */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-betel rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-betel-gray-dark mb-1">
                          Horários dos Cultos
                        </h5>
                        <div className="text-betel-gray space-y-1">
                          <p>Sabado: 19h00 (Culto de Adoração)</p>
                          <p>Domingo: 18h00 (Culto da Família)</p>
                          <p>Terça: 19h00 (Culto de Adoração)</p>
                          <p>Quarta: 15h00 (Culto de Ensino)</p>
                        </div>
                      </div>
                    </div>

                    {/* Contact Sede */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-betel rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-betel-gray-dark mb-1">
                          Contato
                        </h5>
                        <div className="text-betel-gray space-y-1">
                          <button onClick={handlePhoneClick} className="block hover:text-betel-red transition-colors">
                            (11) 98907-3079
                          </button>
                          <button onClick={handleEmailClick} className="block hover:text-betel-red transition-colors">
                            enbetel@enbetel.com.br
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button Sede */}
                  <div className="mt-8 text-center">
                    <Button 
                      size="lg" 
                      onClick={handleDirectionsClickSede} 
                      className="bg-betel-red hover:bg-betel-red-dark text-white px-8 py-3 rounded-full font-semibold hover-lift group"
                    >
                      <Navigation className="w-5 h-5 mr-2" />
                      Como Chegar - Sede
                    </Button>
                  </div>
                </div>
              </div>

              {/* Map Sede */}
              <div className="animate-on-scroll">
                <div className="bg-white rounded-3xl shadow-2xl p-4 overflow-hidden">
                  <div className="h-96 rounded-2xl overflow-hidden relative">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.683089100556!2d-46.56351242359218!3d-23.435812478886312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef45a6a046d03%3A0xfcf6fad167b0540e!2sMinist%C3%A9rio%20Encontro%20Betel%20-%20(Sede)%20Jd%20Palmira!5e0!3m2!1spt-BR!2sbr!4v1757791912672!5m2!1spt-BR!2sbr" 
                      width="100%" 
                      height="100%" 
                      style={{
                        border: 0,
                        borderRadius: '1rem'
                      }} 
                      allowFullScreen
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mapa da Sede Vila Palmira"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vila Progresso */}
          <div>
            <h3 className="text-4xl font-bold text-betel-gray-dark mb-8 font-playfair text-center">
              Encontro Betel - <span className="text-gradient">Vila Progresso</span>
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Location Info Vila Progresso */}
              <div className="animate-on-scroll">
                <div className="bg-white rounded-3xl shadow-2xl p-8">
                  <h4 className="text-2xl font-bold text-betel-gray-dark mb-8 font-playfair text-center">
                    Informações de Localização
                  </h4>

                  <div className="space-y-6">
                    {/* Address Vila Progresso */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-betel rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-betel-gray-dark mb-1">
                          Endereço
                        </h5>
                        <p className="text-betel-gray">
                          R. Cardon, 1192<br />
                          Jardim Ipanema (Zona Leste)<br />
                          São Paulo - SP, 08041-525
                        </p>
                      </div>
                    </div>

                    {/* Schedule Vila Progresso */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-betel rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-betel-gray-dark mb-1">
                          Horários dos Cultos
                        </h5>
                        <div className="text-betel-gray space-y-1">
                          <p>Domingo: 18h00 (Culto da Família)</p>
                          <p>Quarta: 19h30 (Culto)</p>
                          <p>Sexta: 19h30 (Culto)</p>
                        </div>
                      </div>
                    </div>

                    {/* Contact Vila Progresso */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-betel rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-betel-gray-dark mb-1">
                          Contato
                        </h5>
                        <div className="text-betel-gray space-y-1">
                          <button onClick={handlePhoneClick} className="block hover:text-betel-red transition-colors">
                            (11) 98907-3079
                          </button>
                          <button onClick={handleEmailClick} className="block hover:text-betel-red transition-colors">
                            enbetel@enbetel.com.br
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button Vila Progresso */}
                  <div className="mt-8 text-center">
                    <Button 
                      size="lg" 
                      onClick={handleDirectionsClickVilaProgresso} 
                      className="bg-betel-red hover:bg-betel-red-dark text-white px-8 py-3 rounded-full font-semibold hover-lift group"
                    >
                      <Navigation className="w-5 h-5 mr-2" />
                      Como Chegar - Vila Progresso
                    </Button>
                  </div>
                </div>
              </div>

              {/* Map Vila Progresso */}
              <div className="animate-on-scroll">
                <div className="bg-white rounded-3xl shadow-2xl p-4 overflow-hidden">
                  <div className="h-96 rounded-2xl overflow-hidden relative">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d587.3570726959093!2d-46.44158053546454!3d-23.51940133895651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce674e8214d557%3A0x1c1765afe6ecab9b!2sMinist%C3%A9rio%20Encontro%20Betel%20(Encontro%20Betel%20-%20Vila%20Progresso)!5e0!3m2!1spt-BR!2sbr!4v1754688172530!5m2!1spt-BR!2sbr" 
                      width="100%" 
                      height="100%" 
                      style={{
                        border: 0,
                        borderRadius: '1rem'
                      }} 
                      allowFullScreen
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mapa da Vila Progresso"
                    />
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

export default LocationSection;