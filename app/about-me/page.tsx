import {
  globalContentMaxWidth,
  globalDecorationMaxWidth,
  Heading,
  Paragraph,
  Video,
} from "@/entities";
import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { rem } from "polished";

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
          position: "relative",
        }}
      >
        <Video
          src="https://ftjjvjgljna2ohz8.public.blob.vercel-storage.com/trampoline-cambs.webm"
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
    </>
  );
}
