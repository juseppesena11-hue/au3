import Link from "next/link";
import Icon from "./Icon";
import { publishedRegions } from "@/data/regions";

export default function RegionLinks({ exclude }) {
  const items = publishedRegions.filter((item) => item.slug !== exclude);
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Áreas de atuação</p>
            <h2 className="heading-md mt-3">Onde trabalhamos</h2>
          </div>
          <Link href="/regioes" className="button button-ghost">Ver todas as regiões</Link>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((region) => (
            <Link key={region.slug} href={`/regioes/${region.slug}`} className="group rounded-xl border border-ink/10 p-6 transition hover:border-gold hover:shadow-soft">
              <Icon name="location" className="h-6 w-6 text-gold" />
              <h3 className="mt-5 text-xl font-bold">{region.name}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/55">{region.lead}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
