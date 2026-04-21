import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSection from "@/components/SEOSection";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Understanding Aircraft Crosswind Limits | Flight Safety",
  description: "What is a maximum demonstrated crosswind? Learn the difference between certification limits and aerodynamic boundaries.",
};

export default function UnderstandingPohLimits() {
  return (
    <div className="min-h-screen flex flex-col bg-mesh">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-12">
            Mastering <span className="text-cyan-400">Crosswind Limits</span>
          </h1>

          <div className="prose prose-invert prose-cyan max-w-none space-y-12 text-slate-300">
            <p className="text-xl text-slate-400 leading-relaxed">
              Every Pilot's Operating Handbook (POH) lists a "Maximum Demonstrated Crosswind Component." This number is often the source of confusion for pilots. It represents a certification baseline rather than an absolute aerodynamic limit.
            </p>

            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-square max-w-2xl mx-auto w-full mb-12">
              <Image 
                src="/assets/guide-illustrations/poh_limits.avif"
                alt="Cockpit instrument panel displaying aircraft speed and wind limits"
                fill
                className="object-cover"
              />
            </div>

            <SEOSection title="Demonstrated vs. Absolute Limits">
              <p>
                A demonstrated limit is not an absolute maximum. It is the highest crosswind value maintained during the aircraft's certification process. While the airframe may be capable of more, the manufacturer only proves safety up to that point.
              </p>
              <p>
                Test pilots fly under ideal conditions with specific airspeeds and flap settings. For the average pilot, the demonstrated limit should be viewed as a boundary that requires high skill and focus.
              </p>
              <p>
                Check the <Link href="/aircraft-limits" className="text-cyan-400 hover:underline">crosswind limits database</Link> for common GA and commercial aircraft thresholds.
              </p>
            </SEOSection>

            <SEOSection title="Legal and Safety Implications">
              <p>
                In many jurisdictions, exceeding the demonstrated limit is not illegal, but it can be a factor in accident investigations. Operating outside of tested parameters increases the risk of a runway excursion or loss of directional control.
              </p>
              <p>
                Personal minimums should be lower than the handbook limit. This is especially true for low-hour pilots or when flying a new aircraft type.
              </p>
            </SEOSection>

            <SEOSection title="Airframe Age and Control Authority">
              <p>
                Older aircraft with worn linkages or tired engines may not match the performance of a factory-new test airframe. Pilots must use caution when applying handbook values to older planes.
              </p>
              <p>
                Calculate components with the <Link href="/" className="text-cyan-400 hover:underline">online tool</Link> before every approach to stay ahead of the aircraft's capabilities.
              </p>
            </SEOSection>

            <SEOSection title="Environmental Variables">
              <p>
                High <Link href="/density-altitude" className="text-cyan-400 hover:underline">density altitude</Link> reduces control surface authority. A 15-knot crosswind at a sea-level airport feels different from a 15-knot crosswind at a high-elevation strip on a hot day.
              </p>
              <p>
                When air is less dense, the rudder and ailerons require more travel to achieve the same effect. You may run out of control authority before reaching the demonstrated limit in these conditions.
              </p>
            </SEOSection>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
