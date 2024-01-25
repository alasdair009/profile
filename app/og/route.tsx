import { ImageResponse } from "next/og";
import { colors } from "@/entities";
import { darken } from "polished";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Online Portfolio";

    const image = await fetch(new URL("./icon.png", import.meta.url)).then(
      (res) => res.arrayBuffer()
    );

    return new ImageResponse(
      (
        <div
          style={{
            alignItems: "center",
            background: `radial-gradient(${colors.blackEvil} 50%, ${darken(
              0.25,
              colors.greenGrass
            )})`,
            color: colors.whiteGhost,
            display: "flex",
            flexDirection: "column",
            height: 630,
            justifyContent: "center",
            width: 1200,
          }}
        >
          {/*// @ts-ignore */}
          <img src={image} style={{ height: 200 }} alt="AM logo" />
          <h1>alasdairmacrae.co.uk</h1>
          <h2>{title}</h2>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
