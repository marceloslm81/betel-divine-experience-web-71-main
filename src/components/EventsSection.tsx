import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';
const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  
  const eventsVilaProgresso = [{
    title: "Culto",
    date: "Todas as Quartas-Feiras",
    time: "19:30",
    location: "Encontro Betel - Vila Progresso",
    description: "Venha adorar e receber uma palavra de Deus que transformará sua vida.",
    type: "regular",
    fullDescription: "Nosso culto é um momento especial de adoração, louvor e ministração da Palavra de Deus. Venha com sua família e experimente a presença do Senhor conosco. Temos ministração para todas as idades.",
    pastor: "Presbítero Celso",
    dresscode: "Traje casual ou social",

  }, {
    title: "Culto",
    date: "Todas as Sextas-Feiras",
    time: "19:30",
    location: "Encontro Betel - Vila Progresso",
    description: "Um momento especial de adoração, louvor e palavra de Deus.",
    type: "regular",
    fullDescription: "Todos os domingos nos reunimos para um poderoso momento de adoração. É uma oportunidade de louvar e adorar o Senhor. Venha participar deste momento de intimidade com Deus.",
    pastor: "Presbítero Celso",
    dresscode: "Traje social ou casual",

  }, {
    title: "Culto da Família",
    date: "Todos os Domingos",
    time: "18:00",
    location: "Encontro Betel - Vila Progresso",
    description: "Louvor e Palavra de Deus para toda a família.",
    type: "regular",
    fullDescription: "Nossa igreja é um lugar de louvor e adoração. Venha participar deste momento de intimidade com Deus.",
    pastor: "Presbítero Celso",
    dresscode: "Traje casual",
  }];

  const eventsVilaPalmira = [{
    title: "Culto de Adoração",
    date: "Todas as Terças-Feiras",
    time: "19:00",
    location: "Encontro Betel - Vila Palmira",
    description: "Momento de intimidade e adoração ao Senhor.",
    type: "regular",
    fullDescription: "Um culto especial dedicado à adoração e louvor. Venha experimentar a presença de Deus em um ambiente de intimidade e reverência.",
    pastor: "Pastor Responsável",
    dresscode: "Traje casual",
  }, {
    title: "Culto de Ensino",
    date: "Todas as Quintas-Feiras",
    time: "19:30",
    location: "Encontro Betel - Vila Palmira",
    description: "Estudo bíblico e crescimento espiritual.",
    type: "regular",
    fullDescription: "Momento dedicado ao estudo da Palavra de Deus e crescimento espiritual. Venha aprender e crescer na fé.",
    pastor: "Pastor Responsável",
    dresscode: "Traje casual",
  }, {
    title: "Culto Dominical",
    date: "Todos os Domingos",
    time: "19:00",
    location: "Encontro Betel - Vila Palmira",
    description: "Celebração dominical com toda a família.",
    type: "regular",
    fullDescription: "Nossa celebração dominical é um momento especial para toda a família. Venha participar deste momento de comunhão e adoração.",
    pastor: "Pastor Responsável",
    dresscode: "Traje social ou casual",
  }];
  return <section id="events" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header Vila Progresso */}
          <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-betel-gray-dark mb-6 font-playfair">
            Eventos <span className="text-gradient">Encontro Betel Vila Progresso</span>
          </h2>
          <p className="text-xl text-betel-gray max-w-3xl mx-auto leading-relaxed">
            Participe dos nossos encontros e viva momentos especiais na presença de Deus
          </p>
        </div>

        {/* Events Grid Vila Progresso - 3 cards per row */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {eventsVilaProgresso.map((event, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover-lift animate-on-scroll group border border-betel-gray-light">
              {event.type === 'special' && (
                <div className="inline-block bg-betel-red text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Especial
                </div>
              )}

            <h3 className="text-xl font-bold text-betel-gray-dark mb-3 font-playfair">
              {event.title}
            </h3>
            <p className="text-betel-gray mb-4 leading-relaxed">
              {event.description}
            </p>

            {/* Event Details */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-betel-gray">
                <Calendar className="w-4 h-4 mr-2 text-betel-red" />
                <span className="text-sm">{event.date}</span>
              </div>
              <div className="flex items-center text-betel-gray">
                <Clock className="w-4 h-4 mr-2 text-betel-red" />
                <span className="text-sm">{event.time}</span>
              </div>
              <div className="flex items-center text-betel-gray">
                <MapPin className="w-4 h-4 mr-2 text-betel-red" />
                <span className="text-sm">{event.location}</span>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-full border-betel-red text-betel-red hover:bg-betel-red hover:text-white transition-all duration-300 group" 
              onClick={() => setSelectedEvent(event)}
            >
              Saiba Mais
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          ))}
        </div>

        {/* Section Header Vila Palmira */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-betel-gray-dark mb-6 font-playfair">
            Eventos <span className="text-gradient">Encontro Betel Sede Jardim Palmira</span>
          </h2>
          <p className="text-xl text-betel-gray max-w-3xl mx-auto leading-relaxed">
            Venha participar dos nossos encontros na sede Vila Palmira
          </p>
        </div>

        {/* Events Grid Vila Palmira - 3 cards per row */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {eventsVilaPalmira.map((event, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover-lift animate-on-scroll group border border-betel-gray-light">
              {event.type === 'special' && (
                <div className="inline-block bg-betel-red text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Especial
                </div>
              )}

              <h3 className="text-xl font-bold text-betel-gray-dark mb-3 font-playfair">
                {event.title}
              </h3>
              <p className="text-betel-gray mb-4 leading-relaxed">
                {event.description}
              </p>

              {/* Event Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-betel-gray">
                  <Calendar className="w-4 h-4 mr-2 text-betel-red" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center text-betel-gray">
                  <Clock className="w-4 h-4 mr-2 text-betel-red" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center text-betel-gray">
                  <MapPin className="w-4 h-4 mr-2 text-betel-red" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full border-betel-red text-betel-red hover:bg-betel-red hover:text-white transition-all duration-300 group" 
                onClick={() => setSelectedEvent(event)}
              >
                Saiba Mais
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Button Vila Palmira */}
        <div className="text-center animate-on-scroll">
          <Link to="/eventos">
            <Button size="lg" className="bg-betel-red hover:bg-betel-red-dark text-white px-8 py-3 rounded-full font-semibold hover-lift">
              Ver Todos os Eventos - Jardim Palmira
            </Button>
          </Link>
        </div>
      </div>
    </div>

    {/* Event Details Modal */}
    <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-betel-gray-dark font-playfair">
            {selectedEvent?.title}
          </DialogTitle>
          <DialogDescription className="text-lg text-betel-gray">
            {selectedEvent?.description}
          </DialogDescription>
        </DialogHeader>

        {selectedEvent && (
          <div className="space-y-6">
          <div className="bg-betel-gray-light rounded-lg p-4">
            <h4 className="font-semibold text-betel-gray-dark mb-2">Detalhes do Evento:</h4>
            <div className="space-y-2 text-sm text-betel-gray">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-betel-red" />
                <span>{selectedEvent.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-betel-red" />
                <span>{selectedEvent.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-betel-red" />
                <span>{selectedEvent.location}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-betel-gray-dark mb-2">Descrição Completa:</h4>
            <p className="text-betel-gray leading-relaxed">{selectedEvent.fullDescription}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-betel-gray-dark mb-1">Ministração:</h4>
              <p className="text-betel-gray text-sm">{selectedEvent.pastor}</p>
            </div>
            <div>
              <h4 className="font-semibold text-betel-gray-dark mb-1">Traje:</h4>
              <p className="text-betel-gray text-sm">{selectedEvent.dresscode}</p>
            </div>
          </div>


        </div>
        )}
      </DialogContent>
    </Dialog>
  </section>;
};
export default EventsSection;