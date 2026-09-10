"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  ChevronRight,
  Trophy,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-6 pb-16 max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
            ภาพรวมระบบสำหรับนิสิต
          </h1>
          <p className="text-slate-500 mt-1 text-sm">
            ยินดีต้อนรับกลับมา <strong className="text-slate-800 font-semibold">นนทนันท์</strong> • นิสิตวิศวกรรมคอมพิวเตอร์ ชั้นปีที่ 3
          </p>
        </div>

        <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200 text-xs px-3 py-1 font-semibold self-start md:self-auto">
          ภาคเรียนที่ 1 / 2569 • มหาวิทยาลัยเกษตรศาสตร์
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        {/* Profile Readiness Card */}
        <Card className="col-span-12 lg:col-span-4 border border-slate-200 shadow-sm bg-white rounded-xl overflow-hidden flex flex-col justify-between">
          <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/60">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-green-600" />
                ความสมบูรณ์ของโปรไฟล์
              </CardTitle>
              <Badge className="bg-green-100 text-green-800 border-none text-[11px] font-semibold">
                พร้อมสมัครงาน 75%
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500 font-semibold">ระดับความพร้อมเตรียมตัวฝึกงาน</span>
                <span className="text-xs font-bold text-slate-900">75%</span>
              </div>
              <Progress value={75} className="h-2 bg-slate-100 [&>div]:bg-green-600 mb-6" />

              <div className="space-y-2.5 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>ทำแบบประเมินทักษะสมรรถนะสำเร็จ</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>กรอกข้อมูลประวัติการศึกษาครบถ้วน</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <div className="w-4 h-4 rounded-full border-2 border-slate-300 shrink-0"></div>
                  <span>อัปโหลดเรซูเม่ (Resume PDF)</span>
                </div>
              </div>
            </div>

            <Link href="/profile" className={cn(buttonVariants({ variant: "default" }), "w-full bg-slate-900 hover:bg-slate-800 text-white font-bold shadow-sm text-xs h-10 rounded-lg")}>
              อัปเดตข้อมูลโปรไฟล์ <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </CardContent>
        </Card>

        {/* Recommended Services Navigation Grid */}
        <Card className="col-span-12 lg:col-span-8 border border-slate-200 shadow-sm bg-white rounded-xl">
          <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/60">
            <CardTitle className="text-sm font-bold text-slate-900">
              บริการและเครื่องมือพัฒนาสายอาชีพ
            </CardTitle>
            <CardDescription className="text-xs text-slate-500">
              เครื่องมือเตรียมความพร้อมฝึกงาน สหกิจศึกษา และเส้นทางอาชีพ
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/assessment">
              <div className="p-5 rounded-xl border border-slate-200 bg-white hover:border-green-500 hover:shadow-sm transition-all group cursor-pointer h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                      แบบประเมินสมรรถนะ
                    </h3>
                    <Badge variant="outline" className="text-[10px] bg-slate-50 text-slate-600 border-slate-200">
                      5 หมวดวิศวกรรม
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    ประเมินความถนัดเชิงลึกเพื่อค้นหาสายงานและตำแหน่งฝึกงานที่เหมาะสม
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-semibold text-green-600 group-hover:translate-x-0.5 transition-transform">
                  เริ่มทำแบบประเมิน <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </div>
              </div>
            </Link>

            <Link href="/explorer">
              <div className="p-5 rounded-xl border border-slate-200 bg-white hover:border-green-500 hover:shadow-sm transition-all group cursor-pointer h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                      สำรวจสายอาชีพ
                    </h3>
                    <Badge variant="outline" className="text-[10px] bg-slate-50 text-slate-600 border-slate-200">
                      100 ตำแหน่งงาน
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    ค้นหาข้อมูลเงินเดือนแรกบรรจุ ทักษะที่ต้องการ และบริษัทชั้นนำ
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-semibold text-green-600 group-hover:translate-x-0.5 transition-transform">
                  สำรวจสายอาชีพทั้งหมด <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </div>
              </div>
            </Link>

            <Link href="/internships">
              <div className="p-5 rounded-xl border border-slate-200 bg-white hover:border-green-500 hover:shadow-sm transition-all group cursor-pointer h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                      ค้นหาที่ฝึกงาน & สหกิจ
                    </h3>
                    <Badge variant="outline" className="text-[10px] bg-slate-50 text-slate-600 border-slate-200">
                      ตำแหน่งงานอัปเดต
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    ค้นหาและสมัครตำแหน่งฝึกงานภาคฤดูร้อนและสหกิจศึกษาโดยตรง
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-semibold text-green-600 group-hover:translate-x-0.5 transition-transform">
                  ค้นหาตำแหน่งฝึกงาน <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </div>
              </div>
            </Link>

            <Link href="/network">
              <div className="p-5 rounded-xl border border-slate-200 bg-white hover:border-green-500 hover:shadow-sm transition-all group cursor-pointer h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                      เครือข่ายศิษย์เก่า KU
                    </h3>
                    <Badge variant="outline" className="text-[10px] bg-slate-50 text-slate-600 border-slate-200">
                      Alumni Mentors
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    เชื่อมต่อขอคำแนะนำการเตรียมตัวฝึกงานจากพี่ๆ ศิษย์เก่าวิศวกร
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-semibold text-green-600 group-hover:translate-x-0.5 transition-transform">
                  ดูเครือข่ายศิษย์เก่า <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </div>
              </div>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">กิจกรรมเตรียมความพร้อมสายอาชีพ</h2>
            <p className="text-xs text-slate-500 mt-0.5">งานเวิร์กช็อป สัมมนา และ KU Engineering Career Fair</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Tech Resume & Portfolio Clinic", date: "28 มิ.ย. 2026", time: "13:00 - 15:00", type: "Workshop" },
            { title: "Alumni Talk: เส้นทางวิศวกรซอฟต์แวร์ที่ Google", date: "2 ก.ค. 2026", time: "18:00 - 19:30", type: "Seminar" },
            { title: "KU Engineering Career Fair 2026", date: "15 ก.ค. 2026", time: "09:00 - 16:00", type: "Job Fair" }
          ].map((event, i) => (
            <Card key={i} className="border border-slate-200 shadow-sm bg-white hover:border-slate-300 transition-all rounded-xl">
              <CardContent className="p-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700 text-[10px] font-semibold border border-slate-200">
                      {event.type}
                    </Badge>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug mb-2">{event.title}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-4">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full border-slate-200 text-slate-700 font-semibold text-xs h-9 hover:bg-slate-50">
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
