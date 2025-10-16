
import React, { useState } from 'react';
import { Play, Youtube, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideosSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videos = [
    /*{
      title: "Como Viver uma Vida de Propósito",
      thumbnail: "https://img.youtube.com/vi/B9UUOCAnehE/maxresdefault.jpg",
      videoId: "B9UUOCAnehE",
      duration: "28:45",
      views: "12.5k",
      date: "há 3 dias"
    },
    {
      title: "O Poder da Oração na Família",
      thumbnail: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=3634&q=80",
      videoId: "dQw4w9WgXcQ",
      duration: "35:20",
      views: "8.9k",
      date: "há 1 semana"
    },
    {
      title: "Encontrando Paz em Tempos Difíceis",
      thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=7372&q=80",
      videoId: "example3",
      duration: "42:15",
      views: "15.2k",
      date: "há 2 semanas"
    },
    {
      title: "A Importância da Comunhão",
      thumbnail: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=3072&q=80",
      videoId: "example4",
      duration: "31:30",
      views: "9.7k",
      date: "há 3 semanas"
    },
    {
      title: "Descobrindo Seu Chamado",
      thumbnail: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2671&q=80",
      videoId: "example5",
      duration: "38:45",
      views: "11.3k",
      date: "há 1 mês"
    },
    {
      title: "Fé que Move Montanhas",
      thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&q=80",
      videoId: "example6",
      duration: "33:20",
      views: "13.8k",
      date: "há 1 mês"
    }*/
  ];

  const handleAcessarYouTube = () => {
    window.open('https://www.youtube.com/@mencontrobetel', '_blank');
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <>
      <section id="videos" className="py-20 bg-betel-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-betel-gray-dark mb-6 font-playfair">
                Galeria de <span className="text-gradient">Vídeos</span>
              </h2>
              <p className="text-xl text-betel-gray max-w-3xl mx-auto leading-relaxed">
                Assista às nossas mensagens e seja edificado pela Palavra de Deus
              </p>
            </div>

            {/* Videos Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {videos.slice(0, 3).map((video, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border-2 border-betel-gray-light bg-white/90 backdrop-blur shadow-lg hover:shadow-2xl hover-lift transform-gpu transition-all hover:scale-[1.02] ring-1 ring-transparent ring-offset-1 ring-offset-white hover:ring-betel-red cursor-pointer"
                  onClick={() => handleVideoClick(video)}
                >
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-betel-red/15 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-betel-gold/15 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent group-hover:from-black/60 group-hover:via-black/25 transition-colors duration-300" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 gradient-betel rounded-full flex items-center justify-center shadow-xl ring-2 ring-white/60 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur text-white px-2 py-1 rounded-full text-xs">
                      {video.duration}
                    </div>
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      <span className="bg-white/80 backdrop-blur text-betel-gray-dark px-2 py-1 rounded-full text-xs font-medium">
                        {video.views} visualizações
                      </span>
                      <span className="bg-white/80 backdrop-blur text-betel-gray-dark px-2 py-1 rounded-full text-xs font-medium">
                        {video.date}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-betel-gray-dark mb-3 font-playfair line-clamp-2 group-hover:text-betel-red transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center animate-on-scroll">
              <Button
                size="lg"
                className="bg-betel-red hover:bg-betel-red-dark text-white px-8 py-3 rounded-full font-semibold hover-lift group"
                onClick={handleAcessarYouTube}
              >
                <Youtube className="w-5 h-5 mr-2" />
                Acessar Canal no YouTube
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-bold text-betel-gray-dark font-playfair">
                {selectedVideo.title}
              </h3>
              <button
                onClick={closeModal}
                className="w-8 h-8 bg-betel-gray-light rounded-full flex items-center justify-center hover:bg-betel-gray transition-colors"
              >
                <X className="w-4 h-4 text-betel-gray-dark" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Info */}
            <div className="p-6">
              <div className="flex items-center justify-between text-sm text-betel-gray">
                <span>{selectedVideo.views} visualizações</span>
                <span>{selectedVideo.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideosSection;
