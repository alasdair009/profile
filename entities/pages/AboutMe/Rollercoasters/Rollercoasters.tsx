import { HTMLAttributes } from "react";
import {
  Heading,
  Map,
  Paragraph,
  sizes,
  Spacer,
  StatBox,
  Table,
} from "@/entities";
import styles from "./Rollercoasters.module.scss";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { MarkerProps } from "@react-google-maps/api";
import type { SanityClient } from "next-sanity";

export type Rollercoaster = {
  title: string;
  speed: number;
  height: number;
  length: number;
  inversions: number;
  themeparkTitle: string;
  themeparkLogo: any;
  themeparkCountry: string;
  firstRidden: string;
  coords: string;
};

type RollercoastersProps = {
  rollercoasters: Rollercoaster[];
  fastestRollercoaster: Rollercoaster;
  tallestRollercoaster: Rollercoaster;
  longestRollercoaster: Rollercoaster;
  mostInvertedRollercoaster: Rollercoaster;
  latLangs?: MarkerProps[];
  googleMapsAPIKey: string;
  sanityClient: SanityClient;
} & HTMLAttributes<HTMLDivElement>;

/**
 * All my rollercoaster credits from around the world.
 */
export function Rollercoasters({
  fastestRollercoaster,
  tallestRollercoaster,
  longestRollercoaster,
  mostInvertedRollercoaster,
  rollercoasters,
  latLangs,
  googleMapsAPIKey,
  sanityClient,
  ...rest
}: RollercoastersProps) {
  return (
    <div data-testid={Rollercoasters.displayName} {...rest}>
      <Heading>Rollercoasters</Heading>
      <Paragraph>
        I love themeparks and naturally therefore also rollercoasters. The page
        serves as a history of my {rollercoasters.length} unique rollerocaster
        experiences around the world.
      </Paragraph>
      <div className={styles.statBoxWrapper}>
        <StatBox
          heading="Fastest"
          name={fastestRollercoaster.title}
          value={`${fastestRollercoaster.speed}km/h`}
        />
        <StatBox
          heading="Tallest"
          name={tallestRollercoaster.title}
          value={`${tallestRollercoaster.height}m`}
        />
        <StatBox
          heading="Longest"
          name={longestRollercoaster.title}
          value={`${longestRollercoaster.length}m`}
        />
        <StatBox
          heading="Most Inversions"
          name={mostInvertedRollercoaster.title}
          value={`${mostInvertedRollercoaster.inversions}m`}
        />
      </div>
      <Table breakAt="medium">
        <thead>
          <tr>
            <td>Rollercoaster</td>
            <td>Theme park</td>
            <td>Country</td>
            <td>Year first ridden</td>
          </tr>
        </thead>
        <tbody>
          {rollercoasters.map((rollercoaster) => (
            <tr key={`${rollercoaster.title}${rollercoaster.themeparkTitle}`}>
              <td data-title="title">{rollercoaster.title}</td>
              <td data-title="theme park">
                <span>{rollercoaster.themeparkTitle}</span>
                {rollercoaster.themeparkLogo && (
                  <figure className={styles.themeParkLogoFigure}>
                    <Image
                      src={imageUrlBuilder(sanityClient)
                        .image(rollercoaster.themeparkLogo.asset)
                        .url()}
                      alt={`${rollercoaster.themeparkTitle} logo`}
                      width={sizes.s24.raw}
                      height={sizes.s24.raw}
                      className={styles.themeParkLogoImage}
                    />
                  </figure>
                )}
              </td>
              <td data-title="country">{rollercoaster.themeparkCountry}</td>
              <td data-title="first ridden">
                {new Date(rollercoaster.firstRidden).toLocaleDateString(
                  "en-GB",
                  {
                    year: "numeric",
                  }
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {latLangs && googleMapsAPIKey ? (
        <>
          <Spacer multiplier={6} />
          <Heading level="h2">Coaster Map</Heading>
          <Paragraph align="center">
            Around the world in {rollercoasters.length} coasters.
          </Paragraph>
          <Map mapApiKey={googleMapsAPIKey} markers={latLangs} />
        </>
      ) : null}
    </div>
  );
}
Rollercoasters.displayName = "Rollercoasters";
