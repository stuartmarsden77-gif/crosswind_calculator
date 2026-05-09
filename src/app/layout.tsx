import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import DeferredScripts from "@/components/DeferredScripts";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.crosswindcalculator.com"),
  alternates: {
    canonical: "./",
  },
  title: "Crosswind Calculator | Aviation Reference Tool & Wind Components",
  description: "Estimate crosswind and headwind components. Free aviation reference tool for pilot awareness and pre-flight planning.",
  keywords: ["crosswind calculator", "wind components", "pilot tool", "aviation calculator", "headwind component", "aircraft limits"],
  openGraph: {
    title: "Crosswind Calculator | Aviation Reference Tool",
    description: "Estimate crosswind and headwind components. Reference tool for pilots.",
    url: "https://www.crosswindcalculator.com",
    siteName: "Crosswind Calculator",
    type: "website",
    images: [
      {
        url: "/assets/guide-illustrations/cessna_172_annotated.png",
        width: 1200,
        height: 630,
        alt: "Crosswind Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crosswind Calculator | Aviation Reference Tool",
    description: "Estimate crosswind and headwind components. Reference tool for pilots.",
    images: ["/assets/guide-illustrations/cessna_172_annotated.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/assets/logo/icon-dark.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "512x512" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Crosswind Calculator",
  "url": "https://www.crosswindcalculator.com",
  "description": "Aviation reference tool for estimating crosswind and headwind components.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.crosswindcalculator.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${rajdhani.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-200 overflow-x-hidden w-full">
        <DeferredScripts />
        {children}
      </body>
    </html>
  );
}
