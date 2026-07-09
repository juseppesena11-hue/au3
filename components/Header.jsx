"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { site } from "@/data/site";

const links = [
  ["Início", "/"],
  ["Sobre nós", "/sobre-nos"],
  ["Serviços", "/servicos"],
  ["Portfólio", "/portfolio"],
  ["Regiões", "/regioes"],
  ["Blog", "/blog"],
  ["Contactos", "/contactos"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeButtonRef.current?.focus();
    function handleKey(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="container-shell flex h-[78px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="nav-link">
              {label}
            </Link>
          ))}
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="button button-primary py-3">
            Enviar pedido
          </a>
        </nav>
        <button
          type="button"
          ref={closeButtonRef}
          className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
      {open && (
        <nav className="fixed inset-x-0 top-[78px] max-h-[calc(100vh-78px)] overflow-y-auto border-t border-black/5 bg-white px-5 py-5 shadow-xl lg:hidden" aria-label="Navegação móvel">
          <div className="mx-auto flex max-w-2xl flex-col pb-6">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-black/5 py-4 text-lg font-semibold text-ink"
              >
                {label}
              </Link>
            ))}
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="button button-primary mt-5">
              Enviar pedido pelo WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
