export const site = {
  name: "Aureon Construção",
  legalName: null,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aureon.pt",
  phone: "+351 926 378 947",
  phoneHref: "tel:+351926378947",
  whatsappBase: "https://wa.me/351926378947",
  whatsapp:
    "https://wa.me/351926378947?text=Ol%C3%A1%20Aureon%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento.",
  email: "juseppesena11@gmail.com",
  address: {
    streetAddress: "Rua Ipanema 193, Anexo 2",
    postalCode: "2785-174",
    addressLocality: "São Domingos de Rana",
    addressCountry: "Portugal",
  },
  openingHours: "Segunda-feira a Sábado, 08:00 - 19:00",
  serviceAreaNotice:
    "As regiões apresentadas são áreas de atuação e não representam necessariamente escritórios físicos.",
  pricing: {
    vatIncluded: null,
    disclaimer:
      "Estimativa indicativa, não vinculativa. Não substitui visita técnica. O valor final depende de orçamento detalhado, área, estado do imóvel, acessos, materiais, demolições, resíduos, especialidades, IVA e condições de execução.",
  },
  social: {},
  analytics: {
    googleId: process.env.NEXT_PUBLIC_GA_ID || null,
    googleSiteVerification:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || null,
  },
};

export const legalPages = [
  { href: "/politica-de-privacidade", label: "Política de privacidade" },
  { href: "/termos-e-condicoes", label: "Termos e condições" },
  { href: "/politica-de-cookies", label: "Política de cookies" },
];

export const formattedAddress = `${site.address.streetAddress}, ${site.address.postalCode} ${site.address.addressLocality}, ${site.address.addressCountry}`;
