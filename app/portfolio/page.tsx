import { Portfolio } from "@/entities";
import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";

export const metadata: Metadata = generateMetaData(
  "Portfolio",
  "My professional work history and portfolio of work.",
  "portfolio"
);

export default function PortfolioPage() {
  return <Portfolio />;
}
