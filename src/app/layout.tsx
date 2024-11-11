import type { Metadata } from "next";
import { JetBrains_Mono, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_sections/_components/navbar/navbar";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Giga Chad Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains.className} bg-primary-bg antialiased pt-36 lg:pt-0 lg:pl-36 lg:pr-8 xl:pr-16`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
