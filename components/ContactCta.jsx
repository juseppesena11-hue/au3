import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/data/site";

export default function ContactCta({ title = "Vamos analisar o seu projeto?", text = "Envie informação e fotografias para uma primeira avaliação.", service, region }) {
  const params = new URLSearchParams();
  if (service) params.set("servico", service);
  if (region) params.set("regiao", region);
  const href = `/contactos${params.toString() ? `?${params}` : ""}#formulario`;
  return (
    <section className="bg-gold text-white">
      <div className="container-shell flex flex-col items-start justify-between gap-7 py-14 md:flex-row md:items-center">
        <div>
          <h2 className="heading-md">{title}</h2>
          <p className="mt-3 text-white/75">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href={href} className="button button-light">Pedir orçamento <Icon name="arrow" className="h-4 w-4" /></Link>
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="button border border-white/40 text-white hover:bg-white hover:text-ink">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
