"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {};

const EnrollNow = (props: Props) => {
  const router = useRouter();
  return (
    <div
      className="flex mt-10 gap-x-2 text-left items-center uppercase font-semibold text-base border-b-[1px] border-black max-w-max"
      onClick={() => router.push("/OurContacts")}
    >
      <h2 className="">enroll now</h2>
      <ArrowRight size={20} />
    </div>
  );
};

export default EnrollNow;
