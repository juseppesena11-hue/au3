import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import StickyMobileCta from "@/components/StickyMobileCta";
import JsonLd from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/react";
import { site } from "@/data/site";
import { publishedRegions } from "@/data/regions";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Aureon Construção | Obras e Remodelações",
    template: "%s | Aureon Construção",
  },
  description:
    "Remodelações, reparações, infiltrações, telhados, cozinhas e casas de banho com coordenação técnica em Lisboa, Setúbal, Alentejo e Algarve.",
  openGraph: {
    title: "Aureon Construção",
    description: "Obras coordenadas com rigor, documentação fotográfica quando aplicável e acompanhamento técnico.",
    url: site.url,
    siteName: site.name,
    locale: "pt_PT",
    type: "website",
    images: [{ url: "/hero-aureon.webp", width: 1836, height: 857 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aureon Construção",
    description: "Remodelações, reparações e intervenções técnicas coordenadas por especialidade.",
    images: ["/hero-aureon.webp"],
  },
  verification: site.analytics.googleSiteVerification
    ? { google: site.analytics.googleSiteVerification }
    : undefined,
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        logo: `${site.url}/logo.svg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.streetAddress,
          postalCode: site.address.postalCode,
          addressLocality: site.address.addressLocality,
          addressCountry: site.address.addressCountry,
        },
      },
      {
        "@type": "GeneralContractor",
        "@id": `${site.url}/#contractor`,
        name: site.name,
        url: site.url,
        telephone: site.phone,
        email: site.email,
        image: `${site.url}/hero-aureon.webp`,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.streetAddress,
          postalCode: site.address.postalCode,
          addressLocality: site.address.addressLocality,
          addressCountry: site.address.addressCountry,
        },
        areaServed: publishedRegions.map(({ name }) => ({
          "@type": "AdministrativeArea",
          name,
        })),
        openingHours: "Mo-Sa 08:00-19:00",
        parentOrganization: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "pt-PT",
      },
    ],
  };

  return (
    <html lang="pt">
      <body>
        <a href="#conteudo" className="skip-link">Saltar para o conteúdo</a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <StickyMobileCta />
        <JsonLd data={schema} />
        <Analytics />
      </body>
    </html>
  );
}
