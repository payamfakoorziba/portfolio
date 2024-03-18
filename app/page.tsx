import Hero from "@/components/sections/hero";
import MyWork from "@/components/sections/my-work";
import Testimonials from "@/components/sections/testimonials";
import WantToWork from "@/components/sections/want-to-work";
import WhatIDo from "@/components/sections/what-I-do";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-y-16">
      {/* Grid background */}
      <div className="absolute bg-grid-white/5 top-0 inset-x-0 h-[75vh] -mt-20 -z-10">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent,black)] bg-background" />
        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-background" />
      </div>

      {/* Light gradients */}
      <div className="animate-spotlight opacity-0 size-[200px] md:size-[600px] absolute bg-white/5 rounded-full top-0 left-0 pointer-events-none blur-max" />

      <Hero />
      <MyWork />
      <WhatIDo />
      <Testimonials />
      <WantToWork />
    </main>
  );
}
