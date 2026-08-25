import puppeteer from "puppeteer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title")?.trim() || "Portfolio Export";
  const generatedAt = new Date().toISOString();
  const previewUrl = new URL("/cv", request.url);
  previewUrl.searchParams.set("title", title);
  previewUrl.searchParams.set("generatedAt", generatedAt);

  const browser = await puppeteer.launch({
    args: ["--disable-setuid-sandbox", "--no-sandbox"],
    headless: true,
  });

  try {
    const page = await browser.newPage();
    await page.goto(previewUrl.toString(), {
      waitUntil: "networkidle0",
    });
    await page.addStyleTag({
      content: `
        header,
        footer,
        .web-header{
          display: none !important;
        }

        body > main {
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
    const pdfBytes = pdf.buffer.slice(
      pdf.byteOffset,
      pdf.byteOffset + pdf.byteLength
    ) as ArrayBuffer;

    return new Response(pdfBytes, {
      headers: {
        "Content-Disposition": 'inline; filename="alasdair-macrae-cv.pdf"',
        "Content-Type": "application/pdf",
      },
    });
  } finally {
    await browser.close();
  }
}
