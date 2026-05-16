import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Crosswind Calculators 2026 | Top Web & Mobile Apps for Pilots",
  description: "A roundup of the most accurate and reliable crosswind calculators for pilots. Compare the top web tools and mobile apps for wind component calculation and flight planning.",
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
        <h2 className="text-xl font-bold text-white">{name}</h2>
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
              Best <span className="text-cyan-400">Crosswind Calculators</span> for Pilots
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Managing wind components is one of those tasks that never gets fully &ldquo;routine.&rdquo; Whether you&apos;re a student solo-ing for the first time or a line pilot at a busy hub, having the right tool to quickly verify crosswind and headwind components is a genuine safety asset. Here&apos;s a breakdown of the best options out there right now.
            </p>
          </div>

          {/* Key Takeaways */}
          <section className="bg-cyan-400/5 border border-cyan-400/20 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-5">Key Takeaways</h2>
            <ul className="space-y-3">
              {[
                "Crosswind calculators eliminate manual error during high-workload phases.",
                "Modern apps integrate live METAR data for instant results.",
                "Both web-based tools and offline mobile apps are worth having for redundancy.",
                "Always verify digital results against your specific aircraft's POH limits.",
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
            <h2 className="text-2xl font-bold text-white mb-2">The Best Crosswind Calculators</h2>
            <p className="text-slate-500 text-sm">Ranked and reviewed for pilots at every level.</p>
          </div>

          {/* Tool listings */}
          <ToolCard
            number="01"
            name="CrosswindCalculator.com (Web — Free)"
            format="Web browser (mobile-friendly)"
            bestFor="Quick pre-flight checks, students, anyone without an EFB subscription"
            limitation="No live METAR integration — you enter data manually"
          >
            <p>
              A clean, purpose-built <strong>web tool</strong> designed specifically for wind component calculation. No bloat, no subscription — just enter your runway heading, wind direction, and wind speed, and it instantly returns your crosswind and headwind components with a live vector display.
            </p>
            <p>
              What sets it apart is the instrument-inspired interface and the visual vector schematic that shows you <em>where</em> the wind is acting on the runway axis — not just a number. Try it on the{" "}
              <Link href="/" className="text-cyan-400 hover:underline">
                crosswind calculator homepage
              </Link>
              .
            </p>
          </ToolCard>

          <ToolCard
            number="02"
            name="ForeFlight (iOS)"
            format="iOS app (paid subscription)"
            bestFor="Full-service flight planning, IFR ops, commercial pilots"
            limitation="Subscription cost is steep for occasional fliers"
          >
            <p>
              The industry-standard EFB. ForeFlight calculates wind components automatically from the METAR or TAF for your destination. Its runway view highlights favourable runways based on live crosswind data, which saves time during approach briefings.
            </p>
            <p>
              The depth of integration across weather, charts, and filing makes it the go-to choice for professional and serious GA pilots alike.
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
              Garmin&apos;s answer to ForeFlight. Deep integration with Garmin avionics means your EFB and cockpit displays share data seamlessly. The runway analysis tool pulls from live weather and flags which runway gives you the best wind alignment at your destination.
            </p>
          </ToolCard>

          <ToolCard
            number="04"
            name="Sporty's E6B (App & Hardware)"
            format="Mobile app + standalone hardware version"
            bestFor="Students, CFIs, checkride prep"
            limitation="Interface feels dated compared to modern EFBs"
          >
            <p>
              A digital take on the classic circular flight computer. The wind function calculates crosswind, headwind, and wind correction angle using the same logic as the original E6B — just faster. Well-regarded by instructors and examiners as a standardised reference.
            </p>
            <p>
              If you&apos;re studying for a checkride or training students, the consistency of the E6B output is hard to beat.
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
              A comprehensive web-based suite of aviation calculation tools. The crosswind calculator here is solid, providing detailed breakdowns and supporting multiple airports side-by-side. More traditional interface but the data is accurate and well-presented.
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
            <h2 className="text-2xl font-bold text-white">Why Do These Tools Actually Help?</h2>
            <p className="text-slate-400">Worth spelling out for newer pilots specifically:</p>

            <div className="space-y-4">
              {[
                {
                  label: "Reduces cockpit workload",
                  body: "Mental math on short final when you're also managing comms, checklists, and traffic is a recipe for error. Having a number pre-calculated lets you focus on flying.",
                },
                {
                  label: "Standardises the output",
                  body: "Every tool listed above uses the same trigonometric formula. The result is consistent regardless of who's running the numbers.",
                },
                {
                  label: "Makes limits tangible",
                  body: "Looking at a 22-knot wind on a METAR doesn't immediately tell you if that's a problem. Seeing '18.5 knots crosswind' compared to your aircraft's 15-knot demonstrated limit does.",
                },
                {
                  label: "Supports go/no-go decisions",
                  body: "When you're close to your personal minimums or aircraft limits, having a precise number removes ambiguity and keeps the decision defensible.",
                },
              ].map(({ label, body }) => (
                <div key={label} className="flex gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-xl">
                  <span className="mt-1 w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">{label}</p>
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
              For day-to-day flying, a combination of a free web tool (like{" "}
              <Link href="/" className="text-cyan-400 hover:underline">
                CrosswindCalculator.com
              </Link>
              ) for quick checks and a paid EFB (ForeFlight or Garmin Pilot) for full trip planning covers virtually every scenario. Don&apos;t rely on one tool exclusively — redundancy matters in aviation.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Combine these tools with our{" "}
              <Link href="/guides/how-to-calculate-crosswind" className="text-cyan-400 hover:underline">
                manual calculation guide
              </Link>{" "}
              to maintain a backup skill set for when digital tools aren&apos;t available.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
