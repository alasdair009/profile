import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { Trampolining } from "@/entities";

export const metadata: Metadata = generateMetaData(
  "Trampolining",
  "Thoughts and ideas on my trampoline journey",
  "about-me/trampolining"
);

export default async function TrampoliningPage() {
  return <Trampolining />;
}
