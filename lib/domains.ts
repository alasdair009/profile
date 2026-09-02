export const mainDomain = "alasdairmacrae.co.uk";
export const siteOrigin = `https://www.${mainDomain}`;
export const designSystemOrigin = `https://design.${mainDomain}`;
export const CDNOrigin = `https://files.${mainDomain}`;

export const vercelOrigin = "https://profile-ivory-three.vercel.app";

const allOrigins = [siteOrigin, vercelOrigin];

const isAbsoluteUrl = (urlOrPath: string) => {
  return /^(?:[a-z+]+:)?\/\//i.test(urlOrPath);
};
export const isExternalDomain = (urlOrPath: string) => {
  if (!isAbsoluteUrl(urlOrPath)) {
    return false;
  }
  let urlOrigin = "";
  try {
    urlOrigin = new URL(urlOrPath).origin;
  } catch {
    console.warn(`urlOrPath: ${urlOrPath} is not a valid url`);
  }
  return !allOrigins.includes(urlOrigin);
};
