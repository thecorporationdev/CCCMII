"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  coursetitle: string;
  tagline: string;
  slug: string;
};

const Courseitem = (props: Props) => {
  const router = useRouter();
  const { coursetitle, tagline, slug } = props;
  return (
    <div
      className="border-t-[1px] border-b-[1px] border-black w-full py-10 flex justify-between items-center cursor-pointer"
      onClick={() => {
        router.push(`/OurCourses/${slug}`);
      }}
    >
      <div className="w-full">
        <div className=" text-2xl lg:text-4xl font-semibold uppercase">
          {coursetitle}
        </div>

        <p className=" text-xl font-semibold mt-4 uppercase">{tagline}</p>
      </div>

      <ArrowRight size={50} />
    </div>
  );
};

export default Courseitem;
