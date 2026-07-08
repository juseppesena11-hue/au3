import LegalPage from "@/components/LegalPage";
import { site, formattedAddress } from "@/data/site";

export const metadata = {
  title: "Política de Privacidade",
  description: "Informação sobre o tratamento de dados enviados através do site Aureon Construção.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Política de Privacidade" updatedAt="8 de julho de 2026">
      <h2>1. Responsável pelo tratamento</h2>
      <p>
        O site é operado sob a marca Aureon Construção. Para questões relacionadas com privacidade,
        pedidos de orçamento ou exercício de direitos, pode contactar-nos através de{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>, pelo telefone {site.phone} ou por correio
        para {formattedAddress}.
      </p>

      <h2>2. Dados recolhidos</h2>
      <p>
        O formulário pode recolher nome, telefone, email, localização aproximada da obra, região
        de referência, serviço pretendido, descrição do pedido e até três imagens enviadas
        voluntariamente. Também podemos receber dados quando o contacto é feito por WhatsApp,
        telefone ou email.
      </p>

      <h2>3. Finalidade</h2>
      <p>
        Os dados são utilizados para responder a pedidos de contacto ou orçamento, analisar a
        intervenção descrita, preparar uma primeira avaliação e manter a comunicação necessária
        com o utilizador.
      </p>

      <h2>4. Anexos e fotografias</h2>
      <p>
        As imagens enviadas pelo formulário servem apenas para análise inicial do pedido. Evite
        enviar documentos de identificação, dados financeiros, fotografias com rostos, matrículas,
        moradas completas visíveis ou dados de terceiros sem autorização.
      </p>

      <h2>5. Conservação e destinatários</h2>
      <p>
        Os dados são conservados pelo período necessário para responder ao pedido e gerir a
        comunicação associada, sem prejuízo de obrigações legais aplicáveis. Podem ser tratados
        por fornecedores técnicos de alojamento, email ou infraestrutura, apenas na medida
        necessária ao funcionamento do site e da comunicação.
      </p>

      <h2>6. Direitos</h2>
      <p>
        Pode solicitar acesso, correção, oposição, limitação ou eliminação dos dados através de{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. A resposta pode depender da verificação
        do pedido e de obrigações legais ou contratuais aplicáveis.
      </p>

      <h2>7. Segurança e serviços externos</h2>
      <p>
        São aplicadas validações, limitação de ficheiros, honeypot e limitação básica de pedidos.
        Nenhum sistema é absolutamente imune a incidentes. O alojamento previsto é a Vercel e
        o envio de email depende do fornecedor SMTP configurado.
      </p>

      <h2>8. Analytics e alterações</h2>
      <p>
        Não existe analytics ativo por defeito. Se for ativado um serviço que utilize cookies
        não essenciais, esta política e o mecanismo de consentimento devem ser revistos antes
        da recolha.
      </p>
    </LegalPage>
  );
}
