import type { NextConfig } from "next";

const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? "/mdl-site" : "";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(isPages && {
    output: "export", // write static HTML to ./out
    basePath, // site lives under /mdl-site
    images: { unoptimized: true }, // Pages can't run Next's image optimizer
  }),
};

export default nextConfig;
