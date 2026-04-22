"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Wind, Navigation2, Activity } from "lucide-react";
import { calculateWindComponents, WindComponents } from "@/lib/aviation-math";
import Card from "./Card";
import WindSchematic from "./WindSchematic";

export default function CrosswindCalculator() {
  const [runwayHeading, setRunwayHeading] = useState<number>(360);
  const [windDirection, setWindDirection] = useState<number>(270);
  const [windSpeed, setWindSpeed] = useState<number>(15);
  const [results, setResults] = useState<WindComponents | null>(null);

  useEffect(() => {
    const res = calculateWindComponents(runwayHeading, windDirection, windSpeed);
    setResults(res);
  }, [runwayHeading, windDirection, windSpeed]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Inputs Section */}
      <div className="lg:col-span-5 space-y-6">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <Activity className="w-6 h-6 text-cyan-400" />
          Live Parameters
        </h2>

        <div className="space-y-4">
          <InputGroup
            label="Runway Heading"
            icon={<Navigation2 className="w-4 h-4" />}
            value={runwayHeading}
            onChange={(val) => setRunwayHeading(Math.min(360, Math.max(1, val)))}
            unit="DEG"
            min={1}
            max={360}
          />
          <InputGroup
            label="Wind Direction"
            icon={<Compass className="w-4 h-4" />}
            value={windDirection}
            onChange={(val) => setWindDirection(Math.min(360, Math.max(1, val)))}
            unit="DEG"
            min={1}
            max={360}
          />
          <InputGroup
            label="Wind Speed"
            icon={<Wind className="w-4 h-4" />}
            value={windSpeed}
            onChange={(val) => setWindSpeed(Math.min(200, Math.max(0, val)))}
            unit="KTS"
            min={0}
            max={200}
          />
        </div>

        {/* Action Table (Ad Placeholder Spirit) */}
        <div className="mt-8 p-4 border border-white/5 rounded-xl bg-white/[0.02]">
           <p className="text-[10px] text-slate-600 uppercase tracking-widest mb-2 font-semibold">Pro Tip</p>
           <p className="text-sm text-slate-400 italic">"Always verify your aircraft's max demonstrated crosswind component in the POH before takeoff."</p>
        </div>
      </div>

      {/* Results & Schematic Section */}
      <div className="lg:col-span-7">
        <Card className="h-full flex flex-col justify-between overflow-hidden relative">
          {/* Decorative Grid Line */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 blur-3xl rounded-full -mr-16 -mt-16" />
          
          <div className="grid grid-cols-2 gap-2 md:gap-4 mb-8">
            <ResultBox 
              label="Crosswind" 
              value={results?.crosswind || 0} 
              unit="KTS" 
              subValue={results?.side !== "Direct" ? `${results?.side} Component` : "Direct Wind"}
            />
            <ResultBox 
              label={results?.isTailwind ? "Tailwind" : "Headwind"} 
              value={results?.headwind || 0} 
              unit="KTS" 
              warning={results?.isTailwind}
            />
          </div>

          <div className="flex-grow flex items-center justify-center py-4">
             <WindSchematic runwayHeading={runwayHeading} windDirection={windDirection} />
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-end">
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-mono mb-1">Status</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-slate-300 font-medium">Calculation Synchronized</span>
              </div>
            </div>
            <div className="text-right">
               <span className="text-[10px] text-slate-500 font-mono">VECTOR ANALYSIS V.3.1</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function InputGroup({ label, value, onChange, unit, icon, min, max }: {
  label: string;
  value: number;
  onChange: (val: number) => void;
  unit: string;
  icon: React.ReactNode;
  min?: number;
  max?: number;
}) {
  return (
    <div className="space-y-2 group">
      <div className="flex justify-between items-center px-1">
        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2 group-focus-within:text-cyan-400 transition-colors">
          {icon}
          {label}
        </label>
        <span className="text-[10px] font-mono text-slate-500">{unit}</span>
      </div>
      <div className="flex items-center gap-3">
        <input 
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="flex-grow h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
        />
        <input 
          type="number"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value) || 0)}
          className="w-20 bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm font-mono text-white focus:outline-none focus:border-cyan-400/50 transition-all shadow-inner"
        />
      </div>
    </div>
  );
}

function ResultBox({ label, value, unit, subValue, warning }: {
  label: string;
  value: number;
  unit: string;
  subValue?: string;
  warning?: boolean;
}) {
  return (
    <div className="bg-white/5 rounded-xl p-5 border border-white/5 group hover:border-cyan-400/20 transition-all duration-500">
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">{label}</p>
      <div className="flex items-baseline gap-2">
        <span className={`text-2xl md:text-4xl font-bold font-mono tracking-tighter ${warning ? 'text-red-400' : 'text-white group-hover:text-cyan-400'} transition-colors`}>
          {value}
        </span>
        <span className="text-xs font-mono text-slate-500">{unit}</span>
      </div>
      {subValue && (
        <p className="text-[10px] text-slate-500 mt-1 uppercase font-mono">{subValue}</p>
      )}
    </div>
  );
}
