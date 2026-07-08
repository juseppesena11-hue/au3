import { staged, workImages } from "./images.js";

const serviceBase = [
  {
    slug: "construcao",
    title: "Construção",
    short: "Casas, ampliações e estruturas executadas com rigor desde a fundação à entrega.",
    headline: "Construção profissional com acompanhamento técnico e equipa especializada",
    intro:
      "Executamos obras de construção com elevado padrão técnico, segurança estrutural e total organização de equipas. Do início ao fim, tratamos do planeamento, fundações, alvenaria, instalações, acabamentos e entrega final.",
    includes: [
      "Construção de casas completas",
      "Ampliações e anexos",
      "Estruturas em alvenaria",
      "Espaços exteriores",
      "Remodelações profundas",
    ],
    trust:
      "Uma construção bem executada evita infiltrações, fissuras, falhas técnicas, desperdício de materiais e custos futuros.",
    icon: "building",
  },
  {
    slug: "remodelacao",
    title: "Remodelações",
    short: "Renovações parciais ou completas, coordenadas por uma única equipa responsável.",
    headline: "Transformamos a sua casa com qualidade, organização e acompanhamento",
    intro:
      "Somos especialistas em remodelações completas, desde pequenas renovações a transformações totais de interiores e exteriores, articulando todas as especialidades necessárias.",
    includes: [
      "Remodelações completas",
      "Reabilitação de imóveis antigos",
      "Interiores e exteriores",
      "Cozinhas e casas de banho",
      "Acabamentos finos",
    ],
    trust:
      "Uma remodelação bem planeada valoriza o imóvel, melhora o conforto e reduz problemas futuros.",
    icon: "hammer",
  },
  {
    slug: "pinturas",
    title: "Pinturas",
    short: "Preparação cuidada e pintura interior ou exterior com acabamento duradouro.",
    headline: "Pintura interior e exterior com preparação cuidada",
    intro:
      "Realizamos pintura interior e exterior com equipas experientes, materiais de qualidade e preparação rigorosa para um acabamento uniforme e duradouro.",
    includes: [
      "Pinturas interiores",
      "Fachadas e muros",
      "Reabilitação de paredes",
      "Pintura decorativa",
      "Correção de fissuras",
    ],
    trust:
      "Pintar não é apenas passar tinta. É preparar, nivelar, corrigir e aplicar de forma profissional.",
    icon: "paint",
  },
  {
    slug: "eletricidade",
    title: "Eletricidade",
    short: "Instalações, quadros e reparações elétricas com segurança e precisão.",
    headline: "Instalações elétricas seguras e executadas por profissionais",
    intro:
      "Fazemos desde pequenas intervenções até instalações elétricas completas em habitações, lojas e espaços comerciais.",
    includes: [
      "Instalações completas",
      "Renovação de redes antigas",
      "Quadros elétricos",
      "Iluminação",
      "Diagnóstico e reparações",
    ],
    trust:
      "Resolvemos tomadas queimadas, disjuntores que caem, instalações sobrecarregadas, cabos antigos e curto-circuitos.",
    icon: "bolt",
  },
  {
    slug: "canalizacao",
    title: "Canalização",
    short: "Instalações novas, substituição de tubagens, fugas e reparações rápidas.",
    headline: "Soluções completas para canalização",
    intro:
      "Executamos instalações, substituições e reparações de canalização em remodelações, construções novas e intervenções urgentes.",
    includes: [
      "Reparação de fugas",
      "Tubagem nova",
      "Desentupimentos",
      "Instalação de equipamentos",
      "Canalização para remodelações",
    ],
    trust:
      "Atuamos em fugas, baixa pressão, cheiros, tubos obstruídos, ruturas e equipamentos avariados.",
    icon: "drop",
  },
  {
    slug: "pladur",
    title: "Pladur",
    short: "Divisórias, tetos falsos e soluções técnicas com linhas limpas.",
    headline: "Divisórias e tetos falsos com precisão",
    intro:
      "Criamos espaços funcionais, estéticos e duráveis através de soluções completas em pladur.",
    includes: [
      "Tetos falsos",
      "Divisórias interiores",
      "Forros técnicos",
      "Nichos decorativos",
      "Isolamento acústico e térmico",
    ],
    trust:
      "Uma solução rápida, limpa e flexível, preparada para integrar iluminação e infraestruturas.",
    icon: "layers",
  },
  {
    slug: "microcimento",
    title: "Microcimento",
    short: "Superfícies contínuas, modernas e resistentes para interiores e exteriores.",
    headline: "Acabamento moderno, contínuo e altamente resistente",
    intro:
      "Aplicamos microcimento com rigor técnico, assegurando superfícies uniformes, resistentes e com um acabamento contemporâneo.",
    includes: [
      "Pavimentos e paredes",
      "Casas de banho",
      "Cozinhas",
      "Escadas",
      "Zonas exteriores",
    ],
    trust:
      "Sem juntas, fácil de limpar, resistente e disponível numa ampla gama de cores.",
    icon: "texture",
  },
  {
    slug: "capoto-etics",
    title: "Capoto / ETICS",
    short: "Isolamento térmico de fachadas para maior conforto e eficiência energética.",
    headline: "Eficiência térmica e fachadas duradouras",
    intro:
      "Aplicamos sistemas ETICS com rigor técnico para melhorar o conforto, proteger fachadas e reduzir perdas energéticas.",
    includes: [
      "Aplicação completa de ETICS",
      "Reabilitação de fachadas",
      "Reparação de capoto",
      "Isolamento de moradias e prédios",
      "Acabamentos decorativos",
    ],
    trust:
      "Reduz consumos, combate condensação, protege paredes e valoriza o imóvel.",
    icon: "shield",
  },
  {
    slug: "telhados-impermeabilizacao",
    title: "Telhados e Impermeabilização",
    short: "Proteção eficaz contra infiltrações, humidade e degradação.",
    headline: "Reparação e impermeabilização profissional",
    intro:
      "Reparamos, substituímos e construímos telhados, impermeabilizamos terraços, fachadas e paredes para proteger o imóvel.",
    includes: [
      "Reparação de telhados",
      "Telhados novos",
      "Impermeabilização de terraços",
      "Tratamento de fissuras",
      "Fachadas e paredes",
    ],
    trust:
      "Resolvemos infiltrações, manchas, humidade, telhas degradadas e estruturas comprometidas.",
    icon: "roof",
  },
  {
    slug: "alvenaria",
    title: "Alvenaria",
    short: "Paredes, muros, divisórias e reforços sólidos e bem nivelados.",
    headline: "Estruturas com segurança e durabilidade",
    intro:
      "Executamos trabalhos completos de alvenaria com estruturas sólidas, nivelamento preciso e acabamento de qualidade.",
    includes: [
      "Construção de paredes",
      "Reforço estrutural",
      "Muros e divisórias",
      "Reabilitação antiga",
      "Trabalhos de remodelação",
    ],
    trust: "Alvenaria bem feita é a base de qualquer construção duradoura.",
    icon: "bricks",
  },
  {
    slug: "decks-areas-exteriores",
    title: "Decks e Exteriores",
    short: "Terraços, varandas e jardins bonitos, funcionais e resistentes.",
    headline: "Transformamos o seu espaço exterior",
    intro:
      "Projetamos e construímos decks, varandas, terraços e zonas de lazer com materiais resistentes e acabamento cuidado.",
    includes: [
      "Decks em madeira e compósito",
      "Pavimentos exteriores",
      "Varandas e terraços",
      "Jardins e zonas de lazer",
      "Iluminação exterior",
    ],
    trust:
      "Soluções resistentes ao clima que valorizam o imóvel e simplificam a manutenção.",
    icon: "tree",
  },
  {
    slug: "cozinhas",
    title: "Cozinhas",
    short: "Remodelações funcionais, do desenho técnico ao último acabamento.",
    headline: "Cozinhas com funcionalidade, estética e durabilidade",
    intro:
      "Coordenamos a remodelação integral da cozinha: demolição, redes técnicas, revestimentos, móveis, equipamentos e acabamentos.",
    includes: [
      "Levantamento e projeto",
      "Canalização e eletricidade",
      "Revestimentos",
      "Móveis e tampos",
      "Instalação de equipamentos",
    ],
    trust:
      "Planeamos cada centímetro para criar uma cozinha prática, resistente e valorizadora.",
    icon: "kitchen",
  },
  {
    slug: "casas-de-banho",
    title: "Casas de Banho",
    short: "Renovação completa com impermeabilização e detalhes bem executados.",
    headline: "Remodelação com impermeabilização profissional",
    intro:
      "Renovamos casas de banho com especial atenção à canalização, impermeabilização, revestimentos, iluminação e selagens.",
    includes: [
      "Demolição e preparação",
      "Canalização nova",
      "Impermeabilização",
      "Loiças e móveis",
      "Iluminação e acabamentos",
    ],
    trust:
      "A impermeabilização é a parte crítica para prevenir infiltrações e favorecer a durabilidade.",
    icon: "bath",
  },
  {
    slug: "seguros-ruturas-infiltracoes",
    title: "Seguros, Ruturas e Infiltrações",
    short: "Diagnóstico, reparação e apoio técnico na gestão de sinistros.",
    headline: "Assistência técnica em ruturas, infiltrações e sinistros",
    intro:
      "Identificamos e resolvemos ruturas, infiltrações, danos por humidade ou falhas estruturais, apoiando também a documentação do sinistro.",
    includes: [
      "Avaliação técnica",
      "Reparação imediata",
      "Relatórios e fotografias",
      "Acompanhamento de peritos",
      "Prevenção de novos danos",
    ],
    trust:
      "O objetivo é resolver a origem do problema, proteger o imóvel e apoiar o cliente perante a seguradora.",
    icon: "umbrella",
  },
];

