
"use client";

import { useState } from "react";
import Card from "@/components/Card";
import Link from "next/link";
import { aircraftDatabase } from "@/lib/aircraft-data";

export default function AircraftLimitsTable() {
  const [search, setSearch] = useState("");

  const filteredData = aircraftDatabase.filter(ac => 
    ac.type.toLowerCase().includes(search.toLowerCase()) || 
    ac.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="max-w-md mx-auto">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search by aircraft model or category..."
            className="block w-full pl-11 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <Card className="overflow-hidden p-0 border-white/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.03] border-b border-white/5">
                <th className="px-8 py-5 text-xs font-mono text-cyan-400 uppercase tracking-widest">Aircraft Type</th>
                <th className="px-8 py-5 text-xs font-mono text-cyan-400 uppercase tracking-widest">Max Demonstrated XW</th>
                <th className="px-8 py-5 text-xs font-mono text-cyan-400 uppercase tracking-widest">Category</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredData.length > 0 ? (
                filteredData.map((ac) => (
                  <tr key={ac.type} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-8 py-6 text-slate-300 font-medium group-hover:text-white transition-colors">
                      <Link href={`/aircraft-limits/${ac.slug}`} className="text-cyan-400 hover:underline">
                        {ac.type}
                      </Link>
                    </td>
                    <td className="px-8 py-6">
                      <span className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-mono border border-cyan-400/20">
                        {ac.limit}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-slate-500 text-sm italic">{ac.category}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-8 py-12 text-center text-slate-500 italic">
                    No aircraft matching "{search}" found in our database.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
