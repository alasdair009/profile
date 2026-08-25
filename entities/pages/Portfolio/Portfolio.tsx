import { ComponentProps, CSSProperties, HTMLAttributes } from "react";
import {
  BlockQuote,
  ContactForm,
  CopyBlock,
  FixedPlate,
  Flurry,
  Heading,
  HorizontalRule,
  Lightfall,
  Link,
  Paragraph,
  PortfolioPlate,
  Skill,
  SocialMediaBar,
  Spacer,
  Timeline,
  TimelineEntry,
  UnorderedList,
} from "@/entities";
import aliSvg from "@/entities/assets/ali-portrait.svg";
import {
  careerHistory,
  companyDetails,
  getCurrentEmployer,
  getTotalExperienceYears,
  personalProjects,
  skills,
  workPortfolio,
} from "@/lib/data/professional";
import jagexLogo from "@/entities/assets/jagex-square.webp";
import styles from "./Portfolio.module.css";
import Image from "next/image";
import amLogo from "@/entities/assets/am.svg";

type PortfolioProps = {} & HTMLAttributes<HTMLDivElement>;

const currentEmployer = getCurrentEmployer();
const employmentHistory: TimelineEntry[] = [];
careerHistory.roles.forEach((employment) => {
  employmentHistory.push({
    date: `${employment.startDate.toLocaleString("default", {
      month: "long",
    })} ${employment.startDate.getFullYear()}`,
    icon: companyDetails[employment.company].logo,
    alt: `${employment.company} logo`,
    content: (
      <>
        <Heading level="h3">{companyDetails[employment.company].name}</Heading>
        <Paragraph align="center" fontSize="medium">
          {employment.position}
        </Paragraph>
        <UnorderedList>
          {employment.responsibilities.map((responsibility, index) => {
            return (
              <li key={`${employment.company}${index}`}>{responsibility}</li>
            );
          })}
        </UnorderedList>
      </>
    ),
  });
});

