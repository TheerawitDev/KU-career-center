import { TopNav } from "@/components/layout/top-nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f4f7fc] bg-grid-pattern pb-20 relative">
      <TopNav />
      <main className="flex-1 flex flex-col items-center w-full px-4 mt-14 z-10">
        <div className="w-[95%] max-w-6xl w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
