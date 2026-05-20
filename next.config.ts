import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      afterFiles: [
        {
          source:
            '/:path((?!_next|favicon.ico|hair-services|skin-services|beauty-body-services|assets).*)',
          destination: '/index.html',
        },
      ],
    };
  },
};

export default nextConfig;
