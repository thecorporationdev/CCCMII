"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

type Props = {};

const ViewAll = (props: Props) => {
  const router = useRouter();
  return (
    <div className="w-full flex lg:justify-end  py-10  lg:px-8">
      <div
        className="text-base font-bold uppercase flex justify-between gap-x-2 items-center cursor-pointer hover:underline hover:underline-offset-1 "
        onClick={() => {
          router.push(`/Blog`);
        }}
      >
        <span>view all</span>
        <ArrowRight size={20} />
      </div>
    </div>
  );
};

export default ViewAll;
