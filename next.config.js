const {
  VERCEL_ENV,
  VERCEL_URL,
  ALLOW_TRANSITIONS,
  NEXT_FORMSPREE_CONTACT_ENDPOINT,
  NETATMO_WEATHER_REFRESH_TOKEN,
  NETATMO_CLIENT_ID,
  NETATMO_CLIENT_SECRET,
  EDGE_WRITE,
  EDGE_STORE_ID,
} = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    VERCEL_ENV,
    VERCEL_URL,
    ALLOW_TRANSITIONS,
    NEXT_FORMSPREE_CONTACT_ENDPOINT,
    NETATMO_WEATHER_REFRESH_TOKEN,
    NETATMO_CLIENT_ID,
    NETATMO_CLIENT_SECRET,
    EDGE_WRITE,
    EDGE_STORE_ID,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "secure.runescape.com",
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
