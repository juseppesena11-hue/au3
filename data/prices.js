export const areaPrices = [
  { id: "microcimento", serviceSlug: "microcimento", label: "Microcimento", standard: 55, premium: 95, scope: "sistema aplicado, sujeito ao suporte e acabamento" },
  { id: "pintura-interior", serviceSlug: "pintura-interior", label: "Pintura interior", standard: 6, premium: 12, scope: "execução corrente; reparações e proteção podem alterar o valor" },
  { id: "pintura-exterior", serviceSlug: "pintura-exterior-fachadas", label: "Pintura exterior", standard: 8, premium: 18, scope: "execução corrente; acessos e preparação não estão fechados" },
  { id: "capoto", serviceSlug: "capoto-etics", label: "Capoto / ETICS", standard: 77, premium: 102, scope: "fornecimento e aplicação em condições de referência; andaimes, remates e reparações a validar" },
  { id: "pladur", serviceSlug: "pladur", label: "Pladur", standard: 25, premium: 45, scope: "sistema corrente; isolamento, reforços e pintura dependem do projeto" },
  { id: "decks", serviceSlug: "decks-areas-exteriores", label: "Decks / exterior", standard: 35, premium: 75, scope: "estrutura e material variam muito; base e drenagem a validar" },
];

export const assessmentServices = [
  { id: "remodelacao", serviceSlug: "remodelacao", label: "Remodelação completa", reason: "O valor depende das divisões, redes, demolições, materiais e trabalhos ocultos." },
  { id: "telhados", serviceSlug: "telhados-impermeabilizacao", label: "Telhado / impermeabilização", reason: "Área, estrutura, acesso, telha, remates e estado existente impedem um preço sério apenas por m²." },
  { id: "eletricidade", serviceSlug: "eletricidade", label: "Eletricidade", reason: "É necessário conhecer circuitos, quadro, potência, pontos e estado da instalação." },
  { id: "canalizacao", serviceSlug: "canalizacao", label: "Canalização", reason: "Traçados, material existente, acessos, pontos e causa do problema alteram totalmente o trabalho." },
  { id: "alvenaria", serviceSlug: "alvenaria", label: "Alvenaria", reason: "Espessura, altura, suporte, estrutura, vãos e acabamentos precisam de ser definidos." },
  { id: "infiltracoes", serviceSlug: "seguros-ruturas-infiltracoes", label: "Infiltrações / ruturas", reason: "Primeiro é necessário localizar a origem e separar a reparação da reposição dos acabamentos." },
];

export const fixedPrices = {
  cozinhas: [
    ["Intervenção simples", "2.000€ - 4.500€"],
    ["Intermédia", "4.500€ - 9.500€"],
    ["Completa", "8.000€ - 18.000€"],
    ["Premium", "18.000€ - 45.000€+"],
  ],
  "casas-de-banho": [
    ["Intervenção simples", "1.500€ - 3.500€"],
    ["Intermédia", "3.500€ - 6.500€"],
    ["Completa", "4.500€ - 9.500€"],
    ["Premium", "9.500€ - 22.000€+"],
  ],
};

export const calculatorOptions = {
  spaces: [
    { id: "interior", label: "Interior", factor: 1 },
    { id: "exterior", label: "Exterior / exposto", factor: 1.1 },
    { id: "zona-humida", label: "Zona húmida", factor: 1.12 },
  ],
  conditions: [
    { id: "bom", label: "Bom, pronto a intervir", factor: 1 },
    { id: "preparacao", label: "Precisa de preparação", factor: 1.18 },
    { id: "degradado", label: "Degradado / diagnóstico necessário", factor: 1.35 },
  ],
  finishes: [
    { id: "standard", label: "Standard" },
    { id: "premium", label: "Premium" },
  ],
};
