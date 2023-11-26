import portraitImage from "../entities/assets/ali-portrait.svg";
import skyImage from "../entities/assets/sky.jpg";
import Image from "next/image";

import {
    ContactForm,
    ContentPlate,
    CopyBlock, globalContentMaxWidth,
    Heading,
    HorizontalRule,
    LabelledInput,
    LabelledTextArea,
    Link,
    Paragraph,
    sizes, SocialMediaLink, Spacer,
    Splash,
    Trampoline,
} from "@/entities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Alasdair Macrae's home online`,
  description: "The home of exciting web adventures",
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
          My name is Alasdair (Ali). I am a{" "}
          <strong>front-end web engineer</strong> with over 12 years experience
          working in the games industry.
        </Paragraph>
        <Paragraph>
          I have a passion for all things front-end and am focussed on pushing
          the limits of CSS on high fidelity web pages.
        </Paragraph>
        <Link href="about-me">About me</Link>
      </ContentPlate>
      <HorizontalRule margin="none" />
      <div
        style={{
          clipPath: "inset(0)",
          height: sizes.s512.rem,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          placeholder="blur"
          src={skyImage}
          alt="Ali trampolining outside somersaulting in the air"
          style={{
            height: "100%",
            left: 0,
            objectFit: "cover",
            position: "fixed",
            top: 0,
            width: "100%",
          }}
        />
      </div>
      <HorizontalRule margin="none" />
      <CopyBlock>
        <Heading level="h2">Get in touch</Heading>
        <Paragraph>
          I am always keen to hear about exciting opportunities that allow me to
          push the boundaries of what front-end technology can deliver.
          Throughout my career I have built a wide variety of systems across a
          huge range of tech stacks.
        </Paragraph>
        <Paragraph>
          You can contact me using the form below or find me on social media.
        </Paragraph>
      </CopyBlock>
      <nav style={{alignItems: "center", display: "flex", gap: sizes.s8.rem, justifyContent: "center", margin: "0 auto", maxWidth: globalContentMaxWidth, width: "100%"}}>
          <SocialMediaLink variant="x">X</SocialMediaLink>
          <SocialMediaLink variant="linkedin">LinkedIn</SocialMediaLink>
      </nav>
        <Spacer multiplier={2} />
      <ContactForm />
      <HorizontalRule margin="none" />
      <Trampoline />
    </>
  );
}
