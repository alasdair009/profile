import { NextResponse } from "next/server";
import { siteOrigin } from "@/lib/domains";
import { myName, siteName } from "@/lib/metadata";

type SitePage = {
  title: string;
  html?: string;
  width?: number;
  height?: number;
  type: "photo" | "video" | "link" | "rich";
  thumbnail_url?: string;
  thumbnail_width?: number;
  thumbnail_height?: number;
};

type OembedResponse = SitePage & {
  version: "1.0";
  author_name?: string;
  author_url?: string;
  provider_name?: string;
  provider_url?: string;
  cache_age?: number;
  url?: string;
  height?: number;
  width?: number;
  html?: string;
};

function getPageByPath(pathname: string): SitePage | null {
  const pages: Record<string, SitePage> = {
    "/about-me/trampolining": {
      title: `Trampolining | About Me | ${siteName}`,
      type: "rich",
      html: `<iframe src="${siteOrigin}/embed/about-me/trampolining" width="800" height="600" loading="lazy" allowfullscreen></iframe>`,
      thumbnail_url: `${siteOrigin}/images/about/trampolining.jpg`,
      width: 800,
      height: 600,
      thumbnail_width: 1200,
      thumbnail_height: 630,
    },
  };

  return pages[pathname] ?? null;
}

function normalizePathname(input: string) {
  // Remove trailing slash except for the homepage.
  if (input !== "/" && input.endsWith("/")) return input.slice(0, -1);
  return input;
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);

  const urlParam = requestUrl.searchParams.get("url");
  if (!urlParam) {
    return NextResponse.json(
      { error: "Missing required `url` query parameter." },
      { status: 400 }
    );
  }

  let targetUrl: URL;
  try {
    targetUrl = new URL(urlParam);
  } catch {
    return NextResponse.json(
      { error: "Invalid `url` query parameter." },
      { status: 400 }
    );
  }

  if (targetUrl.origin !== new URL(siteOrigin).origin) {
    return NextResponse.json(
      { error: "Unsupported URL origin." },
      { status: 400 }
    );
  }

  const pathname = normalizePathname(decodeURIComponent(targetUrl.pathname));
  const page = getPageByPath(pathname);

  if (!page) {
    return NextResponse.json(
      { error: "No oEmbed data found for that page." },
      { status: 404 }
    );
  }

  // const maxWidth = requestUrl.searchParams.get("maxWidth");
  // const requestedWidth = maxWidth ? Number(maxWidth) : undefined;
  // const width =
  //     Number.isFinite(requestedWidth) && requestedWidth && requestedWidth > 0
  //         ? Math.min(requestedWidth, page.width ?? requestedWidth)
  //         : page.width ?? 1200;

  const oembedData: OembedResponse = {
    version: "1.0",
    type: "photo",
    height: page.height ?? 600,
    width: page.width ?? 800,
    author_name: myName,
    author_url: siteOrigin,
    provider_name: siteName,
    provider_url: siteOrigin,
    title: page.title,
    html: page.html,
    thumbnail_url: page.thumbnail_url,
    thumbnail_width: page.thumbnail_width,
    thumbnail_height: page.thumbnail_height,
  };
  return Response.json(oembedData);
}
