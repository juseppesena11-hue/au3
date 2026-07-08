const sharedFaqs = [
  {
    question: "A Aureon tem escritório nesta região?",
    answer:
      "A página identifica uma área de atuação. Não indica, por si só, a existência de um escritório físico no local.",
  },
  {
    question: "Como é preparado o orçamento?",
    answer:
      "Começamos por recolher informação sobre o imóvel e o trabalho pretendido. Quando necessário, a proposta final é preparada depois de visita técnica, medições e validação de acessos e materiais.",
  },
  {
    question: "É possível coordenar várias especialidades na mesma obra?",
    answer:
      "Sim. A Aureon pode articular diferentes equipas e fases, de acordo com o âmbito definido para o projeto.",
  },
];

export const regions = [
  {
    slug: "lisboa",
    name: "Lisboa",
    type: "Área de atuação",
    parentRegion: "Área Metropolitana de Lisboa",
    lead: "Obras e remodelações em Lisboa com coordenação das várias especialidades.",
    introduction:
      "A Aureon acompanha remodelações integrais, renovações de apartamentos, intervenções técnicas e trabalhos de acabamento na área de Lisboa. O planeamento considera a utilização do imóvel, os acessos e a compatibilização entre equipas.",
    localContext:
      "Em zonas urbanas, a preparação da obra deve considerar horários, proteção de áreas comuns, transporte de materiais, remoção de resíduos e eventuais regras de condomínio. Estes aspetos são confirmados caso a caso.",
    commonProjects: [
      "Remodelação de apartamentos e moradias",
      "Renovação de cozinhas e casas de banho",
      "Atualização de eletricidade e canalização",
      "Pintura, pladur e microcimento",
    ],
    services: ["remodelacao", "cozinhas", "casas-de-banho", "eletricidade", "canalizacao", "pinturas"],
    municipalities: ["Lisboa", "Cascais", "Oeiras", "Sintra", "Amadora", "Loures", "Odivelas"],
    nearbyRegions: ["setubal"],
    faqs: sharedFaqs,
    seoTitle: "Obras e Remodelações em Lisboa",
    seoDescription:
      "Construção, remodelação e serviços técnicos na área de Lisboa. Coordenação de especialidades e orçamento após avaliação.",
    status: "published",
    updatedAt: "2026-07-03",
  },
  {
    slug: "setubal",
    name: "Setúbal",
    type: "Área de atuação",
    parentRegion: "Península de Setúbal",
    lead: "Remodelações, reparações e construção na área de Setúbal.",
    introduction:
      "A Aureon presta serviços em imóveis habitacionais e espaços de atividade económica na região de Setúbal, coordenando trabalhos gerais e especialidades técnicas conforme as necessidades de cada intervenção.",
    localContext:
      "A logística varia entre centros urbanos, zonas residenciais e locais com acessos mais amplos. Antes da proposta, são avaliadas condições de carga e descarga, proteção do imóvel e sequência das equipas.",
    commonProjects: [
      "Reabilitação de interiores e fachadas",
      "Reparação de telhados e infiltrações",
      "Pintura interior e exterior",
      "Remodelação de cozinhas e casas de banho",
    ],
    services: ["remodelacao", "telhados-impermeabilizacao", "pinturas", "capoto-etics", "cozinhas", "casas-de-banho"],
    municipalities: ["Setúbal", "Almada", "Seixal", "Sesimbra", "Barreiro", "Montijo", "Palmela"],
    nearbyRegions: ["lisboa", "alentejo"],
    faqs: sharedFaqs,
    seoTitle: "Construção e Remodelações em Setúbal",
    seoDescription:
      "Remodelações, pintura, telhados, impermeabilização e serviços técnicos na área de Setúbal.",
    status: "published",
    updatedAt: "2026-07-03",
  },
  {
    slug: "algarve",
    name: "Algarve",
    type: "Área de atuação",
    parentRegion: "Algarve",
    lead: "Construção, remodelação e manutenção de imóveis no Algarve.",
    introduction:
      "A Aureon acompanha intervenções em moradias, apartamentos e espaços comerciais no Algarve, desde renovação interior a fachadas, coberturas e áreas exteriores.",
    localContext:
      "A exposição solar, proximidade do mar em algumas zonas, períodos de utilização sazonal e disponibilidade do imóvel podem influenciar materiais, planeamento e manutenção. A solução é definida após avaliação do local.",
    commonProjects: [
      "Remodelação de moradias e apartamentos",
      "Impermeabilização e manutenção de coberturas",
      "Decks, terraços e áreas exteriores",
      "Pintura e proteção de fachadas",
    ],
    services: ["remodelacao", "construcao", "telhados-impermeabilizacao", "decks-areas-exteriores", "pinturas", "microcimento"],
    municipalities: ["Faro", "Loulé", "Albufeira", "Portimão", "Lagos", "Tavira", "Silves", "Lagoa"],
    nearbyRegions: ["alentejo"],
    faqs: sharedFaqs,
    seoTitle: "Construção e Remodelações no Algarve",
    seoDescription:
      "Remodelações, construção, impermeabilização, pintura e exteriores na área do Algarve.",
    status: "published",
    updatedAt: "2026-07-03",
  },
  {
    slug: "alentejo",
    name: "Alentejo",
    type: "Área de atuação",
    parentRegion: "Alentejo",
    lead: "Obras, reabilitação e especialidades técnicas no Alentejo.",
    introduction:
      "A Aureon avalia projetos de construção, reabilitação e manutenção no Alentejo. A área concreta de deslocação é confirmada antes do agendamento, porque a região é extensa e cada obra exige logística própria.",
    localContext:
      "Intervenções em imóveis dispersos ou edifícios mais antigos podem exigir levantamento cuidado, planeamento de fornecimentos e compatibilização de soluções novas com elementos existentes.",
    commonProjects: [
      "Reabilitação de imóveis",
      "Isolamento térmico de fachadas",
      "Coberturas e impermeabilização",
      "Construção e alvenaria",
    ],
    services: ["construcao", "remodelacao", "capoto-etics", "telhados-impermeabilizacao", "alvenaria", "pinturas"],
    municipalities: [],
    nearbyRegions: ["setubal", "algarve"],
    faqs: sharedFaqs,
    seoTitle: "Obras e Remodelações no Alentejo",
    seoDescription:
      "Construção, reabilitação, isolamento e serviços técnicos em áreas confirmadas do Alentejo.",
    status: "published",
    updatedAt: "2026-07-03",
  },
];

export const municipalityPages = [
  ...["Lisboa", "Cascais", "Oeiras", "Sintra", "Amadora", "Loures", "Odivelas"].map((name) => ({ name, region: "lisboa", status: "draft" })),
  ...["Setúbal", "Almada", "Seixal", "Sesimbra", "Barreiro", "Montijo", "Palmela"].map((name) => ({ name, region: "setubal", status: "draft" })),
  ...["Faro", "Loulé", "Albufeira", "Portimão", "Lagos", "Tavira", "Silves", "Lagoa"].map((name) => ({ name, region: "algarve", status: "draft" })),
];

export const publishedRegions = regions.filter((region) => region.status === "published");

export function getRegion(slug) {
  return publishedRegions.find((region) => region.slug === slug);
}
