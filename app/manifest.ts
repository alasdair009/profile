import { MetadataRoute } from "next";
import { siteDescription, siteName } from "@/lib/metadata";
import { colors } from "@/entities";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName}'s Portfolio`,
    short_name: siteName,
    description: siteDescription,
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
  };
}
