import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Filter, Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';
const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const allEvents = [/*{
    title: "Culto Dominical",
    date: "Todo Domingo",
    time: "19:00",
    location: "Templo Principal",
    description: "Venha adorar e receber uma palavra de Deus que transformará sua vida.",
    type: "regular",
    fullDescription: "Nosso culto dominical é um momento especial de adoração, louvor e ministração da Palavra de Deus. Venha com sua família e experimente a presença do Senhor conosco. Temos ministração para todas as idades, incluindo culto infantil simultâneo para as crianças.",
    pastor: "Pastor João Silva",
    dresscode: "Traje casual ou social",
    parking: "Estacionamento gratuito disponível"
  },/* {
    title: "Culto de Oração",
    date: "Toda Terça",
    time: "19:30",
    location: "Templo Principal",
    description: "Um momento especial de oração e comunhão com Deus.",
    type: "regular",
    fullDescription: "Todas as terças-feiras nos reunimos para um poderoso momento de oração. É uma oportunidade de interceder pelos perdidos, pela igreja, pela nação e pelas necessidades pessoais. Venha participar deste momento de intimidade com Deus.",
    pastor: "Pastora Maria Santos",
    dresscode: "Traje livre",
    parking: "Estacionamento gratuito disponível"
  }*/, /*{
    title: "Escola Bíblica Dominical",
    date: "Todo Domingo",
    time: "17:00",
    location: "Salas de Aula",
    description: "Estudo aprofundado da Palavra de Deus para toda a família.",
    type: "regular",
    fullDescription: "Nossa Escola Bíblica Dominical oferece classes para todas as idades, desde crianças até adultos. Cada classe tem um currículo específico para o crescimento espiritual. Venha aprender mais sobre a Palavra de Deus em um ambiente acolhedor e didático.",
    pastor: "Equipe de Professores",
    dresscode: "Traje casual",
    parking: "Estacionamento gratuito disponível"
  }*/, {
      title: "Conferência Encontro com Deus",
      date: "15-17 Dezembro",
      time: "19:30",
      location: "Templo Principal",
      description: "Três dias de muito louvor, adoração e ministração da Palavra.",
      type: "special",
      fullDescription: "Nossa conferência anual é um evento imperdível! Três dias de intensa ministração, louvor e adoração. Teremos pregadores especiais, ministração de cura e libertação, e momentos únicos na presença de Deus. Venha preparado para receber uma nova unção!",
      pastor: "Pastores convidados e equipe local",
      dresscode: "Traje social ou casual elegante",
      parking: "Estacionamento gratuito - chegue cedo"
    }, /*{
    title: "Culto de Quarta",
    date: "Toda Quarta",
    time: "19:30",
    location: "Templo Principal",
    description: "Estudo bíblico e ministração da Palavra.",
    type: "regular",
    fullDescription: "Às quartas-feiras temos um culto especial dedicado ao estudo da Palavra de Deus e ministração específica. É um momento de crescimento espiritual e edificação na fé.",
    pastor: "Pastor Carlos Mendes",
    dresscode: "Traje casual",
    parking: "Estacionamento gratuito disponível"
  }*/, {
      title: "Vigília de Oração",
      date: "Primeira Sexta do Mês",
      time: "19:30",
      location: "Templo Principal",
      description: "Uma noite inteira de oração e busca por Deus.",
      type: "special",
      fullDescription: "Uma vez por mês nos reunimos para uma vigília de oração que vai da noite até a madrugada. É um momento poderoso de quebrantamento, intercessão e busca pela presença de Deus.",
      pastor: "Equipe Pastoral",
      dresscode: "Traje confortável",
      parking: "Estacionamento seguro disponível"
    }, /*{
    title: "Culto Jovem",
    date: "Todo Sábado",
    time: "19:00",
    location: "Salão de Eventos",
    description: "Culto especial para jovens com louvor animado.",
    type: "regular",
    fullDescription: "Nosso culto jovem é dinâmico, com louvor animado, mensagens direcionadas para os desafios da juventude e momentos de comunhão. Venha fazer parte dessa família!",
    pastor: "Pastor Júnior Lima",
    dresscode: "Traje despojado",
    parking: "Estacionamento gratuito disponível"
  }*/, {
      title: "Encontro de Casais",
      date: "Todo Segundo Sábado",
      time: "19:30",
      location: "Salão de Eventos",
      description: "Ministração especial para casais e relacionamentos.",
      type: "special",
      fullDescription: "Um encontro mensal dedicado aos casais, com ensinamentos sobre relacionamentos, família e vida conjugal baseados na Palavra de Deus. Inclui jantar e momentos de comunhão.",
      pastor: "Pastor João e Pastora Ana",
      dresscode: "Traje social",
      parking: "Estacionamento gratuito disponível"
    }];
  const filteredEvents = allEvents.filter(event => {
    const matchesType = filterType === 'all' || event.type === filterType;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });
  return <div className="min-h-screen bg-betel-gray-light">
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
            <select value={filterType} onChange={e => setFilterType(e.target.value)} className="border border-betel-gray-light rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-betel-red">
              <option value="all">Todos os Eventos</option>
              <option value="regular">Eventos Regulares</option>
              <option value="special">Eventos Especiais</option>
            </select>
          </div>
          <div className="flex items-center space-x-2 bg-betel-gray-light rounded-lg px-4 py-2">
            <Search className="w-4 h-4 text-betel-gray" />
            <input type="text" placeholder="Buscar eventos..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="bg-transparent outline-none flex-1" />
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event, index) => <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover-lift group border border-betel-gray-light">
          {event.type === 'special' && <div className="inline-block bg-betel-red text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
            Especial
          </div>}

          <h3 className="text-xl font-bold text-betel-gray-dark mb-3 font-playfair">
            {event.title}
          </h3>
          <p className="text-betel-gray mb-4 leading-relaxed">
            {event.description}
          </p>

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

          <Button variant="outline" className="w-full border-betel-red text-betel-red hover:bg-betel-red hover:text-white transition-all duration-300" onClick={() => setSelectedEvent(event)}>
            Ver Detalhes
          </Button>
        </div>)}
      </div>

      {filteredEvents.length === 0 && <div className="text-center py-12">
        <p className="text-betel-gray text-lg">Nenhum evento encontrado com os filtros selecionados.</p>
      </div>}
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

        {selectedEvent && <div className="space-y-6">
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


        </div>}
      </DialogContent>
    </Dialog>
  </div>;
};
export default EventsPage;