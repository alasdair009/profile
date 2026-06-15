declare module "*.png";
declare module "*.jpg";
declare module "*.svg";

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

import type { HTMLAttributes } from "react";

export interface GeolocationElement extends HTMLElement {
  position?: GeolocationPosition;
}

export interface GeolocationLocationDetail {
  latitude: number;
  longitude: number;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      geolocation: DetailedHTMLProps<
        HTMLAttributes<GeolocationElement>,
        GeolocationElement
      >;
    }
  }

  interface HTMLElementTagNameMap {
    geolocation: GeolocationElement;
  }
}

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      geolocation: DetailedHTMLProps<
        HTMLAttributes<GeolocationElement>,
        GeolocationElement
      >;
    }
  }
}

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      geolocation: DetailedHTMLProps<
        HTMLAttributes<GeolocationElement>,
        GeolocationElement
      >;
    }
  }
}

export {};
