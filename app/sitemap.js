import { publishedServices } from "@/data/services";
import { publishedSubservices } from "@/data/subservices";
import { publishedArticles } from "@/data/articles";
import { publishedProjects } from "@/data/portfolio";
import { publishedRegions } from "@/data/regions";
import { legalPages, site } from "@/data/site";

function entry(path, { priority = 0.7, changeFrequency = "monthly", lastModified } = {}) {
  return {
    url: `${site.url}${path}`,
    changeFrequency,
    priority,
    ...(lastModified ? { lastModified: new Date(lastModified) } : {}),
  };
}

export default function sitemap() {
  const staticPages = [
    entry("", { priority: 1, changeFrequency: "weekly", lastModified: "2026-07-08" }),
    entry("/sobre-nos", { priority: 0.7, lastModified: "2026-07-08" }),
    entry("/servicos", { priority: 0.9, lastModified: "2026-07-08" }),
    entry("/portfolio", { priority: 0.7, lastModified: "2026-07-08" }),
    entry("/blog", { priority: 0.8, changeFrequency: "weekly", lastModified: "2026-07-08" }),
    entry("/contactos", { priority: 0.8, lastModified: "2026-07-08" }),
    entry("/orcamento", { priority: 0.8, lastModified: "2026-07-08" }),
    entry("/regioes", { priority: 0.8, lastModified: "2026-07-08" }),
    ...legalPages.map((page) => entry(page.href, { priority: 0.3, lastModified: "2026-07-08" })),
  ];

  return [
    ...staticPages,
    ...[...publishedServices, ...publishedSubservices].map((service) =>
      entry(`/servicos/${service.slug}`, {
        priority: service.parentService ? 0.75 : 0.85,
        lastModified: service.updatedAt,
      })
    ),
    ...publishedRegions.map((region) =>
      entry(`/regioes/${region.slug}`, { priority: 0.8, lastModified: region.updatedAt })
    ),
    ...publishedArticles.map((article) =>
      entry(`/blog/${article.slug}`, {
        priority: 0.7,
        changeFrequency: "yearly",
        lastModified: article.dateModified,
      })
    ),
    ...publishedProjects.map((project) =>
      entry(`/portfolio/${project.slug}`, {
        priority: 0.7,
        lastModified: project.updatedAt,
      })
    ),
  ];
}
