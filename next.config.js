/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  env: {
    // baseUrl: 'http://localhost:5000',
    baseUrl: 'https://yyv-admin.onrender.com/',
  },
  reactStrictMode: true,
  swcMinify: false,
  distDir: 'build',
  webpack: (config) => {
    // Add path aliases
    config.resolve.alias['@'] = path.join(__dirname);
    return config;
  },
};

module.exports = nextConfig;
