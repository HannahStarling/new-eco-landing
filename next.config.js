/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_HOST: "https://react.intelogis.ru",
    HTTPS: "true",
  },
  distDir: "build",
};

module.exports = nextConfig;
