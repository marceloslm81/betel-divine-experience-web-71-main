
import React, { useMemo } from 'react';
import { BookOpen, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DevotionalSection = () => {
  // Array de devocionais (mesmo da DevotionalsPage)
  const devotionals = [
    {
      title: "Deus Tem um Plano Perfeito",
      verse: "Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o SENHOR; pensamentos de paz e não de mal, para vos dar o fim que esperais.",
      reference: "Jeremias 29:11",
      reflection: "Deus tem um plano perfeito para sua vida. Mesmo nas dificuldades, Ele está trabalhando para o seu bem. Confie nos planos d'Ele, pois são planos de esperança e futuro próspero.",
      category: "esperanca",
      date: "04 Jan 2025"
    },
    {
      title: "O Amor Que Transforma",
      verse: "Nisto conhecemos o amor: que Cristo deu a sua vida por nós; e devemos dar nossa vida pelos irmãos.",
      reference: "1 João 3:16",
      reflection: "O verdadeiro amor é sacrificial. Cristo nos amou primeiro e deu sua vida por nós. Esse mesmo amor deve fluir através de nós para outros, transformando nossa vida e relacionamentos.",
      category: "amor",
      date: "03 Jan 2025"
    },
    {
      title: "A Força na Fraqueza",
      verse: "E disse-me: A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza.",
      reference: "2 Coríntios 12:9",
      reflection: "Quando reconhecemos nossa fraqueza, abrimos espaço para o poder de Deus se manifestar. Sua graça é suficiente para nos sustentar em qualquer situação.",
      category: "graca",
      date: "02 Jan 2025"
    },
    {
      title: "Paz Que Excede",
      verse: "E a paz de Deus, que excede todo o entendimento, guardará o vosso coração e a vossa mente em Cristo Jesus.",
      reference: "Filipenses 4:7",
      reflection: "A paz de Deus não depende das circunstâncias externas. É uma paz sobrenatural que guarda nosso coração e mente, mesmo em meio às tempestades da vida.",
      category: "paz",
      date: "01 Jan 2025"
    },
    {
      title: "Fé Inabalável",
      verse: "Ora, a fé é o firme fundamento das coisas que se esperam e a prova das coisas que se não veem.",
      reference: "Hebreus 11:1",
      reflection: "A fé nos permite ver além das circunstâncias presentes. É a certeza de que Deus cumprirá suas promessas, mesmo quando não conseguimos ver como.",
      category: "fe",
      date: "31 Dez 2024"
    },
    {
      title: "Perdão e Restauração",
      verse: "Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça.",
      reference: "1 João 1:9",
      reflection: "O perdão de Deus está sempre disponível. Não importa o que fizemos, quando confessamos nossos erros com sinceridade, Ele nos perdoa completamente e nos restaura.",
      category: "perdao",
      date: "30 Dez 2024"
    },
    {
      title: "Sabedoria Divina",
      verse: "Se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente e sem repreender; e ser-lhe-á dada.",
      reference: "Tiago 1:5",
      reflection: "Quando enfrentamos decisões difíceis ou situações complexas, podemos pedir sabedoria a Deus. Ele nos dará discernimento e direção quando buscamos Sua orientação com fé.",
      category: "sabedoria",
      date: "29 Dez 2024"
    },
    {
      title: "Alegria do Senhor",
      verse: "A alegria do SENHOR é a vossa força.",
      reference: "Neemias 8:10",
      reflection: "A alegria que vem do Senhor não depende das circunstâncias. É uma fonte de força que nos sustenta nos momentos difíceis e nos capacita a vencer os desafios da vida.",
      category: "alegria",
      date: "28 Dez 2024"
    },
    {
      title: "Confiança Inabalável",
      verse: "Confia no SENHOR de todo o teu coração e não te estribes no teu próprio entendimento.",
      reference: "Provérbios 3:5",
      reflection: "Nossa compreensão é limitada, mas Deus vê o quadro completo. Quando confiamos n'Ele completamente, mesmo sem entender tudo, Ele dirige nossos passos no caminho certo.",
      category: "confianca",
      date: "27 Dez 2024"
    },
    {
      title: "Oração Poderosa",
      verse: "Orai sem cessar.",
      reference: "1 Tessalonicenses 5:17",
      reflection: "A oração não é apenas um ritual, mas uma conversa contínua com Deus. Podemos falar com Ele a qualquer momento, sobre qualquer coisa. Ele sempre está disposto a nos ouvir.",
      category: "oracao",
      date: "26 Dez 2024"
    },
    {
      title: "Generosidade Divina",
      verse: "Dai, e ser-vos-á dado; boa medida, recalcada, sacudida e transbordando vos deitarão no vosso regaço.",
      reference: "Lucas 6:38",
      reflection: "Deus é generoso e nos chama a ser generosos também. Quando damos com amor, Ele multiplica de volta para nós de maneiras inesperadas. A generosidade abre as portas das bênçãos divinas.",
      category: "generosidade",
      date: "25 Dez 2024"
    },
    {
      title: "Propósito Divino",
      verse: "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados por seu decreto.",
      reference: "Romanos 8:28",
      reflection: "Mesmo quando não entendemos o porquê das situações, Deus está trabalhando tudo para o nosso bem. Ele tem um propósito em cada experiência e usa tudo para nos moldar à imagem de Cristo.",
      category: "proposito",
      date: "24 Dez 2024"
    }
  ];

  // Função para calcular qual devocional mostrar baseado na semana atual (robusta e com fallback)
  const getCurrentWeeklyDevotional = useMemo(() => {
    const now = new Date();
    // Usar Date seguro (evita parsing inconsistente de string)
    const referenceDate = new Date(2024, 0, 1);
    const len = devotionals.length;
    if (!len) return null;

    const msPerWeek = 7 * 24 * 60 * 60 * 1000;
    const weeksDifference = Math.floor((now.getTime() - referenceDate.getTime()) / msPerWeek);
    // índice seguro para qualquer sinal
    const index = ((weeksDifference % len) + len) % len;

    return devotionals[index] || null;
  }, [devotionals]);

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
              <div className="w-16 h-16 gradient-betel rounded-full flex items-center justify-center shadow-lg ring-2 ring-white/60">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-betel-gray-dark mb-6 font-playfair">
              Palavra da <span className="text-gradient">Semana</span>
            </h2>
          </div>

          {/* Devotional Card */}
          {getCurrentWeeklyDevotional ? (
            <div className="relative bg-white/95 backdrop-blur rounded-3xl border-2 border-betel-gray-light shadow-2xl p-8 md:p-12 mb-8 animate-on-scroll hover-lift transform-gpu transition-all hover:scale-[1.01] ring-1 ring-transparent ring-offset-1 ring-offset-white hover:ring-betel-red">
              {/* Decorações sutis */}
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-betel-gold/20 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-betel-red/10 blur-3xl" />

              {/* Verse */}
              <div className="mb-8">
                <div className="text-6xl text-betel-gold mb-4">"</div>
                <blockquote className="text-2xl md:text-3xl font-medium text-betel-gray-dark leading-relaxed font-playfair mb-6">
                  {getCurrentWeeklyDevotional.verse}
                </blockquote>
                <cite className="text-lg font-semibold text-betel-red">
                  — {getCurrentWeeklyDevotional.reference}
                </cite>
              </div>

              {/* Reflection */}
              <div className="border-t border-betel-gray-light pt-8">
                <h3 className="text-xl font-bold text-betel-gray-dark mb-4 font-playfair flex items-center justify-center">
                  <Heart className="w-5 h-5 text-betel-red mr-2" />
                  Reflexão
                </h3>
                <p className="text-lg text-betel-gray leading-relaxed max-w-3xl mx-auto">
                  {getCurrentWeeklyDevotional.reflection}
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center mb-8">
              <h3 className="text-xl font-bold text-betel-gray-dark mb-2 font-playfair">Em breve</h3>
              <p className="text-betel-gray">Não foi possível carregar a Palavra da Semana.</p>
            </div>
          )}

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
