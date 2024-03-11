import Image from "next/image";
import Container from "../ui/container";
import ProfilePic from "@/public/profile-pic.jpeg";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse gap-y-10 md:flex-row justify-between items-center md:pt-32 gap-x-10">
        <div className="flex flex-col flex-1 items-center md:items-start text-center md:text-start">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Hi, I&apos;m Payam.
          </h1>
          <h2 className="text-lg md:text-2xl tracking-tighter mt-2 md:mt-6 text-white/60">
            Web designer and developer
          </h2>
          <p className="text-sm md:text-base mt-6 md:mt-12 leading-8 text-balance">
            I design and build custom websites tailored to elevate your
            business. <br className="hidden lg:block" />
            Ready for a website that stands out? Let&apos;s talk.
          </p>
          <Button className="bg-white/20 font-normal rounded-sm hover:bg-white/10 hover:text-white/90 w-fit mt-6">
            Get in touch
          </Button>
        </div>
        <div className="rounded-full relative size-32 md:size-[300px] lg:size-[400px] overflow-hidden shadow-md shadow-white/20 flex-shrink-0">
          <div className="inset-0 bg-black/20 absolute z-10" />
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
