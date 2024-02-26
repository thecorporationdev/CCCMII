"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { PiArrowRightThin } from "react-icons/pi";
import { ArrowRight } from "lucide-react";
import Reveal from "@/Animations/Reveal";

type Props = {
  slug: string;
  title?: string;
};

const Readmore = (props: Props) => {
  const { slug, title } = props;
  const router = useRouter();
  return (
    <Reveal delay={0.4}>
      <div
        className="flex mt-10 gap-x-2 items-center uppercase mb-10 bottom-4 font-semibold text-[14px] cursor-pointer hover:underline hover:underline-offset-1"
        onClick={() => {
          router.push(`/Blog/${slug}`);
        }}
      >
        <ArrowRight size={20} />
        <h2 className="">{`${title ? title : "readmore"}`}</h2>
      </div>
    </Reveal>
  );
};

export default Readmore;
