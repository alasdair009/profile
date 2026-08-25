import { CVDocument, Heading, Link, Paragraph } from "@/entities";
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
    <>
      <section className="web-header">
        <Heading>CV</Heading>
        <Paragraph align="center" textWrap="balance">
          Below you can read a web render of my CV{" "}
          <em>(best viewed on tablet / desktop screen sizes)</em>, or you can{" "}
          <Link href="/api/cv" target="_blank">
            download it as a PDF
          </Link>{" "}
          to save. You can also view my{" "}
          <Link href="/portfolio">online portfolio</Link> for links to content.
          Further information and references are available on request.
        </Paragraph>
      </section>
      <div style={{ margin: "0 auto", maxWidth: "100vw", overflow: "scroll" }}>
        <div style={{ margin: "0 auto", width: 794 }}>
          <CVDocument />
        </div>
      </div>
    </>
  );
}
