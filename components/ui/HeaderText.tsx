import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
  className?: string;
};

const HeaderText = (props: Props) => {
  const { title, className } = props;
  return (
    <div
      className={cn(
        `text-3xl sm:text-5xl xl:text-7xl font-medium lg:px-8  max-lg:px-6 tracking-tight uppercase ${className}`
      )}
    >
      {title}
    </div>
  );
};

export default HeaderText;
