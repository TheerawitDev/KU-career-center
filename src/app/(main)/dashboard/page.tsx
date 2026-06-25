"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, ChevronRight, Trophy, BookOpen, Briefcase, Compass, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 mt-4 pb-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[36px] md:text-[42px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-500 leading-tight tracking-tight mb-2">
            ภาพรวมของคุณ
          </h1>
          <p className="text-[17px] text-slate-500 max-w-lg">
            ยินดีต้อนรับกลับมา, <span className="font-semibold text-slate-700">นนทนันท์</span>! พร้อมที่จะพัฒนาเส้นทางอาชีพของคุณแล้วหรือยัง?
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        {/* Profile Strength */}
        <Card className="col-span-12 lg:col-span-4 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-gradient-to-br from-white to-green-50/30 overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
          <CardHeader className="pb-2 relative z-10">
            <CardTitle className="text-xl flex items-center gap-2">
              <div className="p-2.5 bg-amber-100/80 rounded-xl">
                <Trophy className="w-5 h-5 text-amber-600" />
              </div>
              ความสมบูรณ์ของโปรไฟล์
            </CardTitle>
            <CardDescription className="text-sm mt-1">ระดับ: ผู้เริ่มต้น (Beginner)</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="flex items-center justify-between mt-4 mb-2">
              <span className="text-3xl font-bold text-slate-800">35<span className="text-lg text-slate-400 font-medium">%</span></span>
              <span className="text-xs font-medium text-green-600 bg-green-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" /> +5% สัปดาห์นี้
              </span>
            </div>
            <Progress value={35} className="h-2.5 mb-6 bg-slate-100 [&>div]:bg-gradient-to-r [&>div]:from-green-400 [&>div]:to-green-600" />
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span>เพิ่มทักษะที่ถนัด (+15%)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-600">
                <div className="w-4 h-4 rounded-full border-2 border-slate-200 mt-0.5 shrink-0"></div>
                <span>เพิ่มประวัติการศึกษา (+20%)</span>
              </li>
            </ul>

            <Link href="/profile" className={cn(buttonVariants({ variant: "default" }), "w-full bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-lg transition-all")}>
              อัปเดตโปรไฟล์ <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card className="col-span-12 lg:col-span-8 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl">กิจกรรมที่แนะนำสำหรับคุณ</CardTitle>
            <CardDescription className="text-base">เริ่มต้นเส้นทางอาชีพของคุณด้วยขั้นตอนเหล่านี้</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Link href="/assessment">
              <div className="flex flex-col justify-between p-6 rounded-2xl border border-slate-100 bg-white hover:border-green-300 hover:shadow-[0_8px_30px_rgb(22,163,74,0.12)] transition-all duration-300 group cursor-pointer h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-2xl group-hover:bg-green-500/10 transition-colors"></div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-green-700 transition-colors">ทำแบบประเมินทักษะ</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">ค้นหาสายงานวิศวกรรมที่เหมาะสมกับตัวคุณ และดูว่าคุณเหมาะกับสายงานไหนมากที่สุด</p>
                </div>
                <div className="mt-6 flex items-center text-sm font-semibold text-green-600 group-hover:text-green-700">
                  เริ่มทำประเมิน <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link href="/explorer">
              <div className="flex flex-col justify-between p-6 rounded-2xl border border-slate-100 bg-white hover:border-indigo-300 hover:shadow-[0_8px_30px_rgb(99,102,241,0.12)] transition-all duration-300 group cursor-pointer h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors"></div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors">สำรวจสายอาชีพ</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">เรียนรู้เกี่ยวกับเงินเดือน ทักษะที่ต้องการในตลาด และโอกาสเติบโตในแต่ละสายอาชีพ</p>
                </div>
                <div className="mt-6 flex items-center text-sm font-semibold text-indigo-600 group-hover:text-indigo-700">
                  ดูสายอาชีพ <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">กิจกรรมที่กำลังจะมาถึง</h2>
          <Link href="/events" className="text-sm font-medium text-green-600 hover:text-green-700 flex items-center">
            ดูทั้งหมด <ChevronRight className="w-4 h-4 ml-0.5" />
          </Link>
        </div>
        
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Tech Company Resume Clinic", date: "28 มิ.ย. 2026", time: "13:00 - 15:00", type: "Workshop", color: "bg-blue-500", lightColor: "bg-blue-50 text-blue-700" },
            { title: "Alumni Talk: ชีวิตวิศวกรซอฟต์แวร์ที่ Google", date: "2 ก.ค. 2026", time: "18:00 - 19:30", type: "Seminar", color: "bg-amber-500", lightColor: "bg-amber-50 text-amber-700" },
            { title: "KU Engineering Career Fair 2026", date: "15 ก.ค. 2026", time: "09:00 - 16:00", type: "Job Fair", color: "bg-green-500", lightColor: "bg-green-50 text-green-700" }
          ].map((event, i) => (
            <Card key={i} className="border-none shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 overflow-hidden relative group">
              <div className={`absolute top-0 left-0 w-1.5 h-full ${event.color}`}></div>
              <CardHeader className="pb-3 pl-6">
                <div className="flex justify-between items-start mb-3">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${event.lightColor}`}>
                    {event.type}
                  </span>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-green-600 transition-colors line-clamp-2">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="pl-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 font-medium">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>{event.date} • {event.time}</span>
                </div>
                <Button variant="outline" className="w-full border-slate-200 hover:bg-slate-50 hover:text-slate-900 font-medium">
                  ลงทะเบียนเข้าร่วม
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
