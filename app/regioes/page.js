import PageHero from "@/components/PageHero";
import RegionLinks from "@/components/RegionLinks";
import TrustSection from "@/components/TrustSection";
import ContactCta from "@/components/ContactCta";
import JsonLd from "@/components/JsonLd";
import { publishedRegions } from "@/data/regions";
import { site } from "@/data/site";

export const metadata = {
  title: "Regiões de Atuação",
  description:
    "Conheça as áreas de atuação da Aureon Construção em Lisboa, Setúbal, Alentejo e Algarve.",
  alternates: { canonical: "/regioes" },
};

export default function RegionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Áreas de atuação"
        title="Acompanhamos obras em quatro regiões"
        text="A disponibilidade concreta depende do local, âmbito e planeamento. As páginas abaixo representam áreas de serviço, não necessariamente escritórios físicos."
        breadcrumbs={[{ label: "Regiões", href: "/regioes" }]}
        action={{ label: "Confirmar disponibilidade", href: "/contactos#formulario" }}
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Regiões de atuação",
        url: `${site.url}/regioes`,
        hasPart: publishedRegions.map((region) => ({
          "@type": "WebPage",
          name: region.name,
          url: `${site.url}/regioes/${region.slug}`,
        })),
      }} />
      <RegionLinks />
      <section className="pb-20 md:pb-28">
        <div className="container-shell grid gap-5 md:grid-cols-2">
          {publishedRegions.map((region) => (
            <article key={region.slug} className="rounded-2xl border border-ink/10 p-7">
              <p className="eyebrow">{region.type}</p>
              <h2 className="mt-3 text-2xl font-bold">{region.name}</h2>
              <p className="mt-4 leading-7 text-ink/60">{region.introduction}</p>
              {region.municipalities.length > 0 ? (
                <p className="mt-5 text-sm leading-6 text-ink/50">
                  Municípios de referência para confirmação de disponibilidade: {region.municipalities.join(", ")}.
                </p>
              ) : (
                <p className="mt-5 text-sm leading-6 text-ink/50">
                  Contacte-nos com o concelho da obra para avaliarmos a deslocação.
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
      <TrustSection />
      <ContactCta title="Quer confirmar se atuamos no seu local?" />
    </>
  );
}
