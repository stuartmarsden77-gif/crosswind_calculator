import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSection from "@/components/SEOSection";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/guides/mastering-the-clock-method",
  },
  title: "The Clock Method: Quick Mental Crosswind Calculation",
  description: "Learn the 'Clock Method' for rapid mental crosswind calculation in the cockpit. Essential mental math for pilots without using a calculator.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the clock method for determining crosswinds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The clock method represents a mental math strategy allowing a pilot to quickly perform a crosswind calculation by visualizing the wind angle as minutes on a standard clock face."
      }
    },
    {
      "@type": "Question",
      "name": "How do you calculate the crosswind component using this method?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You find the angular difference between the runway and wind. For 15 degrees, you use one-quarter of the wind speed. For 30 degrees, use half. For 60 degrees and above, use the full speed."
      }
    },
    {
      "@type": "Question",
      "name": "How does the clock method compare to an electronic calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While a digital calculator computes absolute trigonometric precision, the clock face mental fraction technique safely yields answers remarkably close for safe flight operations."
      }
    }
  ]
};

export default function ClockMethod() {
  return (
    <div className="min-h-screen flex flex-col bg-mesh">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="flex-grow pt-24 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-12">
            <span className="text-cyan-400">Quick Crosswind Calculation</span>: The Clock Method Runway Calculator
          </h1>

          <div className="prose prose-invert prose-cyan max-w-none space-y-12 text-slate-300">
            <p className="text-xl text-slate-400 leading-relaxed">
              When flying an approach, heavily relying strictly on an online <strong>crosswind calculator</strong> can dangerously distract a pilot. Pilots require an instant <strong>mental calculation</strong> technique correctly named the <strong>clock method</strong>. This historically proven aviation strategy directly replaces any digital exact <strong>calculator</strong> by smoothly converting mechanical angular differences directly into simple mathematical minute fractions cleanly on a visual <strong>clock face</strong>. By strongly visualizing the face of an analog clock, any pilot can instantly perform rapid <strong>crosswind calculations</strong> purely in their head. The ultimate aviation goal remains identically simple: definitively <strong>calculate</strong> the exact lateral sideways <strong>cross wind component</strong> perfectly before initiating any <strong>landing</strong> sequence down the <strong>runway</strong>.
            </p>

            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-square max-w-2xl mx-auto w-full mb-12">
              <Image 
                src="/assets/guide-illustrations/clock_method_annotated.png"
                alt="Diagram showing the aviation clock method for wind vector calculation"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-white/5 border border-cyan-500/30 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-cyan-400 mb-4 mt-0">Key Takeaways</h2>
              <ul className="list-disc list-inside space-y-2 text-slate-300 m-0">
                <li>A visual <strong>clock face</strong> provides simple fractional math to quickly <strong>calculate the crosswind component</strong> reliably in flight.</li>
                <li>At carefully measured <strong>60 degrees</strong> (60 minutes) or greater, the <strong>crosswind component</strong> exactly equals the total pure <strong>wind speed</strong>.</li>
                <li>At <strong>30 degrees</strong> (30 minutes), you simply <strong>multiply</strong> your speed by exactly one half (the sine of 30 degrees).</li>
                <li>Compare your results with the <Link href="/aircraft-limits" className="text-cyan-400 hover:underline font-bold">Aircraft Limits Database</Link> to verify safety margins.</li>
              </ul>
            </div>

            <div className="mb-12 bg-slate-900/50 p-6 rounded-xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4 mt-0">Table of Contents</h2>
              <ul className="space-y-2 m-0 list-none p-0">
                 <li><a href="#finding-angle" className="text-cyan-400 hover:text-cyan-300 no-underline">Establish the Angle to Calculate the Crosswind</a></li>
                 <li><a href="#fractions" className="text-cyan-400 hover:text-cyan-300 no-underline">Using The Clock fractions to Calculate Crosswind Component</a></li>
                 <li><a href="#example-problem" className="text-cyan-400 hover:text-cyan-300 no-underline">Practical Example Walkthrough</a></li>
                 <li><a href="#headwind" className="text-cyan-400 hover:text-cyan-300 no-underline">Estimating Headwind or Tailwind Values</a></li>
                 <li><a href="#trigonometry" className="text-cyan-400 hover:text-cyan-300 no-underline">The Trigonometry Behind the Minutes</a></li>
                 <li><a href="#limitations" className="text-cyan-400 hover:text-cyan-300 no-underline">Safety Margins and Cockpit Management</a></li>
                 <li><a href="#faqs" className="text-cyan-400 hover:text-cyan-300 no-underline">Frequently Asked Questions</a></li>
              </ul>
            </div>

            <div id="finding-angle">
              <SEOSection title="Step 1: Establish the Intercept Angle">
                <p>
                  Before applying any direct <strong>calculation</strong>, you must determine the absolute angular difference separating the formal <strong>runway heading</strong> and the exact local broadcast <strong>wind direction</strong>. This is the foundation of any safe <strong>navigation</strong> effort. While a digital <strong>calculator</strong> gives you decimals, the mental model needs a round number.
                </p>
                <p>
                  Firmly subtract the assigned <strong>runway</strong> from the reported <strong>wind direction</strong>. For example, if you are landing on <strong>Runway 09</strong> (090 degrees) and the tower reports the <strong>wind</strong> from 120 degrees at 20 <strong>knot</strong>, your intercept angle is 30 degrees. This specific integer is what you will "pin" to your mental clock.
                </p>
              </SEOSection>
            </div>

            <div id="fractions">
              <SEOSection title="Step 2: Map the Angle to the Clock Face">
                <p>
                  Now, visualize an analog <strong>clock face</strong>. Each minute on the clock represents one degree of wind angle. This is where the <strong>clock method</strong> becomes extremely efficient for a busy <strong>pilot</strong>. In this system, 60 minutes represents a 90-degree <strong>cross wind</strong> (full component).
                </p>
                <div className="bg-slate-900/50 p-8 rounded-xl border border-white/5 font-mono text-cyan-400 my-8">
                  <ul className="space-y-4">
                    <li className="flex flex-col">
                      <span className="text-slate-500 text-sm mb-1 uppercase tracking-wider">15 Minutes (15 Degrees)</span>
                      <span className="text-xl">One quarter (0.25) of the Wind Speed</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-slate-500 text-sm mb-1 uppercase tracking-wider">30 Minutes (30 Degrees)</span>
                      <span className="text-xl">One half (0.50) of the Wind Speed</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-slate-500 text-sm mb-1 uppercase tracking-wider">45 Minutes (45 Degrees)</span>
                      <span className="text-xl">Three quarters (0.75) of the Wind Speed</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-slate-500 text-sm mb-1 uppercase tracking-wider">60 Minutes (60 Degrees+)</span>
                      <span className="text-xl">Full (1.00) Wind Speed</span>
                    </li>
                  </ul>
                </div>
                <p>
                  By using these fractions, you can <strong>calculate the crosswind</strong> without reaching for a device. If the angle is <strong>30°</strong>, you take half. If it is 15 degrees, you take a quarter. If the angle exceeds 60 degrees, for <strong>aviation safety</strong>, we assume the full velocity of the wind is acting as a crosswind.
                </p>
              </SEOSection>
            </div>

            <div id="example-problem">
              <SEOSection title="A Practical Crosswind Calculation Example">
                <p>
                  Let's walk through a scenario every <strong>pilot</strong> encounters. You are on <strong>navigation</strong> for an airport with <strong>Runway 27</strong>. The wind is reported at 300 degrees at 16 knots.
                </p>
                <ol className="space-y-4">
                  <li><strong>Difference</strong>: 300 - 270 = 30 degrees.</li>
                  <li><strong>Clock mapping</strong>: 30 degrees = 30 minutes. 30 minutes is halfway around the clock.</li>
                  <li><strong>Fraction</strong>: 1/2 of the reported <strong>wind speed</strong>.</li>
                  <li><strong>Final Calculation</strong>: 16 knots / 2 = 8 knots of crosswind.</li>
                </ol>
                <p>
                  This result tells you instantly if you can expect a significant <strong>crab</strong> angle on final. If your aircraft has a 12-knot limit, an 8-knot component is well within safe operating margins. This <strong>calculation</strong> was performed in less than three seconds.
                </p>
              </SEOSection>
            </div>

            <div id="headwind">
              <SEOSection title="Determining Headwind and Tailwind Components">
                <p>
                  While the <strong>crosswind component</strong> is vital for lateral control, the <strong>headwind</strong> or <strong>tailwind</strong> determines your ground speed and landing distance. You can use a similar "reverse clock" logic, or simply remember that for small angles (less than 30 degrees), almost all of the <strong>wind</strong> is a headwind.
                </p>
                <p>
                  For an angle of 0 degrees, the headwind is 100%. At 60 degrees off the nose, the headwind is roughly half the total speed. Knowing how to <strong>calculate crosswind</strong> often makes estimating the headwind redundant, as crosswind is usually the limiting safety factor.
                </p>
              </SEOSection>
            </div>

            <div id="trigonometry">
              <SEOSection title="The Sine Logic: Why the Clock Method Works">
                <p>
                  Many pilots wonder why 30 minutes equals 50 percent. This is rooted in basic <strong>trigonometry</strong>. The crosswind component is found by multiplying the total speed by the <strong>sine</strong> of the angle.
                </p>
                <ul>
                  <li><strong>Sine</strong> of 30 degrees = 0.5 (Hence, 1/2 of the speed).</li>
                  <li><strong>Sine</strong> of 45 degrees = 0.707 (Hence, ~3/4 of the speed).</li>
                  <li><strong>Sine</strong> of 60 degrees = 0.866 (Hence, nearly 100% of the speed).</li>
                </ul>
                <p>
                  The clock face simplifies these <strong>crosswind calculations</strong> by rounding them to easily divisible fractions that most pilots can manage while flying the aircraft. 
                </p>
              </SEOSection>
            </div>

            <div id="limitations">
              <SEOSection title="Safety Margins and POH Limits">
                <p>
                  It is important to remember that the <strong>calculation</strong> result is a static estimate. Real-world <strong>wind</strong> is gusty and unpredictable. If your <strong>calculate crosswind</strong> result is close to your personal minimums or the aircraft's demonstrated capability, you should consider a go-around.
                </p>
                <p>
                  A <strong>crosswind calculation for pilots</strong> should always include a "buffer." If the math says 10 knots and your limit is 12, those 2 knots can disappear instantly during a gust. Use the <strong>clock method</strong> to stay self-aware, but trust your eyes and the feel of the controls above all else.
                </p>
              </SEOSection>
            </div>

            <div id="faqs" className="mt-16 pt-8 border-t border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">Is the clock method accurate enough for aviation?</h3>
                  <p className="text-slate-300">
                    Yes. While not as precise as a digital <strong>calculator</strong>, it is accurate within a few knots. In aviation, situational awareness and timely decision-making are more important than decimal-point precision.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">Can I use this for tailwinds?</h3>
                  <p className="text-slate-300">
                    Absolutely. If the wind is coming from more than 90 degrees off the nose, use the same math to calculate the <strong>tailwind</strong> component. If you have a tailwind, your landing distance will increase significantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
