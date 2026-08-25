import {
  DetailList,
  Heading,
  HorizontalRule,
  Paragraph,
  Spacer,
  UnorderedList,
} from "@/entities";
import styles from "./CVDocument.module.css";
import {
  careerHistory,
  companyDetails,
  personalProjects,
  workPortfolio,
} from "@/lib/data/professional";
import Image from "next/image";
import cvPhoto from "../../assets/me.webp";
import qrCode from "../../assets/qr.svg";
import placeholder from "../../assets/am.svg";
import type { HTMLAttributes } from "react";
import { myName } from "@/lib/metadata";
import { siteOrigin } from "@/lib/domains";

type CVDocumentProps = {
  hasPersonalInfo?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export function CVDocument({
  hasPersonalInfo = false,
  className,
  ...rest
}: CVDocumentProps) {
  const phoneNumber = process.env.CV_PHONE ?? undefined;
  const email = process.env.CV_EMAIL ?? undefined;
  const dateOfBirthString = process.env.CV_DOB ?? undefined;
  const dateOfBirth = dateOfBirthString
    ? new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      }).format(new Date(`${dateOfBirthString}T00:00:00Z`))
    : undefined;

  return (
    <div
      className={`${styles.root} ${className}`}
      data-testid={CVDocument.displayName}
      {...rest}
    >
      <section className={styles.top}>
        <figure>
          <Image
            className={styles.avatar}
            src={cvPhoto}
            alt="Headshot of Alasdair Macrae wearing a blue suit"
            height={100}
            width={100}
          />
        </figure>
        <div>
          <Heading level="h2" as="h1">
            {myName}
          </Heading>
          <Paragraph align="center" margin={"0 auto"}>
            Email: {hasPersonalInfo ? email : "************"}
          </Paragraph>
          <Paragraph align="center" margin={"0 auto"}>
            Website: {siteOrigin.replace("https://", "")}
          </Paragraph>
          <Paragraph align="center">
            Phone: {hasPersonalInfo ? phoneNumber : "************"}
          </Paragraph>
        </div>
        <figure>
          <Image
            src={qrCode}
            alt="QR code for my website"
            height={100}
            width={100}
          />
        </figure>
      </section>
      <Spacer />
      <HorizontalRule decoration={true} margin="none" />
      <div className={styles.contentGrid}>
        <div className={styles.contentGridTitle}>Personal details:</div>
        <div className={styles.contentGridBody}>
          <DetailList className={styles.detailList} hasInlineContent={true}>
            <dt>Nationality:</dt>
            <dd>British</dd>
            <dt>Date of Birth:</dt>
            <dd>{hasPersonalInfo ? dateOfBirth : "******"}</dd>
            <dt>Driving Licenses:</dt>
            <dd>Full car and motorbike</dd>
          </DetailList>
        </div>
        <div className={styles.contentGridTitle}>Objective:</div>
        <div className={styles.contentGridBody}>
          Seeking a senior front-end web engineer role that builds upon my
          existing knowledge and enables the development of new skills.
          Currently residing in {hasPersonalInfo ? "Red Lodge, " : null}West
          Suffolk.
        </div>
        <div className={styles.contentGridTitle}>Skills:</div>
        <div className={styles.contentGridBody}>
          <UnorderedList className={styles.list}>
            <li>
              Extensive experience in professional web development within the
              gaming industry.
            </li>
            <li>
              Deep understanding of web languages JS/TS, CSS3, HTML5, EJS, FTL,
              PHP
            </li>
            <li>
              Passing for creating high fidelity web experiences using animation
              and creative css usage
            </li>
            <li>
              Successfully implemented multiple professional design systems
              using Storybook.js for use across multiple teams
            </li>
            <li>
              Solid comprehension of Node, Java and MySQL for web service
              backends
            </li>
            <li>
              Vast experience in React/Next for constructing web apps and sites
            </li>
            <li>
              Appreciation for AI Tools (Chat GPT / Codex) for development
              support
            </li>
            <li>
              Years of experience in various propitiatory in-house languages
              supporting legacy systems
            </li>
            <li>
              Good comprehension of web compliance and integration consent
              software: CookieBot, OneTrust etc
            </li>
            <li>
              Good knowledge of integration performance and analytical software:
              PostHog, GA/GTM, Singular etc
            </li>
          </UnorderedList>
        </div>
        <div className={styles.contentGridTitle}>Commercial projects:</div>
        <div className={styles.contentGridBody}>
          <div>
            {workPortfolio.map((entry) => {
              return (
                <article className={styles.portfolio} key={entry.title}>
                  <div className={styles.portfolioImage}>
                    <Image
                      src={entry.image ? entry.image : placeholder}
                      alt={`${entry.imageAlt}`}
                      width={100}
                    />
                  </div>
                  <div className={styles.portfolioBody}>
                    <Heading
                      className={`${styles.roleTitle} ${styles.roleTitlePos}`}
                      level="h5"
                      as="h3"
                      align="left"
                    >
                      {entry.title}
                    </Heading>
                    {entry.body.map((bodyLine, i) => (
                      <Paragraph key={`${entry.title}b${i}`} fontSize="small">
                        {bodyLine}
                      </Paragraph>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className={styles.contentGridTitle}>Personal projects:</div>
        <div className={styles.contentGridBody}>
          {personalProjects.map((project) => {
            return (
              <article className={styles.portfolio} key={project.title}>
                <div className={styles.portfolioImage}>
                  <Image
                    src={project.image ? project.image : placeholder}
                    alt={`${project.imageAlt}`}
                    width={100}
                  />
                </div>
                <div className={styles.portfolioBody}>
                  <Heading
                    className={`${styles.roleTitle} ${styles.roleTitlePos}`}
                    level="h5"
                    as="h3"
                    align="left"
                  >
                    {project.title}
                  </Heading>
                  {project.body.map((bodyLine, i) => (
                    <Paragraph key={`${project.title}b${i}`} fontSize="small">
                      {bodyLine}
                    </Paragraph>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
        <div className={styles.contentGridTitle}>Employment history:</div>
        <div className={styles.contentGridBody}>
          <div className={styles.employments}>
            {careerHistory.roles.map((role) => {
              const thisRoleKey = `${role.company}${role.position}`;
              const roleDate = `${role.startDate.toLocaleString("default", {
                month: "long",
              })} ${role.startDate.getFullYear()}`;
              return (
                <div key={thisRoleKey}>
                  <Heading
                    className={`${styles.roleTitle} ${styles.roleTitlePos}`}
                    level="h5"
                    as="h3"
                    align="left"
                  >
                    {role.position}
                  </Heading>
                  <Heading
                    className={`${styles.roleTitle} ${styles.roleTitleCompany}`}
                    level="h6"
                    as="h3"
                    align="left"
                  >
                    <Image
                      src={companyDetails[role.company].logo}
                      alt=""
                      height={10}
                    />{" "}
                    {companyDetails[role.company].name} - {roleDate}
                  </Heading>
                  <Paragraph align="left" margin="0" fontSize="small">
                    Responsible for:
                  </Paragraph>
                  <UnorderedList className={styles.list}>
                    {role.responsibilities.map((responsibility, i) => {
                      return (
                        <li key={`${thisRoleKey}r${i}`}>{responsibility}</li>
                      );
                    })}
                  </UnorderedList>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.contentGridTitle}>About me:</div>
        <div className={styles.contentGridBody}>
          <Paragraph align="left" margin="0" fontSize="small">
            Outside of work I am a former national trampolinist and current
            Level 4 Trampoline Coach for the Cambridge Cangaroos Trampoline
            Club.
          </Paragraph>
          <Paragraph align="left" margin="0" fontSize="small">
            If that was not enough time on the ground I am also a rollercoaster
            enthusiast having travelled to theme parks all over the world!
          </Paragraph>
        </div>
        <div className={styles.contentGridTitle}>Referees:</div>
        <div className={styles.contentGridBody}>
          References are available on request.
        </div>
      </div>
    </div>
  );
}
CVDocument.displayName = "CVDocument";
