
"use client";

import { useState, useEffect } from "react";
import { Thermometer, Mountain, Gauge, AlertTriangle } from "lucide-react";
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

  // Performance penalty estimation (rough rule of thumb for GA aircraft)
  // Distance increases approx 10% per 1000ft DA above sea level
  const daVal = results?.densityAltitude || 0;
  const penaltyFactor = Math.max(0, (daVal / 1000) * 10); // % increase
  const isHighRisk = daVal > 5000;
  const isExtremeRisk = daVal > 8000;

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

        {(isHighRisk || isExtremeRisk) && (
          <div className={`p-6 rounded-2xl border ${isExtremeRisk ? 'bg-red-500/10 border-red-500/30' : 'bg-amber-500/10 border-amber-500/30'} flex gap-4 items-start`}>
            <AlertTriangle className={`w-6 h-6 flex-shrink-0 ${isExtremeRisk ? 'text-red-400' : 'text-amber-400'}`} />
            <div>
              <h4 className={`font-bold mb-1 ${isExtremeRisk ? 'text-red-400' : 'text-amber-400'}`}>
                {isExtremeRisk ? 'Extreme Density Altitude' : 'High Density Altitude'}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Critical reduction in aircraft performance detected. Expect significantly longer takeoff rolls and reduced climb rates.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="lg:col-span-7">
        <Card className="h-full flex flex-col justify-center text-center p-8 md:p-12 relative overflow-hidden">
          {/* Background Gradient for Warning */}
          <div className={`absolute inset-0 opacity-10 transition-colors duration-1000 ${isExtremeRisk ? 'bg-red-500' : isHighRisk ? 'bg-amber-500' : 'bg-cyan-500'}`} />
          
          <p className="text-slate-400 uppercase tracking-widest text-sm mb-4 relative z-10">Calculated DA</p>
          <div className={`text-7xl md:text-9xl font-bold font-mono tracking-tighter mb-4 relative z-10 transition-colors duration-1000 ${isExtremeRisk ? 'text-red-400' : isHighRisk ? 'text-amber-400' : 'text-white'}`}>
            {results?.densityAltitude}
          </div>
          <p className="text-2xl text-slate-400 font-mono relative z-10">FEET MSL</p>
          
          <div className="mt-12 space-y-6 relative z-10">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono uppercase tracking-wider">
                <span className="text-slate-500">Est. Takeoff Distance Penalty</span>
                <span className={penaltyFactor > 50 ? 'text-red-400' : penaltyFactor > 25 ? 'text-amber-400' : 'text-cyan-400'}>
                  +{penaltyFactor.toFixed(0)}%
                </span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div 
                  className={`h-full transition-all duration-1000 ${isExtremeRisk ? 'bg-red-400' : isHighRisk ? 'bg-amber-400' : 'bg-cyan-400'}`}
                  style={{ width: `${Math.min(100, (daVal / 12000) * 100)}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
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
