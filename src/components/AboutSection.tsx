import React from 'react';
import { Heart, Users, Book, Star } from 'lucide-react';
const AboutSection = () => {
  const values = [{
    icon: Heart,
    title: "Amor",
    description: "Demonstramos o amor de Cristo através de nossas ações e relacionamentos"
  }, {
    icon: Users,
    title: "Comunhão",
    description: "Cultivamos relacionamentos genuínos e uma comunidade acolhedora"
  }, {
    icon: Book,
    title: "Palavra",
    description: "Fundamentamos nossa fé nas Sagradas Escrituras"
  }, {
    icon: Star,
    title: "Excelência",
    description: "Buscamos excelência em tudo que fazemos para a glória de Deus"
  }];
  return <section id="about" className="py-20 bg-gradient-to-b from-white to-betel-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-betel-gray-dark mb-6 font-playfair">
              Sobre o <span className="text-gradient">Ministério Encontro Betel</span>
            </h2>
            <p className="text-xl text-betel-gray max-w-3xl mx-auto leading-relaxed">
              Somos uma igreja que acredita no poder transformador de Jesus Cristo, 
              comprometida em levar esperança, fé e amor a cada pessoa.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="animate-on-scroll">
              <h3 className="text-2xl md:text-3xl font-bold text-betel-gray-dark mb-6 font-playfair">
                Nossa Missão
              </h3>
              <p className="text-lg text-betel-gray mb-6 leading-relaxed">
                Proclamar o Evangelho de Jesus Cristo, discipular vidas e impactar 
                nossa comunidade através do amor, da verdade e do serviço cristão.
              </p>
              <p className="text-lg text-betel-gray mb-6 leading-relaxed">
                Acreditamos que cada pessoa tem um propósito divino e nossa missão 
                é ajudar a descobrir e viver esse propósito em Cristo.
              </p>
              
              <h3 className="text-2xl md:text-3xl font-bold text-betel-gray-dark mb-6 font-playfair">
                Nossa Visão
              </h3>
              <p className="text-lg text-betel-gray leading-relaxed">
                Ser uma igreja que transforma vidas, impacta gerações e expande 
                o Reino de Deus através do discipulado e da multiplicação.
              </p>
            </div>

            {/* Image */}
            <div className="animate-on-scroll">
              <div className="relative group">
                {/* Subtle Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-betel-red/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Main Image Container */}
                <div className="relative">
                  <img 
                    src="/lovable-uploads/9d9f394a-8ebc-41d0-b89d-c4bce783cfee.png" 
                    alt="Igreja Encontro Betel" 
                    className="relative w-full h-auto object-contain rounded-2xl shadow-lg group-hover:shadow-xl transform transition-all duration-500 ease-in-out hover:scale-[1.02] animate-float-subtle" 
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-betel-red/10 via-transparent to-transparent rounded-2xl opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover-lift animate-on-scroll">
                <div className="w-16 h-16 bg-gradient-betel rounded-full flex items-center justify-center mx-auto mb-4 bg-orange-500">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-betel-gray-dark mb-3 font-playfair">
                  {value.title}
                </h4>
                <p className="text-betel-gray leading-relaxed">
                  {value.description}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;