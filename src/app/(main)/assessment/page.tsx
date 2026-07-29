"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { internships, Internship } from "@/data/internships";
import { diagnosticQuestions, calculateFateDiagnostic, DiagnosticResult } from "@/data/assessment-questions";
import {
  Building,
  MapPin,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Compass,
  CheckCircle2,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Check
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AssessmentPage() {
  const [step, setStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [activeModule, setActiveModule] = useState(1);

  const totalQuestions = diagnosticQuestions.length; // 50 Questions
  const totalSteps = totalQuestions + 1; // 0 = welcome, 1..50 = questions, 51 = result

  const handleSelectOption = (questionId: number, optionId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const handleNext = () => {
    setStep((prev) => {
      const nextStep = prev + 1;
      if (nextStep >= 1 && nextStep <= 50) {
        const q = diagnosticQuestions[nextStep - 1];
        if (q) setActiveModule(q.moduleIndex);
      }
      return nextStep;
    });
  };

  const handlePrev = () => {
    setStep((prev) => {
      const prevStep = Math.max(0, prev - 1);
      if (prevStep >= 1 && prevStep <= 50) {
        const q = diagnosticQuestions[prevStep - 1];
        if (q) setActiveModule(q.moduleIndex);
      }
      return prevStep;
    });
  };

  const handleJumpToModule = (modIdx: number) => {
    setActiveModule(modIdx);
    const qIndex = diagnosticQuestions.findIndex((q) => q.moduleIndex === modIdx);
    if (qIndex !== -1) {
      setStep(qIndex + 1);
    }
  };

  const handleReset = () => {
    setStep(0);
    setSelectedAnswers({});
    setActiveModule(1);
  };

  const answeredCount = Object.keys(selectedAnswers).length;

  // Compute final diagnostic result
  const isFinished = step === totalSteps;
  let diagnosticResult: DiagnosticResult | null = null;
  let matchedJobs: Internship[] = [];

  if (isFinished) {
    const selectedIds = Object.values(selectedAnswers);
    diagnosticResult = calculateFateDiagnostic(selectedIds);

    const cat = diagnosticResult.primaryCategory;
    matchedJobs = internships.filter((job) => {
      if (cat.includes("คอมพิวเตอร์") || cat.includes("ซอฟต์แวร์")) {
        return job.matchTags.some((t) => ["software", "code", "frontend", "backend", "web"].includes(t));
      } else if (cat.includes("ข้อมูล") || cat.includes("ปัญญาประดิษฐ์")) {
        return job.matchTags.some((t) => ["data", "analysis", "ai", "machine learning", "python", "research"].includes(t));
      } else if (cat.includes("โยธา")) {
        return job.matchTags.some((t) => ["civil", "construction", "field", "structure"].includes(t));
      } else if (cat.includes("หุ่นยนต์") || cat.includes("ไฟฟ้า") || cat.includes("เครื่องกล")) {
        return job.matchTags.some((t) => ["electrical", "power", "hardware"].includes(t));
      }
      return true;
    });

    if (matchedJobs.length === 0) {
      matchedJobs = internships.slice(0, 3);
    }
  }

  const moduleTitles = [
    "1. ตรรกะ & อัลกอริทึม",
    "2. คณิตศาสตร์ & ข้อมูล",
    "3. ฮาร์ดแวร์ & ฟิสิกส์",
    "4. การบริหาร & คุณภาพ",
    "5. จริยธรรม & ผู้นำ"
  ];

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto pb-16">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          ประเมินสมรรถนะและทักษะทางวิศวกรรม
        </h1>
        <p className="text-slate-500 mt-2 text-sm max-w-xl mx-auto">
          แบบประเมิน 5 หมวดวิศวกรรม เพื่อค้นหาสายอาชีพและตำแหน่งงานฝึกงานที่เหมาะสมกับคุณที่สุด
        </p>
      </div>

      {/* Progress Bar & Module Tabs for Active Questions */}
      {step > 0 && step <= totalQuestions && (
        <div className="space-y-3 max-w-3xl mx-auto w-full">
          {/* Module Selector Tabs */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
            {moduleTitles.map((modTitle, idx) => {
              const modIdx = idx + 1;
              const isCurrentMod = activeModule === modIdx;

              return (
                <button
                  key={modIdx}
                  onClick={() => handleJumpToModule(modIdx)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border",
                    isCurrentMod
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                  )}
                >
                  {modTitle}
                </button>
              );
            })}
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-between gap-4 text-xs font-semibold text-slate-600 bg-white p-3 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2">
              <span className="text-slate-900 font-bold">ความคืบหน้ารวม:</span>
              <span className="text-green-600 font-extrabold">{answeredCount} / {totalQuestions} ข้อ</span>
            </div>

            <div className="flex items-center gap-3">
              <Progress value={(answeredCount / totalQuestions) * 100} className="w-28 md:w-44 h-2 bg-slate-100 [&>div]:bg-green-600" />
              {answeredCount >= 20 && (
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold h-7 px-3 rounded-lg"
                  onClick={() => setStep(totalSteps)}
                >
                  สรุปผลประเมิน
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* STEP 0: Welcome Screen */}
      {step === 0 && (
        <Card className="max-w-3xl mx-auto border border-slate-200 shadow-sm bg-white w-full rounded-2xl overflow-hidden">
          <CardHeader className="text-center pb-4 pt-8 border-b border-slate-100 bg-white">
            <CardTitle className="text-2xl font-bold text-slate-900">
              แบบประเมินทักษะและสมรรถนะวิศวกรรม
            </CardTitle>
            <CardDescription className="text-slate-500 text-sm mt-1 max-w-lg mx-auto">
              วิเคราะห์ความถนัดเชิงลึกผ่านการจำลองสถานการณ์วิศวกรรมจริง 5 หมวดสมรรถนะ
            </CardDescription>
          </CardHeader>

          <CardContent className="py-6 px-6 md:px-10 space-y-3">
            <div className="space-y-2.5">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">หมวดตรรกะเชิงระบบและอัลกอริทึม</h4>
                  <p className="text-xs text-slate-500">วิเคราะห์การแก้ปัญหาระบบและโครงสร้างโค้ด</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">หมวดคณิตศาสตร์ ข้อมูล และสถิติ</h4>
                  <p className="text-xs text-slate-500">ประเมินสถิติ โมเดล AI และการประมวลผลข้อมูล</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">หมวดฮาร์ดแวร์ ฟิสิกส์ และกลศาสตร์</h4>
                  <p className="text-xs text-slate-500">ประเมินวงจรไฟฟ้า กลศาสตร์คำนวณ และวัสดุศาสตร์</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">4</span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">หมวดการบริหารกระบวนการ และคุณภาพ</h4>
                  <p className="text-xs text-slate-500">วิเคราะห์ Lean Six Sigma และการบริหารโครงการ</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">5</span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">หมวดจริยธรรมวิศวกรรม และผู้นำยั่งยืน</h4>
                  <p className="text-xs text-slate-500">วิเคราะห์ภาวะผู้นำ จริยธรรมวิชาชีพ และ Net-Zero ESG</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed font-medium">
              💡 <strong>คำแนะนำ:</strong> เลือกคำตอบที่สะท้อนทักษะและความสนใจจริงของคุณ คุณสามารถกดสรุปผลประเมินล่วงหน้าได้ตลอดเวลาเมื่อตอบครบ 20 ข้อขึ้นไป
            </div>
          </CardContent>

          <CardFooter className="flex justify-center pb-8 pt-2">
            <Button
              onClick={handleNext}
              size="lg"
              className="w-full max-w-md rounded-full bg-green-600 hover:bg-green-700 text-white h-12 text-base font-bold shadow-sm transition-all"
            >
              เริ่มทำแบบประเมิน <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* STEP 1..50: Question Screen */}
      {step > 0 && step <= totalQuestions && (() => {
        const q = diagnosticQuestions[step - 1];
        const currentSelectedId = selectedAnswers[q.id];

        return (
          <Card className="max-w-3xl mx-auto w-full border border-slate-200 shadow-sm bg-white rounded-2xl overflow-hidden">
            <CardHeader className="border-b border-slate-100 bg-white p-5 md:p-6">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  {q.section}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  ข้อ {step} / 50
                </span>
              </div>

              <CardTitle className="text-base md:text-lg font-bold text-slate-900 leading-snug">
                {q.title}
              </CardTitle>
              <CardDescription className="text-xs text-slate-500 mt-1">
                {q.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="p-5 md:p-6 grid gap-3">
              {q.options.map((option) => {
                const isSelected = currentSelectedId === option.id;

                return (
                  <div
                    key={option.id}
                    onClick={() => handleSelectOption(q.id, option.id)}
                    className={cn(
                      "p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3.5",
                      isSelected
                        ? "border-green-600 bg-green-50/40 shadow-sm"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 bg-white"
                    )}
                  >
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors",
                        isSelected ? "border-green-600 bg-green-600 text-white" : "border-slate-300 bg-white"
                      )}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </div>

                    <div className="flex-1">
                      <h4 className={cn("font-bold text-sm leading-snug", isSelected ? "text-slate-900" : "text-slate-800")}>
                        {option.label}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {option.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </CardContent>

            <CardFooter className="flex justify-between border-t border-slate-100 p-5 md:p-6 bg-white">
              <Button variant="outline" onClick={handlePrev} className="text-slate-600 border-slate-200 text-xs font-semibold">
                <ChevronLeft className="w-4 h-4 mr-1" /> ข้อก่อนหน้า
              </Button>

              <div className="flex gap-2">
                {step === totalQuestions ? (
                  <Button
                    onClick={handleNext}
                    disabled={answeredCount < 5}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 shadow-sm text-xs"
                  >
                    สรุปผลการประเมิน
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 shadow-sm text-xs"
                  >
                    ข้อถัดไป <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        );
      })()}

      {/* FINAL STEP: Competency Report */}
      {isFinished && diagnosticResult && (
        <div className="flex flex-col gap-6 w-full">
          {/* Main Report Card */}
          <Card className="border border-slate-200 shadow-sm bg-white rounded-2xl overflow-hidden">
            <CardHeader className="p-8 text-center border-b border-slate-100 bg-white">
              <Badge className="bg-green-100 text-green-800 font-semibold text-xs px-3 py-1 mb-3 self-center border-none">
                คะแนนความเหมาะสม: {diagnosticResult.matchScore}% Match Index
              </Badge>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-1">
                {diagnosticResult.primaryRoleTitle}
              </h2>
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider block">
                สายงานหลัก: <strong className="text-slate-800">{diagnosticResult.primaryCategory}</strong> (ประเมินจาก {answeredCount} ข้อ)
              </span>
            </CardHeader>

            <CardContent className="p-6 md:p-8 space-y-8">
              {/* Detailed Description */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">ผลวิเคราะห์สมรรถนะรายบุคคล</h4>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {diagnosticResult.description}
                </p>
              </div>

              {/* 4 Competency Bars */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">คะแนนสมรรถนะ 4 มิติทางวิศวกรรม (Competency Matrix)</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-800">1. System Logic & Architecture</span>
                      <span className="text-green-600">{diagnosticResult.radarScores.systemLogic} / 99</span>
                    </div>
                    <Progress value={diagnosticResult.radarScores.systemLogic} className="h-2 bg-slate-100 [&>div]:bg-green-600" />
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-800">2. Quantitative & Math Reasoning</span>
                      <span className="text-green-600">{diagnosticResult.radarScores.quantitative} / 99</span>
                    </div>
                    <Progress value={diagnosticResult.radarScores.quantitative} className="h-2 bg-slate-100 [&>div]:bg-green-600" />
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-800">3. Hardware & Physical Systems Integration</span>
                      <span className="text-green-600">{diagnosticResult.radarScores.hardwarePhysics} / 99</span>
                    </div>
                    <Progress value={diagnosticResult.radarScores.hardwarePhysics} className="h-2 bg-slate-100 [&>div]:bg-green-600" />
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-800">4. Operations & Process Efficiency</span>
                      <span className="text-green-600">{diagnosticResult.radarScores.operationsMgmt} / 99</span>
                    </div>
                    <Progress value={diagnosticResult.radarScores.operationsMgmt} className="h-2 bg-slate-100 [&>div]:bg-green-600" />
                  </div>
                </div>
              </div>

              {/* Recommended Upskilling Skills */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">ทักษะที่แนะนำให้พัฒนาเพิ่มเติม (Recommended Upskill Roadmap)</h4>
                <div className="flex flex-wrap gap-2">
                  {diagnosticResult.recommendedSkills.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-slate-50 text-slate-800 text-xs px-3 py-1 font-semibold border-slate-200">
                      ⚡ {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Career Growth Milestones */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">เส้นทางเติบโตในสายอาชีพ (Career Progression Roadmap)</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {diagnosticResult.careerMilestones.map((stepName, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold inline-flex items-center justify-center mb-1">
                        {idx + 1}
                      </span>
                      <span className="block text-xs font-bold text-slate-800 truncate">{stepName}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Matched Internship Positions */}
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-lg font-bold text-slate-900">ตำแหน่งฝึกงานและสหกิจศึกษาที่แมตช์กับคุณ</h3>
            <Link href="/internships" className="text-xs font-semibold text-green-600 hover:text-green-700 flex items-center gap-1">
              ดูตำแหน่งงานทั้งหมด <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {matchedJobs.map((job) => (
              <Link href="/internships" key={job.id}>
                <Card className="shadow-sm border border-slate-200 hover:border-green-400 hover:shadow-md transition-all cursor-pointer group h-full bg-white rounded-xl">
                  <CardContent className="p-5">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-xl font-bold text-slate-600 shrink-0 border border-slate-200 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                        {job.logo}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-green-600 transition-colors truncate">
                          {job.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                          <Building className="w-3.5 h-3.5" />
                          <span className="truncate">{job.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400 mt-2">
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                          <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{job.type}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Reset Button */}
          <div className="flex justify-center mt-6">
            <Button variant="outline" onClick={handleReset} className="text-slate-600 border-slate-200">
              ทำแบบประเมินอีกครั้ง
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
