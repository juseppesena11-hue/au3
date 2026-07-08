export default function SectionHeading({ eyebrow, title, text, light = false, center = false }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={`heading-lg mt-3 ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {text && <p className={`mt-5 text-lg leading-8 ${light ? "text-white/65" : "text-ink/60"}`}>{text}</p>}
    </div>
  );
}
