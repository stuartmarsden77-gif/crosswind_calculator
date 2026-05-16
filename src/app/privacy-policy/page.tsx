import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  alternates: {
    canonical: "/privacy-policy",
  },
  title: "Privacy Policy | Crosswind Calculator",
  description: "Privacy Policy for Crosswind Calculator - an online tool for pilots.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-slate-400 mb-6 font-medium">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information Collection</h2>
            <p className="text-slate-300 leading-relaxed">
              We do not collect any personal data when you use the Crosswind Calculator tool. All calculations are performed on your local device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Cookies and Tracking</h2>
            <p className="text-slate-300 leading-relaxed">
              We may use key cookies and basic analytics to understand how our tool is used and to improve its functionality. These do not track personal identifying data.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
