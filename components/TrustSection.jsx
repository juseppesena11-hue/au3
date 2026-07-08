import Icon from "./Icon";

export default function TrustSection() {
  const items = [
    ["layers", "Coordenação completa", "Organização das várias especialidades e respetiva sequência."],
    ["ruler", "Orçamento detalhado", "Âmbito, materiais e condicionantes explicados antes da execução."],
    ["check", "Acompanhamento", "Comunicação e verificação dos trabalhos contratados."],
  ];
  return (
    <section className="section-space bg-sand/45">
      <div className="container-shell grid gap-5 md:grid-cols-3">
        {items.map(([icon, title, text]) => (
          <div key={title} className="rounded-2xl bg-white p-8">
            <Icon name={icon} className="h-8 w-8 text-gold" />
            <h2 className="mt-6 text-xl font-bold">{title}</h2>
            <p className="mt-3 leading-7 text-ink/55">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
