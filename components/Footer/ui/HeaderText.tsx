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
        `text-4xl sm:text-5xl xl:text-7xl font-bold lg:px-8  max-lg:px-5 text-black underline-offset-2 tracking-tight uppercase ${className}`
      )}
    >
      {title}
    </div>
  );
};

export default HeaderText;
