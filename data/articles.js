import { workImages } from "./images.js";

const AUTHOR = {
  name: "Equipa Aureon Construção",
  type: "Organization",
};

function cover(image) {
  return {
    coverImage: image.src,
    coverAlt: image.alt,
    coverWidth: image.width,
    coverHeight: image.height,
  };
}

const articleCoverMap = {
  "quanto-custa-remodelar-uma-casa-portugal": cover(workImages.openSpaceFinal),
  "quanto-custa-remodelar-cozinha": cover(workImages.cozinhaFinal),
  "quanto-custa-remodelar-casa-de-banho": cover(workImages.casaBanhoFinal),
  "etapas-remodelacao-completa": cover(workImages.cozinhaAntes),
  "como-comparar-orcamentos-obras": cover(workImages.interiorRemodelado),
  "identificar-resolver-infiltracoes": cover(workImages.infiltracaoAntes),
  "reparar-ou-substituir-telhado": cover(workImages.telhadoNovo),
  "pintura-interior-preparacao-materiais-custos": cover(workImages.cozinhaPintura),
  "tetos-falsos-divisorias-pladur": cover(workImages.pladurEmObra),
};

const articleEnhancements = {
  "quanto-custa-remodelar-cozinha": {
    readTime: "12 min",
    dateModified: "2026-07-08",
    introduction:
      "A cozinha concentra decisões técnicas e funcionais: água, esgoto, eletricidade, exaustão, iluminação, mobiliário, bancada, revestimentos e pintura. Por isso, uma estimativa útil deve separar o que é obra, o que é equipamento e o que depende das escolhas de acabamento.",
    sections: [
      { title: "1. O estado inicial pesa muito", content: "Uma cozinha com teto danificado, paredes irregulares, redes antigas ou sinais de humidade exige mais preparação antes de receber móveis novos. Demolições, remoção de revestimentos, regularização e secagens podem alterar o valor e o prazo." },
      { title: "2. Manter ou alterar o layout", content: "Manter pontos de água, esgoto e exaustão pode simplificar a intervenção. Alterar a posição do lava-loiça, placa, forno ou máquinas pode exigir novos traçados, circuitos e compatibilização com prumadas existentes." },
      { title: "3. Eletricidade e iluminação", content: "Equipamentos atuais pedem tomadas suficientes, circuitos adequados e iluminação funcional. Focos embutidos, luz sob móveis e pontos dedicados devem ser definidos antes de fechar tetos ou paredes." },
      { title: "4. Mobiliário, ferragens e bancada", content: "Grande parte do orçamento está no mobiliário, ferragens, gavetas, sistemas de canto, frentes e tampo. Compare materiais, espessuras, resistência à humidade e o que está incluído na montagem." },
      { title: "5. Pintura e proteção em obra", content: "Quando parte do mobiliário ou pavimento é mantida, a proteção é essencial. Teto e paredes devem ser preparados, isolados quando há manchas e pintados com materiais adequados ao uso da cozinha." },
      { title: "6. Como comparar propostas", content: "Confirme se a proposta inclui demolição, transporte de resíduos, redes, massas, pintura, móveis, bancada, equipamentos, selagens, limpeza e IVA. Totais diferentes podem corresponder a âmbitos diferentes." },
      { title: "7. Próximo passo", content: "Reúna fotografias, medidas aproximadas, lista de equipamentos e ideia de layout. Uma visita técnica permite transformar uma referência inicial numa proposta com trabalhos e exclusões claros." },
    ],
    faqs: [
      { question: "É obrigatório trocar a canalização numa cozinha?", answer: "Não é automático. Depende da idade, material, estado da rede e alterações pretendidas. Se a cozinha vai ser aberta, pode ser prudente avaliar a substituição de troços antigos." },
      { question: "Posso pedir orçamento só com fotografias?", answer: "Sim, para uma primeira referência. A proposta final pode exigir visita, medidas, confirmação de redes e escolhas de materiais." },
      { question: "A calculadora dá o preço final da cozinha?", answer: "Não. A calculadora dá apenas uma estimativa indicativa. O valor final depende do orçamento detalhado, materiais, equipamentos, IVA e condições de execução." },
    ],
  },
  "quanto-custa-remodelar-casa-de-banho": {
    readTime: "12 min",
    dateModified: "2026-07-08",
    introduction:
      "Uma casa de banho é pequena em área, mas densa em decisões técnicas. Canalização, esgotos, impermeabilização, pendentes, revestimentos, ventilação, eletricidade, base de duche, resguardo e selagens devem funcionar em conjunto.",
    sections: [
      { title: "1. Demolição e preparação", content: "O orçamento deve indicar remoção de loiças, móveis, revestimentos, entulho e regularização das superfícies. Só depois de abrir é possível confirmar algumas condições ocultas." },
      { title: "2. Canalização e esgotos", content: "A posição de sanita, lavatório, duche e máquina condiciona traçados e pendentes. Antes de fechar paredes e pavimento, ligações e escoamentos devem ser verificados." },
      { title: "3. Impermeabilização", content: "A zona de duche, cantos, passagens de tubagem e ligação ao ralo são pontos críticos. A impermeabilização não deve ser tratada como detalhe decorativo; é parte técnica essencial." },
      { title: "4. Revestimentos e formatos", content: "Cerâmicas grandes, peças decorativas, nichos e recortes aumentam exigência de aplicação. O suporte deve estar regular e a paginação deve ser pensada antes do assentamento." },
      { title: "5. Base de duche e resguardo", content: "A base, o resguardo em vidro, a abertura da porta, a posição da torneira e a drenagem devem ser compatíveis. Pequenas diferenças de medida podem afetar utilização e vedação." },
      { title: "6. Eletricidade, ventilação e iluminação", content: "Tomadas, espelho iluminado, extrator e focos devem respeitar zonas de segurança e necessidades reais. Em casas de banho sem ventilação adequada, a humidade volta rapidamente." },
      { title: "7. O que confirmar no orçamento", content: "Confirme materiais incluídos, mão de obra, resíduos, equipamentos, selagens, limpeza, IVA, condições de garantia quando aplicável e exclusões." },
    ],
    faqs: [
      { question: "Quanto tempo demora uma casa de banho?", answer: "Depende do estado inicial, secagens, disponibilidade de materiais e alterações às redes. O prazo deve ser indicado na proposta após avaliação." },
      { question: "A impermeabilização está sempre incluída?", answer: "Deve ser confirmada no orçamento. Em zonas húmidas, é um ponto técnico importante e não deve ficar implícito." },
      { question: "Posso manter a disposição atual?", answer: "Frequentemente sim. Manter pontos principais pode reduzir complexidade, desde que as redes estejam em condições." },
    ],
  },
  "identificar-resolver-infiltracoes": {
    readTime: "12 min",
    dateModified: "2026-07-08",
    introduction:
      "Uma infiltração raramente se resolve apenas pintando a mancha. A água pode entrar pelo telhado, fachada, terraço, janela, canalização ou zona de duche e aparecer noutro ponto do imóvel.",
    sections: [
      { title: "1. Observar quando aparece", content: "Registe se a mancha surge com chuva, vento, uso de duche, máquina, torneira ou de forma constante. Esta informação ajuda a separar hipóteses." },
      { title: "2. Fotografar o estado inicial", content: "Fotografias datadas ajudam a acompanhar evolução, comunicar com técnicos e documentar a situação. Devem evitar rostos, documentos, matrículas ou dados pessoais visíveis." },
      { title: "3. Procurar a origem provável", content: "Coberturas, rufos, caleiras, claraboias, juntas de fachada, tubagens, esgotos e selagens são pontos frequentes. A origem pode estar afastada da mancha." },
      { title: "4. Abrir só quando necessário", content: "Uma abertura localizada pode ser inevitável, mas deve ser orientada por diagnóstico. Abrir sem critério aumenta danos e custos sem dar uma resposta técnica." },
      { title: "5. Corrigir a causa", content: "Antes de regularizar e pintar, a entrada de água deve ser corrigida. Caso contrário, o acabamento apenas esconde o problema por algum tempo." },
      { title: "6. Secagem e reposição", content: "Após reparar a origem, o suporte precisa de secar. Massas, primários e pintura aplicados cedo demais podem manchar, descascar ou prender humidade." },
      { title: "7. Quando existe seguro", content: "Em caso de sinistro, confirme procedimentos com a seguradora antes de alterar evidências, salvo urgência para limitar danos. A decisão de cobertura pertence à seguradora." },
    ],
    faqs: [
      { question: "A mancha indica sempre a origem?", answer: "Não. A água pode percorrer lajes, juntas e tubagens antes de aparecer. O diagnóstico deve observar o percurso possível." },
      { question: "Posso pintar logo depois de reparar?", answer: "Nem sempre. O suporte deve estar seco e preparado para evitar manchas e falhas de aderência." },
      { question: "A Aureon trata de processos de seguro?", answer: "A Aureon pode apoiar tecnicamente e documentar trabalhos quando aplicável, mas não substitui seguradora, perito ou aconselhamento jurídico." },
    ],
  },
  "reparar-ou-substituir-telhado": {
    readTime: "12 min",
    dateModified: "2026-07-08",
    introduction:
      "A decisão entre reparar ou substituir um telhado depende da origem da água, idade dos materiais, estado da estrutura, subtelha, remates e histórico de infiltrações. Uma visita segura e bem orientada evita soluções incompletas.",
    sections: [
      { title: "1. Inspeção visual com segurança", content: "Telhas partidas, peças deslocadas, zonas afundadas, musgo, fissuras, cumeeiras abertas e sinais no sótão devem ser observados sem assumir riscos de acesso." },
      { title: "2. Remates são decisivos", content: "Chaminés, claraboias, janelas de cobertura, rufos, paredes laterais e platibandas concentram entradas de água. Trocar telhas sem rever remates pode não resolver." },
      { title: "3. Caleiras e drenagem", content: "Caleiras entupidas, mal dimensionadas ou com pendente deficiente podem devolver água para zonas sensíveis. A drenagem faz parte da proteção da cobertura." },
      { title: "4. Quando reparar", content: "Uma origem localizada, materiais compatíveis e cobertura globalmente estável favorecem reparação pontual. Mesmo assim, convém rever a zona envolvente." },
      { title: "5. Quando considerar substituição", content: "Infiltrações repetidas, subtelha degradada, muitas telhas danificadas, estrutura comprometida ou necessidade de melhorar isolamento podem justificar intervenção mais ampla." },
      { title: "6. Impermeabilização complementar", content: "Terraços, caleiras, encontros e remates podem exigir membranas ou sistemas líquidos compatíveis. A escolha depende do suporte e exposição." },
      { title: "7. O que pedir no orçamento", content: "Confirme área, acesso, andaimes, remoção, telhas, subtelha, remates, caleiras, impermeabilização, resíduos, IVA e condições de assistência quando aplicável." },
    ],
    faqs: [
      { question: "Uma telha partida justifica substituir o telhado todo?", answer: "Não necessariamente. A decisão depende do estado global e da origem da infiltração." },
      { question: "As infiltrações vêm sempre das telhas?", answer: "Não. Rufos, caleiras, claraboias, juntas e paredes laterais podem ser a origem." },
      { question: "É possível dar orçamento por fotografia?", answer: "Fotografias ajudam a enquadrar, mas coberturas normalmente exigem avaliação de acesso, remates e extensão real do problema." },
    ],
  },
  "etapas-remodelacao-completa": {
    readTime: "13 min",
    dateModified: "2026-07-08",
    introduction:
      "Uma remodelação completa corre melhor quando a sequência é clara. Antes, durante e depois não são apenas momentos fotográficos: são fases de decisão, demolição, diagnóstico, redes, fechos, acabamentos e revisão.",
    sections: [
      { title: "1. Levantamento e prioridades", content: "Comece por identificar problemas técnicos, necessidades funcionais e escolhas estéticas. Fotografias, medidas e lista de prioridades ajudam a preparar uma proposta comparável." },
      { title: "2. Âmbito e orçamento", content: "O mapa de trabalhos deve separar demolições, redes, pladur, pavimentos, pintura, cozinha, casa de banho, equipamentos, resíduos, exclusões e IVA." },
      { title: "3. Proteções e demolições", content: "Pavimentos, zonas comuns, móveis e elementos a manter devem ser protegidos. As demolições revelam patologias ocultas que devem ser documentadas antes de avançar." },
      { title: "4. Diagnóstico após abrir", content: "Tubagens, cabos, humidades, fissuras e suportes podem confirmar ou alterar o plano. Mudanças devem ser discutidas com impacto em preço e prazo." },
      { title: "5. Redes e bases", content: "Eletricidade, canalização, esgotos, ventilação e estruturas de pladur avançam antes dos acabamentos. Testar antes de fechar reduz retrabalho." },
      { title: "6. Acabamentos por sequência", content: "Pavimentos, revestimentos, carpintarias, pintura, mobiliário e equipamentos devem seguir uma ordem que reduza danos nos trabalhos já concluídos." },
      { title: "7. Revisão e entrega", content: "A entrega deve incluir revisão dos trabalhos contratados, pequenos acertos e explicação de cuidados de utilização quando aplicável." },
    ],
    faqs: [
      { question: "Posso viver no imóvel durante a remodelação?", answer: "Depende do âmbito. Obras com redes, casas de banho ou cozinha podem limitar uso, criar pó e exigir fases sem acesso." },
      { question: "Como evitar derrapagens?", answer: "Fechando escolhas cedo, usando mapa de trabalhos claro e formalizando alterações antes de executar." },
      { question: "As fotografias ajudam?", answer: "Sim. Registar antes, durante e depois facilita acompanhamento, decisões técnicas e memória da obra." },
    ],
  },
  "como-comparar-orcamentos-obras": {
    readTime: "11 min",
    dateModified: "2026-07-08",
    introduction:
      "O orçamento mais barato pode não ser o mais económico se omitir preparação, resíduos, materiais, IVA ou trabalhos técnicos. Comparar propostas exige olhar para o que está escrito, o que está excluído e o que ainda precisa de confirmação.",
    sections: [
      { title: "1. Envie o mesmo pedido", content: "Fotografias, medidas, prioridades e lista de trabalhos devem ser iguais para todos. Se cada empresa responder a um pedido diferente, os totais não são comparáveis." },
      { title: "2. Compare âmbito, não só preço", content: "Confirme se inclui demolições, proteções, redes, materiais, equipamentos, limpeza, transporte, resíduos, andaimes e acabamentos." },
      { title: "3. Leia materiais e gamas", content: "Expressões como material incluído ou acabamento standard precisam de detalhe. Marcas, gamas, espessuras e critérios evitam mal-entendidos." },
      { title: "4. Verifique exclusões", content: "IVA, licenças, projetos, contentores, equipamentos, trabalhos ocultos e alterações podem estar fora. Uma exclusão importante muda o custo real." },
      { title: "5. Pergunte pela sequência", content: "Quem coordena eletricidade, canalização, pladur, pintura e acabamentos? Como são registadas alterações? O método de trabalho influencia resultado e tranquilidade." },
      { title: "6. Formalize trabalhos adicionais", content: "Imprevistos acontecem, sobretudo em imóveis antigos. O importante é documentar a causa, alternativa, valor e impacto antes de avançar." },
      { title: "7. Avalie comunicação", content: "Uma proposta clara e uma resposta técnica coerente valem muito. Promessas absolutas sem detalhe são menos úteis do que condições bem explicadas." },
    ],
    faqs: [
      { question: "Devo escolher sempre o orçamento mais baixo?", answer: "Não necessariamente. Primeiro confirme se todos incluem o mesmo âmbito e materiais." },
      { question: "O IVA deve aparecer no orçamento?", answer: "Sim, a condição fiscal deve ficar clara na proposta final." },
      { question: "Fotografias chegam para comparar?", answer: "Ajudam, mas medições, visita e confirmação de condições podem ser necessárias para proposta final." },
    ],
  },
  "tetos-falsos-divisorias-pladur": {
    readTime: "11 min",
    dateModified: "2026-07-08",
    introduction:
      "Pladur permite criar tetos falsos, divisórias, forros técnicos e soluções de iluminação com rapidez, mas o resultado depende do sistema completo: perfis, placas, isolamento, reforços, juntas e acabamento.",
    sections: [
      { title: "1. Definir a função", content: "Regularizar um teto, esconder infraestruturas, melhorar acústica, integrar iluminação ou criar uma divisão são objetivos diferentes. Cada um pede solução própria." },
      { title: "2. Escolher placa adequada", content: "Existem placas standard, hidrófugas, resistentes ao fogo e outras soluções. Zonas húmidas, cozinhas e áreas técnicas não devem ser tratadas como divisões secas comuns." },
      { title: "3. Estrutura e reforços", content: "Perfis, afastamentos, suspensões e reforços devem ser previstos para o uso. Móveis, televisores, portas ou equipamentos pesados exigem preparação antes de fechar." },
      { title: "4. Isolamento", content: "Lãs minerais e outros materiais podem melhorar conforto térmico e acústico, mas só funcionam bem quando há continuidade e remates adequados." },
      { title: "5. Eletricidade e iluminação", content: "Focos, fitas LED, caixas, ventilação e passagens técnicas devem ser coordenados antes de fechar placas. Alterações tardias criam cortes e remendos." },
      { title: "6. Juntas, massas e secagem", content: "O tratamento de juntas pede método e tempo. Luz rasante evidencia irregularidades, por isso a fase de massas e lixagem é decisiva." },
      { title: "7. Pintura final", content: "Primário e tinta devem ser compatíveis com o suporte. A pintura não corrige uma base mal regularizada; apenas a torna mais visível." },
    ],
    faqs: [
      { question: "Pladur é adequado para casas de banho?", answer: "Pode ser, usando sistema e placa adequados à zona e respeitando impermeabilização onde aplicável." },
      { question: "Posso pendurar móveis em pladur?", answer: "Sim, se os reforços forem previstos antes de fechar. Sem reforço, a carga pode ser limitada." },
      { question: "Um teto falso ajuda na iluminação?", answer: "Sim, permite integrar focos e passagens técnicas, desde que eletricidade e manutenção sejam pensadas antes da execução." },
    ],
  },
};

