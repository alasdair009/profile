import { StaticImageData } from "next/image";
import jagexTimelineLogo from "../../entities/assets/jagex-logo.svg";
import pkrTimelineLogo from "../../entities/assets/pkr-logo.svg";
import codemastersTimelineLogo from "../../entities/assets/codemasters-logo.svg";
import rtwTimelineLogo from "../../entities/assets/realtimeworlds-logo.svg";
import rebrandImage from "@/entities/assets/rebrand.webp";
import leaguesScreenshotImage from "@/entities/assets/leagues.webp";
import jdsLogo from "@/entities/assets/jds-logo.svg";
import { colors } from "@/styles/tokens";
import jagexLauncherImage from "@/entities/assets/launcher.webp";
import runeScapeNewsImage from "@/entities/assets/runescape-news.webp";
import jagexCorporateImage from "@/entities/assets/jagex-corporate.webp";
import runeFestImage from "@/entities/assets/runefest.webp";
import { CSSProperties } from "react";

type Company = "jagex" | "pkr" | "realtimeWorlds" | "codemasters";
type Field = "web" | "design" | "qa";

type CareerHistoryData = {
  roles: {
    company: Company;
    position: string;
    startDate: Date;
    field: Field;
    responsibilities: string[];
  }[];
};

export const companyDetails: Record<
  Company,
  { name: string; logo: StaticImageData; url: string }
> = {
  jagex: {
    name: "Jagex Games Ltd",
    logo: jagexTimelineLogo,
    url: "https://www.jagex.com",
  },
  pkr: {
    name: "PKR Technologies Ltd",
    logo: pkrTimelineLogo,
    url: "https://en.wikipedia.org/wiki/PKR.com",
  },
  realtimeWorlds: {
    name: "RealTime Worlds",
    logo: rtwTimelineLogo,
    url: "https://en.wikipedia.org/wiki/Realtime_Worlds",
  },
  codemasters: {
    name: "Codemasters",
    logo: codemastersTimelineLogo,
    url: "https://www.ea.com/ea-studios/codemasters",
  },
};
export const careerHistory: CareerHistoryData = {
  roles: [
    {
      company: "jagex",
      position: "Senior Web Engineer",
      startDate: new Date("2018-04-01"),
      field: "web",
      responsibilities: [
        "Constructing and maintain cross-departmental design systems.",
        "Implementing new tech stacks to replace legacy proprietary systems.",
        "Supporting junior engineers in their professional development.",
        "Coordinating outsource teams on collaborative projects.",
      ],
    },
    {
      company: "jagex",
      position: "Web Developer",
      startDate: new Date("2013-07-01"),
      field: "web",
      responsibilities: [
        "Maintain and advance websites for all Jagex Games Ltd products.",
        "Deliver player-first driven web experiences across a variety of frameworks.",
        "Support other Jagex ventures including festivals, recruitment and third party acquisitions.",
      ],
    },
    {
      company: "jagex",
      position: "Software Tester",
      startDate: new Date("2012-11-01"),
      field: "qa",
      responsibilities: [
        "Accountable for the quality of Jagex web-based releases",
        "Build and maintain tools to assist with the QA process",
      ],
    },
    {
      company: "pkr",
      position: "QA Engineer",
      startDate: new Date("2012-06-01"),
      field: "qa",
      responsibilities: [
        "Implement automation tools for testing all PKR product flows",
        "Level up other members of the QA team in automation testing",
      ],
    },
    {
      company: "jagex",
      position: "QA Tester",
      startDate: new Date("2011-05-01"),
      field: "qa",
      responsibilities: [
        "Exploratory, destructive and scheduled testing of Jagex games including Stellar Dawn, RuneScape and Transformers Universe.",
        "Build and organise test scripting software for all studio QA teams.",
        "Lead the charge in migrating from proprietary ticket managing software to JIRA.",
      ],
    },
    {
      company: "codemasters",
      position: "Technical Level Designer",
      startDate: new Date("2011-02-01"),
      field: "design",
      responsibilities: [
        "Spline and asset placement on F1 2011 tracks",
        "AI racing line optimisation via 3D Studio Max",
        "Feedback areas for improvement in game mechanics",
      ],
    },
    {
      company: "codemasters",
      position: "QA Technician",
      startDate: new Date("2010-10-01"),
      field: "qa",
      responsibilities: [
        "Manually test online and network components of Operation Flashpoint: Red River for release",
        "Complete multiplayer passthroughs to confirm build stability",
        "Install builds on console dev kits to ensure feature platform parity",
      ],
    },
    {
      company: "realtimeWorlds",
      position: "QA Tester",
      startDate: new Date("2010-03-01"),
      field: "qa",
      responsibilities: [
        "Perform exploratory and scripted testing of APB",
        "Leading benchmark testing of builds to verify stability",
      ],
    },
  ],
};

