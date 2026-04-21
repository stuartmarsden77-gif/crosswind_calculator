import { ReactNode } from "react";

interface SEOSectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

export default function SEOSection({ title, children, id }: SEOSectionProps) {
  return (
    <section id={id} className="py-24 border-b border-white/5 last:border-0">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-cyan-400 pl-6 tracking-tight">
          {title}
        </h2>
        <div className="text-slate-400 leading-relaxed space-y-6 text-lg">
          {children}
        </div>
      </div>
    </section>
  );
}
