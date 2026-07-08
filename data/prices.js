export const areaPrices = [
  { id: "microcimento", serviceSlug: "microcimento", label: "Microcimento", standard: 55, premium: 95 },
  { id: "pintura-interior", serviceSlug: "pintura-interior", label: "Pintura interior", standard: 6, premium: 12 },
  { id: "pintura-exterior", serviceSlug: "pintura-exterior-fachadas", label: "Pintura exterior", standard: 8, premium: 18 },
  { id: "capoto", serviceSlug: "capoto-etics", label: "Capoto / ETICS", standard: 30, premium: 60 },
  { id: "pladur", serviceSlug: "pladur", label: "Pladur", standard: 25, premium: 45 },
  { id: "decks", serviceSlug: "decks-areas-exteriores", label: "Decks / exterior", standard: 35, premium: 75 },
  { id: "alvenaria", serviceSlug: "alvenaria", label: "Alvenaria", standard: 20, premium: 45 },
  { id: "telhados", serviceSlug: "telhados-impermeabilizacao", label: "Telhados / impermeabilização", standard: 45, premium: 90 },
  { id: "eletricidade", serviceSlug: "eletricidade", label: "Eletricidade", standard: 10, premium: 20 },
  { id: "canalizacao", serviceSlug: "canalizacao", label: "Canalização", standard: 12, premium: 25 },
];

export const fixedPrices = {
  cozinhas: [
    ["Essencial", "2.000€ - 4.500€"],
    ["Conforto", "4.500€ - 9.500€"],
    ["Completa", "8.000€ - 18.000€"],
    ["Premium", "18.000€ - 45.000€+"],
  ],
  "casas-de-banho": [
    ["Essencial", "1.500€ - 3.500€"],
    ["Conforto", "3.500€ - 6.500€"],
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
