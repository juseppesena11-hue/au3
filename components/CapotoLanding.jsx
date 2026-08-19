import Link from "next/link";
import Calculator from "./Calculator";
import ContactCta from "./ContactCta";
import FaqSection from "./FaqSection";
import Icon from "./Icon";
import JsonLd from "./JsonLd";
import RelatedArticles from "./RelatedArticles";
import RelatedServices from "./RelatedServices";
import RegionLinks from "./RegionLinks";
import { site } from "@/data/site";

const locations = [
  "Lisboa",
  "Setúbal",
  "Almada",
  "Seixal",
  "Barreiro",
  "Montijo",
  "Palmela",
  "Sesimbra",
  "Amadora",
  "Sintra",
  "Cascais",
  "Oeiras",
];

const systemLayers = [
  {
    title: "Preparação do suporte",
    text: "A fachada é avaliada e preparada antes da colagem. Revestimentos soltos, fissuras, humidade e contaminação não devem ficar escondidos sob o sistema.",
  },
  {
    title: "Isolamento e fixação",
    text: "As placas, a espessura, a colagem e a fixação são definidas para o suporte e para o sistema ETICS previsto.",
  },
  {
    title: "Rede e camada de base",
    text: "A rede de reforço, os perfis e as camadas de base ajudam a criar continuidade e resistência antes do acabamento.",
  },
  {
    title: "Remates e acabamento",
    text: "Vãos, peitoris, arranques, coroamentos e encontros com outros elementos exigem remates cuidados para limitar entrada de água e pontes térmicas.",
  },
];

