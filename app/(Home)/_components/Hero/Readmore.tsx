"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { PiArrowRightThin } from "react-icons/pi";

type Props = {
  slug: string;
};

const Readmore = (props: Props) => {
  const { slug } = props;
  const router = useRouter();
  return (
    <div
      className="flex mt-4 gap-x-2 items-center uppercase absolute bottom-4 font-semibold text-sm cursor-pointer"
      onClick={() => {
        router.push(`/Courses/${slug}`);
      }}
    >
      <PiArrowRightThin />
      <h2 className="">read more</h2>
    </div>
  );
};

export default Readmore;
