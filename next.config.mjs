/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static export to GitHub Pages
  basePath: '/Akhil-Shibu', // Match your repo name
  trailingSlash: true, // Ensures compatibility with GitHub Pages
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Necessary for static export
  },
};

export default nextConfig;