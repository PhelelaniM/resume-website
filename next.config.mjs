/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',  // Enable static exports
  distDir: 'dist',   // Output to dist directory
  trailingSlash: true, // Add trailing slashes to URLs for better S3 compatibility
  assetPrefix: '/', // Use absolute paths for assets
}

export default nextConfig
