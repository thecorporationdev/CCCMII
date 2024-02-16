import React from "react";

type Props = {};

const HeroGrid = (props: Props) => {
  return (
    <div className="border-b-[1px] border-black pb-10 ">
      <div className="flex gap-x-6 lg:px-6 ">
        <div className="flex flex-col gap-y-6 w-full xl:w-[65%] ContainerPadding">
          <div className="h-[350px] bg-gray-200"></div>
          <div className="h-[350px] bg-gray-200"></div>
          <div className="h-[350px] bg-gray-200"></div>
        </div>
        <div className="hidden lg:flex gap-y-6 w-full flex-col flex-1 ContainerPading">
          <div className="h-[350px] bg-gray-200"></div>
          <div className="h-[350px] bg-gray-200"></div>
          <div className="h-[350px] bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroGrid;
