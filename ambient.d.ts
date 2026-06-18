declare module "*.png";
declare module "*.jpg";
declare module "*.svg";

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface GeolocationElement extends HTMLElement {
  position?: GeolocationPosition;
  autolocate?: boolean;
  watch?: boolean;
}

export interface GeolocationAttributes extends HTMLAttributes<GeolocationElement> {
  autolocate?: boolean;
  watch?: boolean;
}

export type GeolocationHTMLProps = DetailedHTMLProps<
  GeolocationAttributes,
  GeolocationElement
>;

export interface GeolocationLocationDetail {
  latitude: number;
  longitude: number;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      geolocation: GeolocationHTMLProps;
    }
  }

  interface HTMLElementTagNameMap {
    geolocation: GeolocationElement;
  }
}

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      geolocation: GeolocationHTMLProps;
    }
  }
}

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      geolocation: GeolocationHTMLProps;
    }
  }
}

export {};
