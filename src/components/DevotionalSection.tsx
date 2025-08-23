
import React from 'react';
import { BookOpen, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DevotionalSection = () => {
  return (
    <section id="devotional" className="py-20 bg-gradient-to-br from-betel-gold-light to-betel-yellow relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12 animate-on-scroll">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8 text-betel-red" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-betel-gray-dark mb-6 font-playfair">
              Palavra da <span className="text-betel-red">Semana</span>
            </h2>
          </div>

          {/* Devotional Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8 animate-on-scroll hover-lift">
            {/* Verse */}
            <div className="mb-8">
              <div className="text-6xl text-betel-gold mb-4">"</div>
              <blockquote className="text-2xl md:text-3xl font-medium text-betel-gray-dark leading-relaxed font-playfair mb-6">
                Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o SENHOR; 
                pensamentos de paz e não de mal, para vos dar o fim que esperais.
              </blockquote>
              <cite className="text-lg text-betel-red font-semibold">
                — Jeremias 29:11
              </cite>
            </div>

            {/* Reflection */}
            <div className="border-t border-betel-gray-light pt-8">
              <h3 className="text-xl font-bold text-betel-gray-dark mb-4 font-playfair flex items-center justify-center">
                <Heart className="w-5 h-5 text-betel-red mr-2" />
                Reflexão
              </h3>
              <p className="text-lg text-betel-gray leading-relaxed max-w-3xl mx-auto">
                Deus tem um plano perfeito para sua vida. Mesmo nas dificuldades, 
                Ele está trabalhando para o seu bem. Confie nos planos d'Ele, 
                pois são planos de esperança e futuro próspero.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-on-scroll">
            <Link to="/devocionais">
              <Button 
                size="lg"
                className="bg-betel-red hover:bg-betel-red-dark text-white px-8 py-3 rounded-full font-semibold hover-lift group"
              >
                Leia Mais Devocionais
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevotionalSection;
