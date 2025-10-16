
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Observa seções para marcar o link ativo
  useEffect(() => {
    const ids = ['hero', 'about', 'events', 'devotional', 'videos', 'location', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (ids.includes(id)) {
              setActiveSection(id);
            }
          }
        });
      },
      { root: null, threshold: 0.5 }
    );
  
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/9d9f394a-8ebc-41d0-b89d-c4bce783cfee.png" 
              alt="Ministério Encontro Betel" 
              className="h-12 w-auto lg:h-20 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {[
              { label: 'Início', id: 'hero' },
              { label: 'Sobre', id: 'about' },
              { label: 'Eventos', id: 'events' },
              { label: 'Palavra', id: 'devotional' },
              { label: 'Vídeos', id: 'videos' },
              { label: 'Localização', id: 'location' },
              { label: 'Contato', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative px-3 py-2 rounded-full transition-all duration-300
                  ${activeSection === item.id ? 'text-betel-red bg-betel-red/5' : 'text-betel-gray-dark'}
                  hover:text-betel-red hover:bg-betel-red/5
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-betel-red/50`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  className={`absolute left-3 right-3 bottom-1 h-[2px] rounded-full
                  bg-gradient-to-r from-betel-red via-betel-gold to-betel-gold
                  transition-all duration-300
                  ${activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200 transition-all duration-300">
            <div className="space-y-1">
              {[
                { label: 'Início', id: 'hero' },
                { label: 'Sobre', id: 'about' },
                { label: 'Eventos', id: 'events' },
                { label: 'Palavra', id: 'devotional' },
                { label: 'Vídeos', id: 'videos' },
                { label: 'Localização', id: 'location' },
                { label: 'Contato', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group block w-full text-left px-4 py-3 rounded-lg
                    transition-all duration-300
                    ${activeSection === item.id ? 'text-betel-red bg-betel-red/5' : 'text-betel-gray-dark'}
                    hover:text-betel-red hover:bg-betel-red/10`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