const technicalProfiles = {
  construcao: {
    problems: ["Projeto fragmentado entre várias equipas", "Erros de sequência entre estrutura e instalações", "Falta de controlo sobre materiais e execução"],
    benefits: ["Coordenação entre fases", "Decisões técnicas compatibilizadas", "Maior previsibilidade do trabalho"],
    materials: ["Sistemas de alvenaria adequados ao projeto", "Argamassas, betões e isolamentos especificados", "Revestimentos selecionados para o uso previsto"],
    limitations: "A solução depende do projeto, das condições do terreno, dos elementos existentes e das autorizações aplicáveis. Trabalhos estruturais devem ser definidos e acompanhados pelos técnicos competentes.",
    relatedServices: ["alvenaria", "eletricidade", "canalizacao"],
  },
  remodelacao: {
    problems: ["Distribuição pouco funcional", "Instalações antigas ou desadequadas", "Acabamentos degradados e intervenções sem coordenação"],
    benefits: ["Melhor aproveitamento do espaço", "Integração das várias especialidades", "Renovação planeada de redes e acabamentos"],
    materials: ["Revestimentos cerâmicos, vinílicos ou madeira", "Sistemas de pladur e isolamento", "Tintas e acabamentos adequados a cada divisão"],
    limitations: "Alterações de estrutura, fachada, partes comuns ou utilização podem exigir validação técnica, aprovação de condomínio ou procedimentos municipais.",
    relatedServices: ["cozinhas", "casas-de-banho", "pinturas"],
  },
  pinturas: {
    problems: ["Paredes manchadas ou com fissuras", "Tinta a descascar", "Acabamentos irregulares e suportes mal preparados"],
    benefits: ["Proteção do suporte", "Aspeto uniforme", "Escolha de tinta adequada ao ambiente"],
    materials: ["Primários e selantes", "Massas de reparação", "Tintas laváveis, respiráveis ou de exterior conforme o suporte"],
    limitations: "A pintura não resolve a origem de humidades ou infiltrações. Essas causas devem ser diagnosticadas e corrigidas antes do acabamento.",
    relatedServices: ["remodelacao", "capoto-etics", "telhados-impermeabilizacao"],
  },
  eletricidade: {
    problems: ["Quadros e circuitos desatualizados", "Tomadas insuficientes", "Disparos frequentes e sinais de sobrecarga"],
    benefits: ["Distribuição adaptada ao uso", "Melhor organização dos circuitos", "Preparação para novos equipamentos"],
    materials: ["Cabos e tubagem técnica", "Aparelhagem e proteções", "Quadros e componentes dimensionados para a instalação"],
    limitations: "A intervenção deve respeitar o projeto e as regras técnicas aplicáveis. Certificações ou alterações de potência são tratadas pelas entidades e técnicos habilitados quando exigível.",
    relatedServices: ["remodelacao", "pladur", "cozinhas"],
  },
  canalizacao: {
    problems: ["Fugas e perda de pressão", "Tubagens antigas", "Entupimentos e drenagem deficiente"],
    benefits: ["Redução do risco de danos por água", "Rede organizada e acessível", "Compatibilização com equipamentos novos"],
    materials: ["Tubagem multicamada, PPR ou soluções compatíveis", "Válvulas e ligações adequadas", "Sistemas de drenagem e isolamento"],
    limitations: "A origem de uma fuga pode estar oculta. A extensão da reparação só é confirmada após diagnóstico e acesso à zona afetada.",
    relatedServices: ["casas-de-banho", "cozinhas", "seguros-ruturas-infiltracoes"],
  },
  pladur: {
    problems: ["Falta de divisões funcionais", "Tetos irregulares", "Necessidade de integrar iluminação e isolamento"],
    benefits: ["Execução flexível", "Passagem organizada de instalações", "Possibilidade de reforço acústico e térmico"],
    materials: ["Placas standard, hidrófugas ou resistentes ao fogo conforme o uso", "Perfis metálicos", "Lãs minerais e acessórios de acabamento"],
    limitations: "Cargas suspensas, zonas húmidas e requisitos acústicos ou de resistência ao fogo exigem sistema, reforços e placas apropriados.",
    relatedServices: ["eletricidade", "pinturas", "remodelacao"],
  },
  microcimento: {
    problems: ["Revestimentos com muitas juntas", "Necessidade de renovar sem grande espessura", "Procura de acabamento contínuo"],
    benefits: ["Visual contínuo", "Aplicação em diferentes superfícies compatíveis", "Manutenção simples quando corretamente selado"],
    materials: ["Primários de aderência", "Malha e camadas de base", "Microcimento e selantes de proteção"],
    limitations: "O suporte deve estar estável, seco e bem preparado. Fissuras estruturais ou movimentos do suporte podem transmitir-se ao acabamento.",
    relatedServices: ["casas-de-banho", "cozinhas", "remodelacao"],
  },
  "capoto-etics": {
    problems: ["Paredes frias e condensação", "Perdas térmicas pela fachada", "Revestimento exterior degradado"],
    benefits: ["Continuidade do isolamento exterior", "Proteção adicional da fachada", "Melhoria do conforto térmico"],
    materials: ["Placas de isolamento definidas para o sistema", "Argamassas e rede de reforço", "Primário e acabamento compatíveis"],
    limitations: "O desempenho depende da espessura, dos remates, do suporte e da continuidade do sistema. Fachadas com patologias exigem reparação prévia.",
    relatedServices: ["pinturas", "telhados-impermeabilizacao", "alvenaria"],
  },
  "telhados-impermeabilizacao": {
    problems: ["Entrada de água", "Telhas ou remates degradados", "Terraços com empoçamento"],
    benefits: ["Proteção do interior", "Correção da origem da infiltração", "Maior durabilidade da cobertura"],
    materials: ["Membranas e sistemas líquidos compatíveis", "Subtelha, telhas e remates", "Isolamentos e sistemas de drenagem"],
    limitations: "A mancha interior pode estar afastada do ponto de entrada. O diagnóstico deve observar cobertura, remates, pendentes e drenagem.",
    relatedServices: ["seguros-ruturas-infiltracoes", "pinturas", "capoto-etics"],
  },
  alvenaria: {
    problems: ["Paredes degradadas", "Divisões mal executadas", "Necessidade de novos muros ou compartimentos"],
    benefits: ["Base sólida para acabamentos", "Geometria e nivelamento controlados", "Integração com instalações"],
    materials: ["Blocos ou tijolos adequados", "Argamassas de assentamento e reboco", "Elementos de reforço definidos tecnicamente"],
    limitations: "Demolições e alterações em elementos estruturais não devem avançar sem avaliação e definição por técnico competente.",
    relatedServices: ["construcao", "remodelacao", "pladur"],
  },
  "decks-areas-exteriores": {
    problems: ["Espaços exteriores pouco aproveitados", "Pavimentos degradados", "Drenagem e manutenção difíceis"],
    benefits: ["Área exterior mais funcional", "Materiais adaptados à exposição", "Integração de circulação, lazer e iluminação"],
    materials: ["Madeira tratada ou compósito", "Estruturas e fixações adequadas ao exterior", "Pavimentos, drenagem e iluminação exterior"],
    limitations: "A base, a ventilação, a drenagem e a exposição solar condicionam a escolha e a manutenção dos materiais.",
    relatedServices: ["construcao", "alvenaria", "pinturas"],
  },
  cozinhas: {
    problems: ["Distribuição pouco prática", "Redes incompatíveis com equipamentos atuais", "Materiais degradados pela utilização"],
    benefits: ["Fluxo de trabalho melhorado", "Arrumação planeada", "Redes e equipamentos coordenados"],
    materials: ["Mobiliário e ferragens adequados ao uso", "Tampos em materiais resistentes", "Revestimentos laváveis e compatíveis com água e calor"],
    limitations: "A disposição depende das prumadas, ventilação, potência elétrica, gás quando exista e medidas dos equipamentos.",
    relatedServices: ["canalizacao", "eletricidade", "remodelacao"],
  },
  "casas-de-banho": {
    problems: ["Infiltrações e juntas degradadas", "Canalização antiga", "Espaço pouco funcional ou ventilado"],
    benefits: ["Impermeabilização planeada", "Melhor aproveitamento do espaço", "Redes e equipamentos compatibilizados"],
    materials: ["Sistemas de impermeabilização", "Cerâmica, microcimento ou outros revestimentos adequados", "Loiças, torneiras e selantes"],
    limitations: "Pendentes, impermeabilização, ventilação e ligações de esgoto devem ser resolvidas antes dos acabamentos.",
    relatedServices: ["canalizacao", "microcimento", "eletricidade"],
  },
  "seguros-ruturas-infiltracoes": {
    problems: ["Origem do dano por identificar", "Necessidade de documentar o sinistro", "Reparação estética sem correção da causa"],
    benefits: ["Diagnóstico organizado", "Registo fotográfico dos trabalhos", "Coordenação entre reparação da origem e reposição dos acabamentos"],
    materials: ["Equipamentos de diagnóstico adequados ao caso", "Materiais de reparação compatíveis", "Soluções de secagem e reposição de acabamentos"],
    limitations: "A aprovação, cobertura e indemnização pertencem à seguradora. A Aureon pode apoiar tecnicamente, mas não decide o resultado do processo.",
    relatedServices: ["canalizacao", "telhados-impermeabilizacao", "pinturas"],
  },
};

