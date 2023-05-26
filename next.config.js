/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_HOST: "https://react.intelogis.ru",
    HTTPS: "true",
  },
  images: {
    unoptimized: true,
  },
  distDir: "build",
};

module.exports = nextConfig;
