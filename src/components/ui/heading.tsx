
import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Heading = ({
  level = 1,
  children,
  className,
  id,
  ...props
}: HeadingProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  const HeadingTag = `h${level}` as const;
  
  return React.createElement(
    HeadingTag,
    {
      className: cn(
        "font-bold tracking-tight",
        level === 1 && "text-3xl md:text-4xl lg:text-5xl",
        level === 2 && "text-2xl md:text-3xl lg:text-4xl",
        level === 3 && "text-xl md:text-2xl lg:text-3xl",
        level === 4 && "text-lg md:text-xl",
        level === 5 && "text-base md:text-lg",
        level === 6 && "text-sm md:text-base",
        className
      ),
      id,
      ...props
    },
    children
  );
};
