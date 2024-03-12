import { Metadata } from "next";
import { siteOrigin } from "@/lib/domains";

export const siteName = "Alasdair Macrae";
export const siteDescription = "The home of exciting web adventures";
export const generateMetaData = (
  pageTitle = "Home",
  pageDescription = siteDescription,
  pagePath = "",
  pageImage = `${siteOrigin}/og?title=${pageTitle}`
): Metadata => {
  return {
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    manifest: "/manifest.webmanifest",
    metadataBase: new URL(`${siteOrigin}/${pagePath}`),
    openGraph: {
      title: `${pageTitle} | ${siteName}`,
      images: pageImage,
      description: pageDescription,
      url: `${siteOrigin}/${pagePath}`,
    },
    twitter: {
      site: "@alasdair009",
      card: "summary_large_image",
      images: pageImage,
      title: `${pageTitle} | ${siteName}`,
      description: pageDescription,
    },
  };
};
