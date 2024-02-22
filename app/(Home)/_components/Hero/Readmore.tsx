"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { PiArrowRightThin } from "react-icons/pi";
import { ArrowRight } from "lucide-react";

type Props = {
  slug: string;
};

const Readmore = (props: Props) => {
  const { slug } = props;
  const router = useRouter();
  return (
    <div
      className="flex mt-10 gap-x-2 items-center uppercase mb-10 bottom-4 font-semibold text-[14px] cursor-pointer hover:underline hover:underline-offset-1"
      onClick={() => {
        router.push(`/Courses/${slug}`);
      }}
    >
      <ArrowRight size={20} />
      <h2 className="">read more</h2>
    </div>
  );
};

export default Readmore;