function article(data) {
  return {
    author: AUTHOR,
    datePublished: "2026-07-03",
    dateModified: "2026-07-03",
    coverImage: "/hero-aureon.webp",
    faqs: [],
    relatedServices: [],
    relatedArticles: [],
    status: "published",
    ...(articleCoverMap[data.slug] || {}),
    ...data,
    ...(articleEnhancements[data.slug] || {}),
    seoTitle: data.seoTitle || data.title,
    seoDescription: data.seoDescription || data.excerpt,
  };
}

export const articles = [
  article({
    slug: "quanto-custa-remodelar-uma-casa-portugal",
    title: "Quanto custa remodelar uma casa em Portugal?",
    excerpt: "Como enquadrar o orçamento, comparar níveis de intervenção e perceber os fatores que alteram o valor.",
    category: "Custos e planeamento",
    readTime: "10 min",
    introduction:
      "O custo de uma remodelação não resulta apenas da área. Estado das redes, demolições, acessos, materiais, alterações de distribuição e número de especialidades têm impacto direto. Uma estimativa por metro quadrado serve para enquadrar, não para substituir o levantamento.",
    sections: [
      { title: "Três níveis de intervenção", content: "Uma renovação ligeira concentra-se em pintura, pavimentos e pequenas correções. Uma intervenção intermédia pode incluir cozinha, casa de banho e redes localizadas. Uma remodelação profunda altera distribuição, instalações e vários acabamentos, exigindo mais coordenação." },
      { title: "O que costuma aumentar o custo", content: "Problemas ocultos, redes antigas, remoção de revestimentos, acessos difíceis, trabalho em edifícios ocupados e materiais especiais aumentam recursos e tempo. Decisões tardias também geram alterações e desperdício." },
      { title: "Como construir um orçamento útil", content: "O documento deve identificar trabalhos, quantidades, materiais ou gamas, exclusões e condições. Compare propostas pelo mesmo âmbito; um total mais baixo pode simplesmente omitir preparação, proteção ou reposições." },
      { title: "Margem para imprevistos", content: "Em imóveis antigos, convém reservar uma margem de decisão para situações que só aparecem após abrir paredes ou pavimentos. A percentagem adequada depende do conhecimento disponível e deve ser discutida antes da obra." },
      { title: "Próximo passo", content: "Reúna plantas, fotografias e prioridades. Uma visita técnica permite validar medidas, redes, acessos e sequência, transformando uma referência geral numa proposta ajustada." },
    ],
    faqs: [
      { question: "É possível dar um preço sem visitar?", answer: "É possível dar uma referência inicial com área e fotografias, mas uma proposta final pode exigir visita, medições e verificação das condições existentes." },
      { question: "O valor por metro quadrado inclui tudo?", answer: "Nem sempre. Deve confirmar demolições, redes, materiais, equipamentos, transporte, resíduos, IVA e condições fiscais no orçamento." },
    ],
    relatedServices: ["remodelacao", "construcao"],
    relatedArticles: ["como-comparar-orcamentos-obras", "planear-remodelacao-sem-ultrapassar-orcamento"],
  }),
  article({
    slug: "quanto-custa-remodelar-apartamento",
    title: "Quanto custa remodelar um apartamento?",
    excerpt: "Custos, logística e decisões específicas de uma obra inserida num edifício.",
    category: "Custos e planeamento",
    readTime: "9 min",
    introduction:
      "Num apartamento, além dos trabalhos interiores, o orçamento deve considerar acessos, elevador, proteção de partes comuns, horários e remoção de resíduos. A distribuição existente e o estado das prumadas condicionam alterações.",
    sections: [
      { title: "Intervenção parcial ou completa", content: "Pintura e pavimentos têm uma lógica diferente de uma obra que renova cozinha, casa de banho, quadro elétrico e tubagens. Defina o que fica e o que é substituído antes de comparar valores." },
      { title: "Logística do edifício", content: "Distância ao local de carga, tamanho do elevador, escadas e regras do condomínio influenciam proteção, transporte e calendarização. Estes custos não devem aparecer apenas depois da adjudicação." },
      { title: "Redes e distribuição", content: "Mover cozinha ou instalações sanitárias pode implicar esgotos, ventilação e potência elétrica. A viabilidade deve ser confirmada antes de fechar o desenho." },
      { title: "Partes comuns e autorizações", content: "Intervenções em fachada, estrutura ou partes comuns podem exigir aprovação e avaliação técnica. Confirme sempre com condomínio, técnicos e entidades competentes." },
      { title: "Comparar propostas", content: "Peça o mesmo mapa de trabalhos a todos os concorrentes. Confirme proteções, demolições, preparação, materiais, limpeza e gestão de resíduos." },
    ],
    relatedServices: ["remodelacao-apartamentos", "remodelacao"],
    relatedArticles: ["etapas-remodelacao-completa", "erros-comuns-remodelacao"],
  }),
  article({
    slug: "quanto-custa-remodelar-cozinha",
    title: "Quanto custa remodelar uma cozinha?",
    excerpt: "Mobiliário, tampos, redes, revestimentos e equipamentos: onde se concentra o orçamento.",
    category: "Cozinhas",
    readTime: "9 min",
    introduction:
      "A cozinha combina mobiliário feito à medida, redes técnicas, equipamentos e acabamentos. O preço varia muito com a dimensão, ferragens, tampo, alterações de layout e necessidade de renovar eletricidade ou canalização.",
    sections: [
      { title: "Layout e medições", content: "A posição de águas, esgoto, exaustão e tomadas deve ser definida com os equipamentos. Medidas finais devem ser confirmadas depois das regularizações relevantes." },
      { title: "Mobiliário e ferragens", content: "Caixas, frentes, ferragens e organização interior influenciam utilização e custo. Compare espessuras, resistência à humidade, marcas de ferragens e soluções de canto." },
      { title: "Tampos e revestimentos", content: "Pedra, quartzo, compactos e outras soluções têm exigências diferentes. O suporte, recortes, juntas e manutenção devem pesar na escolha, não apenas a cor." },
      { title: "Redes técnicas", content: "Uma cozinha com novos equipamentos pode exigir circuitos dedicados, mais potência e alterações de canalização. Estes trabalhos devem ser orçamentados antes do mobiliário." },
      { title: "Evitar alterações em obra", content: "Escolha equipamentos, torneira, lava-loiça e iluminação cedo. Alterações depois de produzidos os móveis podem implicar custos e atrasos." },
    ],
    faqs: [{ question: "É possível manter a disposição para reduzir custos?", answer: "Frequentemente sim. Manter pontos de água, esgoto e exaustão pode simplificar a intervenção, desde que a rede esteja em condições." }],
    relatedServices: ["cozinhas", "eletricidade", "canalizacao"],
    relatedArticles: ["como-comparar-orcamentos-obras"],
  }),
  article({
    slug: "quanto-custa-remodelar-casa-de-banho",
    title: "Quanto custa remodelar uma casa de banho?",
    excerpt: "Impermeabilização, canalização, revestimentos e equipamentos explicados por etapas.",
    category: "Casas de banho",
    readTime: "9 min",
    introduction:
      "O tamanho reduzido não torna a casa de banho simples. Há muitas operações concentradas: demolição, redes, pendentes, impermeabilização, revestimentos, loiças, ventilação e iluminação.",
    sections: [
      { title: "O que deve estar no orçamento", content: "Confirme demolição, remoção de resíduos, redes, regularização, impermeabilização, assentamento, loiças, móveis, torneiras, resguardos e selagens." },
      { title: "Impermeabilização", content: "O sistema deve ser contínuo e incluir cantos, passagens e ligação à base ou ralo. Aplicar apenas um produto sem preparar o suporte ou tratar remates reduz a eficácia." },
      { title: "Canalização e esgotos", content: "Antes de fechar paredes, devem ser confirmadas ligações, pendentes e ensaios. Mudar sanitários pode não ser possível sem alterar cotas ou traçados." },
      { title: "Revestimentos e mão de obra", content: "Formato, paginação, recortes e estado das paredes influenciam tempo e desperdício. Peças grandes não significam automaticamente execução mais simples." },
      { title: "Ventilação e eletricidade", content: "Iluminação, tomadas e ventilação devem ser definidas para o ambiente. Regras técnicas e zonas de segurança devem ser verificadas por profissionais competentes." },
    ],
    relatedServices: ["casas-de-banho", "canalizacao", "microcimento"],
    relatedArticles: ["microcimento-ou-ceramica", "identificar-resolver-infiltracoes"],
  }),
  article({
    slug: "etapas-remodelacao-completa",
    title: "Etapas de uma remodelação completa",
    excerpt: "Da avaliação inicial à entrega: a sequência que evita refazer trabalhos.",
    category: "Guias de obra",
    readTime: "11 min",
    introduction:
      "Uma remodelação bem organizada depende da ordem das decisões. Desenho, demolições, redes, fechos e acabamentos devem avançar com informação suficiente para a fase seguinte.",
    sections: [
      { title: "1. Levantamento e objetivos", content: "Registe medidas, patologias, redes visíveis e prioridades. Distinga necessidades técnicas de preferências estéticas e identifique o que permanece." },
      { title: "2. Projeto e escolhas", content: "Feche distribuição, equipamentos e materiais críticos. Alterações estruturais ou sujeitas a autorização devem ser confirmadas antes do início." },
      { title: "3. Demolições e diagnóstico", content: "Depois de proteger, remover e limpar, é possível confirmar partes ocultas. Qualquer desvio deve ser documentado e decidido antes de fechar." },
      { title: "4. Redes e trabalhos base", content: "Eletricidade, canalização, esgotos e infraestruturas avançam antes de rebocos, tetos e revestimentos. Testar antes de fechar reduz correções." },
      { title: "5. Acabamentos e revisão", content: "Pavimentos, carpintarias, pintura, equipamentos e selagens seguem uma sequência que evita danos. A entrega deve incluir uma revisão conjunta dos trabalhos contratados." },
    ],
    relatedServices: ["remodelacao", "remodelacao-apartamentos", "remodelacao-moradias"],
    relatedArticles: ["planear-remodelacao-sem-ultrapassar-orcamento", "erros-comuns-remodelacao"],
  }),
  article({
    slug: "como-comparar-orcamentos-obras",
    title: "Como comparar orçamentos de obras",
    excerpt: "Um método prático para comparar âmbito, materiais, exclusões e condições.",
    category: "Custos e planeamento",
    readTime: "8 min",
    introduction:
      "Comparar apenas o total é arriscado. Duas propostas podem ter valores diferentes porque uma inclui preparação, proteção e materiais que a outra deixa em aberto.",
    sections: [
      { title: "Uniformize o pedido", content: "Envie a mesma descrição, plantas e escolhas a todos. Se cada empresa interpretar um trabalho diferente, os totais não são comparáveis." },
      { title: "Leia quantidades e materiais", content: "Procure áreas, unidades, marcas ou gamas e forma de aplicação. Expressões vagas devem ser esclarecidas antes da adjudicação." },
      { title: "Confirme exclusões", content: "Equipamentos, transporte, contentores, andaimes, licenças, projetos e IVA podem estar fora. Uma exclusão importante altera a leitura do preço." },
      { title: "Avalie sequência e interlocução", content: "Pergunte como são coordenadas as especialidades, registadas alterações e comunicados imprevistos. O método influencia custo e qualidade." },
      { title: "Formalize alterações", content: "Trabalhos adicionais devem ter descrição e valor aprovados antes de avançar, salvo urgências de segurança devidamente comunicadas." },
    ],
    relatedServices: ["remodelacao", "construcao"],
    relatedArticles: ["como-escolher-empresa-remodelacoes", "planear-remodelacao-sem-ultrapassar-orcamento"],
  }),
  article({
    slug: "como-escolher-empresa-remodelacoes",
    title: "Como escolher uma empresa de remodelações",
    excerpt: "Perguntas úteis sobre âmbito, equipas, comunicação e responsabilidade.",
    category: "Guias de obra",
    readTime: "8 min",
    introduction:
      "A escolha deve considerar capacidade de interpretar o trabalho, organizar especialidades e comunicar decisões. Preço, por si só, não mostra o que está incluído nem como serão tratados imprevistos.",
    sections: [
      { title: "Peça clareza no âmbito", content: "Uma proposta deve explicar o que será feito, com que materiais ou critérios e o que fica excluído. Pergunte por pontos ambíguos." },
      { title: "Perceba quem coordena", content: "Identifique o interlocutor, a forma de registar decisões e a responsabilidade por equipas diferentes. Isto é crítico em remodelações completas." },
      { title: "Valide informação real", content: "Quando existirem referências, fotografias ou avaliações, confirme que são reais e correspondem à empresa. Não se baseie apenas em imagens genéricas." },
      { title: "Discuta imprevistos", content: "Pergunte como são documentados problemas ocultos, alternativas e trabalhos adicionais. Uma resposta concreta é mais útil do que promessas absolutas." },
      { title: "Confirme requisitos técnicos", content: "Trabalhos de estrutura, eletricidade ou outros regulados devem envolver técnicos e profissionais habilitados quando aplicável." },
    ],
    relatedServices: ["remodelacao", "construcao"],
    relatedArticles: ["como-comparar-orcamentos-obras", "erros-comuns-remodelacao"],
  }),
  article({
    slug: "microcimento-ou-ceramica",
    title: "Microcimento ou cerâmica: principais diferenças",
    excerpt: "Compare juntas, suporte, manutenção, reparação e utilização em zonas húmidas.",
    category: "Materiais",
    readTime: "8 min",
    introduction:
      "Microcimento e cerâmica podem criar resultados muito diferentes. A decisão deve considerar o estado do suporte, estética, água, manutenção, juntas e possibilidade de reparação.",
    sections: [
      { title: "Aspeto e juntas", content: "O microcimento cria uma superfície visualmente contínua. A cerâmica tem juntas e paginação, mas oferece enorme variedade de formatos e acabamentos." },
      { title: "Preparação do suporte", content: "Ambos exigem base estável e regular. No microcimento, fissuras e movimentos podem marcar o acabamento; na cerâmica, colagem e juntas também dependem do suporte." },
      { title: "Zonas húmidas", content: "Nenhum acabamento substitui a impermeabilização. Em duches e casas de banho, o sistema sob o revestimento, remates e selagem são essenciais." },
      { title: "Manutenção e reparação", content: "A cerâmica permite substituir peças se houver material igual. Reparações de microcimento podem ficar visíveis e exigem avaliação do acabamento completo." },
      { title: "Como decidir", content: "Escolha com amostras, utilização e suporte em mente. Evite decidir apenas por fotografias, porque textura, brilho e cor variam com luz e aplicação." },
    ],
    relatedServices: ["microcimento", "casas-de-banho", "cozinhas"],
    relatedArticles: ["quanto-custa-remodelar-casa-de-banho"],
  }),
  article({
    slug: "capoto-etics-vantagens-limitacoes",
    title: "Capoto / ETICS: vantagens e limitações",
    excerpt: "O que o isolamento exterior pode melhorar e os detalhes que determinam o resultado.",
    category: "Eficiência e fachadas",
    readTime: "9 min",
    introduction:
      "O ETICS cria isolamento contínuo pelo exterior e protege a parede. O desempenho depende da espessura, material, fixação, remates, suporte e continuidade em vãos e elementos salientes.",
    sections: [
      { title: "Vantagens principais", content: "Reduz perdas pela parede, limita pontes térmicas e renova a fachada sem consumir área interior. Pode ajudar a reduzir condensação quando integrado numa solução adequada de ventilação e aquecimento." },
      { title: "Preparação da fachada", content: "Revestimentos soltos, humidades, fissuras e contaminação devem ser avaliados. Colar sobre uma base instável compromete todo o sistema." },
      { title: "Remates críticos", content: "Peitoris, varandas, caixas de estore, tubos, arranques e coroamentos exigem continuidade e proteção da água. Muitos problemas surgem nestes encontros." },
      { title: "Limitações", content: "O ETICS não resolve infiltrações de cobertura, fugas ou ventilação insuficiente. A fachada também fica sujeita a impactos e deve ter acabamento e manutenção adequados." },
      { title: "Decisões técnicas", content: "Espessura, reação ao fogo, fixação e detalhes devem ser definidos para o edifício e enquadramento aplicável, com técnicos competentes quando necessário." },
    ],
    relatedServices: ["capoto-etics", "pintura-exterior-fachadas"],
    relatedArticles: ["pintura-exterior-reabilitacao-fachadas"],
  }),
  article({
    slug: "identificar-resolver-infiltracoes",
    title: "Como identificar e resolver infiltrações",
    excerpt: "Porque a mancha nem sempre está junto à origem e como organizar o diagnóstico.",
    category: "Patologias",
    readTime: "10 min",
    introduction:
      "A água percorre juntas, lajes, tubagens e caixas de ar. Pintar a mancha sem confirmar a origem tende a esconder o sintoma durante pouco tempo.",
    sections: [
      { title: "Registe quando acontece", content: "Anote se surge com chuva, utilização de uma instalação, vento ou de forma contínua. Fotografias datadas e localização ajudam a reduzir hipóteses." },
      { title: "Fontes frequentes", content: "Coberturas, rufos, caleiras, terraços, juntas de fachada, janelas, canalização e zonas de duche são pontos a observar. Mais de uma origem pode coexistir." },
      { title: "Diagnóstico por etapas", content: "Comece por inspeção visual e testes não destrutivos adequados. Aberturas localizadas podem ser necessárias quando a origem está oculta." },
      { title: "Reparar, secar e repor", content: "Depois de corrigir a origem, o suporte precisa de secar antes de massas e pintura. Fechar cedo pode aprisionar humidade e degradar o acabamento." },
      { title: "Quando há seguro", content: "Registe o estado antes de intervir, salvo urgência para limitar danos. Confirme procedimentos com a seguradora; a cobertura é decisão desta entidade." },
    ],
    relatedServices: ["reparacao-infiltracoes", "telhados-impermeabilizacao", "canalizacao"],
    relatedArticles: ["reparar-ou-substituir-telhado"],
  }),
  article({
    slug: "reparar-ou-substituir-telhado",
    title: "Reparar ou substituir um telhado?",
    excerpt: "Como avaliar telhas, subtelha, estrutura, remates e histórico de infiltrações.",
    category: "Coberturas",
    readTime: "9 min",
    introduction:
      "Uma telha partida pode justificar reparação localizada; degradação generalizada da subtelha, fixações ou estrutura pode tornar as correções sucessivas pouco eficazes.",
    sections: [
      { title: "Inspeção inicial", content: "Observe telhas, cumeeiras, rufos, caleiras, zonas afundadas e sinais no sótão. A segurança de acesso deve ser garantida." },
      { title: "Quando reparar", content: "Uma origem localizada, cobertura globalmente estável e materiais compatíveis favorecem reparação. É importante verificar elementos próximos para evitar nova intervenção." },
      { title: "Quando considerar substituição", content: "Avarias repetidas, subtelha degradada, muitas peças danificadas ou necessidade de melhorar isolamento podem justificar uma intervenção mais ampla." },
      { title: "Não esquecer remates", content: "Chaminés, claraboias, paredes laterais e caleiras são fontes frequentes de entrada. Substituir telhas sem rever estes pontos pode não resolver." },
      { title: "Orçamento comparável", content: "Confirme áreas, peças, subtelha, isolamento, remates, andaimes, remoção e tratamento de estrutura. Soluções com âmbitos diferentes não devem ser comparadas só pelo total." },
    ],
    relatedServices: ["reparacao-telhados", "telhados-impermeabilizacao"],
    relatedArticles: ["identificar-resolver-infiltracoes"],
  }),
  article({
    slug: "pintura-interior-preparacao-materiais-custos",
    title: "Pintura interior: preparação, materiais e custos",
    excerpt: "Porque preparar o suporte é tão importante como escolher a tinta.",
    category: "Pintura",
    readTime: "8 min",
    introduction:
      "O custo da pintura depende da área, número de cores, estado das paredes, mobiliário, altura e reparações. Uma parede que parece pronta pode precisar de limpeza, isolamento de manchas ou regularização.",
    sections: [
      { title: "Proteção e preparação", content: "Pavimentos, móveis e equipamentos devem ser protegidos. Zonas soltas são removidas, fissuras não estruturais reparadas e superfícies lixadas e limpas." },
      { title: "Primário", content: "Suportes novos, muito absorventes, pulverulentos ou manchados podem exigir primário específico. Aplicar tinta sem esta etapa pode provocar diferenças e fraca aderência." },
      { title: "Escolher a tinta", content: "Lavabilidade, brilho, permeabilidade e resistência à humidade devem corresponder à divisão. Cozinhas, quartos e tetos podem pedir soluções diferentes." },
      { title: "O que altera o preço", content: "Reparações, muitas portas e recortes, cores intensas, altura e trabalho com o imóvel ocupado aumentam tempo e proteção." },
      { title: "Humidade não se pinta", content: "Bolor, condensação e infiltração exigem diagnóstico. A tinta pode ser parte do acabamento, mas não substitui a correção da causa." },
    ],
    relatedServices: ["pintura-interior", "pinturas"],
    relatedArticles: ["identificar-resolver-infiltracoes"],
  }),
  article({
    slug: "pintura-exterior-reabilitacao-fachadas",
    title: "Pintura exterior e reabilitação de fachadas",
    excerpt: "Preparação, fissuras, primários e escolha do sistema para exposição exterior.",
    category: "Pintura",
    readTime: "9 min",
    introduction:
      "A fachada recebe sol, chuva, vento e variações térmicas. A pintura deve ser tratada como parte de um sistema, começando pelo diagnóstico da base e das entradas de água.",
    sections: [
      { title: "Lavagem e aderência", content: "Poeiras, fungos e tinta solta devem ser removidos. Um teste de aderência ajuda a decidir se o revestimento existente pode receber novas camadas." },
      { title: "Fissuras", content: "Fissuras estáveis e superficiais têm tratamento diferente de aberturas ativas ou estruturais. Estas últimas precisam de avaliação técnica antes de qualquer pintura." },
      { title: "Primário e acabamento", content: "O sistema deve ser compatível com absorção, alcalinidade e permeabilidade do suporte. Produtos isolados não compensam uma preparação deficiente." },
      { title: "Remates e infiltrações", content: "Peitoris, juntas, platibandas, coberturas e tubagens devem ser revistos. A água pode entrar por um ponto e manifestar-se noutro." },
      { title: "Condições de aplicação", content: "Temperatura, vento, chuva prevista e humidade do suporte afetam secagem e resultado. A calendarização deve respeitar as recomendações do sistema." },
    ],
    relatedServices: ["pintura-exterior-fachadas", "capoto-etics"],
    relatedArticles: ["capoto-etics-vantagens-limitacoes"],
  }),
  article({
    slug: "renovacao-instalacao-eletrica-casa-antiga",
    title: "Renovação da instalação elétrica de uma casa antiga",
    excerpt: "Sinais de alerta, planeamento de circuitos e coordenação com a remodelação.",
    category: "Instalações técnicas",
    readTime: "10 min",
    introduction:
      "Instalações antigas podem ter poucos circuitos, cabos e proteções desadequados à utilização atual. A renovação deve partir das cargas e equipamentos previstos, não apenas da troca de tomadas.",
    sections: [
      { title: "Sinais que justificam avaliação", content: "Disparos frequentes, aquecimento, tomadas sem terra, extensões permanentes e quadro desorganizado são razões para pedir diagnóstico profissional." },
      { title: "Mapa de utilizações", content: "Liste equipamentos de cozinha, climatização, águas quentes, carregamento e zonas de trabalho. Isto orienta circuitos, tomadas e potência." },
      { title: "Quadro e circuitos", content: "Proteções, secções e separação de circuitos devem ser definidas para a instalação. Trocar apenas o quadro não resolve cablagem degradada." },
      { title: "Coordenação com acabamentos", content: "Traçados, caixas e iluminação devem ser fechados antes de rebocos, pladur e pintura. Decisões tardias obrigam a abrir superfícies concluídas." },
      { title: "Responsabilidade técnica", content: "Regras, ensaios, certificações e alterações de potência devem ser confirmados e executados por profissionais e entidades competentes quando aplicável." },
    ],
    relatedServices: ["instalacao-eletrica-completa", "quadros-eletricos-reabilitacao", "eletricidade"],
    relatedArticles: ["etapas-remodelacao-completa"],
  }),
  article({
    slug: "quando-substituir-canalizacao",
    title: "Quando substituir a canalização?",
    excerpt: "Como distinguir uma reparação localizada de uma rede que precisa de renovação.",
    category: "Instalações técnicas",
    readTime: "9 min",
    introduction:
      "Uma fuga isolada não significa necessariamente substituir tudo. Mas avarias repetidas, materiais degradados e uma remodelação profunda podem tornar a renovação da rede mais coerente.",
    sections: [
      { title: "Sinais de degradação", content: "Fugas recorrentes, água com alteração, perda de pressão e reparações sucessivas justificam avaliação do material e do traçado." },
      { title: "Aproveitar a remodelação", content: "Quando paredes e pavimentos já serão abertos, renovar tubagens antigas pode evitar danos futuros em acabamentos novos." },
      { title: "Traçado e acessibilidade", content: "Uma rede bem planeada reduz uniões ocultas desnecessárias e prevê válvulas de corte. O acesso futuro deve ser considerado." },
      { title: "Ensaiar antes de fechar", content: "Ligações e redes devem ser verificadas antes de rebocos, revestimentos e mobiliário. Fotografar traçados ajuda em manutenção futura." },
      { title: "Decisão informada", content: "O diagnóstico deve considerar idade, material, histórico e zonas acessíveis. A substituição parcial deve ser compatível com a rede mantida." },
    ],
    relatedServices: ["substituicao-tubagens", "reparacao-fugas-canalizacao", "canalizacao"],
    relatedArticles: ["identificar-resolver-infiltracoes"],
  }),
  article({
    slug: "tetos-falsos-divisorias-pladur",
    title: "Tetos falsos e divisórias em pladur",
    excerpt: "Tipos de placa, isolamento, reforços e erros a evitar.",
    category: "Interiores",
    readTime: "9 min",
    introduction:
      "O desempenho de um sistema de pladur depende da combinação de perfis, placas, isolamento, fixações e remates. Escolher apenas pela espessura visível é insuficiente.",
    sections: [
      { title: "Definir a função", content: "Regularizar um teto, criar uma divisão, melhorar acústica ou suportar mobiliário são objetivos diferentes e pedem sistemas específicos." },
      { title: "Tipos de placa", content: "Existem placas para uso corrente, zonas húmidas e necessidades especiais. A seleção deve corresponder ao ambiente e ao sistema completo." },
      { title: "Isolamento", content: "Lãs minerais podem melhorar comportamento térmico e acústico, mas continuidade, espessura, estrutura e remates determinam o resultado." },
      { title: "Reforços e instalações", content: "Móveis, televisores, portas e equipamentos pesados precisam de reforços previstos antes de fechar. Eletricidade e iluminação devem ser coordenadas." },
      { title: "Juntas e acabamento", content: "Tratamento de juntas, tempos de secagem e primário influenciam a pintura. Luz rasante evidencia irregularidades e deve ser considerada." },
    ],
    relatedServices: ["tetos-falsos-pladur", "divisorias-pladur-isolamento", "pladur"],
    relatedArticles: ["pintura-interior-preparacao-materiais-custos"],
  }),
  article({
    slug: "planear-remodelacao-sem-ultrapassar-orcamento",
    title: "Como planear uma remodelação sem ultrapassar o orçamento",
    excerpt: "Prioridades, escolhas antecipadas e controlo de alterações durante a obra.",
    category: "Custos e planeamento",
    readTime: "9 min",
    introduction:
      "Controlar o orçamento não significa escolher sempre o material mais barato. Significa reduzir incerteza, decidir a tempo e reservar recursos para o que não pode ser confirmado antes de abrir.",
    sections: [
      { title: "Defina prioridades", content: "Separe problemas técnicos, necessidades funcionais e desejos estéticos. Se for necessário cortar, esta hierarquia evita comprometer redes ou impermeabilização." },
      { title: "Feche escolhas críticas", content: "Equipamentos, formatos e materiais com impacto em medidas devem ser escolhidos antes da execução. Indecisão bloqueia equipas e gera retrabalho." },
      { title: "Use um mapa de trabalhos", content: "Quantidades, gamas, exclusões e responsabilidades tornam o orçamento controlável. Atualize o mapa quando houver alteração aprovada." },
      { title: "Reserve contingência", content: "A margem depende da idade do imóvel e do nível de conhecimento. Deve servir para imprevistos reais, não para itens esquecidos no orçamento." },
      { title: "Acompanhe decisões", content: "Registe alterações, impacto em preço e prazo antes de avançar. Reuniões curtas e informação organizada evitam decisões contraditórias." },
    ],
    relatedServices: ["remodelacao", "remodelacao-apartamentos", "remodelacao-moradias"],
    relatedArticles: ["como-comparar-orcamentos-obras", "erros-comuns-remodelacao"],
  }),
  article({
    slug: "erros-comuns-remodelacao",
    title: "Erros comuns numa remodelação",
    excerpt: "Decisões tardias, redes esquecidas e preparação insuficiente que podem ser evitadas.",
    category: "Guias de obra",
    readTime: "9 min",
    introduction:
      "Muitos problemas não resultam de uma única execução, mas de decisões tomadas fora de sequência. Planeamento e comunicação reduzem alterações, sem eliminar todos os imprevistos de um imóvel existente.",
    sections: [
      { title: "Começar sem âmbito fechado", content: "Demolir antes de definir distribuição, equipamentos e prioridades cria decisões urgentes e propostas incomparáveis." },
      { title: "Escolher só pelo total", content: "Um preço baixo pode excluir preparação, materiais, proteção ou reposições. Compare o conteúdo, não apenas o número final." },
      { title: "Fechar sem testar redes", content: "Canalização e eletricidade devem ser verificadas antes de revestir. Corrigir depois implica abrir trabalhos concluídos." },
      { title: "Ignorar secagens", content: "Argamassas, impermeabilizações, massas e tintas precisam de condições e tempos próprios. A pressa pode provocar fissuras, manchas ou fraca aderência." },
      { title: "Não formalizar alterações", content: "Mudanças verbais geram conflito sobre preço e prazo. Registe descrição, valor e impacto antes da execução." },
    ],
    relatedServices: ["remodelacao", "construcao"],
    relatedArticles: ["etapas-remodelacao-completa", "como-escolher-empresa-remodelacoes"],
  }),
];

export const publishedArticles = articles.filter(
  (item) => item.status === "published"
);

export const articleCategories = [
  ...new Set(publishedArticles.map((item) => item.category)),
];

export function getArticle(slug) {
  return publishedArticles.find((item) => item.slug === slug);
}
