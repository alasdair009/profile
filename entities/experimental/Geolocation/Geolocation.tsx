"use client";
import { HTMLAttributes } from "react";
import styles from "./Geolocation.module.css";
import { useEffect, useRef } from "react";

type GeolocationProps = HTMLAttributes<HTMLElement>;

/**
 * Source code in a monospaced box.
 */
export function Geolocation({ children, ...rest }: GeolocationProps) {
  const geoRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const geo = geoRef.current;
    if (!geo) {
      console.warn("Geolocation element not found");
      return;
    }

    const handleLocation = (event: Event) => {
      console.log("Location event received");
      const target = event.target;

      if (target.position) {
        const { latitude, longitude } = target.position.coords;

        console.log({ latitude, longitude });
      }
    };

    geo.addEventListener("location", handleLocation);

    return () => {
      geo.removeEventListener("location", handleLocation);
    };
  }, []);

  return (
    // @ts-expect-error Experimental HTML element not yet in TypeScript DOM typings
    <geolocation
      ref={geoRef}
      className={`${styles.root}`}
      data-testid={Geolocation.displayName}
      {...rest}
    >
      {children}
      {/*@ts-expect-error Experimental HTML element not yet in TypeScript DOM typings*/}
    </geolocation>
  );
}
Geolocation.displayName = "Geolocation";
