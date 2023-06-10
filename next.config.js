/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  experimental: {
    // serverComponentsExternalPackages: ["vscode-oniguruma", "shiki"],
    mdxRs: false,
  },
};

module.exports = nextConfig;
