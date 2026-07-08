import Icon from "./Icon";
import { site } from "@/data/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Aureon pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 hidden items-center gap-2 rounded-full bg-[#1fab5b] px-4 py-3 text-sm font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#198f4b] md:flex"
    >
      <Icon name="phone" className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
