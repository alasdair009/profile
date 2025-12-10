/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { darken } from "polished";
import { CSSProperties } from "react";

export const runtime = "edge";

const greenGrass = "#2e9b26";
const whiteGhost = "#fff";
const blackEvil = "#000";
const trampolineBedColor1 = whiteGhost;
const trampolineBedColor2 = `#bfbfbf`;

const galleryStyles: CSSProperties = {
  background: "black",
  border: `1px solid ${greenGrass}`,
  display: "flex",
  height: 100,
  objectFit: "cover",
  overflow: "hidden",
  width: 140,
};

const cDNFolder = "https://files.alasdairmacrae.co.uk/og";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Online Portfolio";

    return new ImageResponse(
      <div
        style={{
          alignItems: "center",
          background: `radial-gradient(ellipse at top, rgba(20, 44, 22, 0.5), rgba(36, 96, 44, 0.5)), radial-gradient(${blackEvil} 75%, ${darken(0.3, greenGrass)})`,
          color: whiteGhost,
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
              src={`${cDNFolder}/icon.png`}
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
          <img src={`${cDNFolder}/jagex.png`} alt="" style={galleryStyles} />
          <img src={`${cDNFolder}/nemesis.png`} alt="" style={galleryStyles} />
          <img src={`${cDNFolder}/runefest.png`} alt="" style={galleryStyles} />
          <img src={`${cDNFolder}/skylines.png`} alt="" style={galleryStyles} />
          <img
            src={`${cDNFolder}/trampoline.png`}
            alt=""
            style={galleryStyles}
          />
          <img src={`${cDNFolder}/talk.png`} alt="" style={galleryStyles} />
          <img src={`${cDNFolder}/css.png`} alt="" style={galleryStyles} />
          <img src={`${cDNFolder}/vercel.png`} alt="" style={galleryStyles} />
          <img src={`${cDNFolder}/rain.png`} alt="" style={galleryStyles} />
        </div>
      </div>,
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
