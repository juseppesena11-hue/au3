export default function ProcessSteps({ steps = [], title = "Como trabalhamos" }) {
  if (!steps.length) return null;
  return (
    <section className="section-space bg-ink text-white">
      <div className="container-shell">
        <p className="eyebrow">Processo</p>
        <h2 className="heading-lg mt-3">{title}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step} className="border-t border-white/15 pt-5">
              <span className="text-xs font-extrabold tracking-widest text-gold">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-bold leading-6">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
