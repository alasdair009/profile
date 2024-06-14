import portraitImage from "../entities/assets/ali-portrait.svg";

import {
  ContactForm,
  ContentPlate,
  CopyBlock,
  FixedPlate,
  Heading,
  HorizontalRule,
  Lightning,
  Link,
  MorphingText,
  Orbit,
  Paragraph,
  SocialMediaBar,
  Spacer,
} from "@/entities";
import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { getTotalExperienceYears } from "@/lib/data/professional";
import { Splash } from "@/entities/organisms/Splash";

export const metadata: Metadata = generateMetaData();

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
          My name is Alasdair (Ali). I am a
          <strong>front-end web engineer</strong> with over{" "}
          {getTotalExperienceYears()} years experience working in the games
          industry.
        </Paragraph>
        <Paragraph>
          I have a passion for all things front-end and am focussed on pushing
          the limits of CSS on high fidelity web pages.
        </Paragraph>
        <Link href="about-me">About me</Link>
      </ContentPlate>
      <HorizontalRule margin="none" />
      <FixedPlate />
      <HorizontalRule margin="none" />
      <Lightning>
        <Heading level="h1" as="h2" align="center" textShadow={true}>
          Bringing the web to life...
        </Heading>
      </Lightning>
      <HorizontalRule margin="bottom" />
      <Orbit />
      <HorizontalRule margin="top" decoration={true} />
      <MorphingText values={["The", "Possibilities", "Are", "Endless"]} />
      <HorizontalRule margin="bottom" />
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
      <SocialMediaBar />
      <Spacer multiplier={2} />
      <ContactForm />
      <HorizontalRule margin="top" />
    </>
  );
}
