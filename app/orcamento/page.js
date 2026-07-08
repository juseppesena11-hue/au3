import PageHero from "@/components/PageHero";
import Calculator from "@/components/Calculator";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Calculadora de Orçamento",
  description: "Obtenha uma estimativa rápida para a sua obra e peça uma avaliação detalhada à Aureon Construção.",
  alternates: { canonical: "/orcamento" },
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Orçamento"
        title="Uma primeira estimativa em poucos segundos"
        text="Escolha o serviço e indique a área. Mostramos referências Standard e Premium para ajudar a enquadrar o projeto."
        breadcrumbs={[{ label: "Orçamento", href: "/orcamento" }]}
      />
      <section className="section-space">
        <div className="container-shell"><Calculator /></div>
      </section>
      <section className="pb-20 md:pb-28">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          {[
            ["ruler", "Medição", "A área e o estado atual do local influenciam diretamente a estimativa."],
            ["layers", "Materiais", "A seleção de materiais define o nível Standard ou Premium."],
            ["shield", "Avaliação final", "A visita técnica confirma soluções, quantidades, acessos e prazo."],
          ].map(([icon, title, text]) => (
            <div key={title} className="rounded-2xl border border-ink/10 p-7">
              <Icon name={icon} className="h-8 w-8 text-gold" />
              <h2 className="mt-5 text-xl font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/55">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand title="Quer transformar a estimativa num orçamento detalhado?" />
    </>
  );
}
