import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com", "dqobwse9q.cloudinary.com", "dx8w9qwl6.cloudinary.com", "img.youtube.com"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    qualities: [25, 40, 50, 75, 100],
  },
  // Target modern browsers to reduce polyfills
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Optimize for modern browsers
  experimental: {
    optimizePackageImports: ['lucide-react'],
    optimizeCss: true,
  },
  // Reduce JavaScript bundle size
  swcMinify: true,
};

export default nextConfig;
