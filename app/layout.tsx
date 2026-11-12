import { Footer, Header } from "@/entities";
import { Analytics } from "@vercel/analytics/react";
import ServiceWorker from "@/app/ServiceWorker";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ViewTransitions } from "next-view-transitions";
import "@/styles/global.css";
import styles from "./layout.module.css";
import { ReactNode } from "react";
import { interFont } from "@/styles/fonts";
import { siteOrigin } from "@/lib/domains";
import { myName } from "@/lib/metadata";
import { generateDiscordEmbed } from "@/lib/discordEmbed";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteOrigin}#website`,
  name: myName,
  url: siteOrigin,
};

const discordEmbed = JSON.stringify(generateDiscordEmbed()).replace(
  /</g,
  "\\u003c"
);

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <script
            id="discord:component-embed"
            type="application/vnd.discord.component-embed+json"
            dangerouslySetInnerHTML={{ __html: discordEmbed }}
          />
        </head>
        <body className={interFont.className}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
            }}
          />
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
          <ServiceWorker />
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
