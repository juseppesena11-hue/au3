"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

function record(name, properties = {}) {
  track(name, properties);
  window.dataLayer?.push({ event: name, ...properties });
}

export default function ConversionTracker() {
  useEffect(() => {
    function handleClick(event) {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const page = window.location.pathname;
      const explicitEvent = link.dataset.analyticsEvent;

      if (explicitEvent) {
        record(explicitEvent, { page });
      } else if (href.startsWith("tel:")) {
        record("phone_click", { page });
      } else if (href.includes("wa.me/")) {
        record("whatsapp_click", { page });
      } else if (href.startsWith("/contactos")) {
        record("contact_click", { page });
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
