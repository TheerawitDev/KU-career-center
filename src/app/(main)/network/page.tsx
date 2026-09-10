"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, MapPin, Building2, MessageSquarePlus, Star, GraduationCap, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type AlumniMentor = {
  id: number;
  name: string;
  kuBatch: string;
  major: string;
  role: string;
  company: string;
  location: string;
  avatarUrl: string;
  avatarInitials: string;
  mentorshipTopics: string[];
  bio: string;
  responseTime: string;
  rating: number;
  consultationsCount: number;
};

const alumniMentorsData: AlumniMentor[] = [
  {
    id: 1,
    name: "พี่ธนกฤต อนันตชัย (พี่ท็อป)",
    kuBatch: "KU E78",
    major: "วิศวกรรมคอมพิวเตอร์",
    role: "Senior Software Engineer",
    company: "Google Thailand",
    location: "Bangkok / Singapore",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    avatarInitials: "ทก",
    mentorshipTopics: ["ตรวจเรซูเม่ Tech Company", "จำลองสัมภาษณ์งานซอฟต์แวร์", "เส้นทางทำงานต่างประเทศ"],
    bio: "อดีตประธานชมรมคอมพิวเตอร์ ปัจจุบันดูแลระบบ Cloud Backend ยินดีให้คำแนะนำรุ่นน้อง KU ที่สนใจสายงาน Software Engineering และการสัมภาษณ์งาน Big Tech",
    responseTime: "ภายใน 24 ชั่วโมง",
    rating: 5.0,
    consultationsCount: 48
  },
  {
    id: 2,
    name: "พี่ณัฐนิชา ภักดีรัตน์ (พี่นัท)",
    kuBatch: "KU E79",
    major: "วิศวกรรมคอมพิวเตอร์",
    role: "Senior Data Scientist",
    company: "Agoda Services",
    location: "Bangkok (Central World)",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    avatarInitials: "นน",
    mentorshipTopics: ["ปูทางสายงาน Data Science", "เตรียมตัวสอบสัมภาษณ์ SQL/Python", "แนะนำที่ฝึกงาน Agoda"],
    bio: "เชี่ยวชาญการทำโมเดล AI และ Data Pipelines สำหรับอีคอมเมิร์ซ ยินดีช่วยตรวจพอร์ตโฟลิโอและแนะแนวการเตรียมตัวนิสิตสาย Data",
    responseTime: "ภายใน 1 วัน",
    rating: 4.9,
    consultationsCount: 36
  },
  {
    id: 3,
    name: "ผศ. ดร. ปริตร วงศ์สุวรรณ",
    kuBatch: "คณาจารย์",
    major: "ภาควิชาวิศวกรรมคอมพิวเตอร์",
    role: "หัวหน้าห้องปฏิบัติการ AI & Robotics",
    company: "คณะวิศวกรรมศาสตร์ มก.",
    location: "Bangkok (บางเขน)",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    avatarInitials: "ปร",
    mentorshipTopics: ["การศึกษาต่อระดับโท-เอก", "งานวิจัย AI & Robotics", "ขอรับหนังสือรับรอง Recommendation"],
    bio: "อาจารย์ประจำภาควิชาวิศวกรรมคอมพิวเตอร์ พร้อมให้คำปรึกษานิสิตที่สนใจทำวิจัย การตีพิมพ์ผลงานวิชาการ และการยื่นทุนศึกษาต่อต่างประเทศ",
    responseTime: "ภายใน 2 วัน",
    rating: 5.0,
    consultationsCount: 60
  },
  {
    id: 4,
    name: "พี่กิตติศักดิ์ พงษ์ศิริ (พี่กิต)",
    kuBatch: "KU E75",
    major: "วิศวกรรมโยธา",
    role: "Project Construction Manager",
    company: "SCG (เครือซิเมนต์ไทย)",
    location: "Bangkok / Chonburi",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80",
    avatarInitials: "กส",
    mentorshipTopics: ["สายงานบริหารโครงการก่อสร้าง", "การสอบใบอนุญาต กว.", "เตรียมสัมภาษณ์งาน SCG"],
    bio: "ประสบการณ์ดูแลโครงการก่อสร้างโรงงานและอาคารสูงกว่า 10 ปี พร้อมถ่ายทอดเทคนิคการทำงานจริงหน้างาน และการเตรียมความพร้อมก่อนสอบ กว.",
    responseTime: "ภายใน 2 วัน",
    rating: 4.8,
    consultationsCount: 29
  },
  {
    id: 5,
    name: "พี่ศิวัช วนาพงษ์ (พี่วัช)",
    kuBatch: "KU E77",
    major: "วิศวกรรมไฟฟ้า",
    role: "Senior Power Systems Engineer",
    company: "Gulf Energy Development",
    location: "Rayong / Bangkok",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    avatarInitials: "ศว",
    mentorshipTopics: ["สายงานพลังงานหมุนเวียน", "การเตรียมตัวฝึกงานโรงไฟฟ้า", "ทักษะวิศวกรรมไฟฟ้ากำลัง"],
    bio: "ดูแลงานวิศวกรรมสถานีไฟฟ้าแรงสูงและโครงการโซลาร์ฟาร์ม ยินดีให้คำแนะนำน้องๆ วิศวะไฟฟ้าในการเตรียมตัวเข้าสู่อุตสาหกรรมพลังงาน",
    responseTime: "ภายใน 1 วัน",
    rating: 4.9,
    consultationsCount: 22
  },
  {
    id: 6,
    name: "พี่ปิยวัฒน์ ศิริอุดม (พี่ปอนด์)",
    kuBatch: "KU E78",
    major: "วิศวกรรมอุตสาหการ",
    role: "Supply Chain & Logistics Specialist",
    company: "CP ALL PCL",
    location: "Nonthaburi",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    avatarInitials: "ปว",
    mentorshipTopics: ["สายงาน Lean & Supply Chain", "การทำ Lean Project", "สัมภาษณ์งานอุตสาหการ"],
    bio: "เชี่ยวชาญการบริหารคลังสินค้าอัตโนมัติและห่วงโซ่อุปทาน ยินดีช่วยเหลือคำปรึกษาการทำโครงงาน IE และการฝึกงานด้านโลจิสติกส์",
    responseTime: "ภายใน 24 ชั่วโมง",
    rating: 4.7,
    consultationsCount: 19
  },
  {
    id: 7,
    name: "พี่วรปรัชญ์ จิตเจริญ (พี่ปรัชญ์)",
    kuBatch: "KU E77",
    major: "วิศวกรรมเคมี",
    role: "Senior Process Engineer",
    company: "PTT Global Chemical (GC)",
    location: "Rayong (มาบตาพุด)",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    avatarInitials: "วป",
    mentorshipTopics: ["สายงานปิโตรเคมีและโรงกลั่น", "การใช้โปรแกรม Aspen HYSYS", "เตรียมตัวสหกิจศึกษา GC"],
    bio: "วิศวกรกระบวนการประจำโรงงานปิโตรเคมีมาบตาพุด ยินดีให้คำแนะนำน้องๆ วิศวะเคมีเกี่ยวกับชีวิตการทำงานจริงในนิคมอุตสาหกรรม",
    responseTime: "ภายใน 2 วัน",
    rating: 4.9,
    consultationsCount: 31
  },
  {
    id: 8,
    name: "พี่ธนินทร์ สุขประเสริฐ (พี่นิน)",
    kuBatch: "KU E77",
    major: "วิศวกรรมยานยนต์",
    role: "EV Battery System R&D Lead",
    company: "Toyota Motor Thailand",
    location: "Samut Prakan",
    avatarUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    avatarInitials: "ทน",
    mentorshipTopics: ["เทคโนโลยียานยนต์ไฟฟ้า EV", "การทำงานร่วมกับบริษัทญี่ปุ่น", "เตรียมตัวสหกิจศึกษาโตโยต้า"],
    bio: "ทีมวิจัยพัฒนาระบบควบคุมแบตเตอรี่รถยนต์ไฟฟ้า ยินดีต้อนรับน้องๆ ที่หลงใหลในเทคโนโลยียานยนต์และการทำงานมาตรฐานสากล",
    responseTime: "ภายใน 1 วัน",
    rating: 5.0,
    consultationsCount: 40
  }
];

