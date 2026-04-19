import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/dhoni-entertainment-revamp",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
