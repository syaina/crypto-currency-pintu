/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import path from 'path';

// Helper to resolve paths
path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
