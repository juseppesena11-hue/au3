const obraBase = "/imagens/obras";

export const workImages = {
  construcaoEstrutura: {
    src: `${obraBase}/construcao-estrutura-betao-aureon.webp`,
    alt: "Estrutura em betão armado durante obra de construção",
    width: 1350,
    height: 1800,
  },
  telhadoNovo: {
    src: `${obraBase}/telhado-novo-telha-ceramica-aureon.webp`,
    alt: "Telhado com telha cerâmica após intervenção",
    width: 1280,
    height: 980,
  },
  telhadoJanelaCobertura: {
    src: `${obraBase}/telhado-com-janela-cobertura-aureon.webp`,
    alt: "Telhado com janela de cobertura durante intervenção exterior",
    width: 1599,
    height: 899,
  },
  claraboiaDurante: {
    src: `${obraBase}/claraboia-instalacao-acabamento-aureon.webp`,
    alt: "Claraboia em fase de instalação e acabamento interior",
    width: 1152,
    height: 1536,
  },
  claraboiaFinal: {
    src: `${obraBase}/claraboia-finalizada-aureon.webp`,
    alt: "Claraboia finalizada com acabamento interior pintado",
    width: 1152,
    height: 1536,
  },
  infiltracaoAntes: {
    src: `${obraBase}/reparacao-infiltracao-teto-antes-aureon.webp`,
    alt: "Teto com marcas de infiltração antes da reparação",
    width: 1350,
    height: 1800,
  },
  infiltracaoDepois: {
    src: `${obraBase}/reparacao-infiltracao-teto-depois-aureon.webp`,
    alt: "Teto reparado e pintado após intervenção",
    width: 1152,
    height: 1536,
  },
  casaBanhoDurante: {
    src: `${obraBase}/remodelacao-casa-banho-durante-aureon.webp`,
    alt: "Casa de banho durante aplicação de revestimento cerâmico",
    width: 1152,
    height: 1536,
  },
  casaBanhoFinal: {
    src: `${obraBase}/remodelacao-casa-banho-final-aureon.webp`,
    alt: "Casa de banho remodelada com base de duche e resguardo em vidro",
    width: 1152,
    height: 1536,
  },
  cozinhaAntes: {
    src: `${obraBase}/cozinha-antes-remodelacao-aureon.webp`,
    alt: "Cozinha antes da remodelação com teto e paredes danificados",
    width: 1350,
    height: 1800,
  },
  cozinhaDemolicao: {
    src: `${obraBase}/cozinha-demolicao-preparacao-aureon.webp`,
    alt: "Cozinha em fase de demolição e preparação",
    width: 1350,
    height: 1800,
  },
  cozinhaPintura: {
    src: `${obraBase}/cozinha-pintura-preparacao-aureon.webp`,
    alt: "Cozinha durante fase de pintura e proteção dos móveis",
    width: 1152,
    height: 1536,
  },
  cozinhaFinal: {
    src: `${obraBase}/cozinha-finalizada-remodelacao-aureon.webp`,
    alt: "Cozinha remodelada com móveis brancos e iluminação embutida",
    width: 1152,
    height: 1536,
  },
  interiorRemodelado: {
    src: `${obraBase}/interior-remodelado-pavimento-iluminacao-aureon.webp`,
    alt: "Interior remodelado com pavimento novo e iluminação embutida",
    width: 1350,
    height: 1800,
  },
  casaBanhoMarmore: {
    src: `${obraBase}/casa-banho-marmore-duche-vidro-aureon.webp`,
    alt: "Casa de banho finalizada com revestimento tipo mármore, duche e resguardo em vidro",
    width: 1152,
    height: 1536,
  },
  corredorRemodelado: {
    src: `${obraBase}/corredor-remodelado-pintura-pavimento-aureon.webp`,
    alt: "Corredor interior finalizado com pintura, pavimento e iluminação embutida",
    width: 1152,
    height: 1536,
  },
  pladurEmObra: {
    src: `${obraBase}/teto-falso-pladur-em-obra-aureon.webp`,
    alt: "Teto falso em pladur em obra com preparação de superfícies",
    width: 1416,
    height: 1152,
  },
  openSpaceFinal: {
    src: `${obraBase}/sala-cozinha-open-space-finalizada-aureon.webp`,
    alt: "Sala e cozinha em open space após remodelação",
    width: 1152,
    height: 1536,
  },
};

export function staged(image, stage, caption) {
  return { ...image, stage, caption };
}
