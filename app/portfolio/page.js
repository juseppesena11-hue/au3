import PageHero from "@/components/PageHero";
import ProjectCard from "@/components/ProjectCard";
import ContactCta from "@/components/ContactCta";
import JsonLd from "@/components/JsonLd";
import { projects, publishedProjects } from "@/data/portfolio";
import { site } from "@/data/site";

export const metadata = {
  title: "Portfólio de Obras",
  description:
    "Conheça projetos reais da Aureon Construção com fotografias de telhados, cozinhas, casas de banho, interiores e reparações.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  const hasRealProjects = publishedProjects.length > 0;
  const visibleItems = hasRealProjects ? publishedProjects : projects;
  return (
    <>
      <PageHero
        eyebrow="Portfólio"
        title={hasRealProjects ? "Projetos reais da Aureon Construção" : "Tipos de projetos que executamos"}
        text={
          hasRealProjects
            ? "Casos documentados com fotografias e informação confirmada."
            : "O arquivo de obras reais ainda está a ser preparado. Os exemplos abaixo descrevem âmbitos de trabalho e não são apresentados como obras concluídas."
        }
        breadcrumbs={[{ label: "Portfólio", href: "/portfolio" }]}
        action={{ label: "Falar sobre o meu projeto", href: "/contactos#formulario" }}
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Portfólio Aureon Construção",
        url: `${site.url}/portfolio`,
        hasPart: publishedProjects.map((project) => ({
          "@type": "CreativeWork",
          name: project.title,
          url: `${site.url}/portfolio/${project.slug}`,
        })),
      }} />
      <section className="section-space bg-mist/55">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((project) => (
              <ProjectCard key={project.slug} project={project} link={hasRealProjects} />
            ))}
          </div>
          {!hasRealProjects && (
            <div className="mt-10 rounded-2xl border border-dashed border-ink/20 bg-white p-8 text-center">
              <h2 className="text-xl font-bold">Portfólio em preparação</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-ink/60">
                Os casos de estudo serão publicados apenas com fotografias autorizadas e dados confirmados para apresentação pública.
              </p>
            </div>
          )}
        </div>
      </section>
      <ContactCta title="Tem um projeto semelhante?" />
    </>
  );
}
