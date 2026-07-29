"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Search, MapPin, Building, Star, Clock, Briefcase, Banknote, CheckCircle2, ChevronRight, Filter, MessageSquare, ThumbsUp, GraduationCap } from "lucide-react";
import { internships, Internship } from "@/data/internships";
import { CompanyLogo } from "@/components/ui/company-logo";
import { cn } from "@/lib/utils";

export default function InternshipsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypeFilter, setSelectedTypeFilter] = useState("ทั้งหมด");
  const [selectedWorkplaceFilter, setSelectedWorkplaceFilter] = useState("ทั้งหมด");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("ทั้งหมด");
  const [selectedJobDetail, setSelectedJobDetail] = useState<Internship | null>(null);
  const [activeTab, setActiveTab] = useState<"detail" | "reviews">("detail");
  const [appliedJobId, setAppliedJobId] = useState<number | null>(null);

  const categories = [
    "ทั้งหมด",
    "คอมพิวเตอร์ & ซอฟต์แวร์",
    "ข้อมูล & ปัญญาประดิษฐ์",
    "คลาวด์ & ความมั่นคงปลอดภัย",
    "วิศวกรรมไฟฟ้า & พลังงาน",
    "อิเล็กทรอนิกส์ & เซมิคอนดักเตอร์",
    "หุ่นยนต์ & เมคคาทรอนิกส์",
    "ยานยนต์ & EV",
    "โยธา & โครงสร้าง",
    "อุตสาหการ & โลจิสติกส์",
    "เคมี & วัสดุ"
  ];

  const filteredJobs = internships.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType = selectedTypeFilter === "ทั้งหมด" || job.type === selectedTypeFilter;
    const matchesWorkplace = selectedWorkplaceFilter === "ทั้งหมด" || job.workplaceType === selectedWorkplaceFilter;
    const matchesCategory = selectedCategoryFilter === "ทั้งหมด" || job.category === selectedCategoryFilter;

    return matchesSearch && matchesType && matchesWorkplace && matchesCategory;
  });

  const handleApply = (jobId: number) => {
    setAppliedJobId(jobId);
    setTimeout(() => {
      setAppliedJobId(null);
      setSelectedJobDetail(null);
    }, 2000);
  };

  const handleOpenDetail = (job: Internship, tab: "detail" | "reviews" = "detail") => {
    setSelectedJobDetail(job);
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            ค้นหาที่ฝึกงานและสหกิจศึกษา
          </h1>
          <p className="text-slate-500 mt-1 text-sm">
            โอกาสปฏิบัติงานจริงกับบริษัทชั้นนำ พร้อมอ่านรีวิวตรงจากรุ่นพี่นิสิตคณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์
          </p>
        </div>

        <Badge variant="secondary" className="bg-green-50 text-green-700 font-semibold px-3.5 py-1.5 text-xs self-start md:self-auto border border-green-200">
          อัปเดต {internships.length} ตำแหน่งงานเปิดรับ
        </Badge>
      </div>

      {/* Main Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            placeholder="ค้นหาตำแหน่งงาน, บริษัท, ทักษะที่ต้องการ..."
            className="pl-10 h-11 border-slate-200 text-sm bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Category Pills Slider */}
      <div className="flex gap-2 overflow-x-auto pb-2 pt-1 scrollbar-hide">
        {categories.map((cat) => (
          <Badge
            key={cat}
            variant={cat === selectedCategoryFilter ? "default" : "outline"}
            className={`px-3.5 py-1.5 cursor-pointer whitespace-nowrap text-xs font-semibold rounded-lg transition-colors ${
              cat === selectedCategoryFilter
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white hover:bg-slate-50 text-slate-600 border-slate-200"
            }`}
            onClick={() => setSelectedCategoryFilter(cat)}
          >
            {cat}
          </Badge>
        ))}
      </div>

      {/* Main Grid: Sidebar Filters & Job Cards */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 shrink-0 flex flex-col gap-6 bg-white p-5 rounded-xl border border-slate-200 shadow-sm h-fit">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <Filter className="w-4 h-4 text-slate-700" />
            <h3 className="font-bold text-slate-900 text-sm">ตัวกรองค้นหา</h3>
          </div>

          <div>
            <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-2.5">ประเภทโครงการ</h4>
            <div className="space-y-1.5 text-xs">
              {["ทั้งหมด", "ฝึกงานฤดูร้อน", "สหกิจศึกษา", "Part-time ระหว่างเรียน"].map((typeOption) => (
                <div
                  key={typeOption}
                  onClick={() => setSelectedTypeFilter(typeOption)}
                  className={`p-2 rounded-lg cursor-pointer transition-colors flex items-center justify-between font-medium ${
                    selectedTypeFilter === typeOption
                      ? "bg-green-50 text-green-700 font-bold border border-green-200"
                      : "hover:bg-slate-50 text-slate-700"
                  }`}
                >
                  <span>{typeOption}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-2.5">รูปแบบการทำงาน</h4>
            <div className="space-y-1.5 text-xs">
              {["ทั้งหมด", "On-site", "Hybrid", "Remote"].map((wpOption) => (
                <div
                  key={wpOption}
                  onClick={() => setSelectedWorkplaceFilter(wpOption)}
                  className={`p-2 rounded-lg cursor-pointer transition-colors flex items-center justify-between font-medium ${
                    selectedWorkplaceFilter === wpOption
                      ? "bg-green-50 text-green-700 font-bold border border-green-200"
                      : "hover:bg-slate-50 text-slate-700"
                  }`}
                >
                  <span>{wpOption}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Job Listings Column */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
            <span>พบตำแหน่งเปิดรับ {filteredJobs.length} รายการ</span>
            <span>ตรวจสอบและรับรองโดย คณะวิศวกรรมศาสตร์ มก.</span>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="p-12 text-center bg-white border border-slate-200 rounded-xl">
              <p className="text-slate-500 text-sm font-medium">ไม่พบตำแหน่งงานตรงกับเงื่อนไขค้นหา</p>
              <Button variant="outline" className="mt-3 text-xs" onClick={() => { setSearchQuery(""); setSelectedTypeFilter("ทั้งหมด"); setSelectedWorkplaceFilter("ทั้งหมด"); setSelectedCategoryFilter("ทั้งหมด"); }}>
                ล้างตัวกรองทั้งหมด
              </Button>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <Card
                key={job.id}
                className="shadow-sm border border-slate-200 hover:border-green-400 hover:shadow-md transition-all cursor-pointer group bg-white rounded-xl overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-5">
                    {/* SVG Vector Company Logo */}
                    <div onClick={() => handleOpenDetail(job, "detail")}>
                      <CompanyLogo logoKey={job.logo} className="group-hover:scale-105 transition-transform" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-1.5">
                        <div onClick={() => handleOpenDetail(job, "detail")}>
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                            {job.category}
                          </span>
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-green-600 transition-colors leading-snug">
                            {job.title}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-slate-600 mt-1 font-medium">
                            <Building className="w-3.5 h-3.5 text-slate-400" />
                            <span>{job.company}</span>

                            {/* Clickable Rating Badge */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleOpenDetail(job, "reviews");
                              }}
                              className="flex items-center gap-1 ml-2 bg-amber-50 border border-amber-200 text-amber-800 px-2 py-0.5 rounded-full hover:bg-amber-100 transition-colors"
                            >
                              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                              <span className="font-bold text-slate-800 text-xs">{job.rating}</span>
                              <span className="text-slate-600 text-[11px]">({job.studentReviews ? job.studentReviews.length : job.reviews} รีวิวรุ่นพี่)</span>
                            </button>
                          </div>
                        </div>

                        <Badge
                          variant="secondary"
                          className="bg-green-50 text-green-700 font-semibold border border-green-200 text-xs px-2.5 py-1 self-start shrink-0"
                        >
                          {job.posted}
                        </Badge>
                      </div>

                      {/* Location, Workplace & Stipend */}
                      <div
                        onClick={() => handleOpenDetail(job, "detail")}
                        className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-3 mb-4 font-medium"
                      >
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {job.location} ({job.workplaceType})
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-800 font-bold">
                          <Banknote className="w-3.5 h-3.5 text-green-600" />
                          {job.stipend}
                        </div>
                      </div>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3">
                        <div className="flex flex-wrap gap-1.5">
                          {job.tags.map((tag) => (
                            <span key={tag} className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-50 text-slate-700 border border-slate-200">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleOpenDetail(job, "reviews")}
                            className="text-xs font-semibold text-slate-600 hover:text-green-600 flex items-center gap-1"
                          >
                            <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                            อ่านรีวิวรุ่นพี่ ({job.studentReviews ? job.studentReviews.length : 0})
                          </button>
                          <span
                            onClick={() => handleOpenDetail(job, "detail")}
                            className="text-xs font-semibold text-green-600 flex items-center group-hover:translate-x-0.5 transition-transform"
                          >
                            ดูรายละเอียด <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>

      {/* Clean Enterprise Job Detail & Reviews Modal */}
      <Dialog open={!!selectedJobDetail} onOpenChange={(open) => !open && setSelectedJobDetail(null)}>
        {selectedJobDetail && (
          <DialogContent className="sm:max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-2xl p-0 overflow-hidden z-[60]">
            {/* Modal Header */}
            <div className="bg-white p-6 border-b border-slate-100">
              <div className="flex justify-between items-start gap-4">
                <div className="flex gap-4 items-center">
                  <CompanyLogo logoKey={selectedJobDetail.logo} />
                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-0.5">
                      {selectedJobDetail.category}
                    </span>
                    <DialogTitle className="text-lg font-extrabold text-slate-900 leading-snug">
                      {selectedJobDetail.title}
                    </DialogTitle>
                    <span className="text-xs text-slate-500 font-medium block mt-0.5">
                      {selectedJobDetail.company} • {selectedJobDetail.location}
                    </span>
                  </div>
                </div>

                <Badge className="bg-green-600 text-white font-bold text-xs shrink-0">
                  {selectedJobDetail.type}
                </Badge>
              </div>

              {/* Navigation Tabs */}
              <div className="flex gap-6 mt-6 border-b border-slate-200 text-xs font-bold">
                <button
                  onClick={() => setActiveTab("detail")}
                  className={`pb-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === "detail"
                      ? "border-green-600 text-green-600 font-bold"
                      : "border-transparent text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" /> รายละเอียดตำแหน่งงาน
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`pb-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === "reviews"
                      ? "border-green-600 text-green-600 font-bold"
                      : "border-transparent text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" /> รีวิวจากรุ่นพี่นิสิต KU ({selectedJobDetail.studentReviews ? selectedJobDetail.studentReviews.length : 0})
                </button>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto">
              {activeTab === "detail" ? (
                <>
                  {/* Stipend Banner */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 font-semibold block">ค่าเบี้ยเลี้ยง / ค่าตอบแทน</span>
                      <span className="text-base font-bold text-slate-900">{selectedJobDetail.stipend}</span>
                    </div>
                    <Badge variant="outline" className="bg-white text-slate-700 text-xs border-slate-200">
                      รูปแบบการทำงาน: {selectedJobDetail.workplaceType}
                    </Badge>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">รายละเอียดตำแหน่งงาน</h4>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {selectedJobDetail.description}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">ขอบเขตความรับผิดชอบหลัก</h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {selectedJobDetail.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Qualifications */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">คุณสมบัติผู้สมัคร</h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {selectedJobDetail.qualifications.map((qual, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-slate-400 font-bold">•</span>
                          <span>{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skill Tags */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">ทักษะที่ใช้ในงาน</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedJobDetail.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-slate-50 text-slate-800 text-xs px-2.5 py-1 font-semibold border-slate-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                /* REVIEWS TAB */
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                      <span>คะแนนรีวิวเฉลี่ย: <strong className="text-slate-900 font-extrabold text-sm">{selectedJobDetail.rating} / 5.0</strong></span>
                    </div>
                    <span className="text-slate-500">จากรุ่นพี่นิสิตวิศวกรรมศาสตร์ KU</span>
                  </div>

                  {selectedJobDetail.studentReviews && selectedJobDetail.studentReviews.length > 0 ? (
                    selectedJobDetail.studentReviews.map((rev) => (
                      <div key={rev.id} className="p-4 rounded-xl border border-slate-200 bg-white space-y-3 shadow-xs">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-sm text-slate-900">{rev.author}</h4>
                              <Badge variant="outline" className="text-[10px] bg-slate-50 text-slate-700 border-slate-200 font-semibold">
                                {rev.major}
                              </Badge>
                            </div>
                            <span className="text-xs text-slate-400 block mt-0.5">
                              {rev.batch} • รีวิวเมื่อ {rev.date}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 text-amber-500 font-bold text-xs bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                            <Star className="w-3.5 h-3.5 fill-amber-500" />
                            <span>{rev.rating}.0</span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                          "{rev.comment}"
                        </p>

                        <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                          <div className="flex items-start gap-1.5 text-slate-800">
                            <span className="font-bold text-green-600 shrink-0">👍 จุดเด่น:</span>
                            <span className="text-slate-600">{rev.pros}</span>
                          </div>

                          <div className="flex items-start gap-1.5 text-slate-800">
                            <span className="font-bold text-amber-600 shrink-0">💡 ข้อควรเตรียมใจ:</span>
                            <span className="text-slate-600">{rev.cons}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500">
                      ยังไม่มีรีวิวจากรุ่นพี่สำหรับตำแหน่งนี้
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <DialogFooter className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <Button variant="outline" size="sm" onClick={() => setSelectedJobDetail(null)} className="text-xs">
                ปิดหน้าต่าง
              </Button>

              <Button
                onClick={() => handleApply(selectedJobDetail.id)}
                disabled={appliedJobId === selectedJobDetail.id}
                className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-6 h-9 shadow-sm"
              >
                {appliedJobId === selectedJobDetail.id ? (
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-white" /> ส่งใบสมัครสำเร็จเรียบร้อย!
                  </span>
                ) : (
                  "ยื่นใบสมัครฝึกงานตำแหน่งนี้"
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
