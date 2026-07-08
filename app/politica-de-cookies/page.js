import LegalPage from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata = {
  title: "Política de Cookies",
  description: "Informação sobre cookies e tecnologias utilizados no site Aureon Construção.",
  alternates: { canonical: "/politica-de-cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage title="Política de Cookies" updatedAt="8 de julho de 2026">
      <h2>1. Situação atual</h2>
      <p>
        O site não ativa, por defeito, Google Analytics, publicidade comportamental ou cookies
        não essenciais. Por esse motivo não é apresentado um banner de consentimento para
        ferramentas que não estejam ativas.
      </p>

      <h2>2. Cookies técnicos</h2>
      <p>
        O alojamento, a infraestrutura e funcionalidades essenciais podem utilizar mecanismos
        técnicos necessários à segurança, entrega de páginas, proteção contra abuso e funcionamento
        normal do site.
      </p>

      <h2>3. Analytics opcional</h2>
      <p>
        O projeto está preparado para receber um identificador futuro através de{" "}
        <code>NEXT_PUBLIC_GA_ID</code>, mas isso não carrega analytics automaticamente. Se uma
        ferramenta de análise com cookies não essenciais for ativada, a política de cookies,
        a política de privacidade, a configuração de segurança e o mecanismo de consentimento
        devem ser revistos antes da recolha.
      </p>

      <h2>4. Controlo no navegador</h2>
      <p>
        Pode consultar, bloquear ou eliminar cookies nas definições do navegador. Bloquear
        mecanismos estritamente necessários pode afetar algumas funcionalidades técnicas.
      </p>

      <h2>5. Contacto</h2>
      <p>
        Para questões sobre cookies ou privacidade, contacte{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> ou {site.phone}.
      </p>
    </LegalPage>
  );
}
