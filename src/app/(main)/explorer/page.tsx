"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { careerRolesData, CareerRole } from "@/data/careers";
import { Search, ChevronRight } from "lucide-react";

export default function ExplorerPage() {
  const [activeFilter, setActiveFilter] = useState("ทั้งหมด");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRoleDetail, setSelectedRoleDetail] = useState<CareerRole | null>(null);

  const categories = [
    "ทั้งหมด",
    "คอมพิวเตอร์ & ซอฟต์แวร์",
    "ข้อมูล & ปัญญาประดิษฐ์",
    "คลาวด์ & ความมั่นคงปลอดภัย",
    "วิศวกรรมไฟฟ้า & พลังงาน",
    "อิเล็กทรอนิกส์ & เซมิคอนดักเตอร์",
    "หุ่นยนต์ & เมคคาทรอนิกส์",
    "เครื่องกล & การบิน",
    "ยานยนต์ & EV",
    "โยธา & โครงสร้าง",
    "อุตสาหการ & โลจิสติกส์",
    "เคมี & วัสดุ",
    "สิ่งแวดล้อม & ความปลอดภัย",
    "ชีวการแพทย์ & ชีวภาพ",
    "การเกษตร & อาหาร",
    "เหมืองแร่ & ปิโตรเลียม",
    "การบริหาร & ผลิตภัณฑ์"
  ];

  const filteredRoles = careerRolesData.filter((role) => {
    const matchesFilter = activeFilter === "ทั้งหมด" || role.category === activeFilter;
    const matchesSearch =
      role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
      role.topCompanies.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-6 pb-16 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">สำรวจสายอาชีพวิศวกรรม</h1>
          <p className="text-slate-500 mt-1">
            ฐานข้อมูลสายอาชีพวิศวกรรมในประเทศไทยและต่างประเทศ พร้อมช่วงเงินเดือนและทักษะที่ตลาดต้องการ
          </p>
        </div>

        <Badge variant="secondary" className="bg-green-50 text-green-700 font-semibold px-3.5 py-1.5 text-xs self-start md:self-auto border border-green-200">
          อัปเดตข้อมูล 100 ตำแหน่งงาน
        </Badge>
      </div>

      {/* Search Input */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            placeholder="ค้นหาตำแหน่งงานวิศวกร ทักษะสำคัญ หรือบริษัทชั้นนำ..."
            className="pl-10 h-11 bg-white border-slate-200 text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 pt-1 scrollbar-hide">
        {categories.map((filter) => (
          <Badge
            key={filter}
            variant={filter === activeFilter ? "default" : "outline"}
            className={`px-3.5 py-1.5 cursor-pointer whitespace-nowrap text-xs font-semibold rounded-lg transition-colors ${
              filter === activeFilter
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white hover:bg-slate-50 text-slate-600 border-slate-200"
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Badge>
        ))}
      </div>

      <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
        <span>พบบรรจุสายอาชีพตรงตามเงื่อนไข {filteredRoles.length} ตำแหน่ง</span>
        <span>อ้างอิงฐานข้อมูลเงินเดือนวิศวกรในประเทศไทย</span>
      </div>

      {/* Role Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredRoles.map((role) => (
          <Card
            key={role.id}
            className="shadow-sm border-slate-200 hover:border-green-300 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between bg-white rounded-xl overflow-hidden"
            onClick={() => setSelectedRoleDetail(role)}
          >
            <CardContent className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3 gap-2">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                      {role.category}
                    </span>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-green-600 transition-colors leading-snug">
                      {role.title}
                    </h3>
                  </div>

                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-none text-xs px-2.5 py-1 shrink-0 font-semibold">
                    ตรงกับทักษะ {role.match}%
                  </Badge>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-2">
                  {role.description}
                </p>

                {/* Salary & Demand Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                  <div>
                    <span className="block text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">
                      ฐานเงินเดือนแรกบรรจุ
                    </span>
                    <span className="font-bold text-slate-900 text-sm">{role.salary}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">
                      ความต้องการในตลาด
                    </span>
                    <span className="font-bold text-slate-900 text-sm">{role.demand}</span>
                  </div>
                </div>

                {/* Technical Skills */}
                <div className="space-y-1.5 mb-4">
                  <span className="block text-[11px] font-semibold text-slate-400">ทักษะสำคัญที่ต้องการ:</span>
                  <div className="flex flex-wrap gap-1">
                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Top Companies */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="truncate">
                  บริษัทชั้นนำที่เปิดรับ: <strong className="text-slate-700 font-semibold">{role.topCompanies.slice(0, 3).join(", ")}</strong>
                </span>
                <span className="text-green-600 font-semibold flex items-center shrink-0 ml-2 group-hover:translate-x-0.5 transition-transform">
                  ดูเส้นทางอาชีพ <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Role Detailed Dialog Modal */}
      <Dialog open={!!selectedRoleDetail} onOpenChange={(open) => !open && setSelectedRoleDetail(null)}>
        {selectedRoleDetail && (
          <DialogContent className="sm:max-w-2xl bg-white rounded-xl border border-slate-200 shadow-xl p-0 overflow-hidden">
            <div className="bg-slate-900 text-white p-6">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">
                    {selectedRoleDetail.category}
                  </span>
                  <DialogTitle className="text-xl font-bold text-white">
                    {selectedRoleDetail.title}
                  </DialogTitle>
                </div>
                <Badge className="bg-green-600 text-white font-bold text-xs">
                  ตรงกับทักษะ {selectedRoleDetail.match}%
                </Badge>
              </div>
            </div>

            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">รายละเอียดตำแหน่งงาน</h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-200">
                  {selectedRoleDetail.description}
                </p>
              </div>

              {/* Salary & Demand Breakdown */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                  <span className="text-xs text-emerald-800 font-semibold block">ช่วงเงินเดือนแรกบรรจุในไทย</span>
                  <span className="text-lg font-bold text-emerald-950 mt-1 block">{selectedRoleDetail.salary}</span>
                </div>

                <div className="p-4 rounded-lg bg-indigo-50 border border-indigo-200">
                  <span className="text-xs text-indigo-800 font-semibold block">ความต้องการในตลาดแรงงาน</span>
                  <span className="text-lg font-bold text-indigo-950 mt-1 block">{selectedRoleDetail.demand}</span>
                </div>
              </div>

              {/* Required Skills */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">ทักษะสำคัญที่ต้องใช้</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedRoleDetail.skills.map((skill) => (
                    <span key={skill} className="text-xs font-semibold px-3 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Career Growth Path */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">เส้นทางเติบโตในสายอาชีพ</h4>
                <div className="flex flex-col gap-2">
                  {selectedRoleDetail.careerPath.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs font-medium text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Companies Hiring */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">บริษัทชั้นนำในไทยที่เปิดรับสายอาชีพนี้</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedRoleDetail.topCompanies.map((company) => (
                    <Badge key={company} variant="secondary" className="bg-slate-100 text-slate-800 text-xs px-3 py-1 font-semibold border border-slate-200">
                      🏢 {company}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
