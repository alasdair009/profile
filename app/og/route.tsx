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

    const clouds = await fetch(new URL("./clouds.jpg", import.meta.url)).then(
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

    return new ImageResponse(
      (
        <div
          style={{
            alignItems: "center",
            background: `radial-gradient(${colors.blackEvil} 75%, ${darken(
              0.3,
              colors.greenGrass
            )})`,
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
          <img
            src={clouds as unknown as string}
            alt=""
            style={{ opacity: 0.15, position: "absolute" }}
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
            <img
              src={image as unknown as string}
              style={{ height: 200 }}
              alt="AM logo"
            />
            <h1>alasdairmacrae.co.uk</h1>
            <h2>{title}</h2>
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
