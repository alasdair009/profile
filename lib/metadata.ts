import { Metadata } from "next";
import { vercelOrigin } from "@/lib/domains";

export const generateMetaData = (
  pageTitle = "Home",
  pageDescription = "The home of exciting web adventures",
  pagePath = ""
): Metadata => {
  return {
    title: `${pageTitle} | Alasdair Macrae`,
    description: pageDescription,
    metadataBase: new URL(`${vercelOrigin}/${pagePath}`),
    openGraph: {
      title: `${pageTitle} | Alasdair Macrae`,
      images: `${vercelOrigin}/og?title=${pageTitle}`,
      description: pageDescription,
      url: `https://profile-ivory-three.vercel.app/${pagePath}`,
    },
    twitter: {
      site: "@alasdair009",
      card: "summary_large_image",
      images: `${vercelOrigin}/og?title=${pageTitle}`,
      title: `${pageTitle} | Alasdair Macrae`,
      description: pageDescription,
    },
  };
};
