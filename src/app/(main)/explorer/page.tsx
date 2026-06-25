"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, TrendingUp, Building2, Code, Zap, Briefcase, Settings, FileText } from "lucide-react";
import Link from "next/link";

const roles = [
  {
    id: 1,
    title: "Software Engineer",
    category: "เทคโนโลยี",
    icon: Code,
    match: 95,
    salary: "฿35k - ฿60k",
    demand: "สูงมาก",
    skills: ["React", "Node.js", "Python", "SQL"],
    description: "พัฒนาและดูแลรักษาระบบซอฟต์แวร์ทั้ง Front-end และ Back-end รวมถึงการออกแบบสถาปัตยกรรมระบบ"
  },
  {
    id: 2,
    title: "Civil Engineer",
    category: "วิศวกรรม",
    icon: Building2,
    match: 85,
    salary: "฿25k - ฿45k",
    demand: "สูง",
    skills: ["AutoCAD", "Structural Design", "Concrete", "Project Planning"],
    description: "ออกแบบ ควบคุมงานก่อสร้าง และวางแผนโครงสร้างพื้นฐาน อาคาร สะพาน และระบบสาธารณูปโภค"
  },
  {
    id: 3,
    title: "Mechanical Engineer",
    category: "วิศวกรรม",
    icon: Settings,
    match: 80,
    salary: "฿28k - ฿50k",
    demand: "สูง",
    skills: ["SolidWorks", "Thermodynamics", "CAD/CAM", "Maintenance"],
    description: "ออกแบบ วิเคราะห์ ควบคุมระบบการผลิต และดูแลรักษาเครื่องจักรกลรวมถึงระบบทางกลต่างๆ"
  },
  {
    id: 4,
    title: "Data Engineer",
    category: "ข้อมูล",
    icon: TrendingUp,
    match: 82,
    salary: "฿40k - ฿70k",
    demand: "สูงมาก",
    skills: ["Python", "SQL", "Spark", "Cloud"],
    description: "ออกแบบและสร้างโครงสร้างพื้นฐานสำหรับจัดเก็บ รวบรวม และประมวลผลข้อมูลขนาดใหญ่สำหรับองค์กร"
  },
  {
    id: 5,
    title: "Electrical Control Engineer",
    category: "วิศวกรรม",
    icon: Zap,
    match: 75,
    salary: "฿30k - ฿50k",
    demand: "สูง",
    skills: ["PLC", "AutoCAD", "Circuit Design", "Automation"],
    description: "ออกแบบและควบคุมระบบไฟฟ้า ระบบเครื่องมือวัด และระบบอัตโนมัติในกระบวนการผลิตอุตสาหกรรม"
  },
  {
    id: 6,
    title: "Industrial Engineer",
    category: "การจัดการ",
    icon: Briefcase,
    match: 70,
    salary: "฿26k - ฿48k",
    demand: "สูง",
    skills: ["Lean Six Sigma", "Operations Research", "Quality Control", "Supply Chain"],
    description: "ปรับปรุงและเพิ่มประสิทธิภาพกระบวนการทำงานในโรงงานเพื่อลดต้นทุนและเพิ่มประสิทธิภาพสูงสุด"
  },
  {
    id: 7,
    title: "Chemical Process Engineer",
    category: "วิศวกรรม",
    icon: Settings,
    match: 65,
    salary: "฿35k - ฿60k",
    demand: "ปานกลาง",
    skills: ["Process Design", "Aspen HYSYS", "Safety Regulations", "Chemistry"],
    description: "ควบคุมและพัฒนากระบวนการผลิตทางเคมี พลังงาน ปิโตรเคมี และวางแผนความปลอดภัยในกระบวนการ"
  },
  {
    id: 8,
    title: "Environmental Engineer",
    category: "วิศวกรรม",
    icon: Building2,
    match: 60,
    salary: "฿24k - ฿42k",
    demand: "ปานกลาง",
    skills: ["Water Treatment", "Environmental Auditing", "Waste Management", "GIS"],
    description: "ออกแบบและควบคุมระบบบำบัดน้ำเสีย การจัดการมลพิษทางอากาศ และระบบรีไซเคิลของเสีย"
  },
  {
    id: 9,
    title: "Aerospace Engineer",
    category: "วิศวกรรม",
    icon: Settings,
    match: 55,
    salary: "฿35k - ฿70k",
    demand: "ปานกลาง",
    skills: ["Aerodynamics", "Propulsion", "CAD", "Aircraft Maintenance"],
    description: "วิเคราะห์ ออกแบบ และบำรุงรักษาโครงสร้าง อากาศยาน ชิ้นส่วนเครื่องบิน และระบบดาวเทียม"
  }
];

export default function ExplorerPage() {
  const [activeFilter, setActiveFilter] = useState("ทั้งหมด");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRoles = roles.filter(role => {
    const matchesFilter = activeFilter === "ทั้งหมด" || role.category === activeFilter;
    const matchesSearch = role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          role.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          role.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const categories = ["ทั้งหมด", "เทคโนโลยี", "ข้อมูล", "วิศวกรรม", "ที่ปรึกษา", "การจัดการ"];

  return (
    <div className="flex flex-col gap-6 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">สำรวจสายอาชีพ</h1>
          <p className="text-slate-500 mt-2">ค้นหาข้อมูลเส้นทางอาชีพ เงินเดือน และทักษะที่ตลาดต้องการ</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <Input 
            placeholder="ค้นหาชื่อตำแหน่ง, สายงาน, หรือทักษะ..." 
            className="pl-10 h-12 bg-white" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((filter) => (
          <Badge 
            key={filter} 
            variant={filter === activeFilter ? "default" : "outline"} 
            className={`px-4 py-2 cursor-pointer whitespace-nowrap text-sm ${filter === activeFilter ? "bg-slate-900 text-white" : "bg-white hover:bg-slate-50 text-slate-600"}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Badge>
        ))}
      </div>

      {/* Role Cards */}
      <div className="grid gap-5 md:grid-cols-2">
        {filteredRoles.map((role) => (
          <Card key={role.id} className="shadow-sm border-slate-200 hover:border-green-300 transition-colors cursor-pointer group flex flex-col h-full bg-white">
            <CardContent className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                    <role.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-green-600 transition-colors">{role.title}</h3>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{role.category}</span>
                  </div>
                </div>
                {role.match >= 80 && (
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-none text-xs px-2.5 py-1">
                    เข้ากับคุณ {role.match}%
                  </Badge>
                )}
                {role.match < 80 && role.match >= 60 && (
                  <Badge variant="secondary" className="bg-amber-50 text-amber-700 hover:bg-amber-50 text-xs px-2.5 py-1 border-none">
                    เข้ากับคุณ {role.match}%
                  </Badge>
                )}
              </div>

              <p className="text-slate-500 text-sm mb-4 leading-relaxed flex-1">{role.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-slate-50/50 rounded-xl border border-slate-100/50">
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase tracking-wider mb-1">ช่วงเงินเดือน (เริ่มต้น)</span>
                  <span className="font-bold text-slate-800">{role.salary}</span>
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase tracking-wider mb-1">ความต้องการในตลาด</span>
                  <span className="font-bold text-slate-800">{role.demand}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <span className="block text-xs font-semibold text-slate-400 mb-2">ทักษะสำคัญ:</span>
                <div className="flex flex-wrap gap-1.5">
                  {role.skills.map(skill => (
                    <Badge key={skill} variant="outline" className="text-xs bg-white text-slate-500 border-slate-100">{skill}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
