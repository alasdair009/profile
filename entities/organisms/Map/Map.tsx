"use client";
import { GoogleMap, Marker, MarkerProps, useJsApiLoader } from "@react-google-maps/api";
import { HTMLAttributes } from "react";
import { colors, globalContentMaxWidth, Heading } from "@/entities";
import { rem } from "polished";

const center = {
  lat: 51.5072479362636,
  lng: -0.13043514490754882,
};

type MapProps = {
  mapApiKey: string;
  markers: MarkerProps[];
} & HTMLAttributes<HTMLDivElement>;

export function Map({ mapApiKey, markers, children }: MapProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: mapApiKey,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        aspectRatio: "16 / 9",
        backgroundColor: colors.greyDark,
        border: `${rem(1)} solid ${colors.greenGrass}`,
        margin: "0 auto",
        maxWidth: globalContentMaxWidth,
        width: "100%",
      }}
      center={center}
      zoom={3}
    >
      <>
        {markers.map((marker, i) => {
          return <Marker key={`${marker.position.lat}${marker.position.lng}${i}`} {...marker} />;
        })}

        {children}
      </>
    </GoogleMap>
  ) : (
    <Heading level="h2">Loading...</Heading>
  );
}
