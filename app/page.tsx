import Hero from "@/components/sections/hero";
import MyWork from "@/components/sections/my-work";

export default function Home() {
  return (
    <main className="flex flex-col w-full gap-y-20">
      {/* Grid background */}
      <div className="absolute bg-grid-white/5 top-0 inset-x-0 bottom-1/3 -mt-20 -z-10">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent,black)] bg-[#3F3F45]" />
        {/* <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_left,transparent_10%,black)] bg-[#3F3F45]" /> */}
      </div>

      {/* Spotlight effect */}
      {/* <div className="animate-spotlight opacity-0 size-[100px] md:size-[600px] absolute bg-white/5 rounded-full -top-1/3 left-0 pointer-events-none blur-3xl" /> */}

      <Hero />
      <MyWork />
    </main>
  );
}
