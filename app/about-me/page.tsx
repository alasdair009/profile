// import meImage from "../entities/assets/me.webp";

import { Heading } from "@/entities";
import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";

export const metadata: Metadata = generateMetaData(
  "About Me",
  "A little bit of information about me",
  "about-me"
);
export default function AboutMe() {
  return <Heading>About Me</Heading>;
}
