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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: myName,
  url: siteOrigin,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="en">
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
