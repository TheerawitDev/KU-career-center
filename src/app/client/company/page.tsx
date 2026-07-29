"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import {
  initialCompanyInfo,
  initialCompanyJobs,
  initialCompanyApplications,
  CompanyInfo,
  CompanyJob,
  CompanyApplication
} from "@/data/company";
import {
  Building2,
  MapPin,
  Mail,
  Phone,
  Globe,
  Edit2,
  Save,
  X,
  Plus,
  Briefcase,
  Users,
  CheckCircle2,
  Clock,
  FileText,
  Check,
  Ban,
  Calendar,
  ExternalLink
} from "lucide-react";

export default function ClientCompanyPage() {
  const [activeTab, setActiveTab] = useState<"PROFILE" | "JOBS" | "APPLICATIONS">("PROFILE");

  // State management
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(initialCompanyInfo);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [tempInfo, setTempInfo] = useState<CompanyInfo>({ ...companyInfo });

  const [jobs, setJobs] = useState<CompanyJob[]>(initialCompanyJobs);
  const [applications, setApplications] = useState<CompanyApplication[]>(initialCompanyApplications);

  // New Job Modal state
  const [isNewJobOpen, setIsNewJobOpen] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "",
    department: "Engineering",
    location: "Bangkok / Hybrid",
    type: "ฝึกงานฤดูร้อน" as "ฝึกงานฤดูร้อน" | "สหกิจศึกษา" | "งานประจำ (Full-time)",
    tags: "",
    description: "",
    requirements: ""
  });

  // Profile save handlers
  const handleSaveProfile = () => {
    setCompanyInfo({ ...tempInfo });
    setIsEditingProfile(false);
  };

  const handleCancelProfile = () => {
    setTempInfo({ ...companyInfo });
    setIsEditingProfile(false);
  };

  // Job creation handler
  const handleCreateJob = () => {
    if (!newJob.title) return;

    const createdJob: CompanyJob = {
      id: `job-${Date.now()}`,
      title: newJob.title,
      department: newJob.department,
      location: newJob.location,
      type: newJob.type,
      postedDate: "วันนี้",
      applicantCount: 0,
      status: "เปิดรับสมัคร",
      tags: newJob.tags.split(",").map((t) => t.trim()).filter(Boolean),
      description: newJob.description,
      requirements: newJob.requirements.split("\n").filter(Boolean)
    };

    setJobs([createdJob, ...jobs]);
    setIsNewJobOpen(false);
    setNewJob({
      title: "",
      department: "Engineering",
      location: "Bangkok / Hybrid",
      type: "ฝึกงานฤดูร้อน",
      tags: "",
      description: "",
      requirements: ""
    });
  };

  // Application status update handler
  const handleUpdateAppStatus = (appId: string, newStatus: CompanyApplication["status"]) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === appId ? { ...app, status: newStatus } : app))
    );
  };

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto pb-16">
      {/* Company Profile Header Banner (Matching Student Profile Page) */}
      <Card className="border-none shadow-sm overflow-hidden bg-white p-0">
        <div className="h-44 w-full relative bg-slate-200">
          <img
            src={companyInfo.coverImage}
            alt="Company Cover"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-6 pb-6 relative">
          <div className="flex justify-between items-end -mt-12 mb-4">
            <div className="w-24 h-24 rounded-2xl bg-slate-900 border-4 border-white shadow-sm flex items-center justify-center font-black text-white text-xl shrink-0">
              {companyInfo.logo}
            </div>

            {!isEditingProfile ? (
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-slate-200 text-slate-700 hover:bg-slate-50"
                onClick={() => {
                  setTempInfo({ ...companyInfo });
                  setIsEditingProfile(true);
                }}
              >
                <Edit2 className="w-4 h-4" /> แก้ไขข้อมูลบริษัท
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 text-rose-600 border-rose-200 hover:bg-rose-50"
                  onClick={handleCancelProfile}
                >
                  <X className="w-4 h-4" /> ยกเลิก
                </Button>
                <Button
                  size="sm"
                  className="gap-2 bg-green-600 hover:bg-green-700 text-white"
                  onClick={handleSaveProfile}
                >
                  <Save className="w-4 h-4" /> บันทึก
                </Button>
              </div>
            )}
          </div>

          <div className="space-y-2">
            {!isEditingProfile ? (
              <>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-slate-900">{companyInfo.name}</h1>
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 text-xs font-semibold">
                    Verified Partner
                  </Badge>
                </div>
                <p className="text-slate-600 text-sm font-medium">{companyInfo.tagline}</p>
              </>
            ) : (
              <div className="grid gap-3 max-w-xl">
                <div>
                  <label className="text-xs font-semibold text-slate-500">ชื่อบริษัท</label>
                  <Input
                    value={tempInfo.name}
                    onChange={(e) => setTempInfo({ ...tempInfo, name: e.target.value })}
                    className="h-10 bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500">สโลแกน / สรุปองค์กร</label>
                  <Input
                    value={tempInfo.tagline}
                    onChange={(e) => setTempInfo({ ...tempInfo, tagline: e.target.value })}
                    className="h-10 bg-white"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-4 mt-5 text-xs text-slate-600 border-t border-slate-100 pt-4">
            {!isEditingProfile ? (
              <>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  {companyInfo.industry}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  {companyInfo.location}
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-slate-400" />
                  <a href={companyInfo.website} target="_blank" rel="noreferrer" className="hover:text-green-600 underline">
                    {companyInfo.website}
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-slate-400" />
                  {companyInfo.email}
                </div>
              </>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2 w-full max-w-xl">
                <div>
                  <label className="text-xs font-semibold text-slate-500">อุตสาหกรรม</label>
                  <Input
                    value={tempInfo.industry}
                    onChange={(e) => setTempInfo({ ...tempInfo, industry: e.target.value })}
                    className="h-10 bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500">สถานที่ตั้ง</label>
                  <Input
                    value={tempInfo.location}
                    onChange={(e) => setTempInfo({ ...tempInfo, location: e.target.value })}
                    className="h-10 bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500">เว็บไซต์</label>
                  <Input
                    value={tempInfo.website}
                    onChange={(e) => setTempInfo({ ...tempInfo, website: e.target.value })}
                    className="h-10 bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500">อีเมลติดต่อ HR</label>
                  <Input
                    value={tempInfo.email}
                    onChange={(e) => setTempInfo({ ...tempInfo, email: e.target.value })}
                    className="h-10 bg-white"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* Navigation Tabs */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-px">
        <div className="flex gap-6 text-sm font-medium">
          <button
            onClick={() => setActiveTab("PROFILE")}
            className={`pb-3 transition-colors border-b-2 ${
              activeTab === "PROFILE"
                ? "border-green-600 text-green-700 font-bold"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            รายละเอียดและสวัสดิการ
          </button>

          <button
            onClick={() => setActiveTab("JOBS")}
            className={`pb-3 transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === "JOBS"
                ? "border-green-600 text-green-700 font-bold"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            ตำแหน่งงานที่เปิดรับ ({jobs.length})
          </button>

          <button
            onClick={() => setActiveTab("APPLICATIONS")}
            className={`pb-3 transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === "APPLICATIONS"
                ? "border-green-600 text-green-700 font-bold"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <Users className="w-4 h-4" />
            ใบสมัครจากนิสิต ({applications.length})
          </button>
        </div>

        {activeTab === "JOBS" && (
          <Button
            size="sm"
            onClick={() => setIsNewJobOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-medium text-xs gap-1.5 mb-2"
          >
            <Plus className="w-4 h-4" /> ประกาศตำแหน่งงานใหม่
          </Button>
        )}
      </div>

      {/* TAB 1: COMPANY OVERVIEW & BENEFITS */}
      {activeTab === "PROFILE" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card className="shadow-sm border-slate-200 bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">เกี่ยวกับบริษัท</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {!isEditingProfile ? (
                  <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                    {companyInfo.description}
                  </p>
                ) : (
                  <textarea
                    rows={4}
                    value={tempInfo.description}
                    onChange={(e) => setTempInfo({ ...tempInfo, description: e.target.value })}
                    className="w-full p-3 rounded-lg border border-slate-200 text-sm bg-white outline-none focus:border-green-600"
                  />
                )}

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">วัฒนธรรมการทำงาน</h4>
                  {!isEditingProfile ? (
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {companyInfo.culture}
                    </p>
                  ) : (
                    <textarea
                      rows={3}
                      value={tempInfo.culture}
                      onChange={(e) => setTempInfo({ ...tempInfo, culture: e.target.value })}
                      className="w-full p-3 rounded-lg border border-slate-200 text-sm bg-white outline-none focus:border-green-600"
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-sm border-slate-200 bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">สวัสดิการสำหรับนิสิตฝึกงาน</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {companyInfo.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* TAB 2: MANAGE JOB OPENINGS */}
      {activeTab === "JOBS" && (
        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="shadow-sm border-slate-200 bg-white">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                      <Badge variant="secondary" className="bg-green-50 text-green-700 text-xs">
                        {job.status}
                      </Badge>
                    </div>

                    <p className="text-xs text-slate-500 font-medium">
                      {job.department} • {job.type} • {job.location} • ประกาศเมื่อ {job.postedDate}
                    </p>

                    <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {job.tags.map((t) => (
                        <Badge key={t} variant="outline" className="text-[11px] text-slate-600 bg-white font-normal">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                    <span className="text-xs font-semibold text-slate-600">
                      มีนิสิตสมัครแล้ว <strong className="text-slate-900">{job.applicantCount}</strong> ท่าน
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setActiveTab("APPLICATIONS")}
                      className="border-slate-200 text-slate-700 text-xs"
                    >
                      ดูใบสมัครตำแหน่งนี้
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* TAB 3: APPLICATIONS RECEIVED */}
      {activeTab === "APPLICATIONS" && (
        <div className="space-y-4">
          {applications.map((app) => (
            <Card key={app.id} className="shadow-sm border-slate-200 bg-white">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={app.avatar}
                      alt={app.realName}
                      className="w-14 h-14 rounded-full object-cover border border-slate-200 shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-slate-900 text-base">{app.realName}</h3>
                        <Badge
                          variant="secondary"
                          className={
                            app.status === "ผ่านการคัดเลือก"
                              ? "bg-green-100 text-green-800"
                              : app.status === "นัดสัมภาษณ์"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-slate-100 text-slate-700"
                          }
                        >
                          {app.status}
                        </Badge>
                      </div>

                      <p className="text-xs text-slate-600 mt-0.5">
                        สมัครตำแหน่ง: <strong className="text-slate-800">{app.jobTitle}</strong>
                      </p>

                      <p className="text-xs text-slate-500 mt-1">
                        {app.major} • GPA {app.gpa.toFixed(2)} • ยื่นใบสมัครเมื่อ {app.appliedDate}
                      </p>
                    </div>
                  </div>

                  {/* Recruitment Action Buttons */}
                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleUpdateAppStatus(app.id, "นัดสัมภาษณ์")}
                      className="text-xs border-slate-200 text-slate-700"
                    >
                      <Calendar className="w-3.5 h-3.5 mr-1" /> นัดสัมภาษณ์
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleUpdateAppStatus(app.id, "ผ่านการคัดเลือก")}
                      className="text-xs bg-green-600 hover:bg-green-700 text-white font-medium"
                    >
                      <Check className="w-3.5 h-3.5 mr-1" /> ตอบรับการฝึกงาน
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Post New Job Modal Dialog */}
      <Dialog open={isNewJobOpen} onOpenChange={setIsNewJobOpen}>
        <DialogContent className="sm:max-w-lg bg-white rounded-xl border border-slate-200 shadow-xl p-0 overflow-hidden">
          <div className="bg-slate-900 text-white p-6">
            <DialogTitle className="text-lg font-bold text-white">ประกาศตำแหน่งงาน / ที่ฝึกงานใหม่</DialogTitle>
            <DialogDescription className="text-xs text-slate-300 mt-1">
              ตำแหน่งจะถูกแสดงในหน้าค้นหาที่ฝึกงานสำหรับนิสิต ม.เกษตรศาสตร์
            </DialogDescription>
          </div>

          <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">ชื่อตำแหน่งงาน</label>
              <Input
                placeholder="เช่น Software Engineering Intern"
                value={newJob.title}
                onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                className="h-10 bg-white border-slate-200 text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">ประเภทงาน</label>
                <select
                  value={newJob.type}
                  onChange={(e) => setNewJob({ ...newJob, type: e.target.value as any })}
                  className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-xs font-medium text-slate-700 outline-none"
                >
                  <option value="ฝึกงานฤดูร้อน">ฝึกงานฤดูร้อน</option>
                  <option value="สหกิจศึกษา">สหกิจศึกษา (Co-op)</option>
                  <option value="งานประจำ (Full-time)">งานประจำ (Full-time)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">สถานที่ทำงาน</label>
                <Input
                  placeholder="เช่น Bangkok / Hybrid"
                  value={newJob.location}
                  onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                  className="h-10 bg-white border-slate-200 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">ทักษะที่ต้องการ (คั่นด้วยจุลภาค)</label>
              <Input
                placeholder="เช่น React, Node.js, Python, SQL"
                value={newJob.tags}
                onChange={(e) => setNewJob({ ...newJob, tags: e.target.value })}
                className="h-10 bg-white border-slate-200 text-sm"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">รายละเอียดงาน</label>
              <textarea
                rows={3}
                placeholder="อธิบายรายละเอียดบทบาทหน้าที่ความรับผิดชอบ..."
                value={newJob.description}
                onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                className="w-full p-3 rounded-md border border-slate-200 text-sm bg-white outline-none focus:border-green-600"
              />
            </div>
          </div>

          <DialogFooter className="p-6 pt-0 flex gap-3">
            <Button
              variant="outline"
              onClick={() => setIsNewJobOpen(false)}
              className="rounded-lg border-slate-200 text-slate-700 flex-1 text-xs"
            >
              ยกเลิก
            </Button>
            <Button
              onClick={handleCreateJob}
              className="rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium flex-1 text-xs shadow-sm"
            >
              ลงประกาศตำแหน่งงาน
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
