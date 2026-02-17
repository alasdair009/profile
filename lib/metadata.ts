import { Metadata } from "next";
import { siteOrigin } from "@/lib/domains";
import { OpenGraphType } from "next/dist/lib/metadata/types/opengraph-types";
import blueskyIcon from "@/entities/atoms/SocialMediaLink/assets/bluesky.svg";
import facebookIcon from "@/entities/atoms/SocialMediaLink/assets/facebook.svg";
import gitHubIcon from "@/entities/atoms/SocialMediaLink/assets/github.svg";
import instagramIcon from "@/entities/atoms/SocialMediaLink/assets/instagram.svg";
import linkedInIcon from "@/entities/atoms/SocialMediaLink/assets/linkedin.svg";
import xIcon from "@/entities/atoms/SocialMediaLink/assets/x.svg";
import youTubeIcon from "@/entities/atoms/SocialMediaLink/assets/youtube.svg";

const xHandle = "alasdair009";

export const socialMedia = {
  blueSky: "https://bsky.app/profile/alasdair009.bsky.social",
  facebook: "https://www.facebook.com/alasdair009",
  github: "https://github.com/alasdair009",
  instagram: "https://www.instagram.com/alasdair009",
  linkedin: "https://www.linkedin.com/in/alasdairmacrae/",
  x: `https://x.com/${xHandle}`,
  youtube: "https://www.youtube.com/alasdair009",
};

export const siteName = "Alasdair Macrae";
export const myName = "Alasdair Macrae";
export const siteDescription =
  "Front-end web engineer with a passion for pushing the limits of CSS to new heights. I have experience as a developer with different languages & infrastructures to build awesome web experiences.";
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
    | undefined = undefined,
  alternates: {} | undefined = undefined
): Metadata => {
  return {
    title: `${pageTitle} | ${siteName} | front end web engineer trampolinist`,
    description: pageDescription,
    manifest: "/manifest.webmanifest",
    metadataBase: new URL(`${siteOrigin}/${pagePath}`),
    authors: { name: myName },
    alternates: {
      canonical: `${siteOrigin}/${pagePath}`,
      ...alternates,
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
      site: xHandle,
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
    other: ogArticle
      ? {
          "twitter:label1": "Written by",
          "twitter:data": myName,
          "twitter:label2": "Tagged under",
          "twitter:data2": `${ogArticle.tags}`,
        }
      : undefined,
  };
};
