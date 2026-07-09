import { staged, workImages } from "./images.js";

const realProjects = [
  {
    slug: "reparacao-telhado-telha-ceramica",
    title: "Reparação de telhado com telha cerâmica",
    location: null,
    category: "Telhados e impermeabilização",
    summary:
      "Intervenção em cobertura com telha cerâmica, incluindo revisão da zona exterior, acabamento e melhoria da proteção contra infiltrações.",
    challenge:
      "A cobertura exigia revisão técnica dos pontos expostos, remates e zonas suscetíveis a entrada de água, sem publicação de localização ou dados do cliente.",
    solution:
      "Foi executada uma intervenção de cobertura com telha cerâmica, revisão exterior e atenção aos encontros críticos da cobertura.",
    workPerformed: ["Revisão de cobertura", "Intervenção em telha cerâmica", "Atenção a remates e proteção contra infiltrações"],
    materials: [],
    duration: null,
    year: null,
    coverImage: workImages.telhadoNovo.src,
    coverAlt: workImages.telhadoNovo.alt,
    gallery: [
      staged(workImages.telhadoNovo, "Depois", "Telhado com telha cerâmica após intervenção."),
      staged(workImages.telhadoJanelaCobertura, "Durante", "Cobertura com janela de telhado durante intervenção exterior."),
      staged(workImages.claraboiaFinal, "Depois", "Claraboia finalizada vista pelo interior."),
    ],
    relatedServices: ["telhados-impermeabilizacao", "reparacao-infiltracoes", "construcao"],
    seoTitle: "Reparação de telhado com telha cerâmica | Aureon Construção",
    seoDescription: "Projeto real de intervenção em cobertura com telha cerâmica, revisão exterior e melhoria da proteção contra infiltrações.",
    isReal: true,
    status: "published",
    updatedAt: "2026-07-08",
    tone: "roof",
  },
  {
    slug: "claraboia-acabamento-interior",
    title: "Claraboia com acabamento interior",
    location: null,
    category: "Telhados, acabamentos interiores e impermeabilização",
    summary:
      "Trabalho de abertura e acabamento interior de claraboia, com regularização, pintura e acabamento final.",
    challenge:
      "A abertura exigia regularização e acabamento interior cuidado para integrar a claraboia no teto existente.",
    solution:
      "A zona foi preparada, regularizada e finalizada com acabamento interior pintado.",
    workPerformed: ["Abertura e preparação", "Regularização interior", "Pintura e acabamento final"],
    materials: [],
    duration: null,
    year: null,
    coverImage: workImages.claraboiaFinal.src,
    coverAlt: workImages.claraboiaFinal.alt,
    gallery: [
      staged(workImages.claraboiaDurante, "Durante", "Claraboia em fase de instalação e acabamento."),
      staged(workImages.claraboiaFinal, "Depois", "Claraboia finalizada com acabamento interior pintado."),
    ],
    relatedServices: ["telhados-impermeabilizacao", "pladur", "pinturas"],
    seoTitle: "Claraboia com acabamento interior | Aureon Construção",
    seoDescription: "Projeto real de claraboia com abertura, regularização, pintura e acabamento interior.",
    isReal: true,
    status: "published",
    updatedAt: "2026-07-08",
    tone: "light",
  },
  {
    slug: "reparacao-infiltracao-teto",
    title: "Reparação de infiltração em teto",
    location: null,
    category: "Infiltrações e reparações",
    summary:
      "Reparação de zona afetada por infiltração, com regularização da superfície, tratamento e acabamento final.",
    challenge:
      "A superfície apresentava marcas de infiltração e zonas degradadas que exigiam tratamento antes da reposição do acabamento.",
    solution:
      "Foi feita a regularização da zona afetada e a reposição do acabamento pintado após a intervenção.",
    workPerformed: ["Registo do estado inicial", "Regularização do suporte", "Reposição de acabamento pintado"],
    materials: [],
    duration: null,
    year: null,
    coverImage: workImages.infiltracaoDepois.src,
    coverAlt: workImages.infiltracaoDepois.alt,
    gallery: [
      staged(workImages.infiltracaoAntes, "Antes", "Teto com marcas de infiltração antes da reparação."),
      staged(workImages.infiltracaoDepois, "Depois", "Teto reparado e pintado após intervenção."),
    ],
    relatedServices: ["seguros-ruturas-infiltracoes", "pinturas", "canalizacao"],
    seoTitle: "Reparação de infiltração em teto | Aureon Construção",
    seoDescription: "Projeto real de reparação de teto afetado por infiltração, com tratamento e acabamento final.",
    isReal: true,
    status: "published",
    updatedAt: "2026-07-08",
    tone: "slate",
  },
  {
    slug: "remodelacao-casa-banho-revestimento-duche",
    title: "Remodelação de casa de banho com revestimento e base de duche",
    location: null,
    category: "Casas de banho",
    summary:
      "Remodelação de casa de banho com aplicação de revestimento cerâmico, zona de duche, resguardo em vidro e acabamentos finais.",
    challenge:
      "A intervenção exigia preparação das superfícies, aplicação de revestimento e integração da zona de duche.",
    solution:
      "A casa de banho foi remodelada com revestimento cerâmico, base de duche, resguardo em vidro e acabamento final.",
    workPerformed: ["Aplicação de revestimento cerâmico", "Preparação da zona de duche", "Acabamentos finais"],
    materials: [],
    duration: null,
    year: null,
    coverImage: workImages.casaBanhoFinal.src,
    coverAlt: workImages.casaBanhoFinal.alt,
    gallery: [
      staged(workImages.casaBanhoDurante, "Durante", "Casa de banho durante aplicação de revestimento cerâmico."),
      staged(workImages.casaBanhoFinal, "Depois", "Casa de banho remodelada com base de duche e resguardo em vidro."),
    ],
    relatedServices: ["casas-de-banho", "canalizacao", "remodelacao"],
    seoTitle: "Remodelação de casa de banho com duche | Aureon Construção",
    seoDescription: "Projeto real de casa de banho com revestimento cerâmico, base de duche, resguardo em vidro e acabamentos.",
    isReal: true,
    status: "published",
    updatedAt: "2026-07-08",
    tone: "light",
  },
  {
    slug: "estrutura-betao-construcao",
    title: "Obra estrutural em betão",
    location: null,
    category: "Construção",
    summary:
      "Registo de obra em fase estrutural, com execução de elementos em betão e organização de zona de obra.",
    challenge:
      "A fase estrutural exige organização de obra, leitura técnica e coordenação com as etapas seguintes.",
    solution:
      "O registo mostra a execução de elementos em betão e a preparação da estrutura para fases posteriores.",
    workPerformed: ["Execução de elementos estruturais", "Organização da zona de obra", "Preparação para fases seguintes"],
    materials: [],
    duration: null,
    year: null,
    coverImage: workImages.construcaoEstrutura.src,
    coverAlt: workImages.construcaoEstrutura.alt,
    gallery: [staged(workImages.construcaoEstrutura, "Durante", "Estrutura em betão armado durante obra de construção.")],
    relatedServices: ["construcao", "remodelacao", "alvenaria"],
    seoTitle: "Obra estrutural em betão | Aureon Construção",
    seoDescription: "Registo real de obra em fase estrutural, com elementos em betão e organização de zona de obra.",
    isReal: true,
    status: "published",
    updatedAt: "2026-07-08",
    tone: "warm",
  },
  {
    slug: "remodelacao-cozinha-pintura-acabamentos",
    title: "Remodelação de cozinha com pintura, iluminação e acabamentos",
    location: null,
    category: "Cozinhas / Remodelações",
    summary:
      "Remodelação de cozinha com preparação de superfícies, pintura, revisão de acabamentos, iluminação e melhoria geral do espaço.",
    challenge:
      "A cozinha apresentava teto e paredes danificados, exigindo demolição/preparação, proteção e sequência organizada de acabamentos.",
    solution:
      "A intervenção integrou preparação, pintura, iluminação embutida, mobiliário e acabamentos para melhorar a utilização do espaço.",
    workPerformed: ["Preparação e demolição localizada", "Proteção de mobiliário", "Pintura e acabamentos", "Iluminação embutida"],
    materials: [],
    duration: null,
    year: null,
    coverImage: workImages.cozinhaFinal.src,
    coverAlt: workImages.cozinhaFinal.alt,
    gallery: [
      staged(workImages.cozinhaAntes, "Antes", "Cozinha antes da remodelação com teto e paredes danificados."),
      staged(workImages.cozinhaDemolicao, "Durante", "Cozinha em fase de demolição e preparação."),
      staged(workImages.cozinhaPintura, "Durante", "Cozinha durante fase de pintura e proteção dos móveis."),
      staged(workImages.cozinhaFinal, "Depois", "Cozinha remodelada com móveis brancos e iluminação embutida."),
    ],
    relatedServices: ["cozinhas", "remodelacao", "pinturas"],
    seoTitle: "Remodelação de cozinha com pintura e acabamentos | Aureon Construção",
    seoDescription: "Projeto real de cozinha com fases antes, durante e depois, incluindo preparação, pintura, iluminação e acabamentos.",
    isReal: true,
    status: "published",
    updatedAt: "2026-07-08",
    tone: "dark",
  },
  {
    slug: "remodelacao-interior-pavimento-iluminacao",
    title: "Remodelação interior com pavimento, pintura e iluminação",
    location: null,
    category: "Remodelações interiores",
    summary:
      "Intervenção interior com preparação de paredes e tetos, pintura, pavimento, iluminação embutida e acabamentos gerais.",
    challenge:
      "A intervenção exigia coordenação entre pladur, preparação de superfícies, pavimento, pintura e iluminação.",
    solution:
      "Foram organizadas as fases de preparação e acabamento, resultando em interiores renovados com iluminação embutida.",
    workPerformed: ["Preparação de paredes e tetos", "Teto falso/pladur", "Pintura", "Pavimento e iluminação"],
    materials: [],
    duration: null,
    year: null,
    coverImage: workImages.interiorRemodelado.src,
    coverAlt: workImages.interiorRemodelado.alt,
    gallery: [
      staged(workImages.pladurEmObra, "Durante", "Teto falso em pladur em obra com preparação de superfícies."),
      staged(workImages.interiorRemodelado, "Depois", "Interior remodelado com pavimento novo e iluminação embutida."),
      staged(workImages.corredorRemodelado, "Depois", "Corredor interior finalizado com pintura, pavimento e iluminação embutida."),
      staged(workImages.openSpaceFinal, "Depois", "Sala e cozinha em open space após remodelação."),
    ],
    relatedServices: ["remodelacao", "pinturas", "pladur"],
    seoTitle: "Remodelação interior com pavimento e iluminação | Aureon Construção",
    seoDescription: "Projeto real de remodelação interior com pladur, pintura, pavimento, iluminação embutida e acabamentos.",
    isReal: true,
    status: "published",
    updatedAt: "2026-07-08",
    tone: "slate",
  },
  {
    slug: "casa-banho-revestimento-marmore-duche-vidro",
    title: "Casa de banho com revestimento tipo mármore e resguardo em vidro",
    location: null,
    category: "Casas de banho",
    summary:
      "Remodelação de casa de banho com revestimento cerâmico de grande impacto visual, base de duche, resguardo em vidro, sanitários, móvel e iluminação.",
    challenge:
      "A intervenção exigia acabamento cuidado numa zona húmida, com integração de duche, vidro, sanitários e iluminação.",
    solution:
      "O espaço foi finalizado com revestimento tipo mármore, base de duche, resguardo em vidro, mobiliário e iluminação.",
    workPerformed: ["Revestimento de paredes e pavimento", "Base de duche", "Resguardo em vidro", "Mobiliário e iluminação"],
    materials: [],
    duration: null,
    year: null,
    coverImage: workImages.casaBanhoMarmore.src,
    coverAlt: workImages.casaBanhoMarmore.alt,
    gallery: [staged(workImages.casaBanhoMarmore, "Depois", "Casa de banho finalizada com revestimento tipo mármore, duche e resguardo em vidro.")],
    relatedServices: ["casas-de-banho", "canalizacao", "eletricidade"],
    seoTitle: "Casa de banho com revestimento tipo mármore | Aureon Construção",
    seoDescription: "Projeto real de casa de banho com revestimento tipo mármore, base de duche, resguardo em vidro e iluminação.",
    isReal: true,
    status: "published",
    updatedAt: "2026-07-08",
    tone: "light",
  },
  {
    slug: "open-space-cozinha-sala-iluminacao",
    title: "Open space com cozinha, zona de estar e iluminação embutida",
    location: null,
    category: "Remodelação completa",
    summary:
      "Remodelação de zona interior em conceito open space, com integração de cozinha, zona de estar, iluminação embutida, pavimento claro e acabamentos modernos.",
    challenge:
      "A zona interior exigia integração funcional entre cozinha, estar, iluminação e acabamentos.",
    solution:
      "O espaço foi concluído em conceito open space, com cozinha integrada, zona de estar e iluminação embutida.",
    workPerformed: ["Integração de cozinha e sala", "Iluminação embutida", "Acabamentos interiores", "Pavimento claro"],
    materials: [],
    duration: null,
    year: null,
    coverImage: workImages.openSpaceFinal.src,
    coverAlt: workImages.openSpaceFinal.alt,
    gallery: [staged(workImages.openSpaceFinal, "Depois", "Sala e cozinha em open space após remodelação.")],
    relatedServices: ["remodelacao", "cozinhas", "eletricidade"],
    seoTitle: "Open space com cozinha e sala | Aureon Construção",
    seoDescription: "Projeto real de open space com cozinha, zona de estar, iluminação embutida, pavimento claro e acabamentos.",
    isReal: true,
    status: "published",
    updatedAt: "2026-07-08",
    tone: "dark",
  },
];

