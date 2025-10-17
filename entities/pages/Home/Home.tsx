import { HTMLAttributes } from "react";
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
  Splash,
} from "@/entities";
import portraitImage from "@/entities/assets/ali-portrait.svg";
import { getTotalExperienceYears } from "@/lib/data/professional";
import challengeImage from "@/entities/assets/challenge.svg";
import storybookImage from "@/entities/assets/storybook.svg";
import addValueImage from "@/entities/assets/addValue.svg";
import trampolineImage from "@/entities/assets/trampoline.svg";

type HomeProps = {
  /**
   * End point for the contact form.
   */
  contactFormEndPoint: string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Website landing page.
 */
export function Home({ contactFormEndPoint, ...rest }: HomeProps) {
  return (
    <div data-testid={Home.displayName} {...rest}>
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
        foregroundImage={challengeImage}
        foregroundImageAlt="Two swords moving back and forth"
      >
        <Heading level="h2" align="center">
          Challenging the web!
        </Heading>
        <Paragraph>
          Thinking up creative solutions to front-end web problems and projects
          has been the driving force behind my career. I have worked on a
          prodigious variety of projects including gaming websites, progressive
          web apps, desktop applications, internal company tools and even take
          on the occasional volunteer projects for local sports clubs!
        </Paragraph>
      </ContentPlate>
      <ContentPlate
        orientation="right"
        foregroundImage={storybookImage}
        foregroundImageAlt="Storybook Logo: White S on a pink rectangle"
      >
        <Heading level="h2" align="center">
          Design systems
        </Heading>
        <Paragraph>
          Design systems are a particular passion of mine. For many years I
          found them cumbersome and a burden to maintain but once I discovered
          Storybook my point of view shifted.
        </Paragraph>
        <Paragraph>
          I have built design systems for use cross-platform for websites and
          programs. I have a focussed goal to make the system both capable of
          delivering high quality visuals whilst maintaining the developer
          experience.
        </Paragraph>
        <Paragraph>
          This site also has its own design system that you can view at{" "}
          <Link target="_blank" href="https://design.alasdairmacrae.co.uk">
            design.alasdairmacrae.co.uk
          </Link>
          .
        </Paragraph>
      </ContentPlate>
      <ContentPlate
        foregroundImage={addValueImage}
        foregroundImageAlt="A hand raising plus symbols"
      >
        <Heading level="h2" align="center">
          How I add value
        </Heading>
        <Paragraph>
          I can develop well on my own or as part of a team. Throughout my
          career I have formed high performing teams to develop software that
          supports computer games including RuneScape, Old School RuneScape, and
          Scum. I often mentor other members of my team to maximise the
          potential of the front-end deliverable.
        </Paragraph>
        <Paragraph>
          I am fervent to hear of any opportunities that allow me to construct
          spectacular experiences for visitors to applications and websites
          across the world! I am based in the UK and have a preference for
          remote-first working.
        </Paragraph>
      </ContentPlate>
      <HorizontalRule margin="none" />
      <Lightning>
        <Heading level="h1" as="h2" align="center" textShadow={true}>
          Bringing the web to life...
        </Heading>
      </Lightning>
      <HorizontalRule margin="bottom" />
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
      <ContactForm submitEndpoint={contactFormEndPoint} />
    </div>
  );
}
Home.displayName = "Home";
