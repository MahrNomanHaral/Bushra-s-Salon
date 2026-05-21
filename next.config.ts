import type { NextConfig } from 'next';

/** App Router pages served by Next (not the Vite SPA fallback). */
const NEXT_APP_ROUTES = [
  'hair-services',
  'skin-services',
  'beauty-body-services',
] as const;

const SPA_REWRITE_EXCLUDE = ['_next', 'favicon.ico', 'assets', ...NEXT_APP_ROUTES].join(
  '|'
);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/hair', destination: '/hair-services', permanent: true },
      { source: '/skin', destination: '/skin-services', permanent: true },
      {
        source: '/beauty-body',
        destination: '/beauty-body-services',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return {
      afterFiles: [
        { source: '/', destination: '/index.html' },
        {
          source: `/:path((?!${SPA_REWRITE_EXCLUDE}).*)`,
          destination: '/index.html',
        },
      ],
    };
  },
};

export default nextConfig;
