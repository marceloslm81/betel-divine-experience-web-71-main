import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Criar link mailto com os dados do formulário
    const subject = `Contato do site - ${formData.name}`;
    const body = `Nome: ${formData.name}
E-mail: ${formData.email}
${formData.phone ? `Telefone: ${formData.phone}` : ''}

Mensagem:
${formData.message}

---
Enviado através do formulário de contato do site da Igreja Encontro Betel`;
    const mailtoLink = `mailto:enbetel@enbetel.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Abrir cliente de email
    window.location.href = mailtoLink;

    // Mostrar confirmação
    alert('Seu cliente de email será aberto para enviar a mensagem. Se não abrir automaticamente, envie um email para: enbetel@enbetel.com.br');

    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };
  const handlePhoneClick = () => {
    window.open('tel:+551133334444', '_self');
  };
  const handleEmailClick = () => {
    window.open('mailto:enbetel@enbetel.com.br', '_self');
  };
  return <section id="contact" className="py-20 bg-betel-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-betel-gray-dark mb-6 font-playfair">
              Fale <span className="text-gradient">Conosco</span>
            </h2>
            <p className="text-xl text-betel-gray max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para ouvir você. Entre em contato conosco!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-betel-gray-dark mb-8 font-playfair text-center">
                  Envie sua Mensagem
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-betel-gray-dark mb-2">
                      Nome Completo
                    </label>
                    <Input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-betel-gray focus:ring-2 focus:ring-betel-red focus:border-transparent" placeholder="Digite seu nome completo" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-betel-gray-dark mb-2">
                      E-mail
                    </label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-betel-gray focus:ring-2 focus:ring-betel-red focus:border-transparent" placeholder="seu@email.com" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-betel-gray-dark mb-2">
                      Telefone (Opcional)
                    </label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-betel-gray focus:ring-2 focus:ring-betel-red focus:border-transparent" placeholder="(11) 99999-9999" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-betel-gray-dark mb-2">
                      Mensagem
                    </label>
                    <Textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-betel-gray focus:ring-2 focus:ring-betel-red focus:border-transparent resize-none" placeholder="Digite sua mensagem aqui..." />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-betel-red hover:bg-betel-red-dark text-white py-3 rounded-full font-semibold hover-lift group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-on-scroll">
              <div className="space-y-8">
                {/* Contact Methods */}
                <div className="bg-white rounded-3xl shadow-2xl p-8">
                  <h3 className="text-2xl font-bold text-betel-gray-dark mb-8 font-playfair text-center">
                    Outras Formas de Contato
                  </h3>

                  <div className="space-y-6">
                    {/* WhatsApp */}
                    <button onClick={handleWhatsAppClick} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-betel-gray-light transition-colors cursor-pointer w-full">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-semibold text-betel-gray-dark">
                          WhatsApp
                        </h4>
                        <p className="text-betel-gray">(11) 99999-9999</p>
                      </div>
                    </button>

                    {/* Phone */}
                    <button onClick={handlePhoneClick} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-betel-gray-light transition-colors cursor-pointer w-full">
                      <div className="w-12 h-12 bg-gradient-betel rounded-full flex items-center justify-center bg-orange-400">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-semibold text-betel-gray-dark">
                          Telefone
                        </h4>
                        <p className="text-betel-gray">(11) 3333-4444</p>
                      </div>
                    </button>

                    {/* Email */}
                    <button onClick={handleEmailClick} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-betel-gray-light transition-colors cursor-pointer w-full">
                      <div className="w-12 h-12 bg-gradient-betel rounded-full flex items-center justify-center bg-gray-800">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-semibold text-betel-gray-dark">
                          E-mail
                        </h4>
                        <p className="text-betel-gray">enbetel@enbetel.com.br</p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-gradient-to-br from-betel-gold-light to-betel-yellow rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-betel-gray-dark mb-4 font-playfair text-center">
                    Horário de Atendimento
                  </h3>
                  <div className="text-center text-betel-gray-dark space-y-2">
                    <p>Segunda a Sexta: 9h às 17h</p>
                    <p>Sábado: 9h às 12h</p>
                    <p>Domingo: Apenas durante os cultos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;