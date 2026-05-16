
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import { Metadata } from "next";
import Link from "next/link";
import AircraftLimitsTable from "@/components/AircraftLimitsTable";

export const metadata: Metadata = {
  alternates: {
    canonical: "/aircraft-limits",
  },
  title: "Search Aircraft Crosswind Limits Database | 50+ Models",
  description: "Search our database of Maximum Demonstrated Crosswind components. Reference limits for Cessna, Piper, Beechcraft, Boeing, Airbus, and more. Find yours now!",
};

export default function AircraftLimits() {
  return (
    <div className="min-h-screen flex flex-col bg-mesh">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 text-center">
            Aircraft <span className="text-cyan-400">Limits</span> Database
          </h1>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16 text-lg">
            Search our database of Maximum Demonstrated Crosswind components. Find your benchmarks for safe flight planning and operational thresholds.
          </p>

          <h2 className="sr-only">Aviation Crosswind Limits Search</h2>
          <AircraftLimitsTable />

          <div className="mt-12 p-8 glass border-cyan-400/20 rounded-2xl flex items-start gap-6">
             <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
               <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
             </div>
             <div>
               <h2 className="text-white font-bold mb-2">Important Disclaimer</h2>
               <p className="text-slate-400 text-sm leading-relaxed">
                 The values listed above are Maximum Demonstrated Crosswind components. These are proven thresholds during certification, not absolute aerodynamic limitations. However, they should be treated as hard limits for most operations. Always consult your specific Pilot's Operating Handbook (POH).
               </p>
              </div>
           </div>

           <div className="mt-12">
             <h2 className="text-xl font-bold text-white mb-6">Explore Related Guides</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <Link href="/guides/crosswind-landing-techniques" className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/30 transition-colors group">
                 <h2 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Landing Techniques</h2>
                 <p className="text-slate-400 text-sm">Master the crab and sideslip methods for safe arrivals.</p>
               </Link>
               <Link href="/guides/how-to-calculate-crosswind" className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/30 transition-colors group">
                 <h2 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Calculation Guide</h2>
                 <p className="text-slate-400 text-sm">Learn the math behind decomposing wind vectors.</p>
               </Link>
               <Link href="/guides/understanding-poh-limits" className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/30 transition-colors group">
                 <h2 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">POH Limitations</h2>
                 <p className="text-slate-400 text-sm">Analyze the legal and structural bounds of your aircraft.</p>
               </Link>
             </div>
           </div>

           <div className="mt-12">
             <LegalDisclaimer />
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
