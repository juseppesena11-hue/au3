"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { areaPrices, fixedPrices, assessmentServices, calculatorOptions } from "@/data/prices";
import { publishedRegions } from "@/data/regions";
import { site } from "@/data/site";
import Icon from "./Icon";
import { track } from "@vercel/analytics";

const money = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export default function Calculator({ defaultService = "microcimento", defaultSpace = "interior", compact = false }) {
  const validDefault =
    areaPrices.some((item) => item.id === defaultService) ||
    assessmentServices.some((item) => item.id === defaultService) ||
    fixedPrices[defaultService]
      ? defaultService
      : "microcimento";
  const [service, setService] = useState(validDefault);
  const [area, setArea] = useState(50);
  const validDefaultSpace = calculatorOptions.spaces.some((item) => item.id === defaultSpace)
    ? defaultSpace
    : "interior";
  const [space, setSpace] = useState(validDefaultSpace);
  const [condition, setCondition] = useState("bom");
  const [region, setRegion] = useState("");
  const [calculated, setCalculated] = useState(true);
  const [copied, setCopied] = useState(false);
  const selected = areaPrices.find((item) => item.id === service);
  const assessment = assessmentServices.find((item) => item.id === service);
  const fixed = fixedPrices[service];

  const result = useMemo(() => {
    if (!selected) return null;
    const safeArea = Math.max(1, Math.min(10000, Number(area) || 1));
    const spaceFactor = calculatorOptions.spaces.find((item) => item.id === space)?.factor || 1;
    const conditionFactor = calculatorOptions.conditions.find((item) => item.id === condition)?.factor || 1;
    const factor = spaceFactor * conditionFactor;
    return {
      minimum: safeArea * selected.minimum * factor,
      reference: safeArea * selected.reference * factor,
      maximum: safeArea * selected.maximum * factor,
    };
  }, [selected, area, space, condition]);

  const estimate = useMemo(() => {
    if (fixed) {
      return `Origem: calculadora. Estimativa indicativa para ${service}: ${fixed.map(([label, value]) => `${label} ${value}`).join("; ")}. Região: ${region || "não indicada"}. Não substitui visita técnica; o valor final depende de estado do imóvel, acessos, materiais, demolições, resíduos, especialidades, urgência e IVA. O orçamento final é confirmado após análise do pedido.`;
    }
    if (assessment) {
      return `Origem: calculadora. Pedido de avaliação para ${assessment.label}. Região: ${region || "não indicada"}. ${assessment.reason} O orçamento final é confirmado após análise do pedido.`;
    }
    if (!selected || !result) return "";
    return `Origem: calculadora. Estimativa indicativa: ${selected.label}, ${area} m², faixa entre ${money.format(result.minimum)} e ${money.format(result.maximum)}, referência média ${money.format(result.reference)}. Espaço: ${space}. Estado: ${condition}. Região: ${region || "não indicada"}. Não substitui visita técnica; o valor final depende de estado do imóvel, acessos, materiais, demolições, resíduos, especialidades, urgência e IVA. O orçamento final é confirmado após análise do pedido.`;
  }, [fixed, assessment, selected, result, area, space, condition, region, service]);

  function calculate(event) {
    event.preventDefault();
    setCalculated(false);
    setCopied(false);
    track("calculator_result", {
      service,
      region: region || "nao_indicada",
      pricingModel: selected ? "faixa_m2" : fixed ? "faixa_projeto" : "avaliacao",
    });
    window.setTimeout(() => setCalculated(true), 40);
  }

  async function copyEstimate() {
    await navigator.clipboard.writeText(estimate);
    setCopied(true);
  }

  const serviceSlug =
    selected?.serviceSlug || assessment?.serviceSlug ||
    (service === "cozinhas" ? "cozinhas" : service === "casas-de-banho" ? "casas-de-banho" : "");
  const contactParams = new URLSearchParams();
  if (serviceSlug) contactParams.set("servico", serviceSlug);
  if (region) contactParams.set("regiao", region);
  contactParams.set("origem", "calculadora");
  contactParams.set("calcServico", selected?.label || assessment?.label || service);
  if (selected) {
    contactParams.set("area", String(area));
    contactParams.set("nivel", "Faixa mínima, média e máxima");
    contactParams.set("espaco", space);
    contactParams.set("estado", condition);
  } else if (fixed) {
    contactParams.set("nivel", "Projeto completo");
  } else {
    contactParams.set("nivel", "Avaliação necessária");
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
            <optgroup label="Avaliação por características">
              {assessmentServices.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
            </optgroup>
          </select>
        </label>
        {selected && (
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
        <div className="mt-7 grid animate-result gap-4 md:grid-cols-3" aria-live="polite">
          <div className="result-card">
            <span>Faixa mínima</span>
            <strong>{money.format(result.minimum)}</strong>
            <small>Desde {money.format(selected.minimum)} / m² — condições simples e suporte favorável</small>
          </div>
          <div className="result-card border-gold ring-2 ring-gold/20">
            <span>Referência média</span>
            <strong>{money.format(result.reference)}</strong>
            <small>Cerca de {money.format(selected.reference)} / m² — enquadramento corrente</small>
          </div>
          <div className="result-card result-card-premium">
            <span>Faixa máxima</span>
            <strong>{money.format(result.maximum)}</strong>
            <small>Até {money.format(selected.maximum)} / m² — maior preparação, detalhe ou exigência</small>
          </div>
          <p className="text-xs leading-5 text-ink/50 md:col-span-3">{selected.scope}. Reparações localizadas, manutenção ou apenas pintura final são avaliadas como intervenções próprias e podem ficar fora desta estimativa de sistema completo.</p>
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

      {calculated && assessment && (
        <div className="mt-7 rounded-2xl border border-gold/25 bg-gold/5 p-6" aria-live="polite">
          <span className="text-xs font-bold uppercase tracking-[.18em] text-gold">Avaliação necessária</span>
          <h3 className="mt-2 text-xl font-bold text-ink">Este serviço não deve ser reduzido a um preço por m²</h3>
          <p className="mt-3 leading-7 text-ink/65">{assessment.reason}</p>
          <p className="mt-3 text-sm leading-6 text-ink/55">Envie fotografias, localização e uma descrição do que pretende. A Aureon organiza uma primeira leitura e indica o próximo passo.</p>
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
        <Link href={contactHref} data-analytics-event="calculator_to_form" className="button button-dark">Enviar para o formulário</Link>
        <a href={whatsappHref} data-analytics-event="calculator_to_whatsapp" target="_blank" rel="noreferrer" className="button button-ghost">Enviar pelo WhatsApp</a>
        <button type="button" onClick={copyEstimate} className="button button-ghost">
          {copied ? "Estimativa copiada" : "Copiar estimativa"}
        </button>
      </div>
    </div>
  );
}
