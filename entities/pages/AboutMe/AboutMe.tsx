import { HTMLAttributes } from "react";
import styles from "./AboutMe.module.css";
import {
  BlockQuote,
  ContactForm,
  CopyBlock,
  FixedPlate,
  Heading,
  HorizontalRule,
  Link,
  Paragraph,
  SocialMediaBar,
  Spacer,
  Video,
} from "@/entities";
import trampolinePosterImage from "@/entities/assets/trampoline-poster.webp";
import rollercoasterImage from "@/entities/assets/rollercoaster.svg";
import Image from "next/image";
import skylinesImage from "@/entities/assets/city-skylines.webp";
import homekitImage from "@/entities/assets/homekit.svg";

type AboutMeProps = {
  /**
   * End point for the contact form.
   */
  contactFormEndPoint: string;
  /**
   * Number of rollercoasters ridden.
   */
  numberOfRollercoasters: number;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Website About Me page.
 */
export function AboutMe({
  contactFormEndPoint,
  numberOfRollercoasters,
  ...rest
}: AboutMeProps) {
  return (
    <div data-testid={AboutMe.displayName} {...rest}>
      <section className={styles.videoWrapper}>
        <Video
          webmSrc="https://files.alasdairmacrae.co.uk/trampoline-cambs.webm"
          mp4Src="https://files.alasdairmacrae.co.uk/trampoline-cambs.mp4"
          poster={trampolinePosterImage}
          className={styles.video}
        />
        <div className={styles.videoCopy}>
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
          country. I have
          <Link href="/about-me/rollercoasters">
            {numberOfRollercoasters > 0
              ? `over ${numberOfRollercoasters}`
              : "many"}{" "}
            credits from coasters around the world
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
      <figure className={styles.skylinesFigure}>
        <Image
          src={skylinesImage}
          alt="An ariel view of a city in the City Skyliens game"
          className={styles.skylinesImage}
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
      <ContactForm submitEndpoint={contactFormEndPoint} />
    </div>
  );
}
AboutMe.displayName = "AboutMe";
