/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/next-kiosk',
  assetPrefix: '/next-kiosk/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
