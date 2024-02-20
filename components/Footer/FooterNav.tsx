import React from "react";
import Hamburger from "../Navbar/Hamburger";

type Props = {};

const FooterNav = (props: Props) => {
  return (
    <div className="border-[1px] border-white flex  justify-end max-lg:px-4 lg:justify-between w-full flex-1 items-center font-semibold text-base uppercase">
      <div className="w-full lg:flex items-center justify-center py-6 hidden">
        About
      </div>
      <div className="border-r-[1px] border-l-[1px] border-white w-full lg:flex items-center justify-center py-6 hidden ">
        panelist
      </div>
      <div className="w-full items-center justify-end hidden lg:flex py-6">
        <div className="flex mr-4 gap-x-3 items-center">
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
