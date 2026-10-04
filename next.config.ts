import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (no Vercel). `next dev` is unaffected.
  output: "export",
};

export default nextConfig;
