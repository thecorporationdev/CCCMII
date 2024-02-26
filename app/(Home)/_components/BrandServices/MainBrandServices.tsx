import React from "react";
import Connect from "./Connect";
import Experience from "./Experience";
import Reveal from "@/Animations/Reveal";

type Props = {};

const MainBrandServices = (props: Props) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-y-8 lg:divide-x-[1px] divide-black ContainerPadding py-8">
        <Connect />

        <Experience />
      </div>
    </>
  );
};

export default MainBrandServices;
