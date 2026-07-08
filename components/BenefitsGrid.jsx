import Icon from "./Icon";

export default function BenefitsGrid({ items = [], title = "Benefícios da solução" }) {
  if (!items.length) return null;
  return (
    <section>
      <h2 className="heading-md">{title}</h2>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="flex gap-4 rounded-xl border border-ink/10 bg-white p-5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sand text-gold">
              <Icon name="check" className="h-5 w-5" />
            </span>
            <span className="pt-1 font-semibold">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
