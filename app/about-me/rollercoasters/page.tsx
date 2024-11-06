import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { globalContentMaxWidth, Heading, Map, Paragraph, sizes, Spacer, StatBox, Table } from "@/entities";
import { GET_ALL_PARKS, GET_ALL_ROLLERCOASTERS } from "@/lib/sanity/queries";
import { sanityClient } from "@/lib/sanity/client";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { MarkerProps } from "@react-google-maps/api";

export const metadata: Metadata = generateMetaData("Rollercoasters", "My rollercoaster history", "about-me/rollercoasters");

export const revalidate = 600; // revalidate at most every 10mins

export default async function Rollercoasters() {
  const rollercoasters = await sanityClient.fetch<SanityDocument[]>(GET_ALL_ROLLERCOASTERS);

  const themeParks = await sanityClient.fetch<SanityDocument[]>(GET_ALL_PARKS);

  const fastestRollercoaster = rollercoasters.reduce((prev, current) => {
    return prev && prev.speed > current.speed ? prev : current;
  });
  const tallestRollercoaster = rollercoasters.reduce((prev, current) => {
    return prev && prev.height > current.height ? prev : current;
  });
  const longestRollercoaster = rollercoasters.reduce((prev, current) => {
    return prev && prev.length > current.length ? prev : current;
  });
  const mostInvertedRollercoaster = rollercoasters.reduce((prev, current) => {
    return prev && prev.inversions > current.inversions ? prev : current;
  });
  let latLangs: MarkerProps[] = [];
  rollercoasters.forEach((rollercoaster) => {
    const latLng = rollercoaster.coords.split(",");
    latLangs.push({
      title: `${rollercoaster.title} - ${rollercoaster.themeparkTitle}`,
      position: { lat: parseFloat(latLng[0]), lng: parseFloat(latLng[1]) },
    });
  });
  return (
    <>
      <Heading>Rollercoasters</Heading>
      <Paragraph>I love themeparks and naturally therefore also rollercoasters. The page serves as a history of my {rollercoasters.length} unique rollerocaster experiences around the world.</Paragraph>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: globalContentMaxWidth,
          gap: sizes.s24.rem,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <StatBox heading="Fastest" name={fastestRollercoaster.title} value={`${fastestRollercoaster.speed}km/h`} />
        <StatBox heading="Tallest" name={tallestRollercoaster.title} value={`${tallestRollercoaster.height}m`} />
        <StatBox heading="Longest" name={longestRollercoaster.title} value={`${longestRollercoaster.length}m`} />
        <StatBox heading="Most Inversions" name={mostInvertedRollercoaster.title} value={`${mostInvertedRollercoaster.inversions}m`} />
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
                  <figure
                    style={{
                      aspectRatio: 1,
                      display: "inline-block",
                      height: sizes.s24.rem,
                      margin: `0 0 0 ${sizes.s8.rem}`,
                      position: "relative",
                    }}
                  >
                    <Image src={imageUrlBuilder(sanityClient).image(rollercoaster.themeparkLogo.asset).url()} alt={`${rollercoaster.themeparkTitle} logo`} width={sizes.s24.raw} height={sizes.s24.raw} style={{ objectFit: "contain" }} />
                  </figure>
                )}
              </td>
              <td data-title="country">{rollercoaster.themeparkCountry}</td>
              <td data-title="first ridden">
                {new Date(rollercoaster.firstRidden).toLocaleDateString("en-GB", {
                  year: "numeric",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Spacer multiplier={6} />
      <Heading level="h2">Coaster Map</Heading>
      <Paragraph align="center">Around the world in {rollercoasters.length} coasters.</Paragraph>
      <Map mapApiKey={`${process.env.GOOGLE_MAPS_API_KEY}`} markers={latLangs} />
    </>
  );
}
