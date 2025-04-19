import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { Heading, Paragraph, Table } from "@/entities";
import Image from "next/image";
import styles from "./page.module.scss";

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

export default async function RuneScape() {
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

  const numberFormat = new Intl.NumberFormat("en-GB");

  return (
    <>
      <Heading>RuneScape</Heading>
      <Paragraph>
        Small app to query the RuneScape API for my RuneScape charater{" "}
        {playerName}. The app returns details on skills and activities fetched
        via the public API.
      </Paragraph>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <figure>
            <Image
              src={`https://secure.runescape.com/m=avatar-rs/${playerName}/chat.png`}
              alt="RuneScape character headshot"
              height={100}
              width={100}
            />
            <figcaption>{playerName}</figcaption>
          </figure>
          <figure>
            <Image
              src={`https://secure.runescape.com/m=avatar-rs/${playerName}/full.png`}
              alt="RuneScape character bodyshot"
              height={100}
              width={60}
            />
            <figcaption>{playerName}</figcaption>
          </figure>
        </div>
        <Heading level="h2">Skills</Heading>
        <Table>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Level</th>
              <th>XP</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => {
              return (
                <tr key={skill.id}>
                  <td>{skill.name}</td>
                  <td>{numberFormat.format(skill.level)}</td>
                  <td>{numberFormat.format(skill.xp)}</td>
                  <td>{numberFormat.format(skill.rank)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Heading level="h2">Activities</Heading>
        <Table>
          <thead>
            <tr>
              <th>Activity</th>
              <th>Score</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => {
              return (
                <tr key={activity.id}>
                  <td>{activity.name}</td>
                  <td>{activity.score}</td>
                  <td>{activity.rank}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
