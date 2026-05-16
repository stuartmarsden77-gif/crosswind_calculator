import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  alternates: {
    canonical: "/terms-of-service",
  },
  title: "Terms of Service | Crosswind Calculator",
  description: "Terms of Service for Crosswind Calculator - an online tool for pilots.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-slate-400 mb-6 font-medium">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-300 leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Disclaimer of Liability</h2>
            <p className="text-slate-300 leading-relaxed">
              The tools and data provided on this site are for reference and educational purposes only. You agree that Crosswind Calculator assumes no liability for errors or omissions. Pilots are solely responsible for ensuring the safety of flight and verifying all limits with official documentation.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
