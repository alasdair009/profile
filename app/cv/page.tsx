import { CVDocument } from "@/entities";

export const dynamic = "force-dynamic";

export default async function CvPage() {
  return (
    <div style={{ margin: "0 auto", width: 800 }}>
      <CVDocument />
    </div>
  );
}