export default function CapotoLanding({ service, schema }) {
  const contactHref = `/contactos?servico=${service.slug}#formulario`;
  const whatsappHref = `${site.whatsappBase}?text=${encodeURIComponent(
    "Olá Aureon. Gostaria de pedir uma avaliação para aplicação ou reparação de Capoto / ETICS."
  )}`;

  return (
    <>
      <JsonLd data={schema} />

      <section className="relative overflow-hidden bg-ink py-16 text-white md:py-24">
        <div className="absolute inset-0 opacity-[.07]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="absolute -right-24 -top-40 h-[460px] w-[460px] rounded-full bg-gold/20 blur-3xl" />
        <div className="container-shell relative grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <nav aria-label="Navegação estrutural" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/50">
              <Link href="/" className="hover:text-white">Início</Link>
              <span aria-hidden="true">/</span>
              <Link href="/servicos" className="hover:text-white">Serviços</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white">Capoto / ETICS</span>
            </nav>
            <p className="eyebrow">Isolamento térmico exterior</p>
            <h1 className="heading-xl mt-5 max-w-4xl text-white">Capoto em Lisboa e Setúbal</h1>
            <p className="mt-6 max-w-3xl text-xl font-semibold text-gold">Aplicação e reparação de sistemas ETICS</p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">
              Avaliamos fachadas de moradias e prédios para melhorar o conforto térmico, proteger o exterior e resolver degradações do sistema existente. Envie localização, área aproximada e fotografias para uma primeira análise.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={contactHref} className="button button-primary">Pedir orçamento de Capoto <Icon name="arrow" className="h-4 w-4" /></Link>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="button border border-white/30 text-white hover:bg-white hover:text-ink">Enviar fotografias por WhatsApp</a>
            </div>
            <ul className="mt-9 grid gap-3 text-sm text-white/65 sm:grid-cols-3">
              {["Orçamento detalhado", "Moradias e prédios", "Lisboa e Setúbal"].map((item) => (
                <li key={item} className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-gold" /> {item}</li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-white/[.06] p-7 backdrop-blur md:p-9">
            <Icon name="shield" className="h-10 w-10 text-gold" />
            <h2 className="mt-6 text-2xl font-bold">Que trabalho procura?</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-white/70">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3"><Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold" /> {item}</li>
              ))}
            </ul>
            <p className="mt-6 border-t border-white/10 pt-6 text-xs leading-5 text-white/45">O valor final depende do suporte, área, espessura, acessos, andaimes, remates, acabamento e trabalhos complementares.</p>
          </aside>
        </div>
      </section>

      <nav aria-label="Conteúdo desta página" className="border-b border-ink/10 bg-white">
        <div className="container-shell flex gap-6 overflow-x-auto py-5 text-sm font-bold text-ink/65">
          <a href="#o-que-e" className="whitespace-nowrap hover:text-gold">O que é</a>
          <a href="#vantagens" className="whitespace-nowrap hover:text-gold">Vantagens</a>
          <a href="#sistema" className="whitespace-nowrap hover:text-gold">Como aplicamos</a>
          <a href="#preco" className="whitespace-nowrap hover:text-gold">Preço e estimativa</a>
          <a href="#zonas" className="whitespace-nowrap hover:text-gold">Zonas</a>
          <a href="#perguntas" className="whitespace-nowrap hover:text-gold">Perguntas</a>
        </div>
      </nav>

      <section id="o-que-e" className="section-space scroll-mt-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Capoto ou ETICS</p>
            <h2 className="heading-lg mt-3">Isolamento contínuo aplicado pelo exterior da fachada</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-ink/65">
            <p>Capoto é o nome corrente do sistema ETICS: uma solução composta por placas de isolamento, colagem e fixação, camada de base armada com rede, primário e acabamento exterior compatível.</p>
            <p>Ao envolver a parede pelo exterior, o sistema pode reduzir perdas térmicas e limitar pontes térmicas, sem retirar área útil ao interior. A solução deve ser dimensionada para o edifício e executada com continuidade nos remates.</p>
            <p className="rounded-xl border-l-4 border-gold bg-sand/50 p-5 text-base"><strong className="text-ink">Importante:</strong> o ETICS não resolve sozinho infiltrações de cobertura, fugas, ventilação insuficiente ou humidade ascendente. Essas origens devem ser diagnosticadas antes.</p>
          </div>
        </div>
      </section>

      <section id="vantagens" className="section-space scroll-mt-28 bg-mist/60">
        <div className="container-shell">
          <p className="eyebrow">Quando faz sentido</p>
          <h2 className="heading-lg mt-3 max-w-3xl">Conforto térmico, proteção e renovação da fachada</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Paredes interiores frias", "Ajuda a aumentar a temperatura superficial das paredes exteriores quando o sistema é adequado ao edifício."],
              ["Perdas térmicas", "Cria uma camada de isolamento contínua pelo exterior e pode limitar pontes térmicas."],
              ["Condensação superficial", "Pode reduzir o risco associado a superfícies frias, em conjunto com ventilação e utilização adequadas."],
              ["Fachada degradada", "Permite preparar e renovar o revestimento exterior como parte de uma intervenção organizada."],
              ["Reabilitação de moradias", "Melhora a envolvente sem consumir espaço interior e com menor interferência dentro da habitação."],
              ["Reparação de Capoto", "Fissuras, impactos, remates ou zonas destacadas exigem diagnóstico antes de uma reparação localizada."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-ink/10 bg-white p-7">
                <Icon name="shield" className="h-7 w-7 text-gold" />
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sistema" className="section-space scroll-mt-28">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Execução do sistema</p>
            <h2 className="heading-lg mt-3">O resultado depende das camadas e, sobretudo, dos detalhes</h2>
            <p className="mt-5 leading-8 text-ink/60">A solução é avaliada como um sistema completo. Misturar componentes incompatíveis ou ignorar os remates pode comprometer desempenho e durabilidade.</p>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-2">
            {systemLayers.map((item, index) => (
              <li key={item.title} className="rounded-2xl border border-ink/10 p-7 md:p-9">
                <span className="text-xs font-extrabold uppercase tracking-[.2em] text-gold">Etapa {index + 1}</span>
                <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-ink/60">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="preco" className="section-space scroll-mt-28 bg-mist/60">
        <div className="container-shell">
          <div className="mb-10 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Preço de Capoto por m²</p>
              <h2 className="heading-lg mt-3">Uma referência inicial, não um preço fechado</h2>
            </div>
            <div>
              <p className="leading-8 text-ink/65">Área, estado da fachada, espessura e tipo de isolamento, andaimes, acessos, peitoris, tubos, caixas de estore, varandas, acabamento e reparações prévias alteram o valor. Use a calculadora para organizar uma referência e envie fotografias para validar o enquadramento.</p>
            </div>
          </div>
          <Calculator defaultService="capoto" defaultSpace="exterior" compact />
        </div>
      </section>

      <section id="zonas" className="section-space scroll-mt-28">
        <div className="container-shell grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Áreas de atuação</p>
            <h2 className="heading-md mt-3">Capoto em Lisboa, Setúbal e concelhos próximos</h2>
            <p className="mt-5 leading-7 text-ink/60">Confirme a morada ou o concelho no pedido. A disponibilidade depende do âmbito, acessos e planeamento da equipa.</p>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {locations.map((location) => (
              <li key={location} className="flex items-center gap-2 rounded-xl border border-ink/10 bg-white p-4 font-semibold"><Icon name="location" className="h-4 w-4 shrink-0 text-gold" /> {location}</li>
            ))}
          </ul>
        </div>
      </section>

      <RelatedServices slugs={service.relatedServices} />
      <RegionLinks />
      <RelatedArticles slugs={service.relatedArticles} />
      <div id="perguntas" className="scroll-mt-28"><FaqSection faqs={service.faqs} title="Perguntas frequentes sobre Capoto / ETICS" /></div>
      <ContactCta service={service.slug} title="Quer avaliar uma fachada para Capoto?" text="Envie localização, área aproximada e fotografias da fachada para uma primeira análise." />
    </>
  );
}
