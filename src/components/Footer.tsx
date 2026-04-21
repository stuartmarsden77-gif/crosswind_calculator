import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="block mb-6">
              <Image 
                src="/assets/logo/logo-horizontal-dark.svg" 
                alt="Crosswind Calculator" 
                width={180} 
                height={40} 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Aviation reference tools for the modern pilot. Providing wind component estimations and performance data for educational purposes since 2026.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Calculators</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">Crosswind Calculator</Link></li>
              <li><Link href="/density-altitude" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">Density Altitude</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/manual-guide" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">Manual Guide</Link></li>
              <li><Link href="/aircraft-limits" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">Aircraft Limits</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Guides</h4>
            <ul className="space-y-4">
              <li><Link href="/guides/how-to-calculate-crosswind" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">Calculation Guide</Link></li>
              <li><Link href="/guides/crosswind-landing-techniques" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">Landing Techniques</Link></li>
              <li><Link href="/guides/understanding-poh-limits" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">POH Limits</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy-policy" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Precision Flight Tools. All rights reserved.
          </p>
          <p className="text-slate-700 text-[10px] uppercase tracking-widest font-mono">
            Experimental Software // Use with Caution
          </p>
        </div>
      </div>
    </footer>
  );
}
