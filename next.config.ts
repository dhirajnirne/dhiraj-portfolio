import type { NextConfig } from "next";

// GitHub Pages serves this repo from /dhiraj-portfolio/, not the domain root,
// so the static export needs a basePath — but the Vercel deployment serves
// from the root and must NOT get one. Gated behind an env var the GitHub
// Actions workflow sets, so `next build` (used by Vercel) is unaffected.
const isGhPages = process.env.DEPLOY_TARGET === "gh-pages";
// Falls back to the same default used when testing this locally without
// setting the env var; the workflow always sets it explicitly.
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "/dhiraj-portfolio";

const nextConfig: NextConfig = {
  ...(isGhPages && {
    output: "export",
    basePath: repoBasePath,
    assetPrefix: `${repoBasePath}/`,
    images: { unoptimized: true },
    // Static export otherwise emits flat files (about.html), which GitHub
    // Pages only resolves for the exact no-trailing-slash URL. This emits
    // about/index.html instead, so both /about and /about/ resolve.
    trailingSlash: true,
  }),
};

export default nextConfig;
