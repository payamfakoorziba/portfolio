import Link from "next/link";
import TwoColumnGrid from "../two-column-grid";
import Container from "../ui/container";
import { Button } from "../ui/button";

const WantToWork = () => {
  return (
    <div className="w-full bg-gradient-to-br from-[#5C5C61] pt-10 pb-20 relative">
      <Container>
        <TwoColumnGrid>
          <h3 className="font-medium text-5xl scroll-mt-10 w-full">
            Want to work?
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
            <Button className="mt-6">Get in touch</Button>
          </div>
        </TwoColumnGrid>

        <p className="absolute bottom-2 text-sm text-white/80 left-1/2 -translate-x-1/2">
          ©{new Date().getFullYear()} Payam Technologies Inc. All rights
          reserved.
        </p>
      </Container>
    </div>
  );
};

export default WantToWork;
