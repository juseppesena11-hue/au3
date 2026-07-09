import Icon from "./Icon";
import { site } from "@/data/site";

export default function CtaBand({ title = "Vamos falar sobre a sua obra?", text = "Envie descrição, localização e fotografias para uma primeira avaliação." }) {
  return (
    <section className="bg-gold text-white">
      <div className="container-shell flex flex-col items-start justify-between gap-7 py-14 md:flex-row md:items-center">
        <div>
          <h2 className="heading-md">{title}</h2>
          <p className="mt-3 text-white/75">{text}</p>
        </div>
        <a href={site.whatsapp} target="_blank" rel="noreferrer" className="button button-light shrink-0">
          Enviar pelo WhatsApp <Icon name="arrow" className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
