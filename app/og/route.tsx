/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { colors } from "@/entities";
import { darken } from "polished";
import { CSSProperties } from "react";

export const runtime = "edge";

const galleryStyles: CSSProperties = {
  background: "black",
  border: `1px solid ${colors.greenGrass}`,
  display: "flex",
  height: 100,
  objectFit: "cover",
  overflow: "hidden",
  width: 140,
};

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

    const trampoline = await fetch(
      new URL("./trampoline.png", import.meta.url)
    ).then((res) => res.arrayBuffer());

    const jagex = await fetch(new URL("./jagex.png", import.meta.url)).then(
      (res) => res.arrayBuffer()
    );

    const nemesis = await fetch(new URL("./nemesis.png", import.meta.url)).then(
      (res) => res.arrayBuffer()
    );

    const runefest = await fetch(
      new URL("./runefest.png", import.meta.url)
    ).then((res) => res.arrayBuffer());

    const skylines = await fetch(
      new URL("./skylines.png", import.meta.url)
    ).then((res) => res.arrayBuffer());

    const talk = await fetch(new URL("./talk.png", import.meta.url)).then(
      (res) => res.arrayBuffer()
    );

    const css = await fetch(new URL("./css.png", import.meta.url)).then((res) =>
      res.arrayBuffer()
    );

    const vercel = await fetch(new URL("./vercel.png", import.meta.url)).then(
      (res) => res.arrayBuffer()
    );

    const rain = await fetch(new URL("./rain.png", import.meta.url)).then(
      (res) => res.arrayBuffer()
    );

    const trampolineBedColor1 = `#fff`;
    const trampolineBedColor2 = `#bfbfbf`;

    return new ImageResponse(
      (
        <div
          style={{
            alignItems: "center",
            background: `radial-gradient(ellipse at top, rgba(20, 44, 22, 0.5), rgba(36, 96, 44, 0.5)), radial-gradient(${colors.blackEvil} 75%, ${darken(0.3, colors.greenGrass)})`,
            color: colors.whiteGhost,
            display: "flex",
            flex: 1,
            flexDirection: "column",
            height: 630,
            justifyContent: "center",
            position: "relative",
            width: 1200,
          }}
        >
          <span
            style={{
              background: `linear-gradient(90deg, ${trampolineBedColor1} 12%, transparent 0, transparent 88%, ${trampolineBedColor1} 0), linear-gradient(180deg, transparent 37%, ${trampolineBedColor2} 0, ${trampolineBedColor2} 63%, transparent 0), linear-gradient(90deg, transparent 37%, ${trampolineBedColor1} 0, ${trampolineBedColor1} 63%, transparent 0) transparent`,
              backgroundSize: "25px 25px",
              height: "100%",
              opacity: 0.1,
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
            }}
          />
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              height: 530,
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                alignItems: "center",
                borderRadius: "50%",
                background:
                  "radial-gradient(rgba(46,135,38,0.3) 50%, transparent)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={image as unknown as string}
                style={{ height: 200 }}
                alt="AM logo"
              />
              <h1>alasdairmacrae.co.uk</h1>
              <h2>{title}</h2>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              height: 100,
              justifyContent: "center",
              marginBottom: "auto",
            }}
          >
            <img
              src={jagex as unknown as string}
              alt=""
              style={galleryStyles}
            />
            <img
              src={nemesis as unknown as string}
              alt=""
              style={galleryStyles}
            />
            <img
              src={runefest as unknown as string}
              alt=""
              style={galleryStyles}
            />
            <img
              src={skylines as unknown as string}
              alt=""
              style={galleryStyles}
            />
            <img
              src={trampoline as unknown as string}
              alt=""
              style={galleryStyles}
            />
            <img src={talk as unknown as string} alt="" style={galleryStyles} />
            <img src={css as unknown as string} alt="" style={galleryStyles} />
            <img
              src={vercel as unknown as string}
              alt=""
              style={galleryStyles}
            />
            <img src={rain as unknown as string} alt="" style={galleryStyles} />
          </div>
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
