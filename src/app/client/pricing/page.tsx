"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Check, CreditCard, ShieldCheck, QrCode } from "lucide-react";
import Link from "next/link";

const pricingPacks = [
  {
    id: "starter",
    name: "Starter Pack",
    credits: 5,
    price: "2,250",
    perCredit: "450 บาท/เครดิต",
    popular: false,
    features: [
      "ปลดล็อกนิสิตได้ 5 โปรไฟล์",
      "ดูข้อมูลติดต่อตรง (เบอร์โทร & อีเมล)",
      "ดาวน์โหลด Resume ฉบับเต็ม",
      "ค้นหาตามทักษะและเกรดเฉลี่ย",
      "อายุการใช้งานเครดิต 1 ปี"
    ]
  },
  {
    id: "business",
    name: "Business Pack",
    credits: 15,
    price: "5,400",
    perCredit: "360 บาท/เครดิต (ประหยัด 20%)",
    popular: true,
    features: [
      "ปลดล็อกนิสิตได้ 15 โปรไฟล์",
      "ดูข้อมูลติดต่อตรง (เบอร์โทร & อีเมล)",
      "ดาวน์โหลด Resume ฉบับเต็ม",
      "ค้นหาตามทักษะและเกรดเฉลี่ย",
      "ติดป้าย Verified Employer ในประกาศงาน",
      "อายุการใช้งานเครดิต ไม่จำกัดเวลา"
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise Pack",
    credits: 50,
    price: "15,000",
    perCredit: "300 บาท/เครดิต (ประหยัด 33%)",
    popular: false,
    features: [
      "ปลดล็อกนิสิตได้ 50 โปรไฟล์",
      "ดูข้อมูลติดต่อตรง (เบอร์โทร & อีเมล)",
      "ดาวน์โหลด Resume ฉบับเต็ม",
      "ค้นหาตามทักษะและเกรดเฉลี่ย",
      "บริการคัดกรองพิเศษจากทีมงาน",
      "อายุการใช้งานเครดิต ไม่จำกัดเวลา"
    ]
  }
];

export default function ClientPricingPage() {
  const [selectedPack, setSelectedPack] = useState<typeof pricingPacks[0] | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handleBuyClick = (pack: typeof pricingPacks[0]) => {
    setSelectedPack(pack);
    setIsCheckoutOpen(true);
    setIsPaid(false);
  };

  const handleConfirmPayment = () => {
    setIsPaid(true);
    setTimeout(() => {
      setIsCheckoutOpen(false);
      setIsPaid(false);
    }, 1400);
  };

  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">แพ็กเกจเครดิตสำหรับสถานประกอบการ</h1>
        <p className="text-slate-500 mt-2">
          1 เครดิต = ปลดล็อกข้อมูลแคนดิเดตนิสิต 1 ท่าน (รับชื่อจริง รูปถ่าย เบอร์โทร อีเมล และไฟล์ Resume)
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {pricingPacks.map((pack) => (
          <Card
            key={pack.id}
            className={`shadow-sm border-slate-200 bg-white flex flex-col justify-between relative ${
              pack.popular ? "border-green-500 shadow-md ring-1 ring-green-500" : ""
            }`}
          >
            {pack.popular && (
              <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-b-md mx-auto w-fit">
                ยอดนิยมสำหรับองค์กร
              </div>
            )}

            <CardHeader className="pt-6">
              <CardTitle className="text-xl">{pack.name}</CardTitle>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-slate-900">฿{pack.price}</span>
                <span className="text-xs text-slate-500">/ สุทธิ</span>
              </div>
              <div className="mt-2 text-xs font-medium text-slate-600 bg-slate-100 p-2 rounded-md">
                {pack.credits} เครดิต ({pack.perCredit})
              </div>
            </CardHeader>

            <CardContent className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">รายละเอียดบริการ</span>
              {pack.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </CardContent>

            <CardFooter className="pt-4">
              <Button
                onClick={() => handleBuyClick(pack)}
                className={`w-full font-medium ${
                  pack.popular ? "bg-green-600 hover:bg-green-700 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                สั่งซื้อ {pack.credits} เครดิต (฿{pack.price})
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Checkout Modal */}
      <Dialog open={isCheckoutOpen} onOpenChange={(open) => !open && setIsCheckoutOpen(false)}>
        {selectedPack && (
          <DialogContent className="sm:max-w-md bg-white rounded-xl border border-slate-200 shadow-xl p-0 overflow-hidden">
            <div className="bg-slate-900 text-white p-6">
              <DialogTitle className="text-lg font-bold text-white">ชำระเงินค่าแพ็กเกจเครดิต</DialogTitle>
              <DialogDescription className="text-xs text-slate-300 mt-1">
                {selectedPack.name} ({selectedPack.credits} เครดิต)
              </DialogDescription>
            </div>

            <div className="p-6 space-y-5">
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <span className="text-xs text-slate-500 block">ยอดชำระสุทธิ</span>
                  <span className="text-2xl font-bold text-slate-900">฿{selectedPack.price}</span>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700 font-bold">
                  +{selectedPack.credits} เครดิต
                </Badge>
              </div>

              <div className="flex flex-col items-center justify-center p-6 border border-slate-200 rounded-xl bg-slate-50 text-center">
                <div className="w-32 h-32 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-3 p-2">
                  <QrCode className="w-full h-full text-slate-800" />
                </div>
                <span className="text-xs font-bold text-slate-700">สแกน QR Code เพื่อชำระเงิน (PromptPay)</span>
                <span className="text-[11px] text-slate-400 mt-1">ระบบจำลองการชำระเงินเพื่อการทดสอบ</span>
              </div>

              {isPaid && (
                <div className="p-3 bg-green-50 text-green-700 rounded-lg border border-green-200 font-semibold text-xs text-center flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  ชำระเงินสำเร็จ! เพิ่ม {selectedPack.credits} เครดิตแล้ว
                </div>
              )}
            </div>

            <DialogFooter className="p-6 pt-0 flex gap-3">
              <Button
                variant="outline"
                onClick={() => setIsCheckoutOpen(false)}
                className="rounded-lg border-slate-200 text-slate-700 flex-1"
              >
                ยกเลิก
              </Button>
              <Button
                onClick={handleConfirmPayment}
                disabled={isPaid}
                className="rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium flex-1 shadow-sm"
              >
                ยืนยันการชำระเงิน
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
