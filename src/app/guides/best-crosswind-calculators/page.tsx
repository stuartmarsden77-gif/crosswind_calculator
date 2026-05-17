import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pilot Crosswind Calculator | Best Web & Mobile Apps",
  description: "A roundup of the most accurate pilot crosswind calculator tools. Compare the top web tools and mobile apps for wind component calculation, headwind, and crosswind estimates.",
};

function ToolCard({
  number,
  name,
  format,
  bestFor,
  limitation,
  children,
}: {
  number: string;
  name: string;
  format: string;
  bestFor: string;
  limitation: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border border-white/10 rounded-2xl overflow-hidden">
      <div className="bg-white/[0.03] px-8 py-5 border-b border-white/10 flex items-center gap-4">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{number}</span>
        <h3 className="text-xl font-bold text-white">{name}</h3>
      </div>
      <div className="px-8 py-6 space-y-4">
        <div className="text-slate-300 leading-relaxed space-y-3">{children}</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="bg-white/[0.03] rounded-xl px-4 py-3">
            <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1">Format</p>
            <p className="text-sm text-slate-300">{format}</p>
          </div>
          <div className="bg-white/[0.03] rounded-xl px-4 py-3">
            <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-1">Best For</p>
            <p className="text-sm text-slate-300">{bestFor}</p>
          </div>
          <div className="bg-white/[0.03] rounded-xl px-4 py-3">
            <p className="text-[10px] font-mono text-amber-400 uppercase tracking-widest mb-1">Limitation</p>
            <p className="text-sm text-slate-300">{limitation}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BestCrosswindCalculators() {
  return (
    <div className="min-h-screen flex flex-col bg-mesh">
      <Navbar />

      <main className="flex-grow pt-24 pb-24">
        <div className="max-w-4xl mx-auto px-6 space-y-12">

          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
              <span className="text-cyan-400">Pilot Crosswind Calculator</span> Apps
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Performing a precise crosswind calculation is a critical task for any pilot. Whether you're a student solo-ing for the first time or managing a complex approach, having a reliable calculator to quickly verify the crosswind component and tailwind components ensures safety. Here's our comprehensive guide to the best tools available for your next flight.
            </p>
          </div>

          {/* Key Takeaways */}
          <section className="bg-cyan-400/5 border border-cyan-400/20 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-5">Crosswind Calculation For Pilots: Key Takeaways</h2>
            <ul className="space-y-3">
              {[
                "A digital crosswind calculator eliminates manual trigonometry errors during high-workload phases.",
                "Modern aviation apps integrate live METAR data to calculate crosswind instantly.",
                "Both web-based tools and offline mobile apps are worth having to estimate wind components.",
                "Always verify digital results against your specific aircraft limits and density altitude constraints.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section heading */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">The Best Tools to Calculate Crosswind Components</h2>
            <h3 className="text-lg font-medium text-cyan-400 mb-4">Find your preferred pilot crosswind calculator</h3>
            <p className="text-slate-500 text-sm">Ranked and reviewed tools for step-by-step navigation and safety.</p>
          </div>

          {/* Tool listings */}
          <ToolCard
            number="01"
            name="CrosswindCalculator.com (Web — Free)"
            format="Web browser (mobile-friendly)"
            bestFor="Quick pre-flight crosswind calculation, student pilots"
            limitation="No live METAR integration — you enter wind speed and wind direction manually"
          >
            <p>
              A clean, purpose-built <strong>web tool</strong> designed specifically for aviation wind component calculation. No bloat, no subscription — just enter your runway heading, wind direction, and wind speed in knots, and it instantly returns your crosswind and headwind components.
            </p>
            <p>
              What sets it apart is the instrument-inspired interface and the visual vector schematic that shows you the exact angular difference and deviation — not just a number. Try it on our{" "}
              <Link href="/" className="text-cyan-400 hover:underline">
                crosswind calculator
              </Link> homepage.
            </p>
          </ToolCard>

          <ToolCard
            number="02"
            name="ForeFlight (iOS)"
            format="iOS app (paid subscription)"
            bestFor="Full-service flight planning, navigation, IFR ops"
            limitation="Subscription cost is steep for occasional flyers"
          >
            <p>
              The industry-standard EFB. ForeFlight calculates wind components automatically from the METAR or TAF for your destination. Its runway view highlights favorable runways based on live crosswind data, which saves time during approach briefings.
            </p>
            <p>
              The depth of integration across weather, charts, and flight navigation makes it the go-to choice for professional and serious GA pilots alike.
            </p>
          </ToolCard>

          <ToolCard
            number="03"
            name="Garmin Pilot (iOS / Android)"
            format="iOS & Android (paid subscription)"
            bestFor="Pilots flying Garmin-equipped aircraft"
            limitation="Less useful if you're not in the Garmin ecosystem"
          >
            <p>
              Garmin's answer to ForeFlight. Deep integration with Garmin avionics means your EFB and cockpit displays share data seamlessly. The runway analysis tool pulls from live weather and flags which runway gives you the best wind alignment and lowest crosswind component at your destination.
            </p>
          </ToolCard>

          <ToolCard
            number="04"
            name="Sporty's E6B (App & Hardware)"
            format="Mobile app + standalone hardware version"
            bestFor="Students, CFIs, learning step-by-step trigonometry"
            limitation="Interface feels dated compared to modern EFBs"
          >
            <p>
              A digital take on the classic circular flight computer. The wind function helps you calculate crosswind, headwind, tailwind components, and wind correction angle using the sine and cosine logic of the original E6B — just faster. 
            </p>
            <p>
              If you're studying for a checkride, the step-by-step consistency of the E6B output is hard to beat for an accurate calculation.
            </p>
          </ToolCard>

          <ToolCard
            number="05"
            name="E6B Flight Computer (Web)"
            format="Web browser"
            bestFor="Desktop pre-flight planning, multi-stop trip prep"
            limitation="Interface is dense — not ideal for quick cockpit reference"
          >
            <p>
              A comprehensive web-based suite of aviation calculation tools. The crosswind calculator here is solid, providing detailed breakdowns of wind speed in knots and supporting multiple airports side-by-side. More traditional interface but the data is accurate.
            </p>
          </ToolCard>

          <ToolCard
            number="06"
            name="AeroWeather (iOS / Android)"
            format="iOS & Android (free + paid tiers)"
            bestFor="Quick weather checks and runway assessments on the ramp"
            limitation="Not a full flight planner — weather and wind only"
          >
            <p>
              Primarily a METAR/TAF reader, but its runway view is genuinely useful. Select an airport, pick a runway, and AeroWeather calculates the crosswind and headwind components from the latest observation. Fast to load and well-designed for mobile use.
            </p>
          </ToolCard>

          {/* Why these tools help */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Why Do Pilots Need a Crosswind Calculator?</h2>
            <p className="text-slate-400">Worth spelling out for newer pilots specifically:</p>

            <div className="space-y-4">
              {[
                {
                  label: "Reduces cockpit workload",
                  body: "Mental math on short final when you're also managing comms, checklists, and traffic is a recipe for error. Having a number pre-calculated lets you focus on flying the aircraft.",
                },
                {
                  label: "Standardizes the calculation",
                  body: "Every pilot crosswind calculator listed above uses the exact same trigonometry. Whether using sine for the crosswind or cosine for the headwind, the result is consistent.",
                },
                {
                  label: "Makes limits tangible",
                  body: "Looking at a 22-knot wind on a METAR doesn't immediately tell you if that's a problem. Seeing a specific wind component compared to your aircraft's 15-knot demonstrated limit does.",
                },
                {
                  label: "Supports go/no-go decisions",
                  body: "When you're close to your personal minimums or aircraft limits, having a precise calculation removes ambiguity. It also helps account for altitude changes that affect aircraft performance.",
                },
              ].map(({ label, body }) => (
                <div key={label} className="flex gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-xl">
                  <span className="mt-1 w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">{label}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom line */}
          <section className="bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-7 space-y-3">
            <h2 className="text-xl font-bold text-white">Bottom Line</h2>
            <p className="text-slate-400 leading-relaxed">
              For day-to-day flying, a combination of a free web calculator (like{" "}
              <Link href="/" className="text-cyan-400 hover:underline">
                CrosswindCalculator.com
              </Link>
              ) for quick checks and a paid EFB (ForeFlight or Garmin Pilot) for full trip planning covers virtually every scenario. Don't rely on one aviation tool exclusively — redundancy matters.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Combine these tools with our{" "}
              <Link href="/guides/how-to-calculate-crosswind" className="text-cyan-400 hover:underline">
                step-by-step crosswind calculation guide
              </Link>{" "}
              to maintain a backup skill set to manually calculate crosswind components when digital tools aren't available.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
