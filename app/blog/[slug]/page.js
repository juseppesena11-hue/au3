import { notFound } from "next/navigation";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedArticles from "@/components/RelatedArticles";
import RelatedServices from "@/components/RelatedServices";
import ContactCta from "@/components/ContactCta";
import JsonLd from "@/components/JsonLd";
import { publishedArticles, getArticle } from "@/data/articles";
import { site } from "@/data/site";

export function generateStaticParams() {
  return publishedArticles.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.seoTitle,
      description: article.seoDescription,
      url: `/blog/${article.slug}`,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      images: [article.coverImage],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.seoDescription,
      images: [article.coverImage],
    },
  };
}

export default function ArticlePage({ params }) {
  const article = getArticle(params.slug);
  if (!article) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${site.url}${article.coverImage}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": article.author.type,
      name: article.author.name,
    },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: `${site.url}/blog/${article.slug}`,
    inLanguage: "pt-PT",
  };

  return (
    <>
      <article>
        <header className="bg-ink py-16 text-white md:py-24">
          <div className="container-shell max-w-5xl">
            <Breadcrumbs
              dark
              items={[
                { label: "Blog", href: "/blog" },
                { label: article.title, href: `/blog/${article.slug}` },
              ]}
            />
            <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/50">
              <span className="text-gold">{article.category}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={article.datePublished}>
                {new Intl.DateTimeFormat("pt-PT", { dateStyle: "long" }).format(new Date(article.datePublished))}
              </time>
              <span aria-hidden="true">·</span>
              <span>{article.readTime} de leitura</span>
            </div>
            <h1 className="heading-xl mt-5 max-w-4xl">{article.title}</h1>
            <p className="mt-7 max-w-3xl text-xl leading-8 text-white/65">{article.excerpt}</p>
            <p className="mt-5 text-sm text-white/45">Por {article.author.name}</p>
          </div>
        </header>
        {article.coverImage && (
          <div className="container-shell max-w-5xl pt-10">
            <div className="overflow-hidden rounded-2xl bg-sand shadow-soft">
              <Image
                src={article.coverImage}
                alt={article.coverAlt || article.title}
                width={article.coverWidth || 1600}
                height={article.coverHeight || 900}
                sizes="(max-width: 1024px) 100vw, 960px"
                className="max-h-[560px] w-full object-cover"
                priority
              />
            </div>
          </div>
        )}
        <div className="container-shell max-w-5xl py-16 md:py-24">
          <p className="text-xl leading-9 text-ink/70">{article.introduction}</p>
          <div className="mt-14 space-y-14">
            {article.sections.map((section, index) => (
              <section key={section.title} className="grid gap-5 border-t border-ink/10 pt-9 md:grid-cols-[90px_1fr]">
                <span className="text-sm font-bold text-gold">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="heading-md">{section.title}</h2>
                  <p className="mt-5 text-lg leading-8 text-ink/65">{section.content}</p>
                </div>
              </section>
            ))}
          </div>
          <aside className="mt-14 rounded-2xl bg-sand/60 p-7 md:p-10">
            <h2 className="text-2xl font-bold">Nota importante</h2>
            <p className="mt-4 leading-7 text-ink/60">
              Cada imóvel tem condições próprias. Questões de licenciamento, estrutura,
              condomínio ou instalações técnicas devem ser confirmadas com profissionais
              e entidades competentes antes da execução.
            </p>
          </aside>
        </div>
        <JsonLd data={schema} />
      </article>
      <FaqSection faqs={article.faqs} />
      <RelatedServices slugs={article.relatedServices} />
      <RelatedArticles slugs={article.relatedArticles} />
      <ContactCta />
    </>
  );
}
