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
  title: "Cannonrad — RIS / PACS, reimagined.",
  description:
    "Cannonrad, LLC delivers next-generation RIS/PACS technology services. CORE PACS — built for the way modern radiology actually works.",
  metadataBase: new URL("https://cannonrad.com"),
  openGraph: {
    title: "Cannonrad — RIS / PACS, reimagined.",
    description:
      "CORE PACS — built for the way modern radiology actually works.",
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
