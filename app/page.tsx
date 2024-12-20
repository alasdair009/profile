import portraitImage from "../entities/assets/ali-portrait.svg";
import trampolineImage from "../entities/assets/trampoline.svg";

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
        itemScope={true}
        itemType="https://schema.org/Person"
      >
        <Heading level="h2">Building the awesome!</Heading>
        <Paragraph>
          My name is <span itemProp="givenName">Alasdair</span> (Ali). I am
          a&nbsp;
          <strong itemProp="jobTitle">front-end web engineer</strong> with over{" "}
          {getTotalExperienceYears()} years experience working in the games
          industry.
        </Paragraph>
        <Paragraph>
          I have a passion for all things front-end and am focussed on pushing
          the limits of CSS on high fidelity web pages.
        </Paragraph>
        <Link href="portfolio">Web engineering</Link>
      </ContentPlate>
      <HorizontalRule margin="none" />
      <FixedPlate />
      <HorizontalRule margin="none" />
      <ContentPlate
        foregroundImage={trampolineImage}
        foregroundImageAlt="A gymnast on a trampoline"
        orientation="left"
      >
        <Heading level="h2">Jumping above!</Heading>
        <Paragraph>
          I am also a British Gymnastics trampoline gymnast, coach and judge
          having been involved in the sport for over three decades. I currently
          coach at Cambridge Cangaroos trampoline club and hold the Performance
          Coach qualification.
        </Paragraph>
        <Link href="about-me">About me</Link>
      </ContentPlate>
      <HorizontalRule margin="none" />
      <Lightning>
        <Heading level="h1" as="h2" align="center" textShadow={true}>
          Bringing the web to life...
        </Heading>
      </Lightning>
      <HorizontalRule margin="bottom" />
      <CopyBlock>
        <Heading level="h2" align="center">
          Challenging what browsers can do!
        </Heading>
        <Spacer />
        <Paragraph>
          Thinking up creative solutions to front-end web problems and projects
          has been the driving force behind my career. I have worked on a
          prodigious variety of projects including gaming websites, progressive
          web apps, desktop applications, internal company tools and even take
          on the occasional volunteer projects for local sports clubs!
        </Paragraph>
        <Paragraph>
          I can develop well on my own or as part of a team. I formed high
          perming teams to develop software that supports computer games
          including RuneScape and Scum. I often mentor other members of my team
          to maximise the potential of the front-end deliverable.
        </Paragraph>
        <Paragraph>
          I am fervent to hear of any opportunities that allow me to construct
          spectacular experiences for visitors to applications and websites
          across the world! I am based in the UK and have a preference for
          remote-first working.
        </Paragraph>
      </CopyBlock>
      <HorizontalRule margin="both" />
      <Orbit />
      <HorizontalRule margin="top" decoration={true} />
      <MorphingText values={["The", "Possibilities", "Are", "Endless"]} />
      <HorizontalRule margin="bottom" />
      <CopyBlock id="contact">
        <Heading level="h2">Get in touch</Heading>
        <Paragraph>
          I would love to hear of any ideas you might wish to discuss with me. I
          am always open to learning new skills, and throughout my career I have
          built a wide variety of systems across a huge range of tech stacks.
        </Paragraph>
        <Paragraph>
          You can contact me using the form below or find me on social media.
        </Paragraph>
      </CopyBlock>
      <SocialMediaBar />
      <Spacer multiplier={2} />
      <ContactForm
        submitEndpoint={`${process.env.NEXT_FORMSPREE_CONTACT_ENDPOINT}`}
      />
    </>
  );
}
