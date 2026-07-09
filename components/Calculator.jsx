"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { areaPrices, fixedPrices, calculatorOptions } from "@/data/prices";
import { publishedRegions } from "@/data/regions";
import { site } from "@/data/site";
import Icon from "./Icon";

const money = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export default function Calculator({ defaultService = "microcimento", compact = false }) {
  const validDefault =
    areaPrices.some((item) => item.id === defaultService) || fixedPrices[defaultService]
      ? defaultService
      : "microcimento";
  const [service, setService] = useState(validDefault);
  const [area, setArea] = useState(50);
  const [space, setSpace] = useState("interior");
  const [condition, setCondition] = useState("bom");
  const [finish, setFinish] = useState("standard");
  const [region, setRegion] = useState("");
  const [calculated, setCalculated] = useState(true);
  const [copied, setCopied] = useState(false);
  const selected = areaPrices.find((item) => item.id === service);
  const fixed = fixedPrices[service];

  const result = useMemo(() => {
    if (!selected) return null;
    const safeArea = Math.max(1, Math.min(10000, Number(area) || 1));
    const spaceFactor = calculatorOptions.spaces.find((item) => item.id === space)?.factor || 1;
    const conditionFactor = calculatorOptions.conditions.find((item) => item.id === condition)?.factor || 1;
    const factor = spaceFactor * conditionFactor;
    return {
      standard: safeArea * selected.standard * factor,
      premium: safeArea * selected.premium * factor,
    };
  }, [selected, area, space, condition]);

  const estimate = useMemo(() => {
    if (fixed) {
      return `Origem: calculadora. Estimativa indicativa para ${service}: ${fixed.map(([label, value]) => `${label} ${value}`).join("; ")}. Região: ${region || "não indicada"}. Não substitui visita técnica; o valor final depende de estado do imóvel, acessos, materiais, demolições, resíduos, especialidades, urgência e IVA. O orçamento final é confirmado após análise do pedido.`;
    }
    if (!selected || !result) return "";
    const value = finish === "premium" ? result.premium : result.standard;
    const finishLabel = finish === "premium" ? "Premium" : "Standard";
    return `Origem: calculadora. Estimativa indicativa: ${selected.label}, ${area} m², nível ${finishLabel}, ${money.format(value)}. Espaço: ${space}. Estado: ${condition}. Região: ${region || "não indicada"}. Não substitui visita técnica; o valor final depende de estado do imóvel, acessos, materiais, demolições, resíduos, especialidades, urgência e IVA. O orçamento final é confirmado após análise do pedido.`;
  }, [fixed, selected, result, finish, area, space, condition, region, service]);

  function calculate(event) {
    event.preventDefault();
    setCalculated(false);
    setCopied(false);
    window.setTimeout(() => setCalculated(true), 40);
  }

  async function copyEstimate() {
    await navigator.clipboard.writeText(estimate);
    setCopied(true);
  }

  const serviceSlug =
    selected?.serviceSlug ||
    (service === "cozinhas" ? "cozinhas" : service === "casas-de-banho" ? "casas-de-banho" : "");
  const contactParams = new URLSearchParams();
  if (serviceSlug) contactParams.set("servico", serviceSlug);
  if (region) contactParams.set("regiao", region);
  contactParams.set("origem", "calculadora");
  contactParams.set("calcServico", selected?.label || service);
  if (!fixed) {
    contactParams.set("area", String(area));
    contactParams.set("nivel", finish === "premium" ? "Premium" : "Standard");
    contactParams.set("espaco", space);
    contactParams.set("estado", condition);
  } else {
    contactParams.set("nivel", "Projeto completo");
  }
  contactParams.set("estimativa", estimate);
  const contactHref = `/contactos?${contactParams.toString()}#formulario`;
  const whatsappHref = `${site.whatsappBase}?text=${encodeURIComponent(`Olá Aureon.\n${estimate}`)}`;

  return (
    <div className={`calculator ${compact ? "p-6 md:p-8" : "p-7 md:p-12"}`}>
      <div className="mb-8 flex items-center gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-gold text-white">
          <Icon name="calculator" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-gold">Estimativa indicativa</p>
          <h2 className="text-2xl font-bold text-ink">Calcule um enquadramento inicial</h2>
        </div>
      </div>
      <p className="mb-6 max-w-3xl text-sm leading-6 text-ink/60">
        Esta ferramenta não substitui visita técnica. Serve para organizar uma referência inicial antes de enviar descrição, localização e fotografias para análise.
      </p>

      <form onSubmit={calculate} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <label className="field-label">
          Serviço
          <select value={service} onChange={(event) => setService(event.target.value)} className="field">
            <optgroup label="Preço por m²">
              {areaPrices.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
            </optgroup>
            <optgroup label="Projetos completos">
              <option value="cozinhas">Cozinha</option>
              <option value="casas-de-banho">Casa de banho</option>
            </optgroup>
          </select>
        </label>
        {!fixed && (
          <>
            <label className="field-label">
              Área aproximada (m²)
              <input type="number" min="1" max="10000" value={area} onChange={(event) => setArea(event.target.value)} className="field" />
            </label>
            <label className="field-label">
              Tipo de espaço
              <select value={space} onChange={(event) => setSpace(event.target.value)} className="field">
                {calculatorOptions.spaces.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
              </select>
            </label>
            <label className="field-label">
              Estado atual
              <select value={condition} onChange={(event) => setCondition(event.target.value)} className="field">
                {calculatorOptions.conditions.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
              </select>
            </label>
            <label className="field-label">
              Acabamento de referência
              <select value={finish} onChange={(event) => setFinish(event.target.value)} className="field">
                {calculatorOptions.finishes.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
              </select>
            </label>
          </>
        )}
        <label className="field-label">
          Região
          <select value={region} onChange={(event) => setRegion(event.target.value)} className="field">
            <option value="">Por indicar</option>
            {publishedRegions.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}
          </select>
        </label>
        <button type="submit" className="button button-primary self-end">Atualizar estimativa</button>
      </form>

      {calculated && result && (
        <div className="result-grid animate-result" aria-live="polite">
          <div className={`result-card ${finish === "standard" ? "ring-2 ring-gold" : ""}`}>
            <span>Standard</span>
            <strong>{money.format(result.standard)}</strong>
            <small>Referência desde {money.format(selected.standard)} / m² antes dos fatores selecionados</small>
          </div>
          <div className={`result-card result-card-premium ${finish === "premium" ? "ring-4 ring-gold/30" : ""}`}>
            <span>Premium</span>
            <strong>{money.format(result.premium)}</strong>
            <small>Referência desde {money.format(selected.premium)} / m² antes dos fatores selecionados</small>
          </div>
        </div>
      )}

      {calculated && fixed && (
        <div className="mt-7 grid animate-result gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-live="polite">
          {fixed.map(([label, value], index) => (
            <div key={label} className={`rounded-xl border p-5 ${index === 3 ? "border-gold bg-gold/5" : "border-ink/10 bg-white"}`}>
              <span className="text-xs font-bold uppercase tracking-widest text-ink/50">{label}</span>
              <strong className="mt-2 block text-lg text-ink">{value}</strong>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 rounded-xl border border-ink/10 bg-white p-5 text-sm leading-6 text-ink/60">
        <strong className="block text-ink">Estimativa indicativa — não é preço fechado.</strong>
        {site.pricing.disclaimer}{" "}
        {site.pricing.vatIncluded === true
          ? "IVA incluído nos valores apresentados."
          : site.pricing.vatIncluded === false
            ? "IVA não incluído nos valores apresentados."
            : "IVA e condições fiscais a confirmar no orçamento."}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link href={contactHref} className="button button-dark">Enviar para o formulário</Link>
        <a href={whatsappHref} target="_blank" rel="noreferrer" className="button button-ghost">Enviar pelo WhatsApp</a>
        <button type="button" onClick={copyEstimate} className="button button-ghost">
          {copied ? "Estimativa copiada" : "Copiar estimativa"}
        </button>
      </div>
    </div>
  );
}
