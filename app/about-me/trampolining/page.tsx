import { Metadata } from "next";
import { generateMetaData, generateOEmbedUrl } from "@/lib/metadata";
import { Trampolining } from "@/entities";

const pagePath = "about-me/trampolining";

export const metadata: Metadata = generateMetaData(
  "Trampolining",
  "Thoughts and ideas on my trampoline journey",
  pagePath,
  undefined,
  undefined,
  undefined,
  {
    types: generateOEmbedUrl(pagePath),
  }
);

export default async function TrampoliningPage() {
  return <Trampolining />;
}
