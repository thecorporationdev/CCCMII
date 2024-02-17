import React from "react";

type Props = {};

const TeamDescription = (props: Props) => {
  return (
    <div className="py-8 lg:pr-8 w-full h-full flex items-center justify-center">
      <div className=" bg-purple p-5 h-auto  pb-20 text-white ">
        <div className="w-full">
          <div className="flex">
            <div className="w-full md:w-[70%] lg:w-[50%] font-semibold text-xl lg:text-4xl uppercase">
              30+ panelists and 300 invited attendees
            </div>
          </div>
          <div className="flex justify-end mt-20">
            <div className="w-full md:w-[70%] lg:w-[50%] font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              quidem repudiandae
            </div>
          </div>
        </div>

        <div className="bg-white h-[1px] w-full my-20" />
        <div className="">
          <div className="w-full  font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            quidem repudiandae
          </div>
          <div className="w-full  font-semibold mt-10 uppercase text-base">
            Lorem ipsum dolor
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDescription;
