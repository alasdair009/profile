"use client";
import {
  GoogleMap,
  Marker,
  MarkerProps,
  useJsApiLoader,
} from "@react-google-maps/api";
import { HTMLAttributes, useCallback, useState } from "react";
import { colors, globalContentMaxWidth, Heading } from "@/entities";
import { rem } from "polished";
import LatLngLiteral = google.maps.LatLngLiteral;

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

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: unknown) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

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
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <>
        {markers.map((marker, i) => {
          return (
            <Marker
              key={`${marker.position.lat}${marker.position.lng}${i}`}
              {...marker}
            />
          );
        })}

        {children}
      </>
    </GoogleMap>
  ) : (
    <Heading level="h2">Loading...</Heading>
  );
}
