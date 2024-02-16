import React from "react";
import Connect from "./Connect";
import Experience from "./Experience";

type Props = {};

const MainBrandServices = (props: Props) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-y-8 lg:divide-x-[1px] divide-black ContainerPadding py-8">
        <Connect />
        <Experience />
      </div>
      <div className="flex py-20 items-center justify-center uppercase font-medium text-xl lg:text-2xl border-t-[1px] ` border-black">
        <p>interested in learning more?</p>
      </div>
    </>
  );
};

export default MainBrandServices;