const calculatorMap = {
  microcimento: "microcimento",
  pinturas: "pintura-interior",
  "capoto-etics": "capoto",
  pladur: "pladur",
  "decks-areas-exteriores": "decks",
  alvenaria: "alvenaria",
  "telhados-impermeabilizacao": "telhados",
  eletricidade: "eletricidade",
  canalizacao: "canalizacao",
  cozinhas: "cozinhas",
  "casas-de-banho": "casas-de-banho",
};

const relatedArticleMap = {
  remodelacao: ["quanto-custa-remodelar-uma-casa-portugal", "etapas-remodelacao-completa"],
  pinturas: ["pintura-interior-preparacao-materiais-custos", "pintura-exterior-reabilitacao-fachadas"],
  eletricidade: ["renovacao-instalacao-eletrica-casa-antiga"],
  canalizacao: ["quando-substituir-canalizacao", "identificar-resolver-infiltracoes"],
  pladur: ["tetos-falsos-divisorias-pladur"],
  microcimento: ["microcimento-ou-ceramica"],
  "capoto-etics": ["capoto-etics-vantagens-limitacoes"],
  "telhados-impermeabilizacao": ["reparar-ou-substituir-telhado", "identificar-resolver-infiltracoes"],
  cozinhas: ["quanto-custa-remodelar-cozinha"],
  "casas-de-banho": ["quanto-custa-remodelar-casa-de-banho"],
};

