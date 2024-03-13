import Image, { StaticImageData } from "next/image";
import GradientCard from "../gradient-card";
import Container from "../ui/container";
import Ship4x6Design1 from "@/public/Ship4x6Design1.png";
import Ship4x6Design2 from "@/public/Ship4x6Design2.png";
import ChatAppDesign1 from "@/public/ChatAppDesign1.png";
import ChatAppDesign2 from "@/public/ChatAppDesign2.png";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Ship4x6",
    description:
      "Designed and developed a Canadian shipping label e-commerce website, enabling seamless management of products, customers, and users through a robust admin dashboard.",
    url: "payamfkz.com",
    frontImage: Ship4x6Design1,
    backImage: Ship4x6Design2,
    tags: [
      "E-commerce",
      "Website Design",
      "Storefront Development",
      "Figma",
      "React",
      "Typescript",
      "Next.js",
      "TailwindCSS",
    ],
  },
  {
    title: "Chat App Website",
    description:
      "Designed a chat app website that feels like a cozy chat room: simple, vibrant, and easy to use. It's all about keeping the conversation flowing and making everyone feel right at home.",
    url: "payamfkz.com",
    frontImage: ChatAppDesign1,
    backImage: ChatAppDesign2,
    tags: [
      "E-commerce",
      "Website Design",
      "Storefront Development",
      "Figma",
      "React",
      "Typescript",
      "Next.js",
      "TailwindCSS",
    ],
  },
  {
    title: "HCL Consulting",
    description:
      "Designed a user-friendly consultancy website with a clean look and interactive features, making it easy to explore our services and see our expertise in action.",
    url: "payamfkz.com",
    frontImage: Ship4x6Design1,
    backImage: Ship4x6Design2,
    tags: [
      "E-commerce",
      "Website Design",
      "Storefront Development",
      "Figma",
      "React",
      "Typescript",
      "Next.js",
      "TailwindCSS",
    ],
  },
];

const MyWork = () => {
  return (
    <Container className="space-y-20 scroll-mt-10" id="my-work">
      {projects.map((project, index) => (
        <WebsiteDisplay
          key={index}
          {...project}
          className={index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
        />
      ))}
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
    <div
      className={cn(
        "flex flex-col md:flex-row justify-between w-full gap-6 md:gap-12 lg:gap-40 shrink-0",
        className
      )}
    >
      <div className="flex flex-col gap-y-6 md:w-full">
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
        <p className="text-base leading-loose mt-8">{description}</p>
      </div>
      <GradientCard className="relative w-full aspect-square rounded-md group overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-5 transition-opacity duration-200 ease-in-out z-20" />
        <Image
          src={frontImage}
          alt={title}
          className={cn(
            "absolute bottom-0 left-10 md:left-5 lg:left-10 z-10",
            "w-2/3 lg:w-7/12",
            "group-hover:transform group-hover:scale-[101%] transition-transform duration-200 ease-in-out origin-bottom"
          )}
        />
        <Image
          src={backImage}
          alt={title}
          className={cn(
            "absolute top-0 right-10 md:right-5 lg:right-10 w-7/12",
            "opacity-70 group-hover:opacity-80 transition-opacity duration-200 ease-in-out"
          )}
        />
      </GradientCard>
    </div>
  );
};

export default MyWork;