export default function NetworkPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMajorFilter, setSelectedMajorFilter] = useState("ทั้งหมด");
  const [selectedMentor, setSelectedMentor] = useState<AlumniMentor | null>(null);
  const [consultationTopic, setConsultationTopic] = useState("");
  const [consultationMessage, setConsultationMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const majors = [
    "ทั้งหมด",
    "วิศวกรรมคอมพิวเตอร์",
    "วิศวกรรมไฟฟ้า",
    "วิศวกรรมโยธา",
    "วิศวกรรมเครื่องกล",
    "วิศวกรรมยานยนต์",
    "วิศวกรรมอุตสาหการ",
    "วิศวกรรมเคมี",
    "คณาจารย์"
  ];

  const filteredMentors = alumniMentorsData.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.mentorshipTopics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesMajor = selectedMajorFilter === "ทั้งหมด" || m.major === selectedMajorFilter;

    return matchesSearch && matchesMajor;
  });

  const handleSubmitConsultation = () => {
    if (!consultationTopic || !consultationMessage) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedMentor(null);
      setConsultationTopic("");
      setConsultationMessage("");
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            เครือข่ายศิษย์เก่าและที่ปรึกษาสายอาชีพ
          </h1>
          <p className="text-slate-500 mt-1 text-sm">
            ขอรับคำปรึกษา ตรวจเรซูเม่ และจำลองการสัมภาษณ์งานแบบ 1-on-1 โดยตรงจากรุ่นพี่วิศวกรเกษตรศาสตร์
          </p>
        </div>

        <Badge variant="secondary" className="bg-green-50 text-green-700 font-semibold px-3.5 py-1.5 text-xs self-start md:self-auto border border-green-200">
          มีพี่ๆ ศิษย์เก่าพร้อมให้คำปรึกษา {alumniMentorsData.length} ท่าน
        </Badge>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            placeholder="ค้นหาชื่อรุ่นพี่, บริษัท, ตำแหน่งงาน หรือหัวข้อคำปรึกษา..."
            className="pl-10 h-11 border-slate-200 text-sm bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Major Filter Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 pt-1 scrollbar-hide">
        {majors.map((mj) => (
          <Badge
            key={mj}
            variant={mj === selectedMajorFilter ? "default" : "outline"}
            className={`px-3.5 py-1.5 cursor-pointer whitespace-nowrap text-xs font-semibold rounded-lg transition-colors ${
              mj === selectedMajorFilter
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white hover:bg-slate-50 text-slate-600 border-slate-200"
            }`}
            onClick={() => setSelectedMajorFilter(mj)}
          >
            {mj}
          </Badge>
        ))}
      </div>

      <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
        <span>พบที่ปรึกษาตรงตามเงื่อนไข {filteredMentors.length} ท่าน</span>
        <span>ระบบจองคิวคำปรึกษาสำหรับนิสิตวิศวกรรมศาสตร์ มก.</span>
      </div>

      {/* Mentors Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredMentors.map((mentor) => (
          <Card
            key={mentor.id}
            className="shadow-sm border border-slate-200 hover:border-green-400 hover:shadow-md transition-all bg-white rounded-xl overflow-hidden flex flex-col justify-between"
          >
            <CardContent className="p-6 flex-1 flex flex-col justify-between">
              <div>
                {/* Header Info */}
                <div className="flex gap-4 items-start">
                  <Avatar className="w-14 h-14 border-2 border-slate-100 shadow-sm shrink-0">
                    <AvatarImage src={mentor.avatarUrl} alt={mentor.name} className="object-cover" />
                    <AvatarFallback className="bg-slate-900 text-white font-bold text-xs">{mentor.avatarInitials}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-bold text-base text-slate-900 truncate">{mentor.name}</h3>
                      <Badge variant="outline" className="bg-slate-50 text-slate-700 border-slate-200 text-[10px] font-bold shrink-0">
                        {mentor.kuBatch}
                      </Badge>
                    </div>

                    <p className="text-xs font-bold text-green-600 mt-0.5">{mentor.role}</p>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1.5 font-medium">
                      <span className="flex items-center gap-1.5 truncate">
                        <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        {mentor.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        {mentor.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-600 leading-relaxed mt-4 bg-slate-50 p-3 rounded-lg border border-slate-100 font-medium">
                  "{mentor.bio}"
                </p>

                {/* Mentorship Topics Badges */}
                <div className="mt-4 space-y-1.5">
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    หัวข้อที่ยินดีให้คำปรึกษา:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {mentor.mentorshipTopics.map((topic) => (
                      <Badge
                        key={topic}
                        variant="secondary"
                        className="bg-white text-slate-700 text-[11px] font-semibold border border-slate-200 px-2.5 py-0.5"
                      >
                        ⚡ {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span className="text-slate-800">{mentor.rating}</span>
                  </span>
                  <span className="text-slate-400">• ตอบกลับ {mentor.responseTime}</span>
                </div>

                <Button
                  onClick={() => setSelectedMentor(mentor)}
                  size="sm"
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs h-8 px-4 rounded-lg shadow-sm"
                >
                  <MessageSquarePlus className="w-3.5 h-3.5 ml-0" /> นัดหมายขอคำปรึกษา
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Consultation Booking Modal */}
      <Dialog open={!!selectedMentor} onOpenChange={(open) => !open && setSelectedMentor(null)}>
        {selectedMentor && (
          <DialogContent className="sm:max-w-lg bg-white rounded-2xl border border-slate-200 shadow-2xl p-0 overflow-hidden z-[60]">
            <DialogHeader className="bg-slate-900 text-white p-6">
              <div className="flex gap-4 items-center">
                <Avatar className="w-12 h-12 border-2 border-white/20 shadow-sm shrink-0">
                  <AvatarImage src={selectedMentor.avatarUrl} alt={selectedMentor.name} className="object-cover" />
                  <AvatarFallback className="bg-slate-800 text-white font-bold text-xs">{selectedMentor.avatarInitials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <DialogTitle className="text-lg font-extrabold text-white leading-snug">
                      {selectedMentor.name}
                    </DialogTitle>
                    <Badge variant="outline" className="bg-slate-800 text-slate-200 border-slate-700 text-[10px] font-bold">
                      {selectedMentor.kuBatch}
                    </Badge>
                  </div>
                  <span className="text-xs text-slate-300 font-medium block mt-0.5">
                    {selectedMentor.role} • {selectedMentor.company}
                  </span>
                </div>
              </div>
            </DialogHeader>

            <div className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-800 mb-1.5">
                  เลือกหัวข้อที่ต้องการขอคำปรึกษา <span className="text-red-500">*</span>
                </label>
                <select
                  value={consultationTopic}
                  onChange={(e) => setConsultationTopic(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-800 focus:outline-none focus:border-slate-400"
                >
                  <option value="">-- เลือกหัวข้อคำปรึกษา --</option>
                  {selectedMentor.mentorshipTopics.map((tp) => (
                    <option key={tp} value={tp}>
                      {tp}
                    </option>
                  ))}
                  <option value="อื่นๆ">อื่นๆ (ระบุในข้อความ)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1.5">
                  ข้อความสั้นแนะนำตัว และประเด็นที่ต้องการสอบถาม <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={consultationMessage}
                  onChange={(e) => setConsultationMessage(e.target.value)}
                  placeholder="เช่น สวัสดีครับพี่ สวัสดีนิสิตชั้นปีที่ 3 สนใจสมัครตำแหน่ง Software Engineer ที่ Google อยากขอคำแนะนำเรื่องการเตรียมตัวสอบสัมภาษณ์ทางเทคนิคครับ..."
                  className="w-full p-3 rounded-lg border border-slate-200 text-xs text-slate-800 font-medium focus:outline-none focus:border-slate-400"
                />
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 font-medium leading-relaxed">
                💡 ระบบจะทำการแนบลิงก์โปรไฟล์และเรซูเม่ที่คุณกรอกไว้ในระบบ ส่งตรงไปยังอีเมลของพี่ {selectedMentor.name}
              </div>
            </div>

            <DialogFooter className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <Button variant="outline" size="sm" onClick={() => setSelectedMentor(null)} className="text-xs">
                ยกเลิก
              </Button>

              <Button
                onClick={handleSubmitConsultation}
                disabled={!consultationTopic || !consultationMessage || isSubmitted}
                className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-6 h-9 shadow-sm"
              >
                {isSubmitted ? (
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-white" /> ส่งคำขอคำปรึกษาเรียบร้อย!
                  </span>
                ) : (
                  "ส่งคำขอคำปรึกษา"
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