/**
 * Total amount of professional experience
 * @param field to filter by
 */
export const getTotalExperienceYears = (field?: Field) => {
  const webPositions = careerHistory.roles
    .filter((role) => (field ? role.field === "web" : true))
    .sort((a, b) => {
      return +b.startDate - +a.startDate;
    });
  const lastStartDate = webPositions[webPositions.length - 1].startDate;
  return new Date().getFullYear() - lastStartDate.getFullYear();
};

export const getCurrentEmployer = () => {
  return careerHistory.roles.reduce(function (prev, current) {
    return prev && prev.startDate > current.startDate ? prev : current;
  });
};

type PortfolioEntry = {
  title: string;
  body: string[];
  backgroundCss: CSSProperties["background"];
  image?: StaticImageData;
  imageAlt?: string;
  url?: string;
  embedUrl?: string;
};

export const workPortfolio: PortfolioEntry[] = [
  {
    title: "RuneScape and Jagex rebrand",
    body: [
      "Implemented and coordinated a brand refresh and update across Jagex's entire ecosystem that included a simultaneous launch of over 50 systems including websites, apps, billing systems and internal tooling.",
    ],
    backgroundCss: `linear-gradient(#101d23,black)`,
    image: rebrandImage,
    imageAlt: "",
  },
  {
    title: "RuneScape & Old School RuneScape Community App",
    body: [
      "Built a multi-tenant Next app to support community immersion for RuneScape and Old School RuneScape with accompanying Storybook design system.",
      "The system includes HiScores, Polls and other systems that encourage players to return and immerse themselves in the games.",
    ],
    backgroundCss: `linear-gradient(#101d23,black)`,
    image: leaguesScreenshotImage,
    imageAlt: "",
    url: "https://rs.runescape.com/hiscores/leagues",
  },
  {
    title: "Jagex Design System",
    body: [
      "Responsible for constructing a large design system to style and maintain consistent branding across all Jagex Publishing Platform products including websites and apps. This library was written in React and displayed via Storybook.js.",
      "The system covers all areas of visual implementation including colours, animation, typography, sizing, components and is all structured using atomic design principles.",
    ],
    backgroundCss: `linear-gradient(#1c1c1c,${colors.blackEvil})`,
    image: jdsLogo,
    imageAlt: "White Jagex logo part-way through being drawn",
  },
  {
    title: "Jagex Launcher",
    body: [
      "The Jagex Launcher is an application that is used to run all Jagex products. I was responsible for maintaining the JDS (see above) integration that delivered the visual aesthetics and functionality for the front-end.",
    ],
    backgroundCss: `linear-gradient(#07111b,black)`,
    image: jagexLauncherImage,
    imageAlt: "The opening UI from the Jagex Launcher displaying RuneScape",
    url: "https://www.jagex.com/launcher",
  },
  {
    title: "RuneScape News",
    body: [
      "Rebuilt the RuneScape news article view hosted on proprietary technology to work better on modern browsers and be ready for the launch of RuneScape Mobile.",
    ],
    backgroundCss: `linear-gradient(#101d23,black)`,
    image: runeScapeNewsImage,
    imageAlt: "A RuneScape news article",
    url: "https://secure.runescape.com/m=news/vorkath-battle-for-forinthry---this-week-in-runescape",
  },
  {
    title: "Jagex Corporate website",
    body: [
      "The corporate website for Jagex Games Ltd. This site content was powered by Contentful CMS and later migrated to a fixed code driven version. The site is driven via Express with EJS for page templating.",
    ],
    backgroundCss: `linear-gradient(#4b4c01,black)`,
    image: jagexCorporateImage,
    imageAlt: "The Jagex corporate website homepage",
    url: "https://www.jagex.com",
  },
  {
    title: "RuneFest",
    body: [
      "RuneScape and Old School RuneScape&apos;s player event runs most years and requires a large input from teams across the studio. For this event I have built multiple versions of this site on many different tech stacks.",
      "I also built my first ever Progressive Web App for RuneFest 2017 that was used to assist players throughout their visit to the event.",
    ],
    backgroundCss: ``,
    image: runeFestImage,
    imageAlt: "The golden dragon RuneFest logo",
    url: "https://www.runefest.com",
  },
  {
    title: "RuneFest Panel",
    body: [
      "At RuneFest 2018 myself and other members of the team hosted a talk on one of the stages at the event explaining the work that goes into managing Jagex&apos;s web services.",
    ],
    backgroundCss: `linear-gradient(#101d23,black)`,
    embedUrl: "https://www.youtube.com/embed/JbVKUi9wezo?si=M2ZfSmqERR2hwzmV",
  },
];
