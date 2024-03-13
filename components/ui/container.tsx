import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
  id,
}: {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <section
      id={id}
      className={cn("max-w-7xl mx-auto px-8 md:px-6 w-full", className)}
    >
      {children}
    </section>
  );
};

export default Container;
