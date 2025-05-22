import { Footer, Header } from "@/entities";
import { Analytics } from "@vercel/analytics/react";
import ServiceWorker from "@/app/ServiceWorker";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ViewTransitions } from "next-view-transitions";
import "./styles/global.scss";
import styles from "./layout.module.scss";
import { ReactNode } from "react";
import { interFont } from "@/entities/design-tokens/typography/typography";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={interFont.className}>
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
