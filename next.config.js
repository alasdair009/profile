/** @type {import('next').NextConfig} */

const { VERCEL_ENV, VERCEL_URL, ALLOW_TRANSITIONS } = process.env;

const nextConfig = {
  env: {
    VERCEL_ENV,
    VERCEL_URL,
    ALLOW_TRANSITIONS,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
