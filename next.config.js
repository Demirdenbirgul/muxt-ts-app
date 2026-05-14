/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "placeho0l.co", // Hata veren domain
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "placeimg.dev",
      },
      {
        protocol: "https",
        hostname: "api.escuelajs.co",
      },
    ],
  },
};

module.exports = nextConfig;