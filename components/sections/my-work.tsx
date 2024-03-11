import Image, { StaticImageData } from "next/image";
import GradientCard from "../gradient-card";
import Container from "../ui/container";
import Ship4x6Design from "@/public/Ship4x6Design1.png";
import Ship4x6Design2 from "@/public/Ship4x6Design2.png";

const MyWork = () => {
  return (
    <Container className="space-y-20">
      <WebsiteDisplay
        title="Ship4x6"
        description="Designed and developed a Canadian shipping label e-commerce website, enabling seamless management of products, customers, and users through a robust admin dashboard. This self-built platform streamlines the shipping process, offering an intuitive user experience and efficient administrative control."
        url="payamfkz.com"
        frontImage={Ship4x6Design}
        backImage={Ship4x6Design2}
        tags={[
          "E-commerce",
          "Website Design",
          "Storefront Development",
          "Figma",
          "React",
          "Typescript",
          "Next.js",
          "TailwindCSS",
        ]}
      />
    </Container>
  );
};

const WebsiteDisplay = ({
  title,
  description,
  url,
  frontImage,
  backImage,
  tags,
  className,
}: {
  title: string;
  description: string;
  url: string;
  frontImage: StaticImageData;
  backImage: StaticImageData;
  tags?: string[];
  className?: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full gap-10 shrink-0">
      <div className="space-y-5 md:w-1/2">
        <p className="text-xl uppercase text-white/60 tracking-[0.2em]">
          Latest Work
        </p>

        {/* Tags */}
        <h2 className="-ml-0.5 text-6xl font-semibold text-white">{title}</h2>
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-white/10 rounded-sm text-white/80 cursor-default
                hover:bg-white/20 hover:text-white/100 transition-colors duration-200 ease-in-out
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="text-base leading-loose">{description}</p>
      </div>
      <GradientCard className="relative size-80 lg:size-96">
        <Image
          src={frontImage}
          alt={title}
          className="absolute bottom-0 left-10 z-10 w-60"
        />
        <Image
          src={backImage}
          alt={title}
          className="
          absolute top-0 right-10 w-60"
        />
      </GradientCard>
    </div>
  );
};

export default MyWork;
