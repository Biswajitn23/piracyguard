
import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export const Heading = ({
  level = 1,
  children,
  className,
  ...props
}: HeadingProps) => {
  // Create a valid HTML heading element
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <Tag
      className={cn(
        "font-bold tracking-tight",
        level === 1 && "text-3xl md:text-4xl lg:text-5xl",
        level === 2 && "text-2xl md:text-3xl lg:text-4xl",
        level === 3 && "text-xl md:text-2xl lg:text-3xl",
        level === 4 && "text-lg md:text-xl",
        level === 5 && "text-base md:text-lg",
        level === 6 && "text-sm md:text-base",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
