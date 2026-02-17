import { Metadata } from "next";
import {
  generateMetaData,
  myName,
  siteDescription,
  socialMedia,
} from "@/lib/metadata";
import { Home } from "../entities";
import { siteOrigin } from "@/lib/domains";

export const metadata: Metadata = generateMetaData();

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: myName,
  url: siteOrigin,
  jobTitle: "Front-End Web Engineer",
  description: siteDescription,
  sameAs: [socialMedia.github, socialMedia.linkedin],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Home
        contactFormEndPoint={`${process.env.NEXT_FORMSPREE_CONTACT_ENDPOINT}`}
      />
    </>
  );
}
