import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ProjectGallery from "@/components/ProjectGallery";
import RelatedServices from "@/components/RelatedServices";
import ContactCta from "@/components/ContactCta";
import JsonLd from "@/components/JsonLd";
import { publishedProjects, getProject } from "@/data/portfolio";
import { site } from "@/data/site";

export function generateStaticParams() {
  return publishedProjects.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return {};
  const title = project.seoTitle || `${project.title} | Aureon Construção`;
  const description = project.seoDescription || project.summary;
  return {
    title,
    description,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title,
      description,
      images: project.coverImage ? [project.coverImage] : undefined,
    },
  };
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const images = (project.gallery.length ? project.gallery : [project.coverImage])
    .filter(Boolean)
    .map((image) => `${site.url}${image.src || image}`);

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.title}
        text={project.summary}
        breadcrumbs={[
          { label: "Portfólio", href: "/portfolio" },
          { label: project.title, href: `/portfolio/${project.slug}` },
        ]}
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary,
        url: `${site.url}/portfolio/${project.slug}`,
        image: images,
        creator: { "@id": `${site.url}/#organization` },
      }} />
      <section className="section-space">
        <div className="container-shell space-y-14">
          <ProjectGallery images={project.gallery} title={project.title} />

          {(project.challenge || project.solution) && (
            <div className="grid gap-10 md:grid-cols-2">
              {project.challenge && (
                <section>
                  <p className="eyebrow">Desafio</p>
                  <h2 className="heading-md mt-3">Situação inicial</h2>
                  <p className="mt-5 leading-8 text-ink/60">{project.challenge}</p>
                </section>
              )}
              {project.solution && (
                <section>
                  <p className="eyebrow">Solução</p>
                  <h2 className="heading-md mt-3">Intervenção executada</h2>
                  <p className="mt-5 leading-8 text-ink/60">{project.solution}</p>
                </section>
              )}
            </div>
          )}

          {project.workPerformed?.length > 0 && (
            <section className="rounded-2xl bg-sand/50 p-7 md:p-10">
              <p className="eyebrow">Trabalhos registados</p>
              <h2 className="heading-md mt-3">Âmbito documentado nas fotografias</h2>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {project.workPerformed.map((item) => (
                  <li key={item} className="rounded-xl bg-white p-4 text-sm font-semibold text-ink/70">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-6 text-ink/50">
                Não são publicados preço, prazo, área, ano, cliente ou localização por não estarem confirmados para publicação.
              </p>
            </section>
          )}
        </div>
      </section>
      <RelatedServices slugs={project.relatedServices} />
      <ContactCta title="Quer analisar um projeto semelhante?" />
    </>
  );
}
