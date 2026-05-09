import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import SEOSection from "@/components/SEOSection";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/manual-guide",
  },
  title: "Pilot's Manual Crosswind Calculation Guide | Clock Method",
  description: "Learn how to calculate crosswind components manually using trigonometry and the clock method. A vital skill for every pilot in the cockpit.",
};

export default function ManualGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-mesh">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-12">
            Pilot's Guide: <span className="text-cyan-400">Manual Calculation</span>
          </h1>

          <div className="prose prose-invert prose-cyan max-w-none space-y-12">
            <section className="space-y-6">
              <p className="text-xl text-slate-400 leading-relaxed">
                While modern flight decks provide instant data, every pilot should be able to calculate crosswind components manually. This guide covers the mathematical formulas and the "Clock Method" used for quick cockpit mental math.
              </p>
            </section>

            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-white flex items-center gap-4">
                <div className="w-2 h-8 bg-cyan-400 rounded-full" />
                The Trigonometric Method
              </h2>
              <p className="text-slate-400 text-lg">
                The most accurate way to calculate the crosswind component is using the sine and cosine functions. This method treats the wind as a vector acting upon the runway heading.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-cyan-400/20">
                  <p className="text-[10px] text-cyan-400 font-mono uppercase tracking-[0.2em] mb-4">Crosswind Formula</p>
                  <div className="text-2xl font-mono text-white mb-2">XW = Wind Speed × sin(θ)</div>
                  <p className="text-xs text-slate-500 font-mono italic">Where θ is the angle between runway and wind.</p>
                </Card>
                <Card className="border-slate-800">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em] mb-4">Headwind Formula</p>
                  <div className="text-2xl font-mono text-white mb-2">HW = Wind Speed × cos(θ)</div>
                  <p className="text-xs text-slate-500 font-mono italic">Decompose the total wind into the longitudinal axis.</p>
                </Card>
              </div>
            </section>

            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-white flex items-center gap-4">
                <div className="w-2 h-8 bg-slate-800 rounded-full" />
                The Clock Method (Mental Math)
              </h2>
              <p className="text-slate-400 text-lg">
                In a high-workload environment, pilots use the "Clock Method" for a rapid approximation. This uses 60 minutes of a clock face to determine how much of the total wind acts as a crosswind:
              </p>

              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-square max-w-2xl mx-auto w-full mb-12">
                <Image 
                  src="/assets/guide-illustrations/clock_method_annotated.png"
                  alt="Aviation Clock Method for mental crosswind calculation"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ClockStep angle="15°" fraction="1/4" time="15m" />
                <ClockStep angle="30°" fraction="1/2" time="30m" />
                <ClockStep angle="45°" fraction="3/4" time="45m" />
                <ClockStep angle="60°+" fraction="Full" time="60m" />
              </div>
            </section>

            <SEOSection title="Why It Matters">
              <p>
                Exceeding an aircraft's maximum demonstrated crosswind limit is a major safety risk. Understanding these components allows for better decision-making during the approach and landing phase fixed wing flight.
              </p>
            </SEOSection>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ClockStep({ angle, fraction, time }: any) {
  return (
    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center transition-all hover:bg-white/[0.05]">
      <p className="text-xs font-mono text-slate-500 mb-2">{angle} Angle</p>
      <div className="text-2xl font-bold text-white mb-1">{fraction}</div>
      <p className="text-[10px] text-cyan-400 font-mono uppercase">{time} Point</p>
    </div>
  );
}
