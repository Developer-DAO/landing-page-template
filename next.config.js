const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias["@"] = __dirname;
    return config;
  },
};

module.exports = nextConfig;
