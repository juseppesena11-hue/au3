# Aureon Construção

Site institucional em Next.js 14, React 18, JavaScript e Tailwind CSS para a Aureon Construção.

## Requisitos

- Node.js 18.17 ou superior
- npm

## Instalação e desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validação e produção

```bash
npm run lint
npm run build
npm start
```

## Onde alterar contactos

Os dados comerciais centrais estão em `data/site.js`:

- nome comercial;
- telefone e WhatsApp;
- email;
- morada;
- domínio;
- aviso da calculadora sobre IVA e condições fiscais.

Contacto atual configurado:

- Telefone / WhatsApp: `+351 926 378 947`
- Email: `Juseppena11@gmail.com`
- Morada: `Rua Ipanema 193, Anexo 2, 2785-174 São Domingos de Rana, Portugal`
- Domínio: `https://aureon.pt`

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha apenas localmente:

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`: servidor de email.
- `CONTACT_TO`: destinatário dos pedidos, atualmente `Juseppena11@gmail.com`.
- `NEXT_PUBLIC_SITE_URL`: URL pública, normalmente `https://aureon.pt`.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: código do Search Console.
- `NEXT_PUBLIC_GA_ID`: reservado para futura integração de analytics; definir a variável não ativa analytics.

Nunca publique credenciais. Sem SMTP, o formulário mostra um botão visível para enviar o pedido pelo WhatsApp.

## SMTP na Vercel

Na Vercel, configure as variáveis em **Project Settings > Environment Variables**. Depois do deploy:

1. teste o formulário sem anexos;
2. teste com até 3 imagens;
3. confirme que o pedido chega ao email configurado;
4. teste o fallback WhatsApp removendo temporariamente uma variável SMTP num ambiente de teste.

O rate limit atual é básico e em memória por instância. Ajuda contra abuso simples, mas não substitui proteção externa se o site receber ataques ou volume elevado.

## Conteúdo e estados

Os conteúdos usam `status: "published"` ou `status: "draft"`. Só conteúdos publicados entram nas páginas públicas, parâmetros estáticos e sitemap.

### Serviços

- Serviços principais: `data/services.js`
- Serviços especializados: `data/subservices.js`

Cada serviço deve ter texto próprio, FAQ, relações, SEO e `updatedAt`. Use `draft` até o conteúdo estar revisto.

### Regiões

As regiões estão em `data/regions.js`. Existem 4 regiões publicadas e 22 municípios preparados como draft. Não publique municípios sem confirmação real e conteúdo próprio.

### Blog

Os artigos estão em `data/articles.js`. Artigos prioritários podem receber capa real através de `data/images.js`.

### Imagens reais

As fotografias reais estão centralizadas em:

```text
public/imagens/obras
```

O mapa lógico das imagens está em `data/images.js`, com `src`, `alt`, `width` e `height`. Use este ficheiro para reutilizar fotos em serviços, artigos e portfólio, evitando caminhos duplicados.

Antes de publicar novas imagens:

- remover ou recortar rostos identificáveis;
- remover matrículas, documentos e moradas visíveis;
- confirmar autorização de uso;
- converter para WebP;
- manter peso reduzido;
- escrever alt text específico e verdadeiro;
- não inventar localizações.

### Portfólio

Os projetos estão em `data/portfolio.js`.

Para adicionar uma obra real:

1. coloque as imagens em `public/imagens/obras` ou numa pasta própria organizada;
2. adicione as imagens ao catálogo `data/images.js`;
3. crie o projeto em `data/portfolio.js`;
4. preencha `coverImage`, `coverAlt`, `gallery`, `summary`, `challenge`, `solution` e `relatedServices`;
5. use `location`, `year`, `duration`, `materials` ou outros campos apenas quando confirmados para publicação;
6. defina `isReal: true` e `status: "published"` apenas com autorização;
7. mantenha projetos não confirmados como `status: "draft"`.

Os projetos demonstrativos antigos continuam em draft e não entram no sitemap.

## Formulário

O formulário aceita até 3 imagens JPEG, PNG ou WebP, com 4 MB por ficheiro. Inclui:

- validação no cliente e servidor;
- honeypot;
- consentimento;
- validação MIME;
- limite básico por IP;
- fallback WhatsApp com link clicável.

Não guardar dados pessoais em logs. Os anexos servem apenas para análise inicial do pedido.

## Calculadora

A calculadora apresenta estimativas indicativas, não preços fechados. O texto público deve manter claro:

- não substitui visita técnica;
- valores podem variar por estado do imóvel, acessos, materiais, demolições, resíduos, especialidades e IVA;
- IVA e condições fiscais a confirmar no orçamento.

Os preços da calculadora precisam de validação comercial antes de publicação final.

## Vercel e domínio

1. Envie o repositório para GitHub.
2. Importe-o na Vercel como projeto Next.js.
3. Configure as variáveis de ambiente.
4. Faça deploy e teste formulário, metadata, sitemap e robots.
5. Em **Settings > Domains**, adicione `aureon.pt` e siga os registos DNS indicados.
6. Confirme que previews enviam `noindex` através do `robots.txt`.

## Google Search Console

1. Crie uma propriedade para `https://aureon.pt`.
2. Valide o domínio ou defina `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
3. Depois do deploy, envie `https://aureon.pt/sitemap.xml`.

## Analytics opcional

Não existe analytics ativo nem banner de cookies. Antes de integrar GA4:

1. validar a necessidade e a política de privacidade;
2. implementar consentimento para cookies não essenciais;
3. atualizar CSP;
4. só carregar o script depois do consentimento;
5. documentar fornecedor, finalidade e conservação.

Consulte também `AUDITORIA.md`, `CONTEUDO-PENDENTE.md` e `CHECKLIST-PUBLICACAO.md`.
