import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Sobre Nós",
  description: "Conheça a Aureon Construção: coordenação técnica, profissionais por especialidade e acompanhamento de obras.",
  alternates: { canonical: "/sobre-nos" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a Aureon"
        title="Uma empresa responsável por toda a sua obra"
        text="Experiência prática, coordenação eficiente e profissionais especializados em cada área."
        breadcrumbs={[{ label: "Sobre nós", href: "/sobre-nos" }]}
        action={{ label: "Conhecer os serviços", href: "/servicos" }}
      />
      <section className="section-space">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="A nossa forma de trabalhar"
              title="A técnica certa, coordenada por uma única equipa"
              text="A Aureon executa e gere obras completas. A nossa força está na combinação entre experiência real de obra, comunicação clara e profissionais especializados."
            />
            <p className="mt-6 leading-8 text-ink/60">
              Eletricidade, canalização, pladur, pintura, capoto, microcimento,
              alvenaria, impermeabilização, telhados e exteriores são integrados
              num plano único, com responsabilidade e acompanhamento.
            </p>
          </div>
          <div className="relative min-h-[480px] overflow-hidden rounded-2xl">
            <Image src="/hero-aureon.webp" alt="Projeto acompanhado pela Aureon Construção" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-right" />
          </div>
        </div>
      </section>
      <section className="section-space bg-sand/55">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          {[
            ["ruler", "Missão", "Entregar obras sólidas, confiáveis e esteticamente cuidadas, com transparência e compromisso."],
            ["star", "Visão", "Elevar o padrão de qualidade, atendimento e segurança no setor da construção em Portugal."],
            ["shield", "Compromisso", "Coordenar todas as especialidades e responder pelo resultado final, do início à entrega."],
          ].map(([icon, title, text]) => (
            <article key={title} className="rounded-2xl bg-white p-8">
              <Icon name={icon} className="h-9 w-9 text-gold" />
              <h2 className="mt-7 text-2xl font-bold">{title}</h2>
              <p className="mt-4 leading-7 text-ink/55">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <SectionHeading eyebrow="O diferencial" title="Não deixamos a coordenação por sua conta" center />
          <div className="mx-auto mt-12 grid max-w-5xl gap-x-14 gap-y-8 md:grid-cols-2">
            {[
              "Profissionais experientes em cada especialidade",
              "Avaliação detalhada e orçamento transparente",
              "Planeamento de materiais, fases e equipas",
              "Solução rápida para imprevistos de obra",
              "Comunicação contínua com o cliente",
              "Verificação final dos trabalhos incluídos",
            ].map((item) => (
              <div key={item} className="flex items-start gap-4 border-b border-ink/10 pb-6">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold text-white"><Icon name="check" className="h-4 w-4" /></span>
                <span className="pt-1 font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
