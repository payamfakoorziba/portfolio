import Image, { StaticImageData } from "next/image";
import GradientCard from "../gradient-card";
import Container from "../ui/container";
import Ship4x6Design1 from "@/public/Ship4x6Design1.png";
import Ship4x6Design2 from "@/public/Ship4x6Design2.png";
import ChatAppDesign1 from "@/public/ChatAppDesign1.png";
import ChatAppDesign2 from "@/public/ChatAppDesign2.png";
import HCLConsultDesign1 from "@/public/HCLConsultDesign1.png";
import HCLConsultDesign2 from "@/public/HCLConsultDesign2.png";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import TwoColumnGrid from "../two-column-grid";
import Appear from "../appear";
import Link from "next/link";

const projects = [
  {
    title: "Ship4x6",
    description:
      "Designed and developed a Canadian shipping label e-commerce website, enabling seamless management of products, customers, and users through a robust admin dashboard.",
    url: "https://www.ship4x6.com/",
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
    url: "https://www.figma.com/proto/mQyZmybhiu6gXadA5VJLud/Practice%3A-Chat-App-Homepage-Design-(Copy)?type=design&node-id=107-17&t=GibmlQbjaJWJFn4e-1&scaling=min-zoom&page-id=107%3A2&mode=design",
    frontImage: ChatAppDesign1,
    backImage: ChatAppDesign2,
    tags: ["Landing Page", "Website Design", "Figma", "Concept"],
  },
  {
    title: "HCL Consulting",
    description:
      "Designed a user-friendly consultancy website with a clean look and interactive features, making it easy to explore our services and see our expertise in action.",
    url: "https://www.hclconsult.ca/",
    frontImage: HCLConsultDesign1,
    backImage: HCLConsultDesign2,
    tags: [
      "Website Design",
      "Website Development",
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
        <Appear
          key={project.title}
          transition={{
            ease: "easeInOut",
            delay: 0.4,
          }}
        >
          <WebsiteDisplay key={project.title} index={index} {...project} />
        </Appear>
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
  index,
}: {
  title: string;
  description: string;
  url: string;
  frontImage: StaticImageData;
  backImage: StaticImageData;
  tags?: string[];
  className?: string;
  index: number;
}) => {
  return (
    <TwoColumnGrid className={className}>
      <div
        className={cn(
          "flex flex-col gap-y-6 md:gap-y-10 md:w-full",
          index % 2 === 0 ? "md:-order-1" : "md:order-1"
        )}
      >
        <p className="text-lg md:text-lg lg:text-xl uppercase text-white/60 tracking-[0.2em]">
          Recent project
        </p>
        <h2 className="-ml-0.5 text-4xl lg:text-5xl font-semibold text-white tracking-wide leading-normal -mt-5">
          {title}
        </h2>
        {/* Tags */}
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Appear
                key={tag}
                variants={{
                  hidden: { scale: 0.9, opacity: 0, y: 10 },
                  visible: { scale: 1, opacity: 1, y: 0 },
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.25 + 0.1 * index,
                }}
                className="px-2 py-1 text-xs bg-white/10 rounded-sm text-white/80 cursor-default
                hover:bg-white/20 hover:text-white/100 transition-colors duration-200 ease-in-out
                "
              >
                {tag}
              </Appear>
            ))}
          </div>
        )}
        <p className="text-sm md:text-base leading-loose">{description}</p>
        <Button className="w-fit" asChild>
          <Link target="_blank" href={url}>
            View Project
          </Link>
        </Button>
      </div>
      <GradientCard className="relative w-full aspect-square rounded-md group overflow-hidden transition duration-200">
        <Link href={url}>
          <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-5 transition-opacity ease-in-out duration-200 z-20" />
          <Image
            src={frontImage}
            alt={title}
            className={cn(
              "absolute bottom-0 left-10 md:left-5 lg:left-10 z-10",
              "w-2/3 lg:w-7/12",
              "group-hover:transform group-hover:scale-[102%] transition-transform ease-in-out duration-200 origin-bottom"
            )}
          />
          <Image
            src={backImage}
            alt={title}
            className={cn(
              "absolute top-0 right-10 md:right-5 lg:right-10 w-7/12",
              "opacity-60 group-hover:opacity-80 group-hover:translate-x-0.5 origin-top transition ease-in-out duration-200"
            )}
          />
        </Link>
      </GradientCard>
    </TwoColumnGrid>
  );
};

export default MyWork;
