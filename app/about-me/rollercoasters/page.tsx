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
        A history of my rollerocaster experiences around the world.
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
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          {rollercoasters.map((rollercoaster) => (
            <tr key={`${rollercoaster.title}${rollercoaster.themeparkTitle}`}>
              <td>{rollercoaster.title}</td>
              <td>{rollercoaster.themeparkTitle}</td>
              <td>{rollercoaster.themeparkCountry}</td>
              <td>
                {new Date(rollercoaster.firstRidden).toLocaleDateString(
                  "en-GB",
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
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
