import React from "react";
import Hamburger from "./Hamburger";

type Props = {};

const NavMenu = (props: Props) => {
  return (
    <div className="border-[1px] border-black flex  justify-end max-lg:px-4 lg:justify-between w-full flex-1 items-center font-semibold text-base uppercase">
      <div className="w-full lg:flex items-center justify-center py-6 hidden">
        About
      </div>
      <div className="border-r-[1px] border-l-[1px] border-black w-full lg:flex items-center justify-center py-6 hidden ">
        panelist
      </div>
      <div className="w-full items-center justify-center hidden lg:flex py-6">
        sessions
      </div>

      <div className="block lg:hidden py-6">
        <Hamburger />
      </div>
    </div>
  );
};

export default NavMenu;
