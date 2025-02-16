/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config:any) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
