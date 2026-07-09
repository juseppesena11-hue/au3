# Auditoria técnica e de conteúdo

Data inicial: 3 de julho de 2026  
Atualização incremental: 9 de julho de 2026

## Estado preservado

Foram preservados:

- 14 serviços principais;
- 15 páginas especializadas;
- 18 artigos;
- 4 regiões publicadas;
- 22 municípios em draft;
- `/regioes`;
- `/portfolio/[slug]`;
- páginas legais;
- breadcrumbs;
- FAQs;
- schemas;
- canonical por rota;
- sitemap;
- robots;
- formulário validado;
- calculadora;
- menu;
- footer;
- CTA móvel;
- documentação existente.

Não foi feito redesign, não foram removidas rotas e não foram publicados drafts.

## Alterações executadas na atualização de 8 de julho de 2026

- Contactos reais configurados em `data/site.js`.
- Email antigo substituído por `juseppesena11@gmail.com`.
- Morada real adicionada ao site, footer, contactos, páginas legais e schema.
- Fotografias reais organizadas em `public/imagens/obras`.
- Catálogo central de imagens criado em `data/images.js`.
- Duas fotografias foram recortadas tecnicamente para reduzir risco de privacidade por matrículas/pessoa visível.
- 9 projetos reais iniciais adicionados ao portfólio.
- Projetos demonstrativos antigos mantidos como `draft` e `isReal: false`.
- Páginas de projeto ajustadas para não renderizar campos nulos.
- Serviços prioritários receberam fotografias reais, galerias e secções técnicas adicionais.
- Artigos prioritários receberam capas reais e conteúdo/FAQs aprofundados.
- Páginas legais reescritas com contactos e morada reais, sem notas internas visíveis.
- Promessas comerciais com “garantia” foram suavizadas.
- Calculadora reforçada com avisos de estimativa indicativa, visita técnica, orçamento detalhado e IVA a confirmar.
- Formulário reduzido para 3 imagens e 4 MB por imagem, no cliente e no servidor.
- Fallback WhatsApp melhorado com botão clicável.
- `.env.example` atualizado para os dados reais e variáveis vazias de SMTP.
- Sitemap atualizado para refletir projetos reais publicados e `updatedAt`.
- README, checklist e conteúdo pendente atualizados.

## Alterações executadas na atualização de 9 de julho de 2026

- Home refinada para reduzir aparência de catálogo/template, com entrada por problema, processo de trabalho, documentação fotográfica e orientação sobre visita técnica.
- Hero atualizado para posicionar a Aureon como coordenação de obras, diagnóstico e execução por especialidade.
- Páginas de serviço passaram a mostrar quando o serviço é necessário, como é executado, fatores que influenciam orçamento, FAQs específicas e projetos reais relacionados quando existem.
- Serviços prioritários receberam textos mais técnicos e menos genéricos.
- Portfólio real passou a apresentar nota de privacidade, pontos técnicos e resultado visível documentado, sem publicar campos não confirmados.
- Calculadora reforçada com aviso de estimativa indicativa, urgência/IVA/estado do imóvel e envio estruturado de dados para o formulário.
- Formulário preservado; mensagens de fallback WhatsApp ajustadas sem alterar SMTP ou variáveis.
- CTAs ajustados para “enviar detalhes da obra”, “enviar pedido” e “enviar pelo WhatsApp”.
- Artigos passaram a ligar diretamente para calculadora e formulário a partir do template.
- Página Sobre nós refinada para explicar diagnóstico, coordenação e revisão sem promessas vagas.
- Metadata geral refinada para refletir remodelações, reparações e coordenação técnica.

## Observações sobre fotografias

As fotografias publicadas não devem indicar localização, cliente, seguradora, ano, valor, prazo ou área quando esses dados não estiverem confirmados. A publicação deve continuar prudente: sem rostos identificáveis, matrículas, documentos ou dados pessoais.

## Limitações conhecidas

- O rate limit do formulário continua básico e em memória por instância.
- SMTP ainda depende de configuração real na Vercel.
- IVA da calculadora ainda precisa de confirmação comercial.
- Preços da calculadora ainda precisam de validação pelo proprietário.
- Páginas legais são prudentes, mas devem ser validadas antes da publicação final.
- Google Analytics não está ativo; apenas preparado por variável.
- O ramo Next.js 14 tinha risco residual identificado por `npm audit` na auditoria anterior; a atualização major para Next.js 16 deve ser planeada numa fase própria.

## Estado de segurança/conteúdo

- Não foram inventados NIF, testemunhos, clientes, seguradoras, certificações, anos de experiência, preços finais, prazos, áreas ou localizações de obras.
- Os projetos reais não mostram valor, cliente, localização, ano, área ou duração.
- Drafts continuam fora do sitemap.
