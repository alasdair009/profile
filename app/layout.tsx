import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalStyle, Header } from "@/entities";
import StyledComponentsRegistry from "@/lib/registry";
import { Analytics } from "@vercel/analytics/react";
import { generateMetaData } from "@/lib/metadata";
import ServiceWorker from "@/app/ServiceWorker";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...generateMetaData(),
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Header />
          <main>{children}</main>
        </StyledComponentsRegistry>
        <ServiceWorker />
      </body>
    </html>
  );
}
