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
        "grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-12 lg:gap-40",
        className
      )}
    >
      {children}
    </div>
  );
};

export default TwoColumnGrid;
