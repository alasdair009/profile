import { Metadata } from "next";
import { siteOrigin } from "@/lib/domains";
import { OpenGraphType } from "next/dist/lib/metadata/types/opengraph-types";

export const siteName = "Alasdair Macrae";
export const siteDescription =
  "I am a front-end web engineer with a passion for pushing the limits of CSS to new heights. I have experience across a multitude of different languages and infrastructures and am always looking for exciting new challenges.";
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
    alternates: {
      canonical: `${siteOrigin}/${pagePath}`,
    },
    openGraph: {
      title: `${pageTitle} | ${siteName}`,
      images: pageImage,
      description: pageDescription,
      url: `${siteOrigin}/${pagePath}`,
      siteName: siteName,
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
    verification: {
      google: "vCDInKApeebRzehtS7SHeh9W-s40E09dUeHozKRSRHs",
      other: { "msvalidate.01": "0BE65EA398167BA7055ED2FEE79A4C7A" },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
};
