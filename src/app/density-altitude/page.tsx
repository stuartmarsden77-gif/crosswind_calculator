import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DensityAltitudeContent from "@/components/DensityAltitudeContent";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Density Altitude Reference | Aviation Performance Tool",
  description: "Estimate pressure altitude and density altitude. Reference tool for pilot awareness of aircraft performance factors.",
};

export default function DensityAltitude() {
  return (
    <div className="min-h-screen flex flex-col bg-mesh">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-12">
            Density <span className="text-cyan-400">Altitude</span>
          </h1>

          <DensityAltitudeContent />
          
          <div className="mt-16">
            <LegalDisclaimer />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
