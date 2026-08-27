export const areaPrices = [
  { id: "microcimento", serviceSlug: "microcimento", label: "Microcimento", minimum: 45, reference: 70, maximum: 110, scope: "sistema aplicado; suporte, preparação, zonas húmidas e acabamento alteram a faixa" },
  { id: "pintura-interior", serviceSlug: "pintura-interior", label: "Pintura interior", minimum: 4, reference: 8, maximum: 18, scope: "paredes em bom estado no mínimo; proteção, reparações, primário e tinta alteram o valor" },
  { id: "pintura-exterior", serviceSlug: "pintura-exterior-fachadas", label: "Pintura exterior", minimum: 6, reference: 12, maximum: 25, scope: "acessos simples no mínimo; preparação, sistema de pintura e meios de acesso a validar" },
  { id: "capoto", serviceSlug: "capoto-etics", label: "Capoto / ETICS", minimum: 55, reference: 77, maximum: 90, scope: "fornecimento e aplicação; espessura, suporte, área, andaimes e remates definem a faixa" },
  { id: "pladur", serviceSlug: "pladur", label: "Pladur", minimum: 18, reference: 32, maximum: 55, scope: "sistema simples no mínimo; isolamento, reforços, placas especiais e pintura podem elevar o valor" },
  { id: "decks", serviceSlug: "decks-areas-exteriores", label: "Decks / exterior", minimum: 25, reference: 55, maximum: 95, scope: "base simples no mínimo; estrutura, material, drenagem e remates definem o valor" },
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
    ["Intervenção simples", "1.500€ - 4.500€"],
    ["Intermédia", "4.500€ - 9.500€"],
    ["Completa", "8.000€ - 18.000€"],
    ["Premium", "18.000€ - 50.000€+"],
  ],
  "casas-de-banho": [
    ["Intervenção simples", "1.200€ - 3.500€"],
    ["Intermédia", "3.500€ - 6.500€"],
    ["Completa", "4.500€ - 9.500€"],
    ["Premium", "9.500€ - 25.000€+"],
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
};
