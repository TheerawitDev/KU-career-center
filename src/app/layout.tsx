import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-noto-sans-thai",
});

export const metadata: Metadata = {
  title: "KU Engineering Career Center",
  description: "ศูนย์กลางเส้นทางอาชีพวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${notoSansThai.className} antialiased bg-[#f0fdf4] text-slate-900 bg-grid-pattern min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