const serviceVisuals = {
  construcao: {
    image: workImages.construcaoEstrutura.src,
    gallery: [staged(workImages.construcaoEstrutura, "Durante", "Estrutura em betão armado durante obra de construção.")],
    detailSections: [
      {
        title: "Coordenação desde a estrutura",
        content:
          "Numa construção ou ampliação, cada fase condiciona a seguinte. Estrutura, alvenaria, redes técnicas, impermeabilização e acabamentos devem ser compatibilizados para evitar correções tardias.",
      },
      {
        title: "Planeamento e segurança de obra",
        content:
          "Antes de avançar, importa confirmar acessos, sequência das equipas, armazenamento de materiais, zonas de circulação e necessidades de técnicos competentes quando existam trabalhos estruturais.",
      },
      {
        title: "Documentação fotográfica",
        content:
          "Sempre que aplicável, a Aureon valoriza o registo fotográfico do estado inicial, da execução e do resultado final, ajudando a acompanhar decisões e trabalhos realizados.",
      },
    ],
  },
  remodelacao: {
    image: workImages.openSpaceFinal.src,
    gallery: [
      staged(workImages.interiorRemodelado, "Depois", "Interior remodelado com pavimento novo e iluminação embutida."),
      staged(workImages.openSpaceFinal, "Depois", "Sala e cozinha em open space após remodelação."),
      staged(workImages.pladurEmObra, "Durante", "Teto falso em pladur em obra com preparação de superfícies."),
    ],
    detailSections: [
      {
        title: "Uma remodelação junta várias especialidades",
        content:
          "Cozinhas, casas de banho, pladur, eletricidade, canalização, pintura e pavimentos devem ser tratados como partes do mesmo plano. A ordem dos trabalhos evita abrir superfícies já concluídas.",
      },
      {
        title: "Decisões que convém fechar cedo",
        content:
          "Distribuição, pontos de água, tomadas, iluminação, pavimentos, portas, mobiliário e equipamentos influenciam medidas e sequência. Quanto mais cedo forem definidos, menor o risco de alterações em obra.",
      },
      {
        title: "Acabamento e revisão final",
        content:
          "A fase final inclui verificação dos trabalhos contratados, pequenos acertos e confirmação visual com o cliente, dentro do âmbito aprovado.",
      },
    ],
  },
  pinturas: {
    image: workImages.cozinhaPintura.src,
    gallery: [
      staged(workImages.cozinhaPintura, "Durante", "Cozinha durante fase de pintura e proteção dos móveis."),
      staged(workImages.interiorRemodelado, "Depois", "Interior remodelado com pintura branca e iluminação embutida."),
    ],
    detailSections: [
      {
        title: "Preparação antes da tinta",
        content:
          "A qualidade visual da pintura depende da limpeza, proteção, reparação de fissuras, massas, lixagem e primário adequado ao suporte. Pintar sobre manchas ou humidade sem tratar a origem tende a criar problemas.",
      },
      {
        title: "Proteção de móveis e pavimentos",
        content:
          "Em intervenções com o imóvel parcialmente equipado, a proteção das zonas existentes é parte essencial do trabalho para reduzir pó, salpicos e danos nos acabamentos mantidos.",
      },
    ],
  },
  eletricidade: {
    image: workImages.openSpaceFinal.src,
    gallery: [staged(workImages.openSpaceFinal, "Depois", "Open space com iluminação embutida após remodelação.")],
  },
  pladur: {
    image: workImages.pladurEmObra.src,
    gallery: [staged(workImages.pladurEmObra, "Durante", "Teto falso em pladur em obra com preparação de superfícies.")],
  },
  "telhados-impermeabilizacao": {
    image: workImages.telhadoNovo.src,
    gallery: [
      staged(workImages.telhadoNovo, "Depois", "Telhado com telha cerâmica após intervenção."),
      staged(workImages.telhadoJanelaCobertura, "Durante", "Telhado com janela de cobertura durante intervenção exterior."),
      staged(workImages.claraboiaFinal, "Depois", "Claraboia finalizada com acabamento interior pintado."),
    ],
    detailSections: [
      {
        title: "Sinais de problema no telhado",
        content:
          "Manchas em tetos, telhas deslocadas, peças partidas, zonas afundadas, madeira degradada, bolor, humidade persistente e entrada de água com vento são sinais que justificam inspeção.",
      },
      {
        title: "Pontos críticos de entrada de água",
        content:
          "Rufos, caleiras, cumeeiras, chaminés, platibandas, janelas de cobertura, claraboias e encontros com paredes laterais concentram grande parte das infiltrações. A revisão deve observar estes remates, não apenas as telhas visíveis.",
      },
      {
        title: "Reparação ou intervenção mais ampla",
        content:
          "Quando a origem é localizada, pode bastar uma reparação. Se há degradação generalizada, subtelha comprometida ou infiltrações repetidas, convém avaliar uma solução mais abrangente, sempre com orçamento detalhado.",
      },
    ],
  },
  cozinhas: {
    image: workImages.cozinhaFinal.src,
    gallery: [
      staged(workImages.cozinhaAntes, "Antes", "Cozinha antes da remodelação com teto e paredes danificados."),
      staged(workImages.cozinhaDemolicao, "Durante", "Cozinha em fase de demolição e preparação."),
      staged(workImages.cozinhaPintura, "Durante", "Cozinha durante fase de pintura e proteção dos móveis."),
      staged(workImages.cozinhaFinal, "Depois", "Cozinha remodelada com móveis brancos e iluminação embutida."),
    ],
    detailSections: [
      {
        title: "Demolição, preparação e proteção",
        content:
          "A cozinha exige controlo de poeiras, proteção de elementos a manter e preparação cuidada de paredes e tetos antes de receber pintura, mobiliário ou revestimentos.",
      },
      {
        title: "Redes, iluminação e funcionalidade",
        content:
          "Antes dos móveis, devem ser confirmados pontos de água, esgoto, tomadas, circuitos, exaustão e iluminação. Estes elementos determinam a utilização diária e reduzem alterações depois dos acabamentos.",
      },
      {
        title: "Móveis, bancada e acabamento final",
        content:
          "A fase final compatibiliza medidas, equipamentos, ferragens, bancada, selagens e limpeza. Pequenas diferenças de alinhamento tornam-se muito visíveis numa cozinha, por isso a revisão final é essencial.",
      },
    ],
  },
  "casas-de-banho": {
    image: workImages.casaBanhoFinal.src,
    gallery: [
      staged(workImages.casaBanhoDurante, "Durante", "Casa de banho durante aplicação de revestimento cerâmico."),
      staged(workImages.casaBanhoFinal, "Depois", "Casa de banho remodelada com base de duche e resguardo em vidro."),
      staged(workImages.casaBanhoMarmore, "Depois", "Casa de banho finalizada com revestimento tipo mármore, duche e resguardo em vidro."),
    ],
    detailSections: [
      {
        title: "Remoção e canalização",
        content:
          "A primeira fase passa por remover elementos existentes, observar o estado das paredes e confirmar canalização, esgotos, ventilação e pontos elétricos antes de fechar superfícies.",
      },
      {
        title: "Impermeabilização e cerâmica",
        content:
          "Zonas de duche, cantos, passagens de tubagem e ligações ao ralo exigem cuidado especial. O assentamento de cerâmica depende da preparação do suporte, paginação, recortes e tempos de secagem.",
      },
      {
        title: "Base de duche, resguardo e acabamentos",
        content:
          "A instalação de base, resguardo em vidro, sanitários, móvel, espelho, iluminação e selagens deve respeitar medidas e folgas para utilização e manutenção.",
      },
    ],
  },
  "seguros-ruturas-infiltracoes": {
    image: workImages.infiltracaoAntes.src,
    gallery: [
      staged(workImages.infiltracaoAntes, "Antes", "Teto com marcas de infiltração antes da reparação."),
      staged(workImages.infiltracaoDepois, "Depois", "Teto reparado e pintado após intervenção."),
    ],
    detailSections: [
      {
        title: "Diagnóstico antes do acabamento",
        content:
          "Uma mancha no teto pode estar distante da origem. Antes de pintar, importa perceber se a água vem de telhado, terraço, canalização, junta, fachada ou equipamento.",
      },
      {
        title: "Reparar, secar e regularizar",
        content:
          "Depois de corrigir a origem, o suporte deve secar e ser preparado. Só então faz sentido regularizar, aplicar massas e pintar, evitando esconder humidade ainda ativa.",
      },
      {
        title: "Registo fotográfico",
        content:
          "Sempre que aplicável, o registo fotográfico ajuda a documentar o estado inicial, a evolução da reparação e o acabamento final, sobretudo quando existe comunicação técnica com terceiros.",
      },
    ],
  },
};

