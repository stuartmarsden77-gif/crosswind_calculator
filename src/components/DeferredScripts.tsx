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
      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wl8syup6x3");
        `}
      </Script>
      {/* Ahrefs Analytics */}
      <Script 
        src="https://analytics.ahrefs.com/analytics.js" 
        data-key="qbKkKztWQFR3pbkK0jP78Q" 
        strategy="afterInteractive"
      />
    </>
  );
}
