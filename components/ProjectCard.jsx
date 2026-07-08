import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project, link = false }) {
  const content = (
    <>
      {project.coverImage ? (
        <div className="relative min-h-[310px] overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.coverAlt || project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        </div>
      ) : (
        <div className={`project-visual ${project.tone || "warm"}`} aria-hidden="true" />
      )}
      <div className="p-7">
        <span className="text-xs font-bold uppercase tracking-widest text-gold">{project.category}</span>
        <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-ink/55">{project.summary}</p>
      </div>
    </>
  );
  return link ? (
    <Link href={`/portfolio/${project.slug}`} className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">{content}</Link>
  ) : (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm">{content}</article>
  );
}
