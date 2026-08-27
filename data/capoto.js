const commonLinks = [
  { href: "/servicos/capoto-etics", label: "Serviço de Capoto / ETICS" },
  { href: "/capoto/preco-por-m2", label: "Preço de Capoto por m²" },
  { href: "/capoto/eps-vs-xps-vs-la-mineral", label: "EPS, XPS ou lã mineral" },
  { href: "/capoto/reparacao", label: "Reparação de Capoto" },
];

const page = (data) => ({
  updatedAt: "2026-08-27",
  links: commonLinks,
  ...data,
});

export const capotoPages = [
  page({
    slug: "preco-por-m2",
    title: "Preço de Capoto por m²",
    eyebrow: "Custos e orçamento",
    description: "Perceba o que influencia o preço de Capoto / ETICS por m² e por que área, espessura, andaimes e remates mudam a proposta.",
    intro: "Uma referência por m² ajuda a enquadrar o investimento, mas não substitui a leitura da fachada. A calculadora da Aureon apresenta uma faixa indicativa entre 55 €/m² e 90 €/m², com 77 €/m² como referência média de fornecimento e aplicação em condições correntes.",
    facts: ["Faixa mínima: 55 €/m²", "Referência média: 77 €/m²", "Faixa máxima: 90 €/m²"],
    sections: [
      ["O que mais altera o preço", "A dimensão e geometria da fachada, o estado do reboco, a espessura e o tipo de isolamento, os andaimes, o número de vãos, peitoris, tubos, caixas de estore, varandas e coroamentos determinam tempo, material e risco de execução."],
      ["Preço bruto ou área líquida", "A forma de medição deve ficar escrita. Em trabalhos de grande dimensão pode usar-se superfície bruta sem descontar vãos, porque cada janela acrescenta recortes e remates. Se a medição for líquida, os perímetros podem precisar de preço próprio."],
      ["O que confirmar na proposta", "Verifique sistema, isolamento e espessura, preparação, colagem e fixação, rede, perfis, acabamento, andaimes, proteção, resíduos, remates, IVA e exclusões. Dois preços só são comparáveis quando o âmbito é o mesmo."],
    ],
    faqs: [
      ["Os 55 €, 77 € ou 90 € são preços fechados?", "Não. São referências para condições diferentes. O valor final depende da medição, do suporte, acessos, sistema, espessura, remates e trabalhos complementares."],
      ["Os andaimes estão sempre incluídos?", "Não devem ser presumidos. A inclusão, tipo, licenças e tempo de utilização têm de constar da proposta."],
    ],
  }),
  page({
    slug: "eps-vs-xps-vs-la-mineral",
    title: "EPS, XPS ou lã mineral no Capoto?",
    eyebrow: "Materiais ETICS",
    description: "Comparação prática entre EPS, XPS e lã mineral em sistemas ETICS: utilização, humidade, reação ao fogo, espessura e custo.",
    intro: "Não existe uma placa universalmente melhor. O material deve pertencer a um sistema compatível e ser escolhido para o edifício, exposição, suporte, reação ao fogo, desempenho pretendido e detalhe onde será aplicado.",
    facts: ["EPS: solução corrente e leve", "XPS: uso localizado quando previsto", "Lã mineral: permeabilidade e reação ao fogo diferenciadas"],
    sections: [
      ["EPS e EPS grafite", "São soluções frequentes por combinarem desempenho, peso e custo. O EPS grafite pode alcançar determinado desempenho com menor espessura, mas a aplicação e proteção durante a obra devem seguir as regras do sistema."],
      ["XPS não é substituição automática", "A menor absorção de água torna o XPS útil em zonas específicas, como alguns arranques e detalhes expostos, quando o sistema o prevê. Usá-lo em toda a fachada sem justificação pode criar incompatibilidades."],
      ["Lã mineral", "Pode ser escolhida por comportamento ao fogo, permeabilidade ao vapor e desempenho acústico. É mais pesada e a fixação, suporte e execução precisam de ser considerados no sistema completo."],
    ],
    faqs: [["Posso misturar marcas e componentes?", "O mais seguro é respeitar um sistema ETICS com componentes compatíveis e documentação técnica própria, em vez de montar uma solução apenas pelo preço de cada produto."]],
  }),
  page({
    slug: "espessuras",
    title: "Que espessura escolher para o Capoto?",
    eyebrow: "Desempenho térmico",
    description: "Como escolher a espessura do isolamento exterior ETICS sem usar uma medida genérica para todos os edifícios.",
    intro: "A espessura não deve ser escolhida apenas porque é habitual. Parede existente, material isolante, clima, objetivo energético, remates e enquadramento técnico influenciam a decisão.",
    facts: ["A mesma espessura não serve todos os edifícios", "Mais espesso exige remates compatíveis", "O cálculo térmico orienta a decisão"],
    sections: [
      ["O suporte e a parede existente", "Uma parede simples, dupla ou já isolada tem comportamento diferente. Conhecer a composição ajuda a perceber o ganho esperado e a evitar condensações em pontos mal resolvidos."],
      ["Espessura muda os detalhes", "Peitoris, tubos, soleiras, caixas de estore, beirados, varandas e encontros com caixilharias precisam de acomodar o novo plano da fachada. A placa não pode ser decidida isoladamente."],
      ["Decisão responsável", "Em obras sujeitas a projeto, requisitos energéticos ou regras específicas, a solução deve ser definida pelos técnicos competentes e executada conforme o sistema escolhido."],
    ],
    faqs: [["Mais espessura é sempre melhor?", "Aumentar a espessura pode melhorar o isolamento, mas o ganho, custo e viabilidade dos remates devem ser avaliados em conjunto."]],
  }),
  page({
    slug: "reparacao",
    title: "Reparação de Capoto / ETICS",
    eyebrow: "Patologias e correção",
    description: "Reparação de impactos, fissuras, zonas ocas, remates degradados e outros problemas em fachadas com Capoto.",
    intro: "Uma reparação correta começa por distinguir dano localizado de falha mais ampla. Pintar por cima ou aplicar massa apenas na superfície pode esconder o sintoma sem corrigir rede, placa, fixação ou entrada de água.",
    facts: ["Impactos podem ser localizados", "Fissuras repetidas exigem diagnóstico", "Cor e textura podem variar após reparação"],
    sections: [
      ["Impactos e perfurações", "A zona danificada deve ser aberta até material estável, recomposta com isolamento compatível, camada de base e rede com sobreposição adequada, antes do acabamento."],
      ["Fissuras e destacamentos", "O traçado, profundidade e movimento da fissura ajudam a perceber se o problema está no acabamento, rede, juntas, suporte ou estrutura. Zonas ocas ou soltas podem exigir uma abertura maior."],
      ["Uniformidade final", "Mesmo com reparação tecnicamente correta, textura e cor envelhecida podem não coincidir. Em alguns casos é necessário rever uma área maior ou a fachada completa para uniformizar."],
    ],
    faqs: [["É possível reparar apenas uma zona?", "Muitas vezes sim, mas a extensão só é definida depois de verificar aderência, humidade, continuidade da rede e causa do dano."]],
  }),
  page({
    slug: "manutencao",
    title: "Manutenção de fachadas com Capoto",
    eyebrow: "Durabilidade",
    description: "Cuidados, inspeções e manutenção para prolongar a vida de uma fachada com sistema Capoto / ETICS.",
    intro: "ETICS não é uma fachada sem manutenção. A observação periódica permite corrigir selagens, impactos, sujidade, fungos ou entrada de água antes de o problema alcançar camadas interiores.",
    facts: ["Inspecionar remates e selagens", "Corrigir impactos cedo", "Limpeza compatível com o acabamento"],
    sections: [
      ["O que observar", "Procure fissuras novas, impactos, zonas ocas, manchas persistentes, crescimento biológico, falhas junto a peitoris, tubos, caleiras, coroamentos e ligações com outros materiais."],
      ["Limpeza e repintura", "Pressão, produto e método devem ser compatíveis com o revestimento. Uma lavagem agressiva pode danificar textura e proteção. A repintura pede limpeza, aderência e produto adequado ao sistema."],
      ["Alterações posteriores", "Toldos, aparelhos, cabos e outros elementos não devem ser fixados apenas no revestimento. A fixação precisa alcançar o suporte e manter estanqueidade e continuidade térmica."],
    ],
    faqs: [["Quando devo pedir inspeção?", "Sempre que apareçam fissuras, impactos, manchas persistentes, zonas ocas ou falhas de selagem, e antes de uma repintura geral."]],
  }),
  page({
    slug: "moradias",
    title: "Capoto em moradias",
    eyebrow: "Isolamento residencial",
    description: "Aplicação de Capoto em moradias: fachadas, remates, conforto térmico, obra habitada e preparação do orçamento.",
    intro: "Numa moradia, o isolamento exterior permite atuar na envolvente com menor perda de área interior. O levantamento deve incluir todas as fachadas, exposição, cobertura, arranques e elementos fixados às paredes.",
    facts: ["Intervenção maioritariamente exterior", "Atenção a peitoris e beirados", "Possível execução por fases, quando tecnicamente coerente"],
    sections: [
      ["Antes de orçamentar", "Fotografias de todas as fachadas, plantas ou medidas, altura, acessos, estado do reboco, número de vãos e elementos fixos ajudam a preparar uma primeira proposta."],
      ["Obra com a casa ocupada", "Apesar de exterior, haverá andaimes, ruído, proteção de janelas, circulação de materiais e momentos em que estores, tubos ou equipamentos precisam de intervenção coordenada."],
      ["Fachada e cobertura", "O encontro com telhado, beirado, platibanda ou caleira deve impedir entrada de água por trás do sistema. Isolar a parede sem resolver a cobertura pode manter patologias."],
    ],
    faqs: [["É necessário sair de casa?", "Normalmente não apenas por causa do ETICS, mas os acessos, ruído e trabalhos em janelas ou equipamentos devem ser planeados com os ocupantes."]],
  }),
  page({
    slug: "predios",
    title: "Capoto em prédios e condomínios",
    eyebrow: "Reabilitação de fachadas",
    description: "Planeamento de Capoto em prédios: condomínio, andaimes, segurança, vãos, fases, mapa de trabalhos e medição.",
    intro: "Num prédio, a técnica de fachada é apenas uma parte do trabalho. Decisão do condomínio, projeto quando aplicável, andaimes, licenças, segurança, proteção de utilizadores e uniformidade da execução precisam de ser coordenados.",
    facts: ["Mapa de quantidades comparável", "Andaimes e segurança definidos", "Remates repetidos exigem método"],
    sections: [
      ["Condomínio e documentação", "A proposta deve separar sistema, preparação, remates, andaimes, proteção, resíduos, elementos a desmontar e trabalhos opcionais. Isto permite comparar empresas pelo mesmo âmbito."],
      ["Fases e utilização do edifício", "Entradas, varandas, lojas, estacionamento e circulação de moradores condicionam a sequência. O planeamento reduz interrupções e protege zonas comuns."],
      ["Controlo da repetição", "Num edifício há dezenas de peitoris, caixas, tubos e encontros. Uma solução-tipo aprovada antes da produção reduz variações entre fachadas e equipas."],
    ],
    faqs: [["Os vãos são descontados?", "Depende do critério contratado. Quando são descontados, os perímetros e remates podem precisar de medição própria. A regra deve constar do mapa de quantidades."]],
  }),
  page({
    slug: "problemas-fissuras",
    title: "Fissuras e problemas no Capoto",
    eyebrow: "Diagnóstico de fachada",
    description: "Causas possíveis de fissuras, zonas ocas, impactos, manchas e falhas de remate em sistemas ETICS.",
    intro: "A aparência da fissura dá pistas, mas não fecha o diagnóstico. É necessário perceber quando apareceu, se atravessa outros materiais, se existe movimento, humidade, som oco ou repetição junto a vãos e juntas.",
    facts: ["Fissura superficial não é igual a estrutural", "Janelas e mudanças de material são pontos críticos", "Humidade pode agravar destacamentos"],
    sections: [
      ["Fissuras junto a vãos", "Cantos de janelas e portas concentram tensões. Reforços diagonais, continuidade da rede, paginação das placas e remates influenciam o comportamento."],
      ["Zonas ocas ou destacadas", "Podem indicar falha de aderência, suporte instável, colagem inadequada, entrada de água ou incompatibilidade. A área afetada pode ser maior do que a marca visível."],
      ["Quando envolver um técnico", "Fissuras ativas, largas, que atravessam a parede ou coincidem com deformação do edifício não devem ser tratadas apenas como acabamento. A origem estrutural deve ser avaliada por técnico competente."],
    ],
    faqs: [["Posso selar e pintar a fissura?", "Só depois de perceber a causa. Uma selagem superficial pode voltar a abrir ou desviar água para o interior do sistema."]],
  }),
  page({
    slug: "pontes-termicas",
    title: "Capoto e pontes térmicas",
    eyebrow: "Continuidade do isolamento",
    description: "Como o ETICS ajuda a limitar pontes térmicas e por que lajes, pilares, vãos, varandas e arranques exigem detalhe.",
    intro: "Uma ponte térmica é uma zona onde o calor encontra um caminho mais fácil através da envolvente. O isolamento exterior pode reduzir muitas dessas descontinuidades, desde que contorne elementos e mantenha ligação coerente entre paredes, cobertura e base.",
    facts: ["Lajes e pilares precisam de continuidade", "Vãos concentram perdas e condensação", "Varandas exigem solução própria"],
    sections: [
      ["Estrutura e paredes", "Quando pilares e bordos de laje ficam cobertos pela mesma camada exterior, reduz-se a diferença térmica entre estrutura e alvenaria. Interrupções recriam pontos frios."],
      ["Janelas, caixas e peitoris", "A aproximação do isolamento ao caixilho, o tratamento da caixa de estore e a substituição ou prolongamento de peitoris influenciam perdas, água e acabamento."],
      ["Limites do sistema", "Varandas, fundações e ligações com cobertura podem exigir detalhes adicionais. O ETICS na parede não elimina automaticamente todas as pontes térmicas do edifício."],
    ],
    faqs: [["O Capoto elimina todas as pontes térmicas?", "Não automaticamente. Reduz muitas pontes nas paredes, mas cada interrupção da envolvente precisa de ser analisada."]],
  }),
  page({
    slug: "humidade-condensacao",
    title: "Capoto, humidade e condensação",
    eyebrow: "Conforto e patologias",
    description: "Quando o Capoto pode ajudar na condensação e quando infiltrações, fugas, humidade ascendente ou ventilação exigem outra solução.",
    intro: "Paredes exteriores frias podem favorecer condensação superficial. O ETICS aumenta a temperatura da face interior e pode reduzir esse risco, mas a humidade tem várias origens e cada uma pede resposta diferente.",
    facts: ["Condensação depende também de ventilação", "Infiltração não se resolve com isolamento", "Humidade ascendente exige diagnóstico próprio"],
    sections: [
      ["Condensação superficial", "Surge quando o ar húmido encontra uma superfície fria. Isolamento, ventilação, extração em cozinha e banho, aquecimento e hábitos de utilização trabalham em conjunto."],
      ["Infiltrações e fugas", "Água de telhado, fachada, terraço, canalização ou juntas deve ser localizada e reparada. Cobrir a parede pode aprisionar o problema e degradar o novo sistema."],
      ["Bolor depois da obra", "Se persistirem produção elevada de vapor, pouca renovação do ar ou pontes térmicas não tratadas, o bolor pode regressar. A solução deve considerar o edifício completo."],
    ],
    faqs: [["Capoto acaba com o bolor?", "Pode reduzir o risco ligado a paredes frias, mas não garante resultado se houver infiltração, ventilação insuficiente ou outra fonte de humidade."]],
  }),
  page({
    slug: "isolamento-termico-exterior",
    title: "Isolamento térmico exterior ETICS",
    eyebrow: "Guia do sistema",
    description: "Como funciona o isolamento térmico exterior ETICS, as suas camadas, vantagens, limitações e pontos de execução.",
    intro: "ETICS é um sistema aplicado sobre a fachada com isolamento, colagem e fixação, camada armada, perfis, primário e acabamento. O desempenho vem do conjunto e da continuidade, não de um único produto.",
    facts: ["Sistema multicamada", "Aplicado pelo exterior", "Componentes compatíveis e remates contínuos"],
    sections: [
      ["Por que aplicar pelo exterior", "A solução envolve paredes e parte da estrutura sem consumir área interior. Também permite renovar a fachada e reduzir interrupções térmicas entre materiais."],
      ["Camadas que trabalham juntas", "Suporte, argamassa, placas, fixações, rede, perfis e acabamento têm funções diferentes. Trocar um componente sem verificar compatibilidade altera o comportamento do sistema."],
      ["Antes de começar", "A fachada deve ser inspecionada, medida e testada quando necessário. Humidade, fissuras, reboco solto, tubos, caixilharias, cobertura e arranque precisam de solução definida."],
    ],
    faqs: [["ETICS e fachada ventilada são iguais?", "Não. Ambos isolam pelo exterior, mas usam sistemas, materiais, câmara de ar e métodos de fixação diferentes."]],
  }),
  ...[
    ["lisboa", "Capoto em Lisboa", "Lisboa", "Acesso urbano, ocupação do edifício, andaimes, proteção do espaço público e coordenação com condomínios são fatores frequentes nos trabalhos de fachada em Lisboa."],
    ["setubal", "Capoto em Setúbal", "Setúbal", "Moradias, prédios e fachadas expostas a ambientes distintos exigem confirmação do suporte, acessos, exposição e remates antes da proposta em Setúbal."],
    ["algarve", "Capoto no Algarve", "Algarve", "Exposição solar, proximidade marítima em algumas zonas, imóveis sazonais e logística da obra influenciam acabamento, manutenção e planeamento no Algarve."],
    ["alentejo", "Capoto no Alentejo", "Alentejo", "Amplitude térmica, exposição solar, distâncias e acessos variáveis tornam importante definir área de deslocação, sistema e organização da obra no Alentejo."],
  ].map(([slug, title, region, localText]) => page({
    slug,
    title,
    eyebrow: "Serviço por região",
    description: `Aplicação e reparação de Capoto / ETICS em ${region}, com avaliação da fachada, isolamento, remates, acessos e orçamento detalhado.`,
    intro: `${localText} A Aureon avalia pedidos de aplicação completa, reabilitação e reparação de sistemas ETICS, confirmando a disponibilidade conforme localização e dimensão.`,
    facts: [`Área de atuação: ${region}`, "Moradias e prédios", "Pedido inicial com localização, área e fotografias"],
    sections: [
      ["O que enviar", "Indique concelho, altura aproximada, número de fachadas, área ou medidas, estado visível e fotografias gerais e dos problemas. Esta informação melhora a primeira leitura."],
      ["O que avaliamos", "Suporte, fissuras, humidade, vãos, peitoris, tubos, cobertura, arranques, acesso de andaime, proteção e sistema de isolamento pretendido."],
      ["Da referência ao orçamento", "Depois da informação inicial, confirmamos se é necessária visita e medição. A proposta define trabalhos, sistema, remates, exclusões, prazo indicativo e condições fiscais aplicáveis."],
    ],
    faqs: [[`A Aureon trabalha em todo o distrito de ${region}?`, "A área concreta e a disponibilidade são confirmadas pelo concelho, dimensão, acessos e planeamento da equipa antes do agendamento."]],
    region,
  })),
];

export const publishedCapotoPages = capotoPages;

export function getCapotoPage(slug) {
  return publishedCapotoPages.find((item) => item.slug === slug);
}
