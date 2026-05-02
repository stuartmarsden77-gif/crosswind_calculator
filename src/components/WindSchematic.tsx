"use client";

import { motion } from "framer-motion";

interface SchematicProps {
  runwayHeading: number;
  windDirection: number;
  showGust?: boolean;
}

export default function WindSchematic({ runwayHeading, windDirection, showGust }: SchematicProps) {
  // Relative wind angle for the schematic
  const relativeAngle = windDirection - runwayHeading;

  return (
    <div className="relative w-full aspect-square max-w-[300px] md:max-w-[400px] mx-auto flex items-center justify-center p-4 md:p-8">
      {/* Background Compass Ring */}
      <div className="absolute inset-0 border border-white/5 rounded-full" />
      <div className="absolute inset-4 border border-white/5 rounded-full border-dashed" />
      
      {/* Runway */}
      <motion.div 
        className="relative w-16 h-64 bg-slate-800 border-x border-white/10 flex flex-col items-center justify-between py-4"
        animate={{ rotate: 0 }} // Runway is always vertical in our relative schematic for better UX
      >
        <div className="w-1 h-8 bg-white/20 rounded-full" />
        <div className="w-1 h-8 bg-white/20 rounded-full" />
        <div className="w-1 h-8 bg-white/20 rounded-full" />
        <div className="font-mono text-[10px] text-slate-500 uppercase tracking-tighter">
          RWY {Math.round(runwayHeading / 10).toString().padStart(2, '0')}
        </div>
        <div className="w-1 h-8 bg-white/20 rounded-full" />
        <div className="w-1 h-8 bg-white/20 rounded-full" />
        <div className="w-1 h-8 bg-white/20 rounded-full" />
      </motion.div>

      {/* Wind Arrow */}
      <motion.div
        className="absolute w-1 h-48 origin-center flex flex-col items-center"
        animate={{ rotate: relativeAngle }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {/* Arrow Body */}
        <div className="relative flex flex-col items-center w-full">
          {showGust && (
            <div className="absolute bottom-full mb-1 w-1 h-8 border-l-2 border-dashed border-cyan-400/80 rounded-t-full animate-pulse" />
          )}
          <div className="w-1 h-24 bg-cyan-400 glow-cyan rounded-full" />
        </div>
        {/* Arrow Head */}
        <div className="w-4 h-4 -mt-1 border-t-4 border-l-4 border-cyan-400 rotate-45 rounded-sm" />
        
        {/* Wind Label */}
        <div className="mt-4 px-2 py-1 glass rounded-md text-[10px] font-mono text-cyan-400 uppercase">
          Wind Source
        </div>
      </motion.div>

      {/* Center Point */}
      <div className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
    </div>
  );
}