export function Portfolio({ ...rest }: PortfolioProps) {
  return (
    <div data-testid={Portfolio.displayName} {...rest}>
      <Lightfall>
        <Heading>Portfolio</Heading>
        <Paragraph align="center" fontSize="large" textWrap="balance">
          I am a front-end web engineer with a passion for solving complex
          problems with elegant solutions.
        </Paragraph>
      </Lightfall>
      <HorizontalRule decoration={true} margin="none" />
      <Flurry background={aliSvg} backgroundAlt="SVG portrait of Ali">
        <Heading as="h2" level="h2">
          A gamer at heart
        </Heading>
        <Paragraph align="center" fontSize="mlarge" textWrap="balance">
          I have over <strong>{getTotalExperienceYears("web")}</strong> years
          experience in web development building sites and apps for games
          studios and volunteer projects.
        </Paragraph>
        <Paragraph align="center" fontSize="mlarge" textWrap="balance">
          I blog about my experience and quests in web development, and you can
          view my public articles on my <Link href="/blog">blog page</Link>.
        </Paragraph>
        <Paragraph align="center" fontSize="mlarge" textWrap="balance">
          Below you can read about my employment history, skills and
          professional portfolio.
        </Paragraph>
      </Flurry>
      <HorizontalRule margin="none" />
      <CopyBlock>
        <BlockQuote>
          We are alive, for a moment, one second in the great abyss of time...
        </BlockQuote>
      </CopyBlock>
      <HorizontalRule margin="none" />
      <FixedPlate image={jagexLogo} alt="Green Jagex logo" />
      <HorizontalRule margin="none" />
      <CopyBlock>
        <Heading level="h2">Employment</Heading>
        <Paragraph>
          I have worked in the games industry for{" "}
          <strong>{getTotalExperienceYears()} years</strong> with{" "}
          <strong>{getTotalExperienceYears("web")}</strong> of those working in
          web development. I am currently employed at{" "}
          <Link href={companyDetails[currentEmployer.company].url}>
            {companyDetails[currentEmployer.company].name}
          </Link>{" "}
          as a {getCurrentEmployer().position}. I currently work predominantly
          remote and am mostly interested in roles that offer hybrid or
          remote-first employment. References are available upon request.
        </Paragraph>
        <Paragraph>
          Below is my Games Industry employment timeline at companies across the
          UK. Before working in games I have also worked in the USA as a
          Recreation Director at the{" "}
          <Link href="https://internationalgymnastics.com/">
            Internation Gymnastics Camp
          </Link>
          , Pennsylvania.
        </Paragraph>
      </CopyBlock>
      <Timeline entries={employmentHistory} />
      <HorizontalRule margin="bottom" />
      <section className={styles.skillsSection}>
        <Heading level="h2">Skills</Heading>
        <Paragraph>
          Throughout my career and personal projects I have a wide exposure to
          many frameworks and languages both industry standard and proprietary.
          Whilst my passion is predominantly front-end I also have many years of
          experience supporting back-end implementations across multiple
          platforms and am able to quickly adapt to support the needs of my
          team.
        </Paragraph>
        <Paragraph>
          I have also been passionate about blogging myself and other
          team&apos;s work to improve company cohesion and help identify value
          delivered to the business.
        </Paragraph>
        <div className={styles.skillGrid}>
          {skills.map((skill) => (
            <Skill
              key={skill.heading}
              background={skill.background}
              value={skill.value}
              heading={skill.heading}
              copy={skill.copy}
              grid={skill.grid}
            />
          ))}
          <figure
            className={styles.gridLogo}
            style={
              {
                "--xs-column-start": 1,
                "--xs-column-end": 3,
                "--xs-row-start": 3,
                "--s-column-start": 2,
                "--s-row-start": 2,
              } as CSSProperties
            }
          >
            <Image
              src={amLogo}
              alt="Am Logo"
              className={styles.gridLogoImage}
            />
          </figure>
        </div>
      </section>
      <HorizontalRule margin="bottom" />
      <section className={styles.portfolioSection}>
        <Heading level="h2">Work portfolio</Heading>
        <Paragraph>
          Below you will find a collection of projects I have worked on
          throughout my career and in my personal time. Referees for projects
          are available upon request but technical details may be withheld by
          the owner / business.
        </Paragraph>
      </section>
      {workPortfolio.map((entry, i) => {
        const plateProps: ComponentProps<
          typeof PortfolioPlate
        >["contentPlateProps"] = {
          foregroundImageAlt: entry.imageAlt,
          foregroundImage: entry.image,
          foregroundAnimate: true,
          orientation: (i & 1) === 0 ? "left" : "right",
          backgroundCss: entry.backgroundCss,
          embedUrl: entry.embedUrl,
        };
        return (
          <PortfolioPlate
            key={entry.title}
            contentPlateProps={plateProps}
            heading={entry.title}
            url={entry.url}
          >
            {entry.body.map((line, j) => (
              <Paragraph key={`${entry.title}l${j}`}>{line}</Paragraph>
            ))}
          </PortfolioPlate>
        );
      })}
      <HorizontalRule />
      <section className={styles.portfolioSection}>
        <Heading level="h2">Personal Portfolio</Heading>
        <Paragraph>
          The following is a library of person projects I have undertaken
          outside of my career and regular work. Most source code is available
          on my GitHub for review but private projects are available on request.
        </Paragraph>
      </section>
      {personalProjects.map((project, i) => {
        return (
          <PortfolioPlate
            contentPlateProps={{
              foregroundImage: project.image,
              foregroundImageAlt: project.imageAlt,
              orientation: (i & 1) === 0 ? "left" : "right",
            }}
            heading={project.title}
            key={project.title}
            url={project.url}
          >
            {project.body.map((line, j) => (
              <Paragraph key={`${project.title}l${j}`}>{line}</Paragraph>
            ))}
          </PortfolioPlate>
        );
      })}
      <HorizontalRule />
      <Heading level="h2">CV</Heading>
      <Paragraph align="center" textWrap="balance">
        My CV is available for a more condensed format of my professional and
        personal experience - <Link href="/cv">read it here</Link>.
      </Paragraph>
      <HorizontalRule decoration={true} />
      <Heading level="h2">Want to chat more?</Heading>
      <Paragraph align="center" textWrap="balance">
        I am always happy to talk about experience of discuss potential exciting
        new projects and ideas. You can reach out to me using the form below or
        contact me on Social Media.
      </Paragraph>
      <SocialMediaBar />
      <Spacer multiplier={2} />
      <ContactForm
        submitEndpoint={`${process.env.NEXT_FORMSPREE_CONTACT_ENDPOINT}`}
      />
    </div>
  );
}
Portfolio.displayName = "Portfolio";
