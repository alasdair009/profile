import { Inter } from "next/font/google";
import { Footer, Header } from "@/entities";
import { Analytics } from "@vercel/analytics/react";
import ServiceWorker from "@/app/ServiceWorker";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ViewTransitions } from "next-view-transitions";
import "./styles/global.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main
            style={{
              minHeight: `calc(100vh - ${48}px - ${128}px)`,
            }}
          >
            {children}
          </main>
          <Footer />
          <ServiceWorker />
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
