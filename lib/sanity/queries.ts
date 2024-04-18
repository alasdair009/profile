import { SanityImageSource } from "@sanity/asset-utils";
import { PortableTextBlock } from "@sanity/types";

export const GET_ALL_POSTS = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  slug,
  author->,
  mainImage {
    ...,
    asset->
  },
  categories[]->,
  publishedAt,
  body
}`;

export type Post = {
  title: string;
  slug: {
    current: string;
  };
  categories: string[];
  publishedAt: string;
  mainImage: {
    asset: SanityImageSource;
  };
  body: PortableTextBlock;
};

export const GET_ALL_ROLLERCOASTERS = `*[_type == "rollercoasters"] | order(firstRidden desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  speed,
  height,
  length,
  firstRidden,
  themeparks,
  "themeparkTitle": themeparks->title,
  "themeparkCountry": themeparks->country,
  "themeparkLogo": themeparks->logo,
}`;