export const services = serviceBase.map((service) => {
  const profile = technicalProfiles[service.slug];
  const visual = serviceVisuals[service.slug] || {};
  return {
    ...service,
    shortTitle: service.title,
    excerpt: service.short,
    introduction: service.intro,
    problems: profile.problems,
    benefits: profile.benefits,
    process: [
      "Recolha de informação e avaliação do local",
      "Definição do âmbito, materiais e condicionantes",
      "Orçamento detalhado e planeamento das fases",
      "Execução coordenada e verificação dos trabalhos",
      "Revisão final com o cliente",
    ],
    materials: profile.materials,
    limitations: profile.limitations,
    faqs: [
      {
        question: `Como é calculado o orçamento de ${service.title.toLowerCase()}?`,
        answer:
          "O valor depende da área, estado atual, materiais, acessos e complexidade técnica. A calculadora apresenta apenas uma referência; a proposta final exige informação detalhada e, quando necessário, visita.",
      },
      {
        question: "É possível combinar este trabalho com outras especialidades?",
        answer:
          "Sim. A Aureon pode coordenar serviços complementares e organizar a sequência das equipas de acordo com o âmbito aprovado.",
      },
      {
        question: "Quanto tempo demora?",
        answer:
          "O prazo varia com a dimensão, secagens, fornecimentos, acessos e eventuais trabalhos imprevistos. O planeamento é apresentado depois de definido o trabalho.",
      },
    ],
    relatedServices: profile.relatedServices,
    relatedArticles: relatedArticleMap[service.slug] || ["como-comparar-orcamentos-obras"],
    calculatorService: calculatorMap[service.slug] || null,
    image: visual.image || "/hero-aureon.webp",
    gallery: visual.gallery || [],
    detailSections: visual.detailSections || [],
    seoTitle: `${service.title} | Aureon Construção`,
    seoDescription: `${service.headline}. Avaliação e orçamento para trabalhos em Lisboa, Setúbal, Alentejo e Algarve.`,
    status: "published",
    updatedAt: "2026-07-03",
  };
});

export const publishedServices = services.filter((service) => service.status === "published");

export function getService(slug) {
  return publishedServices.find((service) => service.slug === slug);
}
