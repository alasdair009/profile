declare module "*.png";
declare module "*.jpg";
declare module "*.svg";

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

import type { HTMLAttributes } from "react";

export interface GeolocationLocationDetail {
  latitude: number;
  longitude: number;
}

interface GeolocationElement extends HTMLElement {
  position?: GeolocationPosition;
}

declare global {
  interface HTMLElementEventMap {
    location: CustomEvent<GeolocationLocationDetail>;
  }

  namespace JSX {
    interface IntrinsicElements {
      geolocation: DetailedHTMLProps<
        HTMLAttributes<GeolocationElement>,
        GeolocationElement
      >;
    }
  }
}
