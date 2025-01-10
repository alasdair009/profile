import { get } from "@vercel/edge-config";
import type { NetatmoEdgeConfig } from "../netatmoTypes";

export const dynamic = "force-static";

export async function GET() {
  const edgeConfigItems: NetatmoEdgeConfig | undefined = await get("netatmo");

  if (!edgeConfigItems) {
    return Response.json({ error: "Could not get stored Netatmo data" });
  }

  const res = await fetch(
    "https://api.netatmo.com/api/getstationsdata?get_favorites=false",
    {
      headers: {
        Authorization: `Bearer ${edgeConfigItems.access}`,
      },
    }
  );
  const data = await res.json();

  return Response.json({ data });
}
