import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/ecoelite-engineers',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
