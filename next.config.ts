import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static one-page portfolio: `next build` emits ./out for any static host.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    // A stray package-lock.json in the user's home directory would otherwise be picked up as the workspace root.
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
