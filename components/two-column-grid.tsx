import { cn } from "@/lib/utils";

const TwoColumnGrid = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row justify-between w-full gap-6 md:gap-12 lg:gap-40 shrink-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export default TwoColumnGrid;
