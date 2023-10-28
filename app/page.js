"use client";
import Smile from "@/components/Smile";
import Play from "@/components/Play";
export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-[rgb(31,31,31)] gap-[200px]">
      <div className="flex items-center justify-center gap-[200px]">
        <Smile />
        <Play />
      </div>
    </main>
  );
}
