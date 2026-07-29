"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { TopNav } from "@/components/layout/top-nav";
import { Building2, User } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();

  const handleStudentLogin = () => {
    router.push("/dashboard");
  };

  const handleClientPortal = () => {
    router.push("/client/talents");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden bg-[#f4f7fc] bg-grid-pattern pb-20">
      <TopNav />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center w-full px-4 mt-14 z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center max-w-3xl mb-4 flex flex-col items-center"
        >
          <h1 className="text-[40px] md:text-[46px] font-bold text-[#1a202c] leading-tight tracking-tight mb-2">
            KU Engineering Career Center
          </h1>
          <h2 className="text-[36px] md:text-[40px] font-bold text-[#1a202c] leading-tight tracking-tight mb-6">
            เป็นผู้นำ สร้างสรรค์ นำแรงบันดาลใจ
          </h2>
          <p className="text-[17px] text-slate-500 max-w-lg mx-auto leading-relaxed">
            ศูนย์รวมโอกาสทางอาชีพของนิสิตวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์
            <br />
            เชื่อมโยงนิสิตและสถานประกอบการชั้นนำด้วยเทคโนโลยี
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
            <button
              onClick={handleStudentLogin}
              className="px-8 py-3.5 bg-[#1a202c] text-white rounded-full font-medium shadow-md hover:bg-black transition-all flex items-center gap-2 text-sm"
            >
              <User className="w-4 h-4 text-green-400" />
              เข้าสู่ระบบด้วย KU SSO (สำหรับนิสิต)
            </button>

            <button
              onClick={handleClientPortal}
              className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-slate-900 text-white rounded-full font-bold shadow-md hover:from-indigo-700 hover:to-black transition-all flex items-center gap-2 text-sm border border-indigo-400/30"
            >
              <Building2 className="w-4 h-4 text-indigo-300" />
              สำหรับสถานประกอบการ (Client Portal)
            </button>
          </div>
        </motion.div>

        {/* Hero Image with Floating Icons */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative w-full max-w-[800px] mt-2"
        >
          <div className="bg-white p-3 md:p-4 rounded-[28px] shadow-sm border border-slate-100">
            <div className="w-full aspect-[4/3] md:aspect-[16/9] rounded-[20px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="Engineering Students"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Floating Stickers (Simulating the 3D icons from the theme) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-4 -left-6 md:-left-14 drop-shadow-xl"
          >
            <div className="text-6xl filter drop-shadow-md">🦖</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
            className="absolute -top-10 -right-6 md:-right-12 drop-shadow-xl"
          >
            <div className="text-6xl filter drop-shadow-md">✨</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-8 -left-6 md:-left-12 drop-shadow-xl"
          >
            <div className="text-6xl filter drop-shadow-md">🚀</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.5 }}
            className="absolute -bottom-8 -right-6 md:-right-12 drop-shadow-xl"
          >
            <div className="text-6xl filter drop-shadow-md">⚙️</div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
