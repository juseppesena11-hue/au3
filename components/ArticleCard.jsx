import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

export default function ArticleCard({ article }) {
  return (
    <Link href={`/blog/${article.slug}`} className="group flex min-h-[380px] flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition hover:-translate-y-1 hover:border-gold/35 hover:shadow-soft">
      {article.coverImage && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={article.coverImage}
            alt={article.coverAlt || article.title}
            width={article.coverWidth || 1200}
            height={article.coverHeight || 800}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest">
          <span className="text-gold">{article.category}</span>
          <time className="text-ink/35" dateTime={article.dateModified}>{article.readTime}</time>
        </div>
        <h3 className="mt-7 text-2xl font-bold leading-tight transition group-hover:text-gold">{article.title}</h3>
        <p className="mt-4 leading-7 text-ink/55">{article.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold">
          Ler guia <Icon name="arrow" className="h-4 w-4 text-gold transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
