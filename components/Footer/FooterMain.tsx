import Image from "next/image";
import React from "react";
import logo from "@/public/WhiteLogo.svg";
import FooterNav from "./FooterNav";
import FooterContent from "./FooterContent";

type Props = {};

const FooterMain = (props: Props) => {
  return (
    <footer className=" py-4 w-full  ContainerPadding bg-purple pt-10 text-white px-4 ">
      <div className="container">
        <div className="flex gap-x-4 items-center">
          <div className="uppercase md:font-semibold lg:w-[10%] underline underline-offset-4 text-xl md:text-2xl">
            <Image
              src={logo}
              alt="CCCMII logo"
              height={300}
              width={200}
              priority
              className="object-cover"
            />
          </div>
          <FooterNav />
        </div>
        <FooterContent />

        <div className=" flex flex-col lg:flex-row justify-between py-5 lg:items-center font-semibold text-[14px] uppercase gap-y-3">
          <span>&copy; Copyright CCCMII {new Date().getFullYear()}</span>

          <span>privacy policy</span>

          <span className="">site by Austere</span>
        </div>
      </div>

      <div className="h-[30vh] w-full"></div>
    </footer>
  );
};

export default FooterMain;
