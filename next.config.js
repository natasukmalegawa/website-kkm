// next.config.js
const { i18n } = require('./next-i18next.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Example existing config
  i18n, // Add this line
  // ... any other configurations
};

module.exports = nextConfig;
