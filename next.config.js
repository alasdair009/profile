/** @type {import('next').NextConfig} */

const {
  VERCEL_ENV,
  VERCEL_URL,
  ALLOW_TRANSITIONS,
  NEXT_FORMSPREE_CONTACT_ENDPOINT,
} = process.env;

const nextConfig = {
  env: {
    VERCEL_ENV,
    VERCEL_URL,
    ALLOW_TRANSITIONS,
    NEXT_FORMSPREE_CONTACT_ENDPOINT,
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
