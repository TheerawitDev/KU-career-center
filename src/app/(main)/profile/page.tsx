"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, ExternalLink, Edit2, CheckCircle, Save, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "สมชาย วิศวกรเก่งกล้า",
    major: "นิสิตชั้นปีที่ 3 • วิศวกรรมคอมพิวเตอร์ (Computer Engineering)",
    gpax: "3.85",
    location: "กรุงเทพมหานคร, ประเทศไทย",
    email: "somchai.w@ku.th",
    phone: "081-234-5678"
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
    <div className="flex flex-col gap-6 max-w-4xl mx-auto pb-10">
      {/* Profile Header */}
      <Card className="border-none shadow-sm overflow-hidden bg-white p-0">
        <div className="h-40 w-full relative bg-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
            alt="Profile Banner" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-6 pb-6 relative">
          <div className="flex justify-between items-end -mt-12 mb-4">
            <Avatar className="w-24 h-24 border-4 border-white shadow-sm">
              <AvatarImage src="https://i.pravatar.cc/150?img=11" alt="Profile" />
              <AvatarFallback>ST</AvatarFallback>
            </Avatar>
            {!isEditing ? (
              <Button variant="outline" size="sm" className="gap-2" onClick={handleStartEdit}>
                <Edit2 className="w-4 h-4" /> แก้ไขโปรไฟล์
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2 text-red-600 border-red-200 hover:bg-red-50" onClick={handleCancel}>
                  <X className="w-4 h-4" /> ยกเลิก
                </Button>
                <Button variant="default" size="sm" className="gap-2 bg-green-600 hover:bg-green-700 text-white" onClick={handleSave}>
                  <Save className="w-4 h-4" /> บันทึก
                </Button>
              </div>
            )}
          </div>
          
          <div className="space-y-3">
            {!isEditing ? (
              <>
                <h1 className="text-2xl font-bold text-slate-900">{profile.name}</h1>
                <p className="text-slate-600 font-medium">{profile.major}</p>
                <p className="text-slate-500 text-sm mt-1">เกรดเฉลี่ยสะสม (GPAX): {profile.gpax}</p>
              </>
            ) : (
              <div className="grid gap-3 max-w-xl">
                <div>
                  <label className="text-xs font-semibold text-slate-500">ชื่อ-นามสกุล</label>
                  <Input 
                    value={tempProfile.name} 
                    onChange={(e) => setTempProfile({ ...tempProfile, name: e.target.value })}
                    className="h-10 bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500">ชั้นปีและภาควิชา</label>
                  <Input 
                    value={tempProfile.major} 
                    onChange={(e) => setTempProfile({ ...tempProfile, major: e.target.value })}
                    className="h-10 bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500">เกรดเฉลี่ยสะสม (GPAX)</label>
                  <Input 
                    value={tempProfile.gpax} 
                    onChange={(e) => setTempProfile({ ...tempProfile, gpax: e.target.value })}
                    className="h-10 bg-white"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-4 mt-6 text-sm text-slate-600">
            {!isEditing ? (
              <>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  {profile.location}
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-slate-400" />
                  {profile.email}
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-slate-400" />
                  {profile.phone}
                </div>
              </>
            ) : (
              <div className="grid gap-3 sm:grid-cols-3 w-full max-w-xl">
                <div>
                  <label className="text-xs font-semibold text-slate-500">ที่อยู่ / จังหวัด</label>
                  <Input 
                    value={tempProfile.location} 
                    onChange={(e) => setTempProfile({ ...tempProfile, location: e.target.value })}
                    className="h-10 bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500">อีเมล</label>
                  <Input 
                    value={tempProfile.email} 
                    onChange={(e) => setTempProfile({ ...tempProfile, email: e.target.value })}
                    className="h-10 bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500">เบอร์โทรศัพท์</label>
                  <Input 
                    value={tempProfile.phone} 
                    onChange={(e) => setTempProfile({ ...tempProfile, phone: e.target.value })}
                    className="h-10 bg-white"
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
          {/* Timeline / Experience */}
          <Card className="shadow-sm border-slate-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">ประสบการณ์และโปรเจกต์ (Timeline)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative border-l-2 border-slate-100 ml-3 pl-6 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-green-600 bg-white"></div>
                  <h3 className="font-bold text-slate-900">Software Engineering Intern</h3>
                  <p className="text-sm font-medium text-green-600">Tech Innovation Co., Ltd.</p>
                  <p className="text-xs text-slate-500 mt-1">พ.ค. 2025 - ก.ค. 2025</p>
                  <p className="text-sm text-slate-600 mt-2">
                    พัฒนา Web Application สำหรับระบบจัดการคลังสินค้าโดยใช้ React, Node.js และ PostgreSQL 
                    ปรับปรุงประสิทธิภาพการทำงานของระบบให้เร็วขึ้น 20%
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-slate-300 bg-white"></div>
                  <h3 className="font-bold text-slate-900">KU Hackathon 2024 (1st Runner Up)</h3>
                  <p className="text-sm font-medium text-indigo-600">คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์</p>
                  <p className="text-xs text-slate-500 mt-1">พ.ย. 2024</p>
                  <p className="text-sm text-slate-600 mt-2">
                    สร้างต้นแบบแอปพลิเคชันสำหรับจัดการขยะในวิทยาเขตโดยใช้ AI ในการจำแนกประเภทขยะ
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education Details */}
          <Card className="shadow-sm border-slate-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">ประวัติการศึกษา</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center font-bold text-green-700 shrink-0">
                  KU
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">มหาวิทยาลัยเกษตรศาสตร์ (Kasetsart University)</h3>
                  <p className="text-sm text-slate-700">ปริญญาตรี วิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมคอมพิวเตอร์</p>
                  <p className="text-xs text-slate-500 mt-1">2023 - ปัจจุบัน (คาดว่าจะสำเร็จการศึกษา: 2027)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Verified Skills */}
          <Card className="shadow-sm border-slate-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                ทักษะที่ผ่านการรับรอง <CheckCircle className="w-4 h-4 text-green-500" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100">React.js</Badge>
                <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100">TypeScript</Badge>
                <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100">Python</Badge>
                <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100">Data Structures</Badge>
              </div>
              
              <Separator className="my-4" />
              
              <h4 className="text-sm font-semibold text-slate-700 mb-2">ทักษะอื่นๆ</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Figma</Badge>
                <Badge variant="outline">Git</Badge>
                <Badge variant="outline">Project Management</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Links */}
          <Card className="shadow-sm border-slate-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">ช่องทางการติดต่อ</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <a href="#" className="flex items-center justify-between text-sm text-slate-600 hover:text-green-600 group">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-slate-100 flex items-center justify-center rounded">
                    <span className="font-serif font-bold text-xs">in</span>
                  </div>
                  LinkedIn
                </div>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#" className="flex items-center justify-between text-sm text-slate-600 hover:text-green-600 group">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-slate-100 flex items-center justify-center rounded">
                    <span className="font-serif font-bold text-xs">gh</span>
                  </div>
                  GitHub
                </div>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
