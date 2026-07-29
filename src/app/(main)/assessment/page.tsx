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
  Star,
  ArrowRight,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Compass,
  CheckCircle2,
  TrendingUp,
  Sparkles
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AssessmentPage() {
  const [step, setStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

  const totalQuestions = diagnosticQuestions.length;
  const totalSteps = totalQuestions + 1; // 0 = welcome, 1..5 = questions, 6 = result

  const handleSelectOption = (questionId: number, optionId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(0, prev - 1));
  };

  const handleReset = () => {
    setStep(0);
    setSelectedAnswers({});
  };

  // Compute final diagnostic result
  const isFinished = step === totalSteps;
  let diagnosticResult: DiagnosticResult | null = null;
  let matchedJobs: Internship[] = [];

  if (isFinished) {
    const selectedIds = Object.values(selectedAnswers);
    diagnosticResult = calculateFateDiagnostic(selectedIds);

    // Filter matched internships by matchTags
    const cat = diagnosticResult.primaryCategory;
    matchedJobs = internships.filter((job) => {
      if (cat.includes("คอมพิวเตอร์") || cat.includes("ซอฟต์แวร์")) {
        return job.matchTags.some(t => ["software", "code", "frontend", "backend", "web"].includes(t));
      } else if (cat.includes("ข้อมูล") || cat.includes("ปัญญาประดิษฐ์")) {
        return job.matchTags.some(t => ["data", "analysis", "ai", "machine learning", "python", "research"].includes(t));
      } else if (cat.includes("โยธา")) {
        return job.matchTags.some(t => ["civil", "construction", "field", "structure"].includes(t));
      } else if (cat.includes("หุ่นยนต์") || cat.includes("ไฟฟ้า") || cat.includes("เครื่องกล")) {
        return job.matchTags.some(t => ["electrical", "power", "hardware"].includes(t));
      }
      return true;
    });

    if (matchedJobs.length === 0) {
      matchedJobs = internships.slice(0, 3);
    }
  }

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto pb-16">
      {/* Page Title */}
      <div className="text-center">
        <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-200 text-xs px-3 py-1 font-semibold mb-2">
          KU Engineering Fate Diagnostic System 2026
        </Badge>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          แบบประเมินวินิจฉัยทิศทางอาชีพวิศวกรรมศาสตร์
        </h1>
        <p className="text-slate-500 mt-2 text-sm md:text-base max-w-2xl mx-auto">
          ประเมินสมรรถนะ 4 ด้าน (Competency Matrix) เพื่อกำหนดเส้นทางเติบโตและแมตช์ตำแหน่งงานฝึกงานที่เหมาะสมกับคุณที่สุด
        </p>
      </div>

      {/* Progress Bar for Questions */}
      {step > 0 && step <= totalQuestions && (
        <div className="flex items-center gap-4 animate-in fade-in max-w-2xl mx-auto w-full">
          <Progress value={(step / totalQuestions) * 100} className="h-2.5 bg-slate-100 [&>div]:bg-slate-900" />
          <span className="text-xs font-bold text-slate-600 whitespace-nowrap">
            ข้อที่ {step} / {totalQuestions}
          </span>
        </div>
      )}

      {/* STEP 0: Welcome Screen */}
      {step === 0 && (
        <Card className="max-w-3xl mx-auto border-slate-200 shadow-sm bg-white animate-in fade-in slide-in-from-bottom-4 duration-500 w-full rounded-2xl overflow-hidden">
          <CardHeader className="text-center pb-4 pt-8 bg-slate-900 text-white">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 text-green-400 border border-green-400/30 flex items-center justify-center mx-auto mb-3">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <CardTitle className="text-2xl font-bold text-white">
              ระบบวินิจฉัยสมรรถนะวิศวกรรมเชิงลึก
            </CardTitle>
            <CardDescription className="text-slate-300 text-sm mt-1 max-w-lg mx-auto">
              แบบทดสอบจำลองสถานการณ์และกระบวนการคิดจริง 5 ส่วน เพื่อประมวลผลดัชนีชี้วัดความถนัด 4 มิติ
            </CardDescription>
          </CardHeader>

          <CardContent className="py-8 px-6 md:px-10">
            <div className="grid gap-4 md:grid-cols-2 mb-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <Cpu className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">1. System Logic & Architecture</h4>
                  <p className="text-xs text-slate-500 mt-0.5">การวิเคราะห์ตรรกะเชิงระบบและสถาปัตยกรรมดิจิทัล</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">2. Quantitative & Math Reasoning</h4>
                  <p className="text-xs text-slate-500 mt-0.5">การวิเคราะห์ข้อมูลเชิงตัวเลข สถิติ และแบบจำลอง</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">3. Hardware & Physical Integration</h4>
                  <p className="text-xs text-slate-500 mt-0.5">การประยุกต์ฮาร์ดแวร์ อุปกรณ์ และกลศาสตร์กายภาพ</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <Compass className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">4. Operations & Process Efficiency</h4>
                  <p className="text-xs text-slate-500 mt-0.5">การบริหารจัดการกระบวนการ และขจัดความสูญเสีย</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-xs text-green-800 leading-relaxed font-medium">
              💡 <strong>คำแนะนำ:</strong> แบบประเมินนี้ใช้เวลาประมาณ 3 นาที โปรดตอบคำถามตามสัญชาตญาณและการตัดสินใจจริงของคุณเพื่อผลลัพธ์ที่แม่นยำที่สุด
            </div>
          </CardContent>

          <CardFooter className="flex justify-center pb-8 pt-2">
            <Button
              onClick={handleNext}
              size="lg"
              className="w-full max-w-md rounded-full bg-green-600 hover:bg-green-700 text-white h-12 text-base font-bold shadow-md hover:shadow-lg transition-all"
            >
              เริ่มการวินิจฉัยสายอาชีพ <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* STEP 1..5: Questions Steps */}
      {step > 0 && step <= totalQuestions && (() => {
        const q = diagnosticQuestions[step - 1];
        const currentSelectedId = selectedAnswers[q.id];

        return (
          <Card className="max-w-3xl mx-auto w-full border-slate-200 shadow-sm bg-white animate-in fade-in slide-in-from-bottom-4 rounded-2xl overflow-hidden">
            <CardHeader className="border-b border-slate-100 bg-slate-50/50 pb-4">
              <span className="text-xs font-bold text-green-700 uppercase tracking-wider block mb-1">
                {q.section}
              </span>
              <CardTitle className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                {q.title}
              </CardTitle>
              <CardDescription className="text-xs text-slate-500 mt-1">
                {q.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="p-6 grid gap-3">
              {q.options.map((option) => {
                const isSelected = currentSelectedId === option.id;

                return (
                  <div
                    key={option.id}
                    onClick={() => handleSelectOption(q.id, option.id)}
                    className={cn(
                      "p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3.5",
                      isSelected
                        ? "border-green-600 bg-green-50/50 shadow-sm"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 bg-white"
                    )}
                  >
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors",
                        isSelected ? "border-green-600 bg-green-600 text-white" : "border-slate-300 bg-white"
                      )}
                    >
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>

                    <div className="flex-1">
                      <h4 className={cn("font-bold text-sm leading-snug", isSelected ? "text-green-900" : "text-slate-800")}>
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

            <CardFooter className="flex justify-between border-t border-slate-100 p-6">
              <Button variant="outline" onClick={handlePrev} className="text-slate-600 border-slate-200">
                ย้อนกลับ
              </Button>

              <Button
                onClick={handleNext}
                disabled={!currentSelectedId}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 shadow-sm"
              >
                {step === totalQuestions ? "สรุปผลการวินิจฉัย" : "ข้อถัดไป"}
              </Button>
            </CardFooter>
          </Card>
        );
      })()}

      {/* FINAL STEP: Fate & Competency Report */}
      {isFinished && diagnosticResult && (
        <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 w-full">
          {/* Main Hero Report Card */}
          <Card className="border-slate-200 shadow-md bg-white rounded-2xl overflow-hidden">
            <div className="bg-slate-900 text-white p-8 text-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 opacity-10">
                <Sparkles className="w-48 h-48 text-green-400" />
              </div>
              <Badge className="bg-green-600 text-white font-bold text-xs px-3 py-1 mb-3">
                ผลการวินิจฉัยระดับสูงสุด: {diagnosticResult.matchScore}% Affinity Match
              </Badge>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                {diagnosticResult.primaryRoleTitle}
              </h2>
              <span className="text-xs text-green-400 font-semibold tracking-wider uppercase block">
                สาขาหลัก: {diagnosticResult.primaryCategory}
              </span>
            </div>

            <CardContent className="p-6 md:p-8 space-y-8">
              {/* Detailed Description */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">บทวิเคราะห์สมรรถนะรายบุคคล</h4>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {diagnosticResult.description}
                </p>
              </div>

              {/* 4 Radar Competency Bars */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">คะแนนสมรรถนะ 4 มิติทางวิศวกรรม (Competency Breakdown)</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-800">1. System Logic & Architecture</span>
                      <span className="text-green-600">{diagnosticResult.radarScores.systemLogic} / 100</span>
                    </div>
                    <Progress value={diagnosticResult.radarScores.systemLogic} className="h-2 bg-slate-100 [&>div]:bg-green-600" />
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-800">2. Quantitative & Math Reasoning</span>
                      <span className="text-green-600">{diagnosticResult.radarScores.quantitative} / 100</span>
                    </div>
                    <Progress value={diagnosticResult.radarScores.quantitative} className="h-2 bg-slate-100 [&>div]:bg-green-600" />
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-800">3. Hardware & Physical Systems Integration</span>
                      <span className="text-green-600">{diagnosticResult.radarScores.hardwarePhysics} / 100</span>
                    </div>
                    <Progress value={diagnosticResult.radarScores.hardwarePhysics} className="h-2 bg-slate-100 [&>div]:bg-green-600" />
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-800">4. Operations & Process Efficiency</span>
                      <span className="text-green-600">{diagnosticResult.radarScores.operationsMgmt} / 100</span>
                    </div>
                    <Progress value={diagnosticResult.radarScores.operationsMgmt} className="h-2 bg-slate-100 [&>div]:bg-green-600" />
                  </div>
                </div>
              </div>

              {/* Recommended Upskilling Skills */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">ทักษะสำคัญที่แนะนำให้เรียนรู้เพิ่มเติม (Recommended Upskill Roadmap)</h4>
                <div className="flex flex-wrap gap-2">
                  {diagnosticResult.recommendedSkills.map((skill) => (
                    <span key={skill} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-green-50 text-green-800 border border-green-200">
                      ⚡ {skill}
                    </span>
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
            <h3 className="text-lg font-bold text-slate-900">ตำแหน่งฝึกงานและสหกิจที่แมตช์กับคะแนนของคุณ</h3>
            <Link href="/internships" className="text-xs font-semibold text-green-600 hover:text-green-700 flex items-center gap-1">
              ดูตำแหน่งงานทั้งหมด <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {matchedJobs.map((job) => (
              <Link href="/internships" key={job.id}>
                <Card className="shadow-sm border-slate-200 hover:border-green-400 hover:shadow-md transition-all cursor-pointer group h-full bg-white rounded-xl">
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
              ทำแบบประเมินวินิจฉัยอีกครั้ง
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
