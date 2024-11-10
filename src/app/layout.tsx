import type { Metadata } from "next";
// import localFont from "next/font/local";
import { JetBrains_Mono, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "./_sections/_components/navbar";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

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
        className={`${jetbrains.className} bg-primary-bg antialiased px-36`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
