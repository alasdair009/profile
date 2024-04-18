import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import {
  globalContentMaxWidth,
  Heading,
  Paragraph,
  sizes,
  Spacer,
  Table,
} from "@/entities";
import { GET_ALL_ROLLERCOASTERS } from "@/lib/sanity/queries";
import { sanityClient } from "@/lib/sanity/client";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

export const metadata: Metadata = generateMetaData(
  "Rollercoasters",
  "My rollercoaster history",
  "rollercoasters"
);

export const revalidate = 600; // revalidate at most every 10mins

export default async function Rollercoasters() {
  const rollercoasters = await sanityClient.fetch<SanityDocument[]>(
    GET_ALL_ROLLERCOASTERS
  );

  const fastestRollercoaster = rollercoasters.reduce((prev, current) => {
    return prev && prev.speed > current.speed ? prev : current;
  });
  const tallestRollercoaster = rollercoasters.reduce((prev, current) => {
    return prev && prev.height > current.height ? prev : current;
  });
  const longestRollercoaster = rollercoasters.reduce((prev, current) => {
    return prev && prev.length > current.length ? prev : current;
  });
  return (
    <>
      <Heading>Rollercoasters</Heading>
      <Paragraph>
        I love themeparks and naturally therefore also rollercoasters. The page
        serves as a history of my {rollercoasters.length} unique rollerocaster
        experiences around the world.
      </Paragraph>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: globalContentMaxWidth,
          gap: sizes.s24.rem,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <article
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2>Fastest</h2>
          <span>{fastestRollercoaster.title}</span>
          <Spacer />
          <span>{fastestRollercoaster.speed}km/h</span>
        </article>
        <article
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2>Tallest</h2>
          <span>{tallestRollercoaster.title}</span>
          <Spacer />
          <span>{tallestRollercoaster.height}m</span>
        </article>
        <article
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2>Longest</h2>
          <span>{longestRollercoaster.title}</span>
          <Spacer />
          <span>{longestRollercoaster.length}m</span>
        </article>
      </div>
      <Table>
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
              <td>{rollercoaster.title}</td>
              <td>
                <span>{rollercoaster.themeparkTitle}</span>
                {rollercoaster.themeparkLogo && (
                  <figure
                    style={{
                      aspectRatio: 1,
                      display: "inline-block",
                      height: sizes.s24.rem,
                      margin: `0 0 0 ${sizes.s8.rem}`,
                      position: "relative",
                    }}
                  >
                    <Image
                      src={imageUrlBuilder(sanityClient)
                        .image(rollercoaster.themeparkLogo.asset)
                        .url()}
                      alt={`${rollercoaster.themeparkTitle} logo`}
                      width={sizes.s24.raw}
                      height={sizes.s24.raw}
                      style={{ objectFit: "contain" }}
                    />
                  </figure>
                )}
              </td>
              <td>{rollercoaster.themeparkCountry}</td>
              <td>
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
    </>
  );
}
