/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["storage.ko-fi.com"],
  },
};

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["storage.ko-fi.com"],
  },
});
