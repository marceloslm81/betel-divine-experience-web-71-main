import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Filter, Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allEvents = [
    {
      title: "Campanha de Quarta-Feira",
      date: "20/08 à 10/09",
      time: "19:30",
      location: "M. Encontro Betel Vila Progresso",
      description: "Neemias 6:3B.",
      type: "regular",
      fullDescription: "Estou fazendo uma grande obra e não posso parar.",
      pastor: "Pastor Edvaldo, Pres. Celso",
      dresscode: "Traje social ou casual elegante",
      parking: "Estacionamento gratuito - chegue cedo"
    },
    {
      title: "Círculo de Oração e Intercessão",
      date: "Todas as Terças-Feiras",
      time: "16:00",
      location: "M. Encontro Betel Vila Progresso",
      description: "Momento de oração, intercessão e busca pela presença de Deus.",
      type: "regular",
      fullDescription: "O Círculo de Oração é um momento especial dedicado à intercessão, onde nos reunimos para buscar a face de Deus, orar pelas necessidades da igreja, famílias e nação. É um tempo de comunhão íntima com o Senhor, onde experimentamos Sua presença de forma poderosa através da oração coletiva e individual.",
      pastor: "Miss. Cláudia",
      dresscode: "Traje casual e confortável",
      parking: "Estacionamento gratuito disponível"
    },
    {
      title: "Culto de Consagração",
      date: "Todos os Domingos",
      time: "09:00",
      location: "M. Encontro Betel Vila Progresso",
      description: "Culto matinal de consagração e adoração ao Senhor.",
      type: "regular",
      fullDescription: "O Culto de Consagração é nosso primeiro encontro dominical, um momento especial de adoração e entrega total ao Senhor. Começamos o dia e a semana consagrando nossas vidas, famílias e projetos nas mãos de Deus. É um culto de profunda comunhão, louvor e ministração da Palavra, onde experimentamos a renovação espiritual para enfrentar os desafios da semana.",
      pastor: "Miss. Maristela",
      dresscode: "Traje social ou casual elegante",
      parking: "Estacionamento amplo e gratuito disponível"
    },
    {
      title: "Campanha de Sexta-Feira",
      date: "22/08 à 10/10",
      time: "19:30",
      location: "M. Encontro Betel Vila Progresso",
      description: "Em busca do meu milagre.",
      type: "regular",
      fullDescription: "Em busca do meu milagre.",
      pastor: "Pastor Edvaldo, Pres. Celso",
      dresscode: "Traje confortável",
      parking: "Estacionamento seguro disponível"
    },
    {
      title: "Ceia do Senhor",
      date: "Todo Segundo Sábado",
      time: "19:30",
      location: "M. Encontro Betel Vila Progresso",
      description: "Ministração especial ( Ceia ).",
      type: "special",
      fullDescription: "Na Ceia do Senhor, recordamos o sacrifício que nos trouxe vida, partilhamos do pão e do cálice em comunhão, renovando nossa fé e esperança em Cristo.",
      pastor: "Pastor Edvaldo",
      dresscode: "Traje social",
      parking: "Estacionamento gratuito disponível"
    },
    // Novos eventos adicionados
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
                onChange={(e) => setFilterType(e.target.value)} 
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
                className={`rounded-2xl shadow-lg p-6 hover-lift group border transition-all duration-300 ${
                  isSede 
                    ? 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200 hover:shadow-emerald-200/50' 
                    : isVilaProgresso
                    ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:shadow-blue-200/50'
                    : 'bg-white border-betel-gray-light hover:shadow-xl'
                }`}
              >
                {event.type === 'special' && (
                  <div className={`inline-block text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                    isSede 
                      ? 'bg-gradient-to-r from-emerald-600 to-cyan-600' 
                      : isVilaProgresso
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600'
                      : 'bg-betel-red'
                  }`}>
                    Especial
                  </div>
                )}

                {isSede && (
                  <div className="inline-block bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3 ml-2">
                    Sede Jardim Palmira
                  </div>
                )}

                {isVilaProgresso && (
                  <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3 ml-2">
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
                    <Calendar className={`w-4 h-4 mr-2 ${
                      isSede ? 'text-emerald-600' 
                      : isVilaProgresso ? 'text-blue-600' 
                      : 'text-betel-red'
                    }`} />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-betel-gray">
                    <Clock className={`w-4 h-4 mr-2 ${
                      isSede ? 'text-emerald-600' 
                      : isVilaProgresso ? 'text-blue-600' 
                      : 'text-betel-red'
                    }`} />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-betel-gray">
                    <MapPin className={`w-4 h-4 mr-2 ${
                      isSede ? 'text-emerald-600' 
                      : isVilaProgresso ? 'text-blue-600' 
                      : 'text-betel-red'
                    }`} />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className={`w-full transition-all duration-300 ${
                    isSede 
                      ? 'border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white' 
                      : isVilaProgresso
                      ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
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
                    <Calendar className={`w-4 h-4 mr-2 ${
                      isSedeEvent(selectedEvent.location) ? 'text-emerald-600' 
                      : isVilaProgressoEvent(selectedEvent.location) ? 'text-blue-600'
                      : 'text-betel-red'
                    }`} />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className={`w-4 h-4 mr-2 ${
                      isSedeEvent(selectedEvent.location) ? 'text-emerald-600' 
                      : isVilaProgressoEvent(selectedEvent.location) ? 'text-blue-600'
                      : 'text-betel-red'
                    }`} />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className={`w-4 h-4 mr-2 ${
                      isSedeEvent(selectedEvent.location) ? 'text-emerald-600' 
                      : isVilaProgressoEvent(selectedEvent.location) ? 'text-blue-600'
                      : 'text-betel-red'
                    }`} />
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
    </div>
  );
};

export default EventsPage;