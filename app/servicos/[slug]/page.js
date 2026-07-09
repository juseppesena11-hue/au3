import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import Calculator from "@/components/Calculator";
import ProjectCard from "@/components/ProjectCard";
import BenefitsGrid from "@/components/BenefitsGrid";
import ProcessSteps from "@/components/ProcessSteps";
import ProjectGallery from "@/components/ProjectGallery";
import RelatedServices from "@/components/RelatedServices";
import RelatedArticles from "@/components/RelatedArticles";
import RegionLinks from "@/components/RegionLinks";
import FaqSection from "@/components/FaqSection";
import ContactCta from "@/components/ContactCta";
import JsonLd from "@/components/JsonLd";
import { publishedServices, getService } from "@/data/services";
import { publishedSubservices, getSubservice } from "@/data/subservices";
import { publishedProjects } from "@/data/portfolio";
import { site } from "@/data/site";

function getAnyService(slug) {
  return getService(slug) || getSubservice(slug);
}

export function generateStaticParams() {
  return [...publishedServices, ...publishedSubservices].map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const service = getAnyService(params.slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `/servicos/${service.slug}` },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `/servicos/${service.slug}`,
      images: [service.image],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
      images: [service.image],
    },
  };
}

export default function ServicePage({ params }) {
  const service = getAnyService(params.slug);
  if (!service) notFound();
  const parent = service.parentService ? getService(service.parentService) : null;
  const budgetFactors = service.budgetFactors || [
    "área e estado atual do espaço",
    "acessos, proteções e demolições",
    "materiais, equipamentos e nível de acabamento",
    "especialidades envolvidas, urgência e IVA",
  ];
  const relatedProjects = publishedProjects
    .filter((project) =>
      project.relatedServices?.includes(service.slug) ||
      (parent ? project.relatedServices?.includes(parent.slug) : false)
    )
    .slice(0, 3);
  const breadcrumbs = [
    { label: "Serviços", href: "/servicos" },
    ...(parent ? [{ label: parent.title, href: `/servicos/${parent.slug}` }] : []),
    { label: service.title, href: `/servicos/${service.slug}` },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.excerpt,
    url: `${site.url}/servicos/${service.slug}`,
    provider: { "@id": `${site.url}/#contractor` },
    areaServed: ["Lisboa", "Setúbal", "Alentejo", "Algarve"],
    serviceType: service.title,
  };

  return (
    <>
      <PageHero
        eyebrow={parent ? `${parent.title} · Serviço especializado` : "Serviço"}
        title={service.headline}
        text={service.introduction}
        breadcrumbs={breadcrumbs}
        action={{
          label: "Enviar detalhes da obra",
          href: `/contactos?servico=${service.slug}#formulario`,
        }}
      />
      <JsonLd data={schema} />

      <section className="section-space">
        <div className="container-shell grid gap-14 lg:grid-cols-[1.2fr_.8fr]">
          <div className="space-y-14">
            <section>
              <p className="eyebrow">Quando é necessário</p>
              <h2 className="heading-md mt-3">Sinais e situações em que este serviço faz sentido</h2>
              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {service.problems.map((item) => (
                  <li key={item} className="flex gap-3 rounded-xl bg-sand/50 p-5">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            <BenefitsGrid items={service.benefits} />
          </div>
          <aside className="rounded-2xl bg-ink p-8 text-white lg:self-start">
            <Icon name={service.icon || parent?.icon || "hammer"} className="h-10 w-10 text-gold" />
            <p className="mt-7 text-xs font-bold uppercase tracking-[.2em] text-gold">O que pode incluir</p>
            <ul className="mt-5 space-y-4">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/75">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold" /> {item}
                </li>
              ))}
            </ul>
            <Link href={`/contactos?servico=${service.slug}#formulario`} className="button button-primary mt-7 w-full">
              Enviar pedido organizado
            </Link>
            <p className="mt-4 text-xs leading-5 text-white/45">
              Para uma resposta mais rápida, envie descrição, localização, fotografias e tipo de intervenção.
            </p>
          </aside>
        </div>
      </section>

      {service.gallery?.length > 0 && (
        <section className="section-space bg-mist/60">
          <div className="container-shell">
            <p className="eyebrow">Registo fotográfico</p>
            <h2 className="heading-md mt-3">Fotografias reais de trabalhos relacionados</h2>
            <p className="mt-5 max-w-3xl leading-7 text-ink/60">
              As imagens mostram intervenções reais e são usadas sem identificar cliente, morada ou localização da obra.
            </p>
            <div className="mt-9">
              <ProjectGallery images={service.gallery} title={service.title} />
            </div>
          </div>
        </section>
      )}

      <ProcessSteps steps={service.process} title="Como executamos e coordenamos este trabalho" />

      {service.detailSections?.length > 0 && (
        <section className="section-space">
          <div className="container-shell">
            <p className="eyebrow">Detalhes técnicos</p>
            <h2 className="heading-md mt-3">O que avaliamos neste tipo de intervenção</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {service.detailSections.map((section) => (
                <article key={section.title} className="rounded-2xl border border-ink/10 bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-bold">{section.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-ink/60">{section.content}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-3">
          <section>
            <p className="eyebrow">Materiais e soluções</p>
            <h2 className="heading-md mt-3">A escolha depende do suporte e da utilização</h2>
            <ul className="mt-7 space-y-4">
              {service.materials.map((item) => (
                <li key={item} className="flex gap-4 border-b border-ink/10 pb-4">
                  <Icon name="layers" className="h-5 w-5 shrink-0 text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-2xl border border-ink/10 bg-white p-7 md:p-9">
            <p className="eyebrow">Orçamento</p>
            <h2 className="mt-3 text-2xl font-bold">O que pode influenciar o valor</h2>
            <ul className="mt-6 space-y-4">
              {budgetFactors.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-ink/65">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-ink/50">
              Cada obra é avaliada individualmente. O orçamento depende do estado real do imóvel e do nível de intervenção necessário.
            </p>
          </section>
          <section className="rounded-2xl border border-gold/25 bg-gold/5 p-7 md:p-9">
            <p className="eyebrow">Cuidados técnicos</p>
            <h2 className="mt-3 text-2xl font-bold">O que deve ser confirmado antes de avançar</h2>
            <p className="mt-5 leading-8 text-ink/65">{service.limitations}</p>
            <p className="mt-5 text-sm leading-6 text-ink/50">
              Prazos e valores só podem ser fechados depois de avaliar área, materiais,
              acessos, estado existente e trabalhos complementares.
            </p>
          </section>
        </div>
      </section>

      {service.calculatorService && (
        <section className="section-space bg-mist/60">
          <div className="container-shell">
            <Calculator defaultService={service.calculatorService} compact />
          </div>
        </section>
      )}

      {relatedProjects.length > 0 && (
        <section className="section-space">
          <div className="container-shell">
            <p className="eyebrow">Obras relacionadas</p>
            <h2 className="heading-md mt-3">Projetos reais com trabalhos deste tipo</h2>
            <p className="mt-5 max-w-3xl leading-7 text-ink/60">
              As páginas de portfólio mostram fotografias reais e evitam publicar cliente, localização, preço, ano ou duração quando esses dados não estão confirmados.
            </p>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      <RelatedServices slugs={service.relatedServices} />
      <RegionLinks />
      <RelatedArticles slugs={service.relatedArticles} />
      <FaqSection faqs={service.faqs} />
      <ContactCta
        service={service.slug}
        title={`Vamos analisar o seu projeto de ${service.shortTitle.toLowerCase()}?`}
      />
    </>
  );
}
