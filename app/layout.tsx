import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/entities";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Alasdair Macrae's Portfolio`,
  description: "The home of exciting web adventures",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
