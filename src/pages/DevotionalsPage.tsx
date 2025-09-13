
import React, { useState } from 'react';
import { BookOpen, Heart, ArrowLeft, Search, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const DevotionalsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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
      reflection: "Quando reconhecemos nossa fraqueza, Deus demonstra Seu poder. Não precisamos ser perfeitos ou ter todas as respostas. Na nossa fragilidade, Ele Se revela forte e suficiente.",
      category: "fe",
      date: "02 Jan 2025"
    },
    {
      title: "Renovando as Forças",
      verse: "Mas os que esperam no SENHOR renovam as suas forças, sobem com asas como águias, correm e não se cansam, caminham e não se fatigam.",
      reference: "Isaías 40:31",
      reflection: "Quando estamos cansados e desanimados, podemos encontrar renovação em Deus. Ele nos dá forças para continuar, nos capacita a voar acima das circunstâncias e nos sustenta na jornada.",
      category: "esperanca",
      date: "01 Jan 2025"
    },
    {
      title: "Paz em Meio à Tempestade",
      verse: "Estas coisas vos tenho dito para que tenhais paz em mim. No mundo tereis aflições, mas tende bom ânimo; eu venci o mundo.",
      reference: "João 16:33",
      reflection: "Jesus não promete ausência de problemas, mas promete Sua paz em meio às dificuldades. Ele já venceu todas as batalhas que enfrentamos. Em Cristo, podemos ter paz verdadeira.",
      category: "paz",
      date: "31 Dez 2024"
    },
    {
      title: "O Bom Pastor",
      verse: "O SENHOR é o meu pastor; nada me faltará. Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas.",
      reference: "Salmos 23:1-2",
      reflection: "Como um pastor cuida de suas ovelhas, Deus cuida de nós. Ele nos guia, nos protege e supre todas as nossas necessidades. Podemos descansar em Seu cuidado amoroso.",
      category: "cuidado",
      date: "30 Dez 2024"
    },
    {
      title: "Perdão e Restauração",
      verse: "Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça.",
      reference: "1 João 1:9",
      reflection: "O perdão de Deus está sempre disponível. Não importa o que fizemos, quando confessamos nossos erros com sinceridade, Ele nos perdoa completamente e nos restaura.",
      category: "perdao",
      date: "29 Dez 2024"
    },
    {
      title: "Sabedoria Divina",
      verse: "Se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente e sem repreender; e ser-lhe-á dada.",
      reference: "Tiago 1:5",
      reflection: "Quando enfrentamos decisões difíceis ou situações complexas, podemos pedir sabedoria a Deus. Ele nos dará discernimento e direção quando buscamos Sua orientação com fé.",
      category: "sabedoria",
      date: "28 Dez 2024"
    },
    {
      title: "Alegria do Senhor",
      verse: "A alegria do SENHOR é a vossa força.",
      reference: "Neemias 8:10",
      reflection: "A alegria que vem do Senhor não depende das circunstâncias. É uma fonte de força que nos sustenta nos momentos difíceis e nos capacita a vencer os desafios da vida.",
      category: "alegria",
      date: "27 Dez 2024"
    },
    {
      title: "Confiança Inabalável",
      verse: "Confia no SENHOR de todo o teu coração e não te estribes no teu próprio entendimento.",
      reference: "Provérbios 3:5",
      reflection: "Nossa compreensão é limitada, mas Deus vê o quadro completo. Quando confiamos n'Ele completamente, mesmo sem entender tudo, Ele dirige nossos passos no caminho certo.",
      category: "confianca",
      date: "26 Dez 2024"
    },
    {
      title: "Oração Poderosa",
      verse: "Orai sem cessar.",
      reference: "1 Tessalonicenses 5:17",
      reflection: "A oração não é apenas um ritual, mas uma conversa contínua com Deus. Podemos falar com Ele a qualquer momento, sobre qualquer coisa. Ele sempre está disposto a nos ouvir.",
      category: "oracao",
      date: "25 Dez 2024"
    },
    {
      title: "Generosidade Divina",
      verse: "Dai, e ser-vos-á dado; boa medida, recalcada, sacudida e transbordando vos deitarão no vosso regaço.",
      reference: "Lucas 6:38",
      reflection: "Deus é generoso e nos chama a ser generosos também. Quando damos com amor, Ele multiplica de volta para nós de maneiras inesperadas. A generosidade abre as portas das bênçãos divinas.",
      category: "generosidade",
      date: "24 Dez 2024"
    },
    {
      title: "Propósito Divino",
      verse: "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados por seu decreto.",
      reference: "Romanos 8:28",
      reflection: "Mesmo quando não entendemos o porquê das situações, Deus está trabalhando tudo para o nosso bem. Ele tem um propósito em cada experiência e usa tudo para nos moldar à imagem de Cristo.",
      category: "proposito",
      date: "23 Dez 2024"
    },
    {
      title: "Paciência e Perseverança",
      verse: "Mas os que esperam no SENHOR renovam as suas forças, sobem com asas como águias, correm e não se cansam, caminham e não se fatigam.",
      reference: "Isaías 40:31",
      reflection: "A paciência é uma virtude que se desenvolve na espera. Quando aprendemos a esperar no tempo de Deus, desenvolvemos perseverança e nossa fé se fortalece.",
      category: "paciencia",
      date: "22 Dez 2024"
    },
    {
      title: "Luz nas Trevas",
      verse: "A vossa palavra é lâmpada para os meus pés e luz para o meu caminho.",
      reference: "Salmos 119:105",
      reflection: "A Palavra de Deus é nossa bússola na vida. Quando estamos confusos ou perdidos, ela ilumina o caminho e nos mostra a direção certa a seguir.",
      category: "orientacao",
      date: "21 Dez 2024"
    },
    {
      title: "Comunhão Verdadeira",
      verse: "Mas, se andarmos na luz, como ele na luz está, temos comunhão uns com os outros, e o sangue de Jesus Cristo, seu Filho, nos purifica de todo pecado.",
      reference: "1 João 1:7",
      reflection: "A verdadeira comunhão acontece quando vivemos na luz de Deus. Relacionamentos autênticos são construídos na transparência, amor e perdão mútuos.",
      category: "comunhao",
      date: "20 Dez 2024"
    },
    {
      title: "Gratidão Constante",
      verse: "Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.",
      reference: "1 Tessalonicenses 5:18",
      reflection: "A gratidão transforma nossa perspectiva. Mesmo nas dificuldades, podemos encontrar motivos para agradecer. Um coração grato é um coração que reconhece as bênçãos de Deus.",
      category: "gratidao",
      date: "19 Dez 2024"
    },
    {
      title: "Vitória Assegurada",
      verse: "Mas graças a Deus, que sempre nos faz triunfar em Cristo e, por meio de nós, manifesta em todo lugar o cheiro do seu conhecimento.",
      reference: "2 Coríntios 2:14",
      reflection: "Em Cristo, já somos mais que vencedores. As batalhas que enfrentamos já foram vencidas por Jesus. Podemos caminhar com confiança, sabendo que a vitória é nossa.",
      category: "vitoria",
      date: "18 Dez 2024"
    },
    {
      title: "Humildade Verdadeira",
      verse: "Humilhai-vos, pois, debaixo da potente mão de Deus, para que, a seu tempo, vos exalte.",
      reference: "1 Pedro 5:6",
      reflection: "A humildade não é fraqueza, mas reconhecimento da grandeza de Deus. Quando nos humilhamos diante d'Ele, Ele nos honra e nos exalta no tempo certo.",
      category: "humildade",
      date: "17 Dez 2024"
    },
    {
      title: "Amor Incondicional",
      verse: "Mas Deus prova o seu amor para conosco em que Cristo morreu por nós, sendo nós ainda pecadores.",
      reference: "Romanos 5:8",
      reflection: "O amor de Deus não depende do nosso comportamento. Ele nos ama incondicionalmente, mesmo quando falhamos. Este amor incondicional nos transforma e nos capacita a amar outros.",
      category: "amor",
      date: "16 Dez 2024"
    },
    // Novos 50 devocionais
    {
      title: "A Porta da Esperança",
      verse: "Eis que estou à porta e bato; se alguém ouvir a minha voz e abrir a porta, entrarei em sua casa e com ele cearei, e ele, comigo.",
      reference: "Apocalipse 3:20",
      reflection: "Jesus está sempre à porta do nosso coração, esperando pacientemente que O convidemos a entrar. Ele deseja ter comunhão íntima conosco e transformar nossa vida.",
      category: "esperanca",
      date: "15 Dez 2024"
    },
    {
      title: "Fé Como Grão de Mostarda",
      verse: "Se tiverdes fé como um grão de mostarda, direis a este monte: Passa daqui para acolá — e há de passar; e nada vos será impossível.",
      reference: "Mateus 17:20",
      reflection: "Não é o tamanho da nossa fé que importa, mas a grandeza do Deus em quem confiamos. Uma pequena fé em um grande Deus pode mover montanhas.",
      category: "fe",
      date: "14 Dez 2024"
    },
    {
      title: "Provisão Abundante",
      verse: "E o meu Deus, segundo as suas riquezas, suprirá todas as vossas necessidades em glória, por Cristo Jesus.",
      reference: "Filipenses 4:19",
      reflection: "Deus conhece todas as nossas necessidades e promete supri-las abundantemente. Podemos confiar que Ele nunca nos faltará com o que precisamos.",
      category: "cuidado",
      date: "13 Dez 2024"
    },
    {
      title: "Descanso Para a Alma",
      verse: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.",
      reference: "Mateus 11:28",
      reflection: "Jesus oferece descanso verdadeiro para nossa alma cansada. Nele encontramos alívio das cargas pesadas e paz para o coração inquieto.",
      category: "paz",
      date: "12 Dez 2024"
    },
    {
      title: "Transformação Interior",
      verse: "E todos nós, que com a face descoberta contemplamos a glória do Senhor, segundo a sua imagem estamos sendo transformados com glória crescente.",
      reference: "2 Coríntios 3:18",
      reflection: "Quando contemplamos a Jesus, somos gradualmente transformados à Sua imagem. A mudança acontece de dentro para fora, pela obra do Espírito Santo.",
      category: "transformacao",
      date: "11 Dez 2024"
    },
    {
      title: "Servo de Todos",
      verse: "Se alguém quiser ser o primeiro, será o derradeiro de todos e servo de todos.",
      reference: "Marcos 9:35",
      reflection: "A verdadeira grandeza no Reino de Deus é medida pelo serviço. Quando servimos outros com amor, refletimos o coração de Cristo.",
      category: "servico",
      date: "10 Dez 2024"
    },
    {
      title: "Santidade Necessária",
      verse: "Mas, como é santo aquele que vos chamou, sede vós também santos em toda a vossa maneira de viver.",
      reference: "1 Pedro 1:15",
      reflection: "Deus nos chama para uma vida de santidade. Isso significa viver de forma diferente do mundo, refletindo o caráter de Cristo em tudo que fazemos.",
      category: "santidade",
      date: "09 Dez 2024"
    },
    {
      title: "Unidade no Espírito",
      verse: "Procurando guardar a unidade do Espírito pelo vínculo da paz.",
      reference: "Efésios 4:3",
      reflection: "A unidade entre os cristãos é preciosa para Deus. Devemos nos esforçar para manter a harmonia e a paz na comunidade da fé.",
      category: "unidade",
      date: "08 Dez 2024"
    },
    {
      title: "Esperança Que Não Falha",
      verse: "Ora, a esperança que se vê não é esperança; porque o que alguém vê, como o esperará?",
      reference: "Romanos 8:24",
      reflection: "Nossa esperança em Deus vai além do que vemos. Confiamos nas promessas divinas mesmo quando as circunstâncias parecem contrárias.",
      category: "esperanca",
      date: "07 Dez 2024"
    },
    {
      title: "Fruto do Espírito",
      verse: "Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança.",
      reference: "Gálatas 5:22-23",
      reflection: "O Espírito Santo produz em nós qualidades divinas. Essas virtudes são evidências da presença de Deus em nossa vida.",
      category: "fruto",
      date: "06 Dez 2024"
    },
    {
      title: "Palavra Viva",
      verse: "Porque a palavra de Deus é viva, e eficaz, e mais penetrante do que qualquer espada de dois gumes.",
      reference: "Hebreus 4:12",
      reflection: "A Palavra de Deus tem poder transformador. Ela penetra em nosso coração, revela nossos pensamentos e produz mudança real.",
      category: "palavra",
      date: "05 Dez 2024"
    },
    {
      title: "Misericórdia Renovada",
      verse: "As misericórdias do SENHOR são a causa de não sermos consumidos; porque as suas misericórdias não têm fim.",
      reference: "Lamentações 3:22",
      reflection: "A misericórdia de Deus se renova a cada manhã. Não importa quantas vezes falhamos, Sua compaixão permanece constante.",
      category: "misericordia",
      date: "04 Dez 2024"
    },
    {
      title: "Proteção Divina",
      verse: "O anjo do SENHOR acampa-se ao redor daqueles que o temem e os livra.",
      reference: "Salmos 34:7",
      reflection: "Deus oferece proteção sobrenatural àqueles que O temem. Seus anjos estão constantemente nos guardando e nos livrando do mal.",
      category: "protecao",
      date: "03 Dez 2024"
    },
    {
      title: "Crescimento na Graça",
      verse: "Antes, crescei na graça e conhecimento de nosso Senhor e Salvador Jesus Cristo.",
      reference: "2 Pedro 3:18",
      reflection: "O crescimento espiritual é um processo contínuo. Devemos buscar constantemente conhecer mais de Cristo e crescer em Sua graça.",
      category: "crescimento",
      date: "02 Dez 2024"
    },
    {
      title: "Fortaleza no Senhor",
      verse: "No demais, irmãos meus, fortalecei-vos no Senhor e na força do seu poder.",
      reference: "Efésios 6:10",
      reflection: "Nossa força não vem de nós mesmos, mas do Senhor. Em Sua força podemos enfrentar qualquer desafio ou adversidade.",
      category: "fortaleza",
      date: "01 Dez 2024"
    },
    {
      title: "Louvor em Toda Circunstância",
      verse: "Louvai ao SENHOR, porque ele é bom; porque a sua benignidade dura para sempre.",
      reference: "Salmos 107:1",
      reflection: "O louvor deve ser nossa resposta natural à bondade de Deus. Ele é digno de louvor em todas as circunstâncias da vida.",
      category: "louvor",
      date: "30 Nov 2024"
    },
    {
      title: "Restauração Completa",
      verse: "E o Deus de toda a graça, que em Cristo Jesus vos chamou à sua eterna glória, depois de haverdes padecido um pouco, ele mesmo vos aperfeiçoará, confirmará, fortificará e fortalecerá.",
      reference: "1 Pedro 5:10",
      reflection: "Deus usa nossas dificuldades para nos aperfeiçoar. Após o sofrimento, Ele nos restaura completamente e nos torna mais fortes.",
      category: "restauracao",
      date: "29 Nov 2024"
    },
    {
      title: "Luz do Mundo",
      verse: "Vós sois a luz do mundo; não se pode esconder uma cidade edificada sobre um monte.",
      reference: "Mateus 5:14",
      reflection: "Como cristãos, somos chamados a ser luz em meio às trevas do mundo. Nossa vida deve refletir a luz de Cristo para outros.",
      category: "testemunho",
      date: "28 Nov 2024"
    },
    {
      title: "Perseverança na Corrida",
      verse: "Corramos, com paciência, a carreira que nos está proposta, olhando para Jesus, autor e consumador da fé.",
      reference: "Hebreus 12:1-2",
      reflection: "A vida cristã é como uma corrida que requer perseverança. Devemos manter nossos olhos fixos em Jesus, que nos capacita a continuar.",
      category: "perseveranca",
      date: "27 Nov 2024"
    },
    {
      title: "Dons Espirituais",
      verse: "Mas a cada um é dada a manifestação do Espírito, para o que for útil.",
      reference: "1 Coríntios 12:7",
      reflection: "Deus concede dons espirituais a cada cristão para edificar o corpo de Cristo. Devemos descobrir e usar nossos dons para glorificar a Deus.",
      category: "dons",
      date: "26 Nov 2024"
    },
    {
      title: "Contentamento Verdadeiro",
      verse: "Não digo isto como por necessidade, porque já aprendi a contentar-me com o que tenho.",
      reference: "Filipenses 4:11",
      reflection: "O contentamento não depende das circunstâncias externas, mas de nossa atitude interior. Podemos aprender a estar satisfeitos em Cristo.",
      category: "contentamento",
      date: "25 Nov 2024"
    },
    {
      title: "Novo Nascimento",
      verse: "Na verdade, na verdade te digo que aquele que não nascer de novo não pode ver o Reino de Deus.",
      reference: "João 3:3",
      reflection: "O novo nascimento é essencial para entrar no Reino de Deus. É uma transformação completa que acontece quando aceitamos Cristo.",
      category: "salvacao",
      date: "24 Nov 2024"
    },
    {
      title: "Disciplina do Amor",
      verse: "Porque o Senhor corrige o que ama e açoita a qualquer que recebe por filho.",
      reference: "Hebreus 12:6",
      reflection: "A disciplina de Deus é expressão do Seu amor. Ele nos corrige não para nos punir, mas para nos formar à imagem de Cristo.",
      category: "disciplina",
      date: "23 Nov 2024"
    },
    {
      title: "Herança Incorruptível",
      verse: "Para uma herança incorruptível, incontaminável e que se não pode murchar, guardada nos céus para vós.",
      reference: "1 Pedro 1:4",
      reflection: "Nossa herança em Cristo é eterna e incorruptível. As riquezas celestiais que nos aguardam são muito superiores a qualquer tesouro terreno.",
      category: "heranca",
      date: "22 Nov 2024"
    },
    {
      title: "Armadura de Deus",
      verse: "Revesti-vos de toda a armadura de Deus, para que possais estar firmes contra as astutas ciladas do diabo.",
      reference: "Efésios 6:11",
      reflection: "Enfrentamos uma batalha espiritual real. Deus nos fornece toda a armadura necessária para vencermos as estratégias do inimigo.",
      category: "guerra",
      date: "21 Nov 2024"
    },
    {
      title: "Sal da Terra",
      verse: "Vós sois o sal da terra; e, se o sal for insípido, com que se há de salgar?",
      reference: "Mateus 5:13",
      reflection: "Como sal, devemos preservar e dar sabor ao mundo ao nosso redor. Nossa presença deve fazer diferença na sociedade.",
      category: "influencia",
      date: "20 Nov 2024"
    },
    {
      title: "Comunhão dos Santos",
      verse: "E perseveravam na doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas orações.",
      reference: "Atos 2:42",
      reflection: "A comunhão cristã é fundamental para o crescimento espiritual. Precisamos uns dos outros para crescer na fé e no amor.",
      category: "comunhao",
      date: "19 Nov 2024"
    },
    {
      title: "Testemunhas Fiéis",
      verse: "Mas recebereis a virtude do Espírito Santo, que há de vir sobre vós; e ser-me-eis testemunhas.",
      reference: "Atos 1:8",
      reflection: "Somos chamados a ser testemunhas de Cristo, capacitados pelo Espírito Santo. Nossa vida e palavras devem apontar para Jesus.",
      category: "testemunho",
      date: "18 Nov 2024"
    },
    {
      title: "Imitadores de Cristo",
      verse: "Sede, pois, imitadores de Deus, como filhos amados.",
      reference: "Efésios 5:1",
      reflection: "Como filhos de Deus, devemos imitar nosso Pai celestial. Isso significa refletir Seu caráter de amor, santidade e justiça.",
      category: "imitacao",
      date: "17 Nov 2024"
    },
    {
      title: "Esperança da Glória",
      verse: "A quem Deus quis fazer conhecer quais são as riquezas da glória deste mistério entre os gentios, que é Cristo em vós, esperança da glória.",
      reference: "Colossenses 1:27",
      reflection: "Cristo em nós é nossa esperança de glória. Sua presença interior nos garante um futuro glorioso com Ele.",
      category: "gloria",
      date: "16 Nov 2024"
    },
    {
      title: "Edificação Mútua",
      verse: "Assim que sigamos as coisas que servem para a paz e para a edificação de uns para com os outros.",
      reference: "Romanos 14:19",
      reflection: "Devemos buscar a paz e a edificação mútua na comunidade cristã. Nossas ações e palavras devem construir e não destruir.",
      category: "edificacao",
      date: "15 Nov 2024"
    },
    {
      title: "Refúgio Seguro",
      verse: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",
      reference: "Salmos 46:1",
      reflection: "Em momentos de dificuldade, Deus é nosso refúgio seguro. Podemos correr para Ele e encontrar proteção e força.",
      category: "refugio",
      date: "14 Nov 2024"
    },
    {
      title: "Pureza de Coração",
      verse: "Bem-aventurados os limpos de coração, porque eles verão a Deus.",
      reference: "Mateus 5:8",
      reflection: "A pureza de coração nos capacita a ver e conhecer a Deus mais intimamente. Devemos buscar a santidade interior.",
      category: "pureza",
      date: "13 Nov 2024"
    },
    {
      title: "Chamado Santo",
      verse: "Que nos salvou e chamou com uma santa vocação; não segundo as nossas obras, mas segundo o seu próprio propósito e graça.",
      reference: "2 Timóteo 1:9",
      reflection: "Deus nos salvou e nos chamou para uma vida santa. Este chamado não é baseado em nossos méritos, mas em Sua graça.",
      category: "chamado",
      date: "12 Nov 2024"
    },
    {
      title: "Coroa da Vida",
      verse: "Bem-aventurado o varão que sofre a tentação; porque, quando for provado, receberá a coroa da vida.",
      reference: "Tiago 1:12",
      reflection: "Aqueles que perseveram nas tentações e provações receberão a coroa da vida. A fidelidade em meio às dificuldades será recompensada.",
      category: "recompensa",
      date: "11 Nov 2024"
    },
    {
      title: "Vencedores em Cristo",
      verse: "Mas, em todas estas coisas, somos mais do que vencedores, por aquele que nos amou.",
      reference: "Romanos 8:37",
      reflection: "Em Cristo, somos mais que vencedores sobre todas as adversidades. O amor de Deus nos torna vitoriosos em qualquer situação.",
      category: "vitoria",
      date: "10 Nov 2024"
    },
    {
      title: "Poder da Ressurreição",
      verse: "Para conhecê-lo, e à virtude da sua ressurreição, e à comunicação de suas aflições.",
      reference: "Filipenses 3:10",
      reflection: "O poder que ressuscitou Jesus está disponível para nós. Este mesmo poder nos capacita a viver uma vida vitoriosa.",
      category: "ressurreicao",
      date: "09 Nov 2024"
    },
    {
      title: "Mansidão e Humildade",
      verse: "Tomai sobre vós o meu jugo, e aprendei de mim, que sou manso e humilde de coração.",
      reference: "Mateus 11:29",
      reflection: "Jesus nos convida a aprender Sua mansidão e humildade. Essas qualidades trazem descanso e paz para nossa alma.",
      category: "mansidao",
      date: "08 Nov 2024"
    },
    {
      title: "Fidelidade de Deus",
      verse: "Fiel é Deus, pelo qual fostes chamados para a comunhão de seu Filho Jesus Cristo, nosso Senhor.",
      reference: "1 Coríntios 1:9",
      reflection: "Deus é absolutamente fiel em todas as Suas promessas. Podemos confiar completamente em Sua palavra e caráter imutável.",
      category: "fidelidade",
      date: "07 Nov 2024"
    },
    {
      title: "Cura Interior",
      verse: "Ele sara os quebrantados de coração e liga-lhes as feridas.",
      reference: "Salmos 147:3",
      reflection: "Deus é especialista em curar corações quebrantados. Ele tem compaixão de nossas dores e nos restaura completamente.",
      category: "cura",
      date: "06 Nov 2024"
    },
    {
      title: "Liberdade em Cristo",
      verse: "Para a liberdade foi que Cristo nos libertou; estai, pois, firmes e não torneis a meter-vos debaixo do jugo da servidão.",
      reference: "Gálatas 5:1",
      reflection: "Cristo nos libertou para vivermos em verdadeira liberdade. Não devemos voltar aos antigos padrões de escravidão espiritual.",
      category: "liberdade",
      date: "05 Nov 2024"
    },
    {
      title: "Gozo Completo",
      verse: "Estas coisas vos tenho dito para que o meu gozo permaneça em vós, e o vosso gozo seja completo.",
      reference: "João 15:11",
      reflection: "Jesus deseja que experimentemos Seu gozo de forma completa. Esta alegria divina não depende das circunstâncias externas.",
      category: "gozo",
      date: "04 Nov 2024"
    },
    {
      title: "Morada do Espírito",
      verse: "Não sabeis vós que sois o templo de Deus e que o Espírito de Deus habita em vós?",
      reference: "1 Coríntios 3:16",
      reflection: "Nosso corpo é templo do Espírito Santo. Esta verdade deve influenciar como cuidamos de nós mesmos e como vivemos.",
      category: "templo",
      date: "03 Nov 2024"
    },
    {
      title: "Justiça de Deus",
      verse: "Àquele que não conheceu pecado, o fez pecado por nós; para que, nele, fôssemos feitos justiça de Deus.",
      reference: "2 Coríntios 5:21",
      reflection: "Em Cristo, recebemos a justiça de Deus. Jesus levou nossos pecados para que pudéssemos receber Sua retidão.",
      category: "justica",
      date: "02 Nov 2024"
    },
    {
      title: "Amor Perfeito",
      verse: "No amor não há temor; antes, o perfeito amor lança fora o medo.",
      reference: "1 João 4:18",
      reflection: "O amor perfeito de Deus remove todos os nossos medos. Quando conhecemos verdadeiramente Seu amor, vivemos sem temor.",
      category: "amor",
      date: "01 Nov 2024"
    }
  ];

  const categories = [
    { value: 'all', label: 'Todas as Categorias' },
    { value: 'amor', label: 'Amor' },
    { value: 'esperanca', label: 'Esperança' },
    { value: 'fe', label: 'Fé' },
    { value: 'paz', label: 'Paz' },
    { value: 'cuidado', label: 'Cuidado de Deus' },
    { value: 'perdao', label: 'Perdão' },
    { value: 'sabedoria', label: 'Sabedoria' },
    { value: 'alegria', label: 'Alegria' },
    { value: 'confianca', label: 'Confiança' },
    { value: 'oracao', label: 'Oração' },
    { value: 'generosidade', label: 'Generosidade' },
    { value: 'proposito', label: 'Propósito' },
    { value: 'paciencia', label: 'Paciência' },
    { value: 'orientacao', label: 'Orientação' },
    { value: 'comunhao', label: 'Comunhão' },
    { value: 'gratidao', label: 'Gratidão' },
    { value: 'vitoria', label: 'Vitória' },
    { value: 'humildade', label: 'Humildade' },
    { value: 'transformacao', label: 'Transformação' },
    { value: 'servico', label: 'Serviço' },
    { value: 'santidade', label: 'Santidade' },
    { value: 'unidade', label: 'Unidade' },
    { value: 'fruto', label: 'Fruto do Espírito' },
    { value: 'palavra', label: 'Palavra de Deus' },
    { value: 'misericordia', label: 'Misericórdia' },
    { value: 'protecao', label: 'Proteção' },
    { value: 'crescimento', label: 'Crescimento' },
    { value: 'fortaleza', label: 'Fortaleza' },
    { value: 'louvor', label: 'Louvor' },
    { value: 'restauracao', label: 'Restauração' },
    { value: 'testemunho', label: 'Testemunho' },
    { value: 'perseveranca', label: 'Perseverança' },
    { value: 'dons', label: 'Dons Espirituais' },
    { value: 'contentamento', label: 'Contentamento' },
    { value: 'salvacao', label: 'Salvação' },
    { value: 'disciplina', label: 'Disciplina' },
    { value: 'heranca', label: 'Herança' },
    { value: 'guerra', label: 'Guerra Espiritual' },
    { value: 'influencia', label: 'Influência' },
    { value: 'imitacao', label: 'Imitação de Cristo' },
    { value: 'gloria', label: 'Glória' },
    { value: 'edificacao', label: 'Edificação' },
    { value: 'refugio', label: 'Refúgio' },
    { value: 'pureza', label: 'Pureza' },
    { value: 'chamado', label: 'Chamado' },
    { value: 'recompensa', label: 'Recompensa' },
    { value: 'ressurreicao', label: 'Ressurreição' },
    { value: 'mansidao', label: 'Mansidão' },
    { value: 'fidelidade', label: 'Fidelidade' },
    { value: 'cura', label: 'Cura' },
    { value: 'liberdade', label: 'Liberdade' },
    { value: 'gozo', label: 'Gozo' },
    { value: 'templo', label: 'Templo do Espírito' },
    { value: 'justica', label: 'Justiça' }
  ];

  const filteredDevotionals = devotionals.filter(devotional => {
    const matchesCategory = selectedCategory === 'all' || devotional.category === selectedCategory;
    const matchesSearch = devotional.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         devotional.reflection.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         devotional.verse.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredDevotionals.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDevotionals = filteredDevotionals.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-betel-gold-light to-betel-yellow">
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
                Biblioteca de <span className="text-betel-red">Devocionais</span>
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
              <Tag className="w-5 h-5 text-betel-red" />
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-betel-gray-light rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-betel-red"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-2 bg-betel-gray-light rounded-lg px-4 py-2">
              <Search className="w-4 h-4 text-betel-gray" />
              <input
                type="text"
                placeholder="Buscar devocionais..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent outline-none flex-1"
              />
            </div>
          </div>
        </div>

        {/* Results Info */}
        {filteredDevotionals.length > 0 && (
          <div className="mb-6 text-center">
            <p className="text-betel-gray">
              Mostrando {startIndex + 1}-{Math.min(endIndex, filteredDevotionals.length)} de {filteredDevotionals.length} devocionais
            </p>
          </div>
        )}

        {/* Devotionals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentDevotionals.map((devotional, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg p-6 hover-lift group">
              {/* Date */}
              <div className="flex items-center text-betel-gray text-sm mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                {devotional.date}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-betel-gray-dark mb-4 font-playfair group-hover:text-betel-red transition-colors">
                {devotional.title}
              </h3>

              {/* Verse */}
              <div className="mb-6">
                <div className="text-4xl text-betel-gold mb-2">"</div>
                <blockquote className="text-betel-gray-dark leading-relaxed font-medium mb-3 italic">
                  {devotional.verse}
                </blockquote>
                <cite className="text-betel-red font-semibold text-sm">
                  — {devotional.reference}
                </cite>
              </div>

              {/* Reflection */}
              <div className="border-t border-betel-gray-light pt-4">
                <h4 className="text-sm font-bold text-betel-gray-dark mb-2 font-playfair flex items-center">
                  <Heart className="w-4 h-4 text-betel-red mr-2" />
                  Reflexão
                </h4>
                <p className="text-betel-gray leading-relaxed text-sm">
                  {devotional.reflection}
                </p>
              </div>

              {/* Category */}
              <div className="mt-4 pt-4 border-t border-betel-gray-light">
                <span className="inline-block bg-betel-gold-light text-betel-gray-dark px-3 py-1 rounded-full text-xs font-semibold">
                  {categories.find(cat => cat.value === devotional.category)?.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredDevotionals.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-betel-gray mx-auto mb-4" />
            <p className="text-betel-gray text-lg">Nenhum devocional encontrado com os filtros selecionados.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) handlePageChange(currentPage - 1);
                    }}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(page);
                      }}
                      isActive={currentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) handlePageChange(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

        {/* Summary */}
        <div className="text-center mt-12 bg-white rounded-2xl shadow-lg p-6">
          <BookOpen className="w-12 h-12 text-betel-red mx-auto mb-4" />
          <h3 className="text-xl font-bold text-betel-gray-dark mb-2 font-playfair">
            {filteredDevotionals.length} Devocionais Disponíveis
          </h3>
          <p className="text-betel-gray">
            Explore nossa biblioteca completa de devocionais diários para fortalecer sua fé e crescer espiritualmente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevotionalsPage;
