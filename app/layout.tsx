import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, GlobalStyle, Header } from "@/entities";
import StyledComponentsRegistry from "@/lib/registry";
import { Analytics } from "@vercel/analytics/react";
import ServiceWorker from "@/app/ServiceWorker";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ViewTransitions } from "next-view-transitions";
import { siteConfig } from "@/app/app.config";
import { headerHeight } from "@/entities/organisms/Header/styles";
import { footerHeight } from "@/entities/organisms/Footer/styles";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={inter.className}>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <Header />
            <main
              style={{
                minHeight: `calc(100vh - ${48}px - ${128}px)`,
              }}
            >
              {children}
            </main>
            <Footer />
          </StyledComponentsRegistry>
          <ServiceWorker />
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
