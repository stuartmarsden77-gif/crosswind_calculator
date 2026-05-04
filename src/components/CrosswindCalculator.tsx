"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Wind, Navigation2, Activity } from "lucide-react";
import { calculateWindComponents, WindComponents } from "@/lib/aviation-math";
import Card from "./Card";
import WindSchematic from "./WindSchematic";

export default function CrosswindCalculator() {
  const [runwayHeading, setRunwayHeading] = useState<number | ''>(360);
  const [windDirection, setWindDirection] = useState<number | ''>(270);
  const [windSpeed, setWindSpeed] = useState<number | ''>(15);
  const [windGust, setWindGust] = useState<number | ''>(0);
  const [results, setResults] = useState<WindComponents | null>(null);

  useEffect(() => {
    const heading = typeof runwayHeading === 'number' ? runwayHeading : 0;
    const direction = typeof windDirection === 'number' ? windDirection : 0;
    const speed = typeof windSpeed === 'number' ? windSpeed : 0;
    const gust = typeof windGust === 'number' && windGust > 0 ? windGust : undefined;

    const res = calculateWindComponents(heading, direction, speed, gust);
    setResults(res);
  }, [runwayHeading, windDirection, windSpeed, windGust]);

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
            onChange={setRunwayHeading}
            unit="DEG"
            min={1}
            max={360}
          />
          <InputGroup
            label="Wind Direction"
            icon={<Compass className="w-4 h-4" />}
            value={windDirection}
            onChange={setWindDirection}
            unit="DEG"
            min={1}
            max={360}
          />
          <InputGroup
            label="Wind Speed"
            icon={<Wind className="w-4 h-4" />}
            value={windSpeed}
            onChange={setWindSpeed}
            unit="KTS"
            min={0}
            max={200}
          />
          <InputGroup
            label="Wind Gust (Optional)"
            icon={<Wind className="w-4 h-4 text-slate-500" />}
            value={windGust}
            onChange={setWindGust}
            unit="KTS"
            min={0}
            max={200}
          />
        </div>

        {/* Action Table (Ad Placeholder Spirit) */}
        <div className="mt-8 p-4 border border-white/5 rounded-xl bg-white/[0.02]">
           <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-2 font-semibold">Pro Tip</p>
           <p className="text-sm text-slate-300 italic">"Always verify your aircraft's max demonstrated crosswind component in the POH before takeoff."</p>
        </div>
      </div>

      {/* Results & Schematic Section */}
      <div className="lg:col-span-7">
        <Card className="h-full flex flex-col justify-between overflow-hidden relative">
          {/* Decorative Grid Line */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 blur-3xl rounded-full -mr-16 -mt-16" />
          
          <div className="mb-8">
            <div className="grid grid-cols-2 gap-2 md:gap-4">
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
            
            <AnimatePresence>
              {results?.crosswindGust && (
                <motion.div 
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="grid grid-cols-2 gap-2 md:gap-4 overflow-hidden"
                >
                  <ResultBox 
                    label="Gust Crosswind" 
                    value={results?.crosswindGust} 
                    unit="KTS" 
                    subValue="Peak Component"
                    warning={true}
                    size="small"
                  />
                  <ResultBox 
                    label={`Gust ${results?.isTailwind ? "Tailwind" : "Headwind"}`} 
                    value={results?.headwindGust || 0} 
                    unit="KTS" 
                    warning={true}
                    size="small"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex-grow flex items-center justify-center py-4">
             <WindSchematic 
               runwayHeading={typeof runwayHeading === 'number' ? runwayHeading : 0} 
               windDirection={typeof windDirection === 'number' ? windDirection : 0} 
               showGust={!!results?.crosswindGust} 
             />
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-end">
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-mono mb-1">Status</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-slate-300 font-medium">Calculation Synchronized</span>
              </div>
            </div>
            <div className="text-right">
               <span className="text-[10px] text-slate-400 font-mono">VECTOR ANALYSIS V.3.1</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function InputGroup({ label, value, onChange, unit, icon, min, max }: {
  label: string;
  value: number | '';
  onChange: (val: number | '') => void;
  unit: string;
  icon: React.ReactNode;
  min?: number;
  max?: number;
}) {
  const [localValue, setLocalValue] = useState<string>(value.toString());
  const [isTextInputFocused, setIsTextInputFocused] = useState(false);

  useEffect(() => {
    if (value === '') {
      if (localValue !== '') setLocalValue('');
    } else if (parseInt(localValue, 10) !== value) {
      setLocalValue(value.toString());
    }
  }, [value, localValue]);

  const id = label.replace(/\s+/g, '-').toLowerCase();
  return (
    <div className="space-y-2 group">
      <div className="flex justify-between items-center px-1">
        <label htmlFor={id} className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2 group-focus-within:text-cyan-400 transition-colors">
          {icon}
          {label}
        </label>
        <span className="text-[10px] font-mono text-slate-400">{unit}</span>
      </div>
      <div className="flex items-center gap-3">
        <input 
          type="range"
          aria-label={`${label} range`}
          min={min}
          max={max}
          value={value === '' ? (min || 0) : value}
          onChange={(e) => {
            if (isTextInputFocused) return;
            const val = parseInt(e.target.value, 10);
            if (!isNaN(val)) {
              onChange(val);
            }
          }}
          className="flex-grow h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
        />
        <input 
          id={id}
          type="number"
          value={localValue}
          onFocus={() => setIsTextInputFocused(true)}
          onChange={(e) => {
            setLocalValue(e.target.value);
            if (e.target.value === '') {
              onChange('');
            } else {
              const parsed = parseInt(e.target.value, 10);
              if (!isNaN(parsed)) onChange(parsed);
            }
          }}
          onBlur={() => {
            setIsTextInputFocused(false);
            if (localValue !== '') {
              let parsed = parseInt(localValue, 10);
              if (!isNaN(parsed)) {
                if (min !== undefined) parsed = Math.max(min, parsed);
                if (max !== undefined) parsed = Math.min(max, parsed);
                onChange(parsed);
                setLocalValue(parsed.toString());
              } else {
                onChange('');
                setLocalValue('');
              }
            }
          }}
          className="w-20 bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm font-mono text-white focus:outline-none focus:border-cyan-400/50 transition-all shadow-inner"
        />
      </div>
    </div>
  );
}

function ResultBox({ label, value, unit, subValue, warning, size = "large" }: {
  label: string;
  value: number;
  unit: string;
  subValue?: string;
  warning?: boolean;
  size?: "large" | "small";
}) {
  return (
    <div className={`bg-white/5 rounded-xl border border-white/5 group hover:border-cyan-400/20 transition-all duration-500 ${size === 'small' ? 'p-3 md:p-4' : 'p-5'}`}>
      <p className={`font-semibold text-slate-400 uppercase tracking-widest mb-1 ${size === 'small' ? 'text-[10px]' : 'text-xs'}`}>{label}</p>
      <div className="flex items-baseline gap-2">
        <span className={`font-bold font-mono tracking-tighter ${warning ? 'text-red-400' : 'text-white group-hover:text-cyan-400'} transition-colors ${size === 'small' ? 'text-xl md:text-2xl' : 'text-2xl md:text-4xl'}`}>
          {value}
        </span>
        <span className={`font-mono text-slate-400 ${size === 'small' ? 'text-[10px]' : 'text-xs'}`}>{unit}</span>
      </div>
      {subValue && (
        <p className="text-[10px] text-slate-400 mt-1 uppercase font-mono">{subValue}</p>
      )}
    </div>
  );
}