const projectEnhancements = {
  "reparacao-telhado-telha-ceramica": {
    technicalPoints: [
      "Observação de zonas expostas da cobertura",
      "Atenção a remates e encontros onde a água pode entrar",
      "Registo fotográfico sem identificação de cliente ou localização",
    ],
    result:
      "A cobertura ficou apresentada com telha cerâmica revista e acabamento exterior documentado nas fotografias disponíveis.",
  },
  "claraboia-acabamento-interior": {
    technicalPoints: [
      "Integração da claraboia no teto existente",
      "Regularização do vão e preparação do suporte",
      "Acabamento interior pintado",
    ],
    result:
      "A claraboia ficou integrada no interior, com remate visual limpo e zona envolvente regularizada.",
  },
  "reparacao-infiltracao-teto": {
    technicalPoints: [
      "Registo do estado inicial antes da reposição",
      "Preparação e regularização da superfície afetada",
      "Acabamento pintado após intervenção",
    ],
    result:
      "A zona visível do teto foi reposta e pintada, mantendo no portfólio o registo antes/depois da intervenção.",
  },
  "remodelacao-casa-banho-revestimento-duche": {
    technicalPoints: [
      "Preparação de suporte para revestimento",
      "Execução da zona de duche",
      "Integração de resguardo em vidro e acabamentos",
    ],
    result:
      "A casa de banho apresenta zona de duche concluída, revestimento aplicado e acabamento final documentado.",
  },
  "estrutura-betao-construcao": {
    technicalPoints: [
      "Organização de fase estrutural",
      "Execução de elementos em betão",
      "Preparação para fases posteriores da obra",
    ],
    result:
      "O registo documenta a fase de estrutura, sem publicar dados de localização, cliente, prazo ou área.",
  },
  "remodelacao-cozinha-pintura-acabamentos": {
    technicalPoints: [
      "Demolição/preparação localizada",
      "Proteção de elementos existentes",
      "Pintura, iluminação embutida e acabamento final",
    ],
    result:
      "A cozinha ficou renovada com superfícies tratadas, iluminação integrada e mobiliário finalizado.",
  },
  "remodelacao-interior-pavimento-iluminacao": {
    technicalPoints: [
      "Coordenação entre pladur, pavimento, pintura e iluminação",
      "Preparação de paredes e tetos",
      "Revisão de acabamentos interiores",
    ],
    result:
      "O interior ficou visualmente unificado, com pavimento claro, pintura e iluminação embutida documentados.",
  },
  "casa-banho-revestimento-marmore-duche-vidro": {
    technicalPoints: [
      "Revestimento de grande impacto visual",
      "Integração de duche e resguardo em vidro",
      "Compatibilização de loiças, móvel e iluminação",
    ],
    result:
      "A casa de banho ficou concluída com revestimento tipo mármore, duche, vidro e acabamento final.",
  },
  "open-space-cozinha-sala-iluminacao": {
    technicalPoints: [
      "Integração visual entre cozinha e sala",
      "Iluminação embutida e pavimento claro",
      "Acabamentos interiores coordenados",
    ],
    result:
      "O espaço ficou organizado em open space, com cozinha integrada, zona de estar e leitura visual contínua.",
  },
};

