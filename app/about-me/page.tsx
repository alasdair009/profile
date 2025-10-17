import { AboutMe } from "@/entities";
import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { sanityClient } from "@/lib/sanity/client";
import { SanityDocument } from "next-sanity";
import {
  GET_ALL_ROLLERCOASTERS,
  GET_ROLLERCOASTER_COUNT,
} from "@/lib/sanity/queries";

export const metadata: Metadata = generateMetaData(
  "About Me",
  "A little bit of information about me",
  "about-me"
);

export const revalidate = 86400;

export default async function AboutMePage() {
  const count = await sanityClient.fetch<number>(GET_ROLLERCOASTER_COUNT);
  return (
    <AboutMe
      contactFormEndPoint={`${process.env.NEXT_FORMSPREE_CONTACT_ENDPOINT}`}
      numberOfRollercoasters={count}
    />
  );
}
