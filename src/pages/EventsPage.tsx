import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Filter, Search, ArrowLeft, Navigation, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [filterType, setFilterType] = useState<'all' | 'regular' | 'special'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allEvents = [
    // Vila Progresso — iguais ao EventsSection
    {
      title: "Culto",
      date: "Todas as Quartas-Feiras",
      time: "19:30",
      location: "Encontro Betel - Vila Progresso",
      description: "Venha adorar e receber uma palavra de Deus que transformará sua vida.",
      type: "regular",
      fullDescription: "Nosso culto é um momento especial de adoração, louvor e ministração da Palavra de Deus. Venha com sua família e experimente a presença do Senhor conosco. Temos ministração para todas as idades.",
      pastor: "Presbítero Celso",
      dresscode: "Traje casual ou social"
    },
    {
      title: "Culto",
      date: "Todas as Sextas-Feiras",
      time: "19:30",
      location: "Encontro Betel - Vila Progresso",
      description: "Um momento especial de adoração, louvor e palavra de Deus.",
      type: "regular",
      fullDescription: "Todos os domingos nos reunimos para um poderoso momento de adoração. É uma oportunidade de louvar e adorar o Senhor. Venha participar deste momento de intimidade com Deus.",
      pastor: "Presbítero Celso",
      dresscode: "Traje social ou casual"
    },
    {
      title: "Culto da Família",
      date: "Todos os Domingos",
      time: "18:00",
      location: "Encontro Betel - Vila Progresso",
      description: "Louvor e Palavra de Deus para toda a família.",
      type: "regular",
      fullDescription: "Nossa igreja é um lugar de louvor e adoração. Venha participar deste momento de intimidade com Deus.",
      pastor: "Presbítero Celso",
      dresscode: "Traje casual"
    },

    // Mantido — Ceia do Senhor (Vila Progresso)
    {
      title: "Ceia do Senhor",
      date: "Todo Segundo Sábado",
      time: "19:30",
      location: "Encontro Betel - Vila Progresso",
      description: "Ministração especial ( Ceia ).",
      type: "special",
      fullDescription: "Na Ceia do Senhor, recordamos o sacrifício que nos trouxe vida, partilhamos do pão e do cálice em comunhão, renovando nossa fé e esperança em Cristo.",
      pastor: "Pastor Edvaldo",
      dresscode: "Traje social"
    },

    // Sede Jardim Palmira — mantidos
    {
      title: "Culto de Adoração",
      date: "Todas as Terças-Feiras",
      time: "19:00",
      location: "M. Encontro Betel Sede Jardim Palmira",
      description: "Momento especial de adoração e louvor ao Senhor.",
      type: "regular",
      fullDescription: "Um culto dedicado à adoração pura, onde nos conectamos com Deus através do louvor e da oração. Venha experimentar a presença do Senhor em um ambiente de adoração genuína.",
      pastor: "Pastor Edvaldo e Miss. Cláudia",
      dresscode: "Traje casual ou social",
      parking: "Estacionamento gratuito disponível"
    },
    {
      title: "Culto Círculo de Oração",
      date: "Todas as Quartas-Feiras",
      time: "15:00",
      location: "M. Encontro Betel Sede Jardim Palmira",
      description: "Círculo de oração e intercessão pela igreja e nação.",
      type: "regular",
      fullDescription: "Um momento vespertino dedicado à oração e intercessão. Reunimo-nos para orar pelas necessidades da igreja, famílias, cidade e nação. É um tempo de buscar a face de Deus e interceder pelos perdidos.",
      pastor: "Pastor Edvaldo e Miss. Cláudia",
      dresscode: "Traje casual e confortável",
      parking: "Estacionamento gratuito disponível"
    },
    {
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
      title: "Culto da Família",
      date: "Todos os Domingos",
      time: "18:00",
      location: "M. Encontro Betel Sede Jardim Palmira",
      description: "Culto especial para toda a família com ministração da Palavra.",
      type: "regular",
      fullDescription: "O Culto da Família é nosso encontro dominical onde toda a família se reúne para adorar a Deus. Um momento especial de comunhão, louvor e ministração da Palavra, com atividades para todas as idades.",
      pastor: "Pastor Edvaldo e Miss. Cláudia",
      dresscode: "Traje social ou casual",
      parking: "Estacionamento amplo e seguro disponível"
    },
    {
      title: "Ceia do Senhor",
      date: "Todo Primeiro Sábado do Mês",
      time: "19:00",
      location: "M. Encontro Betel Sede Jardim Palmira",
      description: "Ministração especial da Santa Ceia do Senhor.",
      type: "special",
      fullDescription: "A Santa Ceia do Senhor é um momento sagrado de comunhão e recordação do sacrifício de Jesus Cristo. Participamos do pão e do vinho em memória do corpo e sangue de Cristo, renovando nossa aliança com Deus e fortalecendo nossa fé.",
      pastor: "Pastor Edvaldo",
      dresscode: "Traje social",
      parking: "Estacionamento amplo e gratuito disponível"
    }
  ];

  const filteredEvents = allEvents.filter(event => {
    const matchesType = filterType === 'all' || event.type === filterType;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  // Funções para determinar a localização dos eventos
  const isSedeEvent = (location: string) => {
    return location.includes('Sede Jardim Palmira');
  };

  const isVilaProgressoEvent = (location: string) => {
    return location.includes('Vila Progresso');
  };

  // Ao montar, garantir topo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-betel-gray-light">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <h1 className="text-3xl font-bold text-betel-gray-dark font-playfair">
                Todos os <span className="text-betel-red">Eventos</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-betel-red" />
              <select 
                value={filterType} 
                onChange={(e) => setFilterType(e.target.value as 'all' | 'regular' | 'special')} 
                className="border border-betel-gray-light rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-betel-red"
              >
                <option value="all">Todos os Eventos</option>
                <option value="regular">Eventos Regulares</option>
                <option value="special">Eventos Especiais</option>
              </select>
            </div>
            <div className="flex items-center space-x-2 bg-betel-gray-light rounded-lg px-4 py-2">
              <Search className="w-4 h-4 text-betel-gray" />
              <input 
                type="text" 
                placeholder="Buscar eventos..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="bg-transparent outline-none flex-1" 
              />
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => {
            const isSede = isSedeEvent(event.location);
            const isVilaProgresso = isVilaProgressoEvent(event.location);
            return (
              <div 
                key={index} 
                className={`relative overflow-hidden rounded-2xl p-6 transform-gpu transition-all duration-300 group border-2 ${
                  isSede 
                    ? 'bg-gradient-to-br from-betel-gray-light to-white border-betel-red hover:border-betel-red-dark ring-1 ring-transparent ring-offset-1 ring-offset-white hover:ring-betel-red' 
                    : isVilaProgresso
                    ? 'bg-gradient-to-br from-betel-gold-light to-white border-betel-gold hover:border-betel-yellow ring-1 ring-transparent ring-offset-1 ring-offset-white hover:ring-betel-gold'
                    : 'bg-white border-betel-gray-light hover:shadow-xl'
                }`}
              >
                <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full ${
                  isSede ? 'bg-betel-red' : isVilaProgresso ? 'bg-betel-gold-light' : 'bg-betel-gray-light'
                } opacity-20 blur-2xl`} />
                {event.type === 'special' && (
                  <div className={`inline-block text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                    isSede 
                      ? 'bg-betel-red' 
                      : isVilaProgresso
                      ? 'bg-gradient-to-r from-betel-gold to-betel-yellow'
                      : 'bg-betel-red'
                  }`}>
                    Especial
                  </div>
                )}

                {isSede && (
                  <div className="inline-block bg-betel-red text-white px-3 py-1 rounded-full text-xs font-semibold mb-3 ml-2">
                    Sede Jardim Palmira
                  </div>
                )}
                {isVilaProgresso && (
                  <div className="inline-block bg-gradient-to-r from-betel-gold to-betel-yellow text-white px-3 py-1 rounded-full text-xs font-semibold mb-3 ml-2">
                    Vila Progresso
                  </div>
                )}

                <h3 className="text-xl font-bold text-betel-gray-dark mb-3 font-playfair">
                  {event.title}
                </h3>
                <p className="text-betel-gray mb-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-betel-gray">
                    <Calendar className={`w-4 h-4 mr-2 ${isSede ? 'text-betel-red' : isVilaProgresso ? 'text-betel-gold' : 'text-betel-red'}`} />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-betel-gray">
                    <Clock className={`w-4 h-4 mr-2 ${isSede ? 'text-betel-red' : isVilaProgresso ? 'text-betel-gold' : 'text-betel-red'}`} />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-betel-gray">
                    <MapPin className={`w-4 h-4 mr-2 ${isSede ? 'text-betel-red' : isVilaProgresso ? 'text-betel-gold' : 'text-betel-red'}`} />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className={`w-full transition-all duration-300 ${
                    isSede 
                      ? 'border-betel-red text-betel-red hover:bg-betel-red hover:text-white' 
                      : isVilaProgresso
                      ? 'border-betel-gold text-betel-gold hover:bg-betel-gold hover:text-white'
                      : 'border-betel-red text-betel-red hover:bg-betel-red hover:text-white'
                  }`}
                  onClick={() => setSelectedEvent(event)}
                >
                  Ver Detalhes
                </Button>
              </div>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-betel-gray text-lg">Nenhum evento encontrado com os filtros selecionados.</p>
          </div>
        )}
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

              {/* Extra */}
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
    </div>
  );
};

export default EventsPage;


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