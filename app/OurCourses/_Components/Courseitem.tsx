"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import Reveal from "@/Animations/Reveal";

type Props = {
  coursetitle: string;
  tagline: string;
  slug: string;
};

const Courseitem = (props: Props) => {
  const router = useRouter();
  const { coursetitle, tagline, slug } = props;
  return (
    <Reveal>
      <div
        className="border-b-[1px] first:border-t-black  border-b-black  w-full py-10 flex justify-between items-center cursor-pointer"
        onClick={() => {
          router.push(`/OurCourses/${slug}`);
        }}
      >
        <div className="w-full">
          <div className=" text-2xl lg:text-4xl font-semibold uppercase">
            {coursetitle}
          </div>

          <p className=" text-base  font-semibold mt-4 uppercase">{tagline}</p>
        </div>

        <ArrowRight size={50} />
      </div>
    </Reveal>
  );
};

export default Courseitem;
