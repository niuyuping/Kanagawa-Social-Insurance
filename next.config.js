/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:9002',
  },
};

export default nextConfig;

