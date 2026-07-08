import Link from "next/link";
import Icon from "./Icon";

export default function ServiceCard({ service }) {
  return (
    <Link href={`/servicos/${service.slug}`} className="service-card group">
      <div className="mb-8 grid h-12 w-12 place-items-center rounded-full bg-sand text-gold transition group-hover:bg-gold group-hover:text-white">
        <Icon name={service.icon} />
      </div>
      <h3 className="text-xl font-bold text-ink">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-ink/60">{service.excerpt || service.short}</p>
      <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-navy">
        Saber mais <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
