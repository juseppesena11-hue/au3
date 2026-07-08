export default function Icon({ name, className = "h-6 w-6" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .4 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    calculator: <><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 6h8v3H8zM8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01"/></>,
    building: <><path d="M4 22V5l8-3v20M12 8h8v14M8 7v1M8 12v1M8 17v1M16 12v1M16 17v1M2 22h20"/></>,
    hammer: <><path d="m14 5 5 5M12 7l5 5M3 21l10-10"/><path d="m14 3 7 7-3 3-7-7z"/></>,
    paint: <><path d="M14 3 4 13l7 7 10-10-7-7Z"/><path d="M5 12c-3 2-3 5-1 7s5 2 7 0"/></>,
    bolt: <path d="m13 2-9 12h7l-1 8 10-13h-7z"/>,
    drop: <path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z"/>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></>,
    texture: <><path d="M4 4h16v16H4z"/><path d="m4 15 11-11M8 20 20 8"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/></>,
    roof: <><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></>,
    bricks: <><path d="M3 4h18v16H3zM3 9h18M3 15h18M8 4v5M16 4v5M6 9v6M14 9v6M10 15v5M18 15v5"/></>,
    tree: <><path d="M12 22v-7M8 22h8"/><path d="M12 3 6 12h12L12 3Z"/><path d="m12 7-8 10h16L12 7Z"/></>,
    kitchen: <><path d="M4 4h16v16H4zM4 10h16M12 10v10M8 6h.01M16 6h.01M8 14h.01"/></>,
    bath: <><path d="M3 13h18v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-2ZM6 13V6a3 3 0 0 1 6 0"/><path d="M9 8h4"/></>,
    umbrella: <><path d="M3 12a9 9 0 0 1 18 0Z"/><path d="M12 12v7a3 3 0 0 0 6 0"/></>,
    star: <path d="m12 2 3 6 7 .9-5 4.8 1.3 6.8L12 17l-6.3 3.5L7 13.7 2 8.9 9 8l3-6Z"/>,
    ruler: <><path d="m4 19 15-15 2 2L6 21l-2-2Z"/><path d="m13 8 3 3M10 11l2 2M16 5l3 3"/></>,
  };

  return <svg {...common}>{paths[name] || paths.building}</svg>;
}
