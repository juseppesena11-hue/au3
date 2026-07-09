import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import Calculator from "@/components/Calculator";
import ProjectCard from "@/components/ProjectCard";
import ArticleCard from "@/components/ArticleCard";
import RegionLinks from "@/components/RegionLinks";
import ContactCta from "@/components/ContactCta";
import JsonLd from "@/components/JsonLd";
import { publishedServices } from "@/data/services";
import { projects, publishedProjects } from "@/data/portfolio";
import { publishedArticles } from "@/data/articles";
import { publishedRegions } from "@/data/regions";
import { workImages } from "@/data/images";
import { site } from "@/data/site";

export const metadata = {
  alternates: { canonical: "/" },
};

const problemLinks = [
  {
    title: "Tenho uma infiltração ou rutura",
    text: "Começamos por perceber a origem provável antes de regularizar e pintar.",
    href: "/servicos/seguros-ruturas-infiltracoes",
    icon: "drop",
  },
  {
    title: "Quero remodelar uma casa de banho",
    text: "Canalização, impermeabilização, base de duche, revestimentos e acabamentos.",
    href: "/servicos/casas-de-banho",
    icon: "bath",
  },
  {
    title: "Quero remodelar uma cozinha",
    text: "Preparação, redes, iluminação, móveis, bancada e integração funcional.",
    href: "/servicos/cozinhas",
    icon: "kitchen",
  },
  {
    title: "Preciso rever um telhado",
    text: "Telhas, rufos, caleiras, claraboias, remates e pontos de entrada de água.",
    href: "/servicos/telhados-impermeabilizacao",
    icon: "roof",
  },
  {
    title: "Vou remodelar um apartamento",
    text: "Proteção de zonas habitadas, fases de obra e coordenação de especialidades.",
    href: "/servicos/remodelacao-apartamentos",
    icon: "hammer",
  },
  {
    title: "Preciso de pintura ou acabamentos",
    text: "Preparação de superfícies, correção de fissuras, primário e pintura adequada.",
    href: "/servicos/pinturas",
    icon: "paint",
  },
];

const workflowSteps = [
  ["01", "Diagnóstico inicial", "Recolhemos descrição, fotografias, localização e prioridade do pedido."],
  ["02", "Levantamento e orçamento", "Confirmamos âmbito, condicionantes, materiais e trabalhos complementares."],
  ["03", "Planeamento da intervenção", "Organizamos sequência, acessos, equipas, proteções e fornecimentos."],
  ["04", "Coordenação das equipas", "Articulamos especialidades como canalização, eletricidade, pladur, pintura e acabamentos."],
  ["05", "Revisão e entrega", "Revemos os trabalhos contratados e registamos pontos relevantes quando aplicável."],
];

const analysisChecks = [
  "estado atual e origem provável do problema",
  "acessos, proteção de zonas existentes e gestão de resíduos",
  "materiais existentes e compatibilidade com a solução",
  "especialidades envolvidas e sequência mais segura",
  "necessidade de visita técnica antes de fechar orçamento",
];

const visitReasons = [
  "há humidade ativa, rutura, cheiro ou manchas recentes",
  "a obra envolve canalização, eletricidade, telhado ou impermeabilização",
  "existem demolições, alterações de layout ou várias especialidades",
  "as fotografias não permitem perceber acessos, medidas ou estado do suporte",
];

