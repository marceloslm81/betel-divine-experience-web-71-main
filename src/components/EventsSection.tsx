import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, X, Navigation, Share } from 'lucide-react';
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
    pastor: "Pastor Edvaldo",
    dresscode: "Traje casual",
  }, {
      title: "Culto de Adoração",
      date: "Todos os Sábados",
      time: "19:00",
      location: "M. Encontro Betel Sede Jardim Palmira",
      description: "Culto noturno de adoração e ministração da Palavra.",
      type: "regular",
      fullDescription: "Nosso culto sabatino é um momento especial para encerrar a semana em adoração. Venha participar deste culto de louvor, adoração e ministração da Palavra de Deus.",
      pastor: "Pastor Edvaldo e Miss. Cláudia",
      dresscode: "Traje casual ou social",
      parking: "Estacionamento amplo disponível"
    },
   {
    title: "Culto Da Família",
    date: "Todos os Domingos",
    time: "19:00",
    location: "Encontro Betel - Vila Palmira",
    description: "Celebração com toda a família e ministração da Palavra.",
    type: "regular",
    fullDescription: "Nossa celebração é um momento especial para toda a família. Venha participar deste momento de comunhão e adoração.",
    pastor: "Pastor Edvaldo",
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
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl p-6 transform-gpu transition-all duration-300 group
                   bg-gradient-to-br from-betel-gold-light to-white border-2 border-betel-gold
                   hover:-translate-y-1 hover:shadow-2xl hover:border-betel-yellow
                   ring-1 ring-transparent ring-offset-1 ring-offset-white hover:ring-betel-gold"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-betel-gold-light opacity-30 blur-2xl" />
              {event.type === 'special' && (
                <div className="inline-block bg-gradient-to-r from-betel-gold to-betel-yellow text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  Especial
                </div>
              )}
              <div className="inline-block bg-betel-gold text-white px-2 py-1 rounded-full text-xs font-semibold mb-3">
                Vila Progresso
              </div>

              <h3 className="text-xl font-bold text-betel-gray-dark mb-3 font-playfair">
                {event.title}
              </h3>
              <p className="text-betel-gray mb-4 leading-relaxed">
                {event.description}
              </p>

              {/* Event Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-betel-gray">
                  <Calendar className="w-4 h-4 mr-2 text-betel-gold group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center text-betel-gray">
                  <Clock className="w-4 h-4 mr-2 text-betel-gold group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center text-betel-gray">
                  <MapPin className="w-4 h-4 mr-2 text-betel-gold group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full border-betel-gold text-betel-gold hover:bg-betel-gold hover:text-white transition-all duration-300
                     group hover:shadow-md rounded-xl"
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
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl p-6 transform-gpu transition-all duration-300 group
                   bg-gradient-to-br from-betel-gray-light to-white border-2 border-betel-red
                   hover:-translate-y-1 hover:shadow-2xl hover:border-betel-red-dark
                   ring-1 ring-transparent ring-offset-1 ring-offset-white hover:ring-betel-red"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-betel-red opacity-20 blur-2xl" />
              {event.type === 'special' && (
                <div className="inline-block bg-betel-red text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  Especial
                </div>
              )}
              <div className="inline-block bg-betel-red text-white px-2 py-1 rounded-full text-xs font-semibold mb-3">
                Jardim Palmira
              </div>

              <h3 className="text-xl font-bold text-betel-gray-dark mb-3 font-playfair">
                {event.title}
              </h3>
              <p className="text-betel-gray mb-4 leading-relaxed">
                {event.description}
              </p>

              {/* Event Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-betel-gray">
                  <Calendar className="w-4 h-4 mr-2 text-betel-red group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center text-betel-gray">
                  <Clock className="w-4 h-4 mr-2 text-betel-red group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center text-betel-gray">
                  <MapPin className="w-4 h-4 mr-2 text-betel-red group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full border-betel-red text-betel-red hover:bg-betel-red hover:text-white transition-all duration-300
                     group hover:shadow-md rounded-xl"
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
              Ver Todos os Eventos
            </Button>
          </Link>
        </div>
      </div>
    </div>

    {/* Event Details Modal */}
    <Dialog open={!!selectedEvent} onOpenChange={(open) => { if (!open) setSelectedEvent(null); } }>
      <DialogContent className="max-w-2xl bg-white/95 backdrop-blur rounded-3xl border-2 border-betel-gray-light shadow-2xl p-0 overflow-hidden">
        <DialogHeader className="p-6 border-b bg-gradient-to-r from-betel-red/10 via-betel-gold/10 to-betel-gold/10">
          <DialogTitle className="text-2xl font-bold text-betel-gray-dark font-playfair">
            {selectedEvent?.title}
          </DialogTitle>
          <DialogDescription className="text-betel-gray">
            {selectedEvent?.description}
          </DialogDescription>
        </DialogHeader>

        {selectedEvent && (
          <div className="p-6 space-y-6">
            {/* Chips de informações */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-start min-w-0 bg-betel-gray-light/60 rounded-xl p-3">
                <Calendar className="w-4 h-4 text-betel-red mr-2 mt-0.5" />
                <span className="text-sm text-betel-gray-dark whitespace-normal break-words">
                  {selectedEvent?.date}
                </span>
              </div>
              <div className="flex items-start min-w-0 bg-betel-gray-light/60 rounded-xl p-3">
                <Clock className="w-4 h-4 text-betel-red mr-2 mt-0.5" />
                <span className="text-sm text-betel-gray-dark whitespace-normal break-words">
                  {selectedEvent?.time}
                </span>
              </div>
              <div className="flex items-start min-w-0 bg-betel-gray-light/60 rounded-xl p-3 sm:col-span-2 md:col-span-3">
                <MapPin className="w-4 h-4 text-betel-red mr-2 mt-0.5" />
                <span className="text-sm text-betel-gray-dark whitespace-normal break-words">
                  {selectedEvent?.location}
                </span>
              </div>
            </div>

            {/* Descrição */}
            <div>
              <h4 className="font-semibold text-betel-gray-dark mb-2">Descrição Completa:</h4>
              <p className="text-betel-gray leading-relaxed">{selectedEvent?.fullDescription}</p>
            </div>

            {/* Ministração / Traje */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-betel-gray-dark mb-1">Ministração:</h4>
                <p className="text-betel-gray text-sm">{selectedEvent?.pastor}</p>
              </div>
              <div>
                <h4 className="font-semibold text-betel-gray-dark mb-1">Traje:</h4>
                <p className="text-betel-gray text-sm">{selectedEvent?.dresscode}</p>
              </div>
            </div>

            {/* Ações */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-betel-red hover:bg-betel-red-dark text-white px-6 py-3 rounded-full font-semibold hover-lift focus-visible:ring-2 focus-visible:ring-betel-red/40"
                onClick={() => openMapsFromLocation(selectedEvent?.location || '')}
              >
                <Navigation className="w-4 h-4 mr-2" /> Como Chegar
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full border-betel-red text-betel-red hover:bg-betel-red hover:text-white focus-visible:ring-2 focus-visible:ring-betel-red/30"
                onClick={() => selectedEvent && handleShareEvent(selectedEvent)}
              >
                <Share className="w-4 h-4 mr-2" /> Compartilhar
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  </section>;
};
export default EventsSection;

const openMapsFromLocation = (loc: string) => {
  const encoded = encodeURIComponent(loc);
  window.open(`https://www.google.com/maps/search/?api=1&query=${encoded}`, '_blank');
};

const handleShareEvent = (ev: any) => {
  const text = `${ev.title} — ${ev.date} às ${ev.time}\n${ev.location}\n${ev.description}`;
  if (navigator.share) {
    navigator.share({ title: ev.title, text, url: window.location.href }).catch(() => {});
  } else if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(() => alert('Detalhes do evento copiados!'));
  } else {
    alert(text);
  }
};