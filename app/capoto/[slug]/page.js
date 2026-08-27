import Link from "next/link";
import { notFound } from "next/navigation";
import ContactCta from "@/components/ContactCta";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import { getCapotoPage, publishedCapotoPages } from "@/data/capoto";
import { site } from "@/data/site";

export function generateStaticParams() {
  return publishedCapotoPages.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const item = getCapotoPage(params.slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `/capoto/${item.slug}` },
    openGraph: { title: item.title, description: item.description, url: `/capoto/${item.slug}`, type: "article" },
  };
}

export default function CapotoGuidePage({ params }) {
  const item = getCapotoPage(params.slug);
  if (!item) notFound();
  const url = `${site.url}/capoto/${item.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": item.region ? "Service" : "Article",
        "@id": `${url}#content`,
        name: item.title,
        headline: item.title,
        description: item.description,
        url,
        inLanguage: "pt-PT",
        dateModified: item.updatedAt,
        ...(item.region
          ? { provider: { "@id": `${site.url}/#contractor` }, areaServed: item.region, serviceType: "Capoto / ETICS" }
          : { author: { "@id": `${site.url}/#organization` }, publisher: { "@id": `${site.url}/#organization` } }),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: site.url },
          { "@type": "ListItem", position: 2, name: "Capoto / ETICS", item: `${site.url}/servicos/capoto-etics` },
          { "@type": "ListItem", position: 3, name: item.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="bg-ink py-16 text-white md:py-24">
        <div className="container-shell">
          <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-white/50">
            <Link href="/">Início</Link><span>/</span><Link href="/servicos/capoto-etics">Capoto / ETICS</Link><span>/</span><span className="text-white">{item.title}</span>
          </nav>
          <p className="eyebrow mt-10 text-gold">{item.eyebrow}</p>
          <h1 className="heading-xl mt-5 max-w-5xl text-white">{item.title}</h1>
          <p className="mt-7 max-w-4xl text-lg leading-8 text-white/70 md:text-xl">{item.intro}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contactos?servico=capoto-etics#formulario" className="button button-primary">Pedir avaliação da fachada</Link>
            <a href={`${site.whatsappBase}?text=${encodeURIComponent(`Olá Aureon. Gostaria de pedir informação sobre ${item.title}.`)}`} target="_blank" rel="noreferrer" className="button border border-white/25 text-white hover:bg-white hover:text-ink">Enviar fotografias por WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-sand/45">
        <div className="container-shell grid gap-4 py-7 md:grid-cols-3">
          {item.facts.map((fact) => <div key={fact} className="flex gap-3 text-sm font-semibold text-ink"><Icon name="check" className="h-5 w-5 shrink-0 text-gold" />{fact}</div>)}
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_300px]">
          <div className="space-y-7">
            {item.sections.map(([title, content], index) => (
              <article key={title} className="rounded-2xl border border-ink/10 bg-white p-7 shadow-sm md:p-9">
                <span className="text-xs font-bold uppercase tracking-[.18em] text-gold">Ponto {index + 1}</span>
                <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">{title}</h2>
                <p className="mt-5 leading-8 text-ink/65">{content}</p>
              </article>
            ))}
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl bg-ink p-7 text-white">
              <h2 className="text-xl font-bold">Aprofundar Capoto</h2>
              <div className="mt-5 flex flex-col gap-4 text-sm">
                {item.links.filter((link) => link.href !== `/capoto/${item.slug}`).map((link) => <Link key={link.href} href={link.href} className="flex items-center justify-between border-b border-white/10 pb-4 text-white/70 hover:text-gold">{link.label}<Icon name="arrow" className="h-4 w-4" /></Link>)}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-space bg-mist/60">
        <div className="container-shell max-w-4xl">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2 className="heading-md mt-3">Antes de pedir orçamento</h2>
          <div className="mt-8 space-y-4">
            {item.faqs.map(([question, answer]) => <details key={question} className="rounded-xl border border-ink/10 bg-white p-6"><summary className="cursor-pointer font-bold text-ink">{question}</summary><p className="mt-4 leading-7 text-ink/65">{answer}</p></details>)}
          </div>
        </div>
      </section>
      <ContactCta service="capoto-etics" title="Quer uma proposta ajustada à sua fachada?" text="Envie localização, área aproximada e fotografias gerais e dos detalhes para uma primeira análise." />
    </>
  );
}
