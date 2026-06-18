"use client";
import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";
import styles from "./Geolocation.module.css";
import type { GeolocationElement, GeolocationLocationDetail } from "@/ambient";

type GeolocationProps = {
  /**
   * Specifies that the browser should retrieve location data whenever the position of the user's device changes
   */
  watch?: boolean;
  /**
   * Specifies that the browser should immediately retrieve location data when the entity is rendered.
   */
  autolocate?: boolean;
} & ComponentPropsWithoutRef<"geolocation">;

/**
 * Renders a geolocation element that alerts the current coordinates.
 *
 * Note the entity will not work inside a Storybook iframe so you should open the Story in a new tab.
 */
export function Geolocation({
  children,
  watch = false,
  autolocate = false,
  ...rest
}: GeolocationProps) {
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
      watch={watch}
      autolocate={autolocate}
      {...rest}
    >
      {children}
    </geolocation>
  );
}
Geolocation.displayName = "Geolocation";
