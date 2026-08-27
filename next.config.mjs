/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/capoto", destination: "/servicos/capoto-etics", permanent: true },
      { source: "/servicos/capoto", destination: "/servicos/capoto-etics", permanent: true },
      { source: "/etics", destination: "/servicos/capoto-etics", permanent: true },
      { source: "/isolamento-termico-exterior", destination: "/capoto/isolamento-termico-exterior", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; img-src 'self' data:; font-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; connect-src 'self';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
