"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function AssessmentPage() {
  const [step, setStep] = useState(0);
  const totalSteps = 4;

  return (
    <div className="flex flex-col gap-8 max-w-3xl mx-auto pb-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">แบบประเมินทักษะและความสนใจ</h1>
        <p className="text-slate-500 mt-2">ค้นหาสายงานวิศวกรรมที่เหมาะสมกับบุคลิกภาพและทักษะของคุณที่สุด</p>
      </div>

      {step > 0 && (
        <div className="flex items-center gap-4 mb-2 animate-in fade-in">
          <Progress value={(step / totalSteps) * 100} className="h-2.5 bg-slate-100 [&>div]:bg-slate-900" />
          <span className="text-sm font-semibold text-slate-500 whitespace-nowrap">ขั้นตอนที่ {step} จาก {totalSteps}</span>
        </div>
      )}

      {/* Step 0: Welcome / Start Screen */}
      {step === 0 && (
        <Card className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white animate-in fade-in slide-in-from-bottom-4 duration-500">
          <CardHeader className="text-center pb-2 pt-10">
            <CardTitle className="text-2xl font-bold text-slate-800">ค้นพบสายงานวิศวกรรมที่ใช่สำหรับคุณ</CardTitle>
            <CardDescription className="text-base mt-2">
              ใช้เวลาทำแบบประเมินนี้เพียง 3-5 นาที เพื่อให้ระบบประมวลผลทักษะและความชื่นชอบของคุณออกมาเป็นคำแนะนำอาชีพ
            </CardDescription>
          </CardHeader>
          <CardContent className="py-8">
            <div className="grid gap-6 max-w-md mx-auto">
              <div className="flex items-start gap-4">
                <span className="text-xl font-bold text-slate-400 mt-0.5">01</span>
                <div className="text-left">
                  <h4 className="font-semibold text-slate-800">วิเคราะห์ลักษณะงาน</h4>
                  <p className="text-sm text-slate-500">ทำความเข้าใจในบทบาทและภารกิจทางวิศวกรรมที่คุณถนัดที่สุด</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-slate-100 pt-6">
                <span className="text-xl font-bold text-slate-400 mt-0.5">02</span>
                <div className="text-left">
                  <h4 className="font-semibold text-slate-800">สภาพแวดล้อมที่ชอบ</h4>
                  <p className="text-sm text-slate-500">แมปสไตล์ความชอบเข้ากับบรรยากาศการทำงานจริงที่คุณต้องการ</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-slate-100 pt-6">
                <span className="text-xl font-bold text-slate-400 mt-0.5">03</span>
                <div className="text-left">
                  <h4 className="font-semibold text-slate-800">วิชาที่ถนัดและเครื่องมือ</h4>
                  <p className="text-sm text-slate-500">ประเมินวิชาการและระบบวิศวกรรมที่ตรงกับทักษะจริงของคุณ</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center pt-2">
            <Button onClick={() => setStep(1)} size="lg" className="w-full max-w-md rounded-full bg-slate-900 hover:bg-slate-800 text-white h-12 text-base font-semibold shadow-md hover:shadow-lg transition-all">
              เริ่มทำแบบประเมิน
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* Step 1: Job Interests */}
      {step === 1 && (
        <Card className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white animate-in fade-in slide-in-from-bottom-4">
          <CardHeader>
            <CardTitle className="text-xl">ความสนใจในลักษณะงาน</CardTitle>
            <CardDescription className="text-sm">เลือกประเภทงานที่คุณรู้สึกสนุกและถนัดที่สุด (เลือกได้มากกว่า 1 ข้อ)</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {[
              "การเขียนโค้ดและพัฒนาโปรแกรมคอมพิวเตอร์",
              "การออกแบบโครงสร้างสิ่งก่อสร้างและอาคาร",
              "การบริหารจัดการโครงการและคุมทีมงาน",
              "การวิจัยและคิดค้นเทคโนโลยีหรือนวัตกรรมใหม่ๆ",
              "การทำงานประกอบระบบไฟฟ้ารวมถึงวงจรอิเล็กทรอนิกส์"
            ].map((option, i) => (
              <label key={i} className="flex items-start gap-3 p-4 border border-slate-100 rounded-xl cursor-pointer hover:bg-slate-50 [&:has(:checked)]:border-slate-900 [&:has(:checked)]:bg-slate-50 transition-all">
                <input type="checkbox" className="mt-1 w-4 h-4 text-slate-900 rounded border-slate-300 focus:ring-slate-900" />
                <span className="text-slate-700 font-semibold text-sm">{option}</span>
              </label>
            ))}
          </CardContent>
          <CardFooter className="flex justify-between border-t border-slate-50 pt-6">
            <Button variant="ghost" onClick={() => setStep(0)} className="text-slate-500">ย้อนกลับ</Button>
            <Button onClick={() => setStep(2)} className="bg-slate-900 hover:bg-slate-800 text-white">ถัดไป</Button>
          </CardFooter>
        </Card>
      )}

      {/* Step 2: Work Environment */}
      {step === 2 && (
        <Card className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white animate-in fade-in slide-in-from-bottom-4">
          <CardHeader>
            <CardTitle className="text-xl">สภาพแวดล้อมการทำงานที่ชอบ</CardTitle>
            <CardDescription className="text-sm">คุณชื่นชอบการทำงานในบรรยากาศและสภาพแวดล้อมแบบไหน?</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {[
              "ทำงานในสำนักงานหรือบริษัทเทคโนโลยีขนาดใหญ่",
              "ลงพื้นที่จริง หน้างานกลางแจ้ง หรือคุมโรงงานอุตสาหกรรม",
              "ทำงานจากที่บ้านหรือสถานที่ทำงานแบบยืดหยุ่น",
              "ทำงานวิจัย ค้นคว้า และทดลองในห้องแล็บปิด"
            ].map((option, i) => (
              <label key={i} className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl cursor-pointer hover:bg-slate-50 [&:has(:checked)]:border-slate-900 [&:has(:checked)]:bg-slate-50 transition-all">
                <input type="radio" name="environment" className="w-4 h-4 text-slate-900 border-slate-300 focus:ring-slate-900" />
                <span className="text-slate-700 font-semibold text-sm">{option}</span>
              </label>
            ))}
          </CardContent>
          <CardFooter className="flex justify-between border-t border-slate-50 pt-6">
            <Button variant="outline" onClick={() => setStep(1)}>ย้อนกลับ</Button>
            <Button onClick={() => setStep(3)} className="bg-slate-900 hover:bg-slate-800 text-white">ถัดไป</Button>
          </CardFooter>
        </Card>
      )}

      {/* Step 3: Preferred Tools & Systems */}
      {step === 3 && (
        <Card className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white animate-in fade-in slide-in-from-bottom-4">
          <CardHeader>
            <CardTitle className="text-xl">เครื่องมือหรือวิชาที่ถนัดที่สุด</CardTitle>
            <CardDescription className="text-sm">ทักษะพื้นฐานและเครื่องมือชิ้นไหนที่คุณถนัดใช้งานมากที่สุด?</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {[
              "วิชาคณิตศาสตร์ ตรรกศาสตร์ หรือโครงสร้างฐานข้อมูล",
              "ฟิสิกส์ การคำนวณทางกลศาสตร์ และการเขียนแบบแปลน",
              "ภาษาอังกฤษ ทักษะการประสานงานและการต่อรองทางธุรกิจ",
              "วิชาเคมี คุณสมบัติของสสาร หรือชีวภาพสิ่งแวดล้อม"
            ].map((option, i) => (
              <label key={i} className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl cursor-pointer hover:bg-slate-50 [&:has(:checked)]:border-slate-900 [&:has(:checked)]:bg-slate-50 transition-all">
                <input type="radio" name="tools" className="w-4 h-4 text-slate-900 border-slate-300 focus:ring-slate-900" />
                <span className="text-slate-700 font-semibold text-sm">{option}</span>
              </label>
            ))}
          </CardContent>
          <CardFooter className="flex justify-between border-t border-slate-50 pt-6">
            <Button variant="outline" onClick={() => setStep(2)}>ย้อนกลับ</Button>
            <Button onClick={() => setStep(4)} className="bg-slate-900 hover:bg-slate-800 text-white">ดูผลลัพธ์</Button>
          </CardFooter>
        </Card>
      )}

      {/* Step 4: Final Result */}
      {step === 4 && (
        <Card className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white animate-in fade-in slide-in-from-bottom-4">
          <CardHeader className="text-center pb-2 pt-10">
            <CardTitle className="text-2xl font-bold">ประมวลผลเสร็จสิ้น!</CardTitle>
            <CardDescription className="text-base mt-2">
              เราได้วิเคราะห์ข้อมูลความต้องการของคุณแล้วพบว่าสายอาชีพที่เหมาะสมที่สุดคือ
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center py-4">
            <div className="border-2 border-slate-900 rounded-2xl p-8 max-w-xl mx-auto bg-slate-50/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">วิศวกรซอฟต์แวร์ / วิศวกรข้อมูล</h3>
              <p className="text-slate-600 leading-relaxed">
                คุณแสดงออกถึงทักษะด้านความคิดที่เป็นตรรกะ ชื่นชอบความท้าทายผ่านหน้าจอคอมพิวเตอร์ และมองหาสภาพแวดล้อมการทำงานแบบยืดหยุ่น สายงานด้านพัฒนาซอฟต์แวร์จึงเหมาะสมกับคุณเป็นอันดับแรก
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3 pt-4">
            <Link href="/explorer" className={cn(buttonVariants({ variant: "default" }), "w-full text-base h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold flex items-center justify-center")}>
              สำรวจสายอาชีพนี้
            </Link>
            <Link href="/dashboard" className={cn(buttonVariants({ variant: "ghost" }), "w-full rounded-full text-slate-500")}>
              กลับสู่หน้าหลัก
            </Link>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
