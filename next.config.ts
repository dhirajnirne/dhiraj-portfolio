import type { NextConfig } from "next";

// GitHub Pages serves this repo from /dhiraj-portfolio/, not the domain root,
// so the static export needs a basePath — but the Vercel deployment serves
// from the root and must NOT get one. Gated behind an env var the GitHub
// Actions workflow sets, so `next build` (used by Vercel) is unaffected.
const isGhPages = process.env.DEPLOY_TARGET === "gh-pages";
const repoBasePath = "/dhiraj-portfolio";

const nextConfig: NextConfig = {
  ...(isGhPages && {
    output: "export",
    basePath: repoBasePath,
    assetPrefix: `${repoBasePath}/`,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
