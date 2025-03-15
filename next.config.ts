import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lanyard.cnrad.dev',
        port: '',
        pathname: '/api/797072418937765918',
        search: '',
      },
    ],
  },
}
export default nextConfig;
