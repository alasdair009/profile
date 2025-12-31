import { HTMLAttributes } from "react";
import styles from "./RuneScape.module.css";
import { ErrorText, Heading, Paragraph, Table } from "@/entities";
import Image from "next/image";

type RuneScapeProps = {
  /**
   * Display name of RuneScape character.
   */
  playerName?: string;
  /**
   * Skill levels in RuneScape
   */
  skills?: {
    id: number;
    name: string;
    rank: number;
    level: number;
    xp: number;
  }[];
  /**
   * Activity scores in RuneScape.
   */
  activities?: {
    id: number;
    name: string;
    rank: number;
    score: number;
  }[];
} & HTMLAttributes<HTMLDivElement>;

/**
 * RuneScape Player profile UI using legacy RuneScape APIs.
 */
export function RuneScape({
  playerName,
  skills,
  activities,
  ...rest
}: RuneScapeProps) {
  const numberFormat = new Intl.NumberFormat("en-GB");

  if (!playerName) {
    return (
      <div data-testid={RuneScape.displayName} {...rest}>
        <Heading>RuneScape</Heading>
        <ErrorText>Could not load player profile.</ErrorText>
      </div>
    );
  }

  return (
    <div data-testid={RuneScape.displayName} {...rest}>
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
        {skills && (
          <>
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
          </>
        )}
        {activities && (
          <>
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
                      <td>
                        {activity.score >= 0
                          ? numberFormat.format(activity.score)
                          : "-"}
                      </td>
                      <td>
                        {activity.rank >= 0
                          ? numberFormat.format(activity.rank)
                          : "-"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </>
        )}
      </div>
    </div>
  );
}
RuneScape.displayName = "RuneScape";
