import JsonLd from "./JsonLd";

export default function FaqSection({ faqs = [], title = "Perguntas frequentes" }) {
  if (!faqs.length) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className="section-space bg-sand/45">
      <div className="container-shell max-w-5xl">
        <p className="eyebrow">Esclarecimentos</p>
        <h2 className="heading-lg mt-3">{title}</h2>
        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((item) => (
            <details key={item.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold">
                {item.question}
                <span className="text-2xl font-normal text-gold transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-3xl pt-4 leading-7 text-ink/60">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={schema} />
    </section>
  );
}
