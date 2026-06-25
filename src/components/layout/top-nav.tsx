"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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

  return (
    <div className="w-full flex justify-center sticky top-6 z-50 px-4">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl bg-white rounded-full shadow-sm border border-slate-100 px-8 py-4 flex items-center justify-between"
      >
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
          <Link href="/profile" className="rounded-full w-10 h-10 overflow-hidden border-2 border-slate-200 cursor-pointer hover:border-green-500 transition-colors">
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
          </Link>
        </div>
      </motion.nav>
    </div>
  );
}
