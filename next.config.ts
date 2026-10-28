import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  outputFileTracingIncludes: { "/og": ["./app/og/fonts/**/*"] },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/despre-noi.html", destination: "/despre-noi", permanent: true },
      { source: "/acoperire-tatuaje-bucuresti", destination: "/cover-up-tatuaje-bucuresti", permanent: true },
      { source: "/preturi.html", destination: "/preturi-tatuaje", permanent: true },
      { source: "/preturi", destination: "/preturi-tatuaje", permanent: true },
      { source: "/video", destination: "/portofoliu", permanent: true },
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/index.php/:path+", destination: "/:path+", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
