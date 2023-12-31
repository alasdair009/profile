import { Metadata } from "next";
import { vercelOrigin } from "@/lib/domains";

export const siteName = "Alasdair Macrae";
export const siteDescription = "The home of exciting web adventures";
export const generateMetaData = (
  pageTitle = "Home",
  pageDescription = siteDescription,
  pagePath = ""
): Metadata => {
  return {
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    manifest: "/manifest.webmanifest",
    metadataBase: new URL(`${vercelOrigin}/${pagePath}`),
    openGraph: {
      title: `${pageTitle} | ${siteName}`,
      images: `${vercelOrigin}/og?title=${pageTitle}`,
      description: pageDescription,
      url: `https://profile-ivory-three.vercel.app/${pagePath}`,
    },
    twitter: {
      site: "@alasdair009",
      card: "summary_large_image",
      images: `${vercelOrigin}/og?title=${pageTitle}`,
      title: `${pageTitle} | ${siteName}`,
      description: pageDescription,
    },
  };
};
