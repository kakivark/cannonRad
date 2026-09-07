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

const title = "Cannonrad — Full radiology coverage, read and delivered.";
const description =
  "Cannonrad, LLC provides complete radiology coverage: board-certified radiologists reading around the clock, contracted turnaround times, and reports that reach everyone who needs them. CORE PACS included.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://cannonrad.com"),
  openGraph: { title, description, type: "website" },
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
      // Inline so the page paints black on the very first frame. Waiting for
      // the stylesheet leaves a white flash on this otherwise all-dark site.
      style={{ backgroundColor: "#000", colorScheme: "dark" }}
    >
      <body
        className="min-h-full bg-black text-white selection:bg-cyan-400/30 selection:text-white"
        style={{ backgroundColor: "#000" }}
      >
        {children}
      </body>
    </html>
  );
}
