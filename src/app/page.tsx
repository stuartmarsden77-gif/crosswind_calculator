import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CrosswindCalculator from "@/components/CrosswindCalculator";
import SEOSection from "@/components/SEOSection";
import { Metadata } from "next";
import Link from "next/link";
import LegalDisclaimer from "@/components/LegalDisclaimer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  title: "Calculate Crosswind & Wind Components | Crosswind Calculator",
  description: "The most precise crosswind calculator for pilots. Calculate wind components, headwind, and tailwind instantly for any runway heading. Calculate now!",
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Crosswind Calculator",
  "operatingSystem": "Web",
  "applicationCategory": "AviationApp",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Precision crosswind calculator for pilots. Calculate wind components, headwind, and tailwind instantly for any runway heading."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you calculate a crosswind component?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To calculate the lateral force, you find the sine of the angle between the wind direction and the runway heading, then multiply it by the total wind speed."
      }
    },
    {
      "@type": "Question",
      "name": "Why is knowing the wind direction important for landing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The wind direction relative to the landing strip determines the lateral force. A high crosswind can exceed control authority."
      }
    },
    {
      "@type": "Question",
      "name": "Does this calculation app handle longitudinal forces?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the tool provides both headwind and tailwind components based on the relationship between atmospheric conditions and the heading."
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-mesh w-full overflow-x-hidden">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="flex-grow">
        {/* Hero / Tool Section */}
        <div className="pt-8 md:pt-16 pb-12 md:pb-24 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="mb-10 md:mb-16">
              <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-4">
                Calculate <span className="text-cyan-400">Crosswind</span>: Wind, Headwind, and Tailwind Components
              </h1>
              <p className="text-slate-400 text-base md:text-lg max-w-2xl font-medium">
                Professional tool for the modern pilot. Perform a precise calculation of wind variables to support safety during every phase of flight.
              </p>
            </div>
            
            <CrosswindCalculator />
          </div>
          
          <div className="px-6">
            <LegalDisclaimer />
          </div>
        </div>

        {/* Key Takeaways Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="bg-white/5 border border-cyan-500/30 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-6 mt-0">Key Takeaways for Safe Operations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="list-disc list-inside space-y-3 text-slate-300">
                <li>Always verify your <strong>runway heading</strong> matches magnetic north.</li>
                <li>Atmospheric lateral force affects <strong>aircraft</strong> stability.</li>
                <li>High <strong>wind speed</strong> requires extra rudder authority to <strong>land</strong> safely.</li>
              </ul>
              <ul className="list-disc list-inside space-y-3 text-slate-300">
                <li>A <strong>tailwind</strong> increases ground speed and touchdown distance.</li>
                <li>Find your specific <strong>value</strong> benchmarks before approach.</li>
                <li>Check the <strong>wind direction</strong> relative to the strip before the flare.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed SEO Sections */}
        <SEOSection id="methodology" title="Aviation Crosswind Calculation Methodology">
          <p>
            Decomposing <strong>wind components</strong> is mandatory. This digital resource serves as a dedicated utility to analyze a single <strong>wind</strong> <strong>vector</strong>. By entering the <strong>runway</strong> orientation and the current <strong>wind direction</strong>, the pilot receives an immediate <strong>data</strong> readout regarding the lateral forces.
          </p>
          <p>
            The software performs its logic using the <strong>sine</strong> and <strong>cosine</strong> of the <strong>angle</strong>. If the <strong>wind</strong> is coming from the <strong>left</strong>, the <strong>crosswind component</strong> will require specific control inputs to <strong>correct</strong> the path. This allows you to <strong>calculate</strong> forces in seconds, compared to the minutes for manual math.
          </p>
          <p>
            The <strong>value</strong> of using an automated <strong>tool</strong> in the cockpit is clear: it removes the chance of a <strong>number</strong> error. With accurate <strong>data</strong>, you can focus on flying the <strong>aircraft</strong> while we handle the trigonometry.
          </p>
        </SEOSection>

        <SEOSection id="headwind-tailwind" title="Analyzing Headwind and Tailwind Components">
          <p>
            Beyond the lateral force, one must also evaluate the longitudinal <strong>wind</strong> effect. A strong <strong>headwind</strong> is generally beneficial as it reduces the ground <strong>speed</strong> of the <strong>aircraft</strong>, leading to a shorter roll. However, a following wind presents a significant risk, as it increases kinetic energy.
          </p>
          <p>
            This <strong>app</strong> is designed to provide both longitudinal <strong>components</strong> instantly. By entering the data and <strong>wind direction</strong>, you can quickly see the situation. If you identify a <strong>tailwind</strong> that exceeds your POH limits, a change of <strong>direction</strong> or a diversion may be required.
          </p>
          <p>
            Every <strong>pilot</strong> should check this <strong>data</strong> to verify their plan. Whether you are dealing with a 10-knot breeze or 25-knot gusty <strong>wind</strong>, knowing the exact <strong>value</strong> is what keeps things safe.
          </p>
        </SEOSection>

        <SEOSection id="about" title="Physics of Crosswind Forces">
          <p>
            A <strong>crosswind component</strong> pushes your <strong>aircraft</strong> away from the <strong>runway</strong> centerline. To find these forces, you must determine the geometric <strong>angle</strong> at which the air intercepts your path. If the <strong>direction</strong> is highly offset from the <strong>runway heading</strong>, the lateral force can become a struggle to manage, especially in light machines.
          </p>
          <p>
            Using our calculation system, you can find these forces before ever leaving the path. This transforms a stressful arrival into a routine event. By knowing the <strong>wind speed</strong> and <strong>angle</strong>, you can anticipate the amount of control deflection needed to maintain a stabilized <strong>flight</strong> path.
          </p>
        </SEOSection>

        <SEOSection id="limits" title="Improving Aeronautical Decision Making">
          <p>
            A professional does not guess their numbers. They <strong>use</strong> a specialized system to find the exact result. This supports that the facts are used to make a go/no-go decision. If the <strong>crosswind component</strong> is excessive, or if a strong following wind is present, you must verify if the machine can safely <strong>land</strong> on the <strong>runway</strong>.
          </p>
          <p>
            Our logic helps you assess these thresholds. Compare the results against your <Link href="/aircraft-limits" className="text-cyan-400 hover:underline">aircraft limits</Link> to stay within the safety envelope. Whether you have 200 hours or 20,000 hours, assessing the <strong>angle</strong> remains a critical part of every mission.
          </p>
        </SEOSection>

        {/* FAQ Section */}
        <SEOSection id="faq" title="Frequently Asked Questions">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">How do I assess the result?</h3>
              <p className="text-slate-300">
                To <strong>use</strong> our logic, simply enter the magnetic <strong>runway</strong> <strong>heading</strong>, the reported <strong>wind direction</strong>, and the current <strong>wind speed</strong>. The system will instantly provide the needed figures for you.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Is this accurate for all types?</h3>
              <p className="text-slate-300">
                Yes, the physical nature of <strong>wind</strong> is purely mathematical and applies to any machine. However, you must compare the resulting figures against specific limitations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Why check these forces manually?</h3>
              <p className="text-slate-300">
                Knowing the basic math supports that if you don't have access to an <strong>app</strong>, you can still find a safe approach using the <strong>wind</strong> data provided by the tower.
              </p>
            </div>
          </div>
        </SEOSection>
      </main>

      <Footer />
    </div>
  );
}
