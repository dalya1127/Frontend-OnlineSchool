import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "habrastorage.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
