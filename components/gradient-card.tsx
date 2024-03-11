import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

const GradientCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "86 86 94 / 0.4",
          "--bg-color":
            "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
          "--border-color": `linear-gradient(145deg,
            rgb(255 255 255 / 0.5) 0%,
            rgb(255 255 255 / 0) 100%)
      `,
        } as CSSProperties
      }
      className={cn(
        "border border-transparent [background:padding-box_var(--bg-color),border-box_var(--border-color)] bg-opacity-50",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GradientCard;
