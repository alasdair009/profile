import {
  BlockQuote,
  colors,
  ContactForm,
  CopyBlock,
  FixedPlate,
  globalContentMaxWidth,
  globalDecorationMaxWidth,
  Heading,
  HorizontalRule,
  Link,
  Paragraph,
  sizes,
  SocialMediaBar,
  Spacer,
  Video,
} from "@/entities";
import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { rem } from "polished";
import trampolinePosterImage from "../../entities/assets/trampoline-poster.webp";
import skylinesImage from "../../entities/assets/city-skylines.webp";
import rollercoasterImage from "../../entities/assets/rollercoaster.svg";
import homekitImage from "../../entities/assets/homekit.svg";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity/client";
import { SanityDocument } from "next-sanity";
import { GET_ALL_ROLLERCOASTERS } from "@/lib/sanity/queries";

export const metadata: Metadata = generateMetaData(
  "About Me",
  "A little bit of information about me",
  "about-me"
);
export default async function AboutMe() {
  const rollercoasters = await sanityClient.fetch<SanityDocument[]>(
    GET_ALL_ROLLERCOASTERS
  );
  return (
    <>
      <section
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          maxWidth: rem(globalDecorationMaxWidth),
          margin: "0 auto",
          minHeight: "90vh",
          padding: sizes.s8.rem,
          position: "relative",
        }}
      >
        <Video
          webmSrc="https://ftjjvjgljna2ohz8.public.blob.vercel-storage.com/trampoline-cambs.webm"
          mp4Src="https://ftjjvjgljna2ohz8.public.blob.vercel-storage.com/trampoline-cambs.mp4"
          poster={trampolinePosterImage}
          style={{
            height: "100%",
            left: 0,
            opacity: 0.5,
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        />
        <div
          style={{
            margin: "0 auto",
            maxWidth: rem(globalContentMaxWidth),
            position: "relative",
          }}
        >
          <Heading>About Me</Heading>
          <Paragraph fontSize="mlarge">
            I am a keen front-end web developer with a passion for high-fidelity
            visual sites and pushing the boundaries of CSS.
          </Paragraph>
          <Paragraph fontSize="mlarge">
            In my spare time I am a{" "}
            <Link href="/about-me/trampolining">trampoline</Link> gymnast, judge
            and coach for Cambridge Cangaroos trampoline club.
          </Paragraph>
        </div>
      </section>
      <HorizontalRule margin="none" />
      <BlockQuote>Because life is too short not to jump</BlockQuote>
      <HorizontalRule margin="none" />
      <FixedPlate
        image={rollercoasterImage}
        alt="Rollercoaster"
        placeholder="empty"
      />
      <HorizontalRule margin="bottom" />
      <CopyBlock>
        <Heading level="h2">When i&apos;m on the ground...</Heading>
        <Paragraph>
          I reside in Suffolk UK and am a rollercoaster fanatic and always like
          to take a few days per year to visit theme parks up and down the
          country. I have over{" "}
          <Link href="/about-me/rollercoasters">
            {rollercoasters.length} credits from coasters around the world
          </Link>{" "}
          with my personal favourite ride being <strong>Tatsu</strong> at Six
          Flags Magic Mountain closely followed by <strong>Kingda Ka</strong> at
          Six Flags Great Adventure.
        </Paragraph>
        <Paragraph>
          I enjoy playing computer games especially construction and management
          simulators such as City Skylines and Planet Coaster. I am also partial
          to the occasional game of Rocket League - nice shot!
        </Paragraph>
      </CopyBlock>
      <figure
        style={{
          borderBottom: `${rem(1)} solid ${colors.greenGrass}`,
          borderTop: `${rem(1)} solid ${colors.greenGrass}`,
          margin: "0 auto",
          maxWidth: rem(globalDecorationMaxWidth),
          position: "relative",
          width: "100%",
        }}
      >
        <Image
          src={skylinesImage}
          alt="An ariel view of a city in the City Skyliens game"
          style={{
            display: "block",
            objectFit: "cover",
            opacity: 0.5,
            height: "auto",
            maxHeight: sizes.s512.rem,
            width: "100%",
          }}
        />
      </figure>
      <CopyBlock>
        <Spacer multiplier={4} />
        <Paragraph>
          When at home I am a smart-home enthusiast having been playing around
          with Apple&apos;s HomeKit platform for many years. I have been
          configuring custom plugins for HomeBride via Hoobs to increase the
          number of appliances manageable via my HomeKit installation.
        </Paragraph>
      </CopyBlock>
      <HorizontalRule margin="top" />
      <FixedPlate image={homekitImage} alt="HomeKit" placeholder="empty" />
      <HorizontalRule margin="bottom" />
      <SocialMediaBar />
      <Spacer multiplier={2} />
      <ContactForm
        submitEndpoint={`${process.env.NEXT_FORMSPREE_CONTACT_ENDPOINT}`}
      />
    </>
  );
}
