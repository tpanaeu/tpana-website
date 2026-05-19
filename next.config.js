const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const buildSecurityHeaders = (isDev) => [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value:
      "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "img-src 'self' data: https://c.bing.com",
      "font-src 'self' data:",
      "style-src 'self' 'unsafe-inline'",
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.clarity.ms`,
      "connect-src 'self' https://www.clarity.ms https://*.clarity.ms https://c.bing.com",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

module.exports = (phase) => {
  const securityHeaders = buildSecurityHeaders(phase === PHASE_DEVELOPMENT_SERVER);

  return {
    trailingSlash: true,
    async headers() {
      return [
        {
          source: "/:path*",
          headers: securityHeaders,
        },
      ];
    },
  };
};
