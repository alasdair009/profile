import { StaticImageData } from "next/image";
import jagexTimelineLogo from "../../entities/assets/jagex-logo.svg";
import pkrTimelineLogo from "../../entities/assets/pkr-logo.svg";
import codemastersTimelineLogo from "../../entities/assets/codemasters-logo.svg";

type Company = "jagex" | "pkr" | "realtimeWorlds" | "codemasters";
type Field = "web" | "design" | "qa";

type CareerHistoryData = {
  roles: {
    company: Company;
    position: string;
    startDate: Date;
    field: Field;
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
    logo: jagexTimelineLogo,
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
    },
    {
      company: "jagex",
      position: "Web Developer",
      startDate: new Date("2013-07-01"),
      field: "web",
    },
    {
      company: "jagex",
      position: "Software Tester",
      startDate: new Date("2012-11-01"),
      field: "qa",
    },
    {
      company: "pkr",
      position: "QA Engineer",
      startDate: new Date("2012-06-01"),
      field: "qa",
    },
    {
      company: "jagex",
      position: "QA Tester",
      startDate: new Date("2011-05-01"),
      field: "qa",
    },
    {
      company: "codemasters",
      position: "Technical Level Designer",
      startDate: new Date("2015-11-02"),
      field: "design",
    },
    {
      company: "codemasters",
      position: "QA Technician",
      startDate: new Date("2010-10-01"),
      field: "qa",
    },
    {
      company: "realtimeWorlds",
      position: "QA Tester",
      startDate: new Date("2010-03-01"),
      field: "qa",
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