export default function HomePage() {
  const highlightedProjects = (publishedProjects.length ? publishedProjects : projects).slice(0, 6);

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Aureon Construção",
        url: site.url,
        description: "Coordenação de remodelações, reparações e intervenções técnicas com equipas especializadas.",
      }} />
      <section className="hero">
        <div className="hero-grid" />
        <div className="container-shell relative z-10 flex min-h-[inherit] items-center py-20">
          <div className="max-w-[760px]">
            <p className="eyebrow text-gold">Remodelações · Reparações · Intervenções técnicas</p>
            <h1 className="heading-xl mt-6 text-white">
              Obras coordenadas com rigor, <span className="text-gold">do diagnóstico à entrega.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              Remodelações, infiltrações, telhados, cozinhas e casas de banho com equipas
              especializadas, documentação fotográfica quando aplicável e um ponto de
              coordenação para acompanhar cada fase.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contactos#formulario" className="button button-primary">
                Enviar detalhes da obra <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="button border border-white/25 text-white hover:bg-white hover:text-ink">
                Falar pelo WhatsApp
              </a>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/55">
              Para uma resposta mais rápida, envie descrição, localização, fotografias e tipo de intervenção.
            </p>
            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/15 pt-7">
              <div className="metric-card"><strong>{publishedProjects.length}</strong><span>obras reais publicadas</span></div>
              <div className="metric-card"><strong>{publishedServices.length}</strong><span>especialidades principais</span></div>
              <div className="metric-card"><strong>1</strong><span>coordenação central</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <SectionHeading
              eyebrow="Comece pelo problema"
              title="Nem sempre o cliente sabe o nome técnico do serviço — e não precisa."
              text="A primeira avaliação parte do que está a acontecer no imóvel: mancha, fuga, telhado degradado, cozinha pouco funcional, casa de banho antiga ou interiores a precisar de acabamento."
            />
            <div className="rounded-2xl bg-sand/50 p-6 text-sm leading-7 text-ink/65 md:p-8">
              <strong className="block text-ink">O que analisamos antes de orçamentar</strong>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {analysisChecks.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {problemLinks.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-soft ${index === 0 ? "lg:col-span-2" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sand text-gold transition group-hover:bg-gold group-hover:text-white">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink/60">{item.text}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy">
                      Ver abordagem <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-ink text-white">
        <div className="container-shell grid lg:grid-cols-2">
          <div className="relative min-h-[460px] lg:min-h-[720px]">
            <Image
              src={workImages.openSpaceFinal.src}
              alt={workImages.openSpaceFinal.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink" />
            <div className="absolute bottom-7 left-7 max-w-xs rounded-xl border border-white/20 bg-ink/75 p-5 backdrop-blur">
              <Icon name="shield" className="h-8 w-8 text-gold" />
              <strong className="mt-3 block text-lg">Uma obra. Várias especialidades. Um ponto de coordenação.</strong>
              <span className="mt-2 block text-sm leading-6 text-white/60">
                O cliente não tem de gerir cada equipa em separado.
              </span>
            </div>
          </div>
          <div className="flex items-center py-16 lg:py-24 lg:pl-16">
            <div>
              <SectionHeading
                eyebrow="Como trabalhamos"
                title="Coordenação prática, sem promessas vagas."
                text="Antes de iniciar, avaliamos estado da zona, acessos, materiais existentes, especialidades necessárias e sequência provável dos trabalhos."
                light
              />
              <div className="mt-10 grid gap-7 sm:grid-cols-2">
                {[
                  ["Diagnóstico", "Recolhemos sinais visíveis, fotografias e contexto para evitar respostas apressadas."],
                  ["Planeamento", "Definimos fases, proteções, materiais e trabalhos que dependem uns dos outros."],
                  ["Execução", "Organizamos profissionais por especialidade conforme o tipo de intervenção."],
                  ["Revisão", "Confirmamos o âmbito executado e os pontos relevantes antes de concluir."],
                ].map(([title, text]) => (
                  <div key={title}>
                    <Icon name="check" className="h-6 w-6 text-gold" />
                    <h3 className="mt-4 font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
                  </div>
                ))}
              </div>
              <Link href="/sobre-nos" className="button button-primary mt-10">
                Conhecer a abordagem da Aureon
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-sand/45">
        <div className="container-shell">
          <SectionHeading eyebrow="Processo" title="Do pedido inicial à revisão final" center />
          <div className="mt-14 grid gap-10 md:grid-cols-5">
            {workflowSteps.map(([number, title, text]) => (
              <div key={number} className="number-step" data-number={number}>
                <h3 className="font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Documentação fotográfica</p>
            <h2 className="heading-md mt-3">Por que as fotografias importam numa intervenção técnica</h2>
            <p className="mt-5 leading-8 text-ink/60">
              Sempre que aplicável, registamos o estado inicial, as fases críticas da intervenção
              e o resultado final. Isto ajuda o cliente a compreender o que foi feito e é
              especialmente útil em infiltrações, ruturas, telhados, reparações e remodelações com várias fases.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Antes", "Identificar sinais, danos e estado do suporte."],
                ["Durante", "Acompanhar abertura, reparação, regularização ou montagem."],
                ["Depois", "Mostrar acabamento, zona reposta e resultado visível."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-ink/10 p-5">
                  <strong className="text-gold">{title}</strong>
                  <p className="mt-2 text-sm leading-6 text-ink/60">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <Image
                src={workImages.infiltracaoAntes.src}
                alt={workImages.infiltracaoAntes.alt}
                width={workImages.infiltracaoAntes.width}
                height={workImages.infiltracaoAntes.height}
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="h-72 w-full object-cover"
              />
              <figcaption className="px-5 py-4 text-sm text-ink/55">Estado inicial documentado.</figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl bg-white shadow-sm sm:translate-y-8">
              <Image
                src={workImages.infiltracaoDepois.src}
                alt={workImages.infiltracaoDepois.alt}
                width={workImages.infiltracaoDepois.width}
                height={workImages.infiltracaoDepois.height}
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="h-72 w-full object-cover"
              />
              <figcaption className="px-5 py-4 text-sm text-ink/55">Resultado após reposição do acabamento.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section-space bg-mist/60">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Estimativa ou visita?"
                title="A calculadora ajuda a enquadrar. A visita fecha o orçamento."
                text="Use a calculadora para ter uma referência inicial. Peça avaliação quando existem dúvidas sobre estado do imóvel, acessos, materiais, demolições, urgência ou várias especialidades."
              />
              <div className="mt-7 rounded-2xl bg-white p-6 shadow-sm">
                <strong className="block text-ink">Quando pedir visita técnica</strong>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-ink/60">
                  {visitReasons.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Calculator />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Especialidades coordenadas"
              title="Serviços principais, tratados como partes da mesma obra"
              text="Da estrutura aos acabamentos, a intervenção é organizada por especialidade para reduzir retrabalho e melhorar a sequência de execução."
            />
            <Link href="/servicos" className="button button-ghost shrink-0">
              Ver todos os serviços <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {publishedServices.slice(0, 6).map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      <section className="section-space bg-mist/60">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <SectionHeading
              eyebrow={publishedProjects.length ? "Obras reais documentadas" : "Portfólio em preparação"}
              title={publishedProjects.length ? "Registos de intervenção, não imagens genéricas" : "Tipos de projetos que executamos"}
              text={publishedProjects.length ? "Projetos apresentados sem identificação de cliente ou localização quando esses dados não estão confirmados para publicação." : "Os casos reais serão publicados após seleção e autorização das fotografias."}
            />
            <Link href="/portfolio" className="button button-ghost shrink-0">Explorar portfólio</Link>
          </div>
          <div className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {highlightedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} link={publishedProjects.length > 0} />
            ))}
          </div>
        </div>
      </section>

      <RegionLinks />

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Guias práticos"
            title="Decida melhor antes de começar"
            text="Guias sobre custos, infiltrações, telhados, pladur e comparação de orçamentos — escritos para ajudar a preparar pedidos mais claros."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {publishedArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        title="Quer enviar detalhes da sua obra?"
        text="Envie descrição, localização e fotografias. Se for necessário, avançamos para visita técnica antes do orçamento final."
      />
    </>
  );
}
