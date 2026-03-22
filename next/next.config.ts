import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  }
};

export default nextConfig;
