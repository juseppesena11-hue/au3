import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/data/site";

export default function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-ink/10 bg-white/95 p-3 shadow-[0_-10px_30px_rgba(23,35,46,.12)] backdrop-blur md:hidden">
      <a href={site.phoneHref} className="button button-ghost min-h-[44px] px-3">
        <Icon name="phone" className="h-4 w-4" /> Ligar
      </a>
      <Link href="/contactos#formulario" className="button button-primary min-h-[44px] px-3">
        Enviar pedido
      </Link>
    </div>
  );
}
