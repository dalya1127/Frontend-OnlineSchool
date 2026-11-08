import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "habrastorage.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "news.mail.ru",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
