/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/alfariiizi/blogposts-vault/main/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
