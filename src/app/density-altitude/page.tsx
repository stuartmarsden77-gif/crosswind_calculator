import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DensityAltitudeContent from "@/components/DensityAltitudeContent";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import SEOSection from "@/components/SEOSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/density-altitude",
  },
  title: "Density Altitude Calculator | Aviation Performance Tool",
  description: "Calculate pressure and density altitude instantly. Assess aircraft takeoff and climb performance in high, hot, and humid conditions. Try the tool now!",
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Density Altitude Calculator",
  "operatingSystem": "Web",
  "applicationCategory": "AviationApp",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Calculate pressure and density altitude instantly. Assess aircraft takeoff and climb performance in non-standard conditions."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is the density altitude calculator important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It supports operators grasp how thin environments affect critical climbing abilities, preventing hazardous takeoff scenarios."
      }
    },
    {
      "@type": "Question",
      "name": "How does weather affect aerodynamic climbing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Intense summer heat spreads atmospheric molecules apart, simulating conditions found at exponentially higher mountains."
      }
    }
  ]
};

export default function DensityAltitude() {
  return (
    <div className="min-h-screen flex flex-col bg-mesh">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="flex-grow pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
               Calculate <span className="text-cyan-400">Density Altitude</span>
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-3xl">
            A specialized tool designed to accurately assess <strong className="font-semibold text-slate-300">pressure and density altitude</strong> configurations, explicitly predicting critical <strong>aircraft performance</strong> thresholds during critical phases of <strong>flight</strong>.
          </p>

          <DensityAltitudeContent />

          <div className="mt-20 prose prose-invert prose-cyan max-w-none space-y-12 text-slate-300 border-t border-white/10 pt-16">
            
            <div id="calculator-role">
              <SEOSection title="Purpose of the Atmospheric Data Tool">
                <p>
                  Ascending into the sky safely demands respect for invisible atmospheric properties. Utilizing a dedicated <strong>density altitude calculator</strong> offers predictability for pilots facing intensely hot and high operational environments. This exact metric reveals the precise aerodynamic equivalent height the wings "feel" while battling through the sky.
                </p>
                <p>
                  Mastering these metrics fundamentally improves safety margins. It supports that the wings can confidently hoist massive structures cleanly away from impending terrain. Ignoring these atmospheric truths frequently yields extremely degraded climbing capabilities and dangerously extended takeoff rolls across the asphalt.
                </p>
              </SEOSection>
            </div>

            <div id="atmospheric-pressure">
              <SEOSection title="Pressure Altitude Physics & Mechanics">
                <p>
                  Before analyzing localized heat, determining exact <strong>pressure altitude</strong> remains absolutely paramount. Atmospheric <strong>pressure</strong> inherently shifts drastically depending strictly upon your physical geographical <strong>elevation</strong>. Moving higher into the mountainous terrain fundamentally implies operating through much thinner environments.
                </p>
                <p>
                  When meteorological high systems sweep across the region, heavily weighted atmospheres crush downward, artificially simulating lower terrain. Conversely, deep low systems forcefully lower the ceiling, rapidly forcing the atmospheric column upward and further thinning available oxygen. Maintaining vigilant awareness of these daily <strong>pressure</strong> shifts supports operational survival.
                </p>
              </SEOSection>
            </div>

            <div id="temperature-effects">
              <SEOSection title="The Impact of Air Temperature">
                <p>
                  Intense summer heat acts as the most aggressive multiplier against safe climbing. Rising <strong>air temperature</strong> fundamentally excites invisible gas molecules, immediately spreading them exceptionally far apart. This intense thermal expansion strictly means the propeller blades physically bite into massively reduced oxygen concentrations per revolution. 
                </p>
                <p>
                  As a result, extreme high <strong>temperature</strong> readings artificially age a healthy engine, robbing tremendous amounts of critical horsepower exactly when climbing out from short runways demands maximum output. Prudent aviators thoroughly monitor these changing weather variables prior to every single departure procedure.
                </p>
              </SEOSection>
            </div>

            <div id="humidity-aviation">
              <SEOSection title="Aeronautics, Humidity, and Safe Performance">
                <p>
                  Professional <strong>aviation</strong> instructors consistently remind students regarding the deceptive danger of excessive water vapor. Extreme <strong>humidity</strong> silently replaces heavy nitrogen particles with significantly lighter moisture vapor, slightly degrading absolute lift potential. While less impactful than immense heat or high heights, excessive humidity undeniably worsens total overall operational <strong>performance</strong> on sweltering afternoon departures.
                </p>
              </SEOSection>
            </div>

            <div id="mathematical-formula">
              <SEOSection title="The Official Calculation Formula">
                <p>
                  Professional engineering relies strictly entirely on a proven baseline <strong>formula</strong> rather than flawed human guesswork to predict exactly how the machine behaves. To safely determine your true operational envelope, you must input highly precise <strong>data</strong> directly into the <strong>calculation</strong> software.
                </p>
                <p>
                  This fundamental <strong>formula</strong> precisely maps current local reality strictly against the universally accepted standard atmospheric model. Consistently applying these metrics supports that your <strong>aircraft</strong> safely reliably clears all geographical obstacles. For further safety planning, always check your <Link href="/aircraft-limits" className="text-cyan-400 hover:underline">aircraft limits</Link> and <Link href="/" className="text-cyan-400 hover:underline">crosswind components</Link> before departure.
                </p>
              </SEOSection>
            </div>

          </div>
          
          <div className="mt-16 border-t border-white/10 pt-10">
            <LegalDisclaimer />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
