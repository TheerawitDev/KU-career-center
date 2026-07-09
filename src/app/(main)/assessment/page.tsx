"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { internships, Internship } from "@/data/internships";
import { Building, MapPin, Briefcase, Star, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const questions = [
  {
    title: "ความสนใจในลักษณะงาน",
    description: "เลือกประเภทงานที่คุณรู้สึกสนุกและถนัดที่สุด (เลือกได้มากกว่า 1 ข้อ)",
    type: "checkbox",
    options: [
      { label: "การเขียนโค้ดและพัฒนาโปรแกรมคอมพิวเตอร์", tags: ["software", "code", "frontend", "backend", "web"] },
      { label: "การออกแบบโครงสร้างสิ่งก่อสร้างและอาคาร", tags: ["civil", "construction", "structure", "field"] },
      { label: "การวิเคราะห์ข้อมูลและสร้างปัญญาประดิษฐ์ (AI)", tags: ["data", "analysis", "ai", "machine learning", "python", "research"] },
      { label: "การจัดการระบบคลาวด์และโครงสร้างพื้นฐานไอที", tags: ["cloud", "infrastructure", "network", "devops"] },
      { label: "การทำงานประกอบระบบไฟฟ้ารวมถึงวงจรอิเล็กทรอนิกส์", tags: ["electrical", "power", "hardware"] }
    ]
  },
  {
    title: "สภาพแวดล้อมการทำงานที่ชอบ",
    description: "คุณชื่นชอบการทำงานในบรรยากาศและสภาพแวดล้อมแบบไหน?",
    type: "radio",
    options: [
      { label: "ทำงานในออฟฟิศ หรือบริษัทเทคโนโลยียุคใหม่", tags: ["software", "data", "cloud", "analysis"] },
      { label: "ลงพื้นที่จริง หน้างานกลางแจ้ง หรือคุมโปรเจกต์ก่อสร้าง", tags: ["civil", "field", "electrical", "construction"] },
      { label: "ทำงานจากที่บ้าน (Remote Work)", tags: ["software", "cloud", "web"] },
      { label: "ทำงานวิจัย ค้นคว้า และทดลองในห้องแล็บปิด", tags: ["research", "data", "ai"] }
    ]
  },
  {
    title: "เครื่องมือหรือทักษะที่ถนัดที่สุด",
    description: "ทักษะพื้นฐานและเครื่องมือชิ้นไหนที่คุณถนัดใช้งานมากที่สุด?",
    type: "radio",
    options: [
      { label: "React, Node.js หรือเฟรมเวิร์กพัฒนาเว็บแอปพลิเคชัน", tags: ["software", "frontend", "backend", "web"] },
      { label: "Python, SQL, DataFrame หรือไลบรารีคณิตศาสตร์", tags: ["data", "python", "analysis", "machine learning"] },
      { label: "AutoCAD, โปรแกรมคำนวณโครงสร้างกลศาสตร์", tags: ["civil", "structure", "autoCAD"] },
      { label: "PLC, การออกแบบวงจรไฟฟ้า", tags: ["electrical", "power", "hardware"] },
      { label: "AWS, Docker, Linux, หรือระบบเครือข่าย", tags: ["cloud", "infrastructure", "devops", "network"] }
    ]
  }
];

export default function AssessmentPage() {
  const [step, setStep] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  // Temporary state for the current step
  const [currentStepSelections, setCurrentStepSelections] = useState<string[]>([]);

  const totalSteps = questions.length + 1; // Start screen + questions + result

  const handleNext = () => {
    // Add current selections to the global tags pool
    if (step > 0 && step <= questions.length) {
      setSelectedTags(prev => [...prev, ...currentStepSelections]);
    }
    setCurrentStepSelections([]);
    setStep(prev => prev + 1);
  };

  const handleOptionToggle = (tags: string[], type: string) => {
    if (type === "radio") {
      setCurrentStepSelections(tags);
    } else {
      // For checkbox, we toggle tags. This is a bit simplified, normally we'd track selections by index, 
      // but adding/removing tags directly works for this demo.
      const hasAllTags = tags.every(t => currentStepSelections.includes(t));
      if (hasAllTags) {
        setCurrentStepSelections(prev => prev.filter(t => !tags.includes(t)));
      } else {
        setCurrentStepSelections(prev => [...prev, ...tags]);
      }
    }
  };

  // Result calculation
  let matchedInternships: Internship[] = [];
  let primaryRole = "";
  let primaryDesc = "";

  if (step === totalSteps) {
    // Calculate scores
    const scoredInternships = internships.map(job => {
      const matchCount = job.matchTags.filter(tag => selectedTags.includes(tag)).length;
      return { ...job, score: matchCount };
    });

    // Sort by score and take top 3
    matchedInternships = scoredInternships
      .filter(job => job.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    // Determine primary role based on top matching tags
    const topTag = selectedTags.sort((a,b) =>
          selectedTags.filter(v => v===a).length
        - selectedTags.filter(v => v===b).length
    ).pop() || "";

    if (topTag === "software" || topTag === "web" || topTag === "frontend" || topTag === "code") {
      primaryRole = "วิศวกรซอฟต์แวร์ (Software Engineer)";
      primaryDesc = "คุณมีทักษะในการเขียนโปรแกรมและการคิดอย่างเป็นระบบ เหมาะสมอย่างยิ่งกับการพัฒนาแอปพลิเคชันและซอฟต์แวร์ที่สร้างอิมแพคได้ทันที";
    } else if (topTag === "data" || topTag === "analysis" || topTag === "ai") {
      primaryRole = "วิศวกรข้อมูล / นักวิเคราะห์ข้อมูล (Data / AI Engineer)";
      primaryDesc = "คุณชื่นชอบการทำงานกับตัวเลขและการค้นหาความจริงจากข้อมูล อาชีพนี้กำลังเป็นที่ต้องการสูงมากในตลาดยุคดิจิทัล";
    } else if (topTag === "civil" || topTag === "construction" || topTag === "field") {
      primaryRole = "วิศวกรโยธา (Civil Engineer)";
      primaryDesc = "คุณชอบการออกแบบเชิงโครงสร้างและการลงพื้นที่ปฏิบัติงานจริง เหมาะสมกับการทำงานในโครงการก่อสร้างและโครงสร้างพื้นฐาน";
    } else if (topTag === "cloud" || topTag === "infrastructure" || topTag === "devops") {
      primaryRole = "วิศวกรระบบคลาวด์ (Cloud/DevOps Engineer)";
      primaryDesc = "คุณมีความสนใจในการวางระบบเครือข่ายและเทคโนโลยีเบื้องหลังที่ทำให้ซอฟต์แวร์ทำงานได้อย่างราบรื่นและเสถียร";
    } else {
      primaryRole = "วิศวกรไฟฟ้า / ฮาร์ดแวร์ (Electrical Engineer)";
      primaryDesc = "คุณมีความเชี่ยวชาญในการจัดการระบบวงจร พลังงาน และฮาร์ดแวร์ต่างๆ ซึ่งเป็นรากฐานสำคัญของระบบอุตสาหกรรม";
    }
  }

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto pb-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">แบบประเมินทักษะและความสนใจ</h1>
        <p className="text-slate-500 mt-2">ค้นหาสายงานวิศวกรรมที่เหมาะสมกับบุคลิกภาพ พร้อมแมตช์ที่ฝึกงานทันที</p>
      </div>

      {step > 0 && step < totalSteps && (
        <div className="flex items-center gap-4 mb-2 animate-in fade-in max-w-3xl mx-auto w-full">
          <Progress value={(step / (totalSteps - 1)) * 100} className="h-2.5 bg-slate-100 [&>div]:bg-slate-900" />
          <span className="text-sm font-semibold text-slate-500 whitespace-nowrap">ขั้นตอนที่ {step} จาก {totalSteps - 1}</span>
        </div>
      )}

      {/* Step 0: Welcome / Start Screen */}
      {step === 0 && (
        <Card className="max-w-3xl mx-auto border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white animate-in fade-in slide-in-from-bottom-4 duration-500 w-full">
          <CardHeader className="text-center pb-2 pt-10">
            <CardTitle className="text-2xl font-bold text-slate-800">ค้นพบสายงานวิศวกรรมที่ใช่สำหรับคุณ</CardTitle>
            <CardDescription className="text-base mt-2">
              ทำแบบประเมินของเราเพื่อจับคู่ความสนใจ ทักษะ และลักษณะการทำงานของคุณ เข้ากับสายอาชีพและตำแหน่งฝึกงานจริงๆ
            </CardDescription>
          </CardHeader>
          <CardContent className="py-8">
            <div className="grid gap-6 max-w-md mx-auto">
              <div className="flex items-start gap-4">
                <span className="text-xl font-bold text-slate-400 mt-0.5">01</span>
                <div className="text-left">
                  <h4 className="font-semibold text-slate-800">วิเคราะห์ทักษะเฉพาะทาง</h4>
                  <p className="text-sm text-slate-500">ตอบคำถามสั้นๆ เกี่ยวกับสิ่งที่คุณทำได้ดีที่สุด</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-slate-100 pt-6">
                <span className="text-xl font-bold text-slate-400 mt-0.5">02</span>
                <div className="text-left">
                  <h4 className="font-semibold text-slate-800">ประมวลผลด้วย AI Matcher</h4>
                  <p className="text-sm text-slate-500">ระบบจะนำคำตอบไปเทียบกับฐานข้อมูลทักษะกว่า 100+ แบบ</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-slate-100 pt-6">
                <span className="text-xl font-bold text-slate-400 mt-0.5">03</span>
                <div className="text-left">
                  <h4 className="font-semibold text-slate-800">รับคำแนะนำตำแหน่งฝึกงาน</h4>
                  <p className="text-sm text-slate-500">ดูรายชื่อบริษัทที่กำลังเปิดรับสมัครและตรงกับคุณที่สุด</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center pt-2 pb-10">
            <Button onClick={handleNext} size="lg" className="w-full max-w-md rounded-full bg-slate-900 hover:bg-slate-800 text-white h-12 text-base font-semibold shadow-md hover:shadow-lg transition-all">
              เริ่มทำแบบประเมิน
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* Questions Steps */}
      {step > 0 && step < totalSteps && (() => {
        const qIndex = step - 1;
        const q = questions[qIndex];
        return (
          <Card className="max-w-3xl mx-auto w-full border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white animate-in fade-in slide-in-from-bottom-4">
            <CardHeader>
              <CardTitle className="text-xl">{q.title}</CardTitle>
              <CardDescription className="text-sm">{q.description}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {q.options.map((option, i) => {
                const isSelected = option.tags.every(t => currentStepSelections.includes(t));
                return (
                  <label key={i} className="flex items-start gap-3 p-4 border border-slate-100 rounded-xl cursor-pointer hover:bg-slate-50 [&:has(:checked)]:border-slate-900 [&:has(:checked)]:bg-slate-50 transition-all">
                    <input 
                      type={q.type} 
                      name={`question_${step}`} 
                      className="mt-1 w-4 h-4 text-slate-900 border-slate-300 focus:ring-slate-900" 
                      checked={isSelected}
                      onChange={() => handleOptionToggle(option.tags, q.type)}
                    />
                    <span className="text-slate-700 font-semibold text-sm">{option.label}</span>
                  </label>
                );
              })}
            </CardContent>
            <CardFooter className="flex justify-between border-t border-slate-50 pt-6">
              <Button variant="ghost" onClick={() => { setStep(prev => prev - 1); setCurrentStepSelections([]); }} className="text-slate-500">ย้อนกลับ</Button>
              <Button 
                onClick={handleNext} 
                className="bg-slate-900 hover:bg-slate-800 text-white px-8"
                disabled={currentStepSelections.length === 0}
              >
                {step === totalSteps - 1 ? 'ดูผลลัพธ์' : 'ถัดไป'}
              </Button>
            </CardFooter>
          </Card>
        );
      })()}

      {/* Step 4: Final Result with Matches */}
      {step === totalSteps && (
        <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 w-full">
          <Card className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white">
            <CardHeader className="text-center pb-2 pt-10">
              <CardTitle className="text-2xl font-bold">ประมวลผลเสร็จสิ้น!</CardTitle>
              <CardDescription className="text-base mt-2">
                จากสิ่งที่คุณเลือก นี่คือสายอาชีพที่สะท้อนทักษะของคุณได้ดีที่สุด
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center py-6">
              <div className="border border-green-200 rounded-3xl p-8 max-w-2xl mx-auto bg-green-50/50 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Star className="w-24 h-24 text-green-600" />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4">{primaryRole}</h3>
                <p className="text-slate-700 leading-relaxed text-lg z-10 relative">
                  {primaryDesc}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between mt-4 px-2">
            <h2 className="text-xl font-bold text-slate-900">ที่ฝึกงานและสหกิจศึกษาที่แมตช์กับคุณ</h2>
            <Link href="/internships" className="text-sm font-semibold text-green-600 hover:text-green-700 flex items-center gap-1">
              ดูทั้งหมด <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {matchedInternships.length > 0 ? matchedInternships.map((job) => (
              <Link href="/internships" key={job.id}>
                <Card className="shadow-sm border-slate-200 hover:border-green-400 hover:shadow-md transition-all cursor-pointer group h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-5">
                      <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center text-xl font-bold text-slate-500 shrink-0 border border-slate-200 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                        {job.logo}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start gap-2 mb-1">
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-green-600 transition-colors line-clamp-2">
                            {job.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                          <Building className="w-4 h-4" />
                          <span className="font-medium truncate">{job.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5" />
                            {job.type}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                          {job.tags.slice(0, 3).map(tag => (
                            <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-600 text-[10px] font-medium border-none">
                              {tag}
                            </Badge>
                          ))}
                          {job.tags.length > 3 && (
                            <Badge variant="secondary" className="bg-slate-50 text-slate-400 text-[10px] border-none">
                              +{job.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )) : (
              <div className="col-span-2 text-center py-10 text-slate-500 bg-white rounded-xl border border-dashed border-slate-200">
                ยังไม่มีที่ฝึกงานที่แมตช์กับโปรไฟล์ของคุณในขณะนี้
              </div>
            )}
          </div>
          
          <div className="flex justify-center mt-6">
            <Button variant="outline" onClick={() => { setStep(0); setSelectedTags([]); }} className="text-slate-500">
              ทำแบบประเมินอีกครั้ง
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
