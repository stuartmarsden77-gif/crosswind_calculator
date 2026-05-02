import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/aircraft-limits",
  },
  title: "Aircraft Crosswind Limits Database | Maximum Demonstrated Components",
  description: "Browse our database of maximum demonstrated crosswind components for common aircraft. General reference for situational awareness.",
};

export default function AircraftLimits() {
  const aircraftData = [
    { type: "Cessna 172 Skyhawk", limit: "15 KTS", category: "General Aviation" },
    { type: "Piper PA-28 Warrior", limit: "17 KTS", category: "General Aviation" },
    { type: "Cessna 182 Skylane", limit: "15 KTS", category: "General Aviation" },
    { type: "Cirrus SR22", limit: "20 KTS", category: "High Performance" },
    { type: "Beechcraft Bonanza", limit: "17 KTS", category: "High Performance" },
    { type: "Boeing 737-800", limit: "33 KTS", category: "Commercial" },
    { type: "Airbus A320", limit: "33 KTS", category: "Commercial" },
    { type: "Boeing 777", limit: "38 KTS", category: "Commercial" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-mesh">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 text-center">
            Aircraft <span className="text-cyan-400">Limits</span> Database
          </h1>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16 text-lg">
            Reference table for Maximum Demonstrated Crosswind components. Note that these are proven thresholds, not absolute aerodynamic limitations.
          </p>

          <Card className="overflow-hidden p-0 border-white/5">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/[0.03] border-b border-white/5">
                    <th className="px-8 py-5 text-xs font-mono text-cyan-400 uppercase tracking-widest">Aircraft Type</th>
                    <th className="px-8 py-5 text-xs font-mono text-cyan-400 uppercase tracking-widest">Max Demonstrated XW</th>
                    <th className="px-8 py-5 text-xs font-mono text-cyan-400 uppercase tracking-widest">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {aircraftData.map((ac) => (
                    <tr key={ac.type} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-8 py-6 text-slate-300 font-medium group-hover:text-white transition-colors">{ac.type}</td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-mono border border-cyan-400/20">
                          {ac.limit}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-slate-500 text-sm italic">{ac.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="mt-12 p-8 glass border-cyan-400/20 rounded-2xl flex items-start gap-6">
             <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
               <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
             </div>
             <div>
               <h4 className="text-white font-bold mb-2">Important Disclaimer</h4>
               <p className="text-slate-400 text-sm leading-relaxed">
                 The values listed above are for general reference and training purposes only. Test pilots demonstrated these components during certification; they do not represent absolute limits for all pilots or all weather conditions. Always consult your specific pilot's operating handbook (POH) for the definitive numbers for your tail number.
               </p>
              </div>
           </div>

           <div className="mt-8">
             <LegalDisclaimer />
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
