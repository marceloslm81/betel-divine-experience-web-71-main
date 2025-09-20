import React from 'react';
import { Heart, Shield, CreditCard, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
const DonationSection = () => {
  const handleDoacaoPixVilaProgresso = () => {
    const pixKey = 'progresso@enbetel.com.br';
    const message = `Chave PIX - Betel Vila Progresso:\n\n${pixKey}\n\nObrigado por contribuir com a obra de Deus! 🙏`;

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

  const handleDoacaoPixSede = () => {
    const pixKey = 'enbetel@enbetel.com.br';
    const message = `Chave PIX - Sede Jardim Palmira:\n\n${pixKey}\n\nObrigado por contribuir com a obra de Deus! 🙏`;

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

  const handleCartaoVilaProgresso = () => {
    const dadosCartao = `DOAÇÃO VIA CARTÃO - Betel Vila Progresso\n\n💳 CARTÃO DE CRÉDITO/DÉBITO:\n   Disponível presencialmente na igreja\n\n📍 ENDEREÇO:\n   R. Cardon, 1192 - Jardim Ipanema\n   São Paulo - SP, 08041-525\n\nPara mais informações:\n📞 (11) 3333-4444\n📱 (11) 99999-9999`;
    alert(dadosCartao);
  };

  const handleCartaoSede = () => {
    const dadosCartao = `DOAÇÃO VIA CARTÃO - Sede Jardim Palmira\n\n💳 CARTÃO DE CRÉDITO/DÉBITO:\n   Disponível presencialmente na igreja\n\n📍 ENDEREÇO:\n   R. Jaime dos Santos Augusto Filho, 52 - Vila Palmira\n   Guarulhos - SP, 07075-000\n\nPara mais informações:\n📞 (11) 3333-4444\n📱 (11) 99999-9999`;
    alert(dadosCartao);
  };
  return (
    <section className="py-20 bg-gradient-to-br from-betel-gray-light to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
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

          {/* Betel Vila Progresso */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-betel-gray-dark mb-8 font-playfair text-center">
              Encontro Betel <span className="text-gradient">Vila Progresso</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-betel-gray-light rounded-2xl p-8 text-center hover-lift animate-on-scroll">
                <div className="w-16 h-16 bg-gradient-betel rounded-full flex items-center justify-center mx-auto mb-4 bg-orange-500">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-betel-gray-dark mb-3 font-playfair">
                  PIX
                </h4>
                <p className="text-betel-gray mb-3">
                  Transferência instantânea e segura
                </p>
                <p className="text-sm text-betel-gray font-medium mb-4">
                  Chave PIX: progresso@enbetel.com.br
                </p>
                <Button 
                  size="sm" 
                  className="bg-betel-red hover:bg-betel-red-dark text-white px-6 py-2 rounded-full font-semibold hover-lift" 
                  onClick={handleDoacaoPixVilaProgresso}
                >
                  Copiar Chave PIX
                </Button>
              </div>

              <div className="bg-betel-gray-light rounded-2xl p-8 text-center hover-lift animate-on-scroll">
                <div className="w-16 h-16 bg-gradient-betel rounded-full flex items-center justify-center mx-auto mb-4 bg-orange-500">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-betel-gray-dark mb-3 font-playfair">
                  Cartão
                </h4>
                <p className="text-betel-gray mb-3">
                  Débito ou crédito com total segurança
                </p>
                <p className="text-sm text-betel-gray font-medium mb-4">
                  Disponível presencialmente
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-2 border-betel-red text-betel-red hover:bg-betel-red hover:text-white px-6 py-2 rounded-full font-semibold hover-lift" 
                  onClick={handleCartaoVilaProgresso}
                >
                  Ver Informações
                </Button>
              </div>
            </div>
          </div>

          {/* Sede Jardim Palmira */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-betel-gray-dark mb-8 font-playfair text-center">
              Encontro Betel Sede <span className="text-gradient">Jardim Palmira</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-betel-gray-light rounded-2xl p-8 text-center hover-lift animate-on-scroll">
                <div className="w-16 h-16 bg-gradient-betel rounded-full flex items-center justify-center mx-auto mb-4 bg-orange-500">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-betel-gray-dark mb-3 font-playfair">
                  PIX
                </h4>
                <p className="text-betel-gray mb-3">
                  Transferência instantânea e segura
                </p>
                <p className="text-sm text-betel-gray font-medium mb-4">
                  Chave PIX: enbetel@enbetel.com.br
                </p>
                <Button 
                  size="sm" 
                  className="bg-betel-red hover:bg-betel-red-dark text-white px-6 py-2 rounded-full font-semibold hover-lift" 
                  onClick={handleDoacaoPixSede}
                >
                  Copiar Chave PIX
                </Button>
              </div>

              <div className="bg-betel-gray-light rounded-2xl p-8 text-center hover-lift animate-on-scroll">
                <div className="w-16 h-16 bg-gradient-betel rounded-full flex items-center justify-center mx-auto mb-4 bg-orange-500">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-betel-gray-dark mb-3 font-playfair">
                  Cartão
                </h4>
                <p className="text-betel-gray mb-3">
                  Débito ou crédito com total segurança
                </p>
                <p className="text-sm text-betel-gray font-medium mb-4">
                  Disponível presencialmente
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-2 border-betel-red text-betel-red hover:bg-betel-red hover:text-white px-6 py-2 rounded-full font-semibold hover-lift" 
                  onClick={handleCartaoSede}
                >
                  Ver Informações
                </Button>
              </div>
            </div>
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
        </div>
      </div>
    </section>
  );
};
export default DonationSection;