import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cannonrad — Full-service radiology, 24/7/365.",
  description:
    "Cannonrad, LLC does everything radiology: 24/7/365 subspecialty reading services, plus CORE PACS, RIS, and IT — one partner for the entire imaging operation.",
  metadataBase: new URL("https://cannonrad.com"),
  openGraph: {
    title: "Cannonrad — Full-service radiology, 24/7/365.",
    description:
      "24/7/365 subspecialty reads, plus PACS, RIS, and IT. Cannonrad does everything.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white selection:bg-cyan-400/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
