"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, Eye, Lock, ChevronRight, CreditCard, Building2, UserCheck, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ClientDashboardPage() {
  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto pb-16">
      {/* Enterprise Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            <Building2 className="w-3.5 h-3.5 text-slate-700" />
            <span>Tech Innovation Co., Ltd.</span>
            <span>•</span>
            <span className="text-slate-600">Enterprise Recruiter Portal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            ภาพรวมการสรรหาบุคลากร (Recruitment Overview)
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/client/talents">
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white font-medium text-xs h-9 px-4 shadow-sm">
              <Users className="w-4 h-4 mr-2" /> ค้นหานิสิต Talent Pool
            </Button>
          </Link>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-sm border-slate-200 bg-white">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">เครดิตคงเหลือ</span>
              <div className="p-2 bg-green-50 rounded-lg text-green-700">
                <CreditCard className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-bold text-slate-900">10 <span className="text-xs font-normal text-slate-500">เครดิต</span></div>
              <p className="text-xs text-slate-500 mt-1">พร้อมใช้งานปลดล็อกโปรไฟล์</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200 bg-white">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">ปลดล็อกแล้ว</span>
              <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
                <UserCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-bold text-slate-900">2 <span className="text-xs font-normal text-slate-500">ท่าน</span></div>
              <p className="text-xs text-slate-500 mt-1">เข้าถึงข้อมูลติดต่อเรียบร้อย</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200 bg-white">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">ตำแหน่งงานที่ลงประกาศ</span>
              <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
                <Briefcase className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-bold text-slate-900">4 <span className="text-xs font-normal text-slate-500">ตำแหน่ง</span></div>
              <p className="text-xs text-slate-500 mt-1">ฝึกงาน & สหกิจศึกษา</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200 bg-white">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">เข้าดูโปรไฟล์เดือนนี้</span>
              <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
                <Eye className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-bold text-slate-900">128 <span className="text-xs font-normal text-slate-500">ครั้ง</span></div>
              <p className="text-xs text-green-600 mt-1 font-semibold flex items-center gap-0.5">
                <ArrowUpRight className="w-3 h-3" /> +24% จากเดือนที่แล้ว
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Structured Content Grid */}
      <div className="grid gap-6 md:grid-cols-12">
        <Card className="col-span-12 lg:col-span-8 shadow-sm border-slate-200 bg-white">
          <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <CardTitle className="text-base font-bold text-slate-900">แคนดิเดตแนะนำสำหรับตำแหน่งของคุณ</CardTitle>
              <CardDescription className="text-xs text-slate-500 mt-0.5">คัดสรรตามทักษะและผลการเรียนของนิสิตวิศวกรรมศาสตร์</CardDescription>
            </div>
            <Link href="/client/talents" className="text-xs font-semibold text-green-600 hover:text-green-700 flex items-center gap-1">
              ดูทั้งหมด <ChevronRight className="w-4 h-4" />
            </Link>
          </CardHeader>

          <CardContent className="p-6 space-y-3">
            {[
              {
                id: "ku-8492",
                codeName: "แคนดิเดต #KU-8492 (วิศวกรรมคอมพิวเตอร์)",
                major: "วิศวกรรมคอมพิวเตอร์ (CPE)",
                gpa: 3.82,
                skills: ["React", "TypeScript", "Node.js"],
                lookingFor: "สหกิจศึกษา"
              },
              {
                id: "ku-7321",
                codeName: "แคนดิเดต #KU-7321 (วิศวกรรมคอมพิวเตอร์)",
                major: "วิศวกรรมคอมพิวเตอร์ (CPE)",
                gpa: 3.91,
                skills: ["Python", "PyTorch", "Data Science"],
                lookingFor: "ฝึกงานฤดูร้อน"
              },
              {
                id: "ku-3910",
                codeName: "แคนดิเดต #KU-3910 (วิศวกรรมซอฟต์แวร์)",
                major: "วิศวกรรมซอฟต์แวร์ (SKE)",
                gpa: 3.89,
                skills: ["DevOps", "Docker", "Go"],
                lookingFor: "ฝึกงานฤดูร้อน"
              }
            ].map((candidate, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-slate-50/70 border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{candidate.codeName}</h4>
                    <p className="text-xs text-slate-500">{candidate.major} • GPA {candidate.gpa}</p>
                    <div className="flex gap-1 mt-1.5">
                      {candidate.skills.map(s => (
                        <span key={s} className="text-[10px] font-medium bg-white text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <Link href="/client/talents">
                    <Button size="sm" variant="outline" className="border-slate-200 text-slate-700 text-xs h-8">
                      ดูโปรไฟล์
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Clean Refactored Credit Widget */}
        <Card className="col-span-12 lg:col-span-4 shadow-sm border-slate-200 bg-white flex flex-col justify-between overflow-hidden">
          <CardHeader className="pb-3 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold text-slate-900">สถานะเครดิตการสรรหา</CardTitle>
              <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 font-semibold text-xs">
                พร้อมใช้งาน
              </Badge>
            </div>
            <CardDescription className="text-xs text-slate-500 mt-1">
              แพ็กเกจ: Enterprise Recruiter
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6 space-y-5 flex-1 flex flex-col justify-between">
            <div className="space-y-1.5">
              <span className="text-xs text-slate-500 font-medium block">เครดิตคงเหลือของคุณ</span>
              <div className="text-3xl font-bold text-slate-900">
                10 <span className="text-sm font-normal text-slate-500">เครดิต</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed pt-1">
                1 เครดิต = ปลดล็อกข้อมูลติดต่อตรงของนิสิต 1 ท่าน
              </p>
            </div>

            <Link href="/client/pricing" className="block w-full">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium text-xs h-10 shadow-sm">
                ซื้อเครดิตเพิ่ม
              </Button>
            </Link>

            <div className="pt-4 border-t border-slate-100 space-y-1 text-xs text-slate-500">
              <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                PDPA Protected
              </div>
              <p className="leading-relaxed text-[11px]">
                การปลดล็อกข้อมูลนิสิตได้รับการยินยอมตามข้อกำหนด ม.เกษตรศาสตร์
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
