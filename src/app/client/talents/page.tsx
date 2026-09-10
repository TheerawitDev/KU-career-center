"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { studentsMockData, StudentTalent } from "@/data/students";
import { UnlockModal } from "@/components/client/unlock-modal";
import {
  Search,
  Lock,
  Unlock,
  GraduationCap,
  Briefcase,
  Mail,
  Phone,
  FileText,
  Building2,
  Check,
  CreditCard,
  UserCheck,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function ClientTalentsPage() {
  const [students, setStudents] = useState<StudentTalent[]>(studentsMockData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMajor, setSelectedMajor] = useState<string>("ALL");
  const [selectedLookingFor, setSelectedLookingFor] = useState<string>("ALL");
  const [minGpa, setMinGpa] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"ALL" | "UNLOCKED">("ALL");
  const [companyCredits, setCompanyCredits] = useState<number>(10);

  // Modals state
  const [selectedStudentForUnlock, setSelectedStudentForUnlock] = useState<StudentTalent | null>(null);
  const [isUnlockModalOpen, setIsUnlockModalOpen] = useState(false);
  const [detailStudent, setDetailStudent] = useState<StudentTalent | null>(null);

  const handleUnlockClick = (student: StudentTalent) => {
    setSelectedStudentForUnlock(student);
    setIsUnlockModalOpen(true);
  };

  const handleUnlockSuccess = (studentId: string) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === studentId ? { ...s, unlocked: true } : s))
    );
    if (detailStudent && detailStudent.id === studentId) {
      setDetailStudent((prev) => (prev ? { ...prev, unlocked: true } : null));
    }
  };

  const handleDeductCredits = (amount: number) => {
    setCompanyCredits((prev) => Math.max(0, prev - amount));
  };

  // Filter logic
  const filteredStudents = students.filter((s) => {
    const matchesTab = activeTab === "ALL" || (activeTab === "UNLOCKED" && s.unlocked);

    const matchesQuery =
      s.codeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.realName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.major.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.topSkills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
      s.bio.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesMajor =
      selectedMajor === "ALL" || s.major.includes(selectedMajor);

    const matchesLookingFor =
      selectedLookingFor === "ALL" || s.lookingFor === selectedLookingFor;

    const matchesGpa = s.gpa >= minGpa;

    return matchesTab && matchesQuery && matchesMajor && matchesLookingFor && matchesGpa;
  });

  const unlockedCount = students.filter((s) => s.unlocked).length;

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto pb-16">
      {/* Professional Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            <span>Talent Acquisition</span>
            <span>•</span>
            <span className="text-green-600 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> PDPA Protected
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            ค้นหานิสิต Talent Pool
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            สืบค้นศักยภาพนิสิตวิศวกรรมศาสตร์ ม.เกษตรศาสตร์ (คุ้มครองชื่อและรูปถ่ายนิสิตจนกว่าจะได้รับอนุญาตปลดล็อก)
          </p>
        </div>

        {/* Credit Indicator & Buy Link */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-2xs text-xs">
            <CreditCard className="w-4 h-4 text-green-600" />
            <span className="text-slate-500">เครดิตของคุณ:</span>
            <span className="font-bold text-slate-900 text-sm">{companyCredits} เครดิต</span>
          </div>
          <Link href="/client/pricing">
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white font-medium text-xs rounded-lg px-4 h-9">
              ซื้อเครดิตเพิ่ม
            </Button>
          </Link>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-px">
        <div className="flex gap-6 text-sm font-medium">
          <button
            onClick={() => setActiveTab("ALL")}
            className={`pb-3 transition-colors border-b-2 ${
              activeTab === "ALL"
                ? "border-green-600 text-green-700 font-bold"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            แคนดิเดตทั้งหมด ({students.length})
          </button>
          <button
            onClick={() => setActiveTab("UNLOCKED")}
            className={`pb-3 transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === "UNLOCKED"
                ? "border-green-600 text-green-700 font-bold"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <UserCheck className="w-4 h-4" />
            ปลดล็อกแล้ว ({unlockedCount})
          </button>
        </div>

        <span className="text-xs text-slate-500 font-normal hidden sm:inline">
          แสดงข้อมูล {filteredStudents.length} รายการ
        </span>
      </div>

      {/* Filter Control Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ค้นหาทักษะ (React, Python, AutoCAD), สาขาวิชา, หรือโปรเจกต์..."
            className="pl-10 h-10 border-slate-200 text-sm bg-slate-50/50"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <select
            value={selectedMajor}
            onChange={(e) => setSelectedMajor(e.target.value)}
            className="h-10 px-3 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 outline-none cursor-pointer"
          >
            <option value="ALL">สาขาวิชา: ทั้งหมด</option>
            <option value="คอมพิวเตอร์">วิศวกรรมคอมพิวเตอร์ (CPE)</option>
            <option value="ไฟฟ้า">วิศวกรรมไฟฟ้า (EE)</option>
            <option value="โยธา">วิศวกรรมโยธา (CE)</option>
            <option value="อุตสาหการ">วิศวกรรมอุตสาหการ (IE)</option>
            <option value="ซอฟต์แวร์">วิศวกรรมซอฟต์แวร์ (SKE)</option>
          </select>

          <select
            value={selectedLookingFor}
            onChange={(e) => setSelectedLookingFor(e.target.value)}
            className="h-10 px-3 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 outline-none cursor-pointer"
          >
            <option value="ALL">ประเภทงาน: ทั้งหมด</option>
            <option value="ฝึกงานฤดูร้อน">ฝึกงานฤดูร้อน</option>
            <option value="สหกิจศึกษา">สหกิจศึกษา (Co-op)</option>
            <option value="งานประจำ (Full-time)">งานประจำ (Full-time)</option>
          </select>

          <select
            value={minGpa}
            onChange={(e) => setMinGpa(Number(e.target.value))}
            className="h-10 px-3 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 outline-none cursor-pointer"
          >
            <option value={0}>GPA: ทั้งหมด</option>
            <option value={3.25}>GPA 3.25+</option>
            <option value={3.5}>GPA 3.50+</option>
            <option value={3.75}>GPA 3.75+</option>
          </select>
        </div>
      </div>

      {/* Candidate List */}
      <div className="space-y-4">
        {filteredStudents.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-xl border border-slate-200 text-slate-500">
            <p className="text-base font-medium">ไม่พบข้อมูลนิสิตที่ตรงกับเงื่อนไขการค้นหา</p>
            <p className="text-xs text-slate-400 mt-1">ลองปรับเปลี่ยนคำค้นหาหรือตัวกรองสาขาวิชา</p>
          </div>
        ) : (
          filteredStudents.map((student) => (
            <Card
              key={student.id}
              className={`shadow-2xs border-slate-200 bg-white hover:border-slate-300 transition-all ${
                student.unlocked ? "border-l-4 border-l-green-600" : ""
              }`}
            >
              <CardContent className="p-5 sm:p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Candidate Info */}
                  <div className="flex gap-4 items-start flex-1 min-w-0">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border border-slate-200 shrink-0 bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-sm">
                      <img
                        src={student.realAvatar}
                        alt="Avatar"
                        className={`w-full h-full object-cover ${student.unlocked ? "" : "filter blur-sm scale-110"}`}
                      />
                      {!student.unlocked && (
                        <div className="absolute inset-0 bg-slate-900/25 flex items-center justify-center">
                          <Lock className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-base font-bold text-slate-900 truncate">
                          {student.unlocked ? (
                            <span className="text-slate-900 flex items-center gap-1.5">
                              {student.realName}
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 font-semibold text-[10px] px-2 py-0">
                                ปลดล็อกแล้ว
                              </Badge>
                            </span>
                          ) : (
                            <span className="text-slate-800">{student.codeName}</span>
                          )}
                        </h3>
                      </div>

                      <p className="text-xs font-medium text-slate-600 mb-2">
                        {student.major} • GPA <strong className="text-slate-900 font-semibold">{student.gpa.toFixed(2)}</strong> • รุ่น {student.batch} (จบปี {student.gradYear})
                      </p>

                      <p className="text-xs text-slate-500 line-clamp-1 mb-3">
                        "{student.bio}"
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {student.topSkills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Column */}
                  <div className="flex flex-row md:flex-col items-end justify-between md:justify-center gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 shrink-0">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700 text-xs font-medium self-start md:self-end">
                      {student.lookingFor}
                    </Badge>

                    <div className="flex items-center gap-2 w-full md:w-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setDetailStudent(student)}
                        className="border-slate-200 text-slate-700 hover:bg-slate-50 text-xs h-9"
                      >
                        ดูรายละเอียด
                      </Button>

                      {!student.unlocked ? (
                        <Button
                          size="sm"
                          onClick={() => handleUnlockClick(student)}
                          className="bg-green-600 hover:bg-green-700 text-white font-medium text-xs h-9 gap-1.5 shadow-2xs"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          ปลดล็อกข้อมูลติดต่อ (1 เครดิต)
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => setDetailStudent(student)}
                          className="bg-slate-100 text-slate-800 hover:bg-slate-200 font-medium text-xs h-9 gap-1.5 border border-slate-200"
                        >
                          <FileText className="w-3.5 h-3.5 text-slate-500" />
                          ดู Resume ฉบับเต็ม
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Candidate Detail Dialog */}
      <Dialog open={!!detailStudent} onOpenChange={(open) => !open && setDetailStudent(null)}>
        {detailStudent && (
          <DialogContent className="sm:max-w-2xl bg-white rounded-xl border border-slate-200 shadow-xl p-0 overflow-hidden">
            <div className="p-6 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-slate-200 shrink-0 bg-slate-200">
                  <img
                    src={detailStudent.realAvatar}
                    alt="Candidate"
                    className={`w-full h-full object-cover ${detailStudent.unlocked ? "" : "filter blur-sm scale-110"}`}
                  />
                  {!detailStudent.unlocked && (
                    <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                      <Lock className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                <div>
                  <DialogTitle className="text-lg font-bold text-slate-900">
                    {detailStudent.unlocked ? detailStudent.realName : detailStudent.codeName}
                  </DialogTitle>
                  <DialogDescription className="text-xs text-slate-500 mt-0.5">
                    {detailStudent.major} • GPA {detailStudent.gpa.toFixed(2)} • {detailStudent.lookingFor}
                  </DialogDescription>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">บทสรุปประวัติ</h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-200">
                  {detailStudent.bio}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">ข้อมูลการติดต่อ</h4>
                {detailStudent.unlocked ? (
                  <div className="grid grid-cols-2 gap-3 bg-green-50 p-4 rounded-lg border border-green-200 text-sm">
                    <div>
                      <span className="text-xs text-slate-500 block font-medium">อีเมล</span>
                      <span className="font-bold text-slate-900">{detailStudent.email}</span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block font-medium">เบอร์โทรศัพท์</span>
                      <span className="font-bold text-slate-900">{detailStudent.phone}</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-600">
                    <span>ข้อมูลติดต่อและชื่อจริงถูกซ่อนอยู่ตามนโยบาย PDPA</span>
                    <Button
                      size="sm"
                      onClick={() => handleUnlockClick(detailStudent)}
                      className="bg-green-600 hover:bg-green-700 text-white font-medium text-xs h-8"
                    >
                      ปลดล็อก (1 เครดิต)
                    </Button>
                  </div>
                )}
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">ทักษะความสามารถ</h4>
                <div className="flex flex-wrap gap-1.5">
                  {detailStudent.topSkills.map((skill) => (
                    <span key={skill} className="text-xs font-medium px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">ผลงานและโครงงาน</h4>
                <div className="space-y-3">
                  {detailStudent.projects.map((proj, idx) => (
                    <div key={idx} className="p-4 rounded-lg border border-slate-200 bg-white space-y-1">
                      <h5 className="font-bold text-slate-900 text-sm">{proj.name}</h5>
                      <p className="text-xs text-slate-600 leading-relaxed">{proj.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      <UnlockModal
        isOpen={isUnlockModalOpen}
        onClose={() => setIsUnlockModalOpen(false)}
        student={selectedStudentForUnlock}
        onUnlockSuccess={handleUnlockSuccess}
        companyCredits={companyCredits}
        onDeductCredits={handleDeductCredits}
      />
    </div>
  );
}
