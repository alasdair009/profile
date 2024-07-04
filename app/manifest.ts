import { MetadataRoute } from "next";
import { siteDescription, siteName } from "@/lib/metadata";
import { colors } from "@/entities";
import screenshotNarrow from "../entities/assets/screenshot-narrow.webp";
import screenshotWide from "../entities/assets/screenshot-wide.webp";
import { siteOrigin } from "@/lib/domains";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName}'s Portfolio`,
    short_name: siteName,
    description: siteDescription,
    display_override: ["window-controls-overlay"],
    id: `${siteOrigin}`,
    start_url: "/",
    display: "standalone",
    background_color: colors.blackEvil,
    theme_color: colors.greenGrass,
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    screenshots: [
      {
        src: screenshotWide.src,
        sizes: "1606x1216",
        type: "image/png",
        // @ts-ignore
        form_factor: "wide",
        label: "AM home",
      },
      {
        src: screenshotNarrow.src,
        sizes: "433x336",
        type: "image/png",
        // @ts-ignore
        form_factor: "narrow",
        label: "AM home",
      },
    ],
  };
}
