import { CDNOrigin, siteOrigin } from "@/lib/domains";
import { myName, myTitle, siteDescription, socialMedia } from "@/lib/metadata";

type DiscordComponent = {
  type: number;
  spacing?: number;
  content?: string;
  style?: number;
  label?: string;
  url?: string;
  components?: DiscordComponent[];
  accessory?: {
    type: number;
    media: {
      url: string;
    };
    description?: string;
  };
};

export type DiscordLinkPreview = {
  component: {
    type: number;
    accent_color: number;
    components: DiscordComponent[];
  };
};

export const generateDiscordEmbed = (): DiscordLinkPreview => {
  return {
    component: {
      type: 17,
      accent_color: 3054374, // #2e9b26
      components: [
        {
          type: 9,
          components: [
            {
              type: 10,
              content: `# **[${myName}](${siteOrigin})**
${myTitle}

${siteDescription}`,
            },
          ],
          accessory: {
            type: 11,
            media: {
              url: `${CDNOrigin}/og/icon.png`,
            },
            description: "Alasdair Macrae logo",
          },
        },
        {
          type: 14,
          spacing: 1,
        },
        {
          type: 1,
          components: [
            {
              type: 2,
              style: 5,
              label: "Visit portfolio",
              url: siteOrigin,
            },
            {
              type: 2,
              style: 5,
              label: "GitHub",
              url: socialMedia.github,
            },
            {
              type: 2,
              style: 5,
              label: "LinkedIn",
              url: socialMedia.linkedin,
            },
          ],
        },
      ],
    },
  };
};
