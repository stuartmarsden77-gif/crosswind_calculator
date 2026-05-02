import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://crosswindcalculator.com"),
  alternates: {
    canonical: "/",
  },
  title: "Crosswind Calculator | Aviation Reference Tool & Wind Components",
  description: "Estimate crosswind and headwind components. Free aviation reference tool for pilot awareness and pre-flight planning.",
  keywords: ["crosswind calculator", "wind components", "pilot tool", "aviation calculator", "headwind component", "aircraft limits"],
  openGraph: {
    title: "Crosswind Calculator | Aviation Reference Tool",
    description: "Estimate crosswind and headwind components. Reference tool for pilots.",
    url: "https://crosswindcalculator.com",
    siteName: "Crosswind Calculator",
    type: "website",
    images: [
      {
        url: "/assets/guide-illustrations/cessna-172.png",
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
    images: ["/assets/guide-illustrations/cessna-172.png"],
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
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-200 overflow-x-hidden w-full">
        {/* Google AdSense */}
        <Script 
          id="adsense"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5330100111318765" 
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        {/* Google tag (gtag.js) */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-X748S6W9M3" 
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X748S6W9M3');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
