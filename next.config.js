/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    '@uiw/react-markdown-preview',
    '@uiw/react-md-editor',
    'react-markdown',
  ],
  webpack: (config) => {
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx'],
    };
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },
};

const removeImports = require('next-remove-imports')();

module.exports = removeImports({
  ...nextConfig,
});
