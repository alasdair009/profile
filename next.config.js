const {
  VERCEL_ENV,
  VERCEL_URL,
  ALLOW_TRANSITIONS,
  NEXT_FORMSPREE_CONTACT_ENDPOINT,
} = process.env;

/** @type {import('next').NextConfig} */
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
  async redirects() {
    return [
      {
        source: "/work",
        destination: "/portfolio",
        permanent: false,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: false,
      },
      {
        source: "/contact.php",
        destination: "/#contact",
        permanent: false,
      },
      {
        source: "/trampoline",
        destination: "/about-me",
        permanent: false,
      },
      {
        source: "/docs/Alasdair Macrae - CV.pdf",
        destination: "/portfolio",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
