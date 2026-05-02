"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function DeferredScripts() {
  const [loadScripts, setLoadScripts] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setLoadScripts(true);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };

    window.addEventListener("scroll", handleInteraction, { passive: true });
    window.addEventListener("mousemove", handleInteraction, { passive: true });
    window.addEventListener("touchstart", handleInteraction, { passive: true });

    // Fallback: load after 8 seconds if no interaction
    const timeout = setTimeout(() => {
      setLoadScripts(true);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    }, 8000);

    return () => {
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      clearTimeout(timeout);
    };
  }, []);

  if (!loadScripts) return null;

  return (
    <>
      {/* Google AdSense */}
      <Script 
        id="adsense"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5330100111318765" 
        crossOrigin="anonymous"
        strategy="afterInteractive"
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
    </>
  );
}
