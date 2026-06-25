import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 max-w-md w-full animate-in fade-in slide-in-from-bottom-4">
        <div className="text-[80px] leading-none mb-4 filter drop-shadow-md">
          🦖
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">404 - ไม่พบหน้าเว็บ</h1>
        <p className="text-slate-500 mb-8">
          ดูเหมือนว่าหน้าที่คุณกำลังมองหาไม่มีอยู่ หรืออาจถูกย้ายไปแล้ว
        </p>
        <Link
          href="/dashboard"
          className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full rounded-full bg-[#16A34A] hover:bg-[#15803d]")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          กลับสู่หน้าแดชบอร์ด
        </Link>
      </div>
    </div>
  );
}
