import chromium from "@sparticuz/chromium";
import { PDFDocument } from "pdf-lib";
import puppeteer from "puppeteer-core";
import { CVDocument } from "@/entities";
import { myName, myTitle } from "@/lib/metadata";
import { mainDomain } from "@/lib/domains";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const getBrowserConfig = async () => {
  if (process.env.VERCEL) {
    return {
      args: [...chromium.args, "--disable-setuid-sandbox", "--no-sandbox"],
      executablePath: await chromium.executablePath(),
      headless: true as const,
    };
  }

  return {
    channel: "chrome" as const,
    headless: true as const,
  };
};

export async function GET(request: Request) {
  const previewUrl = new URL("/cv", request.url);
  previewUrl.searchParams.set("pdf", "1");

  const browser = await puppeteer.launch(await getBrowserConfig());

  try {
    const page = await browser.newPage();
    await page.goto(previewUrl.toString(), {
      waitUntil: "domcontentloaded",
    });
    await page.waitForSelector(`[data-testid="${CVDocument.displayName}"]`);
    await page.addStyleTag({
      content: `
        html,
        body {
          background: white;
        }

        main {
          background: white !important;
        }

        header,
        footer,
        .web-header{
          display: none !important;
        }

        body > main {
          background: white !important;
          min-height: auto !important;
        }
      `,
    });
    await page.emulateMediaType("print");

    const pdf = await page.pdf({
      format: "A4",
      margin: {
        top: "24px",
        right: "24px",
        bottom: "24px",
        left: "24px",
      },
      printBackground: true,
    });
    const rawPdfBytes = pdf.buffer.slice(
      pdf.byteOffset,
      pdf.byteOffset + pdf.byteLength
    ) as ArrayBuffer;
    const pdfDocument = await PDFDocument.load(rawPdfBytes);
    pdfDocument.setTitle(`${myName} | ${myTitle}`);
    pdfDocument.setAuthor(myName);
    pdfDocument.setSubject("Curriculum Vitae");
    pdfDocument.setCreator(mainDomain);
    pdfDocument.setProducer("Puppeteer + pdf-lib");
    const pdfBytes = await pdfDocument.save();
    const responseBytes = pdfBytes.buffer.slice(
      pdfBytes.byteOffset,
      pdfBytes.byteOffset + pdfBytes.byteLength
    ) as ArrayBuffer;

    return new Response(responseBytes, {
      headers: {
        "Cache-Control":
          "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
        "Content-Disposition": `inline; filename="${myName.toLowerCase().replace(" ", "-")}-cv.pdf"`,
        "Content-Type": "application/pdf",
      },
    });
  } finally {
    await browser.close();
  }
}
