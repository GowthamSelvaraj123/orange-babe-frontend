/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add any specific next config here
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
