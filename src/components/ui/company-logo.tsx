"use client";

import React from "react";

export function CompanyLogo({ logoKey, className }: { logoKey: string; className?: string }) {
  switch (logoKey) {
    case "AG": // Agoda
      return (
        <div className={`w-12 h-12 rounded-xl bg-white border border-slate-200 flex flex-col items-center justify-center p-1 shadow-sm shrink-0 ${className}`}>
          <div className="flex items-center gap-0.5 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="w-2 h-2 rounded-full bg-sky-500"></span>
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
          </div>
          <span className="text-[10px] font-black text-slate-800 tracking-tight leading-none">agoda</span>
        </div>
      );

    case "LMW": // LINE MAN Wongnai
      return (
        <div className={`w-12 h-12 rounded-xl bg-[#00C73C] flex flex-col items-center justify-center text-white shadow-sm shrink-0 ${className}`}>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M19.34 10.34c0-3.9-3.9-7.07-8.7-7.07S1.94 6.44 1.94 10.34c0 3.5 3.1 6.43 7.3 6.96.28.06.67.19.77.43.09.22.06.56.03.78l-.13.82c-.04.25-.19.98.86.53 1.05-.44 5.67-3.34 7.73-5.72 1.34-1.4 1.84-2.73 1.84-3.8zM8.3 12.3H6.4v-3.9h1.9v3.9zm3.5 0h-1.9v-3.9h1.9v3.9zm3.6 0h-1.9v-3.9h1.9v3.9z"/>
          </svg>
          <span className="text-[8px] font-black tracking-tighter uppercase mt-0.5">LINE MAN</span>
        </div>
      );

    case "KBTG": // KBTG
      return (
        <div className={`w-12 h-12 rounded-xl bg-[#006037] flex flex-col items-center justify-center text-white p-1 shadow-sm shrink-0 ${className}`}>
          <span className="text-xs font-black tracking-wider text-amber-400">KBTG</span>
          <span className="text-[7px] font-bold text-slate-200 tracking-tighter uppercase mt-0.5">KASIKORN</span>
        </div>
      );

    case "SP": // Shopee
      return (
        <div className={`w-12 h-12 rounded-xl bg-[#EE4D2D] flex flex-col items-center justify-center text-white p-1 shadow-sm shrink-0 ${className}`}>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 6h-3c0-2.21-1.79-4-4-4S8 3.79 8 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
          </svg>
          <span className="text-[9px] font-extrabold tracking-tight">Shopee</span>
        </div>
      );

    case "SCB": // SCB 10X
      return (
        <div className={`w-12 h-12 rounded-xl bg-[#4E2A84] flex flex-col items-center justify-center text-white p-1 shadow-sm shrink-0 ${className}`}>
          <span className="text-xs font-black text-amber-400">SCB</span>
          <span className="text-[9px] font-black text-white tracking-widest">10X</span>
        </div>
      );

    case "GED": // Gulf Energy
      return (
        <div className={`w-12 h-12 rounded-xl bg-[#00529C] flex flex-col items-center justify-center text-white p-1 shadow-sm shrink-0 ${className}`}>
          <svg className="w-5 h-5 text-cyan-400 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-[9px] font-black tracking-wider uppercase">GULF</span>
        </div>
      );

    case "BM": // Benchmark Electronics
      return (
        <div className={`w-12 h-12 rounded-xl bg-[#1E293B] flex flex-col items-center justify-center text-white p-1 shadow-sm shrink-0 ${className}`}>
          <span className="text-sm font-black text-sky-400 tracking-tighter">B</span>
          <span className="text-[7px] font-bold text-slate-300 tracking-widest uppercase">BENCHMARK</span>
        </div>
      );

    case "TMT": // Toyota
      return (
        <div className={`w-12 h-12 rounded-xl bg-[#EB0A1E] flex flex-col items-center justify-center text-white p-1 shadow-sm shrink-0 ${className}`}>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c0-1.66 2.24-3 5-3s5 1.34 5 3-2.24 3-5 3-5-1.34-5-3z"/>
          </svg>
          <span className="text-[8px] font-black tracking-wider uppercase">TOYOTA</span>
        </div>
      );

    case "KUKA": // KUKA Robotics
      return (
        <div className={`w-12 h-12 rounded-xl bg-[#FF6600] flex flex-col items-center justify-center text-white p-1 shadow-sm shrink-0 ${className}`}>
          <span className="text-sm font-black tracking-widest">KUKA</span>
          <span className="text-[7px] font-bold text-orange-100 tracking-tighter uppercase">ROBOTICS</span>
        </div>
      );

    case "CK": // Ch. Karnchang
      return (
        <div className={`w-12 h-12 rounded-xl bg-[#0F172A] flex flex-col items-center justify-center text-white p-1 shadow-sm border border-slate-700 ${className}`}>
          <span className="text-base font-black text-amber-500 tracking-tighter">CK</span>
          <span className="text-[7px] font-bold text-slate-300 tracking-tighter uppercase">ช.การช่าง</span>
        </div>
      );

    case "CP": // CP ALL
      return (
        <div className={`w-12 h-12 rounded-xl bg-[#008542] flex flex-col items-center justify-center text-white p-1 shadow-sm ${className}`}>
          <span className="text-xs font-black text-red-500 bg-white px-1.5 py-0.5 rounded shadow-xs">CP ALL</span>
        </div>
      );

    case "GC": // PTT GC
      return (
        <div className={`w-12 h-12 rounded-xl bg-[#004B87] flex flex-col items-center justify-center text-white p-1 shadow-sm ${className}`}>
          <span className="text-sm font-black text-cyan-400">gc</span>
          <span className="text-[7px] font-bold text-slate-200 tracking-wider uppercase">PTT GC</span>
        </div>
      );

    default:
      return (
        <div className={`w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold text-xs ${className}`}>
          {logoKey}
        </div>
      );
  }
}
