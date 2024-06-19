import { Metadata } from "next";
import { siteOrigin } from "@/lib/domains";
import {
  OpenGraph,
  OpenGraphType,
} from "next/dist/lib/metadata/types/opengraph-types";

export const siteName = "Alasdair Macrae";
export const siteDescription = "The home of exciting web adventures";
export const generateMetaData = (
  pageTitle = "Home",
  pageDescription = siteDescription,
  pagePath = "",
  pageImage = `${siteOrigin}/og?title=${pageTitle}`,
  ogType: OpenGraphType = "website",
  ogArticle:
    | {
        publishedTime?: string;
        modifiedTime?: string;
        expirationTime?: string;
        authors?: null | string | URL | Array<string | URL>;
        section?: null | string;
        tags?: null | string | Array<string>;
      }
    | undefined = undefined
): Metadata => {
  return {
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    manifest: "/manifest.webmanifest",
    metadataBase: new URL(`${siteOrigin}/${pagePath}`),
    authors: { name: "Alasdair Macrae" },
    openGraph: {
      title: `${pageTitle} | ${siteName}`,
      images: pageImage,
      description: pageDescription,
      url: `${siteOrigin}/${pagePath}`,
      type: ogType,
      ...ogArticle,
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
