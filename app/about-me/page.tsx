import {
    BlockQuote, ContactForm,
    CopyBlock,
    FixedPlate,
    globalContentMaxWidth,
    globalDecorationMaxWidth,
    Heading,
    HorizontalRule,
    Paragraph,
    sizes, SocialMediaBar, Spacer,
    Video,
} from "@/entities";
import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { rem } from "polished";
import trampolinePosterImage from "../../entities/assets/trampoline-poster.png";
import rollercoasterImage from "../../entities/assets/rollercoaster.svg";
import homekitImage from "../../entities/assets/homekit.svg";
import { rollercoasterHistory } from "@/lib/data/rollercoasters";

export const metadata: Metadata = generateMetaData(
  "About Me",
  "A little bit of information about me",
  "about-me"
);
export default function AboutMe() {
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
            In my spare time I am a trampoline gymnast, judge and coach for
            Cambridge Cangaroos trampoline club.
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
          country. I have over <strong>{rollercoasterHistory.length}</strong>{" "}
          credits from coasters around the world with my personal favourite ride
          being <strong>Tatsu</strong> at Six Flags Magic Mountain closely
          followed by <strong>Kingda Ka</strong> at Six Flags Great Adventure.
        </Paragraph>
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
        <ContactForm />
    </>
  );
}
