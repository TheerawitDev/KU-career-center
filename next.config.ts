import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security: Remove X-Powered-By header to prevent server fingerprinting
  poweredByHeader: false,

  // Security: Prevent browser source maps in production to protect source code leakage
  productionBrowserSourceMaps: false,

  // Security: Comprehensive Enterprise HTTP Security Headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // Prevents Clickjacking attacks in iFrames
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Prevents MIME-type sniffing attacks
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // Protects sensitive URL referrers
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()", // Blocks unauthorized hardware access
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload", // Enforces HSTS HTTPS connection
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
