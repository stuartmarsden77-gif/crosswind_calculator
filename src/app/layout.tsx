import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
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
  title: "Crosswind Calculator | Aviation Reference Tool & Wind Components",
  description: "Estimate crosswind and headwind components. Free aviation reference tool for pilot awareness and pre-flight planning.",
  keywords: ["crosswind calculator", "wind components", "pilot tool", "aviation calculator", "headwind component", "aircraft limits"],
  openGraph: {
    title: "Crosswind Calculator | Aviation Reference Tool",
    description: "Estimate crosswind and headwind components. Reference tool for pilots.",
    url: "https://crosswindcalculator.com",
    siteName: "Crosswind Calculator",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Crosswind Calculator",
  "url": "https://crosswindcalculator.com",
  "description": "Aviation reference tool for estimating crosswind and headwind components.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://crosswindcalculator.com/?q={search_term_string}",
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
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-200">
        {children}
      </body>
    </html>
  );
}
