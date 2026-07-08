import Link from "next/link";
import PageHero from "@/components/PageHero";
import ArticleCard from "@/components/ArticleCard";
import ContactCta from "@/components/ContactCta";
import JsonLd from "@/components/JsonLd";
import { publishedArticles, articleCategories } from "@/data/articles";
import { site } from "@/data/site";

export const metadata = {
  title: "Guias de Construção e Remodelação",
  description:
    "Guias práticos sobre custos, planeamento, materiais, infiltrações, pintura e instalações técnicas.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage({ searchParams }) {
  const selected = searchParams?.categoria;
  const visible = selected
    ? publishedArticles.filter((article) => article.category === selected)
    : publishedArticles;
  return (
    <>
      <PageHero
        eyebrow="Guias Aureon"
        title="Informação útil para planear melhor a sua obra"
        text="Conteúdo original sobre custos, materiais, manutenção e decisões técnicas, escrito em linguagem clara."
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Guias Aureon",
        url: `${site.url}/blog`,
        hasPart: publishedArticles.map((article) => ({
          "@type": "Article",
          headline: article.title,
          url: `${site.url}/blog/${article.slug}`,
        })),
      }} />
      <section className="section-space">
        <div className="container-shell">
          <nav aria-label="Categorias do blog" className="mb-10 flex flex-wrap gap-2">
            <Link href="/blog" className={`rounded-full border px-4 py-2 text-sm font-bold ${!selected ? "border-gold bg-gold text-white" : "border-ink/15"}`}>
              Todos
            </Link>
            {articleCategories.map((category) => (
              <Link
                key={category}
                href={`/blog?categoria=${encodeURIComponent(category)}`}
                className={`rounded-full border px-4 py-2 text-sm font-bold ${selected === category ? "border-gold bg-gold text-white" : "border-ink/15 hover:border-gold"}`}
              >
                {category}
              </Link>
            ))}
          </nav>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>
      <ContactCta title="Tem dúvidas específicas sobre a sua obra?" />
    </>
  );
}
