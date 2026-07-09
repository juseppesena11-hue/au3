import PageHero from "@/components/PageHero";
import Calculator from "@/components/Calculator";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Calculadora de Orçamento",
  description: "Obtenha uma estimativa indicativa e envie o pedido para análise técnica pela Aureon Construção.",
  alternates: { canonical: "/orcamento" },
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Orçamento"
        title="Uma estimativa indicativa para preparar o pedido"
        text="Escolha o serviço, indique a área e envie os dados para análise. A calculadora ajuda a enquadrar, mas não substitui visita técnica nem orçamento detalhado."
        breadcrumbs={[{ label: "Orçamento", href: "/orcamento" }]}
      />
      <section className="section-space">
        <div className="container-shell"><Calculator /></div>
      </section>
      <section className="pb-20 md:pb-28">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          {[
            ["ruler", "Medição", "A área e o estado atual do local influenciam diretamente a estimativa."],
            ["layers", "Materiais e demolições", "Materiais, resíduos, demolições e especialidades alteram o valor final."],
            ["shield", "Avaliação final", "O orçamento final é confirmado após análise do pedido, acessos, urgência, IVA e condições reais."],
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
