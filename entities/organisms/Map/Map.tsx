"use client";
import {
  GoogleMap,
  Marker,
  MarkerProps,
  useJsApiLoader,
} from "@react-google-maps/api";
import { HTMLAttributes } from "react";
import { ErrorText, Heading } from "@/entities";
import styles from "./Map.module.scss";

const center = {
  lat: 51.5072479362636,
  lng: -0.13043514490754882,
};

type MapProps = {
  /**
   * API key from Google
   */
  mapApiKey: string;
  /**
   * Markers to display locations around the world.
   */
  markers: MarkerProps[];
} & HTMLAttributes<HTMLDivElement>;

export function Map({ mapApiKey, markers, children }: MapProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: mapApiKey,
  });

  if (!mapApiKey) {
    return (
      <div className={styles.root} data-testid={Map.name}>
        <ErrorText align="center">No API key provided</ErrorText>
      </div>
    );
  }

  return (
    <div className={styles.root} data-testid={Map.name}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            height: "100%",
            width: "100%",
          }}
          center={center}
          zoom={3}
          options={{ streetViewControl: false }}
          tilt={0}
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
        <Heading level="h2" align="center">
          Loading...
        </Heading>
      )}
      ;
    </div>
  );
}
