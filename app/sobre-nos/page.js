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
        title="Coordenação técnica para obras com várias especialidades"
        text="A Aureon organiza remodelações, reparações e intervenções técnicas com diagnóstico inicial, planeamento, execução coordenada e revisão final."
        breadcrumbs={[{ label: "Sobre nós", href: "/sobre-nos" }]}
        action={{ label: "Conhecer os serviços", href: "/servicos" }}
      />
      <section className="section-space">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="A nossa forma de trabalhar"
              title="Uma obra não é uma lista solta de serviços"
              text="Cada intervenção exige sequência: perceber o problema, confirmar acessos, escolher materiais compatíveis, coordenar especialidades e rever o resultado antes da entrega."
            />
            <p className="mt-6 leading-8 text-ink/60">
              Eletricidade, canalização, pladur, pintura, capoto, microcimento,
              alvenaria, impermeabilização, telhados e exteriores são integrados
              num plano único, com responsabilidade, acompanhamento e documentação fotográfica quando aplicável.
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
            ["ruler", "Diagnóstico", "Analisar estado inicial, acessos, materiais existentes e especialidades necessárias antes de fechar o orçamento."],
            ["star", "Coordenação", "Organizar equipas por fase para reduzir retrabalho, decisões tardias e falhas entre especialidades."],
            ["shield", "Revisão", "Confirmar os trabalhos contratados, registar pontos relevantes e deixar claro o que foi executado."],
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
              "Profissionais organizados por especialidade",
              "Avaliação do estado real antes do orçamento final",
              "Planeamento de materiais, fases e equipas",
              "Registo fotográfico quando aplicável",
              "Comunicação clara com o cliente",
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
