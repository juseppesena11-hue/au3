import ServiceCard from "./ServiceCard";
import { publishedServices } from "@/data/services";
import { publishedSubservices } from "@/data/subservices";

export default function RelatedServices({ slugs = [], title = "Serviços complementares" }) {
  const all = [...publishedServices, ...publishedSubservices];
  const items = slugs.map((slug) => all.find((item) => item.slug === slug)).filter(Boolean).slice(0, 3);
  if (!items.length) return null;
  return (
    <section className="section-space bg-mist/60">
      <div className="container-shell">
        <p className="eyebrow">Também pode precisar</p>
        <h2 className="heading-md mt-3">{title}</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {items.map((item) => <ServiceCard key={item.slug} service={item} />)}
        </div>
      </div>
    </section>
  );
}
