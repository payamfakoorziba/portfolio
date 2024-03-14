import TwoColumnGrid from "../two-column-grid";
import Container from "../ui/container";

const WhatIDo = () => {
  return (
    <Container>
      <section className="flex flex-col w-full gap-y-10">
        <h3 className="font-medium text-4xl sm:text-5xl md:text-6xl">
          What I do
        </h3>
        <TwoColumnGrid>
          <div className="w-full">
            <h4 className="font-bold text-2xl md:text-4xl mb-6 w-full">
              Design
            </h4>
            <p className="leading-loose">
              I design beautiful and powerful websites for modern businesses.
              Any business today needs a website that wins customers’ trust and
              helps you do your business well. I make sure your website is up to
              that standard.
            </p>
          </div>
          <div className="w-full">
            <h4 className="font-bold text-2xl md:text-4xl mb-6">Development</h4>
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
