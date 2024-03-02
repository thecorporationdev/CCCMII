"use client";
import { ArrowRight } from "lucide-react";
import React from "react";

import Link from "next/link";

type Props = {};

const EnrollNow = (props: Props) => {
  return (
    <Link href={"/OurContacts"}>
      <div className="flex mt-10 gap-x-2 text-left items-center uppercase font-semibold text-base border-b-[1px] border-black max-w-max">
        <h2 className="">enroll now</h2>
        <ArrowRight size={20} />
      </div>
    </Link>
  );
};

export default EnrollNow;
