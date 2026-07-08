import ArticleCard from "./ArticleCard";
import { publishedArticles } from "@/data/articles";

export default function RelatedArticles({ slugs = [], title = "Guias relacionados" }) {
  const items = slugs.map((slug) => publishedArticles.find((item) => item.slug === slug)).filter(Boolean).slice(0, 3);
  if (!items.length) return null;
  return (
    <section className="section-space">
      <div className="container-shell">
        <p className="eyebrow">Informação útil</p>
        <h2 className="heading-md mt-3">{title}</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {items.map((item) => <ArticleCard key={item.slug} article={item} />)}
        </div>
      </div>
    </section>
  );
}
