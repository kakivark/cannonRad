import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isPages = process.env.GITHUB_PAGES === "true";

const repoBase = isPages ? "/cannonRad" : "";

if (isProd && isPages) {
  process.env.NEXT_PUBLIC_BASE_PATH = repoBase;
}

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd && isPages ? repoBase : "",
  assetPrefix: isProd && isPages ? `${repoBase}/` : "",
};

export default nextConfig;
