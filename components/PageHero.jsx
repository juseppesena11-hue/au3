import Link from "next/link";
import Icon from "./Icon";
import Breadcrumbs from "./Breadcrumbs";

export default function PageHero({ eyebrow, title, text, action, breadcrumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
      <div className="absolute inset-0 opacity-[.07]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      <div className="absolute -right-24 -top-40 h-[420px] w-[420px] rounded-full bg-gold/15 blur-3xl" />
      <div className="container-shell relative">
        {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} dark />}
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="heading-xl mt-5 max-w-5xl text-white">{title}</h1>
        {text && <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65 md:text-xl">{text}</p>}
        {action && (
          <Link href={action.href} className="button button-primary mt-8">
            {action.label} <Icon name="arrow" className="h-4 w-4" />
          </Link>
        )}
      </div>
    </section>
  );
}
