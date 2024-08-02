import { SanityImageSource } from "@sanity/asset-utils";
import { PortableTextBlock } from "@sanity/types";

export const GET_ALL_POSTS = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  slug,
  description,
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
  description: string;
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
  inversions,
  coords,
  themeparks,
  "themeparkTitle": themeparks->title,
  "themeparkCountry": themeparks->country,
  "themeparkLogo": themeparks->logo,
  "themeparkcoords": themeparks->coords,
}`;

export const GET_ALL_PARKS = `*[_type == "themeparks"] | order(title asc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  country,
  coords,
}`;
