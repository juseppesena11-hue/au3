import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { publishedServices } from "@/data/services";
import { site, legalPages, formattedAddress } from "@/data/site";
import { publishedRegions } from "@/data/regions";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
            Construção, remodelação e especialidades técnicas com gestão completa,
            profissionais por especialidade e acompanhamento do início ao fim.
          </p>
          <div className="mt-6 flex gap-2 text-xs font-bold uppercase tracking-[.16em] text-gold">
            {publishedRegions.map((region) => region.name).join(" · ")}
          </div>
        </div>
        <div>
          <h3 className="footer-title">Navegação</h3>
          <div className="footer-links">
            <Link href="/sobre-nos">Sobre nós</Link>
            <Link href="/servicos">Serviços</Link>
            <Link href="/portfolio">Portfólio</Link>
            <Link href="/regioes">Regiões</Link>
            <Link href="/orcamento">Calculadora</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Serviços</h3>
          <div className="footer-links">
            {publishedServices.slice(0, 6).map((service) => (
              <Link key={service.slug} href={`/servicos/${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="footer-title">Fale connosco</h3>
          <div className="space-y-4 text-sm text-white/70">
            <a href={site.phoneHref} className="contact-line">
              <Icon name="phone" className="h-5 w-5 text-gold" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="contact-line break-all">
              <Icon name="mail" className="h-5 w-5 text-gold" />
              {site.email}
            </a>
            <div className="contact-line">
              <Icon name="location" className="h-5 w-5 text-gold" />
              <span>{formattedAddress}</span>
            </div>
            <div className="contact-line">
              <Icon name="clock" className="h-5 w-5 text-gold" />
              Seg - Sáb, 08:00 - 19:00
            </div>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Regiões e informação</h3>
          <div className="footer-links">
            {publishedRegions.map((region) => (
              <Link key={region.slug} href={`/regioes/${region.slug}`}>{region.name}</Link>
            ))}
            {legalPages.map((page) => (
              <Link key={page.href} href={page.href}>{page.label}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Aureon Construção. Todos os direitos reservados.</span>
          <span>Construção, remodelação e coordenação técnica.</span>
        </div>
      </div>
    </footer>
  );
}
