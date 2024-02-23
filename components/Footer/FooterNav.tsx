"use client";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {};

const FooterNav = (props: Props) => {
  const router = useRouter();
  return (
    <div className="border-[1px] border-white flex  justify-end max-lg:px-4 lg:justify-between w-full flex-1 items-center font-semibold text-base uppercase">
      <div
        className="w-full lg:flex items-center justify-center py-6 hidden cursor-pointer"
        onClick={() => {
          router.push("/OurProfile");
        }}
      >
        About
      </div>
      <div
        className="border-r-[1px] border-l-[1px] border-white w-full lg:flex items-center justify-center py-6 hidden cursor-pointer"
        onClick={() => {
          router.push("/OurCourses");
        }}
      >
        courses
      </div>
      <div className="w-full items-center justify-center hidden lg:flex py-6">
        <div
          className="flex mr-4 gap-x-3 items-center cursor-pointer"
          onClick={() => {
            router.push("/OurContacts");
          }}
        >
          contact us
          {/* <div className="hidden lg:block">
            <Hamburger
              barColor="bg-white hidden lg:block"
              barfunction={() => {}}
            />
          </div> */}
        </div>
      </div>

      {/* <div className="block lg:hidden py-6">
        <Hamburger barColor="bg-white" barfunction={() => {}} />
      </div> */}
    </div>
  );
};

export default FooterNav;
