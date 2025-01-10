import { get } from "@vercel/edge-config";
import type { NetatmoEdgeConfig } from "../netatmoTypes";

export const dynamic = "force-static";

type NetatmoTokenResponse = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  expire_in: number;
  scope: string[];
};

type NetatmoErrorResponse = {
  error: string;
};

/**
 * Get a new set of tokens from Netatmo.
 * @param refresh - current refresh token.
 */
const getToken = async (refresh: string) => {
  const payload = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refresh,
    client_id: `${process.env.NETATMO_CLIENT_ID}`,
    client_secret: `${process.env.NETATMO_CLIENT_SECRET}`,
  }).toString();

  const res = await fetch("https://api.netatmo.com/oauth2/token", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    method: "POST",
    body: payload,
  });

  const data: NetatmoTokenResponse | NetatmoErrorResponse = await res.json();

  return data;
};

/**
 * Stores the new tokens and data in Vercel edge
 * @param refresh - refresh token used to generate the next access token
 * @param access - access token for reading Netatmo data
 * @param expires - some number /shrug
 */
const putInEdge = async (refresh: string, access: string, expires: number) => {
  const edgePutData: { netatmo: NetatmoEdgeConfig } = {
    netatmo: {
      refresh: refresh,
      access: access,
      expires: expires,
    },
  };

  const result = await fetch(
    `https://api.vercel.com/v1/edge-config/${process.env.EDGE_STORE_ID}/netatmo`,
    {
      body: JSON.stringify(edgePutData),
      headers: {
        Authorization: `Bearer ${process.env.EDGE_WRITE}`,
        "Content-Type": "application/json",
      },
      method: "PATCH",
    }
  );

  const resultJson = await result.json();

  console.log(resultJson);

  return resultJson;
};

/**
 * TypeGuard to verify successful Netatmo response.
 * @param response
 */
function isSuccessfulNetatmoResponse(
  response: NetatmoTokenResponse | NetatmoErrorResponse
): response is NetatmoTokenResponse {
  return (response as NetatmoTokenResponse).access_token !== undefined;
}

export async function GET() {
  // Get the current refresh token from Vercel Edge
  const edgeConfigItems: NetatmoEdgeConfig | undefined = await get("netatmo");

  if (!edgeConfigItems) {
    return Response.json({ error: "Could not get stored Netatmo data" });
  }

  const tokenResponse = await getToken(edgeConfigItems.refresh);
  console.log("Got token...");
  console.log(tokenResponse);

  if (!isSuccessfulNetatmoResponse(tokenResponse)) {
    return Response.json({ tokenResponse });
  }

  await putInEdge(
    tokenResponse.refresh_token,
    tokenResponse.access_token,
    tokenResponse.expires_in
  );

  // {"data":{"access_token":"5dcef168369359000c69bf98|e45ce24ccea20e5d53240f9c98a629ca","refresh_token":"5dcef168369359000c69bf98|5cead4426aa36e763e0ac386207d65c8","expires_in":10800,"expire_in":10800,"scope":["read_station"]}}

  return Response.json({ tokenResponse });
}
