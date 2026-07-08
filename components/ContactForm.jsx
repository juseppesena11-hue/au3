"use client";

import { useState } from "react";
import Link from "next/link";
import { publishedServices } from "@/data/services";
import { publishedSubservices } from "@/data/subservices";
import { getRegion, publishedRegions } from "@/data/regions";
import { site } from "@/data/site";

const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
const maxFiles = 3;
const maxFileSize = 4 * 1024 * 1024;
const allServices = [...publishedServices, ...publishedSubservices];

function buildWhatsappHref(data) {
  const text = [
    "Olá Aureon, gostaria de pedir um orçamento.",
    `Nome: ${data.get("name") || ""}`,
    `Telefone: ${data.get("phone") || ""}`,
    `Email: ${data.get("email") || ""}`,
    `Local: ${data.get("location") || ""}`,
    `Serviço: ${data.get("service") || ""}`,
    `Descrição: ${data.get("description") || ""}`,
  ].join("\n");
  return `${site.whatsappBase}?text=${encodeURIComponent(text)}`;
}

export default function ContactForm({
  initialService = "",
  initialRegion = "",
  estimate = "",
}) {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [fallbackHref, setFallbackHref] = useState("");
  const region = getRegion(initialRegion);
  const validService = allServices.some((item) => item.slug === initialService)
    ? initialService
    : "";

  async function submit(event) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    setFallbackHref("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const files = data
      .getAll("photos")
      .filter((file) => file && typeof file === "object" && file.size > 0);

    if (files.length > maxFiles) {
      setStatus("error");
      setMessage(`Pode enviar no máximo ${maxFiles} imagens.`);
      return;
    }
    if (files.some((file) => file.size > maxFileSize)) {
      setStatus("error");
      setMessage("Cada imagem deve ter no máximo 4 MB.");
      return;
    }
    if (files.some((file) => !allowedTypes.includes(file.type))) {
      setStatus("error");
      setMessage("São aceites apenas imagens JPEG, PNG ou WebP.");
      return;
    }

    try {
      const response = await fetch("/api/email", { method: "POST", body: data });
      const result = await response.json();
      if (response.ok) {
        setStatus("success");
        setMessage("Mensagem enviada. Entraremos em contacto assim que possível.");
        form.reset();
        return;
      }
      if (response.status === 503) {
        setStatus("fallback");
        setFallbackHref(buildWhatsappHref(data));
        setMessage("O email está temporariamente indisponível. Pode enviar o mesmo pedido pelo WhatsApp.");
        return;
      }
      throw new Error(result.message || "Não foi possível enviar o pedido.");
    } catch (error) {
      setStatus("error");
      setFallbackHref(buildWhatsappHref(data));
      setMessage(error.message || "Não foi possível enviar. Pode tentar novamente ou enviar pelo WhatsApp.");
    }
  }

  return (
    <form id="formulario" onSubmit={submit} className="rounded-2xl bg-white p-6 shadow-soft md:p-10">
      <p className="mb-6 text-sm text-ink/55">Os campos assinalados com * são obrigatórios.</p>
      <div className="hidden" aria-hidden="true">
        <label>
          Não preencher
          <input name="company_website" tabIndex="-1" autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field-label">Nome *
          <input name="name" required minLength="2" maxLength="100" autoComplete="name" className="field" placeholder="O seu nome" />
        </label>
        <label className="field-label">Telefone *
          <input name="phone" type="tel" required minLength="6" maxLength="30" autoComplete="tel" className="field" placeholder="+351" />
        </label>
        <label className="field-label">Email
          <input name="email" type="email" maxLength="150" autoComplete="email" className="field" placeholder="nome@email.pt" />
        </label>
        <label className="field-label">Local da obra *
          <input
            name="location"
            required
            minLength="2"
            maxLength="150"
            autoComplete="address-level2"
            defaultValue={region?.name || ""}
            className="field"
            placeholder="Cidade ou concelho"
          />
        </label>
        <label className="field-label sm:col-span-2">Região de referência
          <select name="region" className="field" defaultValue={region?.slug || ""}>
            <option value="">Selecione, se souber</option>
            {publishedRegions.map((item) => (
              <option key={item.slug} value={item.slug}>{item.name}</option>
            ))}
          </select>
        </label>
        <label className="field-label sm:col-span-2">Serviço pretendido *
          <select name="service" required className="field" defaultValue={validService}>
            <option value="" disabled>Selecione um serviço</option>
            <optgroup label="Serviços principais">
              {publishedServices.map((service) => (
                <option key={service.slug} value={service.slug}>{service.title}</option>
              ))}
            </optgroup>
            <optgroup label="Intervenções específicas">
              {publishedSubservices.map((service) => (
                <option key={service.slug} value={service.slug}>{service.title}</option>
              ))}
            </optgroup>
          </select>
        </label>
        <label className="field-label sm:col-span-2">Descrição do projeto *
          <textarea
            name="description"
            required
            minLength="20"
            maxLength="5000"
            rows="6"
            defaultValue={estimate}
            className="field resize-y"
            placeholder="Indique o espaço, o estado atual e o que pretende alterar..."
          />
        </label>
        <label className="field-label sm:col-span-2">Fotografias (opcional)
          <input
            name="photos"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            multiple
            className="field file:mr-4 file:rounded-full file:border-0 file:bg-sand file:px-4 file:py-2 file:font-semibold file:text-ink"
          />
          <span className="mt-2 block text-xs font-normal text-ink/45">Até 3 imagens JPEG, PNG ou WebP, com 4 MB por ficheiro.</span>
        </label>
        <label className="flex items-start gap-3 text-sm leading-6 text-ink/65 sm:col-span-2">
          <input name="consent" type="checkbox" value="accepted" required className="mt-1 h-5 w-5 accent-gold" />
          <span>
            Aceito que a Aureon utilize estes dados para responder ao pedido, nos termos da{" "}
            <Link href="/politica-de-privacidade" className="font-bold text-gold underline">
              política de privacidade
            </Link>. *
          </span>
        </label>
      </div>
      <button disabled={status === "loading"} className="button button-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
        {status === "loading" ? "A enviar..." : "Enviar pedido de orçamento"}
      </button>
      <div aria-live="polite" aria-atomic="true">
        {message && (
          <div className="mt-4">
            <p className={`text-sm ${status === "success" ? "text-green-700" : status === "error" ? "text-red-700" : "text-gold"}`}>
              {message}
            </p>
            {fallbackHref && (
              <a href={fallbackHref} target="_blank" rel="noreferrer" className="button button-ghost mt-4">
                Enviar pelo WhatsApp
              </a>
            )}
          </div>
        )}
      </div>
      <p className="mt-5 text-xs leading-5 text-ink/40">
        Também pode contactar-nos pelo telefone {site.phone} ou por {site.email}.
      </p>
    </form>
  );
}
