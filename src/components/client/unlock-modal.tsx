"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StudentTalent } from "@/data/students";
import { Lock, CreditCard, Check, AlertCircle } from "lucide-react";

interface UnlockModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: StudentTalent | null;
  onUnlockSuccess: (studentId: string) => void;
  companyCredits: number;
  onDeductCredits: (amount: number) => void;
}

export function UnlockModal({
  isOpen,
  onClose,
  student,
  onUnlockSuccess,
  companyCredits,
  onDeductCredits
}: UnlockModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!student) return null;

  const cost = student.unlockCost || 1;
  const hasEnoughCredits = companyCredits >= cost;

  const handleConfirmUnlock = () => {
    if (!hasEnoughCredits) {
      setErrorMsg("เครดิตของคุณไม่เพียงพอ กรุณาเติมเครดิตก่อนทำรายการ");
      return;
    }

    setIsProcessing(true);
    setErrorMsg("");

    setTimeout(() => {
      onDeductCredits(cost);
      onUnlockSuccess(student.id);
      setIsProcessing(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1200);
    }, 600);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-white rounded-2xl border border-slate-200 shadow-lg p-0 overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
              <Lock className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <DialogTitle className="text-lg font-bold text-white">ปลดล็อกข้อมูลแคนดิเดต</DialogTitle>
              <DialogDescription className="text-xs text-slate-300">
                เข้าถึงชื่อ-นามสกุลจริง รูปโปรไฟล์ และข้อมูลติดต่อของนิสิต
              </DialogDescription>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-5">
          {/* Candidate Anonymized Preview Card */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-slate-200">
              <img
                src={student.realAvatar}
                alt="Candidate Avatar"
                className="w-full h-full object-cover filter blur-sm scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                <Lock className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-slate-900 text-sm truncate">{student.codeName}</h4>
              <p className="text-xs text-slate-500">{student.major} • GPA {student.gpa.toFixed(2)}</p>
              <div className="flex gap-1.5 mt-1.5">
                <Badge variant="secondary" className="bg-slate-200 text-slate-700 text-[10px]">
                  {student.lookingFor}
                </Badge>
              </div>
            </div>
          </div>

          {/* Unlocked Details List */}
          <div className="space-y-2 text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="font-semibold text-slate-900 text-sm mb-1">
              สิ่งที่คุณจะได้รับหลังปลดล็อก:
            </div>
            <div className="grid grid-cols-2 gap-2 text-slate-700 font-medium">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-green-600" />
                ชื่อ-นามสกุลจริงของนิสิต
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-green-600" />
                รูปโปรไฟล์คมชัด
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-green-600" />
                อีเมล & เบอร์โทรศัพท์
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-green-600" />
                ไฟล์ Resume ฉบับเต็ม
              </div>
            </div>
          </div>

          {/* Balance & Cost Info */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-slate-100 border border-slate-200">
            <div>
              <span className="text-xs text-slate-500 block font-medium">ค่าบริการปลดล็อก</span>
              <span className="text-lg font-bold text-slate-900">
                {cost} เครดิต
              </span>
            </div>

            <div className="text-right">
              <span className="text-xs text-slate-500 block font-medium">เครดิตคงเหลือของคุณ</span>
              <span className="text-base font-bold text-slate-900 flex items-center gap-1 justify-end">
                <CreditCard className="w-4 h-4 text-slate-500" />
                {companyCredits} เครดิต
              </span>
            </div>
          </div>

          {errorMsg && (
            <div className="flex items-center gap-2 p-3 text-xs bg-rose-50 text-rose-700 rounded-lg border border-rose-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {isSuccess && (
            <div className="flex items-center justify-center gap-2 p-3 bg-green-50 text-green-700 rounded-lg border border-green-200 font-semibold text-xs">
              <Check className="w-4 h-4 text-green-600" />
              ปลดล็อกโปรไฟล์สำเร็จแล้ว
            </div>
          )}
        </div>

        {/* Footer */}
        <DialogFooter className="p-6 pt-0 flex gap-3">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isProcessing}
            className="rounded-lg border-slate-200 text-slate-700 flex-1"
          >
            ยกเลิก
          </Button>

          <Button
            onClick={handleConfirmUnlock}
            disabled={isProcessing || isSuccess}
            className="rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold flex-1 shadow-sm gap-2"
          >
            {isProcessing ? "กำลังดำเนินการ..." : `ยืนยันการปลดล็อก (${cost} เครดิต)`}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
