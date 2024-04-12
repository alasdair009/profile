import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { Heading, Paragraph, Table } from "@/entities";
import { GET_ALL_ROLLERCOASTERS } from "@/lib/sanity/queries";
import { sanityClient } from "@/lib/sanity/client";
import { SanityDocument } from "next-sanity";

export const metadata: Metadata = generateMetaData(
  "Rollercoasters",
  "My rollercoaster history",
  "rollercoasters"
);
export default async function Rollercoasters() {
  const rollercoasters = await sanityClient.fetch<SanityDocument[]>(
    GET_ALL_ROLLERCOASTERS
  );
  console.log(rollercoasters);
  return (
    <>
      <Heading>Rollercoasters</Heading>
      <Paragraph>
        A history of my rollerocaster experiences around the world.
      </Paragraph>
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
