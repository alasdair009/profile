type CareerHistoryData = {
  roles: {
    company: string;
    position: string;
    startDate: Date;
    field: "web" | "qa";
  }[];
};
export const careerHistory: CareerHistoryData = {
  roles: [
    {
      company: "Jagex Games Ltd",
      position: "Senior Web Engineer",
      startDate: new Date("2017-11-01"),
      field: "web",
    },
    {
      company: "Jagex Game Ltd",
      position: "Web Developer",
      startDate: new Date("2015-11-01"),
      field: "web",
    },
    {
      company: "Jagex Game Ltd",
      position: "Junior Web Developer",
      startDate: new Date("2013-11-01"),
      field: "web",
    },
    {
      company: "Jagex Game Ltd",
      position: "Junior Web Developer",
      startDate: new Date("2013-11-01"),
      field: "web",
    },
  ],
};

export const getTotalExperienceYears = () => {
  const webPositions = careerHistory.roles
    .filter((role) => role.field === "web")
    .sort((a, b) => {
      return +b.startDate - +a.startDate;
    });
  const lastStartDate = webPositions[webPositions.length - 1].startDate;
  return new Date().getFullYear() - lastStartDate.getFullYear();
};
