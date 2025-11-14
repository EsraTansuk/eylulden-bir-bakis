import type { NextConfig } from "next";

const NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5001',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'soledad.pencidesign.net',
      },
    ],
    // Eski domains formatı (deprecated ama hala çalışıyor)
    domains: [
      'localhost',
      'images.unsplash.com',
      'soledad.pencidesign.net'
    ],
  },
}

export default NextConfig;
