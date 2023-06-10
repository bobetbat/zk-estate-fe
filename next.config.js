/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      "via.placeholder.com",
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://via.placeholder.com/',
        port: '',
        // pathname: '/account123/**',
      }
    ]
  },
};

module.exports = nextConfig;
