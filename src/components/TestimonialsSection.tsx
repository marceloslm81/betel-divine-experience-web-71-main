import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
const TestimonialsSection = () => {
  const testimonials = [{
    name: "Maria Silva",
    city: "São Paulo, SP",
    testimony: "Minha vida foi completamente transformada desde que conheci Jesus na Encontro Betel. Encontrei propósito, paz e uma família em Cristo que me acolheu com amor."
  }, {
    name: "João Santos",
    city: "São Paulo, SP",
    testimony: "Era viciado em drogas e não via esperança. Através das orações e do amor dos irmãos da igreja, Deus me libertou e hoje tenho uma nova vida em Cristo."
  }, {
    name: "Ana Costa",
    city: "São Paulo, SP",
    testimony: "Estava passando por uma depressão profunda quando conheci a igreja. O amor de Deus manifestado através dos irmãos me trouxe cura e restauração completa."
  }, {
    name: "Carlos Oliveira",
    city: "São Paulo, SP",
    testimony: "Meu casamento estava acabando, mas através dos ensinamentos bíblicos e aconselhamento pastoral, Deus restaurou minha família e hoje somos uma família abençoada."
  }, {
    name: "Lúcia Ferreira",
    city: "São Paulo, SP",
    testimony: "Busquei Deus em meio a uma crise financeira. Ele não só supriu todas as minhas necessidades, mas também me ensinou a confiar completamente nEle."
  }];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);
  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-betel-gray-dark mb-6 font-playfair">
              <span className="text-gradient">Testemunhos</span> de Transformação
            </h2>
            <p className="text-xl text-betel-gray max-w-3xl mx-auto leading-relaxed">
              Veja como Deus tem transformado vidas em nossa comunidade
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="relative">
            <div className="bg-gradient-to-br from-betel-gray-light to-white rounded-3xl shadow-2xl p-8 md:p-12 animate-on-scroll">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-betel rounded-full flex items-center justify-center bg-orange-500">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center">
                <blockquote className="text-xl md:text-2xl text-betel-gray-dark leading-relaxed mb-8 font-playfair">
                  "{testimonials[currentTestimonial].testimony}"
                </blockquote>

                {/* Author Info - Only Name and City */}
                <div className="text-center">
                  <h4 className="text-lg font-bold text-betel-gray-dark font-playfair">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-betel-gray">
                    {testimonials[currentTestimonial].city}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full p-2 border-betel-red text-betel-red hover:bg-betel-red hover:text-white">
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-betel-red scale-125' : 'bg-betel-gray hover:bg-betel-red/50'}`} />)}
              </div>

              <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full p-2 border-betel-red text-betel-red hover:bg-betel-red hover:text-white">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;