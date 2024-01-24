import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { FanPlayer } from "@/entities/molecules/FanPlayer/FanPlayer";

export const metadata: Metadata = generateMetaData(
  "Baby White Noise",
  "Mini app to sooth babies",
  "baby"
);

export default function Portfolio() {
  return <FanPlayer />;
}
