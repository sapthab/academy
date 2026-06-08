import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // static HTML export → publishable `out/` directory
  images: { unoptimized: true },
  trailingSlash: true, // emits /about/index.html etc. for clean static routing
};

export default nextConfig;
