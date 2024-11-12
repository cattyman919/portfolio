import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seno Pamungkas - Personal Portfolio",

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
        {children}
      </body>
    </html>
  );
}
