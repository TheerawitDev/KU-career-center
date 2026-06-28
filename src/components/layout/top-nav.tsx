"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "แดชบอร์ด", href: "/dashboard" },
  { name: "ประเมินทักษะ", href: "/assessment" },
  { name: "สำรวจสายอาชีพ", href: "/explorer" },
  { name: "ที่ฝึกงาน", href: "/internships" },
  { name: "ศิษย์เก่า", href: "/network" },
  { name: "โปรไฟล์", href: "/profile" },
];

export function TopNav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-center sticky top-6 z-50 px-4">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl bg-white rounded-3xl shadow-sm border border-slate-100 px-6 py-4 flex flex-col items-center justify-between relative"
      >
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-bold text-slate-700 text-base md:text-lg">
              KU Career Center
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-base font-medium text-slate-500">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={cn(
                    "transition-colors",
                    isActive ? "text-green-600 font-bold" : "hover:text-green-600"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Link href="/profile" className="rounded-full w-10 h-10 overflow-hidden border-2 border-slate-200 cursor-pointer hover:border-green-500 transition-colors block">
                <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="w-full flex flex-col lg:hidden overflow-hidden mt-4 pt-4 border-t border-slate-100 gap-4"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "transition-colors px-2 py-1",
                      isActive ? "text-green-600 font-bold" : "text-slate-500 hover:text-green-600"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="px-2 py-2 border-t border-slate-100 mt-2">
                <Link 
                  href="/profile" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-slate-600 font-medium hover:text-green-600 transition-colors"
                >
                  <div className="rounded-full w-8 h-8 overflow-hidden border border-slate-200">
                    <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  โปรไฟล์ของฉัน
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
