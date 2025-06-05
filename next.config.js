/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['imaginationg.studio', 'www.imaginationg.studio'],
  },
  // Experimental features for Next.js 15
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig