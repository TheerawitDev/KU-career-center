"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Building, Star, Clock, Briefcase } from "lucide-react";

import { internships } from "@/data/internships";

export default function InternshipsPage() {
  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">ค้นหาที่ฝึกงานและสหกิจศึกษา</h1>
        <p className="text-slate-500 mt-2">โอกาสในการทำงานจริงกับบริษัทชั้นนำที่ผ่านการรับรองจากคณะวิศวกรรมศาสตร์</p>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <Input placeholder="ตำแหน่งงาน, ทักษะ, หรือบริษัท..." className="pl-10 h-12 border-none shadow-none focus-visible:ring-0 bg-slate-50" />
        </div>
        <div className="w-[1px] bg-slate-200 hidden md:block"></div>
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <Input placeholder="สถานที่ทำงาน..." className="pl-10 h-12 border-none shadow-none focus-visible:ring-0 bg-slate-50" />
        </div>
        <Button size="lg" className="h-12 bg-green-600 hover:bg-green-700 px-8">ค้นหา</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-4">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 shrink-0 flex flex-col gap-6">
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">ประเภทการฝึกงาน</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded text-green-600" defaultChecked />
                <span className="text-sm text-slate-700">ฝึกงานฤดูร้อน</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded text-green-600" defaultChecked />
                <span className="text-sm text-slate-700">สหกิจศึกษา (Co-op)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded text-green-600" />
                <span className="text-sm text-slate-700">Part-time ระหว่างเรียน</span>
              </label>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">รูปแบบการทำงาน</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded text-green-600" />
                <span className="text-sm text-slate-700">On-site</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded text-green-600" />
                <span className="text-sm text-slate-700">Hybrid</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded text-green-600" />
                <span className="text-sm text-slate-700">Remote</span>
              </label>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-slate-600">พบ {internships.length} ตำแหน่งที่เปิดรับ</span>
            <select className="text-sm border-none bg-transparent font-medium text-green-600 outline-none cursor-pointer">
              <option>เรียงตาม: ล่าสุด</option>
              <option>เรียงตาม: ตรงกับทักษะมากที่สุด</option>
            </select>
          </div>

          {internships.map((job) => (
            <Card key={job.id} className="shadow-sm border-slate-200 hover:border-green-300 hover:shadow-md transition-all cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center text-xl font-bold text-slate-500 shrink-0 border border-slate-200 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                    {job.logo}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600 mt-1">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{job.company}</span>
                          <span className="flex items-center gap-1 ml-2 text-amber-500">
                            <Star className="w-3.5 h-3.5 fill-amber-500" />
                            <span className="font-medium">{job.rating}</span>
                            <span className="text-slate-400">({job.reviews} รีวิว)</span>
                          </span>
                        </div>
                      </div>
                      <Badge variant={job.posted === "ใหม่" ? "default" : "secondary"} className={job.posted === "ใหม่" ? "bg-green-600 hover:bg-green-700" : ""}>
                        {job.posted}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mt-3 mb-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4" />
                        {job.type}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="bg-white text-slate-600 font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
