"use client";

import { useState, useEffect } from "react";
import { Thermometer, Mountain, Gauge } from "lucide-react";
import Card from "@/components/Card";
import { calculateDensityAltitude } from "@/lib/aviation-math";

export default function DensityAltitudeContent() {
  const [elevation, setElevation] = useState(0);
  const [altimeter, setAltimeter] = useState(29.92);
  const [temperature, setTemperature] = useState(15);
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    const res = calculateDensityAltitude(elevation, altimeter, temperature);
    setResults(res);
  }, [elevation, altimeter, temperature]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Inputs */}
      <div className="lg:col-span-5 space-y-6">
        <Card>
          <div className="space-y-6">
            <InputGroup
              label="Elevation"
              icon={<Mountain className="w-4 h-4" />}
              value={elevation}
              onChange={setElevation}
              unit="FT"
            />
            <InputGroup
              label="Altimeter Setting"
              icon={<Gauge className="w-4 h-4" />}
              value={altimeter}
              onChange={setAltimeter}
              unit="IN HG"
              step={0.01}
            />
            <InputGroup
              label="Outside Temperature"
              icon={<Thermometer className="w-4 h-4" />}
              value={temperature}
              onChange={setTemperature}
              unit="°C"
            />
          </div>
        </Card>
      </div>

      {/* Results */}
      <div className="lg:col-span-7">
        <Card className="h-full flex flex-col justify-center text-center p-12">
          <p className="text-slate-400 uppercase tracking-widest text-sm mb-4">Calculated DA</p>
          <div className="text-7xl md:text-9xl font-bold text-white font-mono tracking-tighter mb-4">
            {results?.densityAltitude}
          </div>
          <p className="text-2xl text-cyan-400 font-mono">FEET MSL</p>
          
          <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/5 pt-12">
            <div className="text-left">
              <p className="text-xs text-slate-500 uppercase mb-1">Pressure Alt</p>
              <p className="text-xl font-mono text-slate-300">{results?.pressureAltitude} FT</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500 uppercase mb-1">ISA Deviation</p>
              <p className={`text-xl font-mono ${results?.isaDev > 0 ? 'text-red-400' : 'text-cyan-400'}`}>
                {results?.isaDev > 0 ? '+' : ''}{results?.isaDev}°C
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function InputGroup({ label, value, onChange, unit, icon, step = 1 }: any) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
        {icon}
        {label}
      </label>
      <div className="relative group">
        <input 
          type="number"
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-lg font-mono text-white focus:outline-none focus:border-cyan-400 transition-all shadow-inner"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-500 uppercase">
          {unit}
        </span>
      </div>
    </div>
  );
}
