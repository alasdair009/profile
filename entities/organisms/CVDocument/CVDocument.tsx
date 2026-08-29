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
  getTotalExperienceYears,
  personalProjects,
  skills,
  workPortfolio,
} from "@/lib/data/professional";
import Image from "next/image";
import cvPhoto from "../../assets/me.webp";
import qrCode from "../../assets/qr.svg";
import placeholder from "../../assets/am.svg";
import type { HTMLAttributes } from "react";
import { myName } from "@/lib/metadata";
import { siteOrigin } from "@/lib/domains";
import { colors } from "@/styles/tokens";

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
  // const dateOfBirthString = process.env.CV_DOB ?? undefined;
  // const dateOfBirth = dateOfBirthString
  //   ? new Intl.DateTimeFormat("en-GB", {
  //       day: "numeric",
  //       month: "long",
  //       year: "numeric",
  //       timeZone: "UTC",
  //     }).format(new Date(`${dateOfBirthString}T00:00:00Z`))
  //   : undefined;

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
          <Heading level="h2" as="h1" color={colors.blackEvil}>
            {myName}
          </Heading>
          <Paragraph align="center" margin={"0 auto"} color={colors.blackEvil}>
            Email: {hasPersonalInfo ? email : "************"}
          </Paragraph>
          <Paragraph align="center" margin={"0 auto"} color={colors.blackEvil}>
            Website: {siteOrigin.replace("https://", "")}
          </Paragraph>
          <Paragraph align="center" color={colors.blackEvil}>
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
            <dt>Driving Licences:</dt>
            <dd>Full car and motorbike</dd>
          </DetailList>
        </div>
        <div className={styles.contentGridTitle}>Objective:</div>
        <div className={styles.contentGridBody}>
          <Paragraph fontSize="small" margin="none" color={colors.blackEvil}>
            Senior front-end engineer with {getTotalExperienceYears("web")}{" "}
            years experience, building high-quality digital experiences for
            global gaming communities. Specialist in React, Next.js, TypeScript,
            design systems and animated interfaces, with experience coordinating
            complex launches across more than 50 customer-facing and internal
            systems. Looking to apply the same combination of engineering,
            visual craft and player-focused thinking to opportunities across the
            world.
          </Paragraph>
        </div>
        <div className={styles.contentGridTitle}>Skills:</div>
        <div className={styles.contentGridBody}>
          <UnorderedList className={styles.list}>
            {skills.map((skill) => {
              if (skill.cv) {
                return (
                  <li key={skill.heading}>
                    <strong>{skill.heading}:</strong> {skill.cv}
                  </li>
                );
              }
            })}
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
                      color={colors.blackEvil}
                    >
                      {entry.title}
                    </Heading>
                    {entry.body.map((bodyLine, i) => (
                      <Paragraph
                        key={`${entry.title}b${i}`}
                        fontSize="small"
                        color={colors.blackEvil}
                      >
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
                    color={colors.blackEvil}
                  >
                    {project.title}
                  </Heading>
                  {project.body.map((bodyLine, i) => (
                    <Paragraph
                      key={`${project.title}b${i}`}
                      fontSize="small"
                      color={colors.blackEvil}
                      margin="none"
                    >
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
                    color={colors.blackEvil}
                  >
                    {role.position}
                  </Heading>
                  <Heading
                    className={`${styles.roleTitle} ${styles.roleTitleCompany}`}
                    level="h6"
                    as="h3"
                    align="left"
                    color={colors.blackEvil}
                  >
                    <Image
                      className={styles.roleLogo}
                      src={companyDetails[role.company].logo}
                      alt=""
                      height={10}
                    />{" "}
                    {companyDetails[role.company].name} - {roleDate}
                  </Heading>
                  <Paragraph
                    align="left"
                    margin="0"
                    fontSize="small"
                    color={colors.blackEvil}
                  >
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
          <Paragraph align="left" fontSize="small" color={colors.blackEvil}>
            Outside of work I am a former national trampolinist and current
            Level 4 Trampoline Coach for the Cambridge Cangaroos Trampoline
            Club. I also casually enjoy squash and travelling.
          </Paragraph>
          <Paragraph align="left" fontSize="small" color={colors.blackEvil}>
            If that was not enough time on the ground I am also a rollercoaster
            enthusiast having travelled to theme parks all over the world!
          </Paragraph>
          <Paragraph
            align="left"
            fontSize="small"
            color={colors.blackEvil}
            margin="none"
          >
            I am able to work efficiently both on-site and remotely and am a
            firm believer in building strong workplace relationships.
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
