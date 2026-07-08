import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[65vh] place-items-center bg-sand/40 px-5 text-center">
      <div>
        <p className="eyebrow">Erro 404</p>
        <h1 className="heading-lg mt-4">Esta página não foi encontrada</h1>
        <p className="mt-5 text-ink/55">O endereço pode ter mudado ou já não estar disponível.</p>
        <Link href="/" className="button button-primary mt-8">Voltar ao início</Link>
      </div>
    </section>
  );
}
