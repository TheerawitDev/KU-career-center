"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, ExternalLink, Edit2, CheckCircle2, Save, X, FileText, Globe, Code2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Theerawit Waithayawan",
    studentId: "6510503456",
    major: "นิสิตชั้นปีที่ 3 • วิศวกรรมคอมพิวเตอร์",
    gpax: "3.88",
    location: "กรุงเทพมหานคร, ประเทศไทย",
    email: "theerawit.w@ku.th",
    phone: "082-998-8877",
    bio: "นิสิตชั้นปีที่ 3 ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ มีความชื่นชอบและเชี่ยวชาญการพัฒนา Web Applications, Software Engineering และ AI Integration มุ่งมั่นเรียนรู้เทคโนโลยีใหม่ๆ และกำลังมองหาโอกาสปฏิบัติงานฝึกงาน / สหกิจศึกษาในตำแหน่ง Full-Stack Engineer หรือ Software Engineer",
    github: "github.com/TheerawitDev",
    linkedin: "linkedin.com/in/theerawit-w"
  });

  const [tempProfile, setTempProfile] = useState({ ...profile });

  const handleStartEdit = () => {
    setTempProfile({ ...profile });
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfile({ ...tempProfile });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto pb-16">
      {/* Header Banner & Card */}
      <Card className="border border-slate-200 shadow-sm overflow-hidden bg-white rounded-2xl p-0">
        <div className="h-44 w-full relative bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80"
            alt="Profile Banner"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="px-8 pb-8 relative">
          <div className="flex justify-between items-end -mt-14 mb-4">
            <div className="w-28 h-28 rounded-full border-4 border-white shadow-md overflow-hidden shrink-0 bg-slate-100">
              <img
                src="/profile.jpg"
                alt="Theerawit Waithayawan"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {!isEditing ? (
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-slate-200 hover:bg-slate-50 font-bold text-xs"
                onClick={handleStartEdit}
              >
                <Edit2 className="w-3.5 h-3.5" /> แก้ไขข้อมูลโปรไฟล์
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1.5 text-red-600 border-red-200 hover:bg-red-50 text-xs font-bold"
                  onClick={handleCancel}
                >
                  <X className="w-3.5 h-3.5" /> ยกเลิก
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold"
                  onClick={handleSave}
                >
                  <Save className="w-3.5 h-3.5" /> บันทึกข้อมูล
                </Button>
              </div>
            )}
          </div>

          <div className="space-y-2">
            {!isEditing ? (
              <>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-extrabold text-slate-900">{profile.name}</h1>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 font-bold text-xs">
                    รหัสนิสิต {profile.studentId}
                  </Badge>
                  <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-semibold text-xs">
                    ยืนยันตัวตนสำเร็จ (KU Student Verification)
                  </Badge>
                </div>
                <p className="text-slate-600 font-bold text-sm">{profile.major}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                  <span>เกรดเฉลี่ยสะสม (GPAX): <strong className="text-slate-900 font-extrabold text-sm">{profile.gpax}</strong></span>
                  <span>• สถานะ: <strong className="text-green-600 font-bold">พร้อมรับการเสนอฝึกงานและสหกิจศึกษา</strong></span>
                </div>
              </>
            ) : (
              <div className="grid gap-3 max-w-2xl bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">ชื่อ-นามสกุล</label>
                    <Input
                      value={tempProfile.name}
                      onChange={(e) => setTempProfile({ ...tempProfile, name: e.target.value })}
                      className="h-9 bg-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">รหัสนิสิต</label>
                    <Input
                      value={tempProfile.studentId}
                      onChange={(e) => setTempProfile({ ...tempProfile, studentId: e.target.value })}
                      className="h-9 bg-white text-xs"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">ชั้นปีและภาควิชา</label>
                  <Input
                    value={tempProfile.major}
                    onChange={(e) => setTempProfile({ ...tempProfile, major: e.target.value })}
                    className="h-9 bg-white text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">เกรดเฉลี่ยสะสม (GPAX)</label>
                  <Input
                    value={tempProfile.gpax}
                    onChange={(e) => setTempProfile({ ...tempProfile, gpax: e.target.value })}
                    className="h-9 bg-white text-xs"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-5 mt-6 text-xs text-slate-600 font-medium border-t border-slate-100 pt-4">
            {!isEditing ? (
              <>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {profile.location}
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  {profile.email}
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  {profile.phone}
                </div>
              </>
            ) : (
              <div className="grid gap-3 sm:grid-cols-3 w-full max-w-2xl">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">ที่อยู่ / จังหวัด</label>
                  <Input
                    value={tempProfile.location}
                    onChange={(e) => setTempProfile({ ...tempProfile, location: e.target.value })}
                    className="h-9 bg-white text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">อีเมล</label>
                  <Input
                    value={tempProfile.email}
                    onChange={(e) => setTempProfile({ ...tempProfile, email: e.target.value })}
                    className="h-9 bg-white text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">เบอร์โทรศัพท์</label>
                  <Input
                    value={tempProfile.phone}
                    onChange={(e) => setTempProfile({ ...tempProfile, phone: e.target.value })}
                    className="h-9 bg-white text-xs"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* About Me Section */}
          <Card className="shadow-sm border border-slate-200 bg-white rounded-xl">
            <CardHeader className="pb-3 border-b border-slate-100">
              <CardTitle className="text-base font-extrabold text-slate-900">
                แนะนำตัวและเป้าหมายสายอาชีพ
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {!isEditing ? (
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {profile.bio}
                </p>
              ) : (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">ข้อความแนะนำตัว</label>
                  <textarea
                    rows={4}
                    value={tempProfile.bio}
                    onChange={(e) => setTempProfile({ ...tempProfile, bio: e.target.value })}
                    className="w-full p-3 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-slate-400 font-normal"
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Timeline / Experience */}
          <Card className="shadow-sm border border-slate-200 bg-white rounded-xl">
            <CardHeader className="pb-3 border-b border-slate-100">
              <CardTitle className="text-base font-extrabold text-slate-900">
                ประสบการณ์และผลงาน (Experience & Projects)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="relative border-l-2 border-slate-100 ml-3 pl-6 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-green-600 bg-white"></div>
                  <h3 className="font-bold text-sm text-slate-900">Software Engineering Intern</h3>
                  <p className="text-xs font-bold text-green-600">Agoda Services Co., Ltd.</p>
                  <p className="text-[11px] text-slate-400 font-medium mt-0.5">มิถุนายน 2025 - สิงหาคม 2025</p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                    ร่วมพัฒนาและปรับปรุงระบบค้นหาโรงแรมด้วย Microservices ภาษา Java และ Kubernetes รองรับการทำงานในสภาวะทราฟฟิกสูง
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-slate-300 bg-white"></div>
                  <h3 className="font-bold text-sm text-slate-900">KU Engineering Hackathon 2024 (รางวัลรองชนะเลิศอันดับ 1)</h3>
                  <p className="text-xs font-bold text-indigo-600">คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์</p>
                  <p className="text-[11px] text-slate-400 font-medium mt-0.5">พฤศจิกายน 2024</p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                    พัฒนาแอปพลิเคชันต้นแบบสำหรับบริหารคัดแยกขยะในวิทยาเขตบางเขนด้วยเทคโนโลยี AI Computer Vision
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education Details */}
          <Card className="shadow-sm border border-slate-200 bg-white rounded-xl">
            <CardHeader className="pb-3 border-b border-slate-100">
              <CardTitle className="text-base font-extrabold text-slate-900">ประวัติการศึกษา</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-green-700 text-white rounded-xl flex items-center justify-center font-extrabold text-sm shrink-0 border border-green-800 shadow-xs">
                  KU
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">มหาวิทยาลัยเกษตรศาสตร์ (Kasetsart University)</h3>
                  <p className="text-xs font-semibold text-slate-700">ปริญญาตรี วิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">ปีการศึกษา 2023 - ปัจจุบัน (คาดว่าจะสำเร็จการศึกษา: มีนาคม 2027)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Verified Skills */}
          <Card className="shadow-sm border border-slate-200 bg-white rounded-xl">
            <CardHeader className="pb-3 border-b border-slate-100">
              <CardTitle className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                ทักษะผ่านการประเมิน <CheckCircle2 className="w-4 h-4 text-green-600" />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">ทักษะทางเทคนิค (Verified)</h4>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 font-semibold text-xs">TypeScript</Badge>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 font-semibold text-xs">React.js</Badge>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 font-semibold text-xs">Next.js</Badge>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 font-semibold text-xs">Node.js</Badge>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 font-semibold text-xs">Python</Badge>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">เครื่องมือและองค์ความรู้</h4>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="outline" className="bg-slate-50 text-slate-700 border-slate-200 text-xs">Docker</Badge>
                  <Badge variant="outline" className="bg-slate-50 text-slate-700 border-slate-200 text-xs">Git / GitHub</Badge>
                  <Badge variant="outline" className="bg-slate-50 text-slate-700 border-slate-200 text-xs">Tailwind CSS</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Links & Portfolios */}
          <Card className="shadow-sm border border-slate-200 bg-white rounded-xl">
            <CardHeader className="pb-3 border-b border-slate-100">
              <CardTitle className="text-base font-extrabold text-slate-900">ผลงานและพอร์ตโฟลิโอ</CardTitle>
            </CardHeader>
            <CardContent className="p-5 flex flex-col gap-3">
              <a
                href={`https://${profile.github}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-xs text-slate-700 hover:text-green-600 font-semibold group p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-slate-500" />
                  <span>GitHub ({profile.github})</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-green-600" />
              </a>

              <a
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-xs text-slate-700 hover:text-green-600 font-semibold group p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-slate-500" />
                  <span>LinkedIn Profile</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-green-600" />
              </a>

              <a
                href="#"
                className="flex items-center justify-between text-xs text-slate-700 hover:text-green-600 font-semibold group p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-500" />
                  <span>ดาวน์โหลดเรซูเม่ฉบับย่อ (PDF)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-green-600" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
