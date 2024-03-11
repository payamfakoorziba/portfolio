import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";

export default function Home() {
  return (
    <main className="relative">
      <div className="animate-spotlight opacity-0 size-[100px] md:size-[400px] absolute bg-white/25 rounded-full -top-1/2 left-0 pointer-events-none blur-max" />
      <Hero />
    </main>
  );
}
