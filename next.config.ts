import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  webpack: (config: any) => {
    config.optimization.splitChunks = {
      chunks: "all",
      maxSize: 20000000, // Batas ukuran 24MB biar aman
    };
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};


export default nextConfig;
