/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gpi.studio',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imaginationg.studio',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.imaginationg.studio',
        pathname: '/**',
      },
    ],
  },
  // Experimental features for Next.js 15
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig