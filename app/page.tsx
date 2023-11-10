import portraitImage from "../entities/assets/ali-portrait.svg";

import {
  ContentPlate,
  Heading, HorizontalRule,
  Link,
  Paragraph,
  Splash,
  Trampoline,
} from "@/entities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Alasdair Macrae's home online`,
  metadataBase: new URL("https://profile-ivory-three.vercel.app"),
  openGraph: {
    title: `Alasdair Macrae's home online`,
    images: "https://profile-ivory-three.vercel.app/og",
    description: "The home of exciting web adventures",
    url: "https://profile-ivory-three.vercel.app/",
  },
  twitter: {
    site: "@alasdair009",
    card: "summary_large_image",
    images: "https://profile-ivory-three.vercel.app/og",
    title: `Alasdair Macrae's home online`,
    description: "The home of exciting web adventures",
  },
};

export default function Home() {
  return (
    <>
      <Splash />
      <HorizontalRule margin="bottom" decoration={true} />
      <ContentPlate
        foregroundImage={portraitImage}
        foregroundImageAlt="Headshot photo of Ali"
        orientation="right"
      >
        <Heading level="h2">Hello there!</Heading>
        <Paragraph>
          My name is Alasdair (Ali). I am a web engineer with over 12 years
          experience working in the games industry.
        </Paragraph>
        <Paragraph>
          I have a passion for all things front-end and am passionate about
          pushing the limits of CSS on high fidelity web pages.
        </Paragraph>
        <Link href="about-me">About me</Link>
      </ContentPlate>
      <Trampoline />
    </>
  );
}
