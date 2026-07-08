import Link from "next/link";
import JsonLd from "./JsonLd";
import { site } from "@/data/site";

export default function Breadcrumbs({ items, dark = false }) {
  const allItems = [{ label: "Início", href: "/" }, ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${site.url}${item.href}`,
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className={`text-sm ${dark ? "text-white/55" : "text-ink/55"}`}>
        <ol className="flex flex-wrap items-center gap-2">
          {allItems.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index < allItems.length - 1 ? (
                <Link href={item.href} className={`transition ${dark ? "hover:text-white" : "hover:text-gold"}`}>
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
              {index < allItems.length - 1 && <span aria-hidden="true">/</span>}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={schema} />
    </>
  );
}
