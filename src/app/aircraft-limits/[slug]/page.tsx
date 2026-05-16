
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import SEOSection from "@/components/SEOSection";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { getAircraftBySlug, aircraftDatabase } from "@/lib/aircraft-data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const aircraft = getAircraftBySlug(params.slug);
  if (!aircraft) return {};

  return {
    title: `${aircraft.type} Maximum Crosswind Limit | Performance Data`,
    description: `Detailed crosswind component limits and aerodynamic performance for the ${aircraft.type}. Guide for pilots on ${aircraft.type} runway handling.`,
    alternates: {
      canonical: `/aircraft-limits/${params.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return aircraftDatabase.map((ac) => ({
    slug: ac.slug,
  }));
}

export default function AircraftLimitPage({ params }: { params: { slug: string } }) {
  const aircraft = getAircraftBySlug(params.slug);

  if (!aircraft) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-mesh w-full overflow-x-hidden">
      <Navbar />
      
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
                {aircraft.type} <span className="text-cyan-400">Maximum Demonstrated Crosswind</span> Component
              </h1>
              
              <div className="bg-white/5 border border-cyan-500/30 rounded-xl p-8 mb-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-0">Aircraft Details</h2>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Manufacturer</span>
                    <span className="text-white font-medium">{aircraft.manufacturer}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Model Series</span>
                    <span className="text-white font-medium">{aircraft.modelSeries}</span>
                  </div>
                  <div className="flex justify-between pb-2 bg-cyan-400/10 -mx-4 px-4 rounded pt-2">
                    <span className="text-cyan-400 font-bold">Max Demonstrated XW</span>
                    <span className="text-cyan-400 font-mono font-bold">{aircraft.limit}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-400 text-lg">
                {aircraft.description} Understanding the crosswind limits of the {aircraft.type} is essential for safe flight operations and landing decision making.
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-video w-full shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50">
                 <span className="text-slate-500 font-mono text-sm uppercase tracking-widest">Image: {aircraft.type} in Flight</span>
              </div>
            </div>
          </div>

          <div className="prose prose-invert prose-cyan max-w-none space-y-12 text-slate-300">
            <SEOSection title="Understanding the Demonstrated Limit">
              <p>
                The <strong>Maximum Demonstrated Crosswind Component</strong> for the {aircraft.type} is {aircraft.limit}. It is important to note that this is not an absolute aerodynamic limit, but rather the maximum crosswind velocity at which the aircraft was tested and found to have controllable handling characteristics by a factory test pilot during certification.
              </p>
              <p>
                For Part 91 operations, this value is a recommendation, but it serves as a critical safety benchmark. Exceeding this value significantly increases the risk of a runway excursion if the pilot's skill level or the gusty conditions exceed the aircraft's control authority.
              </p>
            </SEOSection>

            <SEOSection title="Crosswind Landing Techniques">
              <p>
                When landing the {aircraft.type} in crosswinds, pilots typically use a combination of the <strong>crab</strong> and <strong>sideslip (wing-low)</strong> techniques.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Initial Approach:</strong> Maintain a crab angle to stay centered on the localizer or runway centerline.</li>
                <li><strong>Final Phase:</strong> Transition to a wing-low sideslip to align the longitudinal axis with the runway while counteracting drift.</li>
                <li><strong>Touchdown:</strong> Aim to land on the upwind main wheel first while maintaining rudder pressure to stay centered.</li>
              </ul>
              <p>
                For more details, see our <Link href="/guides/crosswind-landing-techniques" className="text-cyan-400 hover:underline">Complete Crosswind Landing Guide</Link>.
              </p>
            </SEOSection>

            <SEOSection title="Safety & Decision Making">
              <p>
                Always calculate the crosswind component before starting your approach. You can use our <Link href="/" className="text-cyan-400 hover:underline">Crosswind Calculator tool</Link> to get instant results based on the current ATIS/AWOS report.
              </p>
              <p>
                If the calculated component is close to or exceeds {aircraft.limit}, or if the gust factor makes the wind unpredictable, consider a go-around or diverting to a runway with a more favorable wind alignment.
              </p>
            </SEOSection>
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
