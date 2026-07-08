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
import { site } from "@/data/site";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Aureon Construção",
        url: site.url,
        description: "Construção, remodelação e gestão completa de especialidades.",
      }} />
      <section className="hero">
        <div className="hero-grid" />
        <div className="container-shell relative z-10 flex min-h-[inherit] items-center py-20">
          <div className="max-w-[730px]">
            <p className="eyebrow text-gold">Construção · Remodelação · Gestão completa</p>
            <h1 className="heading-xl mt-6 text-white">
              Construímos com rigor. <span className="text-gold">Entregamos confiança.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              Profissionais especializados em todas as áreas da obra, coordenados por uma
              equipa responsável do primeiro plano ao último detalhe.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contactos#formulario" className="button button-primary">Pedir orçamento <Icon name="arrow" className="h-4 w-4" /></Link>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="button border border-white/25 text-white hover:bg-white hover:text-ink">Enviar fotos pelo WhatsApp</a>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/15 pt-7">
              <div className="metric-card"><strong>{publishedRegions.length}</strong><span>regiões de atuação</span></div>
              <div className="metric-card"><strong>{publishedServices.length}</strong><span>especialidades principais</span></div>
              <div className="metric-card"><strong>1</strong><span>coordenação central</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Tudo num só lugar"
              title="A equipa certa para cada etapa da obra"
              text="Da estrutura aos acabamentos, coordenamos profissionais especializados para manter qualidade, organização e comunicação clara."
            />
            <Link href="/servicos" className="button button-ghost shrink-0">Ver todos os serviços <Icon name="arrow" className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {publishedServices.slice(0, 6).map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-ink text-white">
        <div className="container-shell grid lg:grid-cols-2">
          <div className="relative min-h-[460px] lg:min-h-[720px]">
            <Image src="/hero-aureon.webp" alt="Obra acompanhada pela Aureon Construção" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-[70%_center]" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink" />
            <div className="absolute bottom-7 left-7 rounded-xl border border-white/20 bg-ink/75 p-5 backdrop-blur">
              <Icon name="shield" className="h-8 w-8 text-gold" />
              <strong className="mt-3 block text-lg">Responsabilidade única</strong>
              <span className="mt-1 block text-sm text-white/60">Uma empresa coordena toda a obra.</span>
            </div>
          </div>
          <div className="flex items-center py-16 lg:py-24 lg:pl-16">
            <div>
              <SectionHeading
                eyebrow="Porquê a Aureon"
                title="Mais controlo. Menos imprevistos."
                text="Não somos apenas uma equipa de obra. Somos a empresa responsável por organizar pessoas, materiais, prazos e soluções."
                light
              />
              <div className="mt-10 grid gap-7 sm:grid-cols-2">
                {[
                  ["Especialistas por área", "Cada tarefa é executada por quem domina a respetiva especialidade."],
                  ["Gestão integral", "Planeamento, supervisão e coordenação num único ponto de contacto."],
                  ["Orçamento transparente", "Soluções claras, adequadas ao objetivo e ao nível de acabamento."],
                  ["Acompanhamento", "Revemos consigo os trabalhos incluídos antes da conclusão."],
                ].map(([title, text]) => (
                  <div key={title}>
                    <Icon name="check" className="h-6 w-6 text-gold" />
                    <h3 className="mt-4 font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-sand/45">
        <div className="container-shell">
          <SectionHeading eyebrow="Processo" title="Da primeira visita à entrega final" center />
          <div className="mt-14 grid gap-10 md:grid-cols-5">
            {[
              ["01", "Avaliação", "Visitamos e compreendemos o espaço."],
              ["02", "Orçamento", "Detalhamos escopo e soluções."],
              ["03", "Planeamento", "Coordenamos fases e equipas."],
              ["04", "Execução", "Trabalhamos com rigor técnico."],
              ["05", "Entrega", "Revemos consigo os trabalhos contratados."],
            ].map(([number, title, text]) => (
              <div key={number} className="number-step" data-number={number}>
                <h3 className="font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <Calculator />
        </div>
      </section>

      <section className="section-space bg-mist/60">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <SectionHeading
              eyebrow={publishedProjects.length ? "Portfólio real" : "Portfólio em preparação"}
              title={publishedProjects.length ? "Projetos reais documentados" : "Tipos de projetos que executamos"}
              text={publishedProjects.length ? "Trabalhos com informação e imagens confirmadas." : "Os casos reais serão publicados após seleção e autorização das fotografias."}
            />
            <Link href="/portfolio" className="button button-ghost shrink-0">Explorar portfólio</Link>
          </div>
          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {(publishedProjects.length ? publishedProjects : projects).slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} link={publishedProjects.length > 0} />
            ))}
          </div>
        </div>
      </section>

      <RegionLinks />

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading eyebrow="Guias práticos" title="Decida melhor antes de começar" text="Informação direta sobre preços, materiais, prevenção e planeamento de obra." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {publishedArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <ContactCta title="Tem uma obra em mente?" />
    </>
  );
}
