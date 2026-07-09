import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import Calculator from "@/components/Calculator";
import CtaBand from "@/components/CtaBand";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { publishedServices } from "@/data/services";
import { publishedSubservices } from "@/data/subservices";
import { site } from "@/data/site";

export const metadata = {
  title: "Serviços",
  description: "Serviços de remodelação, reparação e intervenção técnica organizados por especialidade pela Aureon Construção.",
  alternates: { canonical: "/servicos" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Especialidades coordenadas para obras reais"
        text="Remodelações, reparações, infiltrações, telhados, cozinhas, casas de banho e acabamentos com avaliação do estado real do imóvel antes do orçamento final."
        breadcrumbs={[{ label: "Serviços", href: "/servicos" }]}
        action={{ label: "Calcular uma estimativa", href: "#calculadora" }}
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Serviços da Aureon Construção",
        url: `${site.url}/servicos`,
        hasPart: publishedServices.map((service) => ({
          "@type": "Service",
          name: service.title,
          url: `${site.url}/servicos/${service.slug}`,
        })),
      }} />
      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Serviços principais"
            title="Da origem do problema ao acabamento"
            text="Selecione um serviço para perceber quando faz sentido, como executamos, o que influencia o orçamento e que obras reais estão relacionadas."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {publishedServices.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>
      <section className="section-space bg-sand/45">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Necessidades específicas"
            title="Serviços especializados"
            text="Páginas focadas em intervenções com objetivos e processos próprios, sem repetir o conteúdo dos serviços principais."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {publishedSubservices.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>
      <section id="calculadora" className="section-space bg-mist/60">
        <div className="container-shell"><Calculator /></div>
      </section>
      <CtaBand />
    </>
  );
}
