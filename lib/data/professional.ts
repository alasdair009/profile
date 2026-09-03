import { StaticImageData } from "next/image";
import jagexTimelineLogo from "../../entities/assets/jagex-logo.svg";
import pkrTimelineLogo from "../../entities/assets/pkr-logo.svg";
import codemastersTimelineLogo from "../../entities/assets/codemasters-logo.svg";
import rtwTimelineLogo from "../../entities/assets/realtimeworlds-logo.svg";
import rebrandImage from "@/entities/assets/rebrand.webp";
import leaguesScreenshotImage from "@/entities/assets/leagues.webp";
import jdsLogo from "@/entities/assets/jds-logo.svg";
import { colors } from "@/styles/tokens";
import cangaroosImage from "@/entities/assets/cangaroos.webp";
import jagexLauncherImage from "@/entities/assets/launcher.webp";
import runeScapeNewsImage from "@/entities/assets/runescape-news.webp";
import jagexCorporateImage from "@/entities/assets/jagex-corporate.webp";
import runeFestImage from "@/entities/assets/runefest.webp";
import oneTrustImage from "@/entities/assets/one-trust.webp";
import runeFestPanelImage from "@/entities/assets/runefest-panel.webp";
import weatherStationImage from "@/entities/assets/weather.webp";
import type { Property } from "csstype";
import { rgba } from "polished";
import { siteOrigin } from "@/lib/domains";

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
      startDate: new Date("2020-01-01"),
      field: "web",
      responsibilities: [
        "Constructing and maintaining cross-departmental design systems used by multiple teams",
        "Implementing new tech stacks to replace legacy proprietary systems",
        "Supporting junior engineers in their professional development",
        "Coordinating outsourced teams on collaborative projects",
        "Ensuring consent compliance on all Jagex services",
      ],
    },
    {
      company: "jagex",
      position: "Senior Web Developer",
      startDate: new Date("2018-04-01"),
      field: "web",
      responsibilities: [
        "Led development of RuneScape and Jagex web platforms",
        "Mastered proprietary languages to maintain and modernise legacy web systems",
        "Supported junior developers in their professional development",
        "Worked closely with game teams to deliver engaging player-focused web experiences",
      ],
    },
    {
      company: "jagex",
      position: "Web Developer",
      startDate: new Date("2014-07-01"),
      field: "web",
      responsibilities: [
        "Maintained and enhanced websites across the Jagex product portfolio",
        "Delivered player-focused web experiences across multiple frameworks",
        "Supported other Jagex initiatives, including festivals, recruitment and third-party acquisitions",
      ],
    },
    {
      company: "jagex",
      position: "Junior Web Developer",
      startDate: new Date("2013-07-01"),
      field: "web",
      responsibilities: [
        "Built supporting pages for the RuneScape 3 release",
        "Supported game-client-dependent interfaces for the in-browser Java applet",
      ],
    },
    {
      company: "jagex",
      position: "Software Tester",
      startDate: new Date("2012-11-01"),
      field: "qa",
      responsibilities: [
        "Ensured the quality of Jagex web-based releases",
        "Built and maintained tools supporting the QA process",
      ],
    },
    {
      company: "pkr",
      position: "QA Engineer",
      startDate: new Date("2012-06-01"),
      field: "qa",
      responsibilities: [
        "Implemented automation tools for testing all PKR product flows",
        "Coached QA colleagues in automation testing",
      ],
    },
    {
      company: "jagex",
      position: "QA Tester",
      startDate: new Date("2011-05-01"),
      field: "qa",
      responsibilities: [
        "Performed exploratory, destructive and scheduled testing of Jagex games including Stellar Dawn, RuneScape and Transformers Universe.",
        "Built and organised test scripting software for all studio QA teams.",
        "Led the migration from proprietary ticket-management software to Jira",
      ],
    },
    {
      company: "codemasters",
      position: "Technical Level Designer",
      startDate: new Date("2011-02-01"),
      field: "design",
      responsibilities: [
        "Placed splines and assets on F1 2011 tracks",
        "Optimised AI racing lines using 3D Studio Max",
        "Identified and communicated improvements to game mechanics",
      ],
    },
    {
      company: "codemasters",
      position: "QA Technician",
      startDate: new Date("2010-10-01"),
      field: "qa",
      responsibilities: [
        "Tested online and network components of Operation Flashpoint: Red River ahead of release",
        "Completed multiplayer playthroughs to confirm build stability",
        "Installed builds on console dev kits to ensure feature platform parity",
      ],
    },
    {
      company: "realtimeWorlds",
      position: "QA Tester",
      startDate: new Date("2010-03-01"),
      field: "qa",
      responsibilities: [
        "Performed exploratory and scripted testing of APB",
        "Led benchmark testing of builds to verify stability",
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

type Skill = {
  background?: Property.BackgroundColor;
  value?: number;
  heading: string;
  copy?: string;
  cv?: string;
  grid?: {
    xsmall: {
      columnStart: number;
      rowStart: number;
      columnEnd?: number;
    };
    small: {
      columnStart: number;
      rowStart: number;
      columnEnd?: number;
      rowEnd?: number;
    };
  };
};

export const skills: Skill[] = [
  {
    heading: "Frontend",
    cv: "JavaScript, TypeScript, React, Next.js, HTML, CSS, animation, SVG",
  },
  {
    heading: "Platforms",
    cv: "Node.js, Express, Contentful, Java, PHP, MySQL",
  },
  {
    background: rgba(colors.redHeat, 0.25),
    value: 100,
    heading: "Design Systems",
    copy: "I am an avid supporter of design system delivered through Storybook.js for display, maintenance and testing. I have planned and delivered progressively more ambitious implementations of these that have been of high value to the business.",
    cv: "Storybook, component libraries, design tokens, atomic design",
    grid: {
      xsmall: { columnStart: 1, rowStart: 1 },
      small: { columnStart: 1, rowStart: 1 },
    },
  },
  {
    heading: "Testing",
    cv: "Vitest, Jest, Storybook automation tests, Axe Testing, Chromatic integrations, UpTime monitoring",
  },
  {
    heading: "Quality and delivery",
    cv: "GitHub actions, BitBucket Pipelines, consent management, mentoring, vendor coordination",
  },
  {
    background: rgba(colors.greenGrass, 0.25),
    value: 100,
    heading: "CSS",
    copy: "Passionate about pushing the boundaries of what CSS can achieve in a browser.",
    grid: {
      xsmall: { columnStart: 2, rowStart: 1 },
      small: { columnStart: 2, rowStart: 1 },
    },
  },
  {
    background: rgba(colors.blueSea, 0.25),
    value: 100,
    heading: "React",
    copy: "Vast experience in React/Next.js for constructing web apps and sites for AAA games and corporate websites.",
    grid: {
      xsmall: { columnStart: 1, rowStart: 2, columnEnd: 3 },
      small: { columnStart: 1, columnEnd: 2, rowStart: 2, rowEnd: 4 },
    },
  },
  {
    background: rgba(colors.redHeat, 0.25),
    value: 100,
    heading: "php",
    copy: "Many years of experience in php on LAMP servers to deliver mysql database driven websites and internal web-based tools.",
    grid: {
      xsmall: { columnStart: 1, rowStart: 4 },
      small: { columnStart: 3, rowStart: 1, rowEnd: 3 },
    },
  },
  {
    background: rgba(colors.greenGrass, 0.25),
    value: 50,
    heading: "Java / FreeMarker",
    copy: "Moderate experience developing a proprietary Java based framework to support several very mature online MMORPGs.",
    grid: {
      xsmall: { columnStart: 2, rowStart: 4 },
      small: { columnStart: 2, columnEnd: 4, rowStart: 3, rowEnd: 4 },
    },
  },
  {
    background: rgba(colors.redHeat, 0.25),
    value: 25,
    heading: "Video editing",
    copy: "Basic experience editing videos with Adobe Premier for display in presentations or usage in web technologies.",
    grid: {
      xsmall: { columnStart: 2, rowStart: 5 },
      small: { columnStart: 1, rowStart: 4, columnEnd: 3 },
    },
  },
  {
    background: rgba(colors.blueSea, 0.25),
    value: 25,
    heading: "Dev Blogging",
    copy: "Active maintainer of Dev Blogs and internal monthly roundups for my department. Passion for increasing visibility of value delivered",
    grid: {
      xsmall: { columnStart: 1, rowStart: 5 },
      small: { columnStart: 3, rowStart: 4, columnEnd: 4 },
    },
  },
  {
    background: rgba(colors.blueSea, 0.25),
    value: 25,
    heading: "Marketing tooling",
    copy: "Decent exposure to integrating marketing and analytical tools including PostHog, GA/GTM and Singular.",
    cv: "PostHog, GA/GTM, Singular, A/B testing",
    grid: {
      xsmall: {
        columnStart: 2,
        rowStart: 6,
      },
      small: { columnStart: 1, rowStart: 5 },
    },
  },
  {
    background: rgba(colors.greenGrass, 0.25),
    value: 75,
    heading: "Web compliance",
    copy: "Substantial experience with developing Consent compliance websites and applications using OneTrust and Cookiebot.",
    cv: "OneTrust, CookieBot, Google Consent Mode",
    grid: {
      xsmall: {
        columnStart: 1,
        rowStart: 6,
      },
      small: {
        columnStart: 2,
        rowStart: 5,
        columnEnd: 4,
      },
    },
  },
];

type PortfolioEntry = {
  title: string;
  body: string[];
  backgroundCss: Property.Background;
  image?: StaticImageData;
  imageAlt?: string;
  url?: string;
  embedUrl?: string;
};

export const workPortfolio: PortfolioEntry[] = [
  {
    title: "Athena - marketing technology integration",
    body: [
      "Built a shared integration layer for OneTrust, PostHog and Singular across Jagex websites and the Launcher, eliminating duplicated implementation work across 15 technology teams.",
    ],
    backgroundCss: `linear-gradient(#101d23,black)`,
    image: oneTrustImage,
    imageAlt: "",
    url: "https://play.runescape.com/cookies",
  },
  {
    title: "RuneScape and Jagex rebrand",
    body: [
      "Implemented and coordinated a brand refresh and update across Jagex's entire ecosystem that included a simultaneous launch of over 50 systems including websites, apps, billing systems and internal tooling. I undertook the majority of the code changes and then planned and ran a seamless launch that completed on schedule to high praise from senior management.",
    ],
    backgroundCss: `linear-gradient(#101d23,black)`,
    image: rebrandImage,
    imageAlt: "",
  },
  {
    title: "RuneScape & Old School RuneScape Community App",
    body: [
      "Built a multi-tenant Next.js app to support community immersion for RuneScape and Old School RuneScape with accompanying Storybook design system.",
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
      "Constructed a large design system using React/Next.js and Storybook.js to style and maintain consistent branding across all Jagex Publishing Platform products including websites and apps.",
      "The system covers all areas of visual implementation including colours, animation, typography, sizing, components and is all structured using atomic design principles.",
    ],
    backgroundCss: `linear-gradient(#1c1c1c,${colors.blackEvil})`,
    image: jdsLogo,
    imageAlt: "White Jagex logo part-way through being drawn",
  },
  {
    title: "Jagex Launcher",
    body: [
      "The Jagex Launcher is an application that is used to run all Jagex products. I was responsible for maintaining the design system integration that delivered the visual aesthetics and functionality for the front-end as well as event tracking and consent compliance.",
    ],
    backgroundCss: `linear-gradient(#07111b,black)`,
    image: jagexLauncherImage,
    imageAlt: "The opening UI from the Jagex Launcher displaying RuneScape",
    url: "https://www.jagex.com/launcher",
  },
  {
    title: "RuneScape News",
    body: [
      "Rebuilt the RuneScape news system using Java and FreeMarker hosted on proprietary technology to work better on modern browsers and be ready for the launch of RuneScape Mobile improving article engagement by over 40%.",
    ],
    backgroundCss: `linear-gradient(#101d23,black)`,
    image: runeScapeNewsImage,
    imageAlt: "A RuneScape news article",
    url: "https://secure.runescape.com/m=news/vorkath-battle-for-forinthry---this-week-in-runescape",
  },
  {
    title: "Jagex Corporate website",
    body: [
      "The corporate website for Jagex Games Ltd. This site content was powered by Contentful CMS and later migrated to a fixed, code-driven version. The site is driven via Express with EJS for page templating.",
    ],
    backgroundCss: `linear-gradient(#4b4c01,black)`,
    image: jagexCorporateImage,
    imageAlt: "The Jagex corporate website homepage",
    url: "https://www.jagex.com",
  },
  {
    title: "RuneFest",
    body: [
      "RuneScape and Old School RuneScape's player event runs most years and requires a large input from teams across the studio. For this event I have built multiple versions of this site on many different tech stacks.",
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
      "At RuneFest 2018 other team members and I hosted a talk on one of the stages at the event explaining the work that goes into managing Jagex's web services.",
    ],
    backgroundCss: `linear-gradient(#101d23,black)`,
    embedUrl: "https://www.youtube.com/embed/JbVKUi9wezo?si=M2ZfSmqERR2hwzmV",
    image: runeFestPanelImage,
    imageAlt: "",
  },
];

type PersonalProject = {
  title: string;
  body: string[];
  image?: StaticImageData;
  imageAlt?: string;
  url?: string;
};

export const personalProjects: PersonalProject[] = [
  {
    title: "JS Weather Station",
    body: [
      "I built a web app to read live data from my Netatmo Weather station. The data from the station is read and used to adjust an SVG graphic using CSS animations and transformations.",
    ],
    image: weatherStationImage,
    imageAlt: "An SVG render of a house",
    url: `${siteOrigin}/blog/taking-the-weather-with-you-with-js`,
  },
  {
    title: "Cambridge Cangaroos website",
    body: [
      "I constructed a website to advertise, administrate and provide performance analysis tools for my local trampoline club.",
    ],
    image: cangaroosImage,
    imageAlt: "My member profile page on the Cangaroos website",
    url: "https://www.cangaroos.org/member/alasdairmacrae",
  },
];
