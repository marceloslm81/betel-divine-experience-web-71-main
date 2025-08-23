import React from 'react';
import { Heart, Shield, CreditCard, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
const DonationSection = () => {
  const handleDoacaoPix = () => {
    const pixKey = 'enbetel@enbetel.com.br';
    const message = `Chave PIX da Igreja Encontro Betel:\n\n${pixKey}\n\nObrigado por contribuir com a obra de Deus! 🙏`;

    // Tenta copiar para área de transferência
    if (navigator.clipboard) {
      navigator.clipboard.writeText(pixKey).then(() => {
        alert(`${message}\n\nChave PIX copiada para área de transferência!`);
      }).catch(() => {
        alert(message);
      });
    } else {
      alert(message);
    }
  };
  const handleOutrasFormas = () => {
    const dadosBancarios = `OUTRAS FORMAS DE DOAÇÃO - Igreja Encontro Betel

💳 CARTÃO DE CRÉDITO/DÉBITO:
   Disponível presencialmente na igreja

📍 PRESENCIAL:
   R. Cardon, 1192 - Jardim Ipanema
   São Paulo - SP, 08041-525
   
Para mais informações:
📞 (11) 3333-4444
📱 (11) 99999-9999`;
    alert(dadosBancarios);
  };
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-betel rounded-full flex items-center justify-center bg-orange-500">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-betel-gray-dark mb-6 font-playfair">
              Faça Parte da <span className="text-gradient">Obra</span>
            </h2>
            <p className="text-xl text-betel-gray max-w-3xl mx-auto leading-relaxed">
              Sua contribuição nos ajuda a levar o Evangelho a mais pessoas e 
              expandir o Reino de Deus. Seja um parceiro desta missão!
            </p>
          </div>

          {/* Donation Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[{
            icon: Smartphone,
            title: "PIX",
            description: "Transferência instantânea e segura",
            info: "Chave PIX: enbetel@enbetel.com.br"
          }, {
            icon: CreditCard,
            title: "Cartão",
            description: "Débito ou crédito com total segurança",
            info: "Processamento seguro"
          }, {
            icon: Shield,
            title: "Transferência",
            description: "TED ou DOC para nossa conta",
            info: "Dados bancários disponíveis"
          }].map((method, index) => <div key={index} className="bg-betel-gray-light rounded-2xl p-8 text-center hover-lift animate-on-scroll">
                <div className="w-16 h-16 bg-gradient-betel rounded-full flex items-center justify-center mx-auto mb-4 bg-orange-500">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-betel-gray-dark mb-3 font-playfair">
                  {method.title}
                </h3>
                <p className="text-betel-gray mb-3">
                  {method.description}
                </p>
                <p className="text-sm text-betel-gray font-medium">
                  {method.info}
                </p>
              </div>)}
          </div>

          {/* Security & Transparency */}
          <div className="bg-gradient-to-r from-betel-gold-light to-betel-yellow rounded-3xl p-8 mb-8 animate-on-scroll">
            <div className="text-center">
              <Shield className="w-12 h-12 text-betel-red mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-betel-gray-dark mb-4 font-playfair">
                Segurança e Transparência
              </h3>
              <p className="text-betel-gray-dark leading-relaxed max-w-2xl mx-auto">
                Todas as doações são processadas com segurança e utilizadas 
                exclusivamente para a obra de Deus. Prestamos contas regularmente 
                à nossa comunidade sobre como os recursos são aplicados.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <Button size="lg" className="bg-betel-red hover:bg-betel-red-dark text-white px-8 py-3 rounded-full font-semibold hover-lift" onClick={handleDoacaoPix}>
              Fazer Doação via PIX
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-betel-red text-betel-red hover:bg-betel-red hover:text-white px-8 py-3 rounded-full font-semibold hover-lift" onClick={handleOutrasFormas}>
              Outras Formas de Doar
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default DonationSection;