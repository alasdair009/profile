import { StaticImageData } from "next/image";
import jagexTimelineLogo from "../../entities/assets/jagex-logo.svg";
import pkrTimelineLogo from "../../entities/assets/pkr-logo.svg";
import codemastersTimelineLogo from "../../entities/assets/codemasters-logo.svg";
import rtwTimelineLogo from "../../entities/assets/realtimeworlds-logo.svg";

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

export const companyDetails: Record<Company, { name: string; logo: StaticImageData; url: string }> = {
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
      responsibilities: ["Constructing and maintain cross-departmental design systems.", "Implementing new tech stacks to replace legacy proprietary systems.", "Supporting junior engineers in their professional development.", "Coordinating outsource teams on collaborative projects."],
    },
    {
      company: "jagex",
      position: "Web Developer",
      startDate: new Date("2013-07-01"),
      field: "web",
      responsibilities: ["Maintain and advance websites for all Jagex Games Ltd products.", "Deliver player-first driven web experiences across a variety of frameworks.", "Support other Jagex ventures including festivals, recruitment and third party acquisitions."],
    },
    {
      company: "jagex",
      position: "Software Tester",
      startDate: new Date("2012-11-01"),
      field: "qa",
      responsibilities: ["Accountable for the quality of Jagex web-based releases", "Build and maintain tools to assist with the QA process"],
    },
    {
      company: "pkr",
      position: "QA Engineer",
      startDate: new Date("2012-06-01"),
      field: "qa",
      responsibilities: ["Implement automation tools for testing all PKR product flows", "Level up other members of the QA team in automation testing"],
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
      responsibilities: ["Spline and asset placement on F1 2011 tracks", "AI racing line optimisation via 3D Studio Max", "Feedback areas for improvement in game mechanics"],
    },
    {
      company: "codemasters",
      position: "QA Technician",
      startDate: new Date("2010-10-01"),
      field: "qa",
      responsibilities: ["Manually test online and network components of Operation Flashpoint: Red River for release", "Complete multiplayer passthroughs to confirm build stability", "Install builds on console dev kits to ensure feature platform parity"],
    },
    {
      company: "realtimeWorlds",
      position: "QA Tester",
      startDate: new Date("2010-03-01"),
      field: "qa",
      responsibilities: ["Perform exploratory and scripted testing of APB", "Leading benchmark testing of builds to verify stability"],
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
