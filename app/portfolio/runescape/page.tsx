import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { RuneScape } from "@/entities";

const playerName = "allstar";

type ApiJsonResponse = {
  skills: [
    {
      id: number;
      name: string;
      rank: number;
      level: number;
      xp: number;
    },
  ];
  activities: [
    {
      id: number;
      name: string;
      rank: number;
      score: number;
    },
  ];
};

export const metadata: Metadata = generateMetaData(
  "RuneScape",
  "A small app to load my RuneScape character's details",
  "portfolio/runescape"
);

export default async function RuneScapePage() {
  const fetchRsData = await fetch(
    `https://secure.runescape.com/m=hiscore/index_lite.json?player=${playerName}`
  );
  // const playerDetails = await fetch(
  //   `https://secure.runescape.com/m=website-data/playerDetails.ws?names=["allstar"]`
  // );
  const { skills, activities }: ApiJsonResponse = await fetchRsData.json();
  // const playerDetailsJson = await playerDetails.json();
  // console.log(playerDetailsJson);

  if (!skills || !activities) {
    return <>API error - please refresh</>;
  }

  return (
    <RuneScape
      playerName={playerName}
      skills={skills}
      activities={activities}
    />
  );
}
