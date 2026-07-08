import LegalPage from "@/components/LegalPage";
import { site, formattedAddress } from "@/data/site";

export const metadata = {
  title: "Termos e Condições",
  description: "Condições gerais de utilização do site Aureon Construção.",
  alternates: { canonical: "/termos-e-condicoes" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Termos e Condições" updatedAt="8 de julho de 2026">
      <h2>1. Âmbito do site</h2>
      <p>
        O site apresenta serviços, áreas de atuação, conteúdos informativos e fotografias de
        trabalhos da Aureon Construção. A informação publicada não substitui avaliação técnica,
        proposta contratual ou aconselhamento especializado para o caso concreto.
      </p>

      <h2>2. Pedidos e orçamentos</h2>
      <p>
        O envio de formulário, mensagem, email ou fotografias não constitui adjudicação. Preços,
        disponibilidade, materiais, prazos, condições fiscais e âmbito só ficam definidos na
        proposta aceite pelas partes.
      </p>

      <h2>3. Calculadora</h2>
      <p>
        Os resultados da calculadora são estimativas indicativas e não substituem uma visita
        técnica. O valor final pode variar conforme estado do imóvel, acessos, materiais,
        demolições, resíduos, especialidades, IVA e condições de execução.
      </p>

      <h2>4. Garantias, assistência e revisão</h2>
      <p>
        As condições de garantia, assistência ou revisão dos trabalhos são indicadas no orçamento
        ou contrato, quando aplicável, e dependem do tipo de intervenção, materiais e condições
        efetivamente contratadas.
      </p>

      <h2>5. Conteúdos técnicos</h2>
      <p>
        Os guias publicados são gerais. Licenciamento, condomínio, estrutura, eletricidade e outros
        temas técnicos devem ser confirmados com profissionais e entidades competentes antes da
        execução.
      </p>

      <h2>6. Fotografias e propriedade intelectual</h2>
      <p>
        As imagens e textos do site não devem ser reproduzidos para fins comerciais sem autorização.
        Caso alguma imagem de obra deva ser revista por motivo de privacidade ou autorização,
        o pedido pode ser enviado para <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>7. Contacto</h2>
      <p>
        Pode contactar a Aureon Construção através de {site.phone},{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> ou por correio para {formattedAddress}.
      </p>
    </LegalPage>
  );
}
