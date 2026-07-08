import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import FaqSection from "@/components/FaqSection";
import ContactCta from "@/components/ContactCta";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";
import { publishedRegions, getRegion } from "@/data/regions";
import { getService } from "@/data/services";
import { site } from "@/data/site";

export function generateStaticParams() {
  return publishedRegions.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const region = getRegion(params.slug);
  if (!region) return {};
  return {
    title: region.seoTitle,
    description: region.seoDescription,
    alternates: { canonical: `/regioes/${region.slug}` },
    openGraph: {
      title: region.seoTitle,
      description: region.seoDescription,
      url: `/regioes/${region.slug}`,
    },
  };
}

export default function RegionPage({ params }) {
  const region = getRegion(params.slug);
  if (!region) notFound();
  const services = region.services.map(getService).filter(Boolean);
  const nearby = region.nearbyRegions.map(getRegion).filter(Boolean);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Serviços de construção e remodelação em ${region.name}`,
    description: region.seoDescription,
    url: `${site.url}/regioes/${region.slug}`,
    provider: { "@id": `${site.url}/#contractor` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: region.name,
    },
  };

  return (
    <>
      <PageHero
        eyebrow={region.type}
        title={region.seoTitle}
        text={region.lead}
        breadcrumbs={[
          { label: "Regiões", href: "/regioes" },
          { label: region.name, href: `/regioes/${region.slug}` },
        ]}
        action={{
          label: "Pedir orçamento nesta região",
          href: `/contactos?regiao=${region.slug}#formulario`,
        }}
      />
      <JsonLd data={schema} />
      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="eyebrow">Contexto da região</p>
            <h2 className="heading-md mt-3">Planeamento adaptado ao imóvel e ao local</h2>
            <p className="mt-6 text-lg leading-8 text-ink/65">{region.introduction}</p>
            <p className="mt-5 leading-8 text-ink/60">{region.localContext}</p>
          </div>
          <aside className="rounded-2xl bg-sand/55 p-7">
            <h2 className="text-xl font-bold">Intervenções frequentes</h2>
            <ul className="mt-5 space-y-4">
              {region.commonProjects.map((item) => (
                <li key={item} className="flex gap-3">
                  <Icon name="check" className="h-5 w-5 shrink-0 text-gold" /> {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <section className="section-space bg-mist/60">
        <div className="container-shell">
          <p className="eyebrow">Serviços na região</p>
          <h2 className="heading-md mt-3">Especialidades mais relevantes</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">Municípios</p>
            <h2 className="heading-md mt-3">Municípios e deslocação</h2>
            <p className="mt-5 leading-7 text-ink/60">
              {region.municipalities.length
                ? `A área de referência inclui ${region.municipalities.join(", ")}. A deslocação é confirmada de acordo com o local e o trabalho.`
                : "Contacte-nos com a localização da obra para avaliarmos a deslocação."}
            </p>
            <p className="mt-4 text-sm leading-6 text-ink/45">{site.serviceAreaNotice}</p>
          </div>
          <div>
            <p className="eyebrow">Áreas próximas</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {nearby.map((item) => (
                <Link key={item.slug} href={`/regioes/${item.slug}`} className="button button-ghost">
                  {item.name}
                </Link>
              ))}
              <Link href="/regioes" className="button button-dark">Todas as regiões</Link>
            </div>
          </div>
        </div>
      </section>
      <FaqSection faqs={region.faqs} title={`Perguntas sobre trabalhos em ${region.name}`} />
      <ContactCta region={region.slug} title={`Tem uma obra em ${region.name}?`} />
    </>
  );
}
