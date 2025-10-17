import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { Home } from "../entities";

export const metadata: Metadata = generateMetaData();

export default function HomePage() {
  return (
    <Home
      contactFormEndPoint={`${process.env.NEXT_FORMSPREE_CONTACT_ENDPOINT}`}
    />
  );
}