// Estes registos representam tipos de trabalho e não obras reais confirmadas.
// Para publicar um novo caso de estudo: preencher os campos, usar fotografias próprias,
// definir isReal: true e status: "published".
const draftProjects = [
  {
    slug: "modelo-remodelacao-moradia",
    title: "Remodelação completa de moradia",
    location: null,
    category: "Remodelação",
    summary: "Exemplo de âmbito: interiores, redes técnicas, cozinha, casas de banho e acabamentos.",
    challenge: null,
    solution: null,
    workPerformed: [],
    materials: [],
    duration: null,
    year: null,
    coverImage: "/hero-aureon.webp",
    gallery: [],
    relatedServices: ["remodelacao", "cozinhas", "casas-de-banho"],
    seoTitle: null,
    seoDescription: null,
    isReal: false,
    status: "draft",
    tone: "warm",
  },
  {
    slug: "modelo-casa-banho-microcimento",
    title: "Casa de banho em microcimento",
    location: null,
    category: "Microcimento",
    summary: "Exemplo de âmbito: preparação, impermeabilização e acabamento contínuo.",
    challenge: null,
    solution: null,
    workPerformed: [],
    materials: [],
    duration: null,
    year: null,
    coverImage: "/hero-aureon.webp",
    gallery: [],
    relatedServices: ["microcimento", "casas-de-banho"],
    seoTitle: null,
    seoDescription: null,
    isReal: false,
    status: "draft",
    tone: "slate",
  },
  {
    slug: "modelo-telhado-impermeabilizacao",
    title: "Reparação de telhado e impermeabilização",
    location: null,
    category: "Coberturas",
    summary: "Exemplo de âmbito: inspeção, substituição de elementos e correção de remates.",
    challenge: null,
    solution: null,
    workPerformed: [],
    materials: [],
    duration: null,
    year: null,
    coverImage: "/hero-aureon.webp",
    gallery: [],
    relatedServices: ["telhados-impermeabilizacao"],
    seoTitle: null,
    seoDescription: null,
    isReal: false,
    status: "draft",
    tone: "roof",
  },
  {
    slug: "modelo-isolamento-etics",
    title: "Isolamento térmico ETICS",
    location: null,
    category: "Capoto / ETICS",
    summary: "Exemplo de âmbito: preparação de fachada, isolamento e acabamento exterior.",
    challenge: null,
    solution: null,
    workPerformed: [],
    materials: [],
    duration: null,
    year: null,
    coverImage: "/hero-aureon.webp",
    gallery: [],
    relatedServices: ["capoto-etics", "pinturas"],
    seoTitle: null,
    seoDescription: null,
    isReal: false,
    status: "draft",
    tone: "light",
  },
  {
    slug: "modelo-remodelacao-cozinha",
    title: "Remodelação de cozinha",
    location: null,
    category: "Cozinhas",
    summary: "Exemplo de âmbito: nova disposição, redes, mobiliário, iluminação e revestimentos.",
    challenge: null,
    solution: null,
    workPerformed: [],
    materials: [],
    duration: null,
    year: null,
    coverImage: "/hero-aureon.webp",
    gallery: [],
    relatedServices: ["cozinhas", "eletricidade", "canalizacao"],
    seoTitle: null,
    seoDescription: null,
    isReal: false,
    status: "draft",
    tone: "dark",
  },
  {
    slug: "modelo-deck-exterior",
    title: "Deck e área exterior",
    location: null,
    category: "Exteriores",
    summary: "Exemplo de âmbito: preparação da base, drenagem, estrutura e acabamento.",
    challenge: null,
    solution: null,
    workPerformed: [],
    materials: [],
    duration: null,
    year: null,
    coverImage: "/hero-aureon.webp",
    gallery: [],
    relatedServices: ["decks-areas-exteriores"],
    seoTitle: null,
    seoDescription: null,
    isReal: false,
    status: "draft",
    tone: "green",
  },
];

const enhancedRealProjects = realProjects.map((project) => ({
  ...project,
  ...(projectEnhancements[project.slug] || {}),
}));

export const projects = [...enhancedRealProjects, ...draftProjects];

export const publishedProjects = projects.filter(
  (project) => project.status === "published" && project.isReal
);

export function getProject(slug) {
  return publishedProjects.find((project) => project.slug === slug);
}
