import { CVDocument } from "@/entities";
import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateMetaData(
  "Curriculum Vitae",
  "View and download my CV",
  "cv"
);

export default async function CvPage() {
  return (
    <div style={{ margin: "0 auto", maxWidth: "100vw", overflow: "scroll" }}>
      <div style={{ margin: "0 auto", width: 794 }}>
        <CVDocument />
      </div>
    </div>
  );
}
