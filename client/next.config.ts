import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/uploads/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  onDemandEntries: {
    maxInactiveAge: 60000,
    pagesBufferLength: 5,
  },
};

export default nextConfig;
