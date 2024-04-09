/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev01.dcarbon.org',
      },
      {
        protocol: 'https',
        hostname: 'static.esollabs.com',
      },
    ],
  },
}

export default nextConfig
