/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true, // ✅ Prevents missing .map file errors
};

module.exports = nextConfig;

