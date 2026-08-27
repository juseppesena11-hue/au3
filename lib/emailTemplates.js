const brand = {
  ink: "#263744",
  orange: "#db8a25",
  sand: "#f5f1eb",
  logo: "https://aureon.pt/aureon-email-logo.png",
  website: "https://aureon.pt",
  phone: "+351 926 378 947",
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function shell({ preview, content }) {
  return `<!doctype html>
<html lang="pt">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>${escapeHtml(preview)}</title>
  </head>
  <body style="margin:0;background:#f5f1eb;padding:24px 12px;font-family:Arial,Helvetica,sans-serif;color:#263744;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preview)}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
      <tr><td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:620px;background:#ffffff;border:1px solid #e7e1d9;border-radius:12px;overflow:hidden;">
          <tr><td style="height:6px;background:${brand.orange};font-size:0;line-height:0;">&nbsp;</td></tr>
          <tr><td style="padding:28px 32px 20px;">
            <img src="${brand.logo}" width="300" alt="Aureon Construção" style="display:block;width:100%;max-width:300px;height:auto;border:0;">
          </td></tr>
          <tr><td style="padding:0 32px 32px;">${content}</td></tr>
          <tr><td style="padding:20px 32px;background:${brand.ink};color:#ffffff;font-size:12px;line-height:20px;">
            <strong style="color:#ffffff;font-size:14px;">Juseppe Sena</strong><br>
            <span style="color:#c9d0d5;">Responsável pela Coordenação de Obras</span><br>
            <strong style="color:#ffffff;">Aureon Construção</strong><br>
            Construção, Remodelação &amp; Soluções Técnicas<br>
            <a href="tel:+351926378947" style="color:#ffffff;text-decoration:none;">${brand.phone}</a>
            &nbsp;·&nbsp;
            <a href="${brand.website}" style="color:#ffffff;text-decoration:none;">aureon.pt</a><br>
            <span style="color:#c9d0d5;">Lisboa · Setúbal · Algarve · Alentejo</span>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;
}

function detailRow(label, value) {
  return `<tr>
    <td style="padding:8px 12px 8px 0;width:120px;vertical-align:top;color:#6b747b;font-size:13px;">${escapeHtml(label)}</td>
    <td style="padding:8px 0;vertical-align:top;color:${brand.ink};font-size:14px;font-weight:600;">${escapeHtml(value || "Não indicado")}</td>
  </tr>`;
}

export function leadNotificationHtml(data) {
  const content = `
    <p style="margin:0 0 8px;color:${brand.orange};font-size:12px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;">Novo contacto do site</p>
    <h1 style="margin:0 0 18px;color:${brand.ink};font-size:25px;line-height:32px;">Pedido de orçamento recebido</h1>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top:1px solid #ece7e0;border-bottom:1px solid #ece7e0;">
      ${detailRow("Nome", data.name)}
      ${detailRow("Telefone", data.phone)}
      ${detailRow("E-mail", data.email)}
      ${detailRow("Local", data.location)}
      ${detailRow("Região", data.region)}
      ${detailRow("Serviço", data.service)}
      ${detailRow("Origem", data.source === "calculadora" ? "Calculadora" : "Formulário")}
    </table>
    <h2 style="margin:24px 0 8px;color:${brand.ink};font-size:16px;">Descrição do pedido</h2>
    <div style="padding:16px;background:${brand.sand};border-left:4px solid ${brand.orange};font-size:14px;line-height:22px;white-space:pre-wrap;">${escapeHtml(data.description)}</div>
    <p style="margin:20px 0 0;color:#6b747b;font-size:12px;line-height:19px;">Responda diretamente a esta mensagem para contactar o cliente quando foi indicado um endereço de e-mail.</p>`;
  return shell({ preview: `Novo pedido de ${data.name}`, content });
}

export function clientConfirmationHtml({ name, service }) {
  const content = `
    <p style="margin:0 0 8px;color:${brand.orange};font-size:12px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;">Pedido recebido</p>
    <h1 style="margin:0 0 18px;color:${brand.ink};font-size:25px;line-height:32px;">Obrigado pelo seu contacto, ${escapeHtml(name)}.</h1>
    <p style="margin:0 0 16px;color:#4f5d67;font-size:15px;line-height:24px;">Recebemos o seu pedido relacionado com <strong>${escapeHtml(service)}</strong>. A informação será analisada para perceber o âmbito do trabalho e o próximo passo adequado.</p>
    <div style="margin:22px 0;padding:18px;background:${brand.sand};border-left:4px solid ${brand.orange};">
      <strong style="display:block;margin-bottom:7px;color:${brand.ink};font-size:14px;">Para facilitar a análise</strong>
      <span style="color:#5f6b73;font-size:13px;line-height:21px;">Se ainda não enviou fotografias, medidas aproximadas ou a localização da obra, pode responder a este e-mail ou utilizar o WhatsApp.</span>
    </div>
    <table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr><td style="border-radius:6px;background:${brand.orange};">
      <a href="https://wa.me/351926378947" style="display:inline-block;padding:12px 20px;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;">Enviar informações pelo WhatsApp</a>
    </td></tr></table>
    <p style="margin:24px 0 0;color:${brand.ink};font-size:13px;line-height:20px;">
      <span style="color:#7a8389;">Acompanhamento e coordenação</span><br>
      <strong>Juseppe Sena</strong><br>
      Responsável pela Coordenação de Obras
    </p>
    <p style="margin:22px 0 0;color:#7a8389;font-size:11px;line-height:18px;">Esta mensagem confirma apenas a receção do pedido. Não constitui orçamento, adjudicação ou compromisso de execução.</p>`;
  return shell({ preview: "Recebemos o seu pedido na Aureon Construção", content });
}

export function clientConfirmationText({ name, service }) {
  return [
    `Obrigado pelo seu contacto, ${name}.`,
    "",
    `Recebemos o seu pedido relacionado com ${service}. A informação será analisada para perceber o âmbito do trabalho e o próximo passo adequado.`,
    "",
    "Se ainda não enviou fotografias, medidas aproximadas ou a localização da obra, pode responder a este e-mail ou utilizar o WhatsApp: +351 926 378 947.",
    "",
    "Esta mensagem confirma apenas a receção do pedido. Não constitui orçamento, adjudicação ou compromisso de execução.",
    "",
    "Acompanhamento e coordenação",
    "Juseppe Sena",
    "Responsável pela Coordenação de Obras",
    "",
    "Aureon Construção",
    "Construção, Remodelação & Soluções Técnicas",
    "https://aureon.pt",
  ].join("\n");
}
