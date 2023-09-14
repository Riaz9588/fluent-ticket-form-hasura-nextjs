/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: "",
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ticket-form',
        basePath: false,
        permanent: false
      }
    ]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'boilerplate.riaz',
      },
    ],
  },
}

export default nextConfig