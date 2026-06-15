"use client";
import { HTMLAttributes } from "react";
import styles from "./Geolocation.module.css";
import { useEffect, useRef } from "react";
import { GeolocationElement, GeolocationLocationDetail } from "@/ambient";

type GeolocationProps = HTMLAttributes<GeolocationElement>;

/**
 * Renders a geolocation element that alerts the current coordinates.
 */
export function Geolocation({ children, ...rest }: GeolocationProps) {
  const geoRef = useRef<GeolocationElement | null>(null);

  useEffect(() => {
    const geo = geoRef.current;
    if (!geo) {
      return;
    }

    const handleLocation = (event: CustomEvent<GeolocationLocationDetail>) => {
      const target = event.currentTarget as GeolocationElement | null;
      if (!target?.position) return;

      const { latitude, longitude } = target.position.coords;

      alert(`${latitude}, ${longitude}`);
    };

    geo.addEventListener("location", handleLocation as EventListener);

    return () => {
      geo.removeEventListener("location", handleLocation as EventListener);
    };
  }, []);

  return (
    <geolocation
      ref={geoRef}
      className={`${styles.root}`}
      data-testid={Geolocation.displayName}
      {...rest}
    >
      {children}
    </geolocation>
  );
}
Geolocation.displayName = "Geolocation";
