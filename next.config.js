/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["storage.ko-fi.com"],
  },
};

module.exports = nextConfig;
