"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, MapPin, Building2, MessageSquarePlus } from "lucide-react";

const people = [
  {
    id: 1,
    name: "Alumni S.",
    role: "Senior Software Engineer",
    company: "Google Thailand",
    location: "Bangkok",
    tags: ["E80", "Computer Engineering", "Mentorship"],
    image: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 2,
    name: "Alumni N.",
    role: "Data Scientist",
    company: "Agoda",
    location: "Bangkok",
    tags: ["E82", "Data Engineering", "Resume Review"],
    image: "https://i.pravatar.cc/150?img=32"
  },
  {
    id: 3,
    name: "Asst. Prof. Dr. P.",
    role: "อาจารย์ประจำภาควิชา",
    company: "Kasetsart University",
    location: "Bangkok",
    tags: ["Faculty", "AI/ML Research", "Career Advice"],
    image: "https://i.pravatar.cc/150?img=68"
  },
  {
    id: 4,
    name: "Alumni K.",
    role: "Project Manager",
    company: "SCG",
    location: "Bangkok",
    tags: ["E75", "Civil Engineering", "Mock Interview"],
    image: "https://i.pravatar.cc/150?img=59"
  }
];

export default function NetworkPage() {
  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      <div className="bg-gradient-to-r from-green-600 to-indigo-700 rounded-2xl p-8 text-white shadow-md">
        <h1 className="text-3xl font-bold mb-2">เครือข่ายศิษย์เก่าและผู้เชี่ยวชาญ</h1>
        <p className="text-green-100 max-w-2xl text-lg">
          เชื่อมต่อกับรุ่นพี่ศิษย์เก่าและคณาจารย์เพื่อขอรับคำปรึกษาด้านสายอาชีพ ตรวจเรซูเม่ หรือจำลองการสัมภาษณ์งาน
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <Input placeholder="ค้นหาชื่อ, ตำแหน่ง, หรือบริษัท..." className="pl-10 h-12 bg-white" />
        </div>
        <select className="h-12 px-4 rounded-md border border-slate-200 bg-white text-sm font-medium outline-none">
          <option>เรียงตาม: แนะนำสำหรับคุณ</option>
          <option>เรียงตาม: สาขาวิชา</option>
          <option>เรียงตาม: ปีที่สำเร็จการศึกษา</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {people.map((person) => (
          <Card key={person.id} className="shadow-sm border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex gap-4">
                  <Avatar className="w-16 h-16 border-2 border-slate-100">
                    <AvatarImage src={person.image} alt={person.name} />
                    <AvatarFallback>{person.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900">{person.name}</h3>
                    <p className="text-sm font-medium text-green-600 mb-1">{person.role}</p>
                    
                    <div className="flex flex-col gap-1 text-xs text-slate-500 mt-2">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5" />
                        {person.company}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {person.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {person.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200 font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex justify-between items-center">
                <span className="text-xs text-slate-500">ตอบกลับโดยเฉลี่ย: 2 วัน</span>
                <Button size="sm" className="gap-2 bg-green-600 hover:bg-green-700">
                  <MessageSquarePlus className="w-4 h-4" />
                  ขอรับคำปรึกษา
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
