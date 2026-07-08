import Image from "next/image";

export default function ProjectGallery({ images = [], title }) {
  if (!images.length) return null;
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {images.map((image, index) => (
        <figure key={image.src || image} className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="relative min-h-[320px] overflow-hidden">
            <Image
              src={image.src || image}
              alt={image.alt || `${title} - fotografia ${index + 1}`}
              width={image.width || 1280}
              height={image.height || 960}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full min-h-[320px] w-full object-cover"
              priority={image.priority || false}
            />
            {image.stage && (
              <span className="absolute left-4 top-4 rounded-full bg-ink/85 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur">
                {image.stage}
              </span>
            )}
          </div>
          {(image.caption || image.stage) && (
            <figcaption className="px-5 py-4 text-sm leading-6 text-ink/60">
              {image.caption || image.alt}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
