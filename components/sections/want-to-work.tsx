import Link from "next/link";
import TwoColumnGrid from "../two-column-grid";
import Container from "../ui/container";
import GetInTouch from "../get-in-touch-button";

const WantToWork = () => {
  return (
    <div className="w-full bg-gradient-to-br from-[#5C5C61] pt-10 relative">
      <Container className="flex flex-col gap-y-10">
        <TwoColumnGrid>
          <h3 className="font-medium text-2xl w-full">
            Want to work together?
          </h3>
          <div className="w-full">
            <p className="leading-relaxed">
              If you need a modern and powerful website for your business,
              startup or yourself, I am available for work. You can email me
              directly at 
              <Link href="mailto:payamfakoor@gmail.com" className="underline">
                payamfakoor@gmail.com
              </Link>
            </p>
            <GetInTouch className="mt-8" />
          </div>
        </TwoColumnGrid>

        <p className="text-center bottom-2 text-xs sm:text-xs md:text-sm text-white/80 pb-4">
          ©{new Date().getFullYear()} Payam Technologies Inc. All rights
          reserved.
        </p>
      </Container>
    </div>
  );
};

export default WantToWork;
