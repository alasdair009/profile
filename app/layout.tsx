import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/entities";
import { AtRule } from "csstype";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Alasdair Macrae's home online`,
  metadataBase: new URL("https://profile-ivory-three.vercel.app"),
  openGraph: {
    title: `Alasdair Macrae's home online`,
    images: "https://profile-ivory-three.vercel.app/og",
    description: "The home of exciting web adventures",
    url: "https://profile-ivory-three.vercel.app/",
  },
  twitter: {
    site: "@alasdair009",
    card: "summary_large_image",
    images: "https://profile-ivory-three.vercel.app/og",
    title: `Alasdair Macrae's home online`,
    description: "The home of exciting web adventures",
  },
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
        <StyledComponentsRegistry>
          <Header />
          <main>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
