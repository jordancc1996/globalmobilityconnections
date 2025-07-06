/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  experimental: {
    appDir: false
  },
  eslint: {
    dirs: ['src']
  },
  typescript: {
    ignoreBuildErrors: false
  }
}

module.exports = nextConfig

