import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("max-w-7xl mx-auto px-4 md:px-6 w-full", className)}>
      {children}
    </section>
  );
};

export default Container;
