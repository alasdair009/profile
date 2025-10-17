import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { GET_ALL_PARKS, GET_ALL_ROLLERCOASTERS } from "@/lib/sanity/queries";
import { sanityClient } from "@/lib/sanity/client";
import { SanityDocument } from "next-sanity";
import { MarkerProps } from "@react-google-maps/api";
import { Rollercoasters } from "@/entities/pages/AboutMe/Rollercoasters";
import { Rollercoaster } from "@/entities/pages/AboutMe/Rollercoasters/Rollercoasters";

export const metadata: Metadata = generateMetaData(
  "Rollercoasters",
  "My rollercoaster history",
  "about-me/rollercoasters"
);

export const revalidate = 600; // revalidate at most every 10mins

export default async function RollercoastersPage() {
  const rollercoasters = await sanityClient.fetch<Rollercoaster[]>(
    GET_ALL_ROLLERCOASTERS
  );

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
    <Rollercoasters
      rollercoasters={rollercoasters}
      mostInvertedRollercoaster={mostInvertedRollercoaster}
      longestRollercoaster={longestRollercoaster}
      tallestRollercoaster={tallestRollercoaster}
      fastestRollercoaster={fastestRollercoaster}
      latLangs={latLangs}
      googleMapsAPIKey={`${process.env.GOOGLE_MAPS_API_KEY}`}
      sanityClient={sanityClient}
    />
  );
}
