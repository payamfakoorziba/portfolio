import Image from "next/image";
import Container from "../ui/container";
import ProfilePic from "@/public/profile-pic.jpeg";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <Container>
      <div className="mt-20 md:mt-0 flex flex-col-reverse gap-y-10 md:flex-row justify-between items-center md:pt-20 gap-x-10">
        <div className="flex flex-col flex-1 items-start md:items-start md:text-start">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Hi, I&apos;m Payam
          </h1>
          <h2 className="text-lg md:text-2xl font-light tracking-tighter mt-2 md:mt-6 text-white/70">
            Web designer and developer
          </h2>
          <p className="text-sm md:text-base mt-6 md:mt-12 leading-8 ">
            I design and build custom websites tailored to elevate your
            business. <br className="hidden lg:block" />
            Ready for a website that stands out?{" "}
            <br className="block sm:hidden" />
            Let&apos;s talk.
          </p>
          <Button className="w-fit mt-6">Get in touch</Button>
        </div>
        <div className="hidden md:block rounded-full relative size-24 md:size-[300px] lg:size-[350px] overflow-hidden shadow-md shadow-white/5 flex-shrink-0">
          <div className="inset-0 bg-black/15 absolute z-10" />
          <Image
            src={ProfilePic}
            alt="Payam Fakoorziba"
            placeholder="blur"
            fill
            className="object-cover -scale-x-100"
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
