import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import SEOSection from "@/components/SEOSection";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  alternates: {
    canonical: "/aircraft-limits/cessna-172",
  },
  title: "Cessna 172 Maximum Limit | Aerodynamic Performance",
  description: "Comprehensive engineering breakdown of the demonstrated crosswind component for the trainer. Analyze runway alignment and crosswind landing dynamics.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What exactly determines the crosswind component?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The calculation relies on the geometric angle between the approaching weather system and the actual paved surface. It dictates the lateral force pushing explicitly against the vertical stabilizer."
      }
    },
    {
      "@type": "Question",
      "name": "Why is the trainer limited to fifteen knots?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The fifteen knot figure represents a demonstrated capability rather than a structural failure point. A certified engineer securely validated consistent control authority at this velocity."
      }
    }
  ]
};

export default function Cessna172Limits() {
  return (
    <div className="min-h-screen flex flex-col bg-mesh w-full overflow-x-hidden">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="flex-grow pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Link 
            href="/aircraft-limits" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Aircraft Limits
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 border-b border-white/5 pb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6 leading-tight">
                Evaluating Lateral Limits: The <span className="text-cyan-400">Cessna 172</span> (C172) <span className="text-cyan-400">Maximum Demonstrated Crosswind</span> Component Performance on the <span className="text-cyan-400">Runway</span>
              </h1>
              
              <div className="bg-white/5 border border-cyan-500/30 rounded-xl p-8 mb-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-0">Aircraft Details</h2>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Manufacturer</span>
                    <span className="text-white font-medium">Textron Aviation</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Model Series</span>
                    <span className="text-white font-medium">172 Skyhawk</span>
                  </div>
                  <div className="flex justify-between pb-2 bg-cyan-400/10 -mx-4 px-4 rounded pt-2">
                    <span className="text-cyan-400 font-bold">Safe Target Value</span>
                    <span className="text-cyan-400 font-mono font-bold">15 KNOT</span>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-400 text-lg">
                This specific trainer represents the most successful training airframe fundamentally ever built. Grasping the intricate techniques explicitly required to successfully operate this platform during challenging weather systems remains genuinely critical to sustained operational survival.
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-square w-full shadow-2xl">
              <Image 
                src="/assets/guide-illustrations/cessna_172_annotated.png"
                alt="A sleek conceptual illustration of a Cessna 172 flying through complex atmospheric weather systems"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="prose prose-invert prose-cyan max-w-none space-y-12 text-slate-300">
            <div id="understanding">
              <SEOSection title="The Certification Benchmark">
                <p>
                  As an aviator advances beyond baseline maneuvers, they inevitably encounter aggressive atmospheric forces. Operating a complex machine near the ground requires absolute precision, particularly when handling a lateral disruption.
                </p>
                
                <div className="bg-cyan-500/5 border-l-4 border-cyan-400 p-6 my-8 rounded-r-xl">
                  <p className="text-white font-bold mb-2 uppercase tracking-wider text-xs">Aeronautical Definition</p>
                  <p className="text-slate-200 italic">
                    The <strong>Maximum Demonstrated Crosswind Component</strong> is the velocity at which a factory test pilot maintained safe, repeatable control authority during certification flights.
                  </p>
                </div>

                <p>
                  It is vital to comprehend that this published metric is not a hard legal limitation for Part 91 operations. Instead, it serves as a reliable benchmark confirming the aircraft has sufficient control surface deflection to counteract a perpendicular force. 
                </p>

                <h3 className="text-white text-xl font-bold mt-8 mb-4">Key Certification Facts:</h3>
                <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                  <li className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <span className="text-cyan-400 font-bold block mb-1">Standard Logic</span>
                    Certification requires demonstrating handling in 90-degree winds equal to 20% of stalling speed.
                  </li>
                  <li className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <span className="text-cyan-400 font-bold block mb-1">C172 Baseline</span>
                    For the Skyhawk, this mathematical baseline settled precisely at the 15-knot mark.
                  </li>
                </ul>

                <p className="mt-8">
                  The prominent high-wing configuration inherently exposes a massive amount of lateral surface area. During a turbulent ground roll, the high wing acts like a horizontal sail, requiring preemptive spatial reasoning to prevent the aircraft from being displaced off the paved surface.
                </p>
              </SEOSection>
            </div>

            <div id="technique">
              <SEOSection title="Physics of the Landing Profile">
                <p>
                  Maintaining lateral stability while initiating a complex <strong>crosswind landing</strong> profile separates amateur operators from professionals. As the tires approach the asphalt, the longitudinal axis must point directly down the painted centerline.
                </p>

                <h3 className="text-white text-xl font-bold mt-8 mb-4">The Secret to Flawless Alignment:</h3>
                <p>Establishing a crossed-controlled slip involves separating your physical flight controls into two distinct roles:</p>
                
                <ul className="space-y-4 my-6">
                  <li className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-1">1</div>
                    <p><strong>Primary Yoke (Ailerons):</strong> Perfectly counteract lateral drift by lowering the upwind wing downward into the incoming moving ocean of air.</p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-1">2</div>
                    <p><strong>Foot Pedals (Rudder):</strong> Apply opposite pressure to force the engine cowling to swing parallel with the runway environment.</p>
                  </li>
                </ul>

                <p>
                  A proficient <strong>CFI</strong> demands that students maintain this configuration until the upwind main tire makes solid contact. Prematurely relaxing leg pressure prior to touchdown causes "weathervaning"—the natural tendency of the large vertical tail to pivot the chassis into the flow.
                </p>
              </SEOSection>
            </div>

            <div id="weather">
              <SEOSection title="Wind Speed and Geometric Analysis">
                <p>
                  A tower controller broadcasts the current <strong>wind speed</strong> and magnetic direction. Safe execution requires decomposing this raw vector into an actionable <strong>crosswind component</strong>. 
                </p>

                <div className="overflow-hidden rounded-xl border border-white/10 my-8">
                  <table className="w-full text-sm font-mono bg-white/5">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5">
                        <th className="p-4 text-left text-cyan-400">Angle Offset</th>
                        <th className="p-4 text-left text-cyan-400">Crosswind Factor</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr>
                        <td className="p-4 text-slate-300">30 Degrees</td>
                        <td className="p-4 text-white">50% of Total Velocity</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-slate-300">45 Degrees</td>
                        <td className="p-4 text-white">70% of Total Velocity</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-slate-300">60+ Degrees</td>
                        <td className="p-4 text-white">90-100% of Total Velocity</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  There exists zero professional shame in intelligently aborting a messy, un-stabilized approach. Electing to push the throttle forward and abandon a deteriorating arrival demonstrates exceptional aeronautical maturity.
                </p>
              </SEOSection>
            </div>

            <div id="turbulence">
              <SEOSection title="Mitigating Gust Variability">
                <p>
                  Atmospheric environments rarely match theoretical textbook conditions. When velocities surge violently upward, we experience a dangerous physical <strong>gust</strong>. 
                </p>

                <h3 className="text-white text-xl font-bold mt-8 mb-4">Handling Chaotic Weather:</h3>
                <ul className="list-disc list-inside space-y-3 text-slate-300 mb-8">
                  <li><strong>Reduce Flap Deflection:</strong> A smaller flap profile decreases the lateral surface area exposed to sideways pushing forces.</li>
                  <li><strong>Increase Approach Speed:</strong> Add half of the reported gust factor to your final approach velocity as a kinetic buffer.</li>
                  <li><strong>Proactive Adjustments:</strong> Use constant, tiny adjustments rather than large, sluggish, reactionary inputs.</li>
                </ul>

                <p>
                  This aircraft essentially operates exceptionally predictably when correctly configured, efficiently absorbing significant turbulence while remaining responsive to immediate aileron corrections.
                </p>
              </SEOSection>
            </div>

            <div id="conclusion">
              <SEOSection title="The Final Approach">
                <p>
                  Ultimately, extracting premium utility out of a certified <strong>172</strong> relies upon immense discipline. When your computations confirm that the component exceeds your established comfort envelope, you intelligently abort the mission. 
                </p>
                <p>
                  Recognize that executing a sound <strong>crosswind landing</strong> demands blending academic mathematics with instinctive visceral sensory feedback. You feel the shifting pressure building dynamically across the rudder pedals. Following these rigid baseline values ensures the aircraft remains intact.
                </p>
              </SEOSection>
            </div>

            <div id="faqs" className="mt-16 pt-8 border-t border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8">Related Questions</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">What is the demonstrated maximum crosswind for a standard C172?</h3>
                  <p className="text-slate-300">
                    The handbook explicitly lists 15 knots as the certified threshold achieved during factory testing scenarios.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">Are crosswinds identical to total wind speeds?</h3>
                  <p className="text-slate-300">
                    No, the component specifically refers strictly solely to the perpendicular fraction pushing sideways directly against the aircraft profile, calculated purely via angular difference geometry.
                  </p>
                </div>
              </div>
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
