import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { site, formattedAddress } from "@/data/site";
import { publishedRegions } from "@/data/regions";

export const metadata = {
  title: "Contactos",
  description: "Peça orçamento gratuito para obras, remodelações e reparações. WhatsApp, telefone e email.",
  alternates: { canonical: "/contactos" },
};

export default function ContactPage({ searchParams }) {
  return (
    <>
      <PageHero
        eyebrow="Contactos"
        title="Conte-nos o que quer transformar"
        text="Quanto mais informação enviar, mais precisa será a nossa primeira avaliação. Pode anexar fotografias ou falar diretamente pelo WhatsApp."
        breadcrumbs={[{ label: "Contactos", href: "/contactos" }]}
      />
      <section className="section-space bg-mist/55">
        <div className="container-shell grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
          <div className="rounded-2xl bg-ink p-8 text-white md:p-10">
            <p className="eyebrow">Fale connosco</p>
            <h2 className="heading-md mt-4">Resposta rápida e comunicação clara</h2>
            <div className="mt-10 space-y-7">
              <a href={site.phoneHref} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-gold"><Icon name="phone" /></span>
                <span><small className="block text-white/45">Telefone / WhatsApp</small><strong className="mt-1 block">{site.phone}</strong></span>
              </a>
              <a href={`mailto:${site.email}`} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-gold"><Icon name="mail" /></span>
                <span><small className="block text-white/45">Email</small><strong className="mt-1 block">{site.email}</strong></span>
              </a>
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-gold"><Icon name="location" /></span>
                <span><small className="block text-white/45">Morada</small><strong className="mt-1 block leading-6">{formattedAddress}</strong></span>
              </div>
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-gold"><Icon name="location" /></span>
                <span><small className="block text-white/45">Regiões</small><strong className="mt-1 block leading-6">{publishedRegions.map((region) => region.name).join(" · ")}</strong></span>
              </div>
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-gold"><Icon name="clock" /></span>
                <span><small className="block text-white/45">Horário</small><strong className="mt-1 block">Segunda a Sábado, 08:00 - 19:00</strong></span>
              </div>
            </div>
          </div>
          <ContactForm
            initialService={searchParams?.servico || ""}
            initialRegion={searchParams?.regiao || ""}
            estimate={searchParams?.estimativa || ""}
          />
        </div>
      </section>
    </>
  );
}
