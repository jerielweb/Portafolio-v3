import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ISR Configuration for Incremental Static Regeneration
  // Pages with revalidate will be statically generated at build time
  // and revalidated in the background at specified intervals
  
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
      {
        protocol: 'http',
        hostname: '**',
        pathname: '/uploads/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  onDemandEntries: {
    // ISR On-Demand: Keep static pages in memory longer
    maxInactiveAge: 60 * 1000, // 60 seconds
    pagesBufferLength: 5, // Buffer 5 pages
  },
  // Experimental features for better ISR support
  experimental: {
    // Enable PPR (Partial Pre-rendering) when available
    ppr: undefined,
  },
};

export default nextConfig;
