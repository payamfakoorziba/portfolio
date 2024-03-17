import TwoColumnGrid from "../two-column-grid";
import Container from "../ui/container";
import figma from "../../public/figma_logo.svg";
import react from "../../public/react_logo.svg";
import next from "../../public/next_logo.svg";
import framer_motion from "../../public/framer_motion_logo.svg";
import tailwind from "../../public/tailwind_logo.svg";
import Image from "next/image";

const WhatIDo = () => {
  return (
    <Container>
      <section className="flex flex-col w-full gap-y-10">
        <h3 className="font-medium text-4xl sm:text-5xl md:text-4xl">
          What I do
        </h3>
        <TwoColumnGrid>
          <div className="w-full space-y-6">
            <div className="flex flex-col items-start gap-6">
              <div className="relative w-fit">
                <h4 className="font-medium text-2xl md:text-3xl w-full">
                  Design
                </h4>
                <div className="absolute rounded-full -bottom-1 mx-px h-px w-full bg-gradient-to-r from-white/50 to-transparent" />
              </div>
              <Image
                src={figma}
                alt="Figma logo"
                width={40}
                height={40}
                className="size-8 w-fit"
              />
            </div>
            <p className="leading-loose">
              I design beautiful and powerful websites for modern businesses.
              Any business today needs a website that wins customers’ trust and
              helps you do your business well. I make sure your website is up to
              that standard.
            </p>
          </div>
          <div className="w-full space-y-6">
            <div className="flex flex-col items-start gap-6">
              <div className="relative w-fit">
                <h4 className="font-medium text-2xl md:text-3xl w-full">
                  Development
                </h4>
                <div className="absolute rounded-full -bottom-1 mx-px h-px w-full bg-gradient-to-r from-white/50 to-transparent" />
              </div>
              <div className="flex gap-x-2">
                <Image
                  src={next}
                  alt="Next.js logo"
                  width={40}
                  height={40}
                  className="size-8"
                />
                <Image
                  src={react}
                  alt="React logo"
                  width={40}
                  height={40}
                  className="size-8"
                />
                <Image
                  src={tailwind}
                  alt="Tailwind CSS logo"
                  width={40}
                  height={40}
                  className="size-8"
                />
                <Image
                  src={framer_motion}
                  alt="Framer Motion logo"
                  width={40}
                  height={40}
                  className="size-8 p-1"
                />
              </div>
            </div>
            <p className="leading-loose">
              I create responsive, custom websites using React and Next.js,
              offering both speed and flexibility. They're designed to be
              user-friendly, ensuring you and your team can easily manage
              content without hassle.
            </p>
          </div>
        </TwoColumnGrid>
      </section>
    </Container>
  );
};

export default WhatIDo;
