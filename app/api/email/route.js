import nodemailer from "nodemailer";
import { publishedServices } from "@/data/services";
import { publishedSubservices } from "@/data/subservices";

export const runtime = "nodejs";

const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const allowedServices = new Set(
  [...publishedServices, ...publishedSubservices].map((item) => item.slug)
);
const requests = new Map();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_FILES = 3;
const MAX_FILE_SIZE = 4 * 1024 * 1024;

function text(value, max = 5000) {
  return String(value || "").trim().slice(0, max);
}

function validEmail(value) {
  return !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validPhone(value) {
  return /^[+()\d\s.-]{6,30}$/.test(value);
}

function safeFilename(name, index) {
  const cleaned = String(name || `imagem-${index + 1}`)
    .normalize("NFKD")
    .replace(/[^\w.-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 100);
  return cleaned || `imagem-${index + 1}`;
}

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (requests.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) return true;
  recent.push(now);
  requests.set(ip, recent);
  if (requests.size > 500) {
    for (const [key, values] of requests) {
      if (!values.some((time) => now - time < WINDOW_MS)) requests.delete(key);
    }
  }
  return false;
}

export async function POST(request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "local";
    if (isRateLimited(ip)) {
      return Response.json(
        { message: "Foram enviados vários pedidos. Aguarde alguns minutos e tente novamente." },
        { status: 429 }
      );
    }

    const form = await request.formData();
    if (text(form.get("company_website"), 200)) {
      return Response.json({ ok: true });
    }

    const name = text(form.get("name"), 100);
    const phone = text(form.get("phone"), 30);
    const email = text(form.get("email"), 150);
    const location = text(form.get("location"), 150);
    const region = text(form.get("region"), 50);
    const service = text(form.get("service"), 100);
    const description = text(form.get("description"), 5000);
    const consent = text(form.get("consent"), 20);
    const source = text(form.get("source"), 50) || "formulario";
    const calculatorService = text(form.get("calculatorService"), 150);
    const calculatorArea = text(form.get("calculatorArea"), 50);
    const calculatorLevel = text(form.get("calculatorLevel"), 80);
    const calculatorSpace = text(form.get("calculatorSpace"), 80);
    const calculatorCondition = text(form.get("calculatorCondition"), 80);

    if (
      name.length < 2 ||
      !validPhone(phone) ||
      !validEmail(email) ||
      location.length < 2 ||
      !allowedServices.has(service) ||
      description.length < 20 ||
      consent !== "accepted"
    ) {
      return Response.json(
        { message: "Confirme os campos obrigatórios e os dados introduzidos." },
        { status: 400 }
      );
    }

    const files = form
      .getAll("photos")
      .filter((file) => file && typeof file.arrayBuffer === "function" && file.size > 0);
    if (files.length > MAX_FILES) {
      return Response.json({ message: `Pode enviar no máximo ${MAX_FILES} imagens.` }, { status: 400 });
    }
    if (files.some((file) => file.size > MAX_FILE_SIZE)) {
      return Response.json({ message: "Cada imagem deve ter no máximo 4 MB." }, { status: 400 });
    }
    if (files.some((file) => !allowedTypes.has(file.type))) {
      return Response.json({ message: "Tipo de ficheiro não permitido." }, { status: 400 });
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return Response.json(
        { message: "Serviço de email ainda não configurado." },
        { status: 503 }
      );
    }

    const attachments = await Promise.all(
      files.map(async (file, index) => ({
        filename: safeFilename(file.name, index),
        content: Buffer.from(await file.arrayBuffer()),
        contentType: file.type,
      }))
    );

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || "true") === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Site Aureon" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || "juseppesena11@gmail.com",
      replyTo: email || undefined,
      subject: `Novo pedido de orçamento - ${service}`,
      text: [
        `Origem: ${source === "calculadora" ? "calculadora" : "formulário"}`,
        `Nome: ${name}`,
        `Telefone: ${phone}`,
        `Email: ${email || "Não indicado"}`,
        `Local: ${location}`,
        `Região: ${region || "Não indicada"}`,
        `Serviço: ${service}`,
        ...(source === "calculadora"
          ? [
              `Serviço na calculadora: ${calculatorService || "Não indicado"}`,
              `Área/m²: ${calculatorArea || "Não indicada"}`,
              `Nível escolhido: ${calculatorLevel || "Não indicado"}`,
              `Tipo de espaço: ${calculatorSpace || "Não indicado"}`,
              `Estado escolhido: ${calculatorCondition || "Não indicado"}`,
              `Anexos: ${files.length}`,
            ]
          : [`Anexos: ${files.length}`]),
        "",
        description,
      ].join("\n"),
      attachments,
    });
    return Response.json({ ok: true });
  } catch {
    console.error("Falha ao processar formulário de contacto.");
    return Response.json(
      { message: "Não foi possível enviar a mensagem." },
      { status: 500 }
    );
  }
}
