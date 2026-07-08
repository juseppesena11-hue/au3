import PageHero from "./PageHero";

export default function LegalPage({ title, updatedAt, children }) {
  return (
    <>
      <PageHero
        eyebrow="Informação legal"
        title={title}
        text={`Informação legal atualizada em ${updatedAt}. Consulte esta página para conhecer as condições aplicáveis ao uso do site e ao contacto com a Aureon.`}
        breadcrumbs={[{ label: title, href: `/${title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}` }]}
      />
      <article className="container-shell max-w-4xl py-16 md:py-24">
        <div className="legal-content">{children}</div>
      </article>
    </>
  );
}
